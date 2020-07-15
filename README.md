# nuxtjs.org

[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/nuxt/nuxtjs.org)

Universal Vue.js Application built with
[Nuxt.js](https://github.com/nuxt/nuxt.js).

## Setup

```bash
git clone https://github.com/nuxt/nuxtjs.org.git
cd nuxtjs.org/
yarn
```

The markdown files are stored in the content folder.

## Development

Start a dev server on `http://nuxt:3000`

```bash
yarn dev
```

To change the locale, create a .env file with the locale you want to use. An
example .env file has been provided which you can copy it's contents to your
.env file and change the language to the one you want to see the site in.

```bash
nuxtLocale=fr
```

or add the local in the command line.

```bash
# start the documentation in french
nuxtLocale=fr yarn dev
```

## Production

```bash
yarn generate
yarn start
# Checkout http://localhost:3000
```

## zh.nuxtjs.org

Nuxt.js 官网 [nuxtjs.org](https://nuxtjs.org) 的简体中文版，
由[凹凸实验室](https://aotu.io)负责翻译整理。

欢迎关注我们的微信公众号（微信里面搜`凹凸实验室`），关于 Nuxt.js 的最新信息会通
过公众号发布。

Chinese translation of primary Nuxt.js documentation site. Supported by
[AOTU Labs](https://aotu.io).
