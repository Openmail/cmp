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

	componentDidCatch(error, errorInfo) {
		console.log('componentCaughtError', error, errorInfo);
	}

	componentDidMount() {
		const { store } = this.props;
		store.subscribe(this.updateState.bind(this));
	}

	render(props, state) {
		const { store } = state;
		const { isModalShowing, tcModel } = store;

		return (
			<div class={style.gdpr}>
				<Banner store={store} isShowing={isModalShowing && tcModel} />
			</div>
		);
	}
}
