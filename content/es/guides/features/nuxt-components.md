---
title: Componentes de Nuxt
description: Nuxt.js posee una serie de componentes importantes ya integrados que te serán de utilidad para construir tu aplicación. 
position: 9
category: features
csb_link_nuxt_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/03_features/09_components_nuxt-link?fontsize=14&hidenavigation=1&theme=dark
csb_link_nuxt: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/03_features/09_components_nuxt?fontsize=14&hidenavigation=1&theme=dark
questions:
  - question: ¿Qué componente se utiliza para desplegar los componentes de tu página? 
    answers:
      - '<Nuxt>'
      - '<Page>'
      - '<Views>'
    correctAnswer: '<Nuxt>'
  - question: ¿Dónde se puede utilizar el componente `<Nuxt>`?
    answers:
      - componentes
      - páginas
      - layouts
    correctAnswer: layouts
  - question: ¿Qué componente se utiliza para desplegar los componentes 'hijos' de una ruta anidada?
    answers:
      - '<Nuxt>'
      - '<NuxtChild>'
      - '<Children>'
    correctAnswer: '<NuxtChild>'
  - question: ¿Dónde se debe insertar el componente `<NuxtChild>`?
    answers:
      - pages/child.vue
      - pages/parent.vue
      - layouts/parent.vue
    correctAnswer: pages/parent.vue
  - question: '`keep-alive` se puede utilizar en'
    answers:
      - 'El componente <Nuxt> solamente'
      - 'El componente <Nuxt> y <NuxtChild>'
      - 'El componente <NuxtChild> solamente'
    correctAnswer: '<Nuxt> and <NuxtChild> component'
  - question: ¿Qué componente se utiliza para vincular con páginas internas?
    answers:
      - '<NuxtLink>'
      - '<RouterLink>'
      - '<a>'
    correctAnswer: '<NuxtLink>'
  - question: '¿De qué manera se puede establecer un vínculo con la página about de tu aplicación mediante <NuxtLink>?'
    answers:
      - to="/about"
      - href="/about"
      - link="/about"
    correctAnswer: to="/about"
  - question: ¿Qué código se puede utilizar para deshabilitar el prefetching en determinadas páginas?
    answers:
      - no-prefetch
      - :prefetch="false"
      - no-prefetch and :prefetch="false"
    correctAnswer: no-prefetch and :prefetch="false"
  - question: ¿Qué clase se utiliza por defecto para agregar estilos a hipervínculos activos?
    answers:
      - nuxt-link-active
      - link-active
      - router-link-active
    correctAnswer: nuxt-link-active
  - question: ¿Qué clase se utiliza por defecto para agregar estilos a hipervínculos activos exactos? 
    answers:
      - nuxt-link-exact-active
      - link-exact-active
      - nuxt-exact-active-link
    correctAnswer: nuxt-link-exact-active
  - question: En Nuxt ≥ 2.9.0 ¿qué componente se utiliza para que tu componente se despliegue solamente en el cliente?
    answers:
      - '<client-only>'
      - '<no-ssr>'
      - '<client>'
    correctAnswer: '<client-only>'
---

Nuxt.js posee una serie de componentes importantes ya integrados que te serán de utilidad para construir tu aplicación. Los componentes están disponibles globalmente, lo cual significa que no necesitas importarlos para poder utilizarlos.

A continuación se explican cada uno de los componentes que vienen incluidos. 

## El componente Nuxt

El componente `<Nuxt>` se utiliza para desplegar los componentes de tu página. Básicamente, este componente se reemplaza por lo que está dentro de los componentes de tu página, dependiendo de la página que se esté mostrando. Por este motivo es importante que agregues el componente `<Nuxt>` a tus layouts.

```html{}[layouts/default.vue]
<template>
  <div>
    <div>My nav bar</div>
    <Nuxt />
    <div>My footer</div>
  </div>
</template>
```

<base-alert>

The `<Nuxt>` component can only be used inside [layouts](/guides/concepts/views#layouts).

</base-alert>

El componente `<Nuxt>` puede tomar la prop de `nuxt-child-key`. Esta prop se pasa a `<RouterView>` para que tus transiciones funcionen correctamente dentro de páginas dinámicas.  

Existen 2 maneras de manejar la prop interna `key` de `<RouterView>`.

1. Mediante una prop `nuxtChildKey` en tu componente `<Nuxt>` 

```html{}[layouts/default.vue]
<template>
  <div>
    <Nuxt :nuxt-child-key="someKey" />
  </div>
</template>
```

2. Agregando la opción `key` en _page_ components como `string` o como `function`

```js
export default {
  key(route) {
    return route.fullPath
  }
}
```

## El componente NuxtChild 

Este componente se utiliza para desplegar los componentes hijos en rutas anidadas. 

Ejemplo:

```
-| pages/
---| parent/
------| child.vue
---| parent.vue
```

Este archivo va a generar las siguientes rutas:

```js
;[
  {
    path: '/parent',
    component: '~/pages/parent.vue',
    name: 'parent',
    children: [
      {
        path: 'child',
        component: '~/pages/parent/child.vue',
        name: 'parent-child'
      }
    ]
  }
]
```

Para desplegar el componente `child.vue`, debes insertar el componente `<NuxtChild>` dentro de `pages/parent.vue`:

```html{}[pages/parent.vue]
<template>
  <div>
    <h1>Soy la vista padre </h1>
    <NuxtChild :foobar="123" />
  </div>
</template>
```

## keep-alive

Tanto el componente `<Nuxt>` como el componente `<NuxtChild/>` aceptan `keep-alive` y `keep-alive-props.`

<base-alert type="info">

Para aprender más sobre keep-alive y keep-alive-props, consultar [vue docs](https://vuejs.org/v2/api/#keep-alive)

</base-alert>

```html{}[layouts/default.vue]
<template>
  <div>
    <Nuxt keep-alive :keep-alive-props="{ exclude: ['modal'] }" />
  </div>
</template>

<!-- se convertirá en algo similar a esto -->
<div>
  <KeepAlive :exclude="['modal']">
    <RouterView />
  </KeepAlive>
</div>
```

```html{}[pages/parent.vue]
<template>
  <div>
    <NuxtChild keep-alive :keep-alive-props="{ exclude: ['modal'] }" />
  </div>
</template>

<!-- se convertirá en algo similar a esto -->
<div>
  <KeepAlive :exclude="['modal']">
    <RouterView />
  </KeepAlive>
</div>
```

Al igual que cualquier componente normal de Vue, los componentes `<NuxtChild>` también pueden recibir propiedades.

```html
<template>
  <div>
    <NuxtChild :key="$route.params.id" />
  </div>
</template>
```

Si deseas ver un ejemplo, consulta aquí: [nested-routes ejemplo](https://nuxtjs.org/examples/nested-routes).

<app-modal>
  <code-sandbox  :src="csb_link_nuxt"></code-sandbox>
</app-modal>

## El Componente NuxtLink

Puedes utilizar el componente `<NuxtLink>` para navegar por las páginas de tu aplicación. Este componente viene incluido en Nuxt.js, por lo tanto no es necesario que lo importes, como haces con otros componentes. Es similar a la etiqueta de HTML `<a>`, excepto que en lugar de utilizar un `href="/about"` tienes que usar `to="/about"`. Si ya has utilizado `vue-router` antes, puedes asumir que `<NuxtLink>` reemplaza a `<RouterLink>`

Hipervínculo sencillo hacia la página `index.vue` de tu directorio `pages`:

```html
<template>
  <NuxtLink to="/">Home page</NuxtLink>
</template>
```

El componente `<NuxtLink>` se debe utilizar para todos los hipervínculos internos. Esto significa que debes utilizar `<NuxtLink>` para todos los hipervínculos que dirigen hacia las páginas de tu sitio. La etiqueta `<a>` se debe utilizar para todos los hipervínculos externos. Ello significa que si tienes hipervínculos que dirigen hacia otros sitios web, debes utilizar la etiqueta `<a>`.

```html
<template>
  <div>
    <h1>Home page</h1>
    <NuxtLink to="/about"
      >About (hipervínculo interno que pertenece a la aplicación de Nuxt)</NuxtLink
    >
    <a href="https://nuxtjs.org">Hipervínculo externo hacia otra página</a>
  </div>
</template>
```

<base-alert type="info">

Para aprender más sobre `<RouterLink>`, consulta la [Documentación sobre Vue Router](https://router.vuejs.org/api/#router-link) para obtener mayor información.

</base-alert>

<base-alert type="info">

`<NuxtLink>` posee [smart prefetching](/guides/features/nuxt-components#the-nuxtlink-component) integrado.

</base-alert>

## prefetchLinks

Nuxt.js incluye smart prefetching de forma automática. Esto significa que detecta cuando un hipervínculo es visible, ya sea en el viewport o al desplazarse y realiza el prefetching en el JavaScript para todas aquellas páginas, para que estén listas cuando el usuario da clic al hipervínculo. Nuxt.js solamente carga los recursos cuando el navegador no se encuentra ocupado y no realiza el prefetching si tu conexión está offline(fuera de línea) o si solamente tienes conexión 2g.

### Desactivar el prefetching de hipervínculos específicos

Sin embargo, existirán situaciones en las cuales querrás desactivar el prefetching de algunos hipervínculos si tu página tiene mucho JavaScript, si tienes muchas páginas diferentes en las cuales se realizaría el prefetching o si tienes que cargar múltiples scripts de terceros. Para desactivar el prefetching en un hipervínculo en particular puedes utilizar la prop `no-prefetch`. A partir de Nuxt.js v2.10.0, puedes fijar la prop `prefetch` en `false`

```html
<NuxtLink to="/about" no-prefetch>Página About sin prefetching</NuxtLink>
<NuxtLink to="/about" :prefetch="false">Página About sin prefetching</NuxtLink>
```

### Desactivar el prefetching globalmente

Para desactivar el prefetching en todos los hipervínculos, fija los `prefetchLinks` en `false`:

```js{}[nuxt.config.js]
export default {
  router: {
    prefetchLinks: false
  }
}
```

A partir de Nuxt.js v2.10.0, si has fijado `prefetchLinks` en `false` pero deseas hacer prefetching a un link en particular, puedes utilizar la prop `prefetch`.

```html
<NuxtLink to="/about" prefetch>Página About con prefetching</NuxtLink>
```

## linkActiveClass

The `linkActiveClass` works the same as the `vue-router` class for active links. If we want to show which links are active all you have to do is create some css for the class `nuxt-link-active` .

```css
.nuxt-link-active {
  color: red;
}
```

<base-alert>

This css can be added to the navigation component or for a specific page or layout or in your main.css file.

</base-alert>

If you want to you can also configure the class name to be something else. You con do this by modifying the `linkActiveClass` in the router property in your `nuxt.config.js` file.

```js
export default {
  router: {
    linkActiveClass: 'my-custom-active-link'
  }
}
```

<base-alert type="info">

This option is given directly to the `vue-router` linkActiveClass. See the [vue-router docs](https://router.vuejs.org/api/#active-class) for more info.

</base-alert>

## linkExactActiveClass

The `linkExactActiveClass` works the same as the `vue-router` class for exact active links. If we want to show which links are active with an exact match all you have to do is create some css for the class `nuxt-link-exact-active` .

```css
.nuxt-link-exact-active {
  color: green;
}
```

<base-alert type="info">

This css can be added to the navigation component or for a specific page or layout or in your main.css file.

</base-alert>

If you want to you can also configure the class name to be something else. You con do this by modifying the `linkActiveClass` in the router property in your `nuxt.config.js` file.

```js{}[nuxt.config.js]
export default {
  router: {
    linkExactActiveClass: 'my-custom-exact-active-link'
  }
}
```

<base-alert type="info">

This option is given directly to the `vue-router` linkExactActiveClass. See the [vue-router](https://router.vuejs.org/api/#active-class) [docs](https://router.vuejs.org/api/#exact-active-class) for more info

</base-alert>

## linkPrefetchedClass

The linkPrefetchedClass will allow you to add styles for all links that have been prefetched. This is great for testing which links are being prefetched after modifying the default behaviour. The linkPrefetchedClass is disabled by default. If you want to enable it you need to add it to the router property in your `nuxt-config.js` file.

```js{}[nuxt.config.js]
export default {
  router: {
    linkPrefetchedClass: 'nuxt-link-prefetched'
  }
}
```

Then you can add the styles for that class.

```css
.nuxt-link-prefetched {
  color: orangeRed;
}
```

<base-alert type="info">

In this example we have used the class `nuxt-link-prefetched` but you can name it anything you like

</base-alert>

<app-modal>
  <code-sandbox  :src="csb_link_nuxt_link"></code-sandbox>
</app-modal>

## The client-only Component

This component is used to purposely render a component only on client-side. To import a component only on the client, register the component in a client-side only plugin.

```html{}[pages/example.vue]
<template>
  <div>
    <sidebar />
    <client-only placeholder="Loading...">
      <!-- this component will only be rendered on client-side -->
      <comments />
    </client-only>
  </div>
</template>
```

Use a slot as placeholder until `<client-only />` is mounted on client-side.

```html{}[pages/example.vue]
<template>
  <div>
    <sidebar />
    <client-only>
      <!-- this component will only be rendered on client-side -->
      <comments />

      <!-- loading indicator, rendered on server-side -->
      <comments-placeholder slot="placeholder" />
    </client-only>
  </div>
</template>
```

<base-alert>

If you are using a version of Nuxt < v2.9.0, use `<no-ssr>` instead of `<client-only>`

</base-alert>

<quiz :questions="questions"></quiz>
