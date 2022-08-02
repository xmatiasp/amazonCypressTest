class AmazonResultsPageObj{

    //locators
    addedToCartConfirmMessage(){
        return cy.xpath('//*[@id="attachDisplayAddBaseAlert"]/span')
    }
}

export default AmazonResultsPageObj