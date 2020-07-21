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

See more on the [build property](/guides/configuration-glossary/configuration-build)

</base-alert>

### css

This option lets you define the CSS files, modules, and libraries you want to include globally (on every page).

```js{}[nuxt.config.js]
export default {
  css: ['~/assets/css/main.css']
}
```

<base-alert type="next">

See more on the [css property](/guides/configuration-glossary/configuration-css)

</base-alert>

### dev

This option lets you define the `development` or `production` mode of Nuxt.js (important when you use Nuxt.js programatically)

```js{}[nuxt.config.js]
export default {
  dev: process.env.NODE_ENV !== 'production'
}
```

<base-alert type="next">

See more on the [dev property](/guides/configuration-glossary/configuration-dev)

</base-alert>

### env

This option lets you define environment variables that are available to both client and server.

```js{}[nuxt.config.js]
export default {
  env: {
    baseUrl: process.env.BASE_URL || baseUrl
  }
}
```

<base-alert type="next">

See more on the [env property](/guides/configuration-glossary/configuration-env)

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

See more on the [generate property](/guides/configuration-glossary/configuration-generate)

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

See more on [head integration](/guides/configuration-glossary/configuration-head)

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

See more on [loading integration](/guides/configuration-glossary/configuration-loading)

</base-alert>

### modules

With this option you can add Nuxt.js modules to your project.

```js{}[nuxt.config.js]
export default {
  modules: ['@nuxtjs/axios']
}
```

<base-alert type="next">

See more on the [modules property](/guides/configuration-glossary/configuration-modules)

</base-alert>

### plugins

This option lets you define JavaScript plugins that should be run before instantiating the root Vue.js application.

```js{}[nuxt.config.js]
export default {
  plugins: ['~/plugins/url-helpers.js']
}
```

<base-alert type="next">

See more on the [plugins property](/guides/configuration-glossary/configuration-plugins)

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

See more on the [router property](/guides/configuration-glossary/configuration-router)

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

See more on the [server property](/guides/configuration-glossary/configuration-server)

</base-alert>

### srcDir

This option lets you define the source directory of your Nuxt.js application.

```js{}[nuxt.config.js]
export default {
  srcDir: 'client/'
}
```

Project structure example with your Nuxt.js application in the `source` directory.

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

See more on the [dir property](/guides/configuration-glossary/configuration-dir)

</base-alert>

### pageTransition

This option lets you define the default properties of the page transitions.

```js{}[nuxt.config.js]
export default {
  pageTransition: 'page'
}
```

<base-alert type="next">

See more on the [transition property](/guides/configuration-glossary/configuration-transition)

</base-alert>

## Other configuration files

Besides the `nuxt.config.js` there might be other config files in your project root, such as [.eslintrc](https://eslint.org/), [prettier.config.json](https://prettier.io/) or [.gitignore](https://git-scm.com/docs/gitignore). These are used to configure other tools such as your linter, code formatter or your git repository and detached from the `nuxt.config.js`.

### .gitignore

In your .gitignore file you will need to add the following so that they are ignored and not added to version control. `node_modules` which is where all your installed modules are. The `nuxt` folder which is what gets created when running the dev or build commands. The `dist` folder is the folder that gets created when running the generate command.

```markdown{}[.gitignore]
node_modules .nuxt dist
```

<app-modal>
  <code-sandbox  :src="csb_link"></code-sandbox>
</app-modal>

### What's next

<base-alert type="next">

Check out the [configuration-glossary](/guides/configuration-glossary/configuration-build)

</base-alert>
