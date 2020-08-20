export const theme = {
	primaryColor: '#0099ff',
	textLinkColor: '#0099ff',
	boxShadow: 'none',
	secondaryColor: '#869cc0',
	featuresColor: '#d0d3d7',
	maxHeightModal: '50vh',
};

export const config = {
	theme,
	canLog: false, // pixel logs for monitoring
	canDebug: false, // console.logs
	shouldAutoConsent: false, // deprecated feature
	cmpId: 38,
	cmpVersion: 3,
	publisherCountryCode: 'US',
	baseUrl: './config/2.0', // 'https://s.flocdn.com/cmp/test/config/2.0';
	business: 'system1',
	versionedFilename: 'vendor-list.json',
	narrowedVendors: [],
	cookieDomain: '',
	experimentId: 'control',
	ccpaApplies: false,
	gdprApplies: false,
};

export default config;
