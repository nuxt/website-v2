export default defineNuxtConfig({
  css: ['modern-normalize'],
  modules: [
    '@nuxt/content',
    '@nuxtjs/color-mode',
    '@nuxtjs/fontaine',
    'nuxt-icon',
    'pinceau/nuxt'
  ],
  colorMode: {
    classSuffix: ''
  },
  content: {
    documentDriven: true
  },
  pinceau: {
    preflight: false
  }
  // extends: '@nuxt-themes/typography'
})
