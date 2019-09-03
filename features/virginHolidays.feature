Feature: Book holiday
@HolidayScenario
    Scenario: Add a holiday to hotlist
      Given I am on virgin holidays home page
      And I do a holiday search
      When I add a holiday to a hotlist
      Then I can see that a holiday added to the hotlist on top of the page