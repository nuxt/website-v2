---
title: 'mdx'
short_description: 'Write JSX in your Markdown with Nuxt and import Vue Components in your .mdx files'
long_description: '@nuxtjs/mdx allows you to write JSX in your Markdown documents in your Nuxt application with MDX'
category: devtools
position: 31
logo: 'https://mdx.nuxtjs.org/icon.png'
image: 'https://mdx.nuxtjs.org/preview.png'
github: 'https://github.com/nuxt-community/mdx'
docs: 'https://mdx.nuxtjs.org/'
slug: mdx
latest: true
featured: true
features:
  - 'Import .mdx files as Vue components'
  - 'Import Vue components in your .mdx files'
  - 'Replace markdown elements with Vue components with the MDX Provider.'
authors:
  - name: Jonathan Bakebwa
    avatarUrl: https://avatars2.githubusercontent.com/u/21237954?s=460&u=8d33f80968b1e2582b530af74e26e4cb94d1a90b&v=4
    link: https://twitter.com/codebender828
---

<code-group>
<code-block label="Yarn" active>

```bash
yarn add --dev @nuxtjs/mdx
```

  </code-block>
  <code-block label="NPM">

```bash
npm i --save-dev @nuxtjs/mdx
```

  </code-block>
</code-group>

```js{}[nuxt.config.js]
export default {
  buildModules: ['@nuxtjs/mdx']
}
```

<docs-button :docs="docs"></docs-button>

<authors :authors="authors"></authors>

<npm-buttons>
  <a href="https://npmjs.com/package/@nuxtjs/mdx" rel="nofollow"><img src="https://camo.githubusercontent.com/605047d924e6ad7b51058d182bda1bbe88bbf2c9/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f406e7578746a732f6d64782f6c61746573742e737667" alt="npm version" data-canonical-src="https://img.shields.io/npm/v/@nuxtjs/mdx/latest.svg" style="max-width:100%;"></a>
  <a href="https://npmjs.com/package/@nuxtjs/mdx" rel="nofollow"><img src="https://camo.githubusercontent.com/d65786059694f37e275420cc0911dad2d39c149d/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f64742f406e7578746a732f6d64782e737667" alt="npm downloads" data-canonical-src="https://img.shields.io/npm/dt/@nuxtjs/mdx.svg" style="max-width:100%;"></a>
</npm-buttons>
