---
title: 'Strapi'
short_description: 'Design APIs fast, manage content easily'
long_description: 'Strapi is the leading open-source headless CMS. It’s 100% Javascript, fully customizable and developer-first.'
category: databases
position: 30
logo: 'https://strapi.nuxtjs.org/icon.png'
image: 'https://strapi.nuxtjs.org/preview.png'
github: 'https://github.com/nuxt-community/strapi-module'
docs: 'https://strapi.nuxtjs.org/'
slug: 'strapi'
featured: true
latest: true
features:
  - 'Authentication support'
  - 'RESTful methods'
  - 'Adaptive SDK for API entities'
  - 'Handle errors with hooks'
authors:
  - name: Benjamin Canac
    avatarUrl: https://avatars3.githubusercontent.com/u/739984?s=460&u=a263ce7469841c60ad76354f0779055b7e8365d5&v=4
    link: https://twitter.com/benjamincanac
---

<code-group>
<code-block label="Yarn" active>

```bash
yarn add @nuxtjs/strapi
```

  </code-block>
  <code-block label="NPM">

```bash
npm i @nuxtjs/strapi
```

  </code-block>
</code-group>

```js{}[nuxt.config.js]
export default {
  modules: ['@nuxtjs/strapi']
}
```

<docs-button :docs="docs"></docs-button>

<authors :authors="authors"></authors>

<div class="flex mt-4 space-x-2">
  <a href="https://npmjs.com/package/@nuxtjs/strapi" rel="nofollow"><img src="https://camo.githubusercontent.com/d02e34087df984b5d6e5004824c8db88ba40eafa/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f406e7578746a732f7374726170692f6c61746573742e737667" alt="npm version" data-canonical-src="https://img.shields.io/npm/v/@nuxtjs/strapi/latest.svg" style="max-width:100%;"></a>
  <a href="https://npmjs.com/package/@nuxtjs/strapi" rel="nofollow"><img src="https://camo.githubusercontent.com/66f1f7910b8ed55bfe73e4a769e9e9d1a71ea1d6/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f64742f406e7578746a732f7374726170692e737667" alt="npm downloads" data-canonical-src="https://img.shields.io/npm/dt/@nuxtjs/strapi.svg" style="max-width:100%;"></a>
</div>
