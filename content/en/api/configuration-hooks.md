---
title: 'The hooks Property'
description: Hooks are listeners to Nuxt events that are typically used in Nuxt modules, but are also available in `nuxt.config.js`.
menu: hooks
category: configuration
position: 113
---

- Type: `Object`

> Hooks are [listeners to Nuxt events](/api/internals) that are typically used in Nuxt modules, but are also available in `nuxt.config.js`. [Learn More](/api/internals)

Example (`nuxt.config.js`):

```js
import fs from 'fs'
import path from 'path'

export default {
  hooks: {
    build: {
      done(builder) {
        const extraFilePath = path.join(
          builder.nuxt.options.buildDir,
          'extra-file'
        )
        fs.writeFileSync(extraFilePath, 'Something extra')
      }
    }
  }
}
```

Internally, hooks follow a naming pattern using colons (e.g., `build:done`). For ease of configuration, you can structure them as an hierarchical object when using `nuxt.config.js` (as exemplifed above) to set your own hooks. See [Nuxt Internals](/api/internals) for more detailed information on how they work.

## List of hooks

- [Nuxt hooks](https://nuxtjs.org/api/internals-nuxt#hooks)
- [Renderer hooks](https://nuxtjs.org/api/internals-renderer#hooks)
- [ModulesContainer hooks](https://nuxtjs.org/api/internals-module-container#hooks)
- [Builder hooks](https://nuxtjs.org/api/internals-builder#hooks)
- [Generator hooks](https://nuxtjs.org/api/internals-generator#hooks)

## Examples

### Redirect to router.base when not on root

Let´s say you want to serve pages as `/portal` instead of `/`.

This is maybe an edge-case, and the point of _nuxt.config.js_’ `router.base` is for when a Web server will serve Nuxt elsewhere than the domain root.

But when in local development, hitting _localhost_, when router.base is not / returns a 404. In order to prevent this, you can setup a Hook.

Maybe redirecting is not the best use-case for a production Web site, but this will help you leverage Hooks.

To begin, you [can change `router.base`](/api/configuration-router#base); Update your `nuxt.config.js`:

```js
// nuxt.config.js
import hooks from './hooks'
export default {
  router: {
    base: '/portal'
  }
  hooks: hooks(this)
}
```

Then, create a few files;

1. `hooks/index.js`, Hooks module

   ```js
   // file: hooks/index.js
   import render from './render'

   export default nuxtConfig => ({
     render: render(nuxtConfig)
   })
   ```

1. `hooks/render.js`, Render hook

   ```js
   // file: hooks/render.js
   import redirectRootToPortal from './route-redirect-portal'

   export default nuxtConfig => {
     const router = Reflect.has(nuxtConfig, 'router') ? nuxtConfig.router : {}
     const base = Reflect.has(router, 'base') ? router.base : '/portal'

     return {
       /**
        * 'render:setupMiddleware'
        * {@link node_modules/nuxt/lib/core/renderer.js}
        */
       setupMiddleware(app) {
         app.use('/', redirectRootToPortal(base))
       }
     }
   }
   ```

1. `hooks/route-redirect-portal.js`, The Middleware itself

   ```js
   // file: hooks/route-redirect-portal.js

   /**
    * Nuxt middleware hook to redirect from / to /portal (or whatever we set in nuxt.config.js router.base)
    *
    * Should be the same version as connect
    * {@link node_modules/connect/package.json}
    */
   import parseurl from 'parseurl'

   /**
    * Connect middleware to handle redirecting to desired Web Applicatin Context Root.
    *
    * Notice that Nuxt docs lacks explaning how to use hooks.
    * This is a sample router to help explain.
    *
    * See nice implementation for inspiration:
    * - https://github.com/nuxt/nuxt.js/blob/dev/examples/with-cookies/plugins/cookies.js
    * - https://github.com/yyx990803/launch-editor/blob/master/packages/launch-editor-middleware/index.js
    *
    * [http_class_http_clientrequest]: https://nodejs.org/api/http.html#http_class_http_clientrequest
    * [http_class_http_serverresponse]: https://nodejs.org/api/http.html#http_class_http_serverresponse
    *
    * @param {http.ClientRequest} req Node.js internal client request object [http_class_http_clientrequest]
    * @param {http.ServerResponse} res Node.js internal response [http_class_http_serverresponse]
    * @param {Function} next middleware callback
    */
   export default desiredContextRoot =>
     function projectHooksRouteRedirectPortal(req, res, next) {
       const desiredContextRootRegExp = new RegExp(`^${desiredContextRoot}`)
       const _parsedUrl = Reflect.has(req, '_parsedUrl') ? req._parsedUrl : null
       const url = _parsedUrl !== null ? _parsedUrl : parseurl(req)
       const startsWithDesired = desiredContextRootRegExp.test(url.pathname)
       const isNotProperContextRoot = desiredContextRoot !== url.pathname
       if (isNotProperContextRoot && startsWithDesired === false) {
         const pathname = url.pathname === null ? '' : url.pathname
         const search = url.search === null ? '' : url.search
         const Location = desiredContextRoot + pathname + search
         res.writeHead(302, {
           Location
         })
         res.end()
       }
       next()
     }
   ```

Then, whenever a colleague in development accidentally hits `/` to reach the development web development service, Nuxt will automatically redirect to `/portal`
