---
title: Deploy Nuxt on 21YunBox
description: How to deploy Nuxt.js on 21YunBox?
menu: 21YunBox
target: Server
category: deployment
position: 100
---

[21YunBox](https://www.21yunbox.com) provides blazing fast Chinese CDN, continuous deployment, one-click HTTPS and [other services like managed databases and backend web services](https://www.21yunbox.com/docs/), providing an avenue to launch web projects in China.

21YunBox includes the following features:

- Continuous, automatic builds & deploys from GitHub and Gitee
- Automatic SSL certificates through [Let's Encrypt](https://letsencrypt.org)
- Instant cache invalidation with a blazing fast, Chinese CDN
- Unlimited [custom domains](https://www.21yunbox.com/docs/#/custom-domains)
- Automatic [Brotli compression](https://en.wikipedia.org/wiki/Brotli) for faster sites
- Native HTTP/2 support
- Automatic HTTP → HTTPS redirects
- Custom URL redirects and rewrites

## Prerequisites

This guide assumes you already have a Nuxt project to deploy. If you need a project, use the [create-nuxt-app](https://github.com/nuxt/create-nuxt-app) to get started or fork 21YunBox's [Nuxt Example](https://gitee.com/eryiyunbox-examples/nuxtjs) before continuing.

## Setup

You can set up a Nuxt site on 21YunBox in two quick steps:

1. Create a new web service on 21YunBox, and give 21YunBox permission to access your GitHub or Gitee repo.
2. Use the following values during creation:

   |                       |                                                     |
   | --------------------- | --------------------------------------------------- |
   | **Environment**       | `Static Site`                                       |
   | **Build Command**     | `yarn && yarn generate` (or your own build command) |
   | **Publish Directory** | `./dist` (or your own output directory)             |

That's it! Your site will be live on your 21YunBox URL (which looks like `yoursite.21yunbox.com`) as soon as the build is done.

## Continuous deploys

Now that 21YunBox is connected to your repo, it will automatically build and publish your site any time you push to GitHub.

## 21YunBox CDN and cache invalidation

21YunBox hosts your site on a Chinese, blazing fast CDN which ensures the fastest possible download times for all your users across China.

Every deploy automatically and instantly invalidates the CDN cache, so your users can always access the latest content on your site.

## Custom domains

Add your own domains to your site easily using 21YunBox's [custom domains](https://www.21yunbox.com/docs/#/custom-domains) guide.
