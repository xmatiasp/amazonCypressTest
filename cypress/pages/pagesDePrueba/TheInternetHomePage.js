class TheInternetHomePage {

    //navegador
    navigateHome(){
        cy.visit('https://the-internet.herokuapp.com')
    }

    //funciones

    clickOnFormLogin(){
        cy.get(':nth-child(21) > a').click()
    }

}

export default TheInternetHomePage