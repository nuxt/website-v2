describe('It checks to see if the modals works', () => {
  it('successfully opens, checks for iframe and closes the codeSandbox modal', () => {
    cy.visit('/guides/get-started/installation')
    cy.get('[data-cy="modal-button"]').click()
    cy.get('[data-cy="modal-open"]').should('be.visible')
    cy.get('[data-cy="modal-close"]').click()
  })
})
