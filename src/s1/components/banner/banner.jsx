import { h, Component } from 'preact';
import style from './banner.less';

import Label from '../label/label';
import ChevronIcon from '../chevronicon/chevronicon';

class LocalLabel extends Label {
	static defaultProps = {
		prefix: 'banner',
	};
}

export default class Banner extends Component {
	constructor(props) {
		super(props);
	}

	render(props, state) {
		let isShowing = true;
		const { store } = props;
		const { theme, gvl } = store;
		const { purposes } = gvl;
		const {
			isBannerModal,
			isBannerInline,
			boxShadow,
			primaryColor,
			primaryTextColor,
			backgroundColor,
			textColor,
			textLightColor,
			textLinkColor,
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
					boxShadow: boxShadow || `0px 0px 5px ${primaryColor}`,
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
									style={{
										backgroundColor: primaryColor,
										borderColor: primaryColor,
										color: primaryTextColor,
									}}
								>
									<LocalLabel localizeKey="links.accept">Continue to site</LocalLabel>
								</a>
							</div>
							{!purposes ? (
								<h1>Loading</h1>
							) : (
								<ul class={style.options}>
									{Object.keys(purposes).map((key) => {
										const { name, description } = purposes[key];
										return (
											<li class={[style.option, style.expanded].join(' ')}>
												<a class={style.detailExpand}>
													<ChevronIcon color={textLinkColor} />
													{name}
												</a>
												<div className={style.optionDetails} style={{ color: textLightColor }}>
													{description}
												</div>
											</li>
										);
									})}
								</ul>
							)}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
