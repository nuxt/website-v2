describe('It checks to see if prev and next work for the guides ', () => {
  beforeEach(() => {
    cy.visit('/guides/get-started/routing')
  })
  it('checks the previous link', () => {
    cy.get('[data-cy="prev"]').click()
    cy.url().should('include', '/guides/get-started/installation')
    cy.visit('/guides/get-started/installation')
  })
  it('checks the next link', () => {
    cy.get('[data-cy="next"]').click()
    cy.url().should('include', '/guides/get-started/directory-structure')
    cy.visit('/guides/get-started/directory-structure')
  })
})
