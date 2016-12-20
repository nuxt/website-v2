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
      '/guide/:slug': _(require('./static/docs/en/guide/menu.json')).values().flatten().map('to').compact().map((slug) => { return { slug: slug.replace(/^\//, '') } }).value(),
      '/api/:slug': _(require('./static/docs/en/api/menu.json')).values().flatten().map('to').compact().map((slug) => { return { slug: slug.replace(/^\//, '') } }).value(),
      '/examples/:slug': _(require('./static/docs/en/examples/menu.json')).values().flatten().map('to').compact().map((slug) => { return { slug: slug.replace(/^\//, '') } }).value()
    }
>>>>>>> 3d1d3d02 (new architecture)
  }
>>>>>>> f4d82e28 (guide content from component)
}
