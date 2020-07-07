---
title: Comment partager des ressources cross-origin ?
description: Comment partager des ressources cross-origin ?
group: Configuration
groupPosition: 1
position: 10
---

[La solution des ressources cross origin partagées dans Nuxt.js](https://github.com/nuxt-community/proxy-module#readme)

```
npm i @nuxtjs/proxy
```

Dans nuxt.config.js 

```
 modules: [
      '@nuxtjs/axios',
      '@nuxtjs/proxy'
  ],
proxy: {
  '/api': {
    target: 'http://example.com',
    pathRewrite: {
      '^/api' : '/'
      }
    }
}
```
