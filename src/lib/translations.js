/* eslint-disable quotes */
/**
 * The default set of translated pieces of text indexed by locale.
 * Values from window.__cmp.config.localization will override these
 * per locale.  Empty values will use the english value provided
 * inline in each component. Because the purpose definitions will change,
 * you will need to update the translations regularly. As a consequence, this
 * translations.js file is very important to keep up to date.
 */
export default {
	en: {
		banner: {
			title: 'Privacy Choices',
			description:
				'By using this site, you agree to our use of cookies and information to provide personalized content and ads and measure and analyze site usage. Click "Learn More" to change your settings.',
			links: {
				data: {
					title: 'Information that may be used',
					description: `
						<ul>
							<li>Type of browser and its settings</li>
							<li>Information about the device's operating system</li>
							<li>Cookie information</li>
							<li>Information about other identifiers assigned to the device</li>
							<li>The IP address from which the device accesses a client's website or
								mobile application
							</li>
							<li>Information about the user's activity on that device, including web
								pages and mobile apps visited or used
							</li>
							<li>Information about the geographic location of the device when it
								accesses
								a website or mobile application
							</li>
						</ul>
					`,
				},
				purposes: {
					title: 'Purposes for storing information',
				},
				manage: 'Learn More' /* Learn More */,
				accept: 'Ok, Got It' /* OK */,
			},
		},
		summary: {
			title: 'Learn more about how information is being used?',
			description: `We and select companies may access and use your information 
				for the below purposes. You may customize your choices below or 
				continue using our site if you're OK with the purposes.`,
			detailLink: 'Learn More & Set Preferences',
			who: {
				title: 'Who is using this information?',
				description: `We and pre-selected companies will use your information. You can see
					each company in the links above or`,
				link: 'see the complete list here.',
			},
			what: {
				title: 'What information is being used?',
				description: 'Different companies use different information,',
				link: 'see the complete list here.',
			},
		},
		details: {
			back: 'Back',
			save: 'Ok, Got It',
		},
		purposes: {
			title: '',
			description: '',
			back: '',
			globalOptoutDescription: `
				<p>
					Depending on the type of data they collect, use, and process and other factors including privacy by design,
					certain partners rely on your consent while others require you to opt-out. For information on each vendor and to
					exercise your choices, see below. Or to opt-out, visit the
					<a href="http://optout.networkadvertising.org/?c=1#!/" target="_blank">
						NAI
					</a>
					,
					<a href="http://optout.aboutads.info/?c=2#!/" target="_blank">
						DAA
					</a>
					, and
					<a href="http://youronlinechoices.eu/" target="_blank">
						EDAA
					</a>
					sites.
				</p>
			`,
			purpose1: {
				description: 'Allow storing or accessing information on a user’s device.',
				menu: 'Information storage and access',
				optoutDescription: '',
			},
			purpose2: {
				description: `Allow processing of a user’s data to provide and inform personalised advertising (including delivery, measurement, and reporting) based on a user’s preferences or interests known or inferred from data collected across multiple sites, apps, or devices; and/or accessing or storing information on devices  for that purpose.
				Will include following Features:
				<ul>
					<li>Matching Data to Offline Sources - combining data from offline sources that were initially collected in other contexts.</li>
					<li>Linking Devices - allow processing of a user’s data to connect such user across multiple devices.</li>
					<li>Precise Geographic Location data - allow processing of a user’s precise geographic location data in support of a purpose for which that certain third party has consent.</li>
				</ul>`,
				menu: 'Personalisation',
			},
			purpose3: {
				description: `Allow processing of a user’s data to deliver content or advertisements and measure the delivery of such content or advertisements, extract insights and generate reports to understand service usage; and/or accessing or storing information on devices for that purpose.
				Will include following Features:
				<ul>
					<li>Matching Data to Offline Sources - combining data from offline sources that were initially collected in other contexts.</li>
					<li>Linking Devices - allow processing of a user’s data to connect such user across multiple devices.</li>
					<li>Precise Geographic Location data - allow processing of a user’s precise geographic location data in support of a purpose for which that certain third party has consent.</li>
				</ul>`,
				menu: 'Ad selection, delivery, reporting',
			},
			purpose4: {
				description: `Allow processing of a user’s data to provide and inform personalised content (including delivery, measurement, and reporting) based on a user’s preferences or interests known or inferred from data collected across multiple sites, apps, or devices; and/or accessing or storing information on devices for that purpose.
				Will include following Features:
				<ul>
					<li>Matching Data to Offline Sources - combining data from offline sources that were initially collected in other contexts.</li>
					<li>Linking Devices - allow processing of a user’s data to connect such user across multiple devices.</li>
					<li>Precise Geographic Location data - allow processing of a user’s precise geographic location data in support of a purpose for which that certain third party has consent.</li>
				</ul>`,
				menu: 'Content selection, delivery, reporting',
			},
			purpose5: {
				description:
					'The collection of information about your use of the content, and combination with previously collected information, used to measure, understand, and report on your usage of the service. This does not include personalisation, the collection of information about your use of this service to subsequently personalise content and/or advertising for you in other contexts, i.e. on other service, such as websites or apps, over time.',
				menu: 'Measurement',
			},
		},
		vendors: {
			title: 'Who is using this information?',
			description:
				'Here is the complete list of companies who will use your information. Please view their privacy policy for more details.',
			accept: 'Allow',
			acceptAll: '"Allow All',
			acceptNone: 'Disallow All',
			optOut: 'requires opt-out',
			back: 'Customize how these companies use data from the previous page',
		},
		footer: {
			message: `
				<h2>We Value Privacy</h2>
			`,
			description: `
				<span>
					To help make this website better, to personalize and enhance 
					your content experience, for advertising purposes and to analyze 
					our traffic, we and our partners use technology such as cookies,  
					pixels, and/or beacons to collect certain data. By 
					continuing to use the site or clicking “OK”, you agree to the 
					use of this technology and collecting the data.
				</span>
			`,
			privacyPolicy: `
				<span>
					Please visit our 
					<a target="_blank" href="http://system1.com/terms/privacy.html">
						Privacy Policy
					</a> 
					to learn more about how we collect and use data. You can modify 
					your settings at any time by clicking
				</span>
			`,
			privacyPolicyButton: 'Manage Privacy Settings',
			consentLink: 'OK',
		},
	},
	es: {
		banner: {
			title: 'Opciones de Privacidad',
			description: `
				Al usar este sitio, usted acepta que usemos cookies e información para suministrarle contenido y anuncios personalizados y medir y analizar el uso del sitio. Haga clic en "Más información" para cambiar su configuración
			`,
			links: {
				data: {
					title: 'Información que puede ser utilizada',
					description: `
						<ul>
							<li>Tipo de navegador y su configuración</li>	
							<li>Información sobre el sistema operativo del dispositivo</li>	
							<li>Información de las cookies</li>	
							<li>Información sobre otros identificadores asignados al dispositivo</li>	
							<li>Dirección IP desde la que el dispositivo accede al sitio web del cliente o	
								aplicación móvil
							</li>	
							<li>Información sobre la actividad del usuario en ese dispositivo, incluyendo las páginas	
								web y aplicaciones móviles visitadas o utilizadas
							</li>	
							<li>Información sobre la ubicación geográfica del dispositivo cuando	
								accede a
								un sitio web o una aplicación móvil
							</li>	
						</ul>		
					`,
				},
				purposes: {
					title: 'Propósitos del almacenamiento de información',
				},
				manage: 'Más Información',
				accept: '¡Listo!',
			},
		},
		summary: {
			title: '¿Desea más información sobre cómo se utiliza la información?',
			description: `Nosotros, y algunas empresas seleccionadas, podemos acceder y utilizar su información					
				para los siguientes propósitos. Puede personalizar sus opciones a continuación o				
				continar usando nuestro sitio, si está de acuerdo con los propósitos.
			`,
			detailLink: 'Más información y establecer preferencias',
			who: {
				title: '¿Quién está usando esta información?',
				description: `
					Nosotros y las empresas preseleccionadas usaremos su información. Puede ver				
					cada empresa en los enlaces de arriba o
				`,
				link: 'ver la lista completa aquí.',
			},
			what: {
				title: '¿Qué información se está utilizando?',
				description: 'Diferentes empresas usan diferente información,',
				link: 'vea la lista completa aquí.',
			},
		},
		details: {
			back: 'Atrás',
			save: '¡Listo!',
		},
		purposes: {
			title: '',
			description: '',
			back: '',
			globalOptoutDescription: `
				<p>				
					Dependiendo del tipo de datos que recojan, usen y procesen, así como de otros factores, incluyendo la privacidad deliberada,			
					algunos socios asumen su consentimiento mientras que otros requieren que usted se excluya. Para obtener información sobre cada proveedor y para			
					ejercer sus opciones, vea abajo. O para optar por no participar, visite			
					<a href="http://optout.networkadvertising.org/?c=1#!/" target="_blank">			
						NAI		
					</a>			
					,			
					<a href="http://optout.aboutads.info/?c=2#!/" target="_blank">			
						DAA		
					</a>
					, and	
					<a href="http://youronlinechoices.eu/" target="_blank">			
						EDAA
					</a>
					sites.			
				</p>				
			`,
			purpose1: {
				description: 'Permitir el almacenamiento o el acceso a la información en el dispositivo de un usuario.',
				menu: 'Prueba de almacenamiento y acceso a la información',
				optoutDescription: '',
			},
			purpose2: {
				description: `
					Permitir el procesamiento de los datos de un usuario para proporcionar y modelar publicidad personalizada (incluidas la emisión, la medición y la presentación de informes) basada en las preferencias o intereses conocidos del usuario, o deducidos a partir de los datos recogidos en múltiples sitios, aplicaciones o dispositivos; y/o el acceso o almacenamiento de información en dispositivos a esos efectos.				
					Incluirá las siguientes Herramientas:				
					<ul>				
						<li>Emparejar datos con fuentes fuera de línea: combina datos de fuentes fuera de línea que se recogieron inicialmente en otros contextos.</li>			
						<li>Enlazar Dispositivos: permite el procesamiento de los datos de un usuario para conectar a dicho usuario a través de múltiples dispositivos.</li>			
						<li>Datos de localización geográfica precisa: permite procesar datos de localización geográfica precisa de un usuario en aras de un propósito para el que ese determinado tercero ha dado su consentimiento.</li>			
					</ul>
				`,
				menu: 'Personalización',
			},
			purpose3: {
				description: `
					Permitir el procesamiento de los datos de un usuario para suministrarle contenido o publicidad y medir el suministro de dicho contenido o publicidad, extraer información y generar informes para comprender el uso del servicio; y/o acceder o almacenar información en dispositivos a esos efectos.				
					Incluirá las siguientes Herramientas:				
					<ul>				
						<li>Emparejar datos con fuentes fuera de línea: combina datos de fuentes fuera de línea que se recogieron inicialmente en otros contextos.</li>			
						<li>Enlazar Dispositivos: permite el procesamiento de los datos de un usuario para conectar a dicho usuario a través de múltiples dispositivos.</li>			
						<li>Datos de localización geográfica precisa: permite procesar datos de localización geográfica precisa de un usuario en aras de un propósito para el que ese determinado tercero ha dado su consentimiento.</li>			
					</ul>
				`,
				menu: 'Selección de anuncios, emisión, presentación de informes',
			},
			purpose4: {
				description: `Permitir el procesamiento de los datos de un usuario para proporcionar y modelar publicidad personalizada (incluidas la emisión, la medición y la presentación de informes) basada en las preferencias o intereses conocidos del usuario, o deducidos a partir de los datos recogidos en múltiples sitios, aplicaciones o dispositivos; y/o el acceso o almacenamiento de información en dispositivos a esos efectos.				
				Incluirá las siguientes Herramientas:				
				<ul>				
					<li>Emparejar datos con fuentes fuera de línea: combina datos de fuentes fuera de línea que se recogieron inicialmente en otros contextos.</li>			
					<li>Enlazar Dispositivos: permite el procesamiento de los datos de un usuario para conectar a dicho usuario a través de múltiples dispositivos.</li>			
					<li>Datos de localización geográfica precisa: permite procesar datos de localización geográfica precisa de un usuario en aras de un propósito para el que ese determinado tercero ha dado su consentimiento.</li>			
				</ul>`,
				menu: 'Selección de contenidos, emisión, presentación de informes',
			},
			purpose5: {
				description: `
					La recopilación de información sobre el uso que usted hace del contenido, y la combinación con la información recopilada previamente, se utiliza para medir, comprender e informar sobre el uso que usted hace del servicio. Esto no incluye la personalización, la recopilación de información sobre el uso de este servicio para personalizar posteriormente el contenido y/o la publicidad emitida para usted en otros contextos, es decir, en otros servicios, como sitios web o aplicaciones, a lo largo del tiempo.
				`,
				menu: 'Medición',
			},
		},
		vendors: {
			title: '¿Quién está usando esta información?',
			description: `				
				Aquí está la lista completa de las compañías que usarán su información. Por favor, vea su política de privacidad para más detalles.
			`,
			accept: 'Aprobar',
			acceptAll: 'Aprobar todos',
			acceptNone: 'Desaprobar todos',
			optOut: 'requiere excluirse',
			back: 'Personalizar la forma en que estas empresas utilizan los datos de la página anterior',
		},
		footer: {
			message: `
				<h2>Valoramos la Privacidad</h2>				
			`,
			description: `					
				<span>				
					Para ayudar a mejorar este sitio web, y personalizar y mejorar			
					su experiencia de contenido, con fines publicitarios, y para analizar			
					nuestro tráfico, nosotros y nuestros socios usamos tecnologías tales como cookies,			
					píxeles, y/o beacons para recoger ciertos datos. Al			
					continuar el uso del sitio o haciendo clic en "OK", usted da su consentimiento			
					par el uso de esta tecnología y la recopilación de los datos.			
				</span>				
			`,
			privacyPolicy: `
				<span>				
					Por favor, visite nuestra			
					<a target="_blank" href="http://system1.com/terms/privacy.html">			
						Política de Privacidad		
					</a>			
					para aprender más sobre cómo recogemos y usamos los datos. Puede modificar			
					su configuración en cualquier momento haciendo clic en			
				</span>				
			`,
			privacyPolicyButton: 'Administrar Herramientas de Privacidad',
			consentLink: 'OK',
		},
	},
	fr: {
		banner: {
			title: 'Utilisation des données',
			description:
				'Nos partenaires et nous utilisons des cookies afin d’adresser des contenus personnalisés et/ou publicités ciblées pour améliorer votre expérience.',
			links: {
				data: {
					title: 'Données utilisées',
					description: `<ul>
									<li>Données sur le navigateur utilisé</li>
									<li>Données sur le systeme d'exploitation utilisé</li>
									<li>Données des cookies</li>
									<li>Données spécifiques au terminal (ordinateur de bureau, mobile...)</li>
									<li>Adresse IP</li>
									<li>Données de navigation (pages visitées)</li>
									<li>Données de géolocalisation</li>
								</ul>`,
				},
				purposes: {
					title: 'Utilisation des données',
					description: 'A quoi servent ces données:',
				},
				manage: 'Préférences',
				accept: 'Continuer',
			},
		},
		summary: {
			title: 'Comment sont utilisées mes données ?',
			description:
				"Nos partenaires et nous-même utilisons les cookies (petits fichiers texte) du navigateur afin de comprendre les centres d'intérêt de nos visiteurs et ainsi leur proposer du contenu et de la publicité pertinents. Désormais, nous avons besoin de votre consentement.",
			detailLink: 'Informations et configuration',
			who: {
				title: 'Qui utilise mes données ?',
				description: `Seulement nos partenaires et nous-même pouvons utiliser vos données.
					Vous pouvez personnaliser vos choix ci-dessus ou continuer à utiliser notre site si vous êtes d'accord.`,
				link: 'Voir la liste complète de nos partenaires',
			},
			what: {
				title: 'Quelles données sont utilisées ?',
				description: 'Chaque partenaire utilise différemment vos données.',
				link: 'Voir la liste complète des données utilisées',
			},
		},
		details: {
			back: 'Retour',
			save: 'Valider et continuer sur le site',
		},
		purposes: {
			title: 'Données collectées',
			description: 'Ci-dessous la liste des données pouvant être collectées :',
			back: 'Configurer comment ces données sont utilisées',
			optoutdDescription: '',
			items: `<ul>
						<li>Type de navigateur et son paramétrage</li>
						<li>Informations sur le système d'exploitation</li>
						<li>Données des cookies</li>
						<li>Informations sur l'appareil utilisé</li>
						<li>L'adresse IP à partir de laquelle l'appareil accède au site Web</li>
						<li>Informations sur l'activité de l'utilisateur sur cet appareil, y compris les pages Web visitées</li>
						<li>Informations de géolocalisation de l'appareil lorsqu'il accède au site Web</li>
					</ul>`,
			purpose1: {
				menu: "Stockage d'informations et accès",
				title: "Stockage d'informations et accès",
				description:
					'Autoriser le stockage d’informations ou l’accès à des informations déjà stockées sur votre appareil, telles que des identifiants publicitaires, des identifiants de dispositif, des cookies et des technologies similaires.',
			},
			purpose2: {
				menu: 'Personnalisation',
				title: 'Personnalisation',
				description:
					'Autoriser la collecte et le traitement d’informations sur votre utilisation de ce service pour ensuite personnaliser la publicité et/ou le contenu qui vous sont proposés dans d’autres contextes, tels que sur d’autres sites ou applications, au fil du temps. En règle générale, le contenu du site ou de l’application est utilisé pour déterminer vos centres d’intérêt et permettent de déterminer le choix de la publicité et/ou du contenu.',
			},
			purpose3: {
				menu: "Sélection d'annonces, diffusion, rapport",
				title: "Sélection d'annonces, diffusion, rapport",
				description:
					"Autoriser le traitement des données d'un utilisateur pour fournir du contenu ou des publicités et mesurer la diffusion de ces contenus ou publicités, extraire des informations et générer des rapports pour comprendre l'utilisation des services; et / ou accéder ou stocker des informations sur des dispositifs à cette fin. Inclura les caractéristiques suivantes:",
			},
			purpose4: {
				menu: 'Sélection de contenu, diffusion, rapport',
				title: 'Sélection de contenu, diffusion, rapport',
				description:
					"Autoriser le traitement des données d'un utilisateur pour la création de contenu personnalisé (y compris la diffusion, l'analyse et la création de rapports) en fonction des préférences ou des intérêts d'un utilisateur connus ou inférer à partir de données collectées sur plusieurs sites, applications ou appareils; et / ou accéder ou stocker des informations sur des dispositifs à cette fin. Inclura les caractéristiques suivantes:",
			},
			purpose5: {
				menu: 'Mesures',
				title: 'Mesures',
				description:
					'Autoriser la collecte d’informations sur votre utilisation du contenu et la combinaison avec des informations précédemment collectées, utilisées pour mesurer, comprendre et rendre compte de votre utilisation du service. Cela n’inclut pas la personnalisation, la collecte d’informations sur votre utilisation de ce service pour personnaliser ultérieurement le contenu et/ou la publicité dans d’autres contextes, par exemple sur d’autres services, tels que des sites ou des applications.',
			},
		},
		vendors: {
			title: 'Nos partenaires',
			description:
				'Aidez-nous à vous fournir une meilleure expérience en ligne! Nos partenaires utilisent des cookies et collectent des informations à partir de votre navigateur sur le Web pour vous fournir du contenu, diffuser des publicités pertinentes et analyser les audiences Web.',
			accept: 'Accepter',
			acceptAll: 'Accepter tout',
			optOut: '',
			back: 'Configurer comment ces sociétés récupèrent mes données',
		},
	},
	de: {
		banner: {
			title: 'Cookies helfen uns einen hochwertigen Service zu bieten',
			description: 'Wir und unsere Partner verwenden Cookies, um relevante Inhalte und Werbung bereitzustellen.',
			links: {
				data: {
					title: 'Verwendungszwecke',
					description: `<ul>
									<li>Browserdaten</li>
									<li>Betriebssystemdaten</li>
									<li>Cookie-Daten</li>
									<li>Gerätedaten (Desktop, Mobile etc.)</li>
									<li>IP-Adresse</li>
									<li>Nutzungsverhalten</li>
									<li>Geo-Daten</li>
								</ul>`,
				},
				purposes: {
					title: 'Verwendung von Daten',
					description: 'Wozu dienen diese Daten?',
				},
				manage: 'Einstellungen',
				accept: 'Akzeptieren und fortsetzen',
			},
		},
		summary: {
			title: 'Wie werden meine Daten verwendet?',
			description:
				'Unsere Partner und wir selbst verwenden Cookies (kleine Textdateien) des Browsers, um die Interessen unserer Besucher zu verstehen und ihnen relevante Inhalte und Werbung zur Verfügung zu stellen. Jetzt brauchen wir Ihre Zustimmung.',
			detailLink: 'Informationen und Einstellungen',
			who: {
				title: 'Wer nutzt meine Daten?',
				description:
					'Nur unsere Partner und wir können Ihre Daten verwenden. Sie können Ihre Auswahl oben anpassen oder unsere Website weiterhin nutzen, wenn Sie zustimmen.',
				link: 'Sehen Sie die komplette Liste unserer Partner',
			},
			what: {
				title: 'Welche Daten werden verwendet?',
				description: 'Jeder Partner verwendet Ihre Daten unterschiedlich.',
				link: 'Siehe die vollständige Liste der verwendeten Daten',
			},
		},
		details: {
			back: 'Zurück',
			save: 'Speichern und auf der Webseite fortfahren',
		},
		purposes: {
			title: 'Gesammelte Daten',
			description: 'Liste der Daten, die gesammelt werden',
			back: 'Konfigurieren Sie, wie diese Daten verwendet werden',
			optoutdDescription: '',
			items: `<ul>
						<li>Browsertyp und Einstellungen</li>
						<li>Informationen zum Betriebssystem</li>
						<li>Cookie-Daten</li>
						<li>Geräteinformationen</li>
						<li>Die IP-Adresse, von der aus das Gerät auf die Website zugreift</li>
						<li>Informationen zur Benutzeraktivität auf diesem Gerät, einschließlich der besuchten Webseiten</li>
						<li>Geolokalisierungsinformationen des Geräts beim Zugriff auf die Website</li>
					</ul>`,
			purpose1: {
				menu: 'Speicherung und Zugriff auf Informationen',
				title: 'Speicherung von Informationen und Zugriff',
				description:
					'Speicherung von Informationen oder Zugriff auf Informationen, die bereits auf Ihrem Gerät gespeichert sind, z.B. Werbe-IDs, Geräte-IDs, Cookies und ähnliche Technologien.',
			},
			purpose2: {
				menu: 'Personalisierung',
				title: 'Personalisierung',
				description:
					'Die Erfassung und Verarbeitung von Informationen über Ihre Nutzung dieses Dienstes zur nachträglichen Personalisierung von Werbung und / oder Inhalten in anderen Kontexten, z.B. auf anderen Websites oder in anderen Apps. In der Regel wird der Inhalt der Website oder App verwendet, um Rückschlüsse auf Ihre Interessen zu ziehen, die die zukünftige Auswahl von Werbung und / oder Inhalten beeinflussen.',
			},
			purpose3: {
				menu: 'Auslieferung und Berichte von Anzeigen',
				title: 'Auslieferung und Berichte von Anzeigen',
				description:
					'Die Sammlung von Informationen und die Kombination mit zuvor gesammelten Informationen, um Werbung für Sie auszuwählen und zu liefern und die Lieferung und Wirksamkeit solcher Werbung zu messen. Dies beinhaltet die Verwendung zuvor gesammelter Informationen über Ihre Interessen zur Auswahl von Anzeigen, die Verarbeitung von Daten darüber, welche Werbeanzeigen gezeigt wurden, wie oft sie gezeigt wurden, wann und wo sie gezeigt wurden und ob Sie irgendwelche Maßnahmen im Zusammenhang mit der Werbung ergriffen haben, einschließlich z Anzeige oder einen Kauf tätigen. Dies umfasst nicht die Personalisierung, dh die Sammlung und Verarbeitung von Informationen über Ihre Nutzung dieses Dienstes, um später Werbung und / oder Inhalte in anderen Kontexten wie Websites oder Apps im Laufe der Zeit zu personalisieren',
			},
			purpose4: {
				menu: 'Auslieferung und Berichte von Inhalten',
				title: 'Auslieferung und Berichte von Inhalten',
				description:
					'Die Sammlung von Informationen und die Kombination mit zuvor gesammelten Informationen, um Inhalte für Sie auszuwählen und zu liefern und die Lieferung und Effektivität solcher Inhalte zu messen. Dies beinhaltet die Verwendung zuvor gesammelter Informationen über Ihre Interessen, um Inhalte auszuwählen, Daten darüber zu verarbeiten, welcher Inhalt gezeigt wurde, wie oft oder wie lange er angezeigt wurde, wann und wo er gezeigt wurde und ob Sie irgendwelche Maßnahmen in Bezug auf den Inhalt ergriffen haben zum Beispiel klicken auf Inhalt. Dies beinhaltet nicht die Personalisierung, dh die Sammlung und Verarbeitung von Informationen über Ihre Nutzung dieses Dienstes, um Inhalte und / oder Werbung für Sie später in anderen Kontexten wie Websites oder Apps zu personalisieren.',
			},
			purpose5: {
				menu: 'Zielgruppenmessung',
				title: 'Zielgruppenmessung',
				description:
					'Die Sammlung von Informationen über Ihre Nutzung des Inhalts und die Kombination mit zuvor gesammelten Informationen, die verwendet werden, um Ihre Nutzung des Dienstes zu messen, zu verstehen und darüber zu berichten. Dies umfasst nicht die Personalisierung, die Sammlung von Informationen über Ihre Nutzung dieses Dienstes, um Inhalte und / oder Werbung für Sie in anderen Kontexten, d. H. Auf anderen Diensten, wie Websites oder Apps, im Zeitverlauf zu personalisieren.',
			},
		},
		vendors: {
			title: 'Unsere Partner',
			description:
				'Helfen Sie uns, Ihnen eine bessere Online-Erfahrung zu bieten! Unsere Partner verwenden Cookies und sammeln Informationen von Ihrem Browser im Internet, um Sie mit Inhalten zu versorgen, relevante Werbung auszuliefern und Zielgruppen im Internet zu analysieren.',
			accept: 'Akzeptieren',
			acceptAll: 'Alle akzeptieren / deaktivieren',
			optOut: 'Benötigt Opt-Out',
			back: 'Zurück',
		},
	},
	pl: {
		banner: {
			title: 'Reklamy pomagają nam rozwijać tę stronę',
			description:
				'Kiedy odwiedzasz naszą stronę, wstępnie wybrane firmy mogą odczytywać i korzystać z określonych informacji zapisanych na Twoim urządzeniu, aby wyświetlać odpowiednie reklamy bądź spersonalizowane treści.',
			links: {
				data: {
					title: 'Informacje jakie mogą być używane.',
					description: `<ul>
						<li>Rodzaj przeglądarki i jej ustawienia</li>
						<li>Informacje o systemie operacyjnym urządzenia</li>
						<li>Informacje zawarte w ciasteszkach (cookie)</li>
						<li>Informacje o innych identyfikatorach przypisanych do urządzenia</li>
						<li>Adres IP z którego urządzenie łączy się ze stroną lub aplikacją mobilną</li>
						<li>Informacje o aktywności użytkownika na tym urządzeniu włącznie z odwiedzonymi bądź używanymi stronami i aplikacjami mobilnymi</li>
						<li>Informacje o lokalizacji geograficznej urządzenia podczas połączenia ze stroną bądź aplikacją mobilną</li>
					</ul>`,
				},
				purposes: {
					title: 'Cele przechowywania informacji.',
					description: 'W jaki sposób informacje mogą być używane:',
				},
				manage: 'Zobacz więcej',
				accept: '<b>Akceptuję</b>',
			},
		},
		summary: {
			title: 'W jaki sposób informacje są używane?',
			description:
				'My oraz wybrane firmy mogą odczytywać i korzystać z Twoich danych dla niżej wymienionych celów. Poniżej możesz zmienić ustawienia albo przejść do serwisu, jeżeli akceptujesz te ustawienia.',
			detailLink: 'Zobacz więcej i zmień ustawienia',
			who: {
				title: 'Kto korzysta z tych informacji?',
				description:
					'My oraz wstępnie wybrane firmy będą korzystać z Twoich danych. Możesz przejrzeć listę firm za pomocą odnośników powyżej albo',
				link: 'wyświetlić pełną listę tutaj',
			},
			what: {
				title: 'Jakie informacje mogą być używane?',
				description: 'Poszczególne firmy korzystają z różnych danych,',
				link: 'zobacz pełną listę tutaj',
			},
		},
		details: {
			back: 'Wstecz',
			save: '<b>Zapisz i przejdź do serwisu</b>',
		},
		purposes: {
			title: 'Jakie informacje mogą być używane?',
			description: 'Poniżej znajduje się pełna lista informacji, jakie mogą być gromadzone.',
			back: 'Dostosuj sposób, w jaki dane z poprzedniej strony są używane',
			optoutdDescription: `W zależności od rodzaju danych, które są zbierane, używane
			i przetwarzane, a także innych czynników włączając uwzględnienie ochrony prywatności na etapie projektowania systemu,
			niektórzy partnerzy polegają na Twojej zgodzie, podczas gdy inni wymagają odwołania zgody.
			Aby uzyskać więcej informacji oraz dokonać wyboru, zobacz poniżej.
			Ewentualnie aby odwołać zgodę odwiedź stronę <a href='http://optout.networkadvertising.org/?c=1#!/' target='_blank'>NAI</a>,
			<a href='http://optout.aboutads.info/?c=2#!/' target='_blank'>DAA</a>
			lub <a href='http://youronlinechoices.eu/' target='_blank'>EDAA</a>.`,
			items: `<ul>
				<li>Rodzaj przeglądarki i jej ustawienia</li>
				<li>Informacje o systemie operacyjnym urządzenia</li>
				<li>Informacje zawarte w ciasteszkach (cookie)</li>
				<li>Informacje o innych identyfikatorach przypisanych do urządzenia</li>
				<li>Adres IP z którego urządzenie łączy się ze stroną lub aplikacją mobilną</li>
				<li>Informacje o aktywności użytkownika na tym urządzeniu włącznie z odwiedzonymi bądź używanymi stronami i aplikacjami mobilnymi</li>
				<li>Informacje o lokalizacji geograficznej urządzenia podczas połączenia ze stroną bądź aplikacją mobilną</li>
			</ul>`,
			purpose1: {
				menu: 'Zapisywanie i odczytywanie informacji',
				title: 'Zapisywanie i odczytywanie informacji',
				description:
					'Co to oznacza: zapisywanie informacji albo odczytywanie informacji, które zostały już zapisane na Twoim urządzeniu - takich jak identyfikatory reklamowe, identyfikatory urządzenia, ciasteczka (cookie) i podobne technologie.',
			},
			purpose2: {
				menu: 'Personalizacja',
				title: 'Personalizacja',
				description:
					'Co to oznacza: zbieranie i przetwarzanie informacji o Twoim sposobie używania serwisu, aby potem z biegiem czasu personalizować dla Ciebie reklamy i/lub treść w innym kontekście - takim jak inne strony lub aplikacje. Zwykle treści ze strony lub aplikacji są używane do przewidywania Twoich zainteresowań, na podstawie których w przyszłości są dobierane reklamy i/lub treść.',
			},
			purpose3: {
				menu: 'Dobieranie, dostarczanie, raportowanie reklam',
				title: 'Dobieranie, dostarczanie, raportowanie reklam',
				description:
					'Co to oznacza: zbieranie informacji i łączenie ich z wcześniej zebranymi informacjami w celu dobrania i dostarczenia Ci reklam, a także pomiaru dostarczalności i efektywności takich reklam. To dotyczy również wcześniej zebranych informacji o Twoich zainteresowaniach w celu dobrania reklam, przetwarzania danych o reklamach które zostały wyświetlone, jak często były wyświetlane, kiedy i gdzie były wyświetlone i czy została wykonana na nich jakaś akcja - na przykład kliknięcie w reklamę albo dokonanie zakupu. To nie dotyczy personalizacji, która oznacza zbieranie i przetwarzanie informacji o Twoim sposobie używania serwisu, aby potem z biegiem czasu personalizować dla Ciebie reklamy i/lub treść w innym kontekście - takim jak inne strony lub aplikacje.',
			},
			purpose4: {
				menu: 'Dobieranie, dostarczanie, raportowanie treści',
				title: 'Dobieranie, dostarczanie, raportowanie treści',
				description:
					'Co to oznacza: zbieranie informacji i łączenie ich z wcześniej zebranymi informacjami w celu dobrania i dostarczenia Ci treści, a także pomiaru dostarczalności i efektywności takich treści. To dotyczy również wcześniej zebranych informacji o Twoich zainteresowaniach w celu dobrania treści, przetwarzania danych o treściach które zostały wyświetlone, jak często były wyświetlane, kiedy i gdzie były wyświetlone i czy została wykonana na nich jakaś akcja - na przykład kliknięcie na treści. To nie dotyczy personalizacji, która oznacza zbieranie i przetwarzanie informacji o Twoim sposobie używania serwisu, aby potem z biegiem czasu personalizować dla Ciebie reklamy i/lub treść w innym kontekście - takim jak inne strony lub aplikacje.',
			},
			purpose5: {
				menu: 'Pomiary',
				title: 'Pomiary',
				description:
					'Co to oznacza: zbieranie informacji o Twoim sposobie używania treści i łączenie ich z wcześniej zebranymi informacjami w celu pomiarów, zrozumienia i raportowania Twojego sposobu używania serwisu. To nie dotyczy personalizacji, która oznacza zbieranie i przetwarzanie informacji o Twoim sposobie używania serwisu, aby potem z biegiem czasu personalizować dla Ciebie reklamy i/lub treść w innym kontekście - takim jak inne strony lub aplikacje.',
			},
		},
		vendors: {
			title: 'Kto korzysta z tych informacji?',
			description:
				'Tutaj możesz zobaczyć pełną listę firm, które korzystają z Twoich informacji. Aby dowiedzieć się więcej, zobacz ich politykę prywatności.',
			accept: 'Akceptuję',
			acceptAll: 'Zaakceptuj wszystko',
			optOut: 'wymaga odwołania zgody',
			back: 'Dostosuj sposób, w jaki te firmy korzystają z danych z poprzedniej strony',
		},
	},
	it: {
		banner: {
			title: 'Scelte Privacy',
			description: `
				Utilizando questo sito, acconsenti al nostro uso dei cookie e delle informazioni per fornire contenuto personalizzato e pubblicità e per misurare ed analizzare l'utilizzo del sito. Clicca su "Maggiori inforrmazioni" per cambiare le tue impostazioni.
			`,
			links: {
				data: {
					title: 'Informazioni che potrebbero essere utilizzate',
					description: `						
						<ul>					
							<li>Tipo di browser e sue impostazioni</li>				
							<li>Informazioni sul sistema operativo del dispositivo</li>				
							<li>Informazioni sui cookie</li>				
							<li>Informazioni su altri identificatori assegnati al dispositivo</li>				
							<li>Indirizzo IP dal quale il dispositivo accede al sito web di un cliente o				
								a un'applicazione mobile			
							</li>				
							<li>Informazioni sulle attività dell'utente su quel dispositivo, tra cui pagine				
								web e app mobili visitate o utilizzate			
							</li>				
							<li>Informazioni in merito alla posizione geografica del dispositivo quando				
								accede			
								a un sito web o ad una applicazione mobile			
							</li>				
						</ul>					
					`,
				},
				purposes: {
					title: `Scopi dell'archiviazione di informazioni`,
				},
				manage: 'Maggiori informazioni',
				accept: 'Ok, Capito',
			},
		},
		summary: {
			title: 'Maggiori informazioni su come vengono usate le informazioni?',
			description: `Noi e società selezionate potremmo avere accesso e utilizzare le tue informazioni								
				per gli scopi sottostanti. Puoi personalizzare le tue scelte qui sotto o							
				continuare a usare il nostro sito se sei d'accordo con gli scopi.`,
			detailLink: 'Maggiori informazioni & Imposta preferenze',
			who: {
				title: 'Chi usa queste informazioni?',
				description: `Noi e società preselezionate utilizzeremo le tue informazioni. Puoi vedere							
					ogni società nei link qui sopra o`,
				link: `vedi qui l'elenco completo.`,
			},
			what: {
				title: 'Quali informazioni vengono usate?',
				description: 'Diverse società utilizzano informazioni diverse,',
				link: `vedi qui l'elenco completo.`,
			},
		},
		details: {
			back: 'Indietro',
			save: 'Ok, capito',
		},
		purposes: {
			title: '',
			description: '',
			back: '',
			globalOptoutDescription: `								
				<p>							
					A seconda del tipo di dati che raccolgono, utilizzano ed elaborano, e di altri fattori compresa la privacy by design,						
					alcuni partner contano sul tuo consenso, mentre altri ti chiedono di disattivare. Per informazioni su ciascun fornitore e per						
					esercitare le tue scelte, vedi sotto. O, per disattivare, visita						
					<a href="http://optout.networkadvertising.org/?c=1#!/" target="_blank">						
						NAI					
					</a>						
					,						
					<a href="http://optout.aboutads.info/?c=2#!/" target="_blank">						
						DAA					
					</a>						
					, and						
					<a href="http://youronlinechoices.eu/" target="_blank">						
						EDAA					
					</a>						
					sites.						
				</p>							
			`,
			purpose1: {
				description: `Permetti archiviazione o accesso a informazioni su un dispositivo dell'utente.`,
				menu: 'Archiviazione delle informazioni e Test di accesso',
				optoutDescription: '',
			},
			purpose2: {
				description: `
					Consenti elaborazione dati utente per fornire e notificare pubblicità personalizzata (inclusi fornitura, misurazione e report) basandosi su preferenze o interessi di un utente conosciuti o dedotti dai dati raccolti attraverso siti, app o dispositivi multipli; e/o accesso a, o archiviazione di, informazioni su dispositivi con quello scopo.							
					Comprenderà le seguenti caratteristiche:							
					<ul>							
						<li>Abbinamento dei dati a fonti offline - combinazione di dati da fonti offline che erano inizialmente raccolte in altri contesti.</li>						
						<li>Collegamento dei dispositivi - consente l'elaborazione dei dati utente per connettere tale utente attraverso dispositivi multipli.</li>						
						<li>Dati di collocazione geografica precisa - consenti elaborazione dati di collocazione geografica precisa di un utente a sostegno di uno scopo per cui quella certa terza parte possiede il consenso.</li>						
					</ul>
				`,
				menu: 'Personalizzazione',
			},
			purpose3: {
				description: `
					Consenti elaborazione dati utente per fornire contenuto o pubblicità e misurare la fornitura di tale contenuto o pubblicità, estrarre indicazioni e generare report per comprendere l'utilizzo del servizio; e/o accedere a o archiviare informazioni su dispositivi con quello scopo.							
					Comprenderà le seguenti caratteristiche:							
					<ul>							
						<li>Abbinamento dei dati a fonti offline - combinazione di dati da fonti offline che erano inizialmente raccolte in altri contesti.</li>						
						<li>Collegamento dei dispositivi - consentire l'elaborazione dei dati utente per connettere tale utente attraverso dispositivi multipli.</li>						
						<li>Dati di collocazione geografica precisa - consenti elaborazione dati di collocazione geografica precisa di un utente a sostegno di uno scopo per cui quella certa terza parte possiede il consenso.</li>						
					</ul>
				`,
				menu: 'Selezione pubblicità, fornitura, report',
			},
			purpose4: {
				description: `
					Consenti elaborazioni dati utente per fornire e notificare contenuto personalizzato (tra cui fornitura, misurazione e report) basato sulle preferenze o interessi dell'utente noti o dedotti da dati raccolti attraverso siti, app o dispositivi multipli; e/o accesso a o archiviazione di informazioni su dispositivi a quello scopo.							
					Comprenderà le seguenti caratteristiche:							
					<ul>							
						<li>Abbinamento dei dati a fonti offline - combinazione di dati da fonti offline che erano inizialmente raccolte in altri contesti.</li>						
						<li>Collegamento dei dispositivi - consentire l'elaborazione dei dati utente per connettere tale utente attraverso dispositivi multipli.</li>						
						<li>Dati di collocazione geografica precisa - consenti elaborazione dati di collocazione geografica precisa di un utente a sostegno di uno scopo per cui quella certa terza parte possiede il consenso.</li>						
					</ul>
				`,
				menu: 'Selezione contenuto, fornitura, report',
			},
			purpose5: {
				description: `
					Taccolta di informazioni in merito all'utilizzo del contenuto e alla combinazione con informazioni precedentemente raccolte, utilizzate per misurare, comprendere e fornire un report dell'utilizzo del servizio. Questo non comprende la personalizzazione, la raccolta di informazioni sull'utilizzo di questo servizio per personalizzare di conseguenza contenuto e/o pubblicità in altri contesti, ad es. su altri servizi, come siti web o app, nel corso del tempo.
				`,
				menu: 'Misurazione',
			},
		},
		vendors: {
			title: 'Chi sta utilizzando queste informazioni?',
			description: `								
				Ecco l'elenco competo delle società che utilizzeranno le tue informazioni. Per maggiori dettagli si prega di vedere la loro informativa sulla privacy.
			`,
			accept: 'Consenti',
			acceptAll: '"Consenti tutto',
			acceptNone: 'Rifiuta tutto',
			optOut: 'Richiede disattivazione',
			back: 'Personalizza il modo in cui queste società utilizzano i dati dalla pagina precedente',
		},
		footer: {
			message: `								
				<h2>Noi diamo valore alla privacy</h2>							
			`,
			description: `								
				<span>							
					Per aiutare a rendere migliore questo sito, per personalizzare e valorizzare						
					il contenuto che vedi, per scopi pubblicitari e di analisi del						
					nostro traffico, noi e i nostri partner utilizziamo tecnologia come cookie,						
					pixel e/o beacon per raccogliere determinati dati.						
					Continuando a utilizzare il sito o cliccando su “OK”, acconsenti						
					all'utilizzo di tale tecnologia e alla raccolta dei dati.						
				</span>							
			`,
			privacyPolicy: `								
				<span>							
					Si prega di visitare la nostra						
					<a target="_blank" href="http://system1.com/terms/privacy.html">						
						Informativa sulla Privacy					
					</a>						
					per avere maggiori informazioni su come raccogliamo e utilizziamo i dati. Puoi modificare						
					le tue impostazioni in qualsiasi momento cliccando						
				</span>							
			`,
			privacyPolicyButton: 'Gestisci impostazioni Privacy',
			consentLink: 'OK',
		},
	},
	sv: {
		banner: {
			title: 'Integritetsval',
			description: `
				Genom att använda denna webbplats så samtycker du till vår användning av cookies för att tillhandahålla ett mer personligt skräddarsytt innehåll inklusive relaterade annonser samt i syfte att mäta och analysera användningen av webbplatsen. Klicka på "Läs mer" om du vill ändra dina inställningar.
			`,
			links: {
				data: {
					title: 'Informationen som kan komma att användas',
					description: `							
						<ul>						
							<li>Typen av webbläsare och dess inställningar</li>					
							<li>Information om enhetens operativsystem</li>					
							<li>Cookienformation</li>					
							<li> Information om andra identifierare som assignats enheten</li>					
							<li>Den IP-adress från vilken enheten kommer åt en klients webbplats eller					
								mobilapplikation				
							</li>					
							<li>Information om användarens aktivitet på den enheten, inklusive					
								sidor eller mobila appar som besökts eller använts				
							</li>					
							<li>Information om enhetens geografiska plats när den					
								får åtkomst				
								till en webbplats eller mobilapplikation.				
							</li>					
						</ul>						
					`,
				},
				purposes: {
					title: 'Anledning till lagringen av information',
				},
				manage: 'Lär Dig Mer' /* Lär Dig Mer */,
				accept: 'Ok, Jag Förstår' /* OK */,
			},
		},
		summary: {
			title: 'Lär dig mer om hur informationen används?',
			description: `Vi och utvalda företag kan komma åt och använda din information									
				för nedanstående ändamål. Du kan anpassa dina val nedan eller								
				fortsätta att använda vår webbplats om du är OK med syftena.`,
			detailLink: 'Lär Dig Mer & Ange Preferenser',
			who: {
				title: 'Vem använder denna information?',
				description: `Vi och förvalda företag kommer att använda din information. Du kan se								
					varje företag i länkarna ovan eller`,
				link: 'se den kompletta listan här.',
			},
			what: {
				title: 'Vilken typ av information används?',
				description: 'Olika företag använder olika typer av information,',
				link: 'se den kompletta listan här.',
			},
		},
		details: {
			back: 'Tillbaka',
			save: 'Ok, Jag förstår',
		},
		purposes: {
			title: '',
			description: '',
			back: '',
			globalOptoutDescription: `									
				<p>								
					Beroende på vilken typ av data som de samlar in, använder sig av och bearbetar inklusive andra faktorer såsom design integriteten ,							
					vissa partners förlitar sig på ditt samtycke medan andra kräver att du väljer att aktivt avregistrera dig. För information om varje specifik leverantör och för att							
					utöva dina val, se nedan. Eller för att avregistrera, besök							
					<a href="http://optout.networkadvertising.org/?c=1#!/" target="_blank">							
						NAI						
					</a>							
					,							
					<a href="http://optout.aboutads.info/?c=2#!/" target="_blank">							
						DAA						
					</a>							
					, and							
					<a href="http://youronlinechoices.eu/" target="_blank">							
						EDAA						
					</a>							
					sites.							
				</p>								
			`,
			purpose1: {
				description: 'Tillåt lagring eller åtkomost av information på användarens enhet.',
				menu: 'Information lagring och åtkomst',
				optoutDescription: '',
			},
			purpose2: {
				description: `Tillåt behandling av en viss användares data för att tillhandahålla och göra användaren medveten om den personligt skräddarsydda annonseringen (inklusive leverans, mätning och rapportering) baserat på användares preferenser eller intressen vilka är kända eller kan härledas från de data som samlats in på flera webbplatser, appar eller enheter; och/eller komma åt eller lagra information på enheter för just etta ändamå.								
				Kommer att inkludera följande Funktioner:								
				<ul>								
					<li>Matcha Data med Offline Källor – kombinera data från olika offline källor som ursprungligen samlats s in i andra sammanhang.</li>							
					<li>Länka enheter – tillåt bearbetning av en användares data för att ansluta hen på flera enheter.</li>							
					<li>Exakta geografiska platsdata - tillåt behandling av en användares exakta geografiska platsdata till stöd för ett syfte för vilket den tredje parten har samtycke.</li							
				</ul>`,
				menu: 'Personalisering',
			},
			purpose3: {
				description: `Tillåt behandling av en viss användares data för att kunna leverera innehåll eller annonser och mäta leveransen av sådant innehåll eller sådana annonser, extrahera användarens insikter och generera rapporter för att kunna förstå hur tjänsten används; och/eller komma åt eller lagra information på enheter för just detta ändamål.								
				Kommer att inkludera följande Funktioner:								
				<ul>								
					<li>Matcha data med offline källor – kombinera data från offline källor som ursprungligen samlats in i andra sammanhang.</li>							
					<li>Länka enheter – tillåt bearbetning av en viss användares data för att ansluta en sådan användare på flera enheter.</li>							
					<li>Exakta geografiska platsdata - tillåt behandling av en användares exakta geografiska platsdata till stöd för ett visst syfte för vilket den tredje parten har samtycke.</li>							
				</ul>`,
				menu: 'Annonsval, leverans, rapporteringg',
			},
			purpose4: {
				description: `Tillåt behandling av en användares data för att kunna tillhandahålla och informera om den personliga innehållet (inklusive leverans, mätning och rapportering) baserat på en användares preferenser eller intressen som är kända eller härledda från data som samlats in på flera webbplatser, appar eller enheter, och/eller åtkomst till eller lagring av information på enheter för detta ändamål. Kommer att innehålla följande funktioner.								
				Kommer att inkludera följande egenskaper:								
				<ul>								
					<li>Matcha data med offline källor – kombinera olika data från offline källor som ursprungligen samlats in i andra sammanhang.</li>							
					<li>Länka enheter – tillåt bearbetning av en viss användares data för att ansluta en sådan användare på flera enheter.</li>							
					<li>Exakta geografiska platsdata - tillåt behandling av en användares exakta geografiska platsdata till stöd för ett visst syfte för vilket den tredje parten har samtycke.</li>							
				</ul>`,
				menu: 'Valet av innehåll, leverans rapportering',
			},
			purpose5: {
				description: `
					Insamling av information om din användning av innehållet kombinerat med tidigare insamlad information som används för att mäta, förstå och rapportera om din användning av själva tjänsten. Detta inkluderar ej personliga anpassningar, insamling av information om din användning av tjänsten för att senare anpassa innehåll och/eller reklam för dig i andra sammanhang, såsom webbplatser eller appar, över tid.
				`,
				menu: 'Mätning',
			},
		},
		vendors: {
			title: 'Vem använder denna information?',
			description: `
				Här följer den kompletta listan över företag som kommer att använda din information. Se deras sekretesspolicy för mer information.
			`,
			accept: 'Tillåt',
			acceptAll: 'Tillåt Alla',
			acceptNone: 'Avvisa alla',
			optOut: 'kräv avregistrering',
			back: 'Anpassa hur dessa företag använder data från föregående sida',
		},
		footer: {
			message: `									
				<h2>Vi Värnar Om Din Integritet</h2>								
			`,
			description: `									
				<span>								
					För att hjälpa till att göra denna webbplats ännu bättre samt för att kunna anpassa							
					förbättra innehållet, både i reklamsyfte och för att analysera							
					vår trafik så använder vi och våra partners teknik såsom cookies,							
					pixlar och dylikt för att samla in vissa data. Om du							
					fortsätter att använda webbplatsen eller klickar på "OK", så samtycker du							
					till att användning av denna teknik samt insamling av data.							
				</span>								
			`,
			privacyPolicy: `									
				<span>								
					Vänligen besök vår							
					<a target="_blank" href="http://system1.com/terms/privacy.html">							
						Integritetspolicy						
					</a>							
					fför att lära dig mer om hur vi samlar och använder data. Du kan ändra							
					när du så önskar genom att klicka							
				</span>								
			`,
			privacyPolicyButton: 'Hantera sekretessinställningar',
			consentLink: 'OK',
		},
	},
	pt: {
		banner: {
			title: 'Opções de Privacidade',
			description: `
				Ao usar este sítio concorda com o uso de cookies e de informação para providenciar conteúdo personalizado e anuncios e medir e analizar a utilização do sítio. Clique em "Saiba Mais" para alterar as suas configurações.
			`,
			links: {
				data: {
					title: 'Informação que pode ser usada',
					description: `
						<ul>
							<li>Tipo de navegador e as suas configurações</li>
							<li>Informação sobre o sistema operativo do equipamento</li>
							<li>Informação sobre cookies</li>
							<li>Informação sobre outros identificadores associados ao equipmento</li>
							<li>O endereço de IP a partir do qual o equipamento acede ao sítio do cliente ou aplicação móvel</li>
							<li>Informação sobre a atividade do utilizador naquele equipamento, incluindo páginas web e aplicações móveis visitadas ou utilizadas</li>
							<li>Informação sobre a localização geográfica do equipamento quando acede a um sítio ou aplicação móvel</li>
						</ul>					
					`,
				},
				purposes: {
					title: 'Finalidades para armazenar informação',
				},
				manage: 'Saiba Mais' /* Saiba Mais */,
				accept: 'Ok, percebi' /* OK */,
			},
		},
		summary: {
			title: 'Saber mais sobre como a informação está a ser usada?',
			description: `Nós e empresas selecionadas poderemos aceder e utilizar a sua informação								
				para as finalidades abaixo descritas. Poderá personalizar as suas escolhas abaixo ou							
				continuar a usar o nosso sítio se concordar com as finalidades.
			`,
			detailLink: 'Saiba Mais & Configure Preferências',
			who: {
				title: 'Quem está a usar esta informação?',
				description: `Nós e empresas selecionadas iremos utilizar a sua informação. Poderá visualizar							
					cada empresa nas hiperligações acima ou
				`,
				link: 'veja a lista completa aqui.',
			},
			what: {
				title: 'Qual informação está a ser usada?',
				description: 'Empresas diferentes usam informações diferentes,',
				link: 'veja a lista completa aqui.',
			},
		},
		details: {
			back: 'Voltar',
			save: 'Ok, percebi',
		},
		purposes: {
			title: '',
			description: '',
			back: '',
			globalOptoutDescription: `								
				<p>							
					Dependendo do tipo de dados que recolham, usem e processem e outros fatores incluindo privacidade por defeito,						
					certos parceiros assumem o seu consentimento enquanto outros requerem que opte por não aceitar. Para informações sobre cada um dos fornecedores e para						
					exercer as suas escolhas, veja abaixo. Ou para optar por não aceitar, visite						
					<a href="http://optout.networkadvertising.org/?c=1#!/" target="_blank">						
						NAI					
					</a>						
					,						
					<a href="http://optout.aboutads.info/?c=2#!/" target="_blank">						
						DAA					
					</a>						
					, and						
					<a href="http://youronlinechoices.eu/" target="_blank">						
						EDAA					
					</a>						
					sites.						
				</p>							
			`,
			purpose1: {
				description: 'Permitir armazenar ou aceder a informação num equipamento do utilizador.',
				menu: 'Armazenamento e acesso de informação',
				optoutDescription: '',
			},
			purpose2: {
				description: `Permitir processar dados do utilizador para fornecer e informar anúncios personalizados (incluindo envio, medição e reporte) baseado nas preferências ou interesses do utilizador conhecidos ou inferidos através de dados recolhidos em vários sítios, aplicações ou equipamentos; e/ou aceder ou armazenar informação em equipamentos para esse propósito.
				Irá incluir as seguintes Funcionalidades:							
				<ul>							
					<li>Emparelhar Dados a Fontes Offline - combinar dados de fontes offline que foram originalmente recolhidos noutros contextos.</li>						
					<li>Associar Equipmentos - permitir o processamento dos dados de um utilizador para conectar tal utilizador a múltiplos equipamentos.</li>						
					<li>Dados de Localização Geográfica Precisa - permitir o processamento de dados de localização geográfica precisa de um utilizador para suporte de uma finalidade para a qual uma terceira parte tem consentimento.</li>						
				</ul>`,
				menu: 'Personalização',
			},
			purpose3: {
				description: `
					Permitir o processamento dos dados do utilizador para apresentar conteúdo ou anúncios e medir a apresentação desse conteúdo ou anúncios, extrair conclusões e gerar relatórios para compreender a utilização do serviço; e/ou aceder ou armazenar informação em equipamentos para essa finalidade.
					Irá incluir as seguintes Funcionalidades:							
					<ul>							
						<li>Emparelhar Dados a Fontes Offline - combinar dados de fontes offline que foram originalmente recolhidos noutros contextos.</li>						
						<li>Associar Equipmentos - permitir o processamento dos dados de um utilizador para conectar tal utilizador a múltiplos equipamentos.</li>						
						<li>Dados de Localização Geográfica Precisa - permitir o processamento de dados de localização geográfica precisa de um utilizador para suporte de uma finalidade para a qual uma terceira parte tem consentimento.</li>						
					</ul>
				`,
				menu: 'Seleção, apresentação, reporte de anúncios',
			},
			purpose4: {
				description: `
					Permitir processar dados do utilizador para fornecer e informar anúncios personalizados (incluindo envio, medição e reporte) baseado nas preferências ou interesses do utilizador conhecidos ou inferidos através de dados recolhidos em vários sítios, aplicações ou equipamentos; e/ou aceder ou armazenar informação em equipamentos para esse propósito.							
					Irá incluir as seguintes Funcionalidades:							
					<ul>							
						<li>Emparelhar Dados a Fontes Offline - combinar dados de fontes offline que foram originalmente recolhidos noutros contextos.</li>						
						<li>Associar Equipmentos - permitir o processamento dos dados de um utilizador para conectar tal utilizador a múltiplos equipamentos.</li>						
						<li>Dados de Localização Geográfica Precisa - permitir o processamento de dados de localização geográfica precisa de um utilizador para suporte de uma finalidade para a qual uma terceira parte tem consentimento.</li>						
					</ul>
				`,
				menu: 'Seleção, apresentação, reporte de anúncios',
			},
			purpose5: {
				description: `						
					A recolha de informação sobre a sua utilização do conteúdo e a combinação com informação recolhida anteriormente, utilizada para medir, compreender e reportar sobre a sua utilização do serviço. Isto não inclui personalização, a recolha de informação sobre a sua utilização deste serviço para consequentemente personalizar conteúdo e/ou apresentar-lhe anúncios noutros contextos, isto é, noutros serviços, tal como sítios ou aplicações, ao longo do tempo.
				`,
				menu: 'Medição',
			},
		},
		vendors: {
			title: 'Quem está a usar esta informação?',
			description: `
				Aqui está a lista completa de empresas que irão usar a sua informação. Por favor consulte as suas políticas de privacidade para mais detalhes.
			`,
			accept: 'Permitir',
			acceptAll: '"Permitir Todos',
			acceptNone: 'Rejeitar Todos',
			optOut: 'Requer auto-exclusão',
			back: 'Personalize como estas empresas usam os dados da página anterior',
		},
		footer: {
			message: `								
				<h2>Nós Damos Valor À Privacidade</h2>							
			`,
			description: `								
				<span>							
					Para melhorar este sítio, para personalizar e melhorar						
					a sua experiência, para finalidades relacionadas com publicidade e para analisar						
					o nosso tráfico, nós e os nossos parceiros utilizamos tecnologias como cookies,						
					pixels e/ou beacons para recolher determinadas informações. Ao						
					continuar a usar este sítio ou ao clicar em "OK", concorda com						
					o uso desta tecnologia e que os dados sejam recolhidos.						
				</span>							
			`,
			privacyPolicy: `								
				<span>							
					Por favor visite a nossa						
					<a target="_blank" href="http://system1.com/terms/privacy.html">						
						Política de Privacidade					
					</a>						
					para saber mais sobre como recolhemos e usamos os dados. Pode modificar						
					as suas configurações a qualquer momento clicando em						
				</span>							
			`,
			privacyPolicyButton: 'Alterar Configurações de Privacidade',
			consentLink: 'OK',
		},
	},
	ja: {
		banner: {
			title: 'プライバシーの選択',
			description: `
					本サイトを利用されることにより、お客様は当社が個別にカスタマイズされたコンテンツおよび広告を提供し、サイトの利用を測定および分析するためにクッキーおよび情報を使用することに同意されることになります。設定を変更するには「詳しく読む」をクリックしてください。
				`,
			links: {
				data: {
					title: '使用される情報',
					description: `			
							<ul>		
								<li>ブラウザのタイプとその設定</li>	
								<li>端末のオペレーティングシステムに関する情報</li>	
								<li>クッキーに関する情報</li>	
								<li>端末に割り当てられる他の識別情報に関する情報</li>	
								<li>端末がクライアントのウェブサイトまたはモバイルアプリケーションにアクセスする際の	
									IPアドレス
								</li>	
								<li>訪問先または使用したウェブページおよびモバイルアプリを含む、	
									その端末上でのユーザーアクティビティに関する情報
								</li>	
								<li>ウェブサイトまたはモバイルのアプリケーションに	
									アクセス
									する際の端末の地理的位置に関する情報
								</li>	
							</ul>		
						`,
				},
				purposes: {
					title: '情報を保管する目的',
				},
				manage: '詳しく読む' /* 詳しく読む */,
				accept: 'はい、分かりました' /* OK */,
			},
		},
		summary: {
			title: '情報の使われ方について詳しく知りたいですか？',
			description: `当社および選択された企業がお客様の情報にアクセスし、以下の目的のために					
					使用することができます。以下の選択肢をカスタマイズするか、				
					目的をご了承いただける場合はそのまま当社サイトをご利用ください。`,
			detailLink: '詳しく読む & 環境設定',
			who: {
				title: 'この情報は誰が使用するのでしょうか？',
				description: `当社および予め選択された企業がお客様の情報を使用します。各企業については				
						上記のリンクをご覧いただくか、`,
				link: 'こちらから全リストをご覧いただけます。',
			},
			what: {
				title: 'どのような情報が使用されるのでしょうか？',
				description: '様々な企業がそれぞれ異なる情報を使用します。',
				link: 'こちらから全リストをご覧いただけます。',
			},
		},
		details: {
			back: '戻る',
			save: 'はい、分かりました',
		},
		purposes: {
			title: '',
			description: '',
			back: '',
			globalOptoutDescription: `					
					<p>				
						収集、使用、また処理するデータの種類や、仕様によりプライバシーが含まれる他の要素に従い、			
						お客様の同意に依存する特定のパートナーもいれば、選択解除を求められる場合もあります。各ベンダーに関する情報や			
						選択を実行される場合は、以下をご覧ください。また選択を解除される場合は、以下にアクセスしてください			
						<a href="http://optout.networkadvertising.org/?c=1#!/" target="_blank">			
							NAI		
						</a>			
						,			
						<a href="http://optout.aboutads.info/?c=2#!/" target="_blank">			
							DAA		
						</a>			
						, and			
						<a href="http://youronlinechoices.eu/" target="_blank">			
							EDAA		
						</a>			
						sites.			
					</p>				
				`,
			purpose1: {
				description: '利用者の端末上への情報の保管または情報へのアクセスを許可します。',
				menu: '情報の保管およびアクセスのテスト',
				optoutDescription: '',
			},
			purpose2: {
				description: `複数のサイト、アプリ、また端末から収集されたデータから分かる、あるいは推測される利用者の好みまたは関心に基づいて個別にカスタマイズされた広告を提供し情報を提供するために、利用者のデータの処理 (配信、測定および報告を含む) を許可します。また場合によってはその目的のために情報にアクセスするか、それを端末に保管します。				
					以下の機能が含まれます:				
					<ul>				
						<li>データをオフラインのソースとマッチングする - 他のコンテクストにおいて最初に収集されたオフラインソースのデータを組み合わせます。</li>			
						<li>端末のリンク付け - 利用者のデータを処理して当該利用者を複数の端末に接続できるようにします。</li>			
						<li>正確な地理的位置データ - 特定のサードパーティが同意した目的を支援するために、利用者の正確な地理的位置データの処理を許可します。</li>			
					</ul>`,
				menu: '個別化',
			},
			purpose3: {
				description: `コンテンツまたは広告を配信するために利用者のデータを処理し、当該のコンテンツまたは広告の配信の測定を行い、洞察を抽出してレポートを作成し、サービスの利用状態を理解できるようにします。また場合によってはその目的のために情報にアクセスするか、それを端末に保管します。				
					以下の機能が含まれます:				
					<ul>				
						<li>データをオフラインのソースとマッチングする - 他のコンテクストにおいて最初に収集されたオフラインソースのデータを組み合わせます。</li>			
						<li>端末のリンク付け - 利用者のデータを処理して当該利用者を複数の端末に接続できるようにします。</li>			
						<li>正確な地理的位置データ - 特定のサードパーティが同意した目的を支援するために、利用者の正確な地理的位置データの処理を許可します。</li>			
					</ul>`,
				menu: '広告の選択、配信、レポート作成',
			},
			purpose4: {
				description: `複数のサイト、アプリ、また端末から収集されたデータから分かる、あるいは推測される利用者の好みまたは関心に基づいて個別にカスタマイズされた広告を提供し情報を提供するために、利用者のデータの処理 (配信、測定および報告を含む) を許可します。また場合によってはその目的のために情報にアクセスするか、それを端末に保管します。				
					以下の機能が含まれます:				
					<ul>				
						<li>データをオフラインのソースとマッチングする - 他のコンテクストにおいて最初に収集されたオフラインソースのデータを組み合わせます。</li>			
						<li>端末のリンク付け - 利用者のデータを処理して当該利用者を複数の端末に接続できるようにします。</li>			
						<li>正確な地理的位置データ - 特定のサードパーティが同意した目的を支援するために、利用者の正確な地理的位置データの処理を許可します。</li>			
					</ul>`,
				menu: 'コンテンツの選択、配信、レポート作成',
			},
			purpose5: {
				description: `				
						お客様のコンテンツに関する情報の収集と、お客様のサービス利用状況の測定、理解およびそれに関するレポートに使用される、以前収集された情報との組合せです。これには、後に他のコンテクスト、すなわち例えばウェブサイトやアプリ、時系列などの他のサービスにおけるお客様向けのコンテンツや、場合によっては広告を個別化するための、個別化情報およびお客様の本サービス使用に関する情報の収集は含まれていません。
					`,
				menu: '測定',
			},
		},
		vendors: {
			title: 'この情報は誰が使用するのでしょうか？',
			description: `					
						こちらがお客様の情報を使用する企業の全リストです。詳しくは個人情報保護方針をお読みください。
					`,
			accept: '許可する',
			acceptAll: '"全て許可する',
			acceptNone: '全て拒否する',
			optOut: '選択解除が必要',
			back: '前のページでこれらの企業がデータを使用する方法をカスタマイズしてください',
		},
		footer: {
			message: `					
						<h2>当社はプライバシーを尊重します</h2>				
					`,
			description: `					
						<span>				
							このウェブサイトの改善に役立て、お客様のコンテンツ体験を			
							個別化および促進し、広告の目的および当社のトラフィックを分析するために、			
							当社および当社のパートナーはクッキーやピクセル、また場合によっては			
							ビーコンなどのテクノロジーを使用して特定のデータを収集します。サイトを			
							引き続き利用されるか「OK」をクリックされることで、お客様はこのテクノロジーの			
							使用およびデータの収集に同意されることになります。			
						</span>				
					`,
			privacyPolicy: `					
						<span>				
							当社の			
							<a target="_blank" href="http://system1.com/terms/privacy.html">			
								個人情報保護方針		
							</a>			
							をお読みいただき、当社のデータの収集および使用方法についてよく理解してください。設定は随時、			
							以下の順にクリックすることで変更できます。			
						</span>				
					`,
			privacyPolicyButton: 'プライバシーの設定を管理する',
			consentLink: 'OK',
		},
	},
	nl: {
		banner: {
			title: 'Privacykeuzes',
			description: `
				Door deze site te gebruiken, gaat u akkoord met ons gebruik van cookies en informatie om gepersonaliseerde inhoud en advertenties te leveren en het gebruik van de site te meten en te analyseren. Klik op "Meer informatie" om uw instellingen te wijzigen.
			`,
			links: {
				data: {
					title: 'Informatie die mag gebruikt worden',
					description: `
						<ul>				
							<li>Type browser en zijn instellingen</li>			
							<li>Information over het besturingssysteem van het toestel</li>			
							<li>Cookie informatie</li>			
							Door deze site te gebruiken, gaat u akkoord met ons gebruik van cookies en informatie om gepersonaliseerde inhoud en advertenties te leveren en het gebruik van de site te meten en te analyseren. Klik op "Meer informatie" om uw instellingen te wijzigen,			
							<li>Het IP-adres van waaruit het apparaat toegang heeft tot de website van een klant of			
								mobiele applicatie		
							</li>			
							<li>Informatie over de activiteit van de gebruiker op dat apparaat, met inbegrip van web			
								pagina's en bezochte of gebruikte mobiele apps		
							</li>			
							<li>Informatie over de geografische locatie van het apparaat wanneer het			
								een website of		
								mobiele applicatie opent		
							</li>			
						</ul>				
					`,
				},
				purposes: {
					title: 'Doeleinden voor gegevensopslag',
				},
				manage: 'Meer Leren' /* Meer Leren */,
				accept: 'Ok, Begrepen' /* OK */,
			},
		},
		summary: {
			title: 'Meer weten over hoe de informatie wordt gebruikt?',
			description: `
				Wij en geselecteerde bedrijven kunnen uw informatie raadplegen en gebruiken							
				voor de volgende doeleinden. U kunt uw keuzes hieronder aanpassen of						
				blijf onze site gebruiken als je akkoord gaat met de doeleinden.
			`,
			detailLink: 'Meer Leren & Selecteer Voorkeuren',
			who: {
				title: 'Wie gebruikt deze informatie?',
				description: `Wij en vooraf gekozen bedrijven zullen uw informatie gebruiken. Je kunt						
					elk bedrijf in de links hierboven bekijken of`,
				link: 'bekijk hier de volledige lijst.',
			},
			what: {
				title: 'Welke informatie wordt gebruikt?',
				description: 'Verschillende bedrijven gebruiken verschillende informatie,',
				link: 'bekijk hier de volledige lijst.',
			},
		},
		details: {
			back: 'Terug',
			save: 'Ok, Begrepen',
		},
		purposes: {
			title: '',
			description: '',
			back: '',
			globalOptoutDescription: `							
				<p>						
					Afhankelijk van het soort gegevens dat ze verzamelen, gebruiken en verwerken en andere factoren, waaronder privacy by design,					
					vertrouwen sommige partners op uw toestemming, terwijl andere u vragen om een opt-out. Voor informatie over elke verkoper en om					
					je keuzes te maken, kijk hieronder. Of om u af te melden, bezoek					
					<a href="http://optout.networkadvertising.org/?c=1#!/" target="_blank">					
						NAI				
					</a>					
					,					
					<a href="http://optout.aboutads.info/?c=2#!/" target="_blank">					
						DAA				
					</a>					
					, and					
					<a href="http://youronlinechoices.eu/" target="_blank">					
						EDAA				
					</a>					
					sites.					
				</p>						
			`,
			purpose1: {
				description: 'Laat toe om informatie op het apparaat van een gebruiker op te slaan of te raadplegen.',
				menu: 'Gegevensopslag en toegangstest',
				optoutDescription: '',
			},
			purpose2: {
				description: `
					Sta de verwerking van de gegevens van een gebruiker toe om gepersonaliseerde reclame te leveren en te informeren (inclusief levering, meting en rapportage) op basis van de voorkeuren of interesses van een gebruiker die bekend zijn of die worden afgeleid uit gegevens die op meerdere sites, apps of apparaten zijn verzameld; en/of toegang hebben tot of informatie opslaan op apparaten met dat doeleinde.'						
					Will include following Features:						
					<ul>						
						<li>Het matchen van gegevens met offline bronnen - het combineren van gegevens uit offline bronnen die in eerste instantie in andere contexten zijn verzameld.</li>					
						<li>Koppeling van apparaten - maakt het mogelijk om de gegevens van een gebruiker te verwerken om die gebruiker over meerdere apparaten te verbinden.</li>					
						<li>Precieze geografische locatiegegevens - maken het mogelijk de precieze geografische locatiegegevens van een gebruiker te verwerken ter ondersteuning van een doel waarvoor die bepaalde derde partij toestemming heeft gegeven.</li>					
					</ul>
				`,
				menu: 'Personalisatie',
			},
			purpose3: {
				description: `
					Sta de verwerking van de gebruikersgegevens toe om inhoud of advertenties te leveren en de levering van dergelijke inhoud of advertenties te meten, inzichten te verkrijgen en rapporten te genereren om het gebruik van de dienst te begrijpen; en/of toegang hebben tot informatie of informatie opslaan op apparaten met dat doeleinde.						
					Will include following Features:						
					<ul>						
						<li>Het matchen van gegevens met offline bronnen - het combineren van gegevens uit offline bronnen die in eerste instantie in andere contexten zijn verzameld.</li>					
						<li>Koppeling van apparaten - maakt het mogelijk om de gegevens van een gebruiker te verwerken om die gebruiker over meerdere apparaten te koppelen.</li>					
						<li>Precieze geografische locatiegegevens - maken het mogelijk de precieze geografische locatiegegevens van een gebruiker te verwerken ter ondersteuning van een doel waarvoor die bepaalde derde partij toestemming heeft gegeven.</li>					
					</ul>
				`,
				menu: 'Selectie van advertenties, levering, rapportage',
			},
			purpose4: {
				description: `
					Sta verwerking van gebruikersgegevens toe om gepersonaliseerde inhoud te leveren en te informeren (inclusief levering, meting en rapportage) op basis van de voorkeuren of interesses van een gebruiker die bekend zijn of die worden afgeleid uit gegevens die via meerdere sites, apps of apparaten zijn verzameld; en/of met dat doeleinde toegang te krijgen tot informatie of die informatie op apparaten op te slaan.'						
					Will include following Features:						
					<ul>						
						<li>Matching Data to Offline Sources - het combineren van gegevens uit offline bronnen die in eerste instantie in andere contexten zijn verzameld.</li>					
						<li>Koppeling van apparaten - maakt het mogelijk om de gegevens van een gebruiker te verwerken om die gebruiker over meerdere apparaten te verbinden.</li>					
						<li>Precieze geografische locatiegegevens - maken het mogelijk de precieze geografische locatiegegevens van een gebruiker te verwerken ter ondersteuning van een doel waarvoor die bepaalde derde partij toestemming heeft gegeven.</li>					
					</ul>
				`,
				menu: 'Content selectie, levering, rapportage',
			},
			purpose5: {
				description: `					
					Het verzamelen van informatie over uw gebruik van de inhoud, en de combinatie met eerder verzamelde informatie, wordt gebruikt om uw gebruiksgedrag te meten, te begrijpen en te rapporteren. Dit omvat niet de personalisatie, het verzamelen van informatie over uw gebruik van deze dienst om vervolgens de inhoud en/of de reclame voor u in andere contexten te personaliseren, d.w.z. op andere diensten, zoals websites of apps, na verloop van tijd.
				`,
				menu: 'Measurement',
			},
		},
		vendors: {
			title: 'Wie gebruikt deze informatie?',
			description: `
				Hier is de volledige lijst van bedrijven die uw informatie zullen gebruiken. Bekijk hun privacybeleid voor meer details.
			`,
			accept: 'Sta toe',
			acceptAll: '"Sta toe aan iedereen',
			acceptNone: 'Alles afwijzen',
			optOut: 'vereist uitschrijving',
			back: 'Pas aan hoe deze bedrijven gegevens van de vorige pagina gebruiken',
		},
		footer: {
			message: `							
				<h2>Wij hechten belang aan privacy</h2>						
			`,
			description: `							
				<span>						
					Om deze website beter te maken, en je contentervaring					
					te personaliseren en te verbeteren, voor reclamedoeleinden en om ons verkeer					
					te analyseren, maken wij en onze partners gebruik van technologie zoals cookies,					
					pixels, en/of bakens om bepaalde gegevens te verzamelen. Door					
					de site te blijven gebruiken of op "OK" te klikken, ga je akkoord met					
					het gebruik van deze technologie en de gegevensverzameling.					
				</span>						
			`,
			privacyPolicy: `							
				<span>						
					Bezoek aub onze					
					<a target="_blank" href="http://system1.com/terms/privacy.html">					
						Privacy Policy				
					</a>					
					om meer te weten te komen over hoe we gegevens verzamelen en gebruiken. U kunt					
					uw instellingen op elk moment wijzigen door te klikken op					
				</span>						
			`,
			privacyPolicyButton: 'Beheer Privacyinstellingen',
			consentLink: 'OK',
		},
	},
	zh: {
		banner: {
			title: '隐私选择',
			description: `					
				通过使用本网站，您同意我们使用cookies和信息来提供个性化的内容和广告，并评估和分析网站使用情况。点击“了解更多”更改设置。
			`,
			links: {
				data: {
					title: '可能使用的信息',
					description: `			
						<ul>		
							<li>浏览器类型及其设置</li>	
							<li>有关设备操作系统的信息</li>	
							<li>Cookie 信息</li>	
							<li>有关分配给设备的其他标识符的信息</li>	
							<li>设备用来访问客户端网站或移动应用程序的IP地址</li>	
							<li>
								有关用户在该设备上活动的信息，	
								包括访问或使用的网页和移动应用程序
							</li>
							<li>有关设备访问网站或移动应用程序时的地理位置的信息</li>	
						</ul>		
					`,
				},
				purposes: {
					title: '用于存储信息的目的',
				},
				manage: '了解更多' /* 了解更多 */,
				accept: '好的, 明白' /* 好的 */,
			},
		},
		summary: {
			title: '了解有关如何使用信息的详情',
			description: `我们和部分公司可能出于以下目的，访问和使用您的信息。					
				您可以在下面自定义您的选择，或者您觉得没问题，				
				也可以继续使用我们的网站。`,
			detailLink: '了解更多并设置首选项',
			who: {
				title: '谁在使用这些信息？',
				description: `我们和预选公司将使用您的信息。				
					您也可以在此链接查看每家公司，或者`,
				link: '在此处查看完整列表。',
			},
			what: {
				title: '哪些信息正在被使用？',
				description: '不同的公司使用不同的信息',
				link: '在此处查看完整列表。',
			},
		},
		details: {
			back: '返回',
			save: '好的，明白',
		},
		purposes: {
			title: '',
			description: '',
			back: '',
			globalOptoutDescription: `					
				<p>				
					根据合作伙伴收集、使用和处理的数据类型，以及其他因素（包括设计隐私），			
					某些合作伙伴取决于您的同意，而其他合作伙伴则要求您选择退出。			
					有关每个供应商的信息以及要执行的选择，请参见下文。 或选择退出，请访问			
					<a href="http://optout.networkadvertising.org/?c=1#!/" target="_blank">			
						NAI		
					</a>			
					,			
					<a href="http://optout.aboutads.info/?c=2#!/" target="_blank">			
						DAA		
					</a>			
					, and			
					<a href="http://youronlinechoices.eu/" target="_blank">			
						EDAA		
					</a>			
					sites.			
				</p>				
			`,
			purpose1: {
				description: '允许在用户设备上存储或访问信息。',
				menu: '信息存储与访问测试',
				optoutDescription: '', // optional purpose-level override, otherwise falls back to globalOptoutDescription
			},
			purpose2: {
				description: `
					允许根据用户的喜好或从多个站点、应用程序或设备上，收集的数据推断出的兴趣，对用户数据进行处理，以提供并通知个性化广告（包括投放、评估和报告）； 和/或为此目的在设备上访问或存储信息。				
					将包括以下功能：				
					<ul>				
						<li>将数据与脱机源匹配-合并来自脱机来源的数据，这些数据最初是在其他情况下收集的。</li>			
						<li>链接设备-允许处理用户数据，以跨多个设备连接该用户。</li>			
						<li>精确地理位置数据-允许处理用户的精确地理位置数据，以支持某些第三方同意的目的。</li>			
					</ul>
				`,
				menu: '个性化',
			},
			purpose3: {
				description: `
					允许处理用户的数据以投放内容或广告，并评估此类内容或广告的投放，提取见解并生成报告以了解服务使用情况； 和/或为此目的在设备上访问或存储信息。				
					将包括以下功能：				
					<ul>				
						<li>将数据与脱机源匹配-合并来自脱机来源的数据，这些数据最初是在其他情况下收集的。</li>			
						<li>链接设备-允许处理用户数据，以跨多个设备连接该用户。</li>			
						<li>精确地理位置数据-允许处理用户的精确地理位置数据，以支持某些第三方同意的目的。</li>			
					</ul>
				`,
				menu: '广告选择，投放，报告',
			},
			purpose4: {
				description: `
					允许根据用户的偏好或从多个站点、应用程序或设备上收集的数据推断出的喜好或兴趣来处理用户数据，以提供和通知个性化内容（包括投放、评估和报告）； 和/或为此目的在设备上访问或存储信息。				
					将包括以下功能：				
					<ul>				
						<li>将数据与脱机源匹配-合并来自脱机来源的数据，这些数据最初是在其他情况下收集的。</li>			
						<li>链接设备-允许处理用户数据，以跨多个设备连接该用户。</li>			
						<li>精确地理位置数据-允许处理用户的精确地理位置数据，以支持某些第三方同意的目的。</li>			
					</ul>
				`,
				menu: '内容选择，投放，报告',
			},
			purpose5: {
				description: `				
					有关您对内容使用情况的信息的收集，以及与先前收集的信息的组合，用于评估、了解和报告您对服务的使用情况。 这不包括个性化，收集有关您使用此服务的信息，以便随后在其他情况下（即，在其他服务上，如网站或应用程序上）为您个性化内容和/或广告。
				`,
				menu: '评估',
			},
		},
		vendors: {
			title: '谁在使用这些信息？',
			description: `
				这是将使用您信息的公司的完整列表。 请查看其隐私政策以了解详情。
			`,
			accept: '允许',
			acceptAll: '全部允许',
			acceptNone: '全部禁止',
			optOut: '要求退出',
			back: '自定义这些公司如何使用上一页中的数据',
		},
		footer: {
			message: `					
				<h2>我们重视隐私</h2>				
			`,
			description: `					
				<span>				
					为了帮助改善本网站、个性化和增强您的内容体验、			
					用于广告目的以及分析我们的流量，			
					我们和合作伙伴使用Cookies、			
					像素和/或信标等技术，来收集某些数据。			
					继续使用该网站或点击“确定”，			
					即表示您同意使用该技术并收集数据。			
				</span>				
			`,
			privacyPolicy: `					
				<span>				
					请访问我们的			
					<a target="_blank" href="http://system1.com/terms/privacy.html">			
						隐私政策		
					</a>			
					详细了解我们如何收集和使用数据。			
					您可以随时通过点击以下链接修改设置			
				</span>				
			`,
			privacyPolicyButton: '管理隐私设置',
			consentLink: '好',
		},
	},
};
