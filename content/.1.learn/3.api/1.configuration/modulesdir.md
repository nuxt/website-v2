---
title: 'The modulesDir Property'
description: Define the modules directory for your Nuxt.js application
category: api-configuration
---

- Type: `Array`
- Default: `['node_modules']`

> Used to set the modules directories for path resolving, for example: Webpack's `resolveLoading`, `nodeExternals` and `postcss`. Configuration path is relative to [options.rootDir](/docs/configuration-glossary/configuration-rootdir) (default: `process.cwd()`).

```js{}[nuxt.config.js]
export default {
  modulesDir: ['../../node_modules']
}
```

Setting this field may be necessary if your project is organized as a Yarn workspace-styled mono-repository.
