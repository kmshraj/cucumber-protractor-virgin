import { browser, ElementFinder, ElementArrayFinder ,element } from 'protractor';

const EC = browser.ExpectedConditions;
/*
This class assists in waiting for non-angular page screen elements
 */
 export class ElementHelper {
	waitForPresent(ele) {
		return browser.wait(EC.presenceOf(ele));
	}
	waitForDisplay(ele) {
		return browser.wait(ele.isDisplayed);
	}
	waitForElement(ele) {
		this.waitForPresent(ele);
		this.waitForDisplay(ele);
    }
     static scrollIntoView(finder : ElementFinder) {
         return browser.executeScript('arguments[0].scrollIntoView();', finder)
    }

    static scrollIntoViewClick(finder: ElementFinder) {
        browser.executeScript('arguments[0].scrollIntoView();', finder).then((action) => {
          finder.click();
        });
    }

    static async checkElementInList(locator: ElementArrayFinder, elementtext) {
        locator.filter(async (destinationElementFinder, index) => {
            console.log(destinationElementFinder, index)
          return destinationElementFinder.getAttribute('innerText').then((compareText) => {
            console.log(compareText)
            if(compareText === elementtext) {
                return true
            };
          });
        })
      }
      
   
}