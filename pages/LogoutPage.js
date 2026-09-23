import Utils from '../utils/Utils';

export class LogoutPage {

    constructor(page) {
        this.page = page;
        this.utils = new Utils(page);
        this.logoutLink = page.getByRole('link', { name: 'Logout' });
    }

    async logout() {
        await this.utils.click(this.logoutLink);
    }
}