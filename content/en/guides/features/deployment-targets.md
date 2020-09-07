---
title: Deployment Targets
description: Deployment Targets
position: 2
category: features
---

## Static Hosting

With static hosting, hosting where no server is needed, you can choose to either host a single page application or a multiple page application, also known as static sties. With static hosting no server is needed, meaning your SPA or static site can be hosted on any serverless hosting or CDN for free. For static hosting the target of `static` needs to be added to your `nuxt.config` file.

```js{}[nuxt.config.js]
export default {
  target: 'static' // default is 'server'
}
```

### SPA

Single page applications are pages that are rendered only on the client side without the need of a server. To deploy a single page application set the [mode set to `spa`](/guides/features/rendering-modes#spa) and then use the `build` command to build your application.

```js{}[nuxt.config.js]
export default {
  target: 'static' // default is 'server'
  mode: 'spa'
}
```

### Static Sites

As Nuxt.js also works as a static site generator you can therefore generate your application as a static site. Statically render your Nuxt.js application and get all of benefits of a universal app without a server. The nuxt `generate` command will generate a completely static version of your website. It will generate HTML for every one of your routes and put it inside of its own file in the `dist` folder. Basically any .vue file that is placed inside the pages folder will be generated as a static html page. This improves performance as well as SEO and better offline support.

<base-alert type="info">

Static sites work with [universal mode](https://nuxtjs.org/guides/features/rendering-modes#universal) which is the default mode.

</base-alert>

**Running nuxt dev with the static target will improve the developer experience:**

- Remove `req` & `res` from `context`
- Fallback to client-side rendering on 404, errors and redirects [see SPA fallback](./guides/concepts/static-site-generation#spa-fallback)
- `$route.query` will always be equal to `{}` on server-side rendering
- `process.static` is true

<base-alert type="info">

We are also exposing `process.target` for module authors to add logic depending on the user target.

</base-alert>

## Server Hosting

Server Hosting is hosting that requires a server and is intended for SSR applications. Server-side rendering otherwise known as SSR means that your page is rendered on the server when it is requested by the user. When the user opens your page in a browser the browser sends a request to the server requesting that page. The page is rendered on the server and sent back to the browser with all its content.

For server hosting the target of server is used, which is the default value. You use the `build` command to build you application.

```js{}[nuxt.config.js]
export default {
  target: 'server'
}
```

<base-alert type="info">

Server Side Rendering works with [universal mode](https://nuxtjs.org/guides/features/rendering-modes#universal) which is the default mode.

</base-alert>
