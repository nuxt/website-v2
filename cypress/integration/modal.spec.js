describe('It checks to see if people can sign up for the newsletter', () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl + '/guides/concepts/context-helpers')
  })

  it('successfully opens, checks for iframe and closes the codeSandbox modal', () => {
    cy.get('[data-cy="modal-button"]').click({multiple:true, force:true})
    cy.get('[data-cy="modal-open"]')
      .should('be.visible')
    cy.get('iframe').should('be.visible')
    cy.get('[data-cy="modal-close"]').click({multiple:true, force:true})
    cy.get('[data-cy="modal-button"]').should('be.visible')
  })

  it('successfully opens checks for image and closes the image modal', () => {
    cy.get('[data-cy="modal-image"]').click({multiple:true, force:true})
    cy.get('[data-cy="modal-open"]')
      .should('be.visible').within(() => {
        cy.get('img').should('be.visible')
      })
    cy.get('[data-cy="modal-close"]').click({multiple:true, force:true})
    cy.get('[data-cy="modal-image"]').should('be.visible')
  })
})
