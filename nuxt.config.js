const axios = require('axios')
const _ = require('lodash')

module.exports = {
  head: {
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
    vendor: ['axios', 'marked', 'highlight.js']
  },
  env: {
    githubToken: '4aa6bcf919d238504e7db59a66d32e78281c0ad3'
  },
  loading: { color: '#41B883' },
  generate: {
    routeParams: {
      '/guide/:slug': menuToRouteParams('guide'),
      '/api/:slug': menuToRouteParams('api'),
      '/examples/:slug': menuToRouteParams('examples')
    }
  }
}

function menuToRouteParams (category) {
  return function () {
    return axios.get(`https://docs.api.nuxtjs.org/menu/en/${category}`)
    .then((res) => {
      return res.data || []
    })
    .then((menu) => {
      return _(menu)
      .map('links')
      .flatten()
      .map((m) => m.to.slice(1))
      .compact()
      .map((slug) => {
        return { slug }
      })
      .value()
    })
  }
}
