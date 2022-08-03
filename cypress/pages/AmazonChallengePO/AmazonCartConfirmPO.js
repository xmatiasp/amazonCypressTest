class AmazonCartConfirmPO{

    //locators
    addedToCartConfirmMessage(){
        return cy.xpath('//*[@id="attachDisplayAddBaseAlert"]/span')
        
    }
}

export default AmazonCartConfirmPO