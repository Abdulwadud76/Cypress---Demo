Feature: Cookie test

    Scenario: 1: Enter name
    Background: Navigate home page
        Given Visit home page

        When I enter my name

        Then I should navigate to main page

    Scenario: 2: Click cookie

        When I click cookie

        Then Cookie field should be updated

    Scenario: 3: Sell cookies

        When I click sell cookies

        Then Money field should be updated

    Scenario: 4: Buy factories

        When I click buy factories

        Then Factories field should be updated

    Scenario: 5: Reset new game

        When I click on Cookie Clicker

        Then Page needs reset