---
title: 'The components Property'
description: 'Nuxt.js 2.13+ can scan and auto import your components using @nuxt/components module'
menu: components
category: configuration-glossary
position: 5
---

> Nuxt.js 2.13+ can scan and auto import your components.

- Type: `Boolean` or `Object`
- Default: `false`

When set to `true` or using an object, Nuxt will use [@nuxt/components](https://github.com/nuxt/components) to auto-import the components you use.

### Basic Usage

```js{}[nuxt.config.js]
export default {
  components: true
}
```

This means that any components in the `~/components` directory can then be used throughout your pages, layouts (and other components) without needing to explicitly import them.

```bash
components/
  TheHeader.vue
  TheFooter.vue
```

```html{}[layouts/default.vue]
<template>
  <div>
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>
```

<base-alert>

The component name will be based on the full path (directory and filename).

If you have components in nested directories, this will affect the component name. Consider this directory structure:

```bash
| components/
---| base/
-----| custom/
-------| Button.vue
```

In this case the component can be auto-imported with:

```html
<BaseCustomButton />
```

</base-alert>


### Dynamic Imports

To dynamically import a component (also known as lazy-loading a component) all you need to do is add the `Lazy` prefix to the component name.

```html{}[layouts/default.vue]
<template>
  <div>
    <TheHeader />
    <Nuxt />
    <LazyTheFooter />
  </div>
</template>
```

This is particularly useful if the component is not always needed. By using the `Lazy` prefix you can delay delay loading the component code until the right moment, which can be helpful for optimizing your JavaScript bundle size.

```html{}[pages/index.vue]
<template>
  <div>
    <h1>Mountains</h1>
    <LazyMountainsList v-if="show" />
    <button v-if="!show" @click="show = true">Show List</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  }
}
</script>
```

### Custom Directory Options

Alternatively, you can take full control with an array of directories or directory objects.

```js{}[nuxt.config.js]
export default {
  components: [
    // Equivalent to { path: '~/components/custom' }
    '~/components/custom',
    { path: '~/components/other', extensions: ['vue'] }
  ]
}
```

#### path

- Required
- Type: `String`

Path (absolute or relative) to the directory containing your components.

You can use Nuxt aliases (`~` or `@`) to refer to directories inside the project or directly use a npm package path (similar to using `require` within your project).

#### extensions

- Type: `Array<string>`
- Default:
  - Extensions supported by Nuxt builder (`builder.supportedExtensions`)
  - Default supported extensions `['vue', 'js']` or `['vue', 'js', 'ts', 'tsx']` depending on your environment

**Example:** Support multi-file component structure

If you prefer to split your SFCs into `.js`, `.vue` and `.css`, you could choose only to scan for `.vue` files:

```
| components
---| componentC
------| componentC.vue
------| componentC.js
------| componentC.scss
```

```js
// nuxt.config.js
export default {
  components: [
    { path: '~/components', extensions: ['vue'] }
  ]
}
```

#### pattern

- Type: `string` ([glob pattern]( https://github.com/isaacs/node-glob#glob-primer))
- Default: `**/*.${extensions.join(',')}`

Within the specified `path`, only files that match this pattern will be included.

#### ignore

- Type: `Array`
- Items: `string` ([glob pattern]( https://github.com/isaacs/node-glob#glob-primer))
- Default: `[]`

Patterns to exclude files within the specified `path`.

#### prefix

- Type: `String`
- Default: `''` (no prefix)

Prefix all matched components.

The example below adds the `awesome-`/`Awesome` prefix to the name of components in the `awesome/` directory.

```js
// nuxt.config.js
export default {
  components: [
    '~/components',
    { path: '~/components/awesome/', prefix: 'awesome' }
  ]
}
```

```bash
components/
  awesome/
    Button.vue
  Button.vue
```

```html
<template>
  <div>
    <AwesomeButton>Click on me 🤘</AwesomeButton>
    <Button>Click on me</Button>
  </div>
</template>
```

#### pathPrefix

- Type: `Boolean`
- Default: `true`

Prefix component name by its path.

#### watch

- Type: `Boolean`
- Default: `true`

Watch the specified `path` for changes, including file additions and file deletions.

#### transpile

- Type: `Boolean`
- Default: `'auto'`

Transpile specified `path` using [`build.transpile`](https://nuxtjs.org/api/configuration-build#transpile). By default (`'auto'`) it will set `transpile: true` if `node_modules/` is in `path`.

#### level

- Type: `Number`
- Default: `0`

Levels are used to define allow overwriting components that have the same name in two different directories. This can be useful for library authors who want to allow users to override their components, or for custom themes.

```js
export default {
  components: [
    '~/components', // default level is 0
   { path: 'my-theme/components', level: 1 }
  ]
}
```

A component in `~/components` will then overwrite one with the same name in `my-theme/components`. The lowest value takes priority.

<base-alert type="info">

Please refer to the [nuxt/components](https://github.com/nuxt/components) repository for full usage details.

</base-alert>
