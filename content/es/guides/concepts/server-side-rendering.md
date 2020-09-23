---
title: Renderización del lado del servidor
description: La renderización del lado del servidor (SSR), es la capacidad de una aplicación de mostrar la página web en el servidor en lugar de renderizarla en el navegador.
position: 3
category: concepts
questions:
  - question: ¿Qué tipo de serividor necesitas para renderización del lado del servidor?
    answers:
      - Servidor PHP
      - Servidor JavaScript
      - Servidor Node.js
    correctAnswer: Servidor Node.js
  - question: ¿Qué usas para extender y controlar el servidor?
    answers:
      - Middleware
      - ServerMiddleware
      - No es posible controlar el servidor
    correctAnswer: ServerMiddleware
  - question: Puedes alojar una aplicación renderizada del lado del servidor en un proveedor de alojamiento sin servidor
    answers:
      - true
      - false
    correctAnswer: false
  - question: ¿Tenemos acceso a document en el lado del servidor?
    answers:
      - Sí, siempre está disponible
      - No, el objeto document pertenece al navegador y no está disponible en el servidor
    correctAnswer: No, el objeto document pertenece al navegador y no está disponible en el servidor
  - question: ¿Cuándo se convierte su página en interactiva?
    answers:
      - Cuando el navegador recibe el HTML renderizado del servidor
      - Cuando la hidratación de Vue.js se pone en marcha
      - Cuando un navegador envía la solicitud inicial
    correctAnswer: Cuando la hidratación de Vue.js se pone en marcha
  - question: La navegación entre las páginas usando <NuxtLink> se hace
    answers:
      - Del lado del cliente
      - Del lado del servidor
    correctAnswer: Del lado del cliente
  - question: ¿Cuáles son los pasos correctos?
    answers:
      - navegador → servidor, servidor → navegador → navegador → navegador
      - servidor → navegador, navegador → servidor, servidor → servidor
      - navegador → servidor, servidor → navegador, navegador → servidor
    correctAnswer: navegador → servidor, servidor → navegador → navegador → navegador
---

La renderización del lado del servidor (SSR), es la capacidad de una aplicación de mostrar la página web en el servidor en lugar de renderizarla en el navegador. El lado del servidor envía una página completamente renderizada al cliente; el paquete de JavaScript del cliente toma el control que luego permite a la aplicación Vue.js [hidratarse](https://ssr.vuejs.org/guide/hydration.html).

## Se requiere un servidor Node.js

Se requiere un entorno de JavaScript para renderizar tu página web.

Un servidor Node.js necesita ser configurado para ejecutar tu aplicación Vue.js.

## Extender y controlar el servidor

Puedes ampliar el servidor con serverMiddleware y controlar las rutas con middleware.

```js{}[middleware/api/logger.js]
export default function (req, res, next) {
  console.log(req.url)
  next()
}
```

```js{}[nuxt.config.js]
export default {
  serverMiddleware: ['~/middleware/api/logger']
}
```

Si el middleware de su servidor consiste en una lista de funciones mapeadas a rutas:

## Entornos de Servidor vs. Navegador

Debido a que estás en un entorno Node.js tienes acceso a objetos Node.js como `req` y `res`. No tienes acceso a los objetos `window` o `documento` ya que pertenecen al entorno del navegador. Sin embargo, puedes usar `window` o `documento` usando los hooks `beforeMount` o `mounted`.
```js
beforeMount{
  window.alert('hello');
}
mounted{
  window.alert('hello');
}
```

## Pasos para la renderización del lado del servidor con Nuxt.js

### Paso 1: Del navegador al servidor

Cuando un navegador envía la solicitud inicial, esta alcanzará al servidor interno de Node.js. Nuxt.js generará el HTML y lo enviará de vuelta al navegador con los resultados de las funciones ejecutadas, por ejemplo, `asyncData`, `nuxtServerInit` o `fetch`. Las funciones de hook también se ejecutan.
### Step 2: Server to Browser

El navegador recibe la página renderizada del servidor con el HTML generado. El contenido se muestra y la hidratación del Vue.js se activa, haciéndolo reactivo. Después de este proceso, la página es interactiva.d HTML.

### Step 3: Navegador a Navegador

La navegación entre las páginas con [`<NuxtLink>`](/guides/features/nuxt-components#the-nuxtlink-component) se hace por el lado del cliente para hacer una solicitud al servidor de nuevo a menos que actualices el navegador.
<quiz :questions="questions"></quiz>
