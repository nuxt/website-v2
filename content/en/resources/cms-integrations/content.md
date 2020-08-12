---
title: 'Content'
short_description: 'Use markdown, JSON, YAML, XML or CSV in your nuxt application to easily write content fetched using a MongoDB like API.'
long_description: 'Empower your NuxtJS application with @nuxt/content module: write in a content/ directory and fetch your Markdown, JSON, YAML, XML and CSV files through a MongoDB like API, acting as a Git-based Headless CMS.'
category: cms-integrations
position: 1
logo: 'https://content.nuxtjs.org/icon.png'
image: 'https://content.nuxtjs.org/preview.png'
github: 'https://github.com/nuxt/content'
docs: 'https://content.nuxtjs.org/'
slug: 'content'
featured: true
features:
  - 'Blazing fast hot reload in development'
  - 'Vue components in Markdown'
  - 'Full-text search'
  - 'Table of contents generation'
authors:
  - name: Benjamin Canac
    avatarUrl: https://avatars3.githubusercontent.com/u/739984?s=460&u=a263ce7469841c60ad76354f0779055b7e8365d5&v=4
    link: https://twitter.com/benjamincanac
---

<code-group>
<code-block label="Yarn" active>

```bash
yarn add @nuxtjs/content
```

  </code-block>
  <code-block label="NPM">

```bash
npm i @nuxtjs/content
```

  </code-block>
</code-group>

```js{}[nuxt.config.js]
export default {
  modules: ['@nuxtjs/content']
}
```

<docs-button :docs="docs"></docs-button>

<authors :authors="authors"></authors>

<div class="flex mt-4 space-x-2">
  <a href="https://npmjs.com/package/@nuxt/content" rel="nofollow"><img src="https://camo.githubusercontent.com/9f31c446e7bb41e006ece39a68147458f1be84f4/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f406e7578742f636f6e74656e742f6c61746573742e737667" alt="npm version" data-canonical-src="https://img.shields.io/npm/v/@nuxt/content/latest.svg" style="max-width:100%;"></a>
  <a href="https://npmjs.com/package/@nuxt/content" rel="nofollow"><img src="https://camo.githubusercontent.com/8fec2493a695ca926a8a9a0d72c946a196c68971/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f64742f406e7578742f636f6e74656e742e737667" alt="npm downloads" data-canonical-src="https://img.shields.io/npm/dt/@nuxt/content.svg" style="max-width:100%;"></a>
</div>
