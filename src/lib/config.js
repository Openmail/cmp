/* global __VERSION__ */

import log from './log';

export const VERSION = __VERSION__;

// These options are documented at https://acdn.adnxs.com/cmp/docs/#/config
// We highly recommend reading the options as the defaults may not fit your goals.
const defaultConfig = {
	cookieDomain: null,
	customPurposeListLocation: null, // './purposes.json',
	// The location of the latest vendorlist to use.
	globalVendorListLocation: `https://s.flocdn.com/cmp/${VERSION}/config/vendorlist.json`,
	globalConsentLocation: './portal.html',
	pubVendorListLocation: null,
	storeConsentGlobally: false,
	storePublisherData: false,
	logging: false,
	localization: {},
	forceLocale: null,
	gdprApplies: true,
	gdprAppliesGlobally: false,
	allowedVendorIds: null,
	theme: {},
	version: VERSION,
};

class Config {
	constructor() {
		this.update(defaultConfig);
	}

	update = (updates) => {
		if (updates && updates.globalVendorListLocation === 'https://vendorlist.consensu.org/vendorlist.json') {
			delete updates.globalVendorListLocation;
		}

		if (updates && typeof updates === 'object') {
			const validKeys = Object.keys(defaultConfig);
			const { validUpdates, invalidKeys } = Object.keys(updates).reduce(
				(acc, key) => {
					if (validKeys.indexOf(key) > -1) {
						acc.validUpdates = {
							...acc.validUpdates,
							[key]: updates[key],
						};
					} else {
						acc.invalidKeys.push(key);
					}
					return acc;
				},
				{ validUpdates: {}, invalidKeys: [] }
			);

			Object.assign(this, validUpdates);
			if (invalidKeys.length) {
				log.warn(`Invalid CMP config values not applied: ${invalidKeys.join(', ')}`);
			}
		}
	};
}

export default new Config();
