---
title: Vistas 
description: La sección de vistas describe todo lo que necesitas saber para configurar los datos y las vistas para una ruta específica en tu aplicación Nuxt.js . Las Vistas consisten en una plantilla de la aplicación, un diseño (layout), y la propia página.
position: 1
category: concepts
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/02_concepts/01_views?fontsize=14&hidenavigation=1&theme=dark
questions:
- question: Cuál es el orden de composición de una vista Nuxt (de arriba a abajo) ?
answers:
- Layout → Page → Document
- Page → Layout → Document
- Document → Layout → Page
correctAnswer: Document → Layout → Page
- question: Cómo es llamado el diseño (layout) por defecto ?
answers:
- default.vue
- layout.vue
- defaultLayout.vue
correctAnswer: default.vue
- question: Cómo crear un diseño(layout) personalizado ?
answers:
- añadir un .vue archivo a la carpeta de pages 
- añadir un .vue archivo a la carpeta de layouts 
- añadir un .vue archivo a la carpeta de components 
correctAnswer: añadir un .vue archivo a la carpeta de layouts 
- question: Cómo activas tu diseño personalizado llamado 'blog' en tu página ?
answers:
- "layout: 'blog'"
- "layout: 'default'"
- "blog: 'blog'"
correctAnswer: "layout: 'blog'"
- question: Dónde pones tu archivo error.vue para crear una página de error personalizada ?
answers:
- en la carpeta pages 
- en la carpeta errors 
- en la carpeta layouts 
correctAnswer: en la carpeta layouts 
---

La sección de vistas describe todo lo que necesitas saber para configurar los datos y las vistas para una ruta específica en tu aplicación Nuxt.js . Las Vistas consisten en una plantilla de la aplicación, un diseño (layout), y la propia página. Adicionalmente, se pueden definir etiquetas meta personalizadas para la sección de cabecera(head) de cada página, las cuales son importantes para el SEO (Search Engine Optimization).

![Composition of a View in Nuxt.js](/guides/views.png)

Composición de una vista en Nuxt.js

## Páginas

Cada página es un componente Vue, pero Nuxt.js añade algunos atributos y funciones adicionales para hacer el desarrollo de tu aplicación lo más fácil posible.

```html{}[pages/index.vue]
<template>
<h1 class="red">Hello World</h1>
</template>

<script>
export default {
head() {
// Aquí se definen las etiquetas meta de la página
}
// ...
}
</script>

<style>
.red {
color: red;
}
</style>
```

## Propiedades de un componente página

Hay muchas propiedades de un componente página, como la cabeza(head) del ejemplo anterior.

<base-alert type="next">

Ver [Directory Structure book](/guides/directory-structure/nuxt) para aprender más sobre todas las propiedades de un componente página.

</base-alert>

## Diseños (Layouts)

Los diseños son de gran ayuda cuando queremos cambiar la apariencia de nuestra aplicación.
Por ejemplo cuando queremos incluir un sidebar, tener un layout distinto para móvil, o definir una navegación global para varias páginas.

### Definiendo un Diseño 

Puedes definir un diseño por defecto añadiendo un archivo `default.vue` en la carpeta de layouts. Este será usado por todas las paginas que no definan una propiedad `layout`. El requerimiento mínimo es que incluyas el componente `<Nuxt />` que es el que renderizará el componente página.

```html{}[layouts/default.vue]
<template>
<Nuxt />
</template>
```

<base-alert type="next">

Aprende más sobre [Nuxt component](/guides/features/nuxt-components) en el capítulo componentes.

</base-alert>

### Diseños personalizados 

Puedes crear diseños personalizados añadiendo un archivo `.vue` en la carpeta de layouts.
Para poder usarlos en una página necesitas definir en ella la propiedad `layout`.
El valor será el nombre del diseño creado.

Para crear un diseño blog se añade un `blog.vue` a la carpeta de layouts `layouts/blog.vue`:

```html{}[layouts/blog.vue]
<template>
<div>
<div>Aquí la navegación de mi blog</div>
<Nuxt />
</div>
</template>
```

<base-alert>

Recuerda de añadir el componente `<Nuxt/>` cuando crees un diseño para que pueda incluir el componente la página.

</base-alert>

Entonces definimos la propiedad `layout` con el valor de 'blog' en la página que queremos usar ese diseño.

```html{}[pages/posts.vue]
<template>
<!-- Acá tu template -->
</template>
<script>
export default {
layout: 'blog'
// definiciones del componente página
}
</script>
```

<base-alert type="info">

Si no añades una propiedad layout a la página, como por ejemplo `layout: 'blog'`, entonces el diseño utilizado será `default.vue`.

</base-alert>

<app-modal>
<code-sandbox :src="csb_link"></code-sandbox>
</app-modal>

### La página de error

La página de error es un *componente página* que es mostrado cuando algún error ocurre (esto no sucede cuando estamos renderizando en el server)

<base-alert>

Aunque está situado en la carpeta de `layouts`, debe ser tratado como una página.

</base-alert>

Como mencionamos arriba, este diseño es especial, no se debe incluir el componente `<Nuxt/>` 
Debes verlo como un componente que se muestra cuando algún error ocurre (`404`, `500`, etc.).
Al igual que otros componentes página, puedes definir un diseño personalizado como discutimos arriba.

Puedes personalizar la página de error añadiendo un archivo `layouts/error.vue` :

```html{}[layouts/error.vue]
<template>
<div>
<h1 v-if="error.statusCode === 404">Página no encontrada</h1>
<h1 v-else>Sucedió algún error</h1>
<NuxtLink to="/">Home page</NuxtLink>
</div>
</template>

<script>
export default {
props: ['error'],
layout: 'error' // diseño personalizado
}
</script>
```

## Documento: App.html

La plantilla app es usada para crear el verdadero documento HTML donde tu aplicación Nuxt.js inyectará el contenido así como las variables para la cabeza(head) y el cuerpo(body).
Este archivo es creado automáticamente y rara vez necesita ser modificado. Puedes personalizar 
el HTML de la plantilla para incluir scripts o clases CSS condicionales, creando un archivo `app.html` en la carpeta de source de tu proyecto que por defecto es la carpeta raíz.

La plantilla por defecto usada por Nuxt.js es:

```html{}[app.html]
<!DOCTYPE html>
<html {{ HTML_ATTRS }}>
<head {{ HEAD_ATTRS }}>
{{ HEAD }}
</head>
<body {{ BODY_ATTRS }}>
{{ APP }}
</body>
</html>
```

Un caso de uso puede ser adicionar clases condicionales de CSS para IE:

```html{}[app.html]
<!DOCTYPE html>
<!--[if IE 9]><html class="lt-ie9 ie9" {{ HTML_ATTRS }}><![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--><html {{ HTML_ATTRS }}><!--<![endif]-->
<head {{ HEAD_ATTRS }}>
{{ HEAD }}
</head>
<body {{ BODY_ATTRS }}>
{{ APP }}
</body>
</html>
```

<base-alert type="info">

En vez de añadir JavaScript y CSS en el `app.html` es recomendable que usar el archivo `nuxt.config.js` para esto.

</base-alert>

<quiz :questions="questions"></quiz>
