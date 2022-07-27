class AmazonResultsPageObj{

    //funciones
    scrolTo(x, y){
        cy.scrollTo(x, y)
    }

    checkUsado(){
        cy.xpath('//*[@id="p_n_condition-type/2224368011"]/span/a/div/label/input').check({force: true})
    }

    //locators
    checkBoxUsado(){
        return cy.xpath('//*[@id="p_n_condition-type/2224368011"]/span/a/div/label/input')
    }

    divProduct(){
        return cy.xpath('//div[@data-index="1"]//h2')
    }

}

export default AmazonResultsPageObj