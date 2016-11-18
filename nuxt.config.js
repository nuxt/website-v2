module.exports = {
  head: {
    title: 'Nuxt.js - A minimal framework for server-renderer Vue.js applications',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
    ]
  },
  css: [
    'normalize.css',
    { src: '~assets/scss/main.scss', lang: 'scss' }
  ]
}
