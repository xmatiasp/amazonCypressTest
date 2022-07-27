class AmazonProductPageObj{

    //funciones
    selectQuantity(number){
        cy.xpath('//div[@id="selectQuantity"]//select[@id="quantity"]').select(number, {force: true})
    }

}

export default AmazonProductPageObj