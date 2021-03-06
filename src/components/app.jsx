import {h, Component} from 'preact';
import style from './app.less';
import {SECTION_PURPOSES, SECTION_VENDORS} from './popup/details/details';
import Popup from './popup/popup';
import Banner from './banner/banner';
import Footer from './footer/footer';

export default class App extends Component {
	static defaultProps = {
		theme: {}
	};

	state = {
		store: this.props.store,
		selectedDetailsPanelIndex: SECTION_PURPOSES,
		visitedPurposes: {}
	};

	onSave = () => {
		const {store, notify} = this.props;
		store.persist();
		notify('onSubmit');
		store.toggleConsentToolShowing(false);
	};

	onChangeDetailsPanel = panelIndex => {
		this.props.store.toggleModalShowing(true);
		this.setState({
			selectedDetailsPanelIndex: Math.max(0, panelIndex)
		});
	};

	onSelectPurpose = purposeItem => {
		const {visitedPurposes} = this.state;
		const {store} = this.props;
		const {
			selectAllVendors,
			vendorConsentData: {created}
		} = store;

		// If this is the user's first visit according to their cookie data
		// our workflow is to default all vendor consents to allow for
		// each purpose they inspect.
		if (!created && !visitedPurposes[purposeItem.id]) {
			selectAllVendors(true, purposeItem.id);
		}
		this.setState({
			visitedPurposes: {
				...visitedPurposes,
				[purposeItem.id]: true
			}
		});

		store.toggleModalShowing(true);
		this.setState({
			selectedPurposeDetails: purposeItem,
			selectedDetailsPanelIndex: SECTION_VENDORS
		});
	};

	updateState = store => {
		this.setState({store});
	};

	componentWillMount() {
		const {store} = this.props;
		store.subscribe(this.updateState);
	}

	render(props, state) {
		const {store, selectedDetailsPanelIndex, selectedPurposeDetails} = state;
		const {theme} = props;

		const {
			isModalShowing,
			isBannerShowing,
			toggleModalShowing,
			vendorList = {},
			customPurposeList = {}
		} = store;

		const {purposes = []} = vendorList;
		const {purposes: customPurposes = []} = customPurposeList;

		return (
			<div class={style.gdpr}>
				{isBannerShowing && !isModalShowing && (
					<Banner
						isShowing={isBannerShowing}
						isModalShowing={isModalShowing}
						onSave={this.onSave}
						onShowModal={toggleModalShowing}
						onSelectPurpose={this.onSelectPurpose}
						onChangeDetailsPanel={this.onChangeDetailsPanel}
						theme={theme}
						purposes={[...purposes, ...customPurposes]}
						selectedPurposeDetails={selectedPurposeDetails}
						store={store}
					/>
				)}
				{isModalShowing && (
					<Popup
						store={store}
						onSave={this.onSave}
						onChangeDetailsPanel={this.onChangeDetailsPanel}
						onSelectPurpose={this.onSelectPurpose}
						selectedDetailsPanelIndex={selectedDetailsPanelIndex}
						theme={theme}
						selectedPurposeDetails={selectedPurposeDetails}
					/>
				)}
				<Footer store={store} onSave={this.onSave} />
			</div>
		);
	}
}
