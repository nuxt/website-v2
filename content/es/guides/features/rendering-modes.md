---
title: Rendering Modes
description: Rendering Modes
position: 1
category: features
---

## Universal

`mode: 'universal'`: Isomorphic application (server-side rendering or static sites).

The universal mode is used for both server-side rendering and static sites.

Static sites are very similar to server-side rendered applications with the main difference being that static sites are rendered at build time, therefore no server is needed. Navigating from one page to another is done on the client-side.

Server-side rendered sites are rendered on the server each time the user requests a page, therefore a server is needed to be able to serve the page on each request.

See [deployment targets](/guides/features/deployment-targets) for more info on static and server hosting

```js{}[nuxt.config.js]
export default {
  mode: 'universal' // default universal
}
```

<base-alert type="info">
You do not need to add this to your nuxt config in order for universal mode to be applied as the default mode is universal.
</base-alert>

## SPA

`mode: 'spa'`: No server-side rendering, only client-side rendering.

With Single Page Applications there is no server-side rendering, only client-side rendering. Client side rendering means rendering the content in the browser using JavaScript. Instead of getting all of the content from the HTML we just get a basic HTML document with a JavaScript file that will then render the rest of the site using the browser.

```js{}[nuxt.config.js]
export default {
  mode: 'spa'
}
```

<base-alert type="next">

[The mode property](/guides/configuration-glossary/configuration-mode)

</base-alert>
