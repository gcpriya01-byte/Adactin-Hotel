exports.LogoutPage=
class LogoutPage {
    constructor(page){
        this.page=page;
        this.logoutlink=page.locator('#logout');
    }
    async logoutpage()
    {
        await this.logoutlink.click();
    }

    }