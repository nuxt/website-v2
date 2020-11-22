---
title: 'La propiedad serverMiddleware'
description: Defina el middleware del lado del servidor.
menu: serverMiddleware
category: configuration-glossary
position: 27
---

- Tipo: `Array`
  - Items: `String` o `Object` o `Function`

Nuxt crea internamente una instancia de [connect](https://github.com/senchalabs/connect) a la que puede agregar su propio middleware personalizado. Esto nos permite registrar rutas adicionales (típicamente rutas `/ api`) **sin necesidad de un servidor externo**.

Debido a que connect en sí mismo es un middleware, el middleware registrado funcionará con `nuxt start` y también cuando se use como middleware con usos programáticos como [express-template](https://github.com/nuxt-community/express-template). [Módulos](/docs/2.x/directory-structure/modules) de Nuxt también pueden proporcionar un `serverMiddleware` usando [this.addServerMiddleware()](/docs/2.x/internals-glossary/internals-module-container#addedervermiddleware-middleware)

Adicionalmente a ellos, introdujimos una opción de `prefix` que por defecto es `true`. Agregará la base del enrutador a los middlewares de su servidor.

**Ejemplo:**

- Ruta del middleware del servidor: `/api`
- Base de enrutador: `/admin`
- Con `prefix: true` (por defecto): `/admin/api`
- Con `prefix: false`: `/api`

## serverMiddleware vs middleware!

No lo confunda con el [middleware de rutas](/docs/2.x/directory-structure/middleware) que son llamados antes de cada ruta por Vue en el lado del cliente o SSR. El middleware enumerado en la propiedad `serverMiddleware` se ejecuta en el lado del servidor **antes de** `vue-server-renderer` y se puede usar para tareas específicas del servidor, como manejar solicitudes de API o servir activos.

## Uso

Si el middleware es String, Nuxt.js intentará resolverlo automáticamente y lo requerirá.

```js{}[nuxt.config.js]
import serveStatic from 'serve-static'

export default {
  serverMiddleware: [
    // Registrará el paquete npm redirect-ssl
    'redirect-ssl',

    // Registrará el archivo del directorio api del proyecto para manejar /api/* requires
    { path: '/api', handler: '~/api/index.js' },

    // También podemos crear instancias personalizadas
    { path: '/static2', handler: serveStatic(__dirname + '/static2') }
  ]
}
```

<p class="Alert Alert--danger">
    <b>¡AVISO! </b>
    Si no desea que el middleware se registre para todas las rutas, debe usar el formulario de objeto con una ruta específica,
    de lo contrario, el controlador predeterminado de nuxt no funcionará.
</p>

## Middleware de servidor personalizado

También es posible escribir middleware personalizado. Para obtener más información, consulte [Connect Docs](https://github.com/senchalabs/connect#appusefn).

Middleware (`api/logger.js`):

```js{}[api/logger.js]
export default function (req, res, next) {
  // req es el objeto de solicitud http de Node.js
  console.log(req.url)

  // res es el objeto de respuesta http de Node.js

  // siguiente es una función para llamar para invocar el próximo middleware
  // ¡No olvide llamar a next al final si su middleware no es un endpoint!
  next()
}
```

```js{}[nuxt.config.js]
serverMiddleware: ['~/api/logger']
```

## Sintaxis del objeto

Si el middleware de su servidor consta de una lista de funciones asignadas a rutas:

```js
export default {
  serverMiddleware: [
    { path: '/a', handler: '~/api/a.js' },
    { path: '/b', handler: '~/api/b.js' },
    { path: '/c', handler: '~/api/c.js' }
  ]
}
```

Alternativamente, puede pasar un objeto para definirlas, de la siguiente manera:

```js
export default {
  serverMiddleware: {
    '/a': '~/api/a.js',
    '/b': '~/api/b.js',
    '/c': '~/api/c.js'
  }
}
```
