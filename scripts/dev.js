const devServerConfig = require('../config/webpackDevServer.config');
// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', (err) => {
	throw err;
});

// Ensure environment variables are read.
require('../config/env');

const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 8080;
const HOST = process.env.HOST || '0.0.0.0';

if (process.env.HOST) {
	console.log(
		chalk.cyan(
			`Attempting to bind to HOST environment variable: ${chalk.yellow(
				chalk.bold(process.env.HOST)
			)}`
		)
	);
	console.log(
		`If this was unintentional, check that you haven't mistakenly set it in your shell.`
	);
	console.log(
		`Learn more here: ${chalk.yellow('http://bit.ly/CRA-advanced-config')}`
	);
	console.log();
}

const chalk = require('chalk');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const openBrowser = require('react-dev-utils/openBrowser');
const config = require('../config/webpack.config.dev.js');

const compiler = webpack(config);

const devServer = new WebpackDevServer(compiler, devServerConfig);

devServer.listen(DEFAULT_PORT, HOST, (err) => {
	if (err) {
		return console.log(err);
	}
	console.log(chalk.cyan('Starting the development server...\n'));
	openBrowser(`localhost:${DEFAULT_PORT}`);
});
