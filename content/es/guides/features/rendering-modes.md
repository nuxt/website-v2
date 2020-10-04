---
title: Modos de Renderizado
description: Modos de Renderizado
position: 1
category: features
---

## Universal

`mode: 'universal'`: Aplicación isomórfica (Renderizado server-side o archivos estaticos).

```js{}[nuxt.config.js]
export default {
  mode: 'universal' // default universal
}
```

<base-alert type="info">
No necesitas agregar esto a tu carpeta de configuración nuxt para que el modo universal sea aplicado, ya que el modo por default es universal.
</base-alert>

## SPA

`mode: 'spa'`: No server-side renderizado (solo navegación client-side)

Puedes usar la propiedad mode para cambiar el modo default de nuxt para tu proyecto:

```js{}[nuxt.config.js]
export default {
  mode: 'spa' // default universal
}
```

<base-alert type="next">

[La propiedad mode](/guides/configuration-glossary/configuration-mode)

</base-alert>
