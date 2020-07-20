describe('testing the modal with basic test', () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl + '/')
  })
  it('get started button links to guides', () => {
    cy.get('a[data-cy="get-started"]').click()
    cy.url().should('include', '/guides/get-started/installation')
    cy.visit(Cypress.config().baseUrl + '/guides/get-started/installation')
  })
})
