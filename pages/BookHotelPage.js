export class BookHotelPage {
    constructor(page) {
        this.page = page;
        this.firstname=page.locator('#first_name');
         this.lastname=page.locator('#last_name');
         this.Billingaddress=page.locator('#address');
         this.creditcardnumber=page.locator('#cc_num');
         this.creditcardtype=page.locator('#cc_type');
         this.expirydateMonth=page.locator('#cc_exp_month');
         this.expirydateYear=page.locator('#cc_exp_year');
        this.cvvnumber=page.locator('#cc_cvv');
         this.booknowbutton=page.locator('#book_now');
    }
    async bookHotelPage()
    {
        await this.firstname.fill('Priya');
        await this.lastname.fill('gcp');
        await this.Billingaddress.fill('Melbourne','Vic');
        await this.creditcardnumber.fill('1234567890123456');
        await this.creditcardtype.selectOption('VISA');
        await this.expirydateMonth.selectOption('May');
        await this.expirydateYear.selectOption('2026');
        await this.cvvnumber.fill('678');
        await this.booknowbutton.click();
        await this.page.waitForTimeout(8000);
    }};