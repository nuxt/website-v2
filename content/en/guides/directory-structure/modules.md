---
title: modules
description: Nuxt.js provides a higher-order module system that makes it possible to extend the core. Modules are functions that are called sequentially when booting Nuxt.js.
position: 9
category: directory-structure
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/10_modules?fontsize=14&hidenavigation=1&theme=dark
img: /docs/2.x/plugins.jpg
imgAlt: modules-servermiddleware-plugins-in-nuxt-js
questions:
  - question: When are modules called?
    answers:
      - before Nuxt.js starts
      - while Nuxt.js is running
      - after Nuxt.js starts
    correctAnswer: before Nuxt.js starts
  - question: Nuxt.js modules can be incorporated into npm packages
    answers:
      - true
      - false
    correctAnswer: true
  - question: In your nuxt.config.js file under what property do you add your modules?
    answers:
      - nuxtModules
      - modules
      - plugins
    correctAnswer: modules
  - question: The order you add your modules to the nuxt.config.js file is important
    answers:
      - true
      - false
    correctAnswer: true
  - question: Where should you add your modules that are only required during development and build time?
    answers:
      - modules
      - build
      - buildModules
    correctAnswer: buildModules
  - question: What exactly are modules?
    answers:
      - arrays
      - functions
      - plugins
    correctAnswer: functions
  - question: What do we use when we want to do things only on specific conditions and not just during Nuxt.js initialization?
    answers:
      - plugins
      - hooks
      - asyncData
    correctAnswer: hooks
  - question: Modules can
    answers:
      - only be used as npm packages
      - can only be directly included in your project source code
      - both
    correctAnswer: both
  - question: Which line is required if you are publishing your module as an npm package?
    answers:
      - module.exports
      - module.exports.meta
      - module.exports.module
    correctAnswer: module.exports.meta
  - question: You can tell Nuxt.js to load modules with optional parameters as options
    answers:
      - true
      - false
    correctAnswer: true
---

## Exploring Nuxt Modules

Discover our [list of modules](https://modules.nuxtjs.org) to supercharge your Nuxt project, created by the Nuxt team and community.

- 145+ Modules
- 89+ Maintainers

<base-alert type="next">

Check out [modules.nuxtjs.org](https://modules.nuxtjs.org)

</base-alert>

<app-modal :src="img" :alt="imgAlt"></app-modal>

While developing production-grade applications with Nuxt.js you might find that the framework's core functionality is not enough. Nuxt.js can be extended with configuration options and plugins, but maintaining these customizations across multiple projects is tedious, repetitive and time-consuming. On the other hand, supporting every project's needs out of the box would make Nuxt.js very complex and hard to use.

This is one of the reasons why Nuxt.js provides a higher-order module system that makes it possible to extend the core. Modules are functions that are called sequentially when booting Nuxt.js. The framework waits for each module to finish before continuing. In this way, modules can customize almost any aspect of your project. Thanks to Nuxt.js' modular design (based on webpack's [Tapable](https://github.com/webpack/tapable)), modules can easily register hooks for certain entry points like the builder initialization. Modules can also override templates, configure webpack loaders, add CSS libraries, and perform many other useful tasks.

Best of all, Nuxt.js modules can be incorporated into npm packages. This makes it possible to reuse across projects and to share with the community, helping create an ecosystem of high-quality add-ons.

## The modules Property

Modules are Nuxt.js extensions which can extend the framework's core functionality and add endless integrations. Once you have installed the modules you can then add them to your nuxt.config.js file under the modules property.

```js{}[nuxt.config.js]
export default {
  modules: [
    // Using package name
    '@nuxtjs/axios',

    // Relative to your project srcDir
    '~/modules/awesome.js',

    // Providing options
    ['@nuxtjs/google-analytics', { ua: 'X1234567' }],

    // Inline definition
    function () {}
  ]
}
```

<base-alert type="info">

Module developers usually provide additionally needed steps and details for usage.

</base-alert>

Nuxt.js tries to resolve each item in the modules array using node require path (in the `node_modules`) and then will resolved from the project `srcDir` if `@` alias is used.

<base-alert>

Modules are executed sequentially so the order is important.

</base-alert>

Modules should export a function to enhance build/runtime and optionally return a promise until their job is finished. Note that they are imported at runtime so they should be already transpiled if using modern ES6 features.

## Write your own Module

Modules are functions. They can be packaged as npm modules or directly included in your project source code.

```js{}[nuxt.config.js]
export default {
  exampleMsg: 'hello',
  modules: [
    // Simple usage
    '~/modules/example',
    // Passing options directly
    ['~/modules/example', { token: '123' }]
  ]
}
```

```js{}[modules/example.js]
export default function ExampleModule(moduleOptions) {
  console.log(moduleOptions.token) // '123'
  console.log(this.options.exampleMsg) // 'hello'

  this.nuxt.hook('ready', async nuxt => {
    console.log('Nuxt is ready')
  })
}

// REQUIRED if publishing the module as npm package
module.exports.meta = require('./package.json')
```

## 1) ModuleOptions

`moduleOptions`: This is the object passed using the `modules` array by the user. We can use it to customize it's behavior.

### Top level options

Sometimes it is more convenient if we can use top level options while registering modules in `nuxt.config.js`. This allows us to combine multiple option sources.

```js{}[nuxt.config.js]
export default {
  modules: [['@nuxtjs/axios', { anotherOption: true }]],

  // axios module is aware of this by using `this.options.axios`
  axios: {
    option1,
    option2
  }
}
```

## 2) this.options

`this.options`: You can directly access the Nuxt.js options using this reference. This is the content of the user's `nuxt.config.js` with all default options assigned to it. It can be used for shared options between modules.

```js{}[module.js]
export default function (moduleOptions) {
  // `options` will contain option1, option2 and anotherOption
  const options = Object.assign({}, this.options.axios, moduleOptions)

  // ...
}
```

### Add a CSS Library

If your module will provide a CSS library, make sure to perform a check if the user already included the library to avoid duplicates, and add an option to disable the CSS library in the module.

```js{}[module.js]
export default function (moduleOptions) {
  if (moduleOptions.fontAwesome !== false) {
    // Add Font Awesome
    this.options.css.push('font-awesome/css/font-awesome.css')
  }
}
```

### Emit assets

We can register webpack plugins to emit assets during build.

```js{}[module.js]
export default function (moduleOptions) {
  const info = 'Built by awesome module - 1.3 alpha on ' + Date.now()

  this.options.build.plugins.push({
    apply(compiler) {
      compiler.plugin('emit', (compilation, cb) => {
        // This will generate `.nuxt/dist/info.txt' with contents of info variable.
        // Source can be buffer too
        compilation.assets['info.txt'] = {
          source: () => info,
          size: () => info.length
        }

        cb()
      })
    }
  })
}
```

## 3) this.nuxt

`this.nuxt`: This is a reference to the current Nuxt.js instance. We can register hooks on certain life cycle events.

- **Ready** : Nuxt is ready to work (ModuleContainer and Renderer ready).

```js
nuxt.hook('ready', async nuxt => {
  // Your custom code here
})
```

- **Error**: An unhandled error when calling hooks.

```js
nuxt.hook('error', async error => {
  // Your custom code here
})
```

- **Close**: Nuxt instance is gracefully closing.

```js
nuxt.hook('close', async nuxt => {
  // Your custom code here
})
```

- **Listen**: Nuxt internal server starts listening. (Using nuxt start or nuxt dev)

```js
nuxt.hook('listen', async (server, {host, port})) => {
  // Your custom code here
})
```

`this`: Context of modules. All modules will be called within context of the ModuleContainer instance.

Please look into the [ModuleContainer](/docs/2.x/internals-glossary/internals-module-container) class docs for available methods.

### Run Tasks on Specific hooks

Your module may need to do things only on specific conditions and not just during Nuxt.js initialization. We can use the powerful Nuxt.js hooks to do tasks on specific events (based on [Hable](https://github.com/jsless/hable)). Nuxt.js will wait for your function if it returns a Promise or is defined as `async`.

Here are some basic examples:

```js{}[modules/myModule.js]
export default function myModule() {
  this.nuxt.hook('modules:done', moduleContainer => {
    // This will be called when all modules finished loading
  })

  this.nuxt.hook('render:before', renderer => {
    // Called after the renderer was created
  })

  this.nuxt.hook('build:compile', async ({ name, compiler }) => {
    // Called before the compiler (default: webpack) starts
  })

  this.nuxt.hook('generate:before', async generator => {
    // This will be called before Nuxt generates your pages
  })
}
```

### Provide plugins

It is common that modules provide one or more plugins when added. For example [bootstrap-vue](https://bootstrap-vue.js.org/) module would require to register itself into Vue. In such situations we can use the `this.addPlugin` helper.

```js{}[plugin.js]
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'

Vue.use(BootstrapVue)
```

```js{}[module.js]
import path from 'path'

export default function nuxtBootstrapVue(moduleOptions) {
  // Register `plugin.js` template
  this.addPlugin(path.resolve(__dirname, 'plugin.js'))
}
```

### Template plugins

Registered templates and plugins can leverage [lodash templates](https://lodash.com/docs/4.17.4#template) to conditionally change registered plugins output.

```js{}[plugin.js]
// Set Google Analytics UA
ga('create', '<%= options.ua %>', 'auto')

<% if (options.debug) { %>
// Dev only code
<% } %>
```

```js{}[module.js]
import path from 'path'

export default function nuxtBootstrapVue(moduleOptions) {
  // Register `plugin.js` template
  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    options: {
      // Nuxt will replace `options.ua` with `123` when copying plugin to project
      ua: 123,

      // conditional parts with dev will be stripped from plugin code on production builds
      debug: this.options.dev
    }
  })
}
```

### Register custom webpack loaders

We can do the same as  `build.extend`  in  `nuxt.config.js`  using  `this.extendBuild`.

```js{}[module.js]
export default function (moduleOptions) {
    this.extendBuild((config, { isClient, isServer }) => {
      // `.foo` Loader
      config.module.rules.push({
        test: /\.foo$/,
        use: [...]
      })

      // Customize existing loaders
      // Refer to source code for Nuxt internals:
      // https://github.com/nuxt/nuxt.js/blob/dev/packages/webpack/src/config/base.js
      const barLoader = config.module.rules.find(rule => rule.loader === 'bar-loader')
  })
}
```

## Async Modules

Not all modules will do everything synchronous. For example you may want to develop a module which needs fetching some API or doing asynchronous Operation. For this, Nuxt.js supports async modules which can return a Promise or call a callback.

### Use async/await

```js
import fse from 'fs-extra'

export default async function asyncModule() {
  // You can do async work here using `async`/`await`
  const pages = await fse.readJson('./pages.json')
}
```

### Return a Promise

```js
export default function asyncModule($http) {
  return $http
    .get('https://jsonplaceholder.typicode.com/users')
    .then(res => res.data.map(user => '/users/' + user.username))
    .then(routes => {
      // Do something by extending Nuxt routes
    })
}
```

<base-alert type="info">

There are way more hooks and possibilities for modules. Please read the [Nuxt Internals](/docs/2.x/internals-glossary/internals) to find out more about the nuxt-internal API.

</base-alert>

## Publishing your module

`module.exports.meta`: This line is required if you are publishing the module as an npm package. Nuxt internally uses meta to work better with your package.

```js{}[modules/myModule.js]
module.exports.meta = require('./package.json')
```

## buildModules

Some modules are only imported during development and build time. Using `buildModules` helps to make production startup faster and also significantly decrease the size of your `node_modules` for production deployments. Please refer to the docs for each module to see if it is recommended to use `modules` or `buildModules`.

The usage difference is:

- Instead of adding to `modules` inside `nuxt.config.js`, use `buildModules`

```js{}[nuxt.config.js]
export default {
  buildModules: ['@nuxtjs/eslint-module']
}
```

- Instead of adding to `dependencies` inside `package.json`, use `devDependencies`

<code-group>
  <code-block label="Yarn" active>

```bash
yarn add -D @nuxtjs/eslint-module
```

  </code-block>
  <code-block label="NPM">

```bash
npm install --save-dev @nuxtjs/eslint-module
```

  </code-block>
</code-group>

<base-alert type="info">

If you are a module author, It is highly recommended to suggest to users to install your package as a `devDependency` and use  `buildModules` instead of `modules` for `nuxt.config.js`.

</base-alert>

Your module is a `buildModule` unless:

- It is providing a serverMiddleware
- It has to register a Node.js runtime hook (Like sentry)
- It is affecting vue-renderer behavior or using a hook from `server:` or `vue-renderer:` namespace
- Anything else that is outside of webpack scope (Hint: plugins and templates are compiled and are in webpack scope)

<base-alert> 

If you are going to offer using `buildModules` please mention that this feature is only available since Nuxt v2.9. Older users should upgrade Nuxt or use the `modules` section.

</base-alert>

<app-modal>
  <code-sandbox  :src="csb_link"></code-sandbox>
</app-modal>

<quiz :questions="questions"></quiz>
