<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

**Table of Contents** _generated with [DocToc](https://github.com/thlorenz/doctoc)_

- [system1-cmp](#system1-cmp)
  - [Installation / Use](#installation--use)
  - [API](#api)
    - [Customized API](#customized-api)
      - [init](#init)
    - [showConsentTool](#showconsenttool)
    - [changeLanguage](#changelanguage)
  - [Background and Resources](#background-and-resources)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# system1-cmp

TCF 2.0 Consent Management Platform (CMP) UI tool. We are in the process of validating this CMP, we will update this repo once it passes TCF 2.0 validation.

## Installation / Use

```js
function onConsentUpdated(tcData, isSuccessful) {
	var hasConsentedAll = document.cookie.indexOf('gdpr_opt_in=1') >= 0;
	if (hasConsentedAll) {
		console.log('cmp:onConsentUpdated: all consent achieved', tcData);
	} else {
		console.log('cmp:onConsentUpdated: only some consent achieved', tcData);
	}
}
__tcfapi('addEventListener', 2, onConsentUpdated);
__tcfapi(
	'init',
	2,
	function (store, error) {
		console.log('initialization complete', store, error);
	},
	config
);
```

## API

Read more about [\_\_tcfapi built-in API](https://github.com/InteractiveAdvertisingBureau/GDPR-Transparency-and-Consent-Framework/blob/master/CMP%20JS%20API%20v1.1%20Final.md#what-api-will-need-to-be-provided-by-the-cmp-)

- ping
- addEventListener
- getTCData
- getVendorList

### Customized API

- [init](#init)
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
 */
__tcfapi('init', apiVersion, callback, configurationOptions);
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
