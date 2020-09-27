---
title: Destinos de implementaciones
description: Destinos de implementaciones
position: 2
category: features
---

## Alojamiento Estático

Para alojamiento estático (Alojamiento donde no se necesita un servidor) el destino de estatico tiene que ser añadido a tu archivo nuxt.config.

```js{}[nuxt.config.js]
export default {
  target: 'static' // default is 'server'
}
```

Ejecutando nuxt dev con el destino estático va a mejorar la experiencia de desarrollo:

- Remueve `req` & `res` de `context`
- Fallback to client-side rendering on 404, errors and redirects [see SPA fallback](./guides/concepts/static-site-generation#spa-fallback)
- `$route.query` will always be equal to `{}` on server-side rendering
- `process.static` is true

<base-alert type="info">
Tambien estamos exponiendo `process.target`para los autores de módulos para añadir lógica dependiendo del destino.
</base-alert>

## Alojamiento de servidor

Para el alojamiento en servidor el target server es usado, cual es el valor por defecto.

```js{}[nuxt.config.js]
export default {
  target: 'server'
}
```
