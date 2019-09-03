import * as path from "path";
import { browser, Config } from "protractor";
import { Reporter } from "../support/reporter";
const jsonReports = process.cwd() + "/reports/json";

export const config: Config = {

    seleniumAddress: "http://127.0.0.1:4444/wd/hub",

    SELENIUM_PROMISE_MANAGER: false,

    baseUrl: "https://www.virginholidays.co.uk",

    capabilities: {
        browserName: "chrome",
    },

    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),

    specs: [
        "../../features/virginHolidays.feature",
    ],
   

    onPrepare: () => {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
         browser.manage().timeouts().pageLoadTimeout(40000);
    browser.manage().timeouts().implicitlyWait(25000);
        Reporter.createDirectory(jsonReports);
        require('ts-node').register({
            project: 'tsconfig.json'
        });
    },

    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: "json:./reports/json/cucumber_report.json",
        require: ["../../typeScript/stepdefinitions/*.js", "../../typeScript/support/*.js"],
        strict: true,
        tags: "@HotelScenario or @HolidayScenario ",
    },

    onComplete: () => {
        Reporter.createHTMLReport();
    },
    
};
