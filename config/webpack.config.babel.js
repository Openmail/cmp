/* @noflow */
/* eslint-disable import/no-extraneous-dependencies */

import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import path from 'path';
import fs from 'fs';
import UglifyJS from 'uglify-es';
import {
	commonConfig,
	uglifyPlugin,
	version
} from './common.webpack.config.babel';

const ENV = process.env.NODE_ENV || 'development';


module.exports = [
	// S1 CMP
	{
		entry: {
			cmp: './s1/cmp.js'
		},
		...commonConfig,
		output: {
			path: path.resolve(__dirname, '../', `build/${version}`),
			publicPath: './',
			filename: 's1.[name].js'
		},
		plugins: [
			new webpack.DefinePlugin({
				'process.env.NODE_ENV': JSON.stringify(ENV)
			}),
			new HtmlWebpackPlugin({
				filename: 's1cmp.html',
				template: 's1cmp.hbs',
				inject: false,
				inline: UglifyJS.minify(fs.readFileSync('./src/loader.js', 'utf8')).code
			}),
			new CopyWebpackPlugin([
				{ from: 'assets', to: '.' },
				{
					from: 'loader.js',
					to: '.',
					transform(content) {
						// Just want to uglify and copy this file over
						return Promise.resolve(
							Buffer.from(UglifyJS.minify(content.toString()).code, 'utf8')
						);
					}
				}
			])
		].concat(ENV === 'production' ? uglifyPlugin : [])
	},
	// CMP config
	{
		entry: {
			cmp: './index.js',
			'cmp.complete': './complete.js'
		},

		output: {
			path: path.resolve(__dirname, '../', 'build'),
			publicPath: './',
			filename: '[name].bundle.js'
		},
		...commonConfig,
		plugins: [
			new webpack.NoEmitOnErrorsPlugin(),
			new webpack.DefinePlugin({
				'process.env.NODE_ENV': JSON.stringify(ENV)
			}),
			new webpack.ProvidePlugin({
				Promise: 'promise-polyfill'
			}),
			new HtmlWebpackPlugin({
				filename: 'index.html',
				template: 'index.html',
				chunks: ['cmp']
			})
		].concat(ENV === 'production' ? uglifyPlugin : [])
	},
	// Docs config
	{
		entry: {
			docs: './docs/index.jsx',
			iframeExample: './docs/iframe/iframeExample.jsx',
			portal: './docs/assets/portal.js'
		},

		output: {
			path: path.resolve(__dirname, '../', 'build/docs'),
			publicPath: './',
			filename: '[name].bundle.js'
		},
		...commonConfig,
		plugins: [
			new webpack.NoEmitOnErrorsPlugin(),
			new webpack.DefinePlugin({
				'process.env.NODE_ENV': JSON.stringify(ENV)
			}),
			new webpack.ProvidePlugin({
				Promise: 'promise-polyfill'
			}),
			new HtmlWebpackPlugin({
				filename: 'index.html',
				template: 'docs/index.html',
				chunks: ['docs']
			}),
			new HtmlWebpackPlugin({
				filename: 'iframeExample.html',
				template: './docs/iframe/iframeExample.html',
				chunks: ['iframeExample']
			}),
			new HtmlWebpackPlugin({
				filename: 'portal.html',
				template: './docs/assets/portal.html',
				chunks: ['portal']
			}),
			new CopyWebpackPlugin([{ from: 'docs/assets', to: '.' }])
		].concat(ENV === 'production' ? uglifyPlugin : [])
	}
];
