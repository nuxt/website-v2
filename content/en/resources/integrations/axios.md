---
name: axios
description: Secure and easy Axios integration with Nuxt.js
long_description: >-
  Axios is a Promise based HTTP client for the browser and node.js so you can
  easily make http requests in your Nuxt.js application
repo: nuxt-community/axios-module
npm: '@nuxtjs/axios'
type: module
icon: ''
github: 'https://github.com/nuxt-community/axios-module'
website: 'https://axios.nuxtjs.org'
learn_more: 'https://github.com/axios/axios'
keywords: []
categories:
  - request
labels:
  - community
maintainers:
  - name: Pooya Parsa
    github: pi0
    twitter: _pi0_
    avatar: 'https://github.com/pi0.png'
features:
  - Automatically set base URL for client & server side
  - >-
    Exposes `setToken` function to `$axios` so we can easily and globally set
    authentication tokens
  - Automatically enables `withCredentials` when requesting to base URL
  - Proxy request headers in SSR (Useful for auth)
  - Fetch Style requests
  - Integrated with Nuxt.js Progressbar while making requests
  - Integrated with Proxy Module
  - Auto retry requests with axios-retry
---
