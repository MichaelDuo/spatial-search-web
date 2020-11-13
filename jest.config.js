module.exports = {
	collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
	modulePaths: ['<rootDir>/src/', '<rootDir>/tests/'],
	testMatch: [
		'<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
		'<rootDir>/src/**/?(*.)(spec|test).{js,jsx,ts,tsx}',
		'<rootDir>/tests/**/?(*.)steps.{js,jsx,ts,tsx}',
	],
	preset: 'ts-jest',
};
