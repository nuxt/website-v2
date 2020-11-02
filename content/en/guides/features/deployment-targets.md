---
title: Deployment Targets
description: Deployment Targets
position: 2
category: features
---

## Static Hosting

Nuxt.js also works as a static site generator. Statically render your Nuxt.js application and get all of the benefits of a universal app without a server. The `nuxt generate` command will generate a static version of your website. It will generate HTML for every one of your routes and put it inside of its own file in the `dist/` directory. This improves performance as well as SEO and better offline support.

<base-alert type="info">

Dynamic routes are also generated thanks to the [Nuxt Crawler](/docs/2.x/configuration-glossary/configuration-generate#crawler)

</base-alert>

For static sites the target of `static` needs to be added to your `nuxt.config` file.

```js{}[nuxt.config.js]
export default {
  target: 'static' // default is 'server'
}
```

**Running nuxt dev with the static target will improve the developer experience:**

- Remove `req` & `res` from `context`
- Fallback to client-side rendering on 404, errors and redirects [see SPA fallback](/docs/2.x/concepts/static-site-generation#spa-fallback)
- `$route.query` will always be equal to `{}` on server-side rendering
- `process.static` is true

<base-alert type="info">

We are also exposing `process.target` for module authors to add logic depending on the user target.

</base-alert>

## Server Hosting

Server Hosting is hosting that requires a server and is intended for SSR applications or applications that are using [serverMiddleware](/docs/2.x/configuration-glossary/configuration-servermiddleware). Server-side rendering otherwise known as SSR means that your page is rendered on the server when it is requested by the user. When the user opens your page in a browser the browser sends a request to the server requesting that page. The page is rendered on the server and sent back to the browser with all its content.

For server hosting the target of server is used, which is the default value. With SSR you use the `build` command to build your application.

```js{}[nuxt.config.js]
export default {
  target: 'server'
}
```
