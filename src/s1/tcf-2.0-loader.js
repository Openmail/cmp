/* global __tcfapi */

const cmpstub = require('@iabtcf/stub');

cmpstub();

if (__tcfapi) {
	const queue = __tcfapi();
	console.log('queue', queue); // [ ['command', 2, callback], ...]
}
