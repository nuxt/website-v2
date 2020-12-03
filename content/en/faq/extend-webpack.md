---
title: How to extend webpack config?
description: How to extend webpack config into my Nuxt.js application?
category: configuration
position: 5
---

You can extend nuxt's webpack configuration via the `extend` option in your `nuxt.config.js`. The `extend` option of the `build` property is a method that accepts two arguments. The first argument is the webpack `config` object exported from nuxt's webpack config. The second parameter is a context object with the following boolean properties: `{ isDev, isClient, isServer, loaders }`.

```js
export default {
  build: {
    extend(config, { isDev, isClient }) {
      // ..
      config.module.rules.push({
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'file-loader'
      })
      // Sets webpack's mode to development if `isDev` is true.
      if (isDev) {
        config.mode = 'development'
      }
    }
  }
}
```

The `extend` method gets called twice - Once for the client bundle and the other for the server bundle.

## Examples

#### Customize chunks configuration

You may want to tweak a bit [optimization configuration](/docs/2.x/configuration-glossary/configuration-build#optimization), avoiding to rewrite default object.

```js
export default {
  build: {
    extend(config, { isClient }) {
      if (isClient) {
        config.optimization.splitChunks.maxSize = 200000
      }
    }
  }
}
```

#### Execute ESLint on every webpack build in dev environment

In order to be aware of code style errors, you may want to run [ESLint](https://github.com/webpack-contrib/eslint-loader) on every build in dev environment.

```js
export default {
  build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })

  }
}
```

#### For those using upgrading eslint-module from v2 to v3

Please note: you need to upgrade the loader with `eslint-webpack-plugin` with you upgrade from v2 to v3.

Also, you may choose to use `.eslintrc.js` to set your plugin options apart from `nuxt.config.js` for cleaner format.

Reference for options setting:

- https://github.com/webpack-contrib/eslint-webpack-plugin

Default options are set here:

- https://github.com/nuxt-community/eslint-module/blob/5b5e6f521c9e918f38911ec027ec22e33fd8e53b/lib/module.js

```js
export default {
  build: {
    extend(config, { isDev, isClient }) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        const options = {
          exclude: ['node_modules']
        }
        const EslintPlugin = require('eslint-webpack-plugin')
        config.plugins.push(new EslintPlugin(options))
      }
    }
  }
}
```
