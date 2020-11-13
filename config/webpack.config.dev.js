const webpack = require('webpack');
const path = require('path');
const paths = require('./paths');
function resolve(p) {
	return path.resolve(process.cwd(), p);
}
module.exports = require('./webpack.config.base')({
	mode: 'development',
	entry: [resolve('./src/index.tsx')],
	output: {
		publicPath: paths.publicUrl,
		filename: 'static/js/[name].js',
		chunkFilename: 'static/js/[name].chunk.js',
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},
	// Emit a source map for easier debugging
	// See https://webpack.js.org/configuration/devtool/#devtool
	devtool: 'eval-source-map',
	plugins: [
		// This is necessary to emit hot updates (currently CSS only):
		new webpack.HotModuleReplacementPlugin(),
	],
	performance: {
		hints: false,
	},
});
