---
title: Comment ajouter des plugins webpack ?
description: Comment ajouter des plugins webpack dans mon application Nuxt.js ?
group: Configuration
groupPosition: 1
position: 6
---

Dans `nuxt.config.js` :

```js
import webpack from 'webpack'

export default {
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        '$': 'jquery',
        '_': 'lodash'
        // ...etc.
      })
    ]
  }
}
```
