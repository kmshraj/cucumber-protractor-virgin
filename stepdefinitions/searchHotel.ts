import { browser, protractor, element } from "protractor";
import {Landing, verifyText} from "../page-object/homePage/landing.page"
import {SearchForm} from "../page-object/homePage/searchForm.page"
import {HolidayFound} from "../page-object/HolidayResults/holidayFound.page"
import { ElementHelper} from  "../support/elementHelper"
import { Given, When, Then } from "cucumber";
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const EC = protractor.ExpectedConditions;

var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 10000);

Given('I am on virgin holidays', async () => {
    await expect(browser.getTitle()).to.eventually.equal(verifyText.titleLandingText);
    await Landing.pageHeader.isPresent()
  });

When('I do a hotel search', async () => {
     await Landing.searchPanel(verifyText.hotel).click()
     await SearchForm.searchfor(verifyText.hotel, verifyText.ocean)
  });

Given('I proceed to hotel options page', async () => {
    browser.wait(function() {
        return HolidayFound.holidayFound.isPresent()});
      await HolidayFound.holidayFound.isDisplayed();
  });

Then('I can see my board basis', function () {
   ElementHelper.checkElementInList(HolidayFound.hotelOptions, verifyText.boardBasis)
  });