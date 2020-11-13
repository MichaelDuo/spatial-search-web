const paths = require('./paths');

module.exports = {
	// WebpackDevServer 2.4.3 introduced a security fix that prevents remote
	// websites from potentially accessing local content through DNS rebinding:
	// https://github.com/webpack/webpack-dev-server/issues/887
	// https://medium.com/webpack/webpack-dev-server-middleware-security-issues-1489d950874a
	// However, it made several existing use cases such as development in cloud
	// environment or subdomains in development significantly more complicated:
	// https://github.com/facebook/create-react-app/issues/2271
	// https://github.com/facebook/create-react-app/issues/2233
	// While we're investigating better solutions, for now we will take a
	// compromise. Since our WDS configuration only serves files in the `public`
	// folder we won't consider accessing them a vulnerability. However, if you
	// use the `proxy` feature, it gets more dangerous because it can expose
	// remote code execution vulnerabilities in backends like Django and Rails.
	// So we will disable the host check normally, but enable it if you have
	// specified the `proxy` setting. Finally, we let you override it if you
	// really know what you're doing with a special environment variable.
	disableHostCheck: process.env.DANGEROUSLY_DISABLE_HOST_CHECK === 'true',
	// Enable gzip compression of generated files.
	compress: true,
	// Silence WebpackDevServer's own logs since they're generally not useful.
	// It will still show compile warnings and errors with this setting.
	clientLogLevel: 'none',
	// By default files from `contentBase` will not trigger a page reload.
	contentBase: paths.appPublic,
	watchContentBase: true,
	// Enable hot reloading server. It will provide WDS_SOCKET_PATH endpoint
	// for the WebpackDevServer client so it can learn when the files were
	// updated. The WebpackDevServer client is included as an entry point
	// in the webpack development configuration. Note that only changes
	// to CSS are currently hot reloaded. JS changes will refresh the browser.
	hot: true,
	transportMode: 'ws',
	// WebpackDevServer is noisy by default so we emit custom message instead
	// by listening to the compiler events with `compiler.hooks[...].tap` calls above.
	quiet: true,
	historyApiFallback: {
		index: 'index.html',
	},
};
