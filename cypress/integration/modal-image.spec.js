describe('It checks to see if the modals works', () => {
  it.skip('successfully opens checks for image and closes the image modal', () => {
    cy.visit('/guides/concepts/context-helpers')
    cy.get('[data-cy="modal-image"]').click()
    cy.get('[data-cy="modal-open"]')
      .should('be.visible')
      .within(() => {
        cy.get('img').should('be.visible')
        cy.get('[data-cy="modal-close"]').click()
      })

    cy.get('[data-cy="modal-image"]').should('be.visible')
  })
})
