/**
 * The default set of translated pieces of text indexed by locale.
 * Values from window.__cmp.config.localization will override these
 * per locale.  Empty values will use the english value provided
 * inline in each component.
 */
export default {
	en: {
		intro: {
			title: 'We Value Privacy',
			description: 'By using this site, you agree to our use of cookies and information to provide personalized content and ads and measure and analyze site usage. Click "Learn More" to change your settings.',
			acceptAll: 'OK',
			rejectAll: '',
			showPurposes: 'Learn More'
		},
		details: {
			title: '',
			back: '',
			save: ''
		},
		purposes: {
			active: '',
			inactive: '',
			showVendors: '',
			cookies: {
				menu: '',
				title: '',
				description: ''
			},
			purpose1: {
				description: 'Allow storing or accessing information on a user’s device.'
			},
			purpose2: {
				description: `Allow processing of a user’s data to provide and inform personalised advertising (including delivery, measurement, and reporting) based on a user’s preferences or interests known or inferred from data collected across multiple sites, apps, or devices; and/or accessing or storing information on devices  for that purpose.
				Will include following Features:
				<ul>
					<li>Matching Data to Offline Sources - combining data from offline sources that were initially collected in other contexts.</li>
					<li>Linking Devices - allow processing of a user’s data to connect such user across multiple devices.</li>
					<li>Precise Geographic Location data - allow processing of a user’s precise geographic location data in support of a purpose for which that certain third party has consent.</li>
				</ul>`
			},
			purpose3: {
				description: `Allow processing of a user’s data to deliver content or advertisements and measure the delivery of such content or advertisements, extract insights and generate reports to understand service usage; and/or accessing or storing information on devices for that purpose.
				Will include following Features:
				<ul>
					<li>Matching Data to Offline Sources - combining data from offline sources that were initially collected in other contexts.</li>
					<li>Linking Devices - allow processing of a user’s data to connect such user across multiple devices.</li>
					<li>Precise Geographic Location data - allow processing of a user’s precise geographic location data in support of a purpose for which that certain third party has consent.</li>
				</ul>`
			},
			purpose4: {
				description: `Allow processing of a user’s data to provide and inform personalised content (including delivery, measurement, and reporting) based on a user’s preferences or interests known or inferred from data collected across multiple sites, apps, or devices; and/or accessing or storing information on devices for that purpose.
				Will include following Features:
				<ul>
					<li>Matching Data to Offline Sources - combining data from offline sources that were initially collected in other contexts.</li>
					<li>Linking Devices - allow processing of a user’s data to connect such user across multiple devices.</li>
					<li>Precise Geographic Location data - allow processing of a user’s precise geographic location data in support of a purpose for which that certain third party has consent.</li>
				</ul>`
			},
			purpose5: {
				description: `The collection of information about your use of the content, and combination with previously collected information, used to measure, understand, and report on your usage of the service. This does not include personalisation, the collection of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, i.e. on other service, such as websites or apps, over time.`
			}
		},
		vendors: {
			title: '',
			rejectAll: '',
			acceptAll: '',
			company: '',
			offOn: '',
			description: '',
			moreChoices: ''
		},
		footer: {
			message: 'We Value Privacy',
			description: `
				<span>To help make this website better, to personalize and enhance your content experience, for advertising purposes and to analyze our traffic, we and our partners use technology such as cookies, pixels, and/or beacons to collect certain data. By continuing to use the site or clicking “OK”, you agree to the use of this technology and collecting the data.</span>
			`,
			privacyPolicy: `Please visit our <a target="_blank" href="http://system1.com/terms/privacy.html">Privacy Policy</a> to learn more about
				how we collect and use data. You can modify your settings at any
				time by clicking
			`,
			privacyPolicyButton: 'Manage Privacy Settings',
			consentLink: 'OK'
		}
	},
	de: {
		intro: {
			title: 'Diese Website verwendet Cookies',
			description: 'Wir und unsere Partner verwenden sogenannte Cookies (kleine Textdateien) im Webbrowser um zu verstehen, was unsere Besucher interessiert und entsprechend relevante Inhalte und Werbung anbieten zu können. Zukünftig benötigen wir wahrscheinlich ihr/euer Einverständnis dazu. Ein Beispiel, wie dies aussehen könnte, finden sie/findet ihr unter dieser Erklärung ',
			acceptAll: 'Alle Cookies akzeptieren',
			rejectAll: 'Alle Cookies ablehnen',
			showPurposes: 'Verwendungszwecke zeigen'
		},
		details: {
			title: 'Datenschutzeinstellungen',
			back: 'Abbrechen',
			save: 'Sichern und Beenden'
		},
		purposes: {
			active: 'Aktiv',
			inactive: 'Inaktiv',
			showVendors: '',
			cookies: {
				menu: 'Wie wir Cookies einsetzen',
				title: 'Diese Website verwendet Cookies',
				description: 'Unsere Partner und wir setzen Cookies (kleine Textdateien) und sammeln Informationen während des Surfens im Web in diesem Browser. Dies dient dazu zu verstehen, was unsere Besucher interessiert und entsprechend relevante Inhalte und Werbung anbieten zu können.'
			},
			purpose1: {
				menu: 'Zugriff auf ein Gerät',
				title: 'Zugriff auf ein Gerät',
				description: 'Die Erlaubnis zum Speichern und Abrufen von Informationen auf dem Gerät eines Website-Besuchers.Das ist notwendig, um Cookies im Web-Browser zu speichern und zur Anzeige relevanter Informationen und Werbung abrufen zu können.'
			},
			purpose2: {
				menu: 'Persönlich angepaßte Werbung',
				title: 'Persönlich angepaßte Werbung',
				description: 'Die Erlaubnis, Besucherdaten so zu verarbeiten und/oder zu speichern und abzurufen, dass persönlich angepaßte Werbung angeboten und angezeigt werden kann (dies umfaßt die Auslieferung, Messung und die Erstellung von Berichten darüber). Dies erfolgt auf der Basis bekannter Präferenzen oder Interessen, oder durch das Schließen auf Präferenzen oder Interessen durch die Erfassung von Daten auch über verschiedene Websites, Apps oder Geräte hinweg zu diesem Zweck.'
			},
			purpose3: {
				menu: 'Analysen',
				title: 'Analysen',
				description: 'Die Erlaubnis, Besucherdaten zur Anzeige von Inhalten oder Werbung zu verarbeiten, und zur Messung der Auslieferung solcher Inhalte oder Werbung. Umfasst ist die Gewinnung von Erkenntnissen und die Generierung von Berichten um die Nutzung des angebotenen Service zu verstehen, und/oder das Abrufen oder Speichern von Informationen auf Geräten zu diesem Zweck.'
			},
			purpose4: {
				menu: 'Persönlich angepasste Inhalte',
				title: 'Persönlich angepasste Inhalte',
				description: 'Die Erlaubnis, Besucherdaten zur Anzeige von personalisierten Inhalten zu verarbeiten, und zur Messung der Auslieferung. Umfasst ist die Gewinnung von Erkenntnissen darüber und die Generierung von Berichten dazu. Dies erfolgt auf der Basis bekannter Präferenzen oder Interessen, oder durch das Schließen auf Präferenzen oder Interessen durch die Erfassung von Daten auch über verschiedene Websites, Apps oder Geräte hinweg zu diesem Zweck.'
			}
		},
		vendors: {
			title: 'Unsere Partner',
			rejectAll: 'Alle ablehnen',
			acceptAll: 'Alle akzeptieren',
			company: 'Unternehmen',
			offOn: 'Aus/An',
			description: 'Helfen Sie uns, Ihnen einen besseren Service zu bieten! Unsere Partner verwenden Cookies Ihres Browsers, um quer durch das Web zu verstehen, was Sie interessiert und Ihnen entsprechend relevante Inhalte und Werbung anzubieten.',
			moreChoices: 'Weitere Auswahlmöglichkeiten'
		},
		footer: {
			message: 'Du kannst deine Datenschutz-Einstellungen bearbeiten',
			consentLink: 'hier'
		}
	}
};
