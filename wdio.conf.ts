import { Config } from "@wdio/sync";

// https://webdriver.io/docs/configurationfile.html
export const config: Config = {
    runner: 'local',
    specs: [
        //'./test/**/*.ts'
        './test/login.ts'
    ],
    hostname: process.env.SELENIUM_HUB_HOST ?? 'localhost',
    path: '/wd/hub',
    maxInstances: 2,
    capabilities: [{
        browserName: 'chrome'
    }],
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'error',
    baseUrl: 'https://demo-v2.grip.tools',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec',
        [
            "allure",
            {
                outputDir: "allure-results",
                disableMochaHooks: true,
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: false
            }
        ]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
        // retries: 3,
        // grep: '@SMOKE'
    },
    afterTest: function (test) {
        if (test.error !== undefined) {
            browser.takeScreenshot();
        }
    }
}
