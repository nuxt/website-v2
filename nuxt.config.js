module.exports = {
  head: {
    title: 'Nuxt.js - Universal Vue.js Applications',
    meta: [
      { charset: 'utf-8' },
<<<<<<< HEAD
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
=======
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', hid: 'description', content: 'Nuxt.js is a minimal framework for creating Vue.js applications with server side rendering, code-splitting, hot-reloading, static generation and more!' }
>>>>>>> 925b7850 (navbar)
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
    ]
  },
  css: [
    'normalize.css',
    { src: '~assets/scss/main.scss', lang: 'scss' }
<<<<<<< HEAD
  ]
=======
  ],
  router: {
    routes: [
      { path: '/guide/:slug', component: 'pages/guide' }
    ]
  },
  build: {
    vendor: ['highlight.js']
  }
>>>>>>> f4d82e28 (guide content from component)
}
