class AmazonProductPageObj{

    conditionText(){
       return cy.get('.a-section.a-spacing-base > :nth-child(1) > strong')
    }

}

export default AmazonProductPageObj