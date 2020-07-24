import { CmpApi } from '@iabtcf/cmpapi';
import { GVL } from '@iabtcf/core';

GVL.baseUrl = '/config/2.0';

const cmpApi = new CmpApi(38, 3, false);

console.log('cmpApi', cmpApi);
// const tcModel = cmpApi.tcModel;
const gvl = new GVL();
const gvlPromises = [gvl.readyPromise, gvl.changeLanguage('fr')];
Promise.all(gvlPromises).then(() => {
	console.log('gvl ready 1', gvl);

	// update or update and show UI
	cmpApi.update('', true);

	const acceptBtn = document.querySelector('#acceptBtn');
	acceptBtn.addEventListener('click', () => {
		console.log('accept all');
	});
});
