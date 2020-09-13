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

Tanto el componente `<Nuxt>` como el componente `<NuxtChild/>` component, aceptan `keep-alive` y `keep-alive-props.`

<base-alert type="info">

Para aprender más sobre keep-alive y keep-alive-props, consultar [vue docs](https://vuejs.org/v2/api/#keep-alive)

</base-alert>

```html{}[layouts/default.vue]
<template>
  <div>
    <Nuxt keep-alive :keep-alive-props="{ exclude: ['modal'] }" />
  </div>
</template>

<!-- will be converted into something like this -->
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

<!-- will be converted into something like this -->
<div>
  <KeepAlive :exclude="['modal']">
    <RouterView />
  </KeepAlive>
</div>
```

`<NuxtChild>` components can also receive properties like a regular Vue component.

```html
<template>
  <div>
    <NuxtChild :key="$route.params.id" />
  </div>
</template>
```

To see an example, take a look at the [nested-routes example](https://nuxtjs.org/examples/nested-routes).

<app-modal>
  <code-sandbox  :src="csb_link_nuxt"></code-sandbox>
</app-modal>

## The NuxtLink Component

To navigate between pages of your app, you should use the  `<NuxtLink>` component. This component is included with Nuxt.js and therefore you don't have to import it like you do with other components. It is similar to the HTML `<a>` tag except that instead of using a `href="/about"` you use `to="/about"`. If you've used `vue-router` before, you can think of `<NuxtLink>` as a replacement of `<RouterLink>`

A simple link to the `index.vue` page in your `pages` folder:

```html
<template>
  <NuxtLink to="/">Home page</NuxtLink>
</template>
```

The `<NuxtLink>` component should be used for all internal links. That means for all links to the pages within your site you should use `<NuxtLink>`. The `<a>` tag should be used for all external links. That means if you have links to other websites you should use the `<a>` tag for those.

```html
<template>
  <div>
    <h1>Home page</h1>
    <NuxtLink to="/about"
      >About (internal link that belongs to the Nuxt App)</NuxtLink
    >
    <a href="https://nuxtjs.org">External Link to another page</a>
  </div>
</template>
```

<base-alert type="info">

If you want to know more about `<RouterLink>`, feel free to read the [Vue Router documentation](https://router.vuejs.org/api/#router-link) for more information.

</base-alert>

<base-alert type="info">

`<NuxtLink>` also comes with [smart prefetching](/guides/features/nuxt-components#the-nuxtlink-component) out of the box.

</base-alert>

## prefetchLinks

Nuxt.js automatically includes smart prefetching. That means it detects when a link is visible, either in the viewport or when scrolling and prefetches the JavaScript for those pages so that they are ready when the user clicks the link. Nuxt.js only loads the resources when the browser isn't busy and skips prefetching if your connection is offline or if you only have 2g connection.

### Disable prefetching for specific links

However sometimes you may want to disable prefetching on some links if your page has a lot of JavaScript or you have a lot of different pages that would be prefetched or you have a lot of third party scripts that need to be loaded. To disable the prefetching on a specific link, you can use the `no-prefetch` prop. Since Nuxt.js v2.10.0, you can also use the `prefetch` prop set to `false`

```html
<NuxtLink to="/about" no-prefetch>About page not pre-fetched</NuxtLink>
<NuxtLink to="/about" :prefetch="false">About page not pre-fetched</NuxtLink>
```

### Disable prefetching globally

To disable the prefetching on all links, set the `prefetchLinks` to `false`:

```js{}[nuxt.config.js]
export default {
  router: {
    prefetchLinks: false
  }
}
```

Since Nuxt.js v2.10.0, if you have set `prefetchLinks` to `false` but you want to prefetch a specific link, you can use the `prefetch` prop:

```html
<NuxtLink to="/about" prefetch>About page pre-fetched</NuxtLink>
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
