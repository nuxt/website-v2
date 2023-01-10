---
title: 'The ignore Property'
description: Define the ignore files for your Nuxt.js application
menu: ignore
category: configuration-glossary
position: 14
---

## .nuxtignore

You can use a `.nuxtignore` file to let Nuxt.js ignore `layout`, `page`, `store` and `middleware` files in your project’s root directory (`rootDir`) during the build phase. The `.nuxtignore` file is subject to the same specification as `.gitignore` and `.eslintignore` files, in which each line is a glob pattern indicating which files should be ignored.

For example:

```
# ignore layout foo.vue
layouts/foo.vue
# ignore layout files whose name ends with -ignore.vue
layouts/*-ignore.vue

# ignore page bar.vue
pages/bar.vue
# ignore page inside ignore folder
pages/ignore/*.vue

# ignore store baz.js
store/baz.js
# ignore store files match *.test.*
store/ignore/*.test.*

# ignore middleware files under foo folder except foo/bar.js
middleware/foo/*.js
!middleware/foo/bar.js
```

> More details about the spec are in [gitignore doc](https://git-scm.com/docs/gitignore)

## The ignorePrefix Property

- Type: `String`
- Default: `'-'`

> Any file in pages/, layouts/, middleware/ or store/ will be ignored during building if its filename starts with the prefix specified by `ignorePrefix`.

By default all files which start with `-` will be ignored, such as `store/-foo.js` and `pages/-bar.vue`. This allows for co-locating tests, utilities, and components with their callers without themselves being converted into routes, stores, etc.

## The ignore Property

- Type: `Array`
- Default: `['**/*.test.*']`

> More customizable than `ignorePrefix`: all files matching glob patterns specified inside `ignore` will be ignored in building.

## ignoreOptions

`nuxtignore` is using `node-ignore` under the hood, `ignoreOptions` can be configured as `options` of `node-ignore`.

```js{}[nuxt.config.js]
export default {
  ignoreOptions: {
    ignorecase: false
  }
}
```
