describe('It checks to see if the modals works', () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl + '/guides/concepts/context-helpers')
  })


  it.skip('successfully opens, checks for iframe and closes the codeSandbox modal', () => {
    cy.get('[data-cy="modal-button"]').first().click()
    cy.get('[data-cy="modal-open"]')
      .should('be.visible')
    cy.get('[data-cy="modal-close"]').first().click()
  })

  it.skip('successfully opens checks for image and closes the image modal', () => {
    cy.get('[data-cy="modal-image"]').first().click()
    cy.get('[data-cy="modal-open"]')
      .should('be.visible').within(() => {
        cy.get('img').should('be.visible')
      })
    cy.get('[data-cy="modal-close"]').first().click()
    cy.get('[data-cy="modal-image"]').should('be.visible')
  })
})

