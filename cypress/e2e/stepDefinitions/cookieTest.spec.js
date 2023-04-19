import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import { cookieTestPage } from "../../Pages/cookieTestPage";


Given('Visit home page', () => {
    cookieTestPage.navigatetoHomePage()

})

When('I enter my name', () => {

    cookieTestPage.enterName()

})

Then('I should navigate to main page', () => {
    cookieTestPage.validatePage()
})

When('I click on Cookie Clicker', () => {

    cookieTestPage.resetGame()

})

Then('Page needs reset', () => {

    cookieTestPage.validateNewpage()

})


When('I click cookie', () => {

    cookieTestPage.clickCookie()

})

Then('Cookie field should be updated', () => {

    cookieTestPage.validateUpdateCookie()

})


When('I click sell cookies', () => {

    cookieTestPage.clickCookie()
    cookieTestPage.sellCookie()

})

Then('Money field should be updated', () => {

    cookieTestPage.validateSellCookie()

})

When('I click buy factories', () => {

    cookieTestPage.clickCookie()
    cookieTestPage.buyFactories()

})

Then('Factories field should be updated', () => {

    cookieTestPage.validateBuyFactories()

})
