import{test,expect}from'@playwright/test';
import{Loginpage}from'../Pages/LoginPage';
import{SearchHotelPage}from'../pages/SearchHotelPage';
import{SelectHotelPage}from'../pages/SelectHotelPage';
import{BookHotelPage}from'../pages/BookHotelPage';
import{LogoutPage}from'../pages/LogoutPage';
test('Adaction Hotel POM',async ({page})=>
    {

// Login
    const loginpage=new Loginpage(page);
    await page.goto('https://adactinhotelapp.com/');
    await loginpage.login('priyagcp', 'Adactin@123');
    await page.waitForTimeout(5000);

    //Search Hotel Page
    const searchHotelPage=new SearchHotelPage(page);
    await searchHotelPage.searchHotel();

    //Select Hotel Page
    const selectHotelPage=new SelectHotelPage(page);
    await selectHotelPage.selectHotelPage();

    //Book Hotel page
    const bookHotelpage=new BookHotelPage(page);
    await bookHotelpage.bookHotelPage();

    //logout page
    const logoutpage=new LogoutPage(page);
    await logoutpage.logoutpage();
    
}
);