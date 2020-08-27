---
title: Enrutamiento
description: La mayoría de los sitios web tienen más de una página. Por ejemplo, de inicio, de sobre nosotros, de contacto, etc. Para mostrar estas páginas necesitamos un Router.
position: 2
category: get-started
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/01_get_started/02_routing?fontsize=14&hidenavigation=1&theme=dark
---

## Rutas Automáticas

La mayoría de los sitios web tienen más de una página. Por ejemplo inicio, sobre nosotros, contacto, etc. Para mostrar estas páginas necesitamos un Router. Aquí es donde entra en acción `vue-router`. Cuando trabajas con una aplicación de Vue, tienes que rellenar un archivo de configuración (p.ej. `router.js`) y añadirle todas las rutas manualmente. Nuxt.js genera automáticamente la configuración de `vue-router` por ti, basándose en los ficheros Vue que tengas en la carpeta `pages`. Lo que significa que ¡nunca más tendrás que escribir el archivo de configuración del enrutador! Lo que también implica, que Nuxt.js ofrece división de código por rutas de forma automática.

En otras palabras, todo lo que tienes que hacer para generar rutas en tu aplicación es crear archivos `.vue` en la carpeta `pages`.

<base-alert type="next">

Aprende más sobre [Enrutamiento](/guides/features/file-system-routing)

</base-alert>

## Navegación

Para ir de una página a otra en tu aplicación, se debe usar el componente [NuxtLink](/guides/features/nuxt-components#the-nuxtlink-component). Este componente está incluído en Nuxt.js y es por ello que no tienes que importarlo, a diferencia de otros componentes. Es similar a la etiqueta `<a>` de HTML, sólo que en vez de usar un `href="/about"` usamos `to="/about"`. Si ya usado antes `vue-router`, piensa que `<NuxtLink>` es un sustituto de `<RouterLink>`.

Un simple enlace a la página `index.vue` de tu carpeta `pages`:

```html{}[pages/index.vue]
<template>
  <NuxtLink to="/">Home page</NuxtLink>
</template>
```

Para todos los enlaces internos a las páginas de tu sitio web, usa `<NuxtLink>`. Si tienes enlaces externos a otros sitios web, usa la etiqueta `<a>`. Mira el ejemplo de abajo:

```html{}[pages/index.vue]
<template>
  <main>
    <h1>Home page</h1>
    <NuxtLink to="/about">
      About (internal link that belongs to the Nuxt App)
    </NuxtLink>
    <a href="https://nuxtjs.org">External Link to another page</a>
  </main>
</template>
```

<app-modal>
  <code-sandbox :src="csb_link"></code-sandbox>
</app-modal>

<base-alert type="next">

Aprende más sobre el [componente NuxtLink](/guides/features/nuxt-components#the-nuxtlink-component).

</base-alert>
