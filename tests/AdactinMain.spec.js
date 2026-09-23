import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { SearchHotelPage } from '../pages/SearchHotelPage';
import { SelectHotelPage } from '../pages/SelectHotelPage';
import { BookHotelPage } from '../pages/BookHotelPage';
import { LogoutPage } from '../pages/LogoutPage';
import { testData } from '../Test-data/testData';
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