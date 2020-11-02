---
title: 'Nuxt Modules Intro'
description: Better understand Nuxt internals
menu: Nuxt Modules
category: internals-glossary
position: 3
---

Nuxt.js has a fully modular architecture which allows developers extending any part of Nuxt Core using a flexible API.

Please see [Modules Guide](/docs/2.x/directory-structure/modules) for more detailed information if interested developing your own module.

This section helps getting familiar to Nuxt internals and can be used as a reference to understand it better while writing your own modules.

### Core

These classes are the heart of Nuxt and should exist on both runtime and build time.

#### Nuxt

- [`Nuxt` Class](/docs/2.x/internals-glossary/nuxt)
- Source: [core/nuxt.js](https://github.com/nuxt/nuxt.js/blob/dev/packages/core/src/nuxt.js)

#### Renderer

- [`Renderer` Class](/docs/2.x/internals-glossary/internals-renderer)
- Source: [vue-renderer/renderer.js](https://github.com/nuxt/nuxt.js/blob/dev/packages/vue-renderer/src/renderer.js)

#### ModuleContainer

- [`ModuleContainer` Class](/docs/2.x/internals-glossary/internals-module-container)
- Source: [core/module.js](https://github.com/nuxt/nuxt.js/blob/dev/packages/core/src/module.js)

### Build

These classes are only needed for build or dev mode.

#### Builder

- [`Builder` Class](/docs/2.x/internals-glossary/internals-builder)
- Source: [builder/builder.js](https://github.com/nuxt/nuxt.js/blob/dev/packages/builder/src/builder.js)

#### Generator

- [`Generator` Class](/docs/2.x/internals-glossary/internals-generator)
- Source: [generator/generator.js](https://github.com/nuxt/nuxt.js/blob/dev/packages/generator/src/generator.js)

### Common

#### Utils

- Source: [utils/src](https://github.com/nuxt/nuxt.js/blob/dev/packages/utils/src)

#### Options

- Source: [config/options.js](https://github.com/nuxt/nuxt.js/blob/dev/packages/config/src/options.js)

## Packaging & Usage

Nuxt exports all classes by default. To import them:

```js
import { Nuxt, Builder, Utils } from 'nuxt'
```

## Common patterns

All Nuxt classes have a reference to `nuxt` instance and options, this way we always have a consistent API across classes to access `options` and `nuxt`.

```js
class SomeClass {
  constructor(nuxt) {
    super()
    this.nuxt = nuxt
    this.options = nuxt.options
  }

  someFunction() {
    // We have access to `this.nuxt` and `this.options`
  }
}
```

Classes are _pluggable_ so they should register a plugin on main `nuxt` container to register more hooks.

```js
class FooClass {
  constructor(nuxt) {
    super()
    this.nuxt = nuxt
    this.options = nuxt.options

    this.nuxt.callHook('foo', this)
  }
}
```

So we can hook into `foo` module like this:

```js
nuxt.hook('foo', foo => {
  // ...
})
```
