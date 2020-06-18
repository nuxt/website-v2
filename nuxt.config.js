const locale = process.env.NUXT_LOCALE || 'en'

export default {
  target: 'static',
  ssr: true,
  // modern: 'client',
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://www.google-analytics.com' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdn.jsdelivr.net/docsearch.js/2/docsearch.min.css' }
    ],
    script: [
      { src: 'https://cdn.jsdelivr.net/docsearch.js/2/docsearch.min.js', async: true, defer: true }
    ],
    bodyAttrs: {
      class: ['font-sans font-medium bg-light-surface dark:bg-dark-surface text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear']
    }
  },
  buildModules: [
    '@nuxtjs/eslint-module',
    // https://github.com/nuxt-community/color-mode-module
    '@nuxtjs/color-mode',
    // https://github.com/nuxt-community/netlify-files-module
    '@nuxtjs/netlify-files',
    // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    // https://github.com/Developmint/nuxt-svg-loader/
    // 'nuxt-svg-loader',
    '@nuxtjs/svg',
    // https://github.com/Atinux/nuxt-tailwindcss/
    '@nuxtjs/tailwindcss',
    // https://pwa.nuxtjs.org
    '@nuxtjs/pwa'
  ],
  modules: [
    ['~/modules/docs/', { port: 3001 }],
    // https://http.nuxtjs.org
    '@nuxt/http'
  ],
  // Auto import components, see https://github.com/nuxt/components
  components: true,
  colorMode: {
    preference: 'light' // disable system
  },
  plugins: [
    '~/plugins/init.js',
    '~/plugins/directives',
    '~/plugins/intersection-observer.client.js',
    '~/plugins/vue-observe-visibility.client.js',
    '~/plugins/ga.client.js',
    '~/plugins/adblock.client.js',
    '~/plugins/newsletter.client.js'
  ],
  env: {
    DEPLOY_PRIME_URL: process.env.DEPLOY_PRIME_URL || false,
    URL: process.env.URL || false,
    DOC_SEARCH_API_KEY: process.env.DOC_SEARCH_API_KEY || 'ff80fbf046ce827f64f06e16f82f1401',
    NUXT_API: process.env.NUXT_API || 'https://api.nuxtjs.com',
    LOCALE: locale
  },
  manifest: {
    lang: locale
  },
  loading: { color: '#41B883' },
  generate: {
    fallback: '404.html', // for Netlify
    interval: 100
  }
}
