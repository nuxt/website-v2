module.exports = {
  head: {
    title: 'Nuxt.js - A minimal framework for server-renderer Vue.js applications',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', content: 'Nuxt.js is a minimal framework for creating Vue.js applications with server side rendering, code-splitting, hot-reloading, static generation and more!' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
    ]
  },
  css: [
    'normalize.css',
    { src: '~assets/scss/main.scss', lang: 'scss' }
  ],
  router: {
    routes: [
      { path: '/guide/:slug', component: 'pages/guide' },
      { path: '/examples/:slug', component: 'pages/examples' }
    ]
  },
  build: {
    vendor: ['whatwg-fetch', 'marked']
  }
}
