import { TCModel } from '@iabtcf/core';
import { h, Component } from 'preact';
import style from './purposeList.less';

import ChevronIcon from '../chevronicon/chevronicon';
import Switch from '../switch/switch';

const PURPOSE_TYPE = {
	SPECIAL_FEATURE: 'specialFeature',
};

export default class PurposeList extends Component {
	state = {
		expanded: new Set(),
	};

	expandPurposeRow(id) {
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

	handleToggleSpecialFeature(props, state, { id }) {
		const { store } = props;
		store.toggleSpecialFeatureOptins([id]);
	}

	handleTogglePurpose(props, state, { id }) {
		const { store } = props;
		store.togglePurposeConsents([id]);
	}

	handleToggleStack(props, state, { id }) {
		const { store } = props;
		store.toggleStackConsent(id);
	}

	renderRow(props, state, { headline, expanded, theme, list, displayPrefix, handleConsent, optIns }) {
		return (
			<li class={style.item}>
				{headline}
				<ul class={style.itemPurpose}>
					{list.map((item) => {
						const { name, description, id } = item;
						const displayId = `${displayPrefix}-${id}`;
						const isExpanded = expanded.has(displayId);

						return (
							<li className={[style.itemInteractive, isExpanded ? style.expanded : ''].join(' ')}>
								<a
									style={{ color: theme.textLinkColor }}
									class={isExpanded ? style.detailExpand : ''}
									onClick={this.expandPurposeRow.bind(this, displayId)}
								>
									<ChevronIcon color={theme.textLinkColor} />
									<span>{name}</span>
								</a>
								{handleConsent ? (
									<Switch
										color={theme.primaryColor}
										class={style.switch}
										dataId={displayId}
										isSelected={optIns.has(id)}
										onClick={handleConsent.bind(this, props, state, { id })}
									/>
								) : null}
								<div className={[style.itemDetails].join(' ')} style={{ color: theme.textLightColor }}>
									<p>{description}</p>
								</div>
							</li>
						);
					})}
				</ul>
			</li>
		);
	}

	renderStack(props, state, { headline, name, description, isConsented, id, displayId, isExpanded, theme }) {
		return (
			<li class={[style.item, isExpanded ? style.expanded : ''].join(' ')}>
				{headline}
				<div className={[style.itemInteractive, isExpanded ? style.expanded : ''].join(' ')}>
					<a
						style={{ color: theme.textLinkColor }}
						class={isExpanded ? style.detailExpand : ''}
						onClick={this.expandPurposeRow.bind(this, displayId)}
					>
						<ChevronIcon color={theme.textLinkColor} />
						<span>{name}</span>
					</a>
					<Switch
						color={theme.primaryColor}
						class={style.switch}
						dataId={displayId}
						isSelected={isConsented}
						onClick={this.handleToggleStack.bind(this, props, state, { id })}
					/>
					<div className={[style.itemDetails].join(' ')} style={{ color: theme.textLightColor }}>
						<p>{description}</p>
					</div>
				</div>
			</li>
		);
	}

	render(props, state) {
		const { store } = props;
		const {
			gvl,
			displayLayer1,
			config: { theme },
			tcModel,
		} = store;

		const { stack: displayStack } = displayLayer1;
		const { features, purposes, stacks, specialFeatures, specialPurposes } = gvl;

		const { expanded } = state;

		const displayPurposesDom = this.renderRow(props, state, {
			headline: (
				<h3 class={style.rowTitle}>
					We and <a style={{ color: theme.textLinkColor }}>our partners</a>:
				</h3>
			),
			theme,
			expanded,
			handleConsent: this.handleTogglePurpose,
			optIns: tcModel.purposeConsents,
			list: displayLayer1.purposes.map((key) => purposes[key]),
			displayPrefix: `purpose-`,
		});

		const stackDisplayId = `stack-${displayStack}`;
		const displayStackDom = displayStack
			? this.renderStack(props, state, {
					headline: (
						<h3 class={style.rowTitle}>
							We and <a style={{ color: theme.textLinkColor }}>our partners</a> process personal data such as IP
							address, unique ID, browsing data for:
						</h3>
					),
					theme,
					displayId: stackDisplayId,
					isExpanded: expanded.has(stackDisplayId),
					isConsented: store.getStackOptin(displayStack),
					...stacks[displayStack],
			  })
			: null;

		const displaySpecialFeaturesDom = this.renderRow(props, state, {
			headline: (
				<h3 class={style.rowTitle}>
					For some of the purposes above we and <a style={{ color: theme.textLinkColor }}>our partners</a>:
				</h3>
			),
			theme,
			expanded,
			handleConsent: this.handleToggleSpecialFeature,
			optIns: tcModel.specialFeatureOptins,
			list: displayLayer1.specialFeatures.map((key) => specialFeatures[key]),
			displayPrefix: `special-feature-`,
		});

		const displaySpecialPurposesDom = this.renderRow(props, state, {
			headline: (
				<h3 class={style.rowTitle}>
					We need your consent for all the purpsoes above but we have a legitimate interest for these purposes:
				</h3>
			),
			theme,
			expanded,
			list: displayLayer1.specialPurposes.map((key) => specialPurposes[key]),
			displayPrefix: `special-purpose-`,
		});

		const displayFeaturesDom = this.renderRow(props, state, {
			headline: (
				<h3 class={style.rowTitle}>
					For some of the purposes above we and <a style={{ color: theme.textLinkColor }}>our partners</a>:
				</h3>
			),
			theme,
			expanded,
			list: displayLayer1.features.map((key) => features[key]),
			displayPrefix: `features-`,
		});

		return (
			<ul class={style.purposeList}>
				{displayPurposesDom}
				{displayStackDom}
				{displaySpecialFeaturesDom}
				{displaySpecialPurposesDom}
				{displayFeaturesDom}
			</ul>
		);
	}
}
