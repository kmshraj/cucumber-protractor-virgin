import { $, ElementFinder, element, by, ElementArrayFinder, $$, browser, protractor } from "protractor";
const EC = protractor.ExpectedConditions;
export class Landing {
    static pageHeader : ElementFinder = $('[class="main-vhols-header"]');
    static virginLogo : ElementFinder = $('div[class="mvhc-logo-container"] a')
    static searchPanel(name): ElementFinder {
        return $(`button[booking-tab-target="${name}"]`);
    }
}

export enum verifyText {
    titleLandingText = 'Virgin Holidays | Seize The Holiday',
    removeHotlist = 'Remove from hotlist',
    titleOcean = 'Holidays | Indian Ocean | Search | Virgin Holidays',
    hotel = 'hotel',
    ocean = 'Ocean',
    holiday = 'holiday',
    boardBasis = 'Board Basis'
}