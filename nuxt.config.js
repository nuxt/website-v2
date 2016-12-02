const _ = require('lodash')

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
    'highlight.js/styles/hybrid.css',
    { src: '~assets/scss/main.scss', lang: 'scss' }
  ],
  router: {
    base: 'nuxtjs.org',
    routes: [
      { path: '/guide/:slug', component: 'pages/guide' },
      { path: '/api/:slug', component: 'pages/api' },
      { path: '/examples/:slug', component: 'pages/examples' }
    ]
  },
  plugins: ['~plugins/marked'],
  build: {
    vendor: ['whatwg-fetch', 'marked', 'highlight.js']
  },
  env: {
    githubToken: '4aa6bcf919d238504e7db59a66d32e78281c0ad3'
  },
  generate: {
    routeParams: {
      '/guide/:slug': _(require('./static/docs/guide/menu.json')).values().flatten().map('to').compact().map((slug) => { return { slug: slug.replace(/^\//, '') } }).value(),
      '/api/:slug': _(require('./static/docs/api/menu.json')).values().flatten().map('to').compact().map((slug) => { return { slug: slug.replace(/^\//, '') } }).value(),
      '/examples/:slug': _(require('./static/docs/examples/menu.json')).values().flatten().map('to').compact().map((slug) => { return { slug: slug.replace(/^\//, '') } }).value()
    }
  }
}
