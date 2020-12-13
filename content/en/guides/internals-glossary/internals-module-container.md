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

- **template**: same signature as [`addTemplate`](#addtemplate-template)'s `template` Object properties (`src`, `options`, and `fileName`).
  
  Remember that with [plugins](/docs/2.x/directory-structure/plugins#name-conventional-plugin), you can specify a `fileName` to be run only in `client` or in `server` sides. Avoid passing `mode` and `ssr` options, as those will be deprecated.

Registers a plugin using `addTemplate` and adds it to the top of `plugins[]` option.
  
```
this.addPlugin({
  src: path.resolve(__dirname, 'templates/foo.js'),
  /* optional */ fileName: 'foo.server.js' // will only run in server side
  options: moduleOptions
})
```

If you want, you can specify a custom path for the `fileName` too, so you can prevent name clashing and choose the folder structure inside `.nuxt` folder:

```
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
