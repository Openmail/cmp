/* global __VERSION__ */

export const CUSTOM_API = {
	INIT: 'init',
	ON_CONSENT_CHANGED: 'onConsentAllChanged',
	OFF_CONSENT_CHANGED: 'offConsentAllChanged',
};

export const CUSTOM_EVENTS = {
	CONSENT_ALL_CHANGED: 'cmpConsentAllChanged',
	ERROR: 'cmpError',
};

export const CMP_GLOBAL_NAME = 'cmp';
export const VERSION = __VERSION__;

export const LANGUAGES = [
	{ display: 'English', code: 'en' },
	{ display: 'Bulgarian', code: 'bg' },
	{ display: 'Catalan', code: 'ca' },
	{ display: 'Czech', code: 'cs' },
	{ display: 'Danish', code: 'da' },
	{ display: 'German', code: 'de' },
	{ display: 'Greek', code: 'el' },
	{ display: 'Spanish', code: 'es' },
	{ display: 'Estonian', code: 'et' },
	{ display: 'Finnish', code: 'fi' },
	{ display: 'French', code: 'fr' },
	{ display: 'Croatian', code: 'hr' },
	{ display: 'Hungarian', code: 'hu' },
	{ display: 'Italian', code: 'it' },
	{ display: 'Japanese', code: 'ja' },
	{ display: 'Lithuanian', code: 'lt' },
	{ display: 'Latvian', code: 'lv' },
	{ display: 'Maltese', code: 'mt' },
	{ display: 'Dutch', code: 'nl' },
	{ display: 'Norwegian', code: 'no' },
	{ display: 'Polish', code: 'pl' },
	{ display: 'Portuguese', code: 'pt' },
	{ display: 'Romanian', code: 'ro' },
	// { display: 'Serbian Cryllic', code: 'sr-cyrillic' }, // currently not supported in core
	// { display: 'Serbian Latin', code: 'sr-latin' },// currently not supported in core
	{ display: 'Russian', code: 'ru' },
	{ display: 'Slovak', code: 'sk' },
	{ display: 'Slovenian', code: 'sl' },
	{ display: 'Swedish', code: 'sv' },
	{ display: 'Turkish', code: 'tr' },
	{ display: 'Chinese', code: 'zh' },
];