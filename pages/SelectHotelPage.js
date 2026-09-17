exports.SelectHotelPage= class SelectHotelPage {
    constructor(page) {
        this.page = page;
    this.SelectHotelRadioButton=page.locator('#radiobutton_0');
    this.continuebutton=page.locator('#continue');
    }
    async selectHotelPage()
    {
        await this.SelectHotelRadioButton.check();
        await this.continuebutton.click();

    }};