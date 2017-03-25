const axios = require('axios')
const _ = require('lodash')

module.exports = {
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/docsearch.js/2/docsearch.min.css' }
    ]
  },
  css: [
    'normalize.css',
    'highlight.js/styles/github.css',
    { src: '~assets/scss/main.scss', lang: 'scss' }
  ],
  plugins: [
    '~plugins/ga.js'
  ],
  build: {
    vendor: ['axios']
  },
  env: {
    githubToken: '4aa6bcf919d238504e7db59a66d32e78281c0ad3',
    docSearchApiKey: 'ff80fbf046ce827f64f06e16f82f1401'
  },
  loading: { color: '#41B883' },
  generate: {
    routes () {
      const lang = 'en'
      return Promise.all(
        ['guide', 'api', 'examples', 'faq']
        .map((category) => {
          return axios.get(`https://docs.api.nuxtjs.org/menu/${lang}/${category}`)
          .then((res) => res.data || [])
          .then((menu) => {
            return _(menu)
            .map('links')
            .flatten()
            .map((m) => m.to.slice(1))
            .compact()
            .map((slug) => {
              return `/${category}/${slug}`
            })
            .value()
            .concat(`/${category}`)
          })
        })
      )
      .then((routes) => _(routes).flatten().uniq().value())
    }
  }
}
