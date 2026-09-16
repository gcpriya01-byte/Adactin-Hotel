const {test, expect}= require('@playwright/test');
test('Login', async({page})=>{
    await page.goto('https://adactinhotelapp.com/');
   await page.locator('#username').fill('priya');
   await page.locator('#password').fill('Adactin@123');
   await page.locator('#login').click();
   await page.waitForTimeout(5000);
});