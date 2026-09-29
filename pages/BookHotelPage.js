import Utils from '../Utils/Utils.js';
 class BookHotelPage {
    constructor(page) {
        this.page = page;
        this.utils = new Utils(page);
        // Locators
        this.firstName = page.locator('#first_name');
        this.lastName = page.locator('#last_name');
        this.billingAddress = page.locator('#address');
        this.creditCardNumber = page.locator('#cc_num');
        this.creditCardType = page.locator('#cc_type');
        this.expiryMonth = page.locator('#cc_exp_month');
        this.expiryYear = page.locator('#cc_exp_year');
        this.cvvNumber = page.locator('#cc_cvv');
        this.bookNowButton = page.locator('#book_now');
    }
    // Book Hotel method
    async bookHotel(data) {
       
        await this.utils.fill(this.firstName,data.firstName);
        await this.utils.fill(this.lastName,data.lastName);
        await this.utils.fill(this.billingAddress,data.billingAddress);
        await this.utils.fill(this.creditCardNumber,data.creditCardNumber);
        await this.utils.selectOption(this.creditCardType,data.creditCardType);
        await this.utils.selectOption(this.expiryMonth,data.expiryMonth);
        await this.utils.selectOption(this.expiryYear,data.expiryYear);
        await this.utils.fill(this.cvvNumber,data.cvvNumber);
        await this.utils.click(this.bookNowButton);
    }
}
export default BookHotelPage;