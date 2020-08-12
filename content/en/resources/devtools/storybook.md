---
title: 'Storybook'
short_description: 'Easily integrate Storybook in your Nuxt.js application to design, build, and organize your UI components in isolation.'
long_description: 'Storybook is an open source tool for developing UI components in isolation. It makes building stunning UIs organized and efficient.'
category: devtools
position: 30
logo: 'https://storybook.nuxtjs.org/icon.png'
image: 'https://storybook.nuxtjs.org/preview.png'
github: 'https://github.com/nuxt-community/storybook'
docs: 'https://storybook.nuxtjs.org/'
slug: 'storybook'
latest: true
featured: true
features:
  - 'Zero configuration'
  - 'Nuxt webpack configuration'
  - 'Nuxt plugins support'
  - 'Story discovery from nuxt modules'
authors:
  - name: Ahad Birang
    avatarUrl: https://avatars3.githubusercontent.com/u/2047945?s=460&u=67389719f8d4c9c579f1c652549940edbc05cab5&v=4
    link: https://twitter.com/a_birang
---

<code-group>
<code-block label="Yarn" active>

```bash
yarn add @nuxtjs/storybook
```

  </code-block>
  <code-block label="NPM">

```bash
npm i @nuxtjs/storybook
```

  </code-block>
</code-group>

```js{}[nuxt.config.js]
export default {
  modules: ['@nuxtjs/storybook']
}
```

<docs-button :docs="docs"></docs-button>

<authors :authors="authors"></authors>

<npm-buttons>
  <a href="https://npmjs.com/package/@nuxtjs/storybook" rel="nofollow"><img src="https://camo.githubusercontent.com/9ad14518cf453f44911b4d8faf3c852972f2e2f1/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f406e7578746a732f73746f7279626f6f6b2f6c61746573742e737667" alt="npm version" data-canonical-src="https://img.shields.io/npm/v/@nuxtjs/storybook/latest.svg" style="max-width:100%;"></a>
  <a href="https://npmjs.com/package/@nuxtjs/storybook" rel="nofollow"><img src="https://camo.githubusercontent.com/2e78760a8a1c091801c33820d310c913b09a984c/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f64742f406e7578746a732f73746f7279626f6f6b2e737667" alt="npm downloads" data-canonical-src="https://img.shields.io/npm/dt/@nuxtjs/storybook.svg" style="max-width:100%;"></a>  
</npm-buttons>
