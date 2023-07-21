// import type { PlaywrightTestConfig } from '@playwright/test';

const config /*: PlaywrightTestConfig*/ = {
	webServer: {
		command: 'npx playwright install && npx vite build && npm run preview',
		port: 4173
	},
	testDir: 'tests',
	testMatch: /(.+\.)?(test|spec)\.[jt]s/
};

export default config;
