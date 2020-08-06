import { CmpApi } from '@iabtcf/cmpapi';
import { GVL, TCModel, TCString, Vector } from '@iabtcf/core';
import { h, render } from 'preact';

import App from './components/app';
import Store from './lib/store';
import debug from './lib/debug';

GVL.baseUrl = '/config/2.0';

// Custom Consent Vectors, not stored in tcModel
const customVendors = new Vector();
customVendors.set([1, 2]);

debug.isEnabled = true;

//
const cmpApi = new CmpApi(38, 3, false, {
	getTCData: (next, tcData) => {
		// custom commands that overlap with API are treated like middleware. Cool!
		tcData.customVendors = [2, 3].reduce((booleanVector, obj) => {
			booleanVector[obj + ''] = customVendors.has(+obj);
			return booleanVector;
		}, {});
		// console.log('getTCData custom', tcData);
		next(tcData);
	},
	init: (next, tcData) => {
		// console.log('inner init', next, tcData);
		init();
		next(tcData);
	},
});

const tcModel = cmpApi.tcModel;
const gvl = new GVL();

// Change language
// const gvlPromises = [gvl.readyPromise, gvl.changeLanguage('fr')];
const gvlPromises = [gvl.readyPromise];
// tcModel.gvl = gvl;

Promise.all(gvlPromises).then(() => {
	console.log('gvl ready 1 gvl', gvl);
	const purposes = gvl.purposes;
	const vendors = gvl.vendors;
	const specialFeatures = gvl.specialFeatures;

	// console.log('purposes', purposes);
	// console.log('vendors', vendors);
	// console.log('specialFeatures', specialFeatures);
	// console.log('policyVersion', gvl.tcfPolicyVersion);
	// update or update and show UI
	const encodedTCString = ''; // gdprApplies = true
	// const encodedTCString = 'encoded-string-example'; // gdprApplies = true
	// const encodedTCString = null; // gdprApplies = false

	gvl.narrowVendorsTo([2]);

	// const vendorMap = gvl.getVendorsWithConsentPurpose(1);
	// logs all vendor ids who have specified they require consent for purpose 1
	// Object.keys(vendorMap).forEach(console.log);

	cmpApi.update('', true);

	// will only show the Vendor objects for 1, 2, and 3
	// console.log('Individual Vendor Consents', gvl.vendors);

	// will only return the vendors within the narrowed vendor list
	const vendorsWithLegInt2 = gvl.getVendorsWithLegIntPurpose(2);

	const acceptBtn = document.querySelector('#acceptBtn');
	acceptBtn.addEventListener('click', () => {
		console.log('accept all');
		const tcModel = new TCModel(gvl);
		tcModel.cmpId = 38;
		tcModel.cmpVersion = 3;
		tcModel.publisherCountryCode = 'AA';
		// tcModel.policyVersion = gvl.tcfPolicyVersion; // set by gvl constructor

		// tcModel.setAllPurposeConsents();
		// tcModel.setAllVendorConsents();
		// tcModel.setAllSpecialFeatureOptins();
		// tcModel.setAllVendorLegitimateInterests();
		// tcModel.setAllPurposeLegitimateInterests();

		// 1. Consent All
		tcModel.setAll();

		// 2. Modify individual vendor
		tcModel.vendorConsents.unset(1);

		tcModel.customVendors = new Vector();
		tcModel.customVendors.set([1, 2]);

		// tcModel.customVendors = [1].reduce((booleanVector, obj) => {
		// 	booleanVector[obj + ''] = customVendors.has(+obj);
		// 	return booleanVector;
		// }, {});

		// console.log('tcModel', tcModel);

		// 4. Encode string after setting
		const encodedTCString = TCString.encode(tcModel);
		cmpApi.update(encodedTCString, false);
	});
});

export const init = (
	configOptions = {
		theme: {},
		narrowedVendors: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
	}
) => {
	const store = new Store({
		gvl,
		tcfApi: __tcfapi,
		...configOptions,
	});

	render(<App store={store} />, document.body);
};
