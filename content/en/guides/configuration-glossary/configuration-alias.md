---
title: 'The alias Property'
description: Provide alias for javascript, template, and style
menu: alias
category: configuration-glossary
position: 1
---

- Type: `Object`
- Default: `??`

This option lets you define other aliases that will be available in all contexts on nuxt: javascript, template and style.

```js{}[nuxt.config.js]
export default {
  alias: {
    '%imgs': './assets/images',
    '%style': './assets/style'
  }
}
```

```scss{}[assets/style/main]
@import '%style/variables.scss';
@import '%style/utils.scss';
@import '%style/base.scss';

body {
  background-image: url('%imgs/main-bg.jpg');
}
```
