class AmazonResultsPageObj{

    //funciones
    scrolTo(x, y){
        cy.scrollTo(x, y)
    }

    checkHp(){
        cy.xpath('//li[@id="p_89/HP"]//label/input').check({force: true})
    }

    clickDivProduct(){
        cy.xpath('//*[@id="search"]/div[1]/div[1]/div/span[3]/div[2]/div[2]//span[@class="a-size-medium a-color-base a-text-normal"]')
        .click()
    }

    //locators
    checkBoxUsado(){
        return cy.xpath('//*[@id="p_n_condition-type/2224368011"]/span/a/div/label/input')
    }

    divProduct(){
        return cy.xpath('//*[@id="search"]/div[1]/div[1]/div/span[3]/div[2]/div[2]//span[@class="a-size-medium a-color-base a-text-normal"]')
    }

}

export default AmazonResultsPageObj