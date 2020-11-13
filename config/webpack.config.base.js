const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const getClientEnvironment = require('./env');
const env = getClientEnvironment();
const paths = require('./paths');

function resolve(p) {
	return path.resolve(process.cwd(), p);
}

module.exports = (options) => ({
	mode: options.mode,
	entry: options.entry,
	resolve: {
		modules: ['node_modules', paths.appSrc],
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
	},
	output: Object.assign(
		{
			path: resolve('dist'),
			publicPath: '/',
			filename: 'static/js/[name].js',
			chunkFilename: 'static/js/[name].chunk.js',
		},
		options.output
	),
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.ts(x?)$/,
				exclude: /node_modules/,
				loader: 'eslint-loader',
			},
			{
				test: /\.ts(x?)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'ts-loader',
					},
				],
			},
			{
				enforce: 'pre',
				test: /\.js$/,
				loader: 'source-map-loader',
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader',
				],
			},
			{
				// Preprocess our own .css files
				// This is the place to add your own loaders (e.g. sass/less etc.)
				// for a list of loaders, see https://webpack.js.org/loaders/#styling
				test: /\.css$/,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader'],
			},
			{
				// Preprocess 3rd party .css files located in node_modules
				test: /\.css$/,
				include: /node_modules/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(eot|otf|ttf|woff|woff2)$/,
				use: 'file-loader',
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: 'svg-url-loader',
						options: {
							// Inline files smaller than 10 kB
							limit: 10 * 1024,
							noquotes: true,
						},
					},
				],
			},
		],
	},
	plugins: options.plugins.concat([
		new HtmlWebpackPlugin({template: resolve('public/index.html')}),
		new webpack.DefinePlugin(env.stringified),
	]),
	optimization: options.optimization,
	devtool: options.devtool,
	target: 'web', // Make web variables accessible to webpack, e.g. window
	performance: options.performance || {},
});
