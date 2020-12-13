---
title: nuxt.config
description: By default, Nuxt.js is configured to cover most use cases. This default configuration can be overwritten with the nuxt.config.js file.
position: 14
category: directory-structure
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/15_nuxt-config?fontsize=14&hidenavigation=1&theme=dark
questions:
  - question:
    answers:
      -
      -
      -
    correctAnswer:
  - question:
    answers:
      -
      -
      -
    correctAnswer:
  - question:
    answers:
      -
      -
      -
    correctAnswer:
  - question:
    answers:
      -
      -
      -
    correctAnswer:
---

By default, Nuxt.js is configured to cover most use cases. This default configuration can be overwritten with the nuxt.config.js file.

## nuxt.config.js

### build

This option lets you configure various settings for the `build` step, including `loaders`, `filenames`, the `webpack` config and `transpilation`.

```js{}[nuxt.config.js]
export default {
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
```

<base-alert type="next">

See more on the [build property](/docs/2.x/configuration-glossary/configuration-build)

</base-alert>

### css

This option lets you define the CSS files, modules, and libraries you want to include globally (on every page).

```js{}[nuxt.config.js]
export default {
  css: ['~/assets/css/main.css', '~/assets/css/animations.scss']
}
```

You can omit the file extension for CSS, SCSS, Postcss, Less, Stylus, ... files listed in the css array in your nuxt config file.

```js{}[nuxt.config.js]
export default {
  css: ['~/assets/css/main', '~/assets/css/animations']
}
```

By omitting the extension, if you have a css file and decide to change to use sass for example, you won't have to update your nuxt.config as it will use the new extension once the filename remains the same.

<base-alert type="next">

See more on the [css property](/docs/2.x/configuration-glossary/configuration-css)

</base-alert>

### dev

This option lets you define the `development` or `production` mode of Nuxt.js (important when you use Nuxt.js programmatically)

```js{}[nuxt.config.js]
export default {
  dev: process.env.NODE_ENV !== 'production'
}
```

<base-alert type="next">

See more on the [dev property](/docs/2.x/configuration-glossary/configuration-dev)

</base-alert>

### env

This option lets you define environment variables that are required at build time rather than runtime such as `NODE_ENV=staging` or `VERSION=1.2.3`. However for runtime environment variables the runtime config` is preferred.

```js{}[nuxt.config.js]
export default {
  env: {
    baseUrl: process.env.BASE_URL
  }
}
```

### runtimeConfig

The runtime config has built-in dotenv support providing better security and faster development. The runtime config is added to the Nuxt payload so there is no need to rebuild in order to update the runtime configuration when working in development or with Server-side rendering or client side only applications. Although for static sites you will still need to regenerate your site to see these changes.

#### `publicRuntimeConfig`

- should hold all env variables that are public as these will be exposed on the frontend. This could include a reference to your public URL for example.
- is available using `$config` in both server and client.

```js{}[nuxt.config.js]
export default {
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || 'https://nuxtjs.org'
  }
}
```

#### `privateRuntimeConfig`

- should hold all env variables that are private and that should not be exposed on the frontend. This could include a reference to your API secret tokens for example.
- is only available on server using same `$config` (it overrides publicRuntimeConfig)

```js{}[nuxt.config.js]
export default {
  privateRuntimeConfig: {
    apiSecret: process.env.API_SECRET
  }
}
```

#### **Using your config values:**

You can then access these values anywhere by using the context in your pages, store, components and plugins by using `this.$config` or `context.$config`.

```html{}[pages/index.vue]
<script>
  asyncData ({ $config: { baseURL } }) {
    const posts = await fetch(`${baseURL}/posts`)
      .then(res => res.json())
  }
</script>
```

Inside your templates you can access your runtimeConfigs directly using `$config.*`

```html{}[pages/index.vue]
<template>
  <p>Our Url is: {{ $config.baseURL}}</p>
</template>
```

<base-alert type="warn">

Your private config could be exposed if you use `$config` outside of a server-only context (for example, if you use `$config` in `fetch`, `asyncData` or directly inside your template).

</base-alert>

<base-alert type="next">

See more on the [runtimeConfig](/docs/2.x/configuration-glossary/configuration-runtime-config)

</base-alert>

<base-alert type="next">

See our blog post on [Moving from @nuxtjs/dotenv to runtime config](/blog/moving-from-nuxtjs-dotenv-to-runtime-config)

</base-alert>

<base-alert type="next">

See more on the [env property](/docs/2.x/configuration-glossary/configuration-env)

</base-alert>

### generate

This option lets you set up parameter values for every dynamic route in your application that will be transformed into HTML files by Nuxt.js.

```js{}[nuxt.config.js]
export default {
  generate: {
    dir: 'gh_pages', // gh_pages/ instead of dist/
    subFolders: false // HTML files are generated according to the route path
  }
}
```

<base-alert type="next">

See more on the [generate property](/docs/2.x/configuration-glossary/configuration-generate)

</base-alert>

### head

```js{}[nuxt.config.js]
export default {
	head: {
    title: 'my title',
    meta: [
      { charset: 'utf-8' },
			.....
		]
	}
}
```

This option lets you define all default meta tags for your application.

<base-alert type="next">

See more on [head integration](/docs/2.x/configuration-glossary/configuration-head)

</base-alert>

### loading

This option lets you customize the loading component that Nuxt.js uses by default.

```js{}[nuxt.config.js]
export default {
  loading: {
    color: '#fff'
  }
}
```

<base-alert type="next">

See more on [loading integration](/docs/2.x/configuration-glossary/configuration-loading)

</base-alert>

### modules

With this option you can add Nuxt.js modules to your project.

```js{}[nuxt.config.js]
export default {
  modules: ['@nuxtjs/axios']
}
```

<base-alert type="next">

See more on the [modules property](/docs/2.x/configuration-glossary/configuration-modules)

</base-alert>

### modulesDir

The modulesDir property is used to set the modules directories for path resolving. For example: Webpack's resolveLoading, nodeExternals and postcss. The configuration path is relative to `options.rootDir` (default: process.cwd()).

```js{}[nuxt.config.js]
export default {
  modulesDir: ['../../node_modules']
}
```

Setting this field may be necessary if your project is organized as a Yarn workspace-styled mono-repository.

<base-alert type="next">

See more on the [modulesDir property](/docs/2.x/configuration-glossary/configuration-modulesdir)

</base-alert>

### plugins

This option lets you define JavaScript plugins that should be run before instantiating the root Vue.js application.

```js{}[nuxt.config.js]
export default {
  plugins: ['~/plugins/url-helpers.js']
}
```

<base-alert type="next">

See more on the [plugins property](/docs/2.x/configuration-glossary/configuration-plugins)

</base-alert>

### router

With the `router` option you can overwrite the default Nuxt.js configuration of Vue Router.

```js{}[nuxt.config.js]
export default {
  router: {
    linkExactActiveClass: 'text-primary'
  }
}
```

<base-alert type="next">

See more on the [router property](/docs/2.x/configuration-glossary/configuration-router)

</base-alert>

### server

This option lets you configure the connection variables for the server instance of your Nuxt.js application.

```js{}[nuxt.config.js]
import path from 'path'
import fs from 'fs'

export default {
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'server.key')),
      cert: fs.readFileSync(path.resolve(__dirname, 'server.crt'))
    }
  }
}
```

<base-alert type="next">

See more on the [server property](/docs/2.x/configuration-glossary/configuration-server)

</base-alert>

### srcDir

This option lets you define the source directory of your Nuxt.js application.

```js{}[nuxt.config.js]
export default {
  srcDir: 'client/'
}
```

Project structure example with your Nuxt.js application in the `client` directory.

```bash
**-| app/
---| node_modules/
---| nuxt.config.js
---| package.json
---| client/
------| assets/
------| components/
------| layouts/
------| middleware/
------| pages/
------| plugins/
------| static/
------| store/**
```

### dir

This option lets you define custom names of your Nuxt.js directories.

```js{}[nuxt.config.js]
export default {
  pages: 'views' // Nuxt will look for the views/ instead of the pages/ folder
}
```

<base-alert type="next">

See more on the [dir property](/docs/2.x/configuration-glossary/configuration-dir)

</base-alert>

### pageTransition

This option lets you define the default properties of the page transitions.

```js{}[nuxt.config.js]
export default {
  pageTransition: 'page'
}
```

<base-alert type="next">

See more on the [transition property](/docs/2.x/configuration-glossary/configuration-transition)

</base-alert>

## Other configuration files

Besides the `nuxt.config.js` there might be other config files in your project root, such as [.eslintrc](https://eslint.org/), [prettier.config.json](https://prettier.io/) or [.gitignore](https://git-scm.com/docs/gitignore). These are used to configure other tools such as your linter, code formatter or your git repository and detached from the `nuxt.config.js`.

### .gitignore

In your .gitignore file you will need to add the following so that they are ignored and not added to version control. `node_modules` which is where all your installed modules are. The `nuxt` folder which is what gets created when running the dev or build commands. The `dist` folder is the folder that gets created when running the generate command.

```markdown{}[.gitignore]
node_modules .nuxt dist
```

### What's next

<base-alert type="next">

Check out the [configuration-glossary](/docs/2.x/configuration-glossary/configuration-build)

</base-alert>
