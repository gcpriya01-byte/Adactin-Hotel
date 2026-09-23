import Utils from '../utils/Utils';
export class SearchHotelPage {
    constructor(page) {
        this.page = page;
        this.utils = new Utils(page);
        // Locators
        this.location = page.locator('#location');
        this.hotel = page.locator('#hotels');
        this.roomType = page.locator('#room_type');
        this.numberOfRooms = page.locator('#room_nos');
        this.checkInDate = page.locator('#datepick_in');
        this.checkOutDate = page.locator('#datepick_out');
        this.adults = page.locator('#adult_room');
        this.children = page.locator('#child_room');
        this.searchButton = page.locator('#Submit');
    }
    // Search Hotel method
    async searchHotel(data) {
        await this.utils.selectOption( this.location, data.location);
        await this.utils.selectOption(this.hotel,data.hotel);
        await this.utils.selectOption(this.roomType,data.roomType);
        await this.utils.selectOption(this.numberOfRooms,data.numberOfRooms);
        await this.utils.fill(this.checkInDate,data.checkInDate);
        await this.utils.fill(this.checkOutDate,data.checkOutDate);
        await this.utils.selectOption(this.adults,data.adultsPerRoom);
        await this.utils.selectOption(this.children,data.childrenPerRoom);
        await this.utils.click(this.searchButton);
    }
}