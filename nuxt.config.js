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
<<<<<<< HEAD
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
    ]
  },
  css: [
    'normalize.css',
<<<<<<< HEAD
    { src: '~assets/scss/main.scss', lang: 'scss' }
<<<<<<< HEAD
  ]
=======
=======
    'highlight.js/styles/github.css',
    '~/assets/scss/main.scss'
  ],
  modules: [
=======
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://www.google-analytics.com' }
    ],
    bodyAttrs: {
      class: ['font-sans font-medium bg-light-surface dark:bg-dark-surface text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear ']
    }
  },
  buildModules: [
    '@nuxtjs/eslint-module',
    ['~/modules/docs/', { port: 3001 }],
    '~/modules/crawler/',
    '~/modules/static/',
    '~/modules/components/',
    '~/modules/theme/',
    // https://github.com/nuxt-community/netlify-files-module
    '@nuxtjs/netlify-files',
    // https://github.com/nuxt-community/style-resources-module
>>>>>>> 1b87907b (feat: dark mode (#303))
    '@nuxtjs/style-resources',
<<<<<<< HEAD
    'nuxt-svg-loader'
    // ['~/modules/sentry', {
    //   project_id: process.env.SENTRY_PROJECT_ID,
    //   public_key: process.env.SENTRY_PUBLIC_KEY,
    //   private_key: process.env.SENTRY_PRIVATE_KEY
    // }]
>>>>>>> 5e315c38 (app: Support ad blockers, upgrade Nuxt)
=======
    // https://github.com/Developmint/nuxt-svg-loader/
    'nuxt-svg-loader',
    // https://github.com/DreaMinder/nuxt-payload-extractor
<<<<<<< HEAD
    // 'nuxt-payload-extractor'
>>>>>>> b4c06c90 (Merge branch 'master' of https://github.com/nuxt/nuxtjs.org)
=======
    'nuxt-payload-extractor',
    // https://pwa.nuxtjs.org
    '@nuxtjs/pwa'
>>>>>>> dd0be05d (feat(pwa): Add PWA mode)
  ],
<<<<<<< HEAD
  router: {
    routes: [
      { path: '/guide/:slug', component: 'pages/guide' }
    ]
  },
  build: {
    vendor: ['highlight.js']
=======
  // router: {
  //   routes: [
  //     { path: '/guide/:slug', component: 'pages/guide' },
  //     { path: '/api/:slug', component: 'pages/api' },
  //     { path: '/examples/:slug', component: 'pages/examples' }
  //   ]
  // },
  plugins: [
<<<<<<< HEAD
    '~plugins/ga.js',
    '~plugins/marked'
=======
    '~/plugins/init.js',
    { src: '~/plugins/ga.client.js', ssr: false },
    { src: '~/plugins/adblock.client.js', ssr: false }
>>>>>>> 5e315c38 (app: Support ad blockers, upgrade Nuxt)
  ],
  build: {
    vendor: ['whatwg-fetch', 'marked', 'highlight.js']
  },
  env: {
    githubToken: '4aa6bcf919d238504e7db59a66d32e78281c0ad3'
  },
  loading: { color: '#41B883' },
  generate: {
<<<<<<< HEAD
    routeParams: {
      '/guide/:slug': _(require('./static/docs/en/guide/menu.json')).values().flatten().map('to').compact().map((slug) => { return { slug: slug.replace(/^\//, '') } }).value(),
      '/api/:slug': _(require('./static/docs/en/api/menu.json')).values().flatten().map('to').compact().map((slug) => { return { slug: slug.replace(/^\//, '') } }).value(),
      '/examples/:slug': _(require('./static/docs/en/examples/menu.json')).values().flatten().map('to').compact().map((slug) => { return { slug: slug.replace(/^\//, '') } }).value()
    }
>>>>>>> 3d1d3d02 (new architecture)
=======
    fallback: true,
<<<<<<< HEAD
    interval: 100,
    routes() {
      return Promise.all(
        ['guide', 'api', 'examples', 'faq']
          .map((category) => {
            return axios.get(`https://docs.api.nuxtjs.org/menu/${locale}/${category}`)
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
  },
  /*
  ** Build configuration
  */
  styleResources: {
    scss: [
      './assets/styles/variables/theme.scss'
    ]
>>>>>>> 5e315c38 (app: Support ad blockers, upgrade Nuxt)
=======
    interval: 100
  },
<<<<<<< HEAD
  manifest: {
    lang: process.env.NUXT_LOCALE || 'en'
>>>>>>> dd0be05d (feat(pwa): Add PWA mode)
=======
  theme: {
    value: 'light'
>>>>>>> 1b87907b (feat: dark mode (#303))
  }
>>>>>>> f4d82e28 (guide content from component)
}
