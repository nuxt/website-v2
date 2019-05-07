const locale = process.env.NUXT_LOCALE || 'en'

export default {
  modern: 'client',
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://www.google-analytics.com' }
    ]
  },
  styleResources: {
    scss: [
      './assets/styles/variables/theme.scss'
    ]
  },
  css: [
    'normalize.css',
    'highlight.js/styles/github.css',
    '~/assets/scss/main.scss'
  ],
  modules: [
    ['~/modules/docs/', { port: 3001 }],
    '~/modules/static/',
    // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    // https://github.com/Developmint/nuxt-svg-loader/
    'nuxt-svg-loader',
    // https://pwa.nuxtjs.org
    '@nuxtjs/pwa'
  ],
  http: {
    prefix: '/_api/'
  },
  plugins: [
    '~/plugins/init.js',
    '~/plugins/intersection-observer.client.js',
    '~/plugins/ga.client.js',
    '~/plugins/adblock.client.js'
  ],
  env: {
    githubToken: process.env.GITHUB_TOKEN || '4aa6bcf919d238504e7db59a66d32e78281c0ad3',
    docSearchApiKey: 'ff80fbf046ce827f64f06e16f82f1401',
    locale
  },
  loading: { color: '#41B883' },
  router: {
    scrollBehavior(to, from, savedPosition) {
      // savedPosition is only available for popstate navigations (back button)
      if (savedPosition) {
        return savedPosition
      }
      return { x: 0, y: 0 }
    }
  },
  build: {
    hardSource: {
      info: {
        level: 'warn' // nuxt/nuxt.js#5653
      }
    }
  },
  generate: {
    fallback: true,
    interval: 100
  },
  manifest: {
    lang: process.env.NUXT_LOCALE || 'en'
  }
}
