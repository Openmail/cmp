/* eslint-disable max-nested-callbacks */
import { expect } from 'chai';
import customPurposeList from '../../docs/assets/purposes.json';
import config from '../config';

import {
	getCookieDomain,
	writeCookie,
	encodeVendorConsentData,
	decodeVendorConsentData,
	encodePublisherConsentData,
	decodePublisherConsentData,
	writeVendorConsentCookie,
	writePublisherConsentCookie,
	readPublisherConsentCookie,
	readVendorConsentCookie,
	convertVendorsToRanges,
	PUBLISHER_CONSENT_COOKIE_NAME,
	VENDOR_CONSENT_COOKIE_NAME
} from './cookie';

jest.mock('../portal');
const mockPortal = require('../portal');

const vendorList = {
	version: 1,
	origin: 'http://ib.adnxs.com/vendors.json',
	purposes: [
		{
			id: 1,
			name: 'Accessing a Device or Browser'
		},
		{
			id: 2,
			name: 'Advertising Personalisation'
		},
		{
			id: 3,
			name: 'Analytics'
		},
		{
			id: 4,
			name: 'Content Personalisation'
		}
	],
	vendors: [
		{
			id: 1,
			name: 'Globex'
		},
		{
			id: 2,
			name: 'Initech'
		},
		{
			id: 3,
			name: 'CRS'
		},
		{
			id: 4,
			name: 'Umbrella'
		},
		{
			id: 10,
			name: 'Pierce and Pierce'
		},
		{
			id: 8,
			name: 'Aperture'
		}
	]
};

describe('cookie', () => {
	const aDate = new Date('2018-07-15 PDT');

	beforeEach(() => {
		// Remove all cookies
		const value = document.cookie.split(';');
		value.forEach(cookie => {
			const parts = cookie.trim().split('=');
			if (parts.length === 2) {
				writeCookie(parts[0], '', 0);
			}
		});
		mockPortal.sendPortalCommand = jest.fn().mockImplementation(() => Promise.resolve());
	});

	it('encodes and decodes the vendor cookie object back to original value', () => {
		const vendorConsentData = {
			cookieVersion: 1,
			cmpId: 1,
			cmpVersion: 1,
			consentScreen: 2,
			consentLanguage: 'DE',
			vendorListVersion: 1,
			maxVendorId: vendorList.vendors[vendorList.vendors.length - 1].id,
			created: aDate,
			lastUpdated: aDate,
			selectedPurposeIds: new Set([1, 2]),
			selectedVendorIds: new Set([1, 2, 4])
		};

		const encodedString = encodeVendorConsentData({ ...vendorConsentData, vendorList });
		const decoded = decodeVendorConsentData(encodedString);

		expect(decoded).to.deep.equal(vendorConsentData);
	});

	it('encodes and decodes the publisher cookie object back to original value', () => {
		const vendorConsentData = {
			cookieVersion: 1,
			cmpId: 1,
			vendorListVersion: 1,
			created: aDate,
			lastUpdated: aDate
		};

		const publisherConsentData = {
			cookieVersion: 1,
			cmpId: 1,
			vendorListVersion: 1,
			publisherPurposeVersion: 1,
			created: aDate,
			lastUpdated: aDate,
			selectedCustomPurposeIds: new Set([2, 3])
		};

		const encodedString = encodePublisherConsentData({
			...vendorConsentData,
			...publisherConsentData,
			vendorList,
			customPurposeList
		});
		const decoded = decodePublisherConsentData(encodedString);

		expect(decoded).to.deep.equal({ ...vendorConsentData, ...publisherConsentData });
	});

	it('writes and reads the local cookie when globalConsent = false', () => {
		config.update({
			storeConsentGlobally: false
		});

		const vendorConsentData = {
			cookieVersion: 1,
			cmpId: 1,
			vendorListVersion: 1,
			created: aDate,
			lastUpdated: aDate
		};

		return writeVendorConsentCookie(vendorConsentData).then(() => {
			return readVendorConsentCookie().then(fromCookie => {
				expect(document.cookie).to.contain(VENDOR_CONSENT_COOKIE_NAME);
				expect(fromCookie).to.deep.include(vendorConsentData);
			});
		});
	});

	it('writes the global cookie when globalConsent = true', () => {
		config.update({
			storeConsentGlobally: true
		});

		const vendorConsentData = {
			cookieVersion: 1,
			cmpId: 1,
			vendorListVersion: 1,
			created: aDate,
			lastUpdated: aDate
		};

		return writeVendorConsentCookie(vendorConsentData).then(() => {
			expect(document.cookie).to.not.contain(VENDOR_CONSENT_COOKIE_NAME);
			expect(mockPortal.sendPortalCommand.mock.calls[0][0].command).to.deep.equal('writeVendorConsent');
		});
	});

	it('reads the global cookie when globalConsent = true', () => {
		config.update({
			storeConsentGlobally: true
		});

		const vendorConsentData = {
			cookieVersion: 1,
			cmpId: 1,
			vendorListVersion: 1,
			created: aDate,
			lastUpdated: aDate
		};

		return readVendorConsentCookie(vendorConsentData).then(() => {
			expect(mockPortal.sendPortalCommand.mock.calls[0][0].command).to.deep.equal('readVendorConsent');
		});
	});

	it('writes and reads the publisher consent cookie', () => {
		config.update({
			storeConsentGlobally: false,
			storePublisherData: true
		});

		const publisherConsentData = {
			cookieVersion: 1,
			cmpId: 1,
			vendorListVersion: 1,
			publisherPurposeVersion: 1,
			created: aDate,
			lastUpdated: aDate
		};

		writePublisherConsentCookie(publisherConsentData);
		const fromCookie = readPublisherConsentCookie();

		expect(document.cookie).to.contain(PUBLISHER_CONSENT_COOKIE_NAME);
		expect(fromCookie).to.deep.include(publisherConsentData);

		config.update({
			cookieDomain: ''
		});
	});

	it('converts selected vendor list to a range', () => {
		const maxVendorId = Math.max(...vendorList.vendors.map(vendor => vendor.id));
		const ranges = convertVendorsToRanges(maxVendorId, new Set([2, 3, 4]));

		expect(ranges).to.deep.equal([
			{
				isRange: true,
				startVendorId: 2,
				endVendorId: 4
			}
		]);
	});

	it('converts selected vendor list to multiple ranges', () => {
		const maxVendorId = Math.max(...vendorList.vendors.map(vendor => vendor.id));
		const ranges = convertVendorsToRanges(maxVendorId, new Set([2, 3, 5, 6, 10]));

		expect(ranges).to.deep.equal([
			{
				isRange: true,
				startVendorId: 2,
				endVendorId: 3
			},
			{
				isRange: true,
				startVendorId: 5,
				endVendorId: 6
			},
			{
				isRange: false,
				startVendorId: 10,
				endVendorId: undefined
			}
		]);
	});

	it('returns null on invalid cookieDomain', () => {
		config.update({
			cookieDomain: '.dummy.com'
		});
		expect(getCookieDomain()).to.equal('');
	});

	it('returns correct subdomain cookieDomain', () => {
		const hostname = 'test.dummy.co.uk';
		const resetLocation = global.window.location;
		delete global.window.location;
		global.window.location = { hostname };
		expect(window.location.hostname).to.equal(hostname);
		config.update({
			cookieDomain: '.dummy.co.uk'
		});
		expect(getCookieDomain()).to.equal(';domain=.dummy.co.uk');

		// reset
		global.window.location = resetLocation;
	});

	it('returns wildcard cookieDomain on naked domain', () => {
		const hostname = 'zoo.com';
		const resetLocation = global.window.location;
		delete global.window.location;
		global.window.location = { hostname };
		expect(window.location.hostname).to.equal(hostname);
		config.update({
			cookieDomain: '.zoo.com'
		});
		expect(getCookieDomain()).to.equal(';domain=.zoo.com');
		global.window.location = resetLocation;
	});

	// special case for localhost and new custom TLDs
	it('returns null when on primary TLD', () => {
		const hostname = 'localhost';
		const resetLocation = global.window.location;
		delete global.window.location;
		global.window.location = { hostname };
		expect(window.location.hostname).to.equal(hostname);
		config.update({
			cookieDomain: 'localhost'
		});
		expect(getCookieDomain()).to.equal(''); // null
		global.window.location = resetLocation;
	});
});
