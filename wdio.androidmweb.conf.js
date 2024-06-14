exports.config = {
    runner: 'local',
    port: 4723,
    specs: [
        './test/specs/**/*.js'
    ],
    maxInstances: 1,
    capabilities: [{
        "appium:platformName": 'Android',
        "appium:deviceName": 'RZ8T50ZVKPE',
        "appium:browserName": 'Chrome',
        "appium:automationName": 'UiAutomator2',
        "appium:chromedriverExecutable": './chromedriver/chromedriver.exe',
        "appium:newCommandTimeout": 0,
    }],
    logLevel: 'info',
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    services: ['appium'],
    appium: {
        args: {
            address: 'localhost',
            port: 4723

        },
        logPath: './'
    },
    reporters: [
        'spec',
        [
            'allure',
            {
                outputDir: 'web-allure-results',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: false,
                // issueLinkTemplate: "https://mybug-tracker{}",
                // tmsLinkTemplate: "https://my-tms{}"
            },
        ],
    ],
    before: function () {
        require('./utils/customCommand')
    },
    beforeTest: async function () {
        // await browser.maximizeWindow()
        await browser.url('http://49.249.29.5:8188');
    },
    afterTest:
        //function(test, context, { error, result, duration, passed, retries }) {
        // },
        async function (step, scenario, { error },) {
            if (error) {
                await browser.takeScreenshot();
            }
        },
};
