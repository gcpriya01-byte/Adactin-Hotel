import { expect } from '@playwright/test';

class Utils {

    constructor(page) {
        this.page = page;
    }

    // Fill text field
    async fill(locator, value) {await locator.fill(value);}

    // Click element
    async click(locator) {await locator.click();}

    // Select option by label/value/index
    async selectOption(locator, option) {await locator.selectOption(option);}

    // Check checkbox/radio button
    async check(locator) {await locator.check();}

    // Wait for specified time
    async wait(milliseconds) {await this.page.waitForTimeout(milliseconds); }
         }

export default Utils;