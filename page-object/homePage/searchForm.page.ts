import {
  $,
  ElementFinder,
  element,
  by,
  ElementArrayFinder,
  $$,
  browser,
  protractor
} from "protractor";
import { ElementHelper } from "../../support/elementHelper";
const EC = protractor.ExpectedConditions;
export class SearchForm {
  //static search: ElementFinder = $('[class="sp-button submit-button"]');
  static pageHeader: ElementFinder = $('[class="main-vhols-header"]');
  //static closeIcon : ElementFinder = $(' [class="sp-validatable-text-input valid"] button.sp-typeahead-clear')
  static typeAhead: ElementFinder = $("#-typeahead-option-0");
  static typeAheadResult: ElementArrayFinder = $$(
    '[id="holiday-typeahead-typeahead-results"] div ul'
  );

  static async clearSearch(name) {
    await this.closeIcon(name).click();
  }

  static destination(name): ElementFinder {
    return $(`[id="${name}-typeahead-typeahead"]`);
  }

  static closeIcon(name): ElementFinder {
    return $('[booking-tab="' + name + '"] button.sp-typeahead-clear');
  }

  static search(name): ElementFinder {
    return $('[booking-tab="' + name + '"] [class="sp-button submit-button"]');
  }

  static async setDestination(name, destination: string) {
    await this.destination(name).sendKeys(destination);
    await this.destination(name).isSelected();
    await this.typeAhead.click();
    await this.closeIcon(name).isDisplayed();
  }
  static async searchHoliday(name) {
    await this.search(name).click();
  }

  static async searchfor(name, location) {
    await SearchForm.clearSearch(name);
    await SearchForm.setDestination(name, location);
    await SearchForm.searchHoliday(name);
  }

  static waitForPresent(ele) {
    return browser.wait(EC.presenceOf(ele), 1000000);
  }
}
