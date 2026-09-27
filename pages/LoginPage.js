import Utils from '../utils/Utils';

class LoginPage {

    constructor(page) {

        this.page = page;
        this.utils = new Utils(page);

        // Locators
        this.username = page.locator('#username');
        this.password = page.locator('#password');
        this.loginButton = page.locator('#login');
    }

    // Login method
    async login(username, password) { await this.utils.fill(this.username,username );
                    await this.utils.fill(this.password,password);
                    await this.utils.click(this.loginButton);
    }
}
export default LoginPage;