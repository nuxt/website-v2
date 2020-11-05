---
title: 'The modulesDir Property'
description: Define the modules directory for your Nuxt.js application
menu: modulesDir
category: configuration-glossary
position: 20
---

- Type: `Array`
- Default: `['node_modules']`

> Used to set the modules directories for path resolving, for example: Webpack's `resolveLoading`, `nodeExternals` and `postcss`. Configuration path is relative to [options.rootDir](/docs/2.x/configuration-glossary/configuration-rootdir) (default: `process.cwd()`).

```js{}[nuxt.config.js]
export default {
  modulesDir: ['../../node_modules']
}
```

Setting this field may be necessary if your project is organized as a Yarn workspace-styled mono-repository.
