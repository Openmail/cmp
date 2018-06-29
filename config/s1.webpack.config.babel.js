/* @noflow */
/* eslint-disable import/no-extraneous-dependencies */
import webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import path from 'path';
import UglifyJS from 'uglify-es';

import {
	commonConfig,
	uglifyPlugin,
	version
} from './common.webpack.config.babel';

const ENV = process.env.NODE_ENV || 'development';

module.exports = [
	// // S1 Loader
	// {
	// 	context: path.resolve(__dirname, '../', 'src'),
	// 	entry: './loader.js',
	// 	output: {
	// 		path: path.resolve(__dirname, '../', 'build'),
	// 		publicPath: './',
	// 		filename: 'loader.js'
	// 	},
	// 	plugins: [
	// 		new webpack.optimize.UglifyJsPlugin({
	// 			minimize: true,
	// 			compress: { warnings: false }
	// 		})
	// 	]
	// },
	// S1 CMP
	{
		entry: {
			cmp: './s1/cmp.js'
		},
		...commonConfig,
		output: {
			path: path.resolve(__dirname, '../', `dist/${version}`),
			publicPath: './',
			filename: 'sdk.js'
		},
		plugins: [
			new webpack.DefinePlugin({
				'process.env.NODE_ENV': JSON.stringify(ENV)
			}),
			new CopyWebpackPlugin([
				{
					from: 'loader.js',
					to: './shim.js',
					transform(content) {
						// Just want to uglify and copy this file over
						return Promise.resolve(
							Buffer.from(UglifyJS.minify(content.toString()).code, 'utf8')
						);
					}
				}
			])
		].concat(ENV === 'production' ? uglifyPlugin : [])
	}
];
