---
title: 'The render Property'
description: Nuxt.js lets you customize runtime options for rendering pages
menu: render
category: configuration-glossary
position: 22
---

> Nuxt.js lets you customize runtime options for rendering pages

## bundleRenderer

- Type: `Object`

> Use this option to customize vue SSR bundle renderer. This option is skipped for spa mode.

```js{}[nuxt.config.js]
export default {
  render: {
    bundleRenderer: {
      directives: {
        custom1(el, dir) {
          // something ...
        }
      }
    }
  }
}
```

Learn more about available options on [Vue SSR API Reference](https://ssr.vuejs.org/en/api.html#renderer-options). It is recommended to not use this option as Nuxt.js is already providing best SSR defaults and misconfiguration might lead to SSR problems.

## etag

- Type: `Object`
  - Default: `{ weak: true }`

To disable etag for pages set `etag: false`

See [etag](https://www.npmjs.com/package/etag) docs for possible options.

You can use your own hash function by specifying `etag.hash`:

```js{}[nuxt.config.js]
import { murmurHash128 } from 'murmurhash-native'

export default {
  render: {
    etag: {
      hash: html => murmurHash128(html)
    }
  }
}
```

In this case we use [murmurhash-native](https://github.com/royaltm/node-murmurhash-native), which is faster for larger html body sizes. Note that the `weak` option is ignored, when specifying your own hash function.

## compressor

- Type `Object`
  - Default: `{ threshold: 0 }`

When providing an object, the [compression](https://www.npmjs.com/package/compression) middleware will be used (with respective options).

If you want to use your own compression middleware, you can reference it directly (f.ex. `otherComp({ myOptions: 'example' })`).

To disable compression, use `compressor: false`.

## fallback

- Type `Object`
  - Default: `{ dist: {}, static: { skipUnknown: true } }`

> Options for [serve-placeholder](https://github.com/nuxt/serve-placeholder) middleware.

If you want to disable one of them or both, you can pass a falsy value.

## http2

- Type `Object`
  - Default: `{ push: false, pushAssets: null }`

> Activate HTTP2 push headers.

You can control what links to push using `pushAssets` function.

Example:

```js
pushAssets: (req, res, publicPath, preloadFiles) =>
  preloadFiles
    .filter(f => f.asType === 'script' && f.file === 'runtime.js')
    .map(f => `<${publicPath}${f.file}>; rel=preload; as=${f.asType}`)
```

You can add your own assets to the array as well. Using `req` and `res` you can decide what links to push based on the request headers, for example using the cookie with application version.

The assets will be joined together with `,` and passed as a single `Link` header.

## injectScripts

- Type: `Boolean`
  - Default: `true`

> Adds the `<script>` for Nuxt bundles, set it to `false` to render pure HTML without JS (available with `2.8.0+`)

## resourceHints

- Type: `Boolean`
  - Default: `true`

> Adds `prefetch` and `preload` links for faster initial page load time.

You may want to only disable this option if you have many pages and routes.

## ssr

- Type: `Boolean`
  - Default: `true` on universal mode and `false` on spa mode

> Enable SSR rendering

This option is automatically set based on `mode` value if not provided. This can be useful to dynamically enable/disable SSR on runtime after image builds (with docker for example).

## crossorigin

- Type: `String`
- Default: `undefined`

  Configure the `crossorigin` attribute on `<link rel="stylesheet">` and `<script>` tags in generated HTML.

  More Info: [CORS settings attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes)

## ssrLog

- Type: `Boolean` | `String`
  - Default: `true` in dev mode and `false` in production

> Forward server-side logs to the browser for better debugging (only available in development)

To collapse the logs, use `'collapsed'` value.

## static

- Type: `Object`
  - Default: `{}`

> Configure the `static/` directory behaviour

See [serve-static](https://www.npmjs.com/package/serve-static) docs for possible options.

Additional to them, we introduced a `prefix` option which defaults to `true`. It will add the router base to your static assets.

**Example:**

- Assets: `favicon.ico`
- Router base: `/t`
- With `prefix: true` (default): `/t/favicon.ico`
- With `prefix: false`: `/favicon.ico`

**Caveats:**

Some URL rewrites might not respect the prefix.

## dist

- Type: `Object`
  - Default: `{ maxAge: '1y', index: false }`

> Options used for serving distribution files. Only applicable in production.

See [serve-static](https://www.npmjs.com/package/serve-static) docs for possible options.

## csp

- Type: `Boolean` or `Object`
  - Default: `false`

> Use this to configure to load external resources of Content-Security-Policy

Note that CSP hashes will not be added if `script-src` policy contains `'unsafe-inline'`. This is due to browser ignoring `'unsafe-inline'` if hashes are present. Set option `unsafeInlineCompatibility` to `true` if you want both hashes and `'unsafe-inline'` for CSPv1 compatibility.

In order to add [`<meta http-equiv="Content-Security-Policy"/>`](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) with all the CSP policies you need to set `csp.addMeta` to `true`.

```js{}[nuxt.config.js]
export default {
  render: {
    csp: true
  }
}

// OR

export default {
  render: {
    csp: {
      hashAlgorithm: 'sha256',
      policies: {
        'script-src': [
          'https://www.google-analytics.com',
          'https://name.example.com'
        ],
        'report-uri': ['https://report.example.com/report-csp-violations']
      },
      addMeta: true
    }
  }
}

// OR
/*
  The following example allows Google Analytics, LogRocket.io, and Sentry.io
  for logging and analytic tracking.

  Review to this blog on Sentry.io
  https://blog.sentry.io/2018/09/04/how-sentry-captures-csp-violations

  To learn what tracking link you should use.
*/
const PRIMARY_HOSTS = `loc.example-website.com`
export default {
  csp: {
    reportOnly: true,
    hashAlgorithm: 'sha256',
    policies: {
      'default-src': ["'self'"],
      'img-src': ['https:', '*.google-analytics.com'],
      'worker-src': ["'self'", `blob:`, PRIMARY_HOSTS, '*.logrocket.io'],
      'style-src': ["'self'", "'unsafe-inline'", PRIMARY_HOSTS],
      'script-src': [
        "'self'",
        "'unsafe-inline'",
        PRIMARY_HOSTS,
        'sentry.io',
        '*.sentry-cdn.com',
        '*.google-analytics.com',
        '*.logrocket.io'
      ],
      'connect-src': [PRIMARY_HOSTS, 'sentry.io', '*.google-analytics.com'],
      'form-action': ["'self'"],
      'frame-ancestors': ["'none'"],
      'object-src': ["'none'"],
      'base-uri': [PRIMARY_HOSTS],
      'report-uri': [
        `https://sentry.io/api/<project>/security/?sentry_key=<key>`
      ]
    }
  }
}
```
