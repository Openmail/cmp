import { h, Component } from 'preact';
import style from './intro.less';

export default class S1CMPJS extends Component {
	render() {

		return (
			<div>
				<h1 className={style.header}>System1 CMP Loader</h1>
				<p>
					The System1 Consent Management Platform (CMP) gathers and stores user consent for use and application of data according to the Global Data Protection Regulation.
				</p>
				<p>
					`cmpjs` is shim around [appnexus-cmp](https://github.com/appnexus/cmp) that aims to improve installation, integration, and management of the underlying CMP.
				</p>
			</div>
		);
	}
}
