import { TCModel, TCString } from '@iabtcf/core';
import cookie from './cookie';
import debug from './debug';
import { LANGUAGES, CUSTOM_EVENTS } from '../constants';

export const mock = {
	config: {
		theme: {},
	},
	displayLayer1: {},
	gvl: {},
	tcModel: {},
	tcData: {},
	subscribe: () => undefined,
};

export default class Store {
	config = {
		theme: {
			primaryColor: '#0099ff',
			textLinkColor: '#0099ff',
			boxShadow: 'none',
			secondaryColor: '#869cc0',
			featuresColor: '#d0d3d7',
		},
		canLog: true,
		canDebug: false,
		narrowedVendors: [],
		cookieDomain: '',
	};

	displayLayer1;
	isModalShowing = false;
	hasConsentedAll;
	gvl;
	cmpApi;
	tcfApi;
	tcModel;
	tcData;
	LANGUAGES = LANGUAGES;
	listeners = new Set();

	constructor(options) {
		Object.assign(this, {
			...options,
		});
		const { tcfApi, gvl } = options;
		const { readyPromise } = gvl;
		readyPromise.then(this.onReady.bind(this));
		tcfApi('addEventListener', 2, this.onEvent.bind(this));
	}

	setDisplayLayer1() {
		let bestMatchingStackCount = 0;
		let bestMatchingStackId = 0;

		const { stacks, vendors } = this.gvl;
		const allPurposes = new Set();
		const allSpecialPurposes = new Set();
		const allSpecialFeatures = new Set();
		const allFeatures = new Set();

		Object.keys(vendors).forEach((id) => {
			const { features, legIntPurposes, purposes, specialFeatures, specialPurposes } = vendors[id];
			purposes
				.filter((purpose) => !legIntPurposes.includes(purpose)) // filter out legitInterest
				// TODO @potench // filter out flexiblePurposes from layer1?
				// .filter(purpose => !legIntPurposes.includes(purpose))
				.forEach(allPurposes.add, allPurposes);
			specialFeatures.forEach(allSpecialFeatures.add, allSpecialFeatures);
			specialPurposes.forEach(allSpecialPurposes.add, allSpecialPurposes);
			features.forEach(allFeatures.add, allFeatures);
		});

		Object.keys(stacks).forEach((id) => {
			const stack = stacks[id];
			const { purposes, specialFeatures } = stack;
			const purposeMatches = purposes.filter((purpose) => allPurposes.has(purpose));
			const specialFeatureMatches = specialFeatures.filter((specialFeature) => allSpecialFeatures.has(specialFeature));
			const totalMatches = purposeMatches.length + specialFeatureMatches.length;

			if (!bestMatchingStackCount || totalMatches > bestMatchingStackCount) {
				bestMatchingStackId = id;
				bestMatchingStackCount = totalMatches;
			}
		});

		const filteredStack = stacks[bestMatchingStackId];
		const filteredPurposes = [...allPurposes].filter(
			(purpose) => !filteredStack || !filteredStack.purposes.includes(purpose)
		);

		this.setState({
			displayLayer1: {
				stack: bestMatchingStackId,
				purposes: filteredPurposes,
				specialFeatures: [...allSpecialFeatures],
				specialPurposes: [...allSpecialPurposes],
				features: [...allFeatures],
			},
		});
	}

	isReady = false;
	readyPromise = new Promise((resolve, reject) => {
		this.onReadyResolve = () => {
			this.isReady = true;
			resolve();
		};
		this.onReadyReject = reject;
	}); // fired after gvl.readyPromise and tcData updated if persisted

	onReady() {
		const { narrowedVendors, cmpId, cmpVersion, publisherCountryCode } = this.config;
		const { vendors } = this.gvl;

		if (narrowedVendors && narrowedVendors.length) {
			const filteredNarrowedVendors = narrowedVendors.filter((id) => vendors.hasOwnProperty(id));
			this.gvl.narrowVendorsTo(filteredNarrowedVendors);
		}

		const tcModel = new TCModel(this.gvl);
		let persistedTcModel;
		let encodedTCString = cookie.readVendorConsentCookie();

		try {
			persistedTcModel = encodedTCString && TCString.decode(encodedTCString);
		} catch (e) {
			console.error('unable to decode tcstring');
		}

		// Merge persisted model into new model in memory
		Object.assign(
			tcModel,
			{
				cmpId,
				cmpVersion,
				publisherCountryCode,
			},
			persistedTcModel || {}
		);

		// Handle a return user with persistedConsent vs a user that has not saved preferences
		if (!persistedTcModel) {
			tcModel.setAllVendorLegitimateInterests();
			tcModel.setAllPurposeLegitimateInterests();
			// tcModel.setAllPurposeConsents();
			// tcModel.setAllVendorConsents();
			// tcModel.setAllSpecialFeatureOptins();
			// tcModel.setAll();

			// persist the model but dont update the CMP until a user selects an option
			this.updateCmp(tcModel, true);
		} else {
			// model is already persisted
			this.updateCmp(tcModel, false);
		}
		this.setDisplayLayer1();
	}

	onEvent(tcData, success) {
		if (!success) {
			console.log('onEvent error', success);
			if (!this.isReady) {
				this.onReadyReject(new Error('store: initialzation error'));
			}
			return;
		}

		this.setState({
			tcData,
		});

		if (!this.isReady) {
			this.onReadyResolve(this);
		}
	}

	subscribe = (callback) => {
		this.listeners.add(callback);
	};

	unsubscribe = (callback) => {
		this.listeners.delete(callback);
	};

	updateCmp = (tcModelOpt, shouldShowModal, shouldSaveCookie) => {
		console.log('updateCmp: ', tcModelOpt, shouldShowModal, shouldSaveCookie);
		const tcModel = this.autoToggleVendorConsents(tcModelOpt);
		const isModalShowing = shouldShowModal !== undefined ? shouldShowModal : this.isModalShowing;
		const encodedTCString = TCString.encode(tcModel);

		const { vendorConsents } = tcModel;
		const { vendors } = this.gvl;
		// not all consented if you find 1 key missing
		const hasConsentedAll = !Object.keys(vendors).find((key) => !vendorConsents.has(key));

		this.setState(
			{
				tcModel,
				isModalShowing,
				hasConsentedAll,
			},
			true
		);

		this.cmpApi.update(encodedTCString, isModalShowing);

		if (shouldSaveCookie) {
			const { cookieDomain } = this.config;
			const hasConsentedAllCookie = cookie.readConsentedAllCookie();
			const normalizeHasConsentedAll = hasConsentedAll ? '1' : '0';
			console.log('hasConsentedAllCookie', hasConsentedAllCookie, typeof hasConsentedAllCookie);
			cookie.writeVendorConsentCookie(encodedTCString, cookieDomain);
			cookie.writeConsentedAllCookie(hasConsentedAll ? '1' : '0', cookieDomain);
			console.log('should dispatchEvent?!', hasConsentedAllCookie, hasConsentedAll);
			if (hasConsentedAllCookie !== normalizeHasConsentedAll) {
				global.dispatchEvent(
					new MessageEvent(CUSTOM_EVENTS.CONSENT_ALL_CHANGED, {
						data: {
							store: {
								...this.store,
							},
						},
					})
				);
			}
		}
	};

	setState = (state = {}, isQuiet = false) => {
		Object.assign(this, {
			...state,
		});

		if (!isQuiet) {
			this.listeners.forEach((callback) => callback(this));
		}
	};

	getStackOptin(id) {
		const { stacks } = this.gvl;
		const { purposeConsents, specialFeatureOptins } = this.tcModel;
		const stack = stacks[id];
		let isOptedIn = false;
		if (stack) {
			const { purposes, specialFeatures } = stack;
			isOptedIn = !purposes.find((id) => !purposeConsents.has(id)); // look for any unconsented purpose
			// check specialFeatures
			if (isOptedIn) {
				isOptedIn = !specialFeatures.find((id) => !specialFeatureOptins.has(id));
			}
		}
		return isOptedIn;
	}

	save() {
		// close the cmp and persist settings
		this.updateCmp(null, false, true);
	}

	toggleAll() {
		const tcModel = this.tcModel.clone();
		tcModel.setAll();
		this.updateCmp(tcModel, false, true);
		return tcModel;
	}

	togglePurposeConsents(ids, shouldConsent, tcModelOpt) {
		const tcModel = tcModelOpt || this.tcModel.clone();
		const { purposeConsents } = tcModel;
		ids.map((id) => {
			if (!shouldConsent && (purposeConsents.has(id) || shouldConsent === false)) {
				purposeConsents.unset(id);
			} else {
				purposeConsents.set(id);
			}
		});

		if (!tcModelOpt) {
			this.updateCmp(tcModel);
		}
		return tcModel;
	}

	toggleSpecialFeatureOptins(ids, shouldConsent, tcModelOpt) {
		const tcModel = tcModelOpt || this.tcModel.clone();
		const { specialFeatureOptins } = tcModel;
		ids.map((id) => {
			if (!shouldConsent && (specialFeatureOptins.has(id) || shouldConsent === false)) {
				specialFeatureOptins.unset(id);
			} else {
				specialFeatureOptins.set(id);
			}
		});

		if (!tcModelOpt) {
			this.updateCmp(tcModel);
		}
		return tcModel;
	}

	/**
	 * TODO: double check this, are we supposed to optIn for a vendor based on purposes/features opt-ins?
	 */
	autoToggleVendorConsents(tcModelOpt) {
		const tcModel = tcModelOpt || this.tcModel.clone();
		// NOTE: vendorIds are numbers, vendors[key] is a string *
		const { vendors } = this.gvl;
		const { purposeConsents, specialFeatureOptins } = tcModel;

		// if purposes and special features are consented for this vendor, then consent the vendor
		Object.keys(vendors).forEach((key) => {
			const vendor = vendors[key]; // number to string coersion
			if (vendor) {
				const { purposes, specialFeatures } = vendor;

				const isMissingPurposesConsent = purposes.length && purposes.find((purpose) => !purposeConsents.has(purpose));
				const isMissingSpecialFeaturesConsent =
					specialFeatures.length && specialFeatures.find((specialFeature) => !specialFeatureOptins.has(specialFeature));

				if (isMissingPurposesConsent || isMissingSpecialFeaturesConsent) {
					tcModel.vendorConsents.unset(key); // number
				} else {
					tcModel.vendorConsents.set(key); // number
				}
			}
		});
		return tcModel;
	}

	toggleShowModal(shouldShowModal) {
		console.log('toggleShowModal', shouldShowModal);
		this.updateCmp(null, true);
	}

	toggleStackConsent(id) {
		const { stacks } = this.gvl;
		const stack = stacks[id];
		if (stack) {
			const shouldConsent = !this.getStackOptin(id);
			const { purposes, specialFeatures } = stack;
			let tcModel = this.tcModel.clone();
			tcModel = this.togglePurposeConsents([...purposes], shouldConsent, tcModel);
			this.toggleSpecialFeatureOptins([...specialFeatures], shouldConsent, tcModel);
			this.updateCmp(tcModel);
		}
	}

	toggleLanguage(language) {
		return this.gvl.changeLanguage(language).then(() => {
			const { language } = this.gvl;
			console.log('language', language);
			const tcModel = this.tcModel.clone();
			tcModel.consentLanguage = language;
			this.updateCmp(tcModel, true);
		});
	}
}