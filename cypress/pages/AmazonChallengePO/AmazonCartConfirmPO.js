class AmazonCartConfirmPO{

    //locators
    addedToCartConfirmMessage(){
        return cy.xpath('//*[@id="sw-atc-details-single-container"]/div[2]/div/span')
        
    }
}

export default AmazonCartConfirmPO