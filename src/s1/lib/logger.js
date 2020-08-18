/**
 * Optional logger for monitoring/alerting
 */
import { cmp as DPL } from '@s1/dpl';
import { VERSION } from '../constants';
import debug from './debug';

let isLoggerEnabled = false;

export const EVENTS = {
	...DPL.events.adsCoordinator,
};

export const logger = (eventName, payload) => {
	const logger = DPL.events.cmp[eventName];
	const url = window.location.href.split('?')[0]; // only want domain + path
	const loggerPayload = {
		version: VERSION,
		url,
		...payload,
	};

	if (logger && isLoggerEnabled) {
		logger.log(loggerPayload);
	} else {
		debug('logger (isDisabled)', loggerPayload);
	}
};

Object.defineProperty(logger, 'isEnabled', {
	get: function isEnabled() {
		return isLoggerEnabled;
	},
	set: function isEnabled(isEnabled) {
		isLoggerEnabled = isEnabled;
	},
});

logger.prototype.EVENTS = EVENTS;

export default logger;
