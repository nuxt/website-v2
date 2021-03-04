---
title: Deploy Nuxt on Netlify
description: How to deploy Nuxt.js on Netlify?
menu: Netlify
target: Static
category: deployment
position: 112
---

Deploying to [Netlify](https://www.netlify.com) is a low friction option for getting a **statically generated** Nuxt.js site online quickly.

The core of the process leverages the `nuxt generate`(<= v2.12) command during deployment to build a static version of your Nuxt.js app into a `dist` directory. The contents of this directory are then deployed to a production URL.

<div class="Promo__Video">
  <a href="https://explorers.netlify.com/learn/get-started-with-nuxt/nuxt-generate-and-deploy" target="_blank">
    <p class="Promo__Video__Icon">
      Watch a free lesson on <strong>How to deploy Nuxt.js to Netlify</strong> on Jamstack Explorers
    </p>
  </a>
</div>

## Getting Started

Press the _"New site from Git"_ button on the Netlify dashboard. Authenticate with your repository host, select a repository to deploy, and continue. You should land on step 3: _"Build options, and deploy!"_

## Configure:

### For a statically generated site

Make sure you have `target: 'static'`in your `nuxt.config`.

1. **Branch to deploy:** `main`, or which-ever branch you prefer
1. **Build command:** `npm run generate`
1. **Publish directory:** `dist`

### For client side rendering only

Make sure you have `target: 'static'` and `ssr: false`in your `nuxt.config`.

1. **Branch to deploy:** `main`, or which-ever branch you prefer
1. **Build command:** `npm run generate`
1. **Publish directory:** `dist`

For client side rendering there is a problem with refresh as by default on Netlify the site redirects to _"404 not found"_. For any pages that are not generated they will fallback to SPA mode and then if you refresh or share that link you will get Netlify's 404 page. This is because the pages that are not generated don't actually exist as they are actually a single page application so if you refresh this page you will get a 404 because the url for that page doesn't actually exist. By redirecting to the 404.html Nuxt will reload your page correctly in SPA fallback.

The easiest way to fix this is by adding a [generate property](/docs/2.x/configuration-glossary/configuration-generate#fallback) in your `nuxt.config` and setting `fallback: true`. Then it will fallback to the generated 404.html when in SPA mode instead of Netlify's 404 page.

```js
export default {
  generate: {
    fallback: true
  }
}
```

If however you want to automatically apply headers and redirects of the application then there is a module for that, this is especially useful for when you have custom headers/redirects (in a \_headers or \_redirects file):

[netlify-files-module](https://github.com/nuxt-community/netlify-files-module)

> For more information on Netlify redirects see the [Netlify docs](https://www.netlify.com/docs/redirects/#rewrites-and-proxying).

> For simple reference on Netlify redirects read blog [post](https://www.netlify.com/blog/2019/01/16/redirect-rules-for-all-how-to-configure-redirects-for-your-static-site) by Divya Sasidharan

> Optionally, you can add additional ENV variables via the _"Advanced"_ button. These can be helpful for swapping in alternative API credentials and so on. Netlify also provides a [default ENV variables](https://www.netlify.com/docs/build-settings/#build-environment-variables) which can be read by your Nuxt.js application at build time.

Click _"Deploy site"_ to immediately trigger a deploy. Your Netlify site will be assigned a random URL and deployed using the `nuxt generate` command.

Voilà! Your Nuxt.js application is now hosted on Netlify!
