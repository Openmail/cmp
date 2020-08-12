/* global __VERSION__ */

import { CmpApi } from '@iabtcf/cmpapi';
import { GVL, TCModel, TCString, Vector } from '@iabtcf/core';
import { h, render } from 'preact';

import App from './components/app';
import Store from './lib/store';
import debug from './lib/debug';
import listenable from './lib/listenable';
import { CUSTOM_EVENTS, CMP_GLOBAL_NAME, VERSION } from './constants';

debug.isEnabled = true;

export const setup = (configOpt) => {
	const config = {
		theme: {},
		narrowedVendors: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		cmpId: 38,
		cmpVersion: 3,
		publisherCountryCode: 'AA',
		// baseUrl: './config/2.0', // 'https://s.flocdn.com/cmp/test/config/2.0';
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

		subscribe: (callback, eventStr) => {
			if (CUSTOM_EVENTS[eventStr]) {
				listenable.on(eventStr, callback);
			} else {
				console.err;
			}
		},

		unsubscribe: (callback, eventStr) => {
			listenable.off(eventStr, callback);
		},

		emit: (eventStr, payload) => {
			listenable.emit(eventStr, payload);
		},

		showConsentTool: (callback, other) => {
			console.log('custom: showConsentTool: callback', callback, other);
		},

		// Custom init function maps to 1.1 integration
		init: (callback, config) => {
			console.log('custom: init', callback, config);
			// you hoisted this config up for the `setup` step, so you dont need it again
			callback(init());
		},
	});

	// 2. Create the store to persist choices
	const store = new Store({
		gvl: new GVL(),
		cmpApi,
		tcfApi: __tcfapi,
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
const processCommandQueue = (() => {
	const { commandQueue = [] } = window[CMP_GLOBAL_NAME] || {};
	console.log('processCommandQueue', commandQueue);
	commandQueue.forEach(({ command, callback, parameter }) => {
		if (command === 'init') {
			// shove the config into GVL creation
			setup(parameter);
		}
		window[CMP_GLOBAL_NAME].call(this, command, parameter, callback);
	});
	window[CMP_GLOBAL_NAME].commandQueue = [];
})();
