import AmazonHomePageObj from '../../pages/AmazonChallengePO/AmazonHomePageObj'
import AmazonResultsPageObj from '../../pages/AmazonChallengePO/AmazonResultsPageObj'
import AmazonProductPageObj from '../../pages/AmazonChallengePO/AmazonProductPageObj'
import AmazonCartConfirmPO from '../../pages/AmazonChallengePO/AmazonCartConfirmPO'

const amazonHomePO = new AmazonHomePageObj
const amazonResultsPO = new AmazonResultsPageObj
const amazonProductPO = new AmazonProductPageObj
const amazonCartConfirmPO = new AmazonCartConfirmPO

describe('Amazon Tests', ()=>{

    before(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {         
            return false
          })
    });

    beforeEach(() => {
        amazonHomePO.navigateHome()
    });

    it('Search a product and validate the search results are correct', () => {
        amazonHomePO.searchProduct("laptop")
        amazonResultsPO.checkHp()
        amazonResultsPO.divProduct().should('include.text', 'HP')
    });

    it('Search laptop, filter by brand "HP" and add to cart', () => {
        amazonHomePO.searchProduct("laptop")
        amazonResultsPO.checkHp()
        amazonResultsPO.clickDivProduct()
        amazonProductPO.clickAddToCartButton()
        amazonCartConfirmPO.addedToCartConfirmMessage().should('include.text',        
        'Agregado al carrito')

        
    });

    it.skip('Search laptop, filter by brand "HP" and add 2 to cart', () => {
        amazonHomePO.searchProduct("laptop")
        amazonResultsPO.checkHp()
        amazonResultsPO.clickDivProduct()
        amazonProductPO.selectQuantity('2')
        amazonProductPO.returnQuantity().should('have.text', '2 ')
        amazonProductPO.clickAddToCartButton()
        amazonCartConfirmPO.addedToCartConfirmMessage().should('include.text',
        'Agregado al carrito')

    });

})