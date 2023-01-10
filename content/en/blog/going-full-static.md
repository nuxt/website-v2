---
title: 'Going Full Static'
description: 'Long awaited features for JAMstack fans has been shipped in v2.13: full static export, improved smart prefetching, integrated crawler, faster re-deploy, built-in web server and new target option for config :zap:️'
imgUrl: blog/going-full-static/main.png
date: 2020-06-18
authors:
  - name: Sebastien Chopin
    avatarUrl: https://pbs.twimg.com/profile_images/1042510623962275840/1Iw_Mvud_400x400.jpg
    link: https://twitter.com/Atinux
tags:
  - Nuxt
  - Static
  - Crawler
  - Live Preview
---

## Too long to read

1. Upgrade nuxt to `2.14.0`
2. Set `target: 'static'` in your `nuxt.config.js`
3. Run `nuxt generate`
4. That's it ✨

_Bonus: you can run `nuxt start` to run a local server serving your generated static application._

<video poster="https://res.cloudinary.com/nuxt/video/upload/v1588095794/nuxt-full-static_rnnbvm.jpg" loop playsinline controls>
  <source src="https://res.cloudinary.com/nuxt/video/upload/v1588095794/nuxt-full-static_rnnbvm.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/nuxt/video/upload/v1592503417/nuxt-full-static_rnnbvm.mp4" type="video/mp4" />
  <source src="https://res.cloudinary.com/nuxt/video/upload/v1588095794/nuxt-full-static_rnnbvm.ogv" type="video/ogg" />
</video>

<p>

Note: in this video we are using `nuxt export` which has been deprecated in favor of `nuxt generate`.

</p>

## Table of Contents

- [Too long to read](#too-long-to-read)
- [Table of Contents](#table-of-contents)
- [History](#history)
- [Current issues](#current-issues)
- [New config option: `target`](#new-config-option-target)
- [Smarter `nuxt generate`](#smarter-nuxt-generate)
  - [Crazy fast static applications](#crazy-fast-static-applications)
  - [Crawler integrated](#crawler-integrated)
  - [Faster re-deploy](#faster-re-deploy)
- [Smarter `nuxt start`](#smarter-nuxt-start)
- [Preview mode](#preview-mode)
- [Commands](#commands)
  - [What to do next](#what-to-do-next)

## History

Nuxt had the static generation feature with `nuxt generate` since [v0.3.2](https://github.com/nuxt/nuxt.js/releases/tag/v0.3.2) (November 2016), since then we have improved it in multiple ways but never achieved full static generation. Today I am excited to announce that full static export is now possible with Nuxt 2.13.

## Current issues

`nuxt generate` is mostly pre-rendering, when you navigate client-side, `asyncData` and `fetch` are called, _making a request to your API_. A lot of users asked to support a "full static" mode, meaning to not call these 2 hooks on navigation, since the next page has been already pre-rendered.

Also, the developer experience is not optimal:

- You have access to `req` or `res` on SSR but not when running `nuxt generate`
- `process.static` is `true` only when running `nuxt generate`, making it slow to develop Nuxt modules or plugins for static generation
- You have to specify all your [dynamic routes](/docs/2.x/features/file-system-routing#dynamic-routes) in `generate.routes`, making it harder since you don't have access to nuxt modules there.
- You cannot test the [SPA fallback](/docs/2.x/concepts/static-site-generation#spa-fallback) in development, the fallback is a client-only version of your Nuxt application that loads when hitting a 404 page
- `nuxt generate` runs `nuxt build` by default, making it slower to generate your website if only your content changed

Note that it was possible to have full static support with [nuxt-payload-extractor](https://github.com/DreaMinder/nuxt-payload-extractor) module but it was more verbose to use and had limitations.

## New config option: `target`

To improve the user experience as well as telling Nuxt that you want to export your application to static hosting, we are introducing a `target` option in your `nuxt.config.js`:

```js{}[nuxt.config.js]
export default {
  target: 'static' // default is 'server'
}
```

<base-alert type="warning">

Full static doesn't work with `ssr: 'false'` (which is the same as the deprecated `mode: 'spa'`) as this is used for client-side rendering only (Single Page Applications).

</base-alert>

Running `nuxt dev` with the static target will improve the developer experience:

- Remove `req` & `res` from context
- Fallback to client-side rendering on 404, errors and redirects (see [SPA fallback](/docs/2.x/concepts/static-site-generation#spa-fallback))
- `$route.query` will always be equal to `{}` on server-side rendering
- `process.static` is `true`

We are also exposing `process.target` for modules author to add logic depending on the user target.

## Smarter `nuxt generate`

Now with `v2.14.0`, you can use `nuxt generate`, it will smartly know if it has to build or not.

### Crazy fast static applications

`nuxt generate` with `target: 'static'` will pre-render all your pages to HTML and save a payload file in order to mock `asyncData` and `fetch` on client-side navigation, this means **no** **more HTTP calls to your API on client-side navigation.** By extracting the page payload to a js file, **it also reduces the HTML size** served as well as preloading it (from the <link> in the header) for optimal performance.

We also improved the [smart prefetching](/blog/introducing-smart-prefetching) when doing full static, it will also fetch the payloads, making navigation instant 👀

### Crawler integrated

On top of that, it also has a crawler inside, detecting every relative link and generating it:

If you want to exclude a bunch of routes, use the [generate.exclude](/docs/2.x/configuration-glossary/configuration-generate#exclude). You can keep using [generate.routes](/docs/2.x/configuration-glossary/configuration-generate#routes) to add extra routes that the crawler could not detect.

To disable the crawler, set `generate.crawler: false` in your `nuxt.config.js`

### Faster re-deploy

By separating `nuxt build` and `nuxt export`, we are opening a new range of improvements: pre-render your pages only if you content has changed, this means: no webpack build → faster re-deployments.

## Smarter `nuxt start`

Once you statically generated your Nuxt app into `dist/`, use `nuxt start` to start a production HTTP server and serve your static app, supporting [SPA Fallback](/docs/2.x/concepts/static-site-generation#spa-fallback).

This command is perfect to locally test your static application before pushing to your favorite static hosting provider.

## Preview mode

We do support live preview out of the box to keep calling your API:

```js{}[plugins/preview.client.js]
export default async function ({ query, enablePreview }) {
  if (query.preview) {
    enablePreview()
  }
}
```

It will automatically refresh the page data (calling `nuxtServerInit`, `asyncData` and `fetch`).

When the preview mode is activated, `asyncData` and `fetch` original methods will be called.

## Commands

Depending of the `target`, you can run these commands.

- `server`
  - `nuxt dev`: Start the development server
  - `nuxt build`: Bundle your Nuxt application for production
  - `nuxt start`: Start the production server
- `static`
  - `nuxt dev`: Start the development server (static aware)
  - `nuxt generate`: Bundle your Nuxt application for production if needed (static aware) and export your application to static HTML in `dist/` directory
  - `nuxt start`: Serve your production application from `dist/`

### What to do next

- To learn more about how to move from @nuxtjs/dotenv to runtime config check out [this article](/blog/moving-from-nuxtjs-dotenv-to-runtime-config).
- [Subscribe to the newsletter](#subscribe-to-newsletter) to not miss the upcoming articles and resources.
