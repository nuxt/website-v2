---
title: 'Cloudinary'
short_description: 'Optimize images and videos in your Nuxt.js application'
long_description: 'Cloudinary is a cloud-based SaaS that provides an end-to-end image and video management solution including uploads, storage, manipulations, optimizations and delivery. All your media resources are optimized and delivered through a fast CDN using industry best practices.'
category: images
position: 20
logo: 'https://res.cloudinary.com/cloudinary/image/upload/c_scale,w_200/v1/logo/for_white_bg/cloudinary_icon_for_white_bg.png'
image: 'https://res.cloudinary.com/mayashavin/image/upload/q_auto,f_auto,h_640/v1596608425/nuxt-cld/nuxt_cloudinary_1'
github: 'https://github.com/nuxt-community/cloudinary-module'
docs: 'https://cloudinary.nuxtjs.org/'
npmLink: 'https://npmjs.com/package/@nuxtjs/cloudinary'
npmDownloadsImg: 'https://camo.githubusercontent.com/09148e9033b9be69ee3ab7fa867502cb78e90df7/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f64742f406e7578746a732f636c6f7564696e6172792e737667'
slug: 'cloudinary'
latest: true
featured: true
features:
  - 'On-the-fly url generating for images and videos'
  - 'On-the-fly size optimization per browser and device'
  - 'Fast loading speed with progressive images'
  - 'Auto-detect the optimized format per browser for images and videos'
authors:
  - name: Maya Shavin
    avatarUrl: https://avatars0.githubusercontent.com/u/6650139?s=460&u=e23ded7ef787f5d834eca81e64a6200bc00d424a&v=4
    link: https://twitter.com/mayashavin
---

<code-group>
  <code-block label="Yarn" active>

```bash
yarn add @nuxtjs/cloudinary
```

  </code-block>
  <code-block label="NPM">

```bash
npm i @nuxtjs/cloudinary
```

  </code-block>
</code-group>

```js{}[nuxt.config.js]
export default {
  modules: ['@nuxtjs/cloudinary']
}
```

<docs-button :docs="docs"></docs-button>

<authors :authors="authors"></authors>

<npm-buttons>
  <a href="https://npmjs.com/package/@nuxtjs/cloudinary" rel="nofollow" >      
    <img src="https://camo.githubusercontent.com/d6880af1973a5c5f0bed7caf2d1ddaf0e542aabd/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f406e7578746a732f636c6f7564696e6172792f6c61746573742e737667"
      alt="npm version"
      data-canonical-src="https://img.shields.io/npm/v/@nuxtjs/cloudinary/latest.svg"
      style="max-width: 100%;"
    /></a>
  <a href="https://npmjs.com/package/@nuxtjs/cloudinary" rel="nofollow">
    <img src="https://camo.githubusercontent.com/09148e9033b9be69ee3ab7fa867502cb78e90df7/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f64742f406e7578746a732f636c6f7564696e6172792e737667"
      alt="npm downloads"
      data-canonical-src="https://img.shields.io/npm/dt/@nuxtjs/cloudinary.svg"
      style="max-width: 100%;"
    />
  </a>
</npm-buttons>
