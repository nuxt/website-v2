---
title: 'TailwindCSS'
short_description: 'Build bulletproof UI components faster'
long_description: 'Storybook is an open source tool for developing UI components in isolation. It makes building stunning UIs organized and efficient.'
category: ui-framework
position: 30
logo: 'https://tailwindcss.nuxtjs.org/icon.png'
image: 'https://tailwindcss.nuxtjs.org/preview.png'
github: 'https://github.com/nuxt-community/tailwindcss-module'
docs: 'https://tailwindcss.nuxtjs.org/'
slug: 'tailwindcss'
latest: true
featured: true
features:
  - 'Zero configuration to start'
  - 'PurgeCSS included for minimal CSS'
  - 'Use latest CSS features (Stage 1)'
  - 'Reference your Tailwind config in your app'
author:
  name: Nuxt
  avatarUrl: https://avatars1.githubusercontent.com/u/29566738?s=200&v=4
  twitterHandler: nuxt_js
---

<code-group>
<code-block label="Yarn" active>

```bash
yarn add --dev @nuxtjs/tailwindcss
```

  </code-block>
  <code-block label="NPM">

```bash
npm i --dev @nuxtjs/tailwindcss
```

  </code-block>
</code-group>

```js{}[nuxt.config.js]
export default {
  buildModules: ['@nuxtjs/tailwindcss']
}
```

<docs-button :docs="docs"></docs-button>

<base-author :author="author"></base-author>

<div class="flex mt-4 space-x-2">
  <a href="https://npmjs.com/package/@nuxtjs/tailwindcss" rel="nofollow"><img src="https://camo.githubusercontent.com/3812a9ff3b6fb92a8a7eaea07f8b8e55df55da0f/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f406e7578746a732f7461696c77696e646373732f6c61746573742e737667" alt="npm version" data-canonical-src="https://img.shields.io/npm/v/@nuxtjs/tailwindcss/latest.svg" style="max-width:100%;"></a> 
  <a href="https://npmjs.com/package/@nuxtjs/tailwindcss" rel="nofollow"><img src="https://camo.githubusercontent.com/942f0844974e1a166a9095f4f91ae82d2646ccae/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f64742f406e7578746a732f7461696c77696e646373732e737667" alt="npm downloads" data-canonical-src="https://img.shields.io/npm/dt/@nuxtjs/tailwindcss.svg" style="max-width:100%;"></a>
</div>
