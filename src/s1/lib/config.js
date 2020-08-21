export const theme = {
	primaryColor: '#0099ff',
	textLinkColor: '#0099ff',
	boxShadow: 'none',
	secondaryColor: '#869cc0',
	featuresColor: '#d0d3d7',
	maxHeightModal: '50vh',
};

export const config = {
	baseUrl: './config/2.0', // 'https://s.flocdn.com/cmp/test/config/2.0';
	business: 'dev',
	canLog: false, // pixel logs for monitoring
	canDebug: false, // console.logs
	cmpId: 38,
	cmpVersion: 3,
	cookieDomain: '',
	ccpaApplies: false,
	experimentId: 'control',
	gdprApplies: false,
	narrowedVendors: [],
	publisherCountryCode: 'US',
	shouldAutoConsent: false, // deprecated feature
	theme,
	versionedFilename: 'vendor-list.json',
};

export default config;
