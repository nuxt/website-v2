---
title: 'Auth'
short_description: 'Zero-boilerplate authentication support for Nuxt.js!'
long_description: 'Empower your NuxtJS application with @nuxt/content module: write in a content/ directory and fetch your Markdown, JSON, YAML, XML and CSV files through a MongoDB like API, acting as a Git-based Headless CMS.'
category: security
position: 51
logo: 'https://auth.nuxtjs.org/icon.png'
image: 'https://auth.nuxtjs.org/preview.png'
github: 'https://github.com/nuxt-community/auth-module'
docs: 'https://auth.nuxtjs.org/'
slug: 'content'
featured: true
features:
  - 'Zero Configuration'
  - 'Set up auth middleware'
  - 'Configure local scheme'
  - 'Customize Options'
authors:
  - name: Nuxt
    avatarUrl: https://avatars1.githubusercontent.com/u/29566738?s=200&v=4
    link: https://twitter.com/nuxt_js
---

<code-group>
<code-block label="Yarn" active>

```bash
yarn add @nuxtjs/auth @nuxtjs/axios
```

  </code-block>
  <code-block label="NPM">

```bash
npm i @nuxtjs/auth @nuxtjs/axios
```

  </code-block>
</code-group>

```js{}[nuxt.config.js]
export default {
  modules: ['@nuxtjs/auth', '@nuxtjs/axios']
}
```

<docs-button :docs="docs"></docs-button>

<authors :authors="authors"></authors>

<npm-buttons>
  <a href="https://npmjs.com/package/@nuxtjs/auth-next" rel="nofollow">
    <img alt="" src="https://camo.githubusercontent.com/014ae377646fe064209eda3b2b896bb593988530/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f406e7578746a732f617574682d6e6578742f6c61746573742e7376673f7374796c653d666c61742d737175617265" data-canonical-src="https://img.shields.io/npm/v/@nuxtjs/auth-next/latest.svg?style=flat-square" style="max-width:100%;">
  </a>
  <a href="https://npmjs.com/package/@nuxtjs/auth" rel="nofollow">
    <img alt="" src="https://camo.githubusercontent.com/3305edd8282f6f7ebdf4a85178dbd5ad048f33b0/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f64742f406e7578746a732f617574682d6e6578742e7376673f7374796c653d666c61742d737175617265" data-canonical-src="https://img.shields.io/npm/dt/@nuxtjs/auth-next.svg?style=flat-square" style="max-width:100%;">
</a>
</npm-buttons>
