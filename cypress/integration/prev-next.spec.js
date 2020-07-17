describe('It checks to see if prev and next work for the guides ', () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl + '/guides/get-started/routing')
  })
  it('checks the previous link', () => {
    cy.get('[data-cy="prev"]').click()
    cy.url().should('include', Cypress.config().baseUrl + '/guides/get-started/installation')
    cy.go(-1)
  })
  it('checks the next link', () => {
    cy.get('[data-cy="next"]').click()
    cy.url().should('include', Cypress.config().baseUrl + '/guides/get-started/directory-structure')
    cy.go(1)
  })
})
