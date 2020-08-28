import { h, Component } from 'preact';
import style from './purposeList.less';

import ChevronIcon from '../chevronicon/chevronicon';
import Switch from '../switch/switch';
import ExternalLinkIcon from '../externallinkicon/externallinkicon';

import logger, { EVENTS as LOG_EVENTS } from '../../lib/logger';

export default class VendorList extends Component {
	state = {
		expanded: new Set(),
	};

	expandRow(id) {
		const { expanded } = this.state;
		if (expanded.has(id)) {
			expanded.delete(id);
		} else {
			expanded.add(id);
		}

		this.setState({
			expanded,
		});
	}

	handleConsent(props, state, { id }) {
		const { store } = props;
		store.toggleVendorConsents([id]);

		logger(LOG_EVENTS.CMPClick, {
			action: 'click',
			category: 'toggleVendor',
			label: id,
		});
	}

	renderRow(props, state, { headline, expanded, theme, list, displayPrefix, handleConsent, optIns }) {
		const { store } = this.props;
		const { gvl } = store;
		const {
			purposes: globalPurposes,
			specialPurposes: globalSpecialPurposes,
			specialFeatures: globalSpecialFeatures,
			features: globalFeatures,
		} = gvl;

		return (
			<li class={style.item}>
				{headline}
				<ul class={[style.itemPurpose].join(' ')}>
					{list.map((item) => {
						const {
							name,
							id,
							policyUrl,
							purposes = [],
							legIntPurposes = [],
							specialPurposes = [],
							specialFeatures = [],
							features = [],
						} = item;
						const displayId = `${displayPrefix}-${id}`;
						const isExpanded = expanded.has(displayId);
						const canConsent = handleConsent && (purposes.length || specialFeatures.length);

						return (
							<li
								className={[
									style.itemInteractive,
									isExpanded ? style.expanded : '',
									canConsent ? style.canConsent : '',
								].join(' ')}
							>
								<a
									style={{ color: theme.textLinkColor }}
									class={isExpanded ? style.detailExpand : ''}
									onClick={this.expandRow.bind(this, displayId)}
								>
									<ChevronIcon color={theme.textLinkColor} />
									<span>
										{name} <small class={style.reference}>(#{id})</small>
									</span>
								</a>
								{canConsent ? (
									<Switch
										color={theme.primaryColor}
										class={style.switch}
										dataId={displayId}
										isSelected={optIns.has(id)}
										onClick={handleConsent.bind(this, props, state, { id })}
									/>
								) : (
									<span>Requires Opt-out</span>
								)}
								{isExpanded && (
									<div
										className={[style.itemDetails, style.vendorDetails].join(' ')}
										style={{ color: theme.textLightColor }}
									>
										{purposes.length > 0 && (
											<div>
												<h4>Purposes (Consent)</h4>
												<ul>
													{purposes
														.filter((key) => !legIntPurposes.includes(key))
														.map((key) => {
															const { name: purposeName } = globalPurposes[key];
															return <li>{purposeName}</li>;
														})}
												</ul>
											</div>
										)}

										{legIntPurposes.length > 0 && (
											<div>
												<h4>Purposes (Legitimate Interest)</h4>
												<ul>
													{legIntPurposes.map((key) => {
														const { name: purposeName } = globalPurposes[key];
														return <li>{purposeName}</li>;
													})}
												</ul>
											</div>
										)}

										{specialPurposes.length > 0 && (
											<div>
												<h4>Special Purposes</h4>
												<ul>
													{specialPurposes.map((key) => {
														const { name: purposeName } = globalSpecialPurposes[key];
														return <li>{purposeName}</li>;
													})}
												</ul>
											</div>
										)}

										{features.length > 0 && (
											<div>
												<h4>Features</h4>
												<ul>
													{features.map((key) => {
														const { name: featureName } = globalFeatures[key];
														return <li>{featureName}</li>;
													})}
												</ul>
											</div>
										)}

										{specialFeatures.length > 0 && (
											<div>
												<h4>Special Features</h4>
												<ul>
													{specialFeatures.map((key) => {
														const { name: featureName } = globalSpecialFeatures[key];
														return <li>{featureName}</li>;
													})}
												</ul>
											</div>
										)}

										<p>
											<a href={policyUrl} target="_blank" title={`Privacy Policy for ${name}`}>
												Privacy Policy: {policyUrl} <ExternalLinkIcon color={theme.textLinkColor} />
											</a>
										</p>
									</div>
								)}
							</li>
						);
					})}
				</ul>
			</li>
		);
	}

	render(props, state) {
		const { store } = props;
		const {
			config: { theme },
			tcModel,
			gvl,
		} = store;

		const { vendorConsents } = tcModel;

		const { vendors } = gvl;

		const { expanded } = state;

		const displayVendorsDom = this.renderRow(props, state, {
			headline: <h3 class={style.rowTitle}>Partners who are part of the IAB TCF</h3>,
			theme,
			expanded,
			handleConsent: this.handleConsent,
			optIns: vendorConsents,
			list: Object.keys(vendors).map((key) => vendors[key]),
			displayPrefix: 'vendors-',
		});

		return <ul class={style.purposeList}>{displayVendorsDom}</ul>;
	}
}
