---
title: 'La propiedad hooks'
description: Los hooks son listeners de eventos de Nuxt, que normalmente se usan en módulos de Nuxt, pero también están disponibles en `nuxt.config.js`.
menu: hooks
category: configuration-glossary
position: 13
---

- Tipo: `Object`

> Los hooks son [listeners de eventos de Nuxt](/guides/internals-glossary/internals), que normalmente se usan en módulos de Nuxt, pero también están disponibles en `nuxt.config.js`.

```js{}[nuxt.config.js]
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

Internamente, se usan dos puntos (:) para nombrar los hooks (p.e., `build:done`). Para facilitar la configuración, puedes estructurarlos como un objeto jerárquico al usar `nuxt.config.js` (tal y como se muestra arriba) para definir tus propios hooks. Visita los [aspectos internos de Nuxt](/guides/internals-glossary/internals) para información más detallada sobre cómo funcionan.

## Lista de hooks

- [Hooks de Nuxt](/guides/internals-glossary/internals-renderer#hooks)
- [Hooks de Renderer](/guides/internals-glossary/internals-renderer#hooks)
- [Hooks de ModulesContainer](/guides/internals-glossary/internals-module-container#hooks)
- [Hooks de Builder](/guides/internals-glossary/internals-builder#hooks)
- [Hooks de Generator](/guides/internals-glossary/internals-generator#hooks)

## Ejemplos

### Redirigir a router.base cuando no se está en root

Imaginemos que quieres servir páginas como `/portal` en lugar de `/`.

Quizá éste sea un caso extremo, y además el sentido del `router.base` de _nuxt.config.js_ es para cuando un servidor web sirve Nuxt fuera de la ruta del dominio.

Pero en desarrollo local, _localhost_, cuando router.base no es /, devuelve un 404. Para evitar esto, puedes definir un Hook.

Puede que una redirección no sea lo mejor para un sitio en producción, pero esto te ayudará a aprovechar los Hooks.

Para empezar, puedes [cambiar `router.base`](/guides/configuration-glossary/configuration-router#base); Actualiza tu `nuxt.config.js`:

```js{}[nuxt.config.js]
import hooks from './hooks'
export default {
  router: {
    base: '/portal'
  }
  hooks: hooks(this)
}
```

Luego, crea unos cuantos archivos:

1. `hooks/index.js`, módulo Hooks

   ```js{}[hooks/index.js]
   import render from './render'

   export default nuxtConfig => ({
     render: render(nuxtConfig)
   })
   ```

1. `hooks/render.js`, Hook Render

   ```js{}[hooks/render.js]
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

1. `hooks/route-redirect-portal.js`, El propio Middleware

   ```js{}[hooks/route-redirect-portal.js]
   /**
    * Hook de Middleware Nuxt para redirigir de / a /portal (o lo que definamos en nuxt.config.js router.base)
    *
    * Debería ser la misma versión que connect
    * {@link node_modules/connect/package.json}
    */
   import parseurl from 'parseurl'

   /**
    * Middleware connect para manejar la redirección al Web Applicatin Context Root deseado.
    *
    * Fíjate que en la documentación de Nuxt falta explicar cómo usar hooks.
    * Éste es un router de ejemplo para ayudar a explicarlo.
    *
    * Mira una implementación chula como inspiración:
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

Después, cuando un compañero navegue sin querer a `/`, Nuxt redireccionará automáticamente a `/portal`
