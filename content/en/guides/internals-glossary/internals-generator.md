---
title: "The Generator Class"
description: Nuxt Generator Class
menu: Generator
category: internals-glossary
Position: 8
---

- Source: **[generator/generator.js](https://github.com/nuxt/nuxt.js/blob/dev/packages/generator/src/generator.js)**

## Hooks

Starting with Nuxt `2.13+`, you have access to `nuxt export` for full static generation, bringing `export` hooks:

| Hook                  | Arguments                 | When                                                                                                                             |
| --------------------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `export:before`       | (generator)               | Hook on before exporting, you have access to `generator.setPayload` for adding a payload for every route that will be generated. |
| `export:distRemoved`  | (generator)               | Hook on destination folder cleaned                                                                                               |
| `export:distCopied`   | (generator)               | Hook on copy static and built files                                                                                              |
| `export:route`        | ({ route, setPayload })   | Hook before generating the page, useful for dynamic payload, see [#7422](https://github.com/nuxt/nuxt.js/pull/7422)              |
| `export:page`         | ({ page, errors })        | Hook to update page details, you can exclude to `dist/` by setting `page.exclude = true`.                                        |
| `export:routeCreated` | ({ route, path, errors }) | Hook on saving generated page success, errors can be because of `context.error()` or HTML minification error.                    |
| `export:extendRoutes` | ({ routes })              | Hook to let user update the routes to generate                                                                                   |
| `export:routeFailed`  | ({ route, errors })       | Hook on saving generated page failure                                                                                            |
| `export:done`         | (generator, { errors })   | Hook on export finished                                                                                                          |

<br/>

If you are using Nuxt `2.12` or lower, you can use the legacy `generate:` hooks:

| Hook                    | Arguments                    | When                                                                                                                                          |
| ----------------------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `generate:before`       | (generator, generateOptions) | Hook on before generation                                                                                                                     |
| `generate:distRemoved`  | (generator)                  | Hook on destination folder cleaned                                                                                                            |
| `generate:distCopied`   | (generator)                  | Hook on copy static and built files                                                                                                           |
| `generate:route`        | ({ route, setPayload })      | Hook before generating the page, useful for dynamic payload, see [#7422](https://github.com/nuxt/nuxt.js/pull/7422), available for Nuxt 2.13+ |
| `generate:page`         | ({ route, path, html })      | Hook to let user update the path & html after generation                                                                                      |
| `generate:routeCreated` | ({ route, path, errors })    | Hook on saving generated page success                                                                                                         |
| `generate:extendRoutes` | (routes)                     | Hook to let user update the routes to generate                                                                                                |
| `generate:routeFailed`  | ({ route, errors })          | Hook on saving generated page failure                                                                                                         |
| `generate:done`         | (generator, errors)          | Hook on generation finished                                                                                                                   |
