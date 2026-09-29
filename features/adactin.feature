Feature: Adactin Hotel Booking

Background:
Given I open the Adactin Hotel application

Scenario: Successfully login and book a hotel

When I login to the application
And I search for a hotel
And I select the hotel
And I enter the booking details
And I logout from the application
Then I should be successfully logged out

