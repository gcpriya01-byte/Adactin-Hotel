const testData = {

    // Login data
    login: {
        username: 'priyagcp',
        password: 'Adactin@123'
    },

    // Negative Login data
    negativeLogin: {
    invalidUsername: 'priya',
    invalidPassword: '123',
    emptyUsername: '',
    emptyPassword: ''
    },

    // Search Hotel data
    searchHotel: {
        location: 'Melbourne',
        hotel: 'Hotel Creek',
        roomType: 'Double',
        numberOfRooms: '3',
        checkInDate: '03/11/2026',
        checkOutDate: '13/11/2026',
        adultsPerRoom: '3',
        childrenPerRoom: '2'
    },

    // Negative Search data
   negativeSearch: {
    emptyLocation: '',
    emptyHotel: '',
    emptyRoomType: '',
    emptyNumberOfRooms: '',
    emptyCheckInDate: '',
    emptyCheckOutDate: '',
    emptyAdultsPerRoom: '',
    emptyChildrenPerRoom: ''
    },

    // Select Hotel data
    selectHotel: {
        hotel: 'Hotel Creek',
        location: 'Melbourne',
        rooms: '2 Rooms',
        arrivalDate: '03/11/2026',
        departureDate: '13/11/2026',
        numberOfDays: '10',
        roomType: 'Double',
        pricePerNight: 'AUD $ 225',
        totalPriceExclGST: 'AUD $ 260'
    },

    // Book Hotel data
    booking: {
        firstName: 'Priya',
        lastName: 'gcp',
        billingAddress: 'Melbourne, Vic',
        creditCardNumber: '1234567890123456',
        creditCardType: 'VISA',
        expiryMonth: 'May',
        expiryYear: '2026',
        cvvNumber: '678'
    },

    // Negative Booking data
  negativeBooking: {
    emptyFirstName: '',
    emptyLastName: '',
    emptyBillingAddress: '',
    invalidCreditCardNumber: '123',
    invalidCvvNumber: '12'
    }
};

export default testData;