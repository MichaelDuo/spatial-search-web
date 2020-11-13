'use strict';

const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);
const {PUBLIC_URL, APP_ENV} = process.env;

const publicUrls = {
	default: '/',
};

const moduleFileExtensions = [
	'web.mjs',
	'mjs',
	'web.js',
	'js',
	'web.ts',
	'ts',
	'web.tsx',
	'tsx',
	'json',
	'web.jsx',
	'jsx',
];

const getPublicUrl = () => {
	if (PUBLIC_URL) return PUBLIC_URL;
	return publicUrls[APP_ENV] || publicUrls['default'];
};

// Resolve file paths in the same order as webpack
const resolveModule = (resolveFn, filePath) => {
	const extension = moduleFileExtensions.find((extension) =>
		fs.existsSync(resolveFn(`${filePath}.${extension}`))
	);

	if (extension) {
		return resolveFn(`${filePath}.${extension}`);
	}

	return resolveFn(`${filePath}.js`);
};

module.exports = {
	appPath: resolveApp('.'),
	appBuild: resolveApp('dist'),
	appPublic: resolveApp('public'),
	appHtml: resolveApp('public/index.html'),
	appIndexJs: resolveModule(resolveApp, 'src/index'),
	appPackageJson: resolveApp('package.json'),
	appSrc: resolveApp('src'),
	appTsConfig: resolveApp('tsconfig.json'),
	yarnLockFile: resolveApp('yarn.lock'),
	testsSetup: resolveModule(resolveApp, 'src/setupTests'),
	proxySetup: resolveApp('src/setupProxy.js'),
	appNodeModules: resolveApp('node_modules'),
	publicUrl: getPublicUrl(),
};
