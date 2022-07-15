class TheInternetLoginPage {

    typeUsername(keys){
        cy.get('#username').type(keys)
    }

    typePassword(keys){
        cy.get('#password').type(keys)
    }

    clickOnLogin(){
        cy.get('.fa').click()
    }
}

export default TheInternetLoginPage