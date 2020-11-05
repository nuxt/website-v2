---
title: 'The loading indicator Property'
description: Show fancy loading indicator while SPA page is loading!
menu: loadingIndicator
category: configuration
position: 116
---

> Show fancy loading indicator while SPA page is loading!

When running Nuxt.js in SPA mode, there is no content from the server side on the first page load. So, instead of showing a blank page while the page loads, we may show a spinner.

This property can have 3 different types: `string` or `false` or `object`. If a string value is provided it is converted to object style.

Default value is:

```js
loadingIndicator: {
  name: 'circle',
  color: '#3B8070',
  background: 'white'
}
```

## Built-in indicators

These indicators are imported from the awesome [Spinkit](http://tobiasahlin.com/spinkit) project. You can use its demo page to preview spinners.

- circle
- cube-grid
- fading-circle
- folding-cube
- chasing-dots
- nuxt
- pulse
- rectangle-bounce
- rotating-plane
- three-bounce
- wandering-cubes

Built-in indicators support `color` and `background` options.

## Custom indicators

If you need your own special indicator, a String value or Name key can also be a path to an html template of indicator source code! All of the options are passed to the template, too.

Nuxt's built-in [source code](https://github.com/nuxt/nuxt.js/tree/dev/packages/vue-app/template/views/loading) is also available if you need a base!
