import { browser, protractor, element } from "protractor";
import {Landing, verifyText} from "../page-object/homePage/landing.page"
import {SearchForm} from "../page-object/homePage/searchForm.page"
import {HolidayFound} from "../page-object/HolidayResults/holidayFound.page"
import { ElementHelper} from  "../support/elementHelper"
import {  Given, When, Then} from "cucumber";
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const EC = protractor.ExpectedConditions;

var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);

Given('I am on virgin holidays home page', async () => {
    await expect(browser.getTitle()).to.eventually.equal(verifyText.titleLandingText);
    await Landing.pageHeader.isPresent()

  });
  
Given('I do a holiday search', async () => {
     await SearchForm.searchfor(verifyText.holiday, verifyText.ocean)
      browser.wait(function() {
      return HolidayFound.holidayFound.isPresent()});
      await HolidayFound.holidayFound.isDisplayed();

  });

  When('I add a holiday to a hotlist', async ()  =>{
    ElementHelper.scrollIntoViewClick(HolidayFound.addToHotList)
    // Using then to resolve promise
    ElementHelper.scrollIntoView(HolidayFound.addToHotList).then((action) => {
      expect(HolidayFound.addToHotList.getText()).to.eventually.equal(verifyText.removeHotlist)
    })
  });

  Then('I can see that a holiday added to the hotlist on top of the page', async () => {
    ElementHelper.scrollIntoViewClick(HolidayFound.hotListHeader)
    await expect(browser.getTitle()).to.eventually.equal("Holidays | Indian Ocean | Search | Virgin Holidays");
  });
