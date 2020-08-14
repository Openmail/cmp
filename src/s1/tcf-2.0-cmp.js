import 'core-js/fn/array/find-index';
import 'core-js/fn/array/filter';
import 'core-js/fn/array/from';
import 'core-js/fn/array/find';
import 'core-js/fn/array/map';
import 'core-js/fn/array/includes';
import 'core-js/fn/object/keys';
import 'core-js/fn/object/assign';
import 'core-js/fn/promise';
import 'core-js/fn/array/find-index';
import 'core-js/fn/symbol';
import 'core-js/fn/number/is-integer';
import 'core-js/fn/set';
import 'core-js/fn/string/repeat';
import 'core-js/fn/map';

import { CmpApi } from '@iabtcf/cmpapi';
import { GVL, Vector } from '@iabtcf/core';
import { h, render } from 'preact';

import App from './components/app';
import Store from './lib/store';
import debug from './lib/debug';
import { CMP_GLOBAL_NAME, CUSTOM_API } from './constants';

const { INIT } = CUSTOM_API;

debug.isEnabled = true;
let errorMessage = '';

export const setup = (configOpt) => {
	const config = {
		theme: {},
		narrowedVendors: [],
		cmpId: 38,
		cmpVersion: 3,
		publisherCountryCode: 'AA',
		baseUrl: './config/2.0', // 'https://s.flocdn.com/cmp/test/config/2.0';
		versionedFilename: 'vendor-list.json',
		...configOpt,
	};

	GVL.baseUrl = config.baseUrl;
	GVL.versionedFilename = config.versionedFilename;

	// gvl.changeLanguage('fr'); // Change language
	// 1. customize the CMP API
	const cmpApi = new CmpApi(config.cmpId, 3, false, {
		// Custom commands that overlap with API are treated like middleware. Cool!
		getTCData: (next, tcData) => {
			// Custom Consent Vectors, not stored in tcModel
			const customVendors = new Vector();
			customVendors.set([1, 2]);

			tcData.customVendors = [2, 3].reduce((booleanVector, obj) => {
				booleanVector[obj + ''] = customVendors.has(+obj);
				return booleanVector;
			}, {});
			console.log('custom: getTCData', tcData);
			next(tcData);
		},

		showConsentTool: (callback) => {
			store.toggleShowModal(true);
			callback(store, true);
		},

		changeLanguage: (callback, language) => {
			store.toggleLanguage(language).finally((result) => {
				callback(store, result);
			});
		},

		// Custom init function maps to 1.1 integration
		[INIT]: (callback) => {
			if (!store || !init) {
				callback(store, new Error(`CMP: error initializing: ${errorMessage}`));
			} else {
				// you hoisted this config up for the `setup` step, so you dont need it again
				callback(init());
			}
		},
	});

	// 2. Create the store to persist choices
	const store = new Store({
		gvl: new GVL(),
		cmpApi,
		tcfApi: global.__tcfapi,
		config,
	});

	const init = () => {
		render(<App store={store} />, document.body);
		return store;
	};

	// for testing
	return {
		cmpApi,
		init,
	};
};

// 2. Process Anything in the Queue
export const processCommandQueue = (() => {
	global.onerror = (message, file, line) => {
		console.log('onError', message, file, line);
	};
	const { commandQueue = [] } = window[CMP_GLOBAL_NAME] || {};
	const initIndex = commandQueue.findIndex(({ command }) => command === INIT);
	const initCommandFirst = initIndex >= 0 ? commandQueue.splice(initIndex, 1).concat(commandQueue) : commandQueue;

	initCommandFirst.forEach(({ command, callback, parameter }) => {
		if (command === 'init') {
			// shove the config into GVL creation
			try {
				setup(parameter);
			} catch (e) {
				errorMessage = e;
			}
		}
		window[CMP_GLOBAL_NAME].call(this, command, parameter, callback);
	});
	window[CMP_GLOBAL_NAME].commandQueue = [];
})();
