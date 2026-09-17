exports.SearchHotelPage= class SearchHotelPage {
    constructor(page) {
        this.page = page;
        this.location = page.locator('#location');
        this.hotels = page. locator('#hotels');
        this.roomtype = page.locator('#room_type');
        this.numberofrooms = page. locator('#room_nos');
        this.checkindate=page.locator('#datepick_in');
        this.checkoutdate=page.locator('#datepick_out');
        this.adultsperroom=page.locator('#adult_room');
        this.childrenperroom=page.locator('#child_room');
        this.searchbutton=page.locator('#Submit');     
    }
   async searchHotel()
{
    await this.location.selectOption('Melbourne');
    await this.hotels.selectOption('Hotel Creek');
    await this.roomtype.selectOption('Double');
    await this.numberofrooms.selectOption({index:2});
    await this.checkindate.fill('03/11/2026');
    await this.checkoutdate.fill('13/11/2026');
    await this.adultsperroom.selectOption('3');
    await this.childrenperroom.selectOption('2');
    await this.searchbutton.click();
}
};