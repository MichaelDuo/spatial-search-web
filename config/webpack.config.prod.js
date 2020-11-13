const path = require('path');
const paths = require('./paths');
function resolve(p) {
	return path.resolve(process.cwd(), p);
}
module.exports = require('./webpack.config.base')({
	mode: 'production',
	entry: [resolve('./src/index.tsx')],
	output: {
		publicPath: paths.publicUrl,
		filename: 'static/js/[name].[contenthash:8].js',
		chunkFilename: 'static/js/[name].[contenthash:8].chunk.js',
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},
	// Emit a source map for easier debugging
	// See https://webpack.js.org/configuration/devtool/#devtool
	devtool: 'source-map',
	plugins: [],
	performance: {
		hints: false,
	},
});
