---
title: 'PWA'
short_description: 'Supercharge Nuxt with a heavily tested, updated, zero-config and stable PWA solution!'
long_description: 'Progressive Web Apps (PWA) are reliable, fast, and engaging, although there are many things that can take a PWA from a baseline to exemplary experience.'
category: performance
position: 61
logo: 'https://pwa.nuxtjs.org/icon.png'
image: 'https://pwa.nuxtjs.org/preview.png'
github: 'https://github.com/nuxt-community/pwa-module'
docs: 'https://pwa.nuxtjs.org/'
slug: 'pwa'
latest: true
featured: true
features:
  - 'Registers a service worker for offline caching'
  - 'Automatically generate manifest.json file'
  - 'Automatically adds SEO friendly meta data with manifest integration'
  - 'Automatically generates app icons with different sizes'
author:
  name: Nuxt
  avatarUrl: https://avatars1.githubusercontent.com/u/29566738?s=200&v=4
  twitterHandler: nuxt_js
---

<code-group>
<code-block label="Yarn" active>

```bash
yarn add @nuxtjs/pwa
```

  </code-block>
  <code-block label="NPM">

```bash
npm i @nuxtjs/pwa
```

  </code-block>
</code-group>

```js{}[nuxt.config.js]
export default {
  modules: ['@nuxtjs/pwa']
}
```

<docs-button :docs="docs"></docs-button>

<base-author :author="author"></base-author>

<div class="flex mt-4 space-x-2">
  <a href="https://npmjs.com/package/@nuxtjs/pwa" rel="nofollow"><img src="https://camo.githubusercontent.com/62bc851b7e15ae15e249d64bd2f9c32b426df848/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f406e7578746a732f7077612f6c61746573742e7376673f7374796c653d666c61742d737175617265" alt="npm version" data-canonical-src="https://img.shields.io/npm/v/@nuxtjs/pwa/latest.svg?style=flat-square" style="max-width:100%;"></a>
  <a href="https://npmjs.com/package/@nuxtjs/pwa" rel="nofollow"><img src="https://camo.githubusercontent.com/2753d9ef814c6106792a9ea5d99a3b9ce7ada572/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f64742f406e7578746a732f7077612e7376673f7374796c653d666c61742d737175617265" alt="npm downloads" data-canonical-src="https://img.shields.io/npm/dt/@nuxtjs/pwa.svg?style=flat-square" style="max-width:100%;"></a>
</div>
