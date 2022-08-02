class AmazonProductPageObj{

    //funciones
    selectQuantity(number){
        cy.xpath('//div[@id="selectQuantity"]//select[@id="quantity"]').select(number, {force: true})
        /*cy.xpath('//div[@id="selectQuantity"]//select[@id="quantity"]')
            .then((quantity)=>{
                if(quantity < number){               
                    quantity.select((number, {force: true}))
                }
                else quantity.select(number, {force: true})
        })*/
    }

    clickAddToCartButton(){
        cy.xpath('//*[@id="add-to-cart-button"]').click()
    }

    //locators
    returnQuantity(){
        return cy.xpath('//*[@id="a-autoid-0-announce"]/span[2]')
    }

}

export default AmazonProductPageObj