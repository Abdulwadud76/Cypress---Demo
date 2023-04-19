export class cookieTestPage {

    //Visit to main app
    static navigatetoHomePage() {
        cy.visit('/')
    }

    //Enter name
    static enterName() {

        cy.get('input').type('Abdul')
        cy.get('button').click()

    }

    //Validate the page
    static validatePage() {
        cy.get('a').should('contain.text', 'Cookie Clicker!')

    }

    //Reset the game
    static resetGame() {

        cy.get('a').click()

    }

    //Validate reset page
    static validateNewpage() {
        cy.get('body > :nth-child(2)').should('contain.text', 'New Game')

    }

    //Click on cookie button
    static clickCookie() {

        cy.get('#click').click()

    }

    //Validate update cookie button
    static validateUpdateCookie() {

        cy.get('#cookies').should('be.visible', 'true')
    }

    //Sell cookies
    static sellCookie() {

        cy.get('#cookies-to-sell').type('1')
        cy.get('#sell-cookies').click()

    }

    //Validate sell cookies button
    static validateSellCookie() {

        cy.get('#money').should('be.visible', 'true')
    }

    //Buy Factories
    static buyFactories() {

        cy.get('#factories-to-buy').type('1')
        cy.get('#buy-factories').click()

    }

    //Validate buy factories button
    static validateBuyFactories() {

        cy.get('#factories').should('contain.text', '1')
    }

}
