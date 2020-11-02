---
title: Rendering
description: Rendering
position: 1
category: features
---

## Server Side Rendered Sites and Static Sites

**Server-side rendered sites** are rendered on the server each time the user requests a page, therefore a server is needed to be able to serve the page on each request.

**Static sites** are very similar to server-side rendered applications with the main difference being that static sites are rendered at build time, therefore no server is needed. Navigating from one page to another is then on the client-side.

See [deployment targets](/docs/2.x/features/deployment-targets) for more info on static and server hosting.

```js{}[nuxt.config.js]
export default {
  ssr: true // default value
}
```

<base-alert type="info">

You do not need to add `ssr: true` to your nuxt config in order to enable server-side-rendering as it is enabled by default.

</base-alert>

## Client Side Rendering Only

With client side rendering only there is no server-side rendering. Client side rendering means rendering the content in the browser using JavaScript. Instead of getting all of the content from the HTML we just get a basic HTML document with a JavaScript file that will then render the rest of the site using the browser. For client side rendering set ssr to `false`.

```js{}[nuxt.config.js]
export default {
  ssr: false
}
```

<base-alert type="next">

[The ssr property](/docs/2.x/configuration-glossary/configuration-ssr)

</base-alert>
