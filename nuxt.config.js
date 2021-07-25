<<<<<<< HEAD
<<<<<<< HEAD
module.exports = {
=======
=======
import webpack from 'webpack'

>>>>>>> 32390dfa (fix: missing URLs and release-notes)
export default {
  target: 'static',
  ssr: true,
>>>>>>> 26a70b2b (chore: add guides section (#407))
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
<<<<<<< HEAD
      { rel: 'preconnect', href: 'https://www.google-analytics.com' }
    ],
    bodyAttrs: {
      class: ['font-sans font-medium bg-light-surface dark:bg-dark-surface text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear ']
=======
      { rel: 'preconnect', href: 'https://www.google-analytics.com' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://cdn.jsdelivr.net/docsearch.js/2/docsearch.min.css'
      }
    ],
    bodyAttrs: {
      class: [
        'font-sans font-medium bg-light-surface dark:bg-dark-surface text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear'
      ]
>>>>>>> 26a70b2b (chore: add guides section (#407))
    }
  },
  buildModules: [
<<<<<<< HEAD
    '@nuxtjs/eslint-module',
    ['~/modules/docs/', { port: 3001 }],
    '~/modules/crawler/',
    '~/modules/static/',
    '~/modules/components/',
    '~/modules/theme/',
=======
    // https://github.com/nuxt-community/eslint-module
    // Disabled, waiting for https://github.com/nuxt-community/eslint-module/pull/46 to be released
    // '@nuxtjs/eslint-module',
    // https://github.com/nuxt-community/color-mode-module
    '@nuxtjs/color-mode',
>>>>>>> 32390dfa (fix: missing URLs and release-notes)
    // https://github.com/nuxt-community/netlify-files-module
    '@nuxtjs/netlify-files',
    // https://github.com/nuxt-community/style-resources-module
>>>>>>> 1b87907b (feat: dark mode (#303))
    '@nuxtjs/style-resources',
<<<<<<< HEAD
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
=======
    // https://github.com/nuxt-community/svg-module
    '@nuxtjs/svg',
    // https://github.com/Atinux/nuxt-tailwindcss/
    '@nuxtjs/tailwindcss',
>>>>>>> 32390dfa (fix: missing URLs and release-notes)
    // https://pwa.nuxtjs.org
    '@nuxtjs/pwa'
>>>>>>> dd0be05d (feat(pwa): Add PWA mode)
  ],
<<<<<<< HEAD
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
<<<<<<< HEAD
    { src: '~/plugins/ga.client.js', ssr: false },
    { src: '~/plugins/adblock.client.js', ssr: false }
>>>>>>> 5e315c38 (app: Support ad blockers, upgrade Nuxt)
  ],
  build: {
    vendor: ['whatwg-fetch', 'marked', 'highlight.js']
=======
=======
  modules: [
    '~/modules/releases',
    '@nuxt/http',
    '@nuxt/content',
    'nuxt-i18n',
    'vue-scrollto/nuxt'
  ],
  // Auto import components, see https://github.com/nuxt/components
  components: true,
  colorMode: {
    preference: 'light' // disable system
  },
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    }
  },
  css: ['~/assets/css/main.scss'],
  hooks: {
    'content:file:beforeInsert': item => {
      const stats = require('reading-time')(item.text)

      if (item.slug === '' && item.extension === '.md') {
      }

      item.readingTime = stats
    }
  },
  plugins: [
    '~/plugins/i18n',
>>>>>>> 26a70b2b (chore: add guides section (#407))
    '~/plugins/directives',
    '~/plugins/intersection-observer.client.js',
    '~/plugins/vue-observe-visibility.client.js',
    '~/plugins/ga.client.js',
    '~/plugins/adblock.client.js',
    '~/plugins/newsletter.client.js',
    '~/plugins/vue-scrollactive'
  ],
  env: {
    DEPLOY_PRIME_URL: process.env.DEPLOY_PRIME_URL || false,
    URL: process.env.URL || false,
<<<<<<< HEAD
    DOC_SEARCH_API_KEY: process.env.DOC_SEARCH_API_KEY || 'ff80fbf046ce827f64f06e16f82f1401',
    NUXT_API: process.env.NUXT_API || 'https://api.nuxtjs.com',
    LOCALE: locale
>>>>>>> 61b90c66 (feat: Add /blog section (#307))
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
=======
    DOC_SEARCH_API_KEY:
      process.env.DOC_SEARCH_API_KEY || 'ff80fbf046ce827f64f06e16f82f1401',
    NUXT_API: process.env.NUXT_API || 'https://api.nuxtjs.com'
  },
  publicRuntimeConfig: {
    nuxtLocale: process.env.NUXT_LOCALE || 'en',
<<<<<<< HEAD
    nuxtVersion: '2.14.0',
    nuxtStars: '28K+'
=======
    nuxtVersion: '2.15.2',
    nuxtStars: '37K+'
>>>>>>> 27303b77 (changed number of stars from 34k to 37k (#1576))
  },
  loading: { color: '#41B883' },
  generate: {
    fallback: '404.html', // for Netlify
    routes: ['/']
  },
  i18n: {
    strategy: 'no_prefix',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.js',
        name: 'English',
        domain: 'https://nuxtjs.org'
      },
      {
        code: 'fr',
        iso: 'fr-FR',
        file: 'fr-FR.js',
        name: 'Français',
        domain: 'https://fr.nuxtjs.org'
      },
      {
        code: 'zh',
        iso: 'zh-ZH',
        file: 'zh-ZH.js',
        name: '简体中文',
        domain: 'https://zh.nuxtjs.org'
      },

      {
        code: 'ja',
        iso: 'ja-JA',
        file: 'ja-JA.js',
        name: '日本語',
        domain: 'https://jp.nuxtjs.org'
      },
      {
        code: 'ko',
        iso: 'ko-KO',
        file: 'ko-KO.js',
        name: '한국어',
        domain: 'https://ko.nuxtjs.org'
      },
      {
        code: 'ru',
        iso: 'ru-RU',
        file: 'ru-RU.js',
        name: 'Русский',
        domain: 'https://ru.nuxtjs.org'
      },
      {
        code: 'id',
        iso: 'id-ID',
        file: 'id-ID.js',
        name: 'Indonesian',
        domain: 'https://id.nuxtjs.org'
      }
      // {
      //   code: 'es',
      //   iso: 'es-ES',
      //   file: 'es-ES.js',
      //   name: 'Español',
      //   domain: 'https://es.nuxtjs.org'
      // }
    ],
    vueI18n: {
      fallbackLocale: 'en'
    },
    defaultLocale: 'en',
    parsePages: false,
    detectBrowserLanguage: false,
    seo: false,
    lazy: true,
    langDir: 'i18n/'
<<<<<<< HEAD
>>>>>>> 26a70b2b (chore: add guides section (#407))
=======
  },
  build: {
    plugins: [
      new webpack.IgnorePlugin({
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/
      })
    ]
  },
  hooks: {
    'content:file:beforeInsert': item => {
      const stats = require('reading-time')(item.text)

      if (item.slug === '' && item.extension === '.md') {
      }

      item.readingTime = stats
    }
>>>>>>> 32390dfa (fix: missing URLs and release-notes)
  }
>>>>>>> f4d82e28 (guide content from component)
}
