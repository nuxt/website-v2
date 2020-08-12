---
title: 'Prismic'
short_description: 'Connect your Nuxt application to your content hosted on Prismic and setup features like Prismic previews.'
long_description: 'Prismic is a Content Management System, a tool for editing online content. Also known as a headless CMS, an API CMS, a content platform, a tool that easily lets you manage your content.'
category: cms-integrations
position: 2
logo: 'https://prismic.nuxtjs.org/icon.png'
image: 'https://prismic.nuxtjs.org/preview.png'
github: 'https://github.com/nuxt-community/prismic-module'
docs: 'https://prismic.nuxtjs.org/'
slug: 'prismic'
featured: true
latest: true
features:
  - 'Add Prismic to your Nuxt app in seconds'
  - 'Access Prismic SDK with $prismic'
  - 'Prismic previews supported'
  - 'Compact configuration'
authors:
  - name: Lihbr
    avatarUrl: https://avatars1.githubusercontent.com/u/25330882?s=460&v=4
    link: https://twitter.com/li_hbr
---

<code-group>
<code-block label="Yarn" active>

```bash
yarn add -D @nuxtjs/prismic
```

  </code-block>
  <code-block label="NPM">

```bash
npm i --dev @nuxtjs/prismic
```

  </code-block>
</code-group>

```js{}[nuxt.config.js]
export default {
  modules: ['@nuxtjs/prismic'],
  prismic: {
    endpoint: 'https://<REPOSITORY>.cdn.prismic.io/api/v2'
    /* see configuration for more */
  }
}
```

<docs-button :docs="docs"></docs-button>

<authors :authors="authors"></authors>

<div class="flex mt-4 space-x-2">
  <a href="https://npmjs.com/package/@nuxtjs/prismic" rel="nofollow"><img src="https://camo.githubusercontent.com/89d2d875e8426ab9e1f0c3d284882244e1c17e13/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f406e7578746a732f707269736d69632f6c61746573742e737667" alt="npm version" data-canonical-src="https://img.shields.io/npm/v/@nuxtjs/prismic/latest.svg" style="max-width:100%;"></a>
</div>
