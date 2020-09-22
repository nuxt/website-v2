export default {
  target: 'static',
  ssr: true,
  head: {
    htmlAttrs: {
      lang: process.env.NUXT_LOCALE,
      dir: ['fa', 'ar', 'he'].includes(process.env.NUXT_LOCALE) ? 'rtl' : 'ltr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'NuxtJS' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@nuxt_js' },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://nuxtjs.org/nuxt-card.png'
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://nuxtjs.org/nuxt-card.png'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'NuxtJS'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://nuxtjs.org/nuxt-card.png'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
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
    '~/modules/releases',
    '@nuxt/http',
    '@nuxt/content',
    'nuxt-i18n',
    'vue-scrollto/nuxt'
  ],

  pwa: {
    manifest: {
      name: 'NuxtJS',
      start_url: '/',
      icons: [
        {
          src: '/icon.png',
          type: 'image/png',
          sizes: '512x512',
          purpose: 'any maskable'
        }
      ]
    }
  },

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
    DOC_SEARCH_API_KEY:
      process.env.DOC_SEARCH_API_KEY || 'ff80fbf046ce827f64f06e16f82f1401',
    NUXT_API: process.env.NUXT_API || 'https://api.nuxtjs.com'
  },
  publicRuntimeConfig: {
    nuxtLocale: process.env.NUXT_LOCALE || 'en',
    nuxtVersion: '2.14.5',
    nuxtStars: '30K+'
  },
  loading: { color: '#41B883' },
  generate: {
    fallback: false,
    routes: ['/', '404']
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
        iso: 'ja-JP',
        file: 'ja-JP.js',
        name: '日本語',
        domain: 'https://ja.nuxtjs.org'
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
      },
      {
        code: 'pt',
        iso: 'pt-BR',
        file: 'pt-BR.js',
        name: 'Português',
        domain: 'https://pt.nuxtjs.org'
      }
      // please leave this commented out until subdomain is live
      // {
      //   code: 'fa',
      //   iso: 'fa-IR',
      //   file: 'fa-IR.js',
      //   name: 'Persian',
      //   domain: 'https://fa.nuxtjs.org'
      // }
      // please leave this commented out until subdomain is live
      // {
      // code: 'tr',
      // iso: 'tr-TR',
      // file: 'tr-TR.js',
      // name: 'Türkçe',
      // domain: 'https://tr.nuxtjs.org'
      // }
      // please leave this commented out until subdomain is live
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
  }
}
