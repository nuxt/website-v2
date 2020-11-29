---
title: 'The Builder Class'
description: Nuxt `Builder` Class
menu: Builder
category: internals-glossary
position: 7
---

- Source: **[builder/builder.js](https://github.com/nuxt/nuxt.js/blob/dev/packages/builder/src/builder.js)**

## Hooks

We can register hooks on certain life cycle events.

```js
// Add hook for build
this.nuxt.hook('build:done', (builder) => {
  ...
})
```

| Hook                    | Arguments                                   | When                                                                                                                                    |
| ----------------------- | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `build:before`          | (nuxt, buildOptions)                        | Before Nuxt build started                                                                                                               |
| `builder:prepared`      | (nuxt, buildOptions)                        | The build directories have been created                                                                                                 |
| `builder:extendPlugins` | (plugins)                                   | Generating plugins                                                                                                                      |
| `build:templates`       | ({ templatesFiles, templateVars, resolve }) | Generating `.nuxt` template files                                                                                                       |
| `build:extendRoutes`    | (routes, resolve)                           | Generating routes                                                                                                                       |
| `webpack:config`        | (webpackConfigs)                            | Before configuration of compilers                                                                                                       |
| `build:compile`         | ({ name, compiler })                        | Before webpack compile (compiler is a webpack `Compiler` instance), if universal mode, called twice with name `'client'` and `'server'` |
| `build:compiled`        | ({ name, compiler, stats })                 | webpack build finished                                                                                                                  |
| `build:done`            | (nuxt)                                      | Nuxt build finished                                                                                                                     |
