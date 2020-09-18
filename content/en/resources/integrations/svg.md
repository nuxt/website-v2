---
name: svg
description: Super simple svg loading module for Nuxt.js
long_description: >-
  This package is for loading SVG's into Nuxt.js pages. It allows you to import
  .svg files in multiple ways depending on the resource query you provide.
repo: nuxt-community/svg-module
npm: '@nuxtjs/svg'
type: module
icon: ''
github: 'https://github.com/nuxt-community/svg-module'
website: 'https://github.com/nuxt-community/svg-module'
learn_more: ''
keywords:
  - svg
categories:
  - devtools
labels:
  - community
maintainers:
  - name: Sam Holmes
    github: sam3d
    avatar: 'https://github.com/sam3d.png'
features:
  - file.svg - normal import using file-loader
  - file.svg?data - base64 data url import using url-loader
  - file.svg?inline - inline import using vue-svg-loader
  - file.svg?raw - raw html import using raw-loader
---
