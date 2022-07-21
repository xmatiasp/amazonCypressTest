import AmazonHomePageObj from '../../pages/AmazonPages/AmazonHomePageObj'
import AmazonResultsPageObj from '../../pages/AmazonPages/AmazonResultsPageObj'
import AmazonProductPageObj from '../../pages/AmazonPages/AmazonProductPageObj'

//instanciando PageObj
const amazonHomePO = new AmazonHomePageObj
const amazonResultsPO = new AmazonResultsPageObj
const amazonProductPO = new AmazonProductPageObj


describe('Search element', () => {

    beforeEach(() => {
        amazonHomePO.navigateHome()
      })

    it('Validate search results match to criteria', () => {
        //evita que salga el error del json de amazon ajeno a mi codigo
        Cypress.on('uncaught:exception', (err, runnable) => {         
            return false
          })
        
        amazonHomePO.searchProduct('Nintendo 64')
        amazonResultsPO.scrolTo(0, 500)
        amazonResultsPO.checkUsado()
        amazonResultsPO.checkBoxUsado().should('be.checked')
        amazonResultsPO.divProduct().should('include.text', 'Nintendo 64')
        amazonResultsPO.divProduct().click()
        amazonProductPO.conditionText().should('include.text', 'Usado')
    }) 

})