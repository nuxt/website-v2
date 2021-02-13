---
title: 'The globalName Property'
description: Nuxt.js lets you customize the global ID used in the main HTML template as well as the main Vue instance name and other options.
menu: globalName
category: configuration-glossary
position: 11
---

> Nuxt.js lets you customize the global ID used in the main HTML template as well as the main Vue instance name and other options.

- Type: `String`
- Default: `nuxt`

```js{}[nuxt.config.js]
{
  globalName: 'myCustomName'
}
```

<base-alert>

The `globalName` needs to be a valid JavaScript identifier, and changing it may break support for certain plugins that rely on Nuxt-named functions. If you're looking to just change the visible `__nuxt` HTML ID, then use the `globals` property.

</base-alert>

## The globals property

> Customizes specific global names which are based on `globalName` by default.

- Type: `Object`
- Default:

```js{}[nuxt.config.js]
globals: {
  id: globalName => `__${globalName}`,
  nuxt: globalName => `$${globalName}`,
  context: globalName => `__${globalName.toUpperCase()}__`,
  pluginPrefix: globalName => globalName,
  readyCallback: globalName => `on${_.capitalize(globalName)}Ready`,
  loadedCallback: globalName => `_on${_.capitalize(globalName)}Loaded`
},
```
