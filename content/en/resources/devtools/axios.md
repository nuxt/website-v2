---
title: 'axios'
short_description: 'Secure and easy axios integration with Nuxt.js so you can easily make http requests.'
long_description: 'Axios is a Promise based HTTP client for the browser and node.js so you can easily make http requests in your Nuxt.js application'
category: devtools
position: 33
logo: 'https://axios.nuxtjs.org/icon.png'
image: 'https://axios.nuxtjs.org/preview.png'
github: 'https://github.com/nuxt-community/axios-module'
docs: 'https://axios.nuxtjs.org/'
slug: 'axios'
latest: false
featured: true
features:
  - 'Automatically set base URL for client & server side'
  - 'Exposes `setToken` function to `$axios` so we can easily and globally set authentication tokens'
  - 'Automatically enables `withCredentials` when requesting to base URL'
  - 'Proxy request headers in SSR (Useful for auth)'
authors:
  - name: Pooya Parsa
    avatarUrl: https://avatars2.githubusercontent.com/u/5158436?s=460&u=f9301fddd9642fab997eab88f939a0adbcb6094a&v=4
    link: https://twitter.com/_pi0_
---

<code-group>
<code-block label="Yarn" active>

```bash
yarn add @nuxtjs/axios
```

  </code-block>
  <code-block label="NPM">

```bash
npm i @nuxtjs/axios
```

  </code-block>
</code-group>

```js{}[nuxt.config.js]
export default {
  modules: ['@nuxtjs/axios']
}
```

<docs-button :docs="docs"></docs-button>

<authors :authors="authors"></authors>

<npm-buttons>
  <a href="https://npmjs.com/package/@nuxtjs/axios" rel="nofollow"><img src="https://camo.githubusercontent.com/32b18d652d8476ed700b871d7fa31a2833437186/68747470733a2f2f666c61742e62616467656e2e6e65742f6e706d2f762f406e7578746a732f6178696f73" alt="npm version" data-canonical-src="https://flat.badgen.net/npm/v/@nuxtjs/axios" style="max-width:100%;"></a>
  <a href="https://npmjs.com/package/@nuxtjs/axios" rel="nofollow"><img src="https://camo.githubusercontent.com/5a3d866ba925a37532f7adfd6a47307a731100d4/68747470733a2f2f666c61742e62616467656e2e6e65742f6e706d2f646d2f406e7578746a732f6178696f73" alt="npm downloads" data-canonical-src="https://flat.badgen.net/npm/dm/@nuxtjs/axios" style="max-width:100%;"></a>
</npm-buttons>
