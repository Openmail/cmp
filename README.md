<img align="right" width="50" src="https://s.flocdn.com/@s1/ads-coordinator/reference/fa9924f562bd5be7831df8ca2d285b1f.gif" />

# system1-cmp

TCF 2.0 Consent Management Platform (CMP) UI tool. We are in the process of validating this CMP, we will update this repo once it passes TCF 2.0 validation.

[Reference Page and Demo](https://s.flocdn.com/cmp/test/tcf-2.0.html)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation / Use](#installation--use)
- [API](#api)
  - [Customized API](#customized-api)
    - [init](#init)
  - [showConsentTool](#showconsenttool)
  - [changeLanguage](#changelanguage)
- [Background and Resources](#background-and-resources)
- [TODO](#todo)
- [Support Matrix](#support-matrix)
- [Contributing](#contributing)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation / Use

API signatures have changed from the CMP TCF 1.1, but we've tried to keep the configuration process very similar. See a [working example in codepen](https://codepen.io/potench/pen/GRZZprw).

```html
<script src="https://s.flocdn.com/cmp/test/tcf-2.0-loader.js"></script>
<script>
	__tcfapi('onConsentAllChanged', 2, function (store) {
		const hasConsented = document.cookie.indexOf('gdpr_opt_in=1') >= 0;
		if (hasConsented) {
			console.log('cmp:onConsentAllChanged: all consent achieved', store.tcData.tcString);
		} else {
			console.log('cmp:onConsentAllChanged: only some consent achieved', store.tcData.tcString);
		}
	});

	__tcfapi(
		'init',
		2,
		function (store, error) {
			console.log('initialization complete', store, error);
		},
		{
			gdprApplies: true,
			debugging: true, // console logs
			logging: true, // pixel logs for monitoring
			baseUrl: 'https://s.flocdn.com/cmp/test/config/2.0', // base url for vendor-lists
			versionedFilename: 'vendor-list.json', // vendor list json
			scriptSrc: 'https://s.flocdn.com/cmp/test/tcf-2.0-cmp.js', // cmp SDK
			publisherCountryCode: 'AA',
			narrowedVendors: [], // ex [1,2,3,4],
			theme: {
				primaryColor: '#0099ff',
				textLinkColor: '#0099ff',
				boxShadow: 'none',
				secondaryColor: '#869cc0',
				featuresColor: '#d0d3d7',
			},
			ccpaApplies: true,
			gdprApplies: true,
			consentRequired: true,
		}
	);
</script>
```

## API

Read more about [\_\_tcfapi built-in API](https://github.com/InteractiveAdvertisingBureau/GDPR-Transparency-and-Consent-Framework/blob/master/CMP%20JS%20API%20v1.1%20Final.md#what-api-will-need-to-be-provided-by-the-cmp-)

- ping
- addEventListener
- getTCData
- getVendorList

### Customized API

- [init](#init)
- [onConsentAllChanged](#onConsentAllChanged)
- [offConsentAllChanged](#offConsentAllChanged)
- [showConsentTool](#showConsentTool)
- [changeLanguage](#changeLanguage)

#### init

Calling `__tcfapi('init', 2, (store) => {})` will trigger the seed-file or loader to async load the larger CMP UI application. Once loaded, the cmp library calls `init` function to load additional dependencies and render the application.

`init` callback should be called regardless of internal errors as errors need to be handled gracefully internally to not disrupt the parent website.

```js
/**
 * @param 'init' // required string command
 * @param apiVersion // required number, 2, version of api in use,
 * @param callback // required function, called when init completes, called with `store`
 * @param configurationOptions // optional object, used customize the CMP
 * @return void
 */
__tcfapi('init', apiVersion, callback, configurationOptions);
```

### onConsentAllChanged

Calling `__tcfapi('onConsentAllChanged', 2, (store) => {})` triggers the callback whenever the `gdpr_opt_in` cookie changes.
We track an all-or-nothing `hasConsentedAll` mode so you can more easily toggle an anonymous mode on your website.

```js
/**
 * @param 'onConsentAllChanged' // required string command
 * @param apiVersion // required number, 2, version of api in use,
 * @param callback // required function, called when gdpr_opt_in value changes from undefined (no consent yet), 1 (contented all), 0 (declined anything)
 * @return cachedListener // cache the callback if you need to remove this listener later
 */
const cachedListener = __tcfapi('onConsentAllChanged', apiVersion, callback);
```

### offConsentAllChanged

Calling `__tcfapi('offConsentAllChanged', 2, cachedListener)` removes the listener setup in `__tcfapi('onConsentAllChanged')`.

```js
/**
 * @param 'onConsentAllChanged' // required string command
 * @param apiVersion // required number, 2, version of api in use,
 * @param cachedListener // optional function, include to remove a specific listener that was setup with `onConsentAllChanged`
 * @return void
 */
const cachedListener = __tcfapi('onConsentAllChanged', apiVersion, callback);
__tcfapi('offConsentAllChanged', apiVersion, cachedListener); // remove a specific event listener
__tcfapi('offConsentAllChanged', apiVersion); // remove all `onConsentAllChanged` event listeners
```

### showConsentTool

Calling `__tcfapi('showConsentTool', 2, () => {})` will display the CMP UI.

```js
/**
 * @param 'showConsentTool' // required string command
 * @param apiVersion // required number 2
 * @param callback // required function, called when showConsentTool complete, called with `store`
 */
__tcfapi('showConsentTool', 2, (store) => {});
```

### changeLanguage

Calling `__tcfapi('changeLanguage', 2, () => {})` will use cached version or load language dependencies and re-render the application in the desired language

```js
/**
 * @param 'changeLanguage' // required string command
 * @param apiVersion // required number 2
 * @param callback // required function, called when changeLanguage completes, called with `store` and result
 */
__tcfapi('changeLanguage', 2, (store) => {});
```

## Background and Resources

The UI layer is inspired by this [IAB TCF CMP UI Webinar presentation](https://iabeurope.eu/wp-content/uploads/2020/01/2020-01-21-TCF-v2.0-CMP-UI-Webinar.pdf).

This CMP leverages the [core](https://github.com/InteractiveAdvertisingBureau/iabtcf-es/blob/master/modules/core#iabtcfcore), [cmpapi](https://github.com/InteractiveAdvertisingBureau/iabtcf-es/blob/master/modules/cmpapi#iabtcfcmpapi), and [stub](https://github.com/InteractiveAdvertisingBureau/iabtcf-es/blob/master/modules/stub#iabtcfstub) modules from IAB's official TCF 2.0 JS SDK [iabtcf-es](https://github.com/InteractiveAdvertisingBureau/iabtcf-es).

The component library was forked and edited from the original [TCF 1.0 CMP](https://github.com/appnexus/cmp) by AppNexus.

Following Google's [Additional Consent Mode](https://support.google.com/admanager/answer/9681920?hl=en&ref_topic=9760861) and [Interoperability guidance for vendors](https://support.google.com/admanager/answer/9461778?hl=en) this CMP provides cached versions of the [vendor-list-test-google](https://vendorlist.consensu.org/v2/vendor-list-test-google.json) and standard [vendor-list](https://vendorlist.consensu.org/v2/vendor-list.json) vendor list.

## TODO

- [ ] Write Unit Tests and Integration Tests
- [ ] Docs
- [ ] Internal Localization
- [ ] Layer 2 Purposes
- [ ] Layer 3 Purpose Details
- [ ] Layer 2 Vendors
- [ ] Theming
- [ ] Auto-consent using [TC-string-passing](https://github.com/InteractiveAdvertisingBureau/GDPR-Transparency-and-Consent-Framework/blob/master/TCFv2/IAB%20Tech%20Lab%20-%20Consent%20string%20and%20vendor%20list%20formats%20v2.md#full-tc-string-passing)
- [ ] non-personalized performance and monitoring analytics
- [ ] Validate using the [TCF 2.0 validator extension](https://cmp-validator.consensu.org/chrome-extension/latest/IAB-Europe-CMP-Validator-User-Guide.pdf)
- [ ] Separate polyfill bundle, use babelrc instead of manually importing from core-js

## Support Matrix

- `✔ Level 1`: Tested and fully supported, all functional and visual bugs should be fixed.
- `✢ Level 2`: Untested or Partially tested, functional bugs reported are fixed, visual appearance may differ.
- `✳ Level 3`: A separate solution or codebase exists to support this browser
- `✘ Not Supported`: Untested tested, functional bugs expected and not fixed.

| Browser         | ✔ Level 1       | ✢ Level 2            | ✳ Level 3 | ✘ Not Supported   |
| :-------------- | :-------------- | :------------------- | --------- | ----------------- |
| Chrome          | ✔ Latest        | ✢ Latest - 2         |           |                   |
| Safari          | ✔ Latest        | ✢ Latest - 2         |           |                   |
| Edge            | ✔ Latest        | ✢ Latest - 2 (Win10) |           |                   |
| IE              | ✔ IE11 (Win8.1) | ✢ IE11(Win7 / Metro) |           | ✘ IE10, IE9,...   |
| Firefox         | ✔ Latest        | ✢ Latest - 2         |           |                   |
| iOS Safari      | ✔ Latest        | ✢ Latest - 2         |           |                   |
| Android Chrome  | ✔ Latest        | ✢ Latest - 2         |           |                   |
| Android Browser |                 |                      |           | ✘ Default Browser |
| Opera           |                 |                      |           | ✘                 |

## Contributing

For now the TCF 1.1 and TCF 2.0 CMPs both live in this repository. We will deprecate and remove TCF 1.1 and update all tests against the new 2.0 package. To contribute, make updates to the files in `src/s1`.

```
yarn
yarn dev
# browse to http://localhost:8080/tcf-2.0.html
```
