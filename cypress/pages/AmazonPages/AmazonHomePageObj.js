class AmazonHomePageObj{

    navigateHome(){
        cy.visit('https://www.amazon.com/')
    }

    searchProduct(keys){
        cy.get('#twotabsearchtextbox').click()
        cy.get('#twotabsearchtextbox').type(keys)
        cy.wait(1000)
        cy.get('#nav-search-submit-button').click()
    }

}

export default AmazonHomePageObj