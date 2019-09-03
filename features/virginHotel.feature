Feature: Book hotel
@HotelScenario
Scenario: Search hotel options
        Given I am on virgin holidays
        When I do a hotel search
        And I proceed to hotel options page
        Then I can see my board basis