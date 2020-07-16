describe('The Home Page', function () {
  beforeEach(() => {
    cy.visit('/')
  })
  it('get started button links to guides', function () {
    cy.get('a[data-cy="get-started"]').click()
    cy.url().should('include', '/guides/get-started/installation')
    cy.visit('/guides/get-started/installation')
  })
  it('github stars links to the right page', function () {
    cy.get('a[data-cy="github-stars"]').click()
    cy.url().should('eq', 'https://github.com/nuxt/nuxt.js')
  })
})
