import { defineDocusConfig } from 'docus'

export default defineDocusConfig({
  title: 'Nuxt',
  description: '',
  url: 'https://nuxtjs.org',
  theme: '@docus/docs-theme',
  template: 'docs',
  credits: true,
  algolia: {
    appId: '1V8G7N9GF0',
    apiKey: '60a01900a4b726d667eab75b6f337592',
    indexName: 'nuxtjs',
    facetFilters: ['tags:main']
  },
  github: {
    repo: 'nuxt/nuxtjs.org',
    branch: 'main',
    releases: 'nuxt/nuxt.js'
  }
})
