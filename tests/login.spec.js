const {test, expect}= require('@playwright/test');
test('Login', async({page})=>{
    await page.goto('https://adactinhotelapp.com/');
   await page.locator('#username').fill('priyagcp');
   await page.locator('#password').fill('Adactin@123');
   await page.locator('#login').click();
   await page.waitForTimeout(5000);


// Search Hotel Adactin

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

//select Hotel
//  await expect(page.locator(`//tr[td[normalize-space()="Select Hotel"]]//td`)')toBeVisible();
await page.locator('#radiobutton_0').check();
await expect(page.locator('#radiobutton_0')).toBeChecked();
await page.locator('#continue').click();

//Book a Hotel
await page.locator('#first_name').fill('Priya');
await page.locator('#last_name').fill('gcp');
await page.locator('#address').fill('Melbourne','Vic');
await page.locator('#cc_num').fill('1234567890123456');
await page.locator('#cc_type').selectOption('VISA');
await page.locator('#cc_exp_month').selectOption('May');
await page.locator('#cc_exp_year').selectOption('2026');
await page.locator('#cc_cvv').fill('678');
await page.locator('#book_now').click();
await page.waitForTimeout(5000);

await page.getByRole('link', { name: 'Logout' }).click();
await page.waitForTimeout(8000);
});