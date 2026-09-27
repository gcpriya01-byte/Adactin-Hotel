import { test } from '@playwright/test';

import LoginPage from '../pages/LoginPage.js';
import SearchHotelPage from '../pages/SearchHotelPage.js';
import SelectHotelPage from '../pages/SelectHotelPage.js';
import BookHotelPage from '../pages/BookHotelPage.js';
import LogoutPage from '../pages/LogoutPage.js';
import testData from '../test-data/testData.js';
test('Adactin Hotel End-to-End Booking', async ({ page }) => {
    // Open application
    await page.goto('https://adactinhotelapp.com/');
    // Login
    const loginPage = new LoginPage(page);
    await loginPage.login(
        testData.login.username,
        testData.login.password
    );

    // Search Hotel
    const searchHotelPage = new SearchHotelPage(page);
    await searchHotelPage.searchHotel(
        testData.searchHotel
    );

    // Select Hotel
    const selectHotelPage = new SelectHotelPage(page);
    await selectHotelPage.selectHotel();

    // Book Hotel
    const bookHotelPage = new BookHotelPage(page);
    await bookHotelPage.bookHotel(
        testData.booking
    );

    // Logout
    const logoutPage = new LogoutPage(page);
    await logoutPage.logout();

    await page.waitForTimeout(8000);
});