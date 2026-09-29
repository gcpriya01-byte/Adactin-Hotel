import { Given, When, Then } from '@cucumber/cucumber';
import LoginPage from '../pages/LoginPage.js';
import SearchHotelPage from '../pages/SearchHotelPage.js';
import SelectHotelPage from '../pages/SelectHotelPage.js';
import BookHotelPage from '../pages/BookHotelPage.js';
import LogoutPage from '../pages/LogoutPage.js';
import Utils from '../utils/Utils.js';
import testData from '../test-data/testData.js';

// Open Adactin Hotel application
Given('I open the Adactin Hotel application', async function () {
    await this.page.goto('https://adactinhotelapp.com/');
    // Create Utils object
    this.utils = new Utils(this.page);
});

// Login
When('I login to the application', async function () {
    this.loginPage = new LoginPage(this.page);
    await this.loginPage.login(
        testData.login.username,
        testData.login.password
    );
});

// Search Hotel
When('I search for a hotel', async function () {
    this.searchHotelPage = new SearchHotelPage(this.page);
    await this.searchHotelPage.searchHotel(
        testData.searchHotel
    );
});

// Select Hotel
When('I select the hotel', async function () {
    this.selectHotelPage = new SelectHotelPage(this.page);
    await this.selectHotelPage.selectHotel();
});


// Enter Booking Details
When('I enter the booking details', async function () {
    this.bookHotelPage = new BookHotelPage(this.page);
    await this.bookHotelPage.bookHotel(
        testData.booking
    );
});

// Logout
When('I logout from the application', async function () {
    this.logoutPage = new LogoutPage(this.page);
    await this.logoutPage.logout();
});

// Verify successful logout
Then('I should be successfully logged out', async function () {
    await this.utils.verifyVisible(
        this.page.getByText('You have successfully logged out.')
    );
});