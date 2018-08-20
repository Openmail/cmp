// __cmp('setConsentUiCallback', callback) QUANTCAST
import 'core-js/fn/array/find-index';
import 'core-js/fn/array/filter';
import 'core-js/fn/array/from';
import 'core-js/fn/array/find';
import 'core-js/fn/array/map';
import 'core-js/fn/object/keys';

import cmp from './loader';
import {init} from '../lib/init';
import log from '../lib/log';
import {readCookie, writeCookie} from "../lib/cookie/cookie";

const GDPR_OPT_IN_COOKIE = "gdpr_opt_in";
const GDPR_OPT_IN_COOKIE_MAX_AGE = 33696000;

const defaultConfig = {
	logging: false,
	shouldAutoConsent: false
};

export const initialize = (config, callback) => {
	init(config, cmp).then(() => {
		cmp('addEventListener', 'onSubmit', () => {
			console.log("onSubmit----------------------");
			checkConsent();
		});

		cmp('addEventListener', 'onAutoSubmit', () => {
			console.log("onAutoSubmit----------------------");
			checkConsent(callback);
		});

		const {shouldAutoConsent}  = config;
		checkConsent(callback, shouldAutoConsent);
	});
};

const checkHasConsentedAll = ({ purposeConsents } = {}) => {
	const hasAnyPurposeDisabled = Object.keys(purposeConsents).find(key => {
		return purposeConsents[key] === false;
	});

	const hasAnyPurposeEnabled = Object.keys(purposeConsents).find(key => {
		return purposeConsents[key] === true;
	});
	return !hasAnyPurposeDisabled && hasAnyPurposeEnabled;
};

const checkConsent = (callback = () => {}, shouldAutoConsent) => {
	let errorMsg = "";
	if (!cmp.isLoaded) {
		errorMsg = 'CMP failed to load';
		log.error(errorMsg);
		handleConsentResult({
			errorMsg
		});
	} else if (!window.navigator.cookieEnabled) {
		errorMsg = 'Cookies are disabled. Ignoring CMP consent check';
		log.error(errorMsg);
		handleConsentResult({
			errorMsg
		});
	} else {
		cmp('getVendorList', null, vendorList => {
			cmp('getVendorConsents', null, vendorConsentData => {
				// console.log('getVendorConsents', vendorConsentData.purposeConsents);
				handleConsentResult({
					vendorList,
					vendorConsentData,
					callback,
					shouldAutoConsent
				});
			});
		});
	}
};

const handleConsentResult = ({
	vendorList = {},
	vendorConsentData = {},
	callback,
	errorMsg = "",
	shouldAutoConsent
}) => {
	const hasConsentedCookie = readCookie(GDPR_OPT_IN_COOKIE);
	const { vendorListVersion: listVersion } = vendorList;
	const { created, vendorListVersion } = vendorConsentData;
	if (!created) {
		if (shouldAutoConsent) {
			return (() => {
				log.debug("CMP: auto-consent to all conditions.");
				cmp('acceptAllConsents');
			})();
		}
		errorMsg = 'No consent data found. Show consent tool';
	}
	// if (vendorListVersion !== listVersion) {
	// 	errorMsg = `Consent found for version ${vendorListVersion}, but received vendor list version ${listVersion}. Showing consent tool`;
	// }
	log.debug("FIXME: Unify pubVendorVersion and globalVendorVersion", listVersion, vendorListVersion);
	if (errorMsg) {
		log.debug(errorMsg);
	}

	// if (!listVersion) {
	// 	errorMsg =
	// 		'Could not determine vendor list version. Not showing consent tool';
	// }

	if (callback && typeof callback === "function") {
		// store as 1 or 0
		const hasConsented = checkHasConsentedAll(vendorConsentData);
		// console.log("handleConsentResult", hasConsented, vendorConsentData);
		if (created) {
			writeCookie(GDPR_OPT_IN_COOKIE, hasConsented ? "1" : "0", GDPR_OPT_IN_COOKIE_MAX_AGE);
		}
		const consent = {
			consentRequired: true,
			gdprApplies: true,
			hasConsented,
			vendorList,
			vendorConsentData,
			errorMsg
		};
		callback.call(this, consent);

		if (created && hasConsented !== hasConsentedCookie) {
			cmp.notify('onConsentChanged', consent);
		}
	}
};

// initialize CMP
(() => {
	const initIndex = cmp.commandQueue && cmp.commandQueue.findIndex(({ command }) => {
		return command === 'init';
	});

	// 1. initialize call was queued from global scope (inline cmpLoader)
	if (initIndex >= 0 && cmp.commandQueue[initIndex]) {
		const [{ parameter: config, callback }] = cmp.commandQueue.splice(
			initIndex,
			1
		); // remove "init" from command list because it doesn't exist
		initialize(config, callback);

		// 2. initialize call never queued, so initialize with default Config
	} else {
		initialize(defaultConfig, result => {
			const { errorMsg } = result;
			if (errorMsg) {
				log.debug(errorMsg);
				cmp('showConsentTool');
			}
		});
	}
})();
