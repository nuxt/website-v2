const _ = require('lodash')

module.exports = {
  head: {
    title: 'Nuxt.js - Universal Vue.js Applications',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', hid: 'description', content: 'Nuxt.js is a minimal framework for creating Vue.js applications with server side rendering, code-splitting, hot-reloading, static generation and more!' }
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
  // router: {
  //   routes: [
  //     { path: '/guide/:slug', component: 'pages/guide' },
  //     { path: '/api/:slug', component: 'pages/api' },
  //     { path: '/examples/:slug', component: 'pages/examples' }
  //   ]
  // },
  plugins: [
    '~plugins/ga.js',
    '~plugins/marked'
  ],
  build: {
    vendor: ['whatwg-fetch', 'marked', 'highlight.js']
  },
  env: {
    githubToken: '4aa6bcf919d238504e7db59a66d32e78281c0ad3'
  },
  loading: { color: '#41B883' },
  generate: {
    routeParams: {
      '/:category': [
        { category: 'guide' },
        { category: 'api' }
      ],
      '/:category/:slug': _.flatten([
        menuToRouteParams('./static/docs/en/guide/menu.json', { category: 'guide' }),
        menuToRouteParams('./static/docs/en/api/menu.json', { category: 'api' })
      ]),
      '/:category/release-notes': [
        { category: 'guide '}
      ],
      '/examples/:slug': menuToRouteParams('./static/docs/en/examples/menu.json')
    }
  }
}

function menuToRouteParams (menuPath, params = {}) {
  let menu = require(menuPath)
  return _(menu)
  .map('links')
  .flatten()
  .map((m) => m.to.slice(1))
  .compact()
  .map((slug) => {
    return Object.assign({}, params, { slug })
  })
  .value()
}
