import Utils from '../utils/Utils';
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
        // Enter First Name
        await this.utils.fill(this.firstName,data.firstName);
        // Enter Last Name
        await this.utils.fill(this.lastName,data.lastName);
        // Enter Billing Address
        await this.utils.fill(this.billingAddress,data.billingAddress);
        // Enter Credit Card Number
        await this.utils.fill(this.creditCardNumber,data.creditCardNumber);
        // Select Credit Card Type
        await this.utils.selectOption(this.creditCardType,data.creditCardType);
        // Select Expiry Month
        await this.utils.selectOption(this.expiryMonth,data.expiryMonth);
        // Select Expiry Year
        await this.utils.selectOption(this.expiryYear,data.expiryYear);
        // Enter CVV
        await this.utils.fill(this.cvvNumber,data.cvvNumber);
        // Click Book Now
        await this.utils.click(this.bookNowButton);
    }
}
export default BookHotelPage;