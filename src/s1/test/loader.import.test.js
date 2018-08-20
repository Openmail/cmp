/* eslint-disable max-nested-callbacks */

import { expect } from 'chai';
import { init } from '../../lib/init';

const fakeScriptSrc = './fake-loader-src.js';
let cmpLoader;

describe('cmpLoader as import', () => {
	beforeEach(() => {
		// const normalFetch = window.fetch;
		// window.fetch = jest.fn().mockImplementation(src => {
		// 	console.log("found src", src);
		// 	// TODO: import mocked versions of configured json dependencies
		// 	return Promise.resolve(src);
		// });
		cmpLoader = require('../loader');
	});

	afterEach(() => {
		// window.fetch.mockRestore();
		cmpLoader = null;
		global.cmp = null;
		jest.resetModules();
	});

	it('requires initialization', done => {
		expect(cmpLoader).to.not.be.undefined;
		expect(typeof cmpLoader).to.equal('function');
		// expect commandQueue to not exist
		done();
	});

	it('allows you to use cmpLoader as API shim to CMP', done => {
		init({}, cmpLoader).then(() => {
			cmpLoader('showConsentTool', null, result => {
				expect(result).to.equal(true);
				done();
			});
		});
	});



	describe('cmpLoader import and scriptLoading', () => {
		global.cmp = cmpLoader;
		let appendChild;

		beforeEach(() => {
			appendChild = window.document.body.appendChild = jest.fn(() => {
				require('../cmp'); // need to require this here because there is no built version that we can script load
			});
		});

		afterEach(() => {
			appendChild.mockRestore();
			jest.resetModules();
			global.cmp = null;
		});

		it('allows you to use scriptloader', done => {
			global.cmp(
				'init',
				{
					scriptSrc: fakeScriptSrc,
					gdprApplies: true
				},
				() => {
					global.cmp('showConsentTool', null, result => {
						expect(result).to.equal(true);
						done();
					});
				}
			);
		});

		it('auto accepts consents', done => {
			init({
				scriptSrc: fakeScriptSrc,
				gdprApplies: true,
				shouldAutoConsent: true
			}, cmpLoader).then((result) => {
				expect(result.consentRequired).to.be.true;
				expect(result.errorMsg).to.be.empty;
				expect(document.cookie.indexOf('gdpr_opt_in=1')).to.be.above(1);
				done();
			});
		});
		/*
		it('exposes cmp when testing config present', done => {
			global.cmp(
				'init',
				{
					scriptSrc: fakeScriptSrc,
					gdprApplies: true,
					testing: true
				},
				() => {
					expect(global.cmp.cmp).to.exist;
					expect(global.cmp.cmp.store).to.exist;
					done();
				}
			);
		});

		it('updates gdpr_opt_in when consent changes', done => {
			global.cmp(
				'init',
				{
					scriptSrc: fakeScriptSrc,
					gdprApplies: true,
					shouldAutoConsent: true,
					testing: true
				},
				result => {
					expect(result.consentRequired).to.be.true;
					expect(result.errorMsg).to.be.empty;
					expect(document.cookie.indexOf('gdpr_opt_in=1')).to.be.above(1);

					// auto consent results in gdpr_opt_in
					// 1. disable a vendor
					// 2. check to see if gdpr_opt_in=0
					const {
						cmp: { cmp: cmpStub }
					} = global;
					cmpStub.store.selectPurpose(1, false);
					cmpStub.store.persist();

					global.cmp('addEventListener', 'onConsentChanged', () => {
						expect(document.cookie.indexOf('gdpr_opt_in=0')).to.be.above(1);
						done();
					});

					cmpStub.notify('onSubmit');
				}
			);
		});
		*/
	});
});
