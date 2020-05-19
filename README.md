# nuxtjs.org

[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/nuxt/nuxtjs.org) 

Universal Vue.js Application built with [Nuxt.js](https://github.com/nuxt/nuxt.js).

# Setup

```
git clone https://github.com/nuxt/nuxtjs.org.git
cd nuxtjs.org/
yarn install
git clone https://github.com/nuxt/docs
```

The markdown files are store at [https://github.com/nuxt/docs](https://github.com/nuxt/docs), this is why we clone it inside the nuxtjs.org directory.

## Development

Start a dev server on `http://nuxt:3000`

```bash
yarn dev
```

To change the locale, use `NUXT_LOCALE` env:

```bash
# start the documentation in french
NUXT_LOCALE=fr yarn dev
```

The value represents the directory name inside [docs](https://github.com/nuxt/docs), default value is `en`.

## Production

```bash
yarn generate
yarn serve
# Checkout http://localhost:3000
```

# zh.nuxtjs.org

Nuxt.js 官网 [nuxtjs.org](https://nuxtjs.org) 的简体中文版，由[凹凸实验室](https://aotu.io)负责翻译整理。

欢迎关注我们的微信公众号（微信里面搜`凹凸实验室`），关于 Nuxt.js 的最新信息会通过公众号发布。

Chinese translation of primary Nuxt.js documentation site. Supported by [AOTU Labs](https://aotu.io).
