const {test, expect}= require('@playwright/test');
test('Search Hotel', async({page})=>{
await page.goto('https://adactinhotelapp.com/');
//Login
 
   await page.locator('#username').fill('priyagcp');
   await page.locator('#password').fill('Adactin@123');
   await page.locator('#login').click();
   await page.waitForTimeout(5000);
//Search Hotel
await page.locator('#location').selectOption({label:'Melbourne'}); 
await expect(page.locator('#location')).toHaveValue('Melbourne');
await page.locator('#hotels').selectOption('Hotel Creek');
await page.locator('#room_type').selectOption('Double');
await page.locator('#room_nos').selectOption({index:2});
await page.locator('#datepick_in').fill('03/11/2026');
await page.locator('#datepick_out').fill('13/11/2026');
await page.locator('#adult_room').selectOption('3');
await page.locator('#child_room').selectOption('2')
await page.locator('#Submit').click();
await page.waitForTimeout(5000);
});