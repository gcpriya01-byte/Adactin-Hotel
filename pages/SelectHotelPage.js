import Utils from '../utils/Utils';
export class SelectHotelPage {
    constructor(page) {
        this.page = page;
        this.utils = new Utils(page);

        // Locators
        this.hotelRadioButton = page.locator('#radiobutton_0');
        this.continueButton = page.locator('#continue');
    }

    // Select Hotel method
    async selectHotel(data) {

        // Select hotel 
        await this.utils.check(this.hotelRadioButton);

        // Click Continue
        await this.utils.click(this.continueButton);
    }
}