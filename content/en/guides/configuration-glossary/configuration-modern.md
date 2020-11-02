---
title: 'The modern Property'
description: Build and server a modern bundle
menu: modern
category: configuration-glossary
position: 18
---

> This feature is inspired by [vue-cli modern mode](https://cli.vuejs.org/guide/browser-compatibility.html#modern-mode)

- Type: `String` or `Boolean`
  - Default: false
  - Possible values:
    - `'client'`: Serve both, the modern bundle `<script type="module">` and the legacy bundle `<script nomodule>` scripts, also provide a `<link rel="modulepreload">` for the modern bundle. Every browser that understands the `module` type will load the modern bundle while older browsers fall back to the legacy (transpiled) one.
    - `'server'` or `true`: The Node.js server will check browser version based on the user agent and serve the corresponding modern or legacy bundle.
    - `false`: Disable modern build

The two versions of bundles are:

1. Modern bundle: targeting modern browsers that support ES modules
1. Legacy bundle: targeting older browsers based on babel config (IE9 compatible by default).

**Info:**

- Use command option `[--modern | -m]=[mode]` to build/start modern bundles:

```json{}[package.json]
{
  "scripts": {
    "build:modern": "nuxt build --modern=server",
    "start:modern": "nuxt start --modern=server"
  }
}
```

**Note about _nuxt generate_:** The `modern` property also works with the `nuxt generate` command, but in this case only the `client` option is honored and will be selected automatically when launching the `nuxt generate --modern` command without providing any values.

- Nuxt will automatically detect `modern` build in `nuxt start` when `modern` is not specified, auto-detected mode is:

| ssr   | Modern Mode |
| ----- | :---------: |
| true  |   server    |
| false |   client    |

- Modern mode for `nuxt generate` can only be `client`
- Use [`render.crossorigin`](/docs/2.x/configuration-glossary/configuration-render#crossorigin) to set `crossorigin` attribute in `<link>` and `<script>`

> Please refer [Phillip Walton's excellent post](https://philipwalton.com/articles/deploying-es2015-code-in-production-today/) for more knowledge regarding modern builds.
