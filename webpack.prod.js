const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
	optimization: {
		minimizer: [
			new OptimizeCSSAssetsPlugin({
				assetNameRegExp: /\.optimize\.css$/g,
				cssProcessor: require('cssnano')
			}),
			new TerserPlugin({
				test: /\.js(\?.*)?$/i,
				exclude: /\/node_modules/,
				sourceMap: true,
				extractComments: false
			})
		]
	},
	mode: 'production',
	devtool: 'source-map'
});