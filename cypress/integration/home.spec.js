describe('The Home Page', () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl + '/')
  })
  it('get started button links to guides', () => {
    cy.get('a[data-cy="get-started"]').click()
    cy.url().should('include', '/guides/get-started/installation')
    cy.visit(Cypress.config().baseUrl + '/guides/get-started/installation')
  })
  it.skip('github stars links to the right page', () => {
    cy.get('a[data-cy="github-stars"]').click()
    cy.url().should('eq', 'https://github.com/nuxt/nuxt.js')
  })
})
