---
title: 'La propiedad ignore'
description: Define los archivos a ignorar para tu aplicación Nuxt.js
menu: ignore
category: configuration-glossary
position: 14
---

## .nuxtignore

Puedes usar un fichero `.nuxtignore` para permitir que Nuxt.js ignore ficheros `layout`, `page`, `store` y `middleware` en el directorio raíz de tu proyecto (`rootDir`) durante la fase build. El fichero `.nuxtignore` sigue la misma especificación que `.gitignore` y `.eslintignore`, según la cual cada línea es un patrón glob, que indica qué ficheros deberían ser ignorados.

Por ejemplo:

```
# ignorar el layout foo.vue
layouts/foo.vue
# ignorar ficheros layout cuyo nombre acabe en -ignore.vue
layouts/*-ignore.vue

# ignorar la página bar.vue
pages/bar.vue
# ignorar las páginas dentro de la carpeta ignore
pages/ignore/*.vue

# ignorar store baz.js
store/baz.js
# ignorar ficheros store que coincidan con *.test.*
store/ignore/*.test.*

# ignorar ficheros middleware en la carpeta foo excepto foo/bar.js
middleware/foo/*.js
!middleware/foo/bar.js
```

> Puedes encontrar más detalles sobre la especificación en [la documentación de gitignore](https://git-scm.com/docs/gitignore)

## La propiedad ignorePrefix

- Tipo: `String`
- Por defecto: `'-'`

> Cualquier fichero en pages/, layouts/, middleware/ o store/ será ignorado durante la fase build si su nombre empieza con el prefijo especificado por `ignorePrefix`.

Por defecto, todos los ficheros que empiecen por `-` serán ignorados, como por ejemplo `store/-foo.js` y `pages/-bar.vue`. Esto habilita tests de co-localización, utilidades, y componentes con sus callers, sin que ellos mismos sean convertidos a routes, stores, etc.

## La propiedad ignore

- Tipo: `Array`
- Por defecto: `['**/*.test.*']`

> Más personalizable que `ignorePrefix`: todos los ficheros que coincidan con los patrones glob definidos en `ignore` serán ignorados en la fase build.

## ignoreOptions

`nuxtignore` usa `node-ignore` bajo el capó, `ignoreOptions` puede ser configurado como `options` de `node-ignore`.

```js{}[nuxt.config.js]
export default {
  ignoreOptions: {
    ignorecase: false
  }
}
```
