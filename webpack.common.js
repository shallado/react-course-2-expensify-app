const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.s?css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({ filename: 'styles.css' })
	],
	devServer: {
		contentBase: path.join(__dirname, 'public'),
		historyApiFallback: true
	}
}

// 'style-loader',
// 	'css-loader',
// 	'sass-loader'


// 'style-loader',
// 	'css-loader',
// 	'sass-loader'