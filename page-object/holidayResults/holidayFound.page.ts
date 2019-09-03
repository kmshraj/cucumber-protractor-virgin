import { $, ElementFinder, by, element, ElementArrayFinder, $$ } from "protractor";

export class HolidayFound {
   static holidayFound : ElementFinder = $('[class="hightlighted-letters-sb"]');
   static addToHotList : ElementFinder = $('[class="vhols-hotlist"]');
   static hotListHeader : ElementFinder = $('[class="mvhtrel-text"]')
   static hotelOptions : ElementArrayFinder = $$('[id="filters"] h4')
}
