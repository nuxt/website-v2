---
title: How to deploy with Vercel?
description: How to deploy Nuxt.js app with Vercel?
menu: Deploy on Vercel
category: deployment
position: 210
---

![nuxt-now-builder](https://user-images.githubusercontent.com/904724/61308402-7a752d00-a7f0-11e9-9502-23731ccd00fd.png)

## Vercel

To deploy with [Vercel](https://vercel.com), the Nuxt.js team and contributors worked on an official [@nuxtjs/now-builder](https://github.com/nuxt/now-builder) package ('Now' is Vercel previous name).

All you have to do is to setup a `now.json` file:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "nuxt.config.js",
      "use": "@nuxtjs/now-builder",
      "config": {}
    }
  ]
}
```

### Service Worker with Nuxt PWA Module

To avoid 404 for Service Workers, make sure to include `sw` to your routes settings.

```json
{
  "version": 2,
  "builds": [
    {
      "src": "nuxt.config.js",
      "use": "@nuxtjs/now-builder",
      "config": {
        "serverFiles": ["package.json"]
      }
    }
  ],
  "routes": [
    { "src": "/_nuxt/.+", "headers": { "Cache-Control": "max-age=31557600" } },
    {
      "src": "/sw.js",
      "dest": "/_nuxt/static/sw.js",
      "headers": {
        "cache-control": "public, max-age=43200, immutable",
        "Service-Worker-Allowed": "/"
      }
    },
    { "src": "/(.*)", "dest": "/" }
  ]
}
```

You can learn more and see examples on https://github.com/nuxt/now-builder

## Now V1 (legacy)

To deploy with [Now V1](https://zeit.co/now) a `package.json` like follows is recommended:

```json
{
  "name": "my-app",
  "dependencies": {
    "nuxt": "latest"
  },
  "scripts": {
    "dev": "nuxt",
    "build": "nuxt build",
    "start": "nuxt start"
  }
}
```

Then run `now` and enjoy!

Note: we recommend putting `.nuxt` in `.npmignore` or `.gitignore`.
