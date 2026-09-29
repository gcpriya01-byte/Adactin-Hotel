import { test } from '@playwright/test';
import Utils from '../utils/utils.js';
import testData from '../test-data/testData.js';

test.describe('Adactin Negative Test Scenarios', () => {
    // Negative Login - Invalid Username and Password
    test('Login with invalid username and password', async ({ page }) => {
        const utils = new Utils(page);
        await page.goto('https://adactinhotelapp.com/');
        await utils.fill(page.locator('#username'),testData.negativeLogin.invalidUsername);
        await utils.fill(page.locator('#password'),testData.negativeLogin.invalidPassword);
        await utils.click(page.locator('#login'));
        await utils.verifyErrorMessage(page.getByText('Invalid Login details or Your Password might have expired.'),'Invalid Login details');
        });

    // Negative Login - Empty Username
    test('Login with empty username', async ({ page }) => {
       const utils = new Utils(page);
       await page.goto('https://adactinhotelapp.com/');
       await utils.fill(page.locator('#username'),testData.negativeLogin.emptyUsername);
       await utils.fill(page.locator('#password'),testData.login.password);
       await utils.click(page.locator('#login'));
       await utils.verifyEmpty(page.locator('#username'));
       });

    // Negative Login - Empty Password
    test('Login with empty password', async ({ page }) => {
        const utils = new Utils(page);
        await page.goto('https://adactinhotelapp.com/');
        await utils.fill(page.locator('#username'),testData.login.username);
        await utils.fill(page.locator('#password'),testData.negativeLogin.emptyPassword);
        await utils.click(page.locator('#login'));
        await utils.verifyEmpty(page.locator('#password'));
        });

    // Negative Search - Empty Location
    test('Search hotel with empty location', async ({ page }) => {
        const utils = new Utils(page);
        await page.goto('https://adactinhotelapp.com/');
        // Login with valid credentials
        await utils.fill(page.locator('#username'),testData.login.username);
        await utils.fill(page.locator('#password'),testData.login.password);
        await utils.click(page.locator('#login'));
        // Leave location empty
        await utils.selectOption(page.locator('#hotels'),testData.searchHotel.hotel);
        await utils.selectOption(page.locator('#room_type'),testData.searchHotel.roomType);
        await utils.selectOption(page.locator('#room_nos'),testData.searchHotel.numberOfRooms);
        await utils.click(page.locator('#Submit'));
        // Verify validation message
        await utils.verifyErrorMessage( page.locator('#location_span'),'Please Select a Location');
        });


    // Negative Booking - Invalid Credit Card Number
    test('Booking with invalid credit card number', async ({ page }) => {
        const utils = new Utils(page);
        await page.goto('https://adactinhotelapp.com/');
        // Login
        await utils.fill(page.locator('#username'),testData.login.username);
        await utils.fill(page.locator('#password'),testData.login.password);
        await utils.click(page.locator('#login'));
        // Search hotel with valid data
        await utils.selectOption(page.locator('#location'),testData.searchHotel.location);
        await utils.selectOption(page.locator('#hotels'),testData.searchHotel.hotel);
        await utils.selectOption(page.locator('#room_type'),testData.searchHotel.roomType);
        await utils.selectOption(page.locator('#room_nos'),testData.searchHotel.numberOfRooms);
        await utils.fill(page.locator('#datepick_in'),testData.searchHotel.checkInDate);
        await utils.fill(page.locator('#datepick_out'),testData.searchHotel.checkOutDate);
        await utils.selectOption(page.locator('#adult_room'),testData.searchHotel.adultsPerRoom);
        await utils.selectOption(page.locator('#child_room'), testData.searchHotel.childrenPerRoom);
        await utils.click(page.locator('#Submit'));

        // Select hotel
        await utils.check(page.locator('#radiobutton_0'));
        await utils.click(page.locator('#continue'));

        // Booking details
        await utils.fill(page.locator('#first_name'),testData.booking.firstName);
        await utils.fill(page.locator('#last_name'),testData.booking.lastName);
        await utils.fill(page.locator('#address'),testData.booking.billingAddress);

        // Invalid card number
        await utils.fill(page.locator('#cc_num'),testData.negativeBooking.invalidCreditCardNumber);
        await utils.selectOption(page.locator('#cc_type'),testData.booking.creditCardType);
        await utils.selectOption(page.locator('#cc_exp_month'),testData.booking.expiryMonth);
        await utils.selectOption(page.locator('#cc_exp_year'),testData.booking.expiryYear);
        await utils.fill(page.locator('#cc_cvv'),testData.negativeBooking.invalidCvvNumber);
        await utils.click(page.locator('#book_now'));

        // Verify credit card validation
        await utils.verifyVisible(page.locator('#cc_num_span'));
    });

});