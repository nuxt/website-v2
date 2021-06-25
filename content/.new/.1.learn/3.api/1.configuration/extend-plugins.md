---
title: 'The extendPlugins Property'
description: The extendPlugins property lets you customize Nuxt.js plugins.
category: api-configuration
---

> The extendPlugins property lets you customize Nuxt.js plugins ([options.plugins](/docs/configuration-glossary/configuration-plugins)).

- Type: `Function`
- Default: `undefined`

You may want to extend plugins or change plugins order created by Nuxt.js. This function accepts an array of [plugin](/docs/configuration-glossary/configuration-plugins) objects and should return array of plugin objects.

Example of changing plugins order:

```js{}[nuxt.config.js]
export default {
  extendPlugins(plugins) {
    const pluginIndex = plugins.findIndex(
      ({ src }) => src === '~/plugins/shouldBeFirst.js'
    )
    const shouldBeFirstPlugin = plugins[pluginIndex]

    plugins.splice(pluginIndex, 1)
    plugins.unshift(shouldBeFirstPlugin)

    return plugins
  }
}
```
