describe('It checks to see if the toc at top of guides works ', () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl + '/guides/get-started/installation')
  })
  it('checks the table of contents anchor', () => {
    cy.get('[data-cy="toc"]').first().click()
    cy.url().should('contain', '#prerequisites')
    cy.visit(Cypress.config().baseUrl + '/guides/get-started/installation#prerequisites')
  })
})
