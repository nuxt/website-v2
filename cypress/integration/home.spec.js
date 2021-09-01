describe('The Home Page links', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('checks to see if the get started button links to guides', () => {
<<<<<<< HEAD
    cy.get('a[data-cy="get-started"]').click()
    cy.url().should('include', '/guides/get-started/installation')
    cy.visit('/guides/get-started/installation')
=======
    cy.get('a[data-cy="get-started"]')
      .click()
    cy.url().should('include', '/docs/2.x/get-started/installation')
    cy.visit('/docs/2.x/get-started/installation/')
  })

  it('github stars links to the right page', () => {
    cy.get('a[data-cy="github-stars"]')
      .should('have.attr', 'href', 'https://github.com/nuxt/nuxt.js')
  })

  it('checks the newsletter message links to newsletter signup', () => {
    cy.get('[data-cy="newsletter-link"]').within(() => {
      cy.get('a').click()
      cy.url().should('include', 'subscribe-to-newsletter')
    })

  })

  it('checks the video is there', () => {
    cy.get('[data-cy="video"]').within(() => {
      cy.get('iframe').should('have.attr', 'src', 'https://player.vimeo.com/video/311756540')
    })
  })

  it('checks to see if the try Nuxtjs button links to StackBlitz', () => {
    cy.get('a[data-cy="why-sb"]')
    .should('have.attr', 'href', 'https://stackblitz.com/fork/github/nuxt/starter/tree/stackblitz')
  })

  it('checks to see if the try Nuxtjs button links to CodeSandbox', () => {
    cy.get('a[data-cy="why-csb"]')
    .should('have.attr', 'href', 'https://template.nuxtjs.org')
>>>>>>> d3b5d6d7 (docs: add StackBlitz online demo link to homepage (#1651))
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
