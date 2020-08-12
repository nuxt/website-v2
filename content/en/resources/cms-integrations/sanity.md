---
title: 'Sanity'
short_description: 'Sanity is the fastest, most flexible platform for delivering content to digital devices and products.'
long_description: 'Sanity lets you treat content as structured data so you can flow it across APIs to power experiences wherever you might need them.'
category: cms-integrations
position: 2
logo: 'https://sanity.nuxtjs.org/icon.png'
image: 'https://sanity.nuxtjs.org/preview.png'
github: 'https://github.com/nuxt-community/sanity-module'
docs: 'https://sanity.nuxtjs.org/'
slug: 'sanity'
latest: true
featured: true
features:
  - 'Just bring your sanity.json - no additional configuration required'
  - 'Ultra-lightweight Sanity client'
  - 'Zero-config image component'
  - 'Supports GROQ syntax highlighting'
authors:
  - name: Daniel Roe
    avatarUrl: https://avatars1.githubusercontent.com/u/28706372?s=460&v=4
    link: https://twitter.com/danielcroe
---

<code-group>
<code-block label="Yarn" active>

```bash
yarn add @nuxtjs/sanity
```

  </code-block>
  <code-block label="NPM">

```bash
npm i @nuxtjs/sanity
```

  </code-block>
</code-group>

```js{}[nuxt.config.js]
export default {
  buildModules: ['@nuxtjs/sanity']
}
```

<docs-button :docs="docs"></docs-button>

<authors :authors="authors"></authors>

<div class="flex mt-4 space-x-2">
  <a href="https://npmjs.com/package/@nuxtjs/sanity" rel="nofollow"><img src="https://camo.githubusercontent.com/b54a5ddba1a78fec90822dcd4f3f6ccac5e93332/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f406e7578746a732f73616e6974792f6c61746573742e737667" alt="npm version" data-canonical-src="https://img.shields.io/npm/v/@nuxtjs/sanity/latest.svg" style="max-width:100%;"></a>
  <a href="https://npmjs.com/package/@nuxtjs/sanity" rel="nofollow"><img src="https://camo.githubusercontent.com/169be3264f076e0c19633d8845fcf2593ce1a55c/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f646d2f406e7578746a732f73616e6974792e737667" alt="npm downloads" data-canonical-src="https://img.shields.io/npm/dm/@nuxtjs/sanity.svg" style="max-width:100%;"></a>
</div>
