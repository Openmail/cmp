import { h, Component } from 'preact';
import style from './banner.less';

import PurposeList from './purposeList';
import Label from '../label/label';

class LocalLabel extends Label {
	static defaultProps = {
		prefix: 'banner',
		isShowing: false,
	};
}

export default class Banner extends Component {
	constructor(props) {
		super(props);
	}

	handleAcceptAll = () => {
		const { store } = this.props;
		store.toggleAll();
	};

	handleSave = () => {
		const { store } = this.props;
		store.save();
	};

	render(props) {
		const { isShowing, store } = props;
		const {
			config: { theme },
			displayLayer1,
			tcData,
		} = store;

		const canSaveChanges = !!tcData; // show save button if the user has made some customizations

		const {
			isBannerModal,
			isBannerInline,
			primaryColor,
			primaryTextColor,
			backgroundColor,
			textColor,
			textLightColor,
		} = theme;

		const bannerClasses = [style.banner];
		if (!isShowing) {
			bannerClasses.push(style.hidden);
		}
		if (isBannerModal) {
			bannerClasses.push(style.bannerModal);
		} else if (isBannerInline) {
			bannerClasses.push(style.bannerInline);
		}

		return (
			<div
				ref={(el) => (this.bannerRef = el)}
				class={bannerClasses.join(' ')}
				style={{
					backgroundColor,
					color: textLightColor,
				}}
			>
				<div class={style.content}>
					<div class={style.message} ref={(el) => (this.messageRef = el)}>
						<div class={style.info}>
							<div class={style.title} style={{ color: textColor }}>
								<LocalLabel localizeKey="title">Ads help us run this site</LocalLabel>
							</div>
							<div class={style.intro}>
								<LocalLabel localizeKey="description">
									When you visit our site, <a>pre-selected companies</a> may access and use certain information on your
									device and about this site to serve relevant ads or personalized content.
								</LocalLabel>
							</div>
							<div class={style.consent}>
								<a class={style.learnMore} style={{ color: primaryColor, borderColor: primaryColor }}>
									<LocalLabel localizeKey="links.manage">Manage Your Choices</LocalLabel>
								</a>
								<a
									class={style.continue}
									onClick={this.handleAcceptAll}
									style={{
										backgroundColor: primaryColor,
										borderColor: primaryColor,
										color: primaryTextColor,
									}}
								>
									<LocalLabel localizeKey="links.accept">Continue to site</LocalLabel>
								</a>
								{!!canSaveChanges && (
									<a
										class={style.save}
										onClick={this.handleSave}
										style={{
											color: primaryColor,
											borderColor: primaryColor,
										}}
									>
										<LocalLabel localizeKey="links.save">Save</LocalLabel>
									</a>
								)}
							</div>
							<div class={style.optionsContainer}>
								{!displayLayer1 ? <h1>Loading</h1> : <PurposeList store={store} />}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}