import AmazonHomePageObj from '../../pages/AmazonChallengePO/AmazonHomePageObj'
import AmazonResultsPageObj from '../../pages/AmazonChallengePO/AmazonResultsPageObj'
import AmazonProductPageObj from '../../pages/AmazonChallengePO/AmazonProductPageObj'

const amazonHomePO = new AmazonHomePageObj
const amazonResultsPO = new AmazonResultsPageObj
const amazonProductPO = new AmazonProductPageObj

describe('Amazon ', ()=>{

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

    it.only('Search laptop, filter by brand "HP" and add to cart', () => {
        amazonHomePO.searchProduct("laptop")
        amazonResultsPO.checkHp()
        amazonResultsPO.clickDivProduct()
        amazonProductPO.selectQuantity('2')
        
    });

    it('Search laptop, filter by brand "HP" and add 3 to cart', () => {
        
    });

})