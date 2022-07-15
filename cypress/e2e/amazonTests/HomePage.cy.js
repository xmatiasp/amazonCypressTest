import AmazonHomePageObj from '../../pages/AmazonPages/AmazonHomePageObj'
import AmazonResultsPageObj from '../../pages/AmazonPages/AmazonResultsPageObj'

//instanciando PageObj
const amazonHomePO = new AmazonHomePageObj
const amazonResultsPO = new AmazonResultsPageObj


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
        cy.xpath('//div[@data-index="1"]//h2').should('include.text', 'Nintendo 64')
        cy.xpath('//div[@data-index="1"]//h2').click()
        cy.get('.a-section.a-spacing-base > :nth-child(1) > strong').should('include.text', 'Usado')
    }) 

})