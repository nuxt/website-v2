---
title: 'The ModuleContainer Class'
description: Nuxt ModuleContainer Class
menu: Module Container
category: internals-glossary
position: 6
---

- Source: **[core/module.js](https://github.com/nuxt/nuxt.js/blob/dev/packages/core/src/module.js)**

All [modules](/docs/2.x/directory-structure/modules) will be called within context of `ModuleContainer` instance.

## Tapable plugins

We can register hooks on certain life cycle events.

```js
nuxt.moduleContainer.plugin('ready', async moduleContainer => {
  // Do this after all modules where ready
})
```

Inside [modules](/docs/2.x/directory-structure/modules) context we can use this instead:

```js
this.plugin('ready', async moduleContainer => {
  // Do this after all modules where ready
})
```

| Plugin  | Arguments       | When                                                 |
| ------- | --------------- | ---------------------------------------------------- |
| `ready` | moduleContainer | All modules in `nuxt.config.js` has been initialized |

## Methods

### addVendor (vendor)

**Deprecated as `vendor` isn't used anymore**

Adds to `options.build.vendor` and apply unique filter.

### addTemplate (template)

- **template**: `String` or `Object`
  - `src`
  - `options`
  - `fileName`

Renders given template using [lodash template](https://lodash.com/docs/4.17.4#template) during build into project `buildDir` (`.nuxt`).

If `fileName` is not provided or `template` is string, target file name defaults to `[dirName].[fileName].[pathHash].[ext]`.

This method returns final `{ dst, src, options }` object.

### addPlugin (template)

- **template**: Object properties (`src`, `options`, `fileName`, `mode`).

Registers a plugin using `addTemplate` and prepends it it to `plugins[]` array.

```js
this.addPlugin({
  src: path.resolve(__dirname, 'templates/foo.js'),
  fileName: 'foo.server.js' // [optional] only include in server bundle
  options: moduleOptions
})
```

**Note:** You can use `mode` or `.client` and `.server` modifiers with `fileName` option to use plugin only in client or server side. (See [plugins](/docs/2.x/directory-structure/plugins#name-conventional-plugin) for all available options)

If you choose to specify a `fileName`, you can configure a custom path for the `fileName` too, so you can choose the folder structure inside `.nuxt` folder in order to prevent name collisioning:

```js
{
  fileName: path.join('folder', 'foo.client.js'), // will result in `.nuxt/folder/foo.client.js`
}
```


### addServerMiddleware (middleware)

Pushes middleware into [options.serverMiddleware](/docs/2.x/configuration-glossary/configuration-servermiddleware).

### extendBuild (fn)

Allows easily extending webpack build config by chaining [options.build.extend](/docs/2.x/configuration-glossary/configuration-build#extend) function.

### extendRoutes (fn)

Allows easily extending routes by chaining [options.build.extendRoutes](/docs/2.x/configuration-glossary/configuration-router#extendroutes) function.

### extendPlugins (fn)

Allows easily extending plugins by chaining [options.extendPlugins](/docs/2.x/configuration-glossary/configuration-extend-plugins) function.

### addModule (moduleOpts, requireOnce)

_Async function_

Registers a module. `moduleOpts` can be a string or an array (`[src, options]`). If `requireOnce` is `true` and the resolved module exports `meta`, it prevents registering same module twice.

### requireModule (moduleOpts)

_Async function_

Is a shortcut for `addModule(moduleOpts, true)`

## Hooks

We can register hooks on certain life cycle events.

| Hook             | Arguments                  | When                                                                                  |
| ---------------- | -------------------------- | ------------------------------------------------------------------------------------- |
| `modules:before` | (moduleContainer, options) | Called before creating ModuleContainer class, useful to overload methods and options. |
| `modules:done`   | (moduleContainer)          | Called when all modules have been loaded.                                             |
