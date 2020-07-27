describe('The Home Page links', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('checks to see if the get started button links to guides', () => {
    cy.get('a[data-cy="get-started"]').click()
    cy.url().should('include', '/guides/get-started/installation')
    cy.visit('/guides/get-started/installation')
  })
  it('checks to see if the sponsor button links to the sponsor page', () => {
    cy.get('a[data-cy="sponsors"]').click()
    cy.url().should('include', '/sponsor-nuxtjs')
    cy.visit('/sponsor-nuxtjs')
  })
  it.skip('checks to see if the try Nuxtjs button links to ', () => {
    cy.get('a[data-cy="why"]')
      .click()
      .its('url')
      .should(
        'eq',
        'https://codesandbox.io/s/github/nuxt/codesandbox-nuxt/tree/master/'
      )
  })
  it.skip('github stars links to the right page', () => {
    cy.get('a[data-cy="github-stars"]').click()
    cy.url().should('eq', 'https://github.com/nuxt/nuxt.js')
  })
})
