import debug from './debug';

export default class Store {
	isModalShowing = false;
	theme = {
		primaryColor: '#09f',
		textLinkColor: '#09f',
		boxShadow: 'none',
		secondaryColor: '#869cc0',
		featuresColor: '#d0d3d7',
	};
	narrowedVendors = [];
	gvl;
	gvlPromises;
	tcfApi;

	listeners = new Set();

	constructor(options) {
		Object.assign(this, {
			...options,
		});

		const { tcfApi, gvl } = options;
		const { readyPromise } = gvl;

		readyPromise.then(this.onReady.bind(this));

		tcfApi('addEventListener', 2, this.onEvent.bind(this));
	}

	onReady() {
		debug('onReady', 'figure out stacks and purposes', this);
		if (this.narrowedVendors && this.narrowedVendors.length) {
			this.gvl.narrowVendorsTo(this.narrowedVendors);
		}
	}

	onEvent(tcData, success) {
		debug('store: onEvent', tcData, success);
		this.setState({
			tcData,
		});
	}

	subscribe = (callback) => {
		this.listeners.add(callback);
	};

	unsubscribe = (callback) => {
		this.listeners.delete(callback);
	};

	setState = (state) => {
		Object.assign(this, {
			...state,
		});

		this.listeners.forEach((callback) => callback(this));
	};
}
