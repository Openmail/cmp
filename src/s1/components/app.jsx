import { h, Component } from 'preact';
import Banner from './banner/banner';

import style from './app.less';

export default class App extends Component {
	static defaultProps = {};

	state = {
		store: this.props.store,
	};

	updateState(store) {
		this.setState({ store });
	}

	componentDidMount() {
		const { store } = this.props;
		store.subscribe(this.updateState.bind(this));
	}

	render(props, state) {
		const { store } = state;
		const {
			config: { theme },
			gvl = {},
			tcData,
		} = store;
		const { purposes } = gvl;

		console.log('app.js: render: store', store);

		return (
			<div class={style.gdpr}>
				<Banner store={store} />
			</div>
		);
	}
}
