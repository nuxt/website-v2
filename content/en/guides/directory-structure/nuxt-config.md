---
title: nuxt.config
description: By default, Nuxt.js is configured to cover most use cases. This default configuration can be overwritten with the nuxt.config.js file.
position: 14
category: Directory Structure
categoryPosition: 4
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

# nuxt.config.js

### build

This option lets you configure various settings for the `build` step, including `loaders`, `filenames`, the `webpack` config and `transpilation`.

`nuxt.config.js`

```js
export default {
	build: {
	    /*
	     ** You can extend webpack config here
	     */
	    extend(config, ctx) {}
	  }
}
```

➡️ See more on the  [build property](/api/configuration-build)

### css

This option lets you define the CSS files, modules, and libraries you want to include globally (on every page).

`nuxt.config.js`

```js
export default {
	css: [
	    '~/assets/css/main.css',
	  ],
}
```

➡️ See more on the [css property](/api/configuration-css)

### dev

This option lets you define the `development` or `production` mode of Nuxt.js (important when you use Nuxt.js programatically)

`nuxt.config.js`

```js
export default {
  dev: (process.env.NODE_ENV !== 'production')
}
```

➡️ See more on the [dev property](/api/configuration-dev)

### env

This option lets you define environment variables that are available to both client and server.

`nuxt.config.js`

```js
export default {
	env: {
	    baseUrl: process.env.BASE_URL || baseUrl
	}
}
```

➡️ See more on the [env property](/api/configuration-env)

### generate

This option lets you set up parameter values for every dynamic route in your application that will be transformed into HTML files by Nuxt.js.

`nuxt.config.js`

```js
export default {
	generate: {
	   dir: 'gh_pages', // gh_pages/ instead of dist/
		 subFolders: false // HTML files are generated according to the route path
	}
}
```

➡️ See more on the [generate property](/api/configuration-generate)

### head

`nuxt.config.js`

```js
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

➡️ See more on  [head integration](/api/configuration-head)

### loading

This option lets you customize the loading component that Nuxt.js uses by default.

`nuxt.config.js`

```js
export default {
	loading: {
	    color: '#fff'
	  },
}
```

➡️ See more on [loading integration](/api/configuration-loading)

### modules

`nuxt.config.js`

With this option you can add Nuxt.js modules to your project.

```js
export default {
	modules: [
    '@nuxtjs/axios',
  ],
}
```

➡️ See more on the [modules property](/api/configuration-modules)

### plugins

This option lets you define JavaScript plugins that should be run before instantiating the root Vue.js application.

`nuxt.config.js`

```js
export default {
	plugins: [
    '~/plugins/url-helpers.js',
  ],
}
```

➡️ See more on the [plugins property](/api/configuration-plugins)

### router

With the `router` option you can overwrite the default Nuxt.js configuration of Vue Router.

`nuxt.config.js`

```js
export default {
	router: {
    linkExactActiveClass: 'text-primary'
  },
}
```

➡️ See more on the [router property](/api/configuration-router)

### server

This option lets you configure the connection variables for the server instance of your Nuxt.js application.

`nuxt.config.js`

```js
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

➡️ See more on the [server property](/api/configuration-server)

### srcDir

This option lets you define the source directory of your Nuxt.js application.

`nuxt.config.js`

```js
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

`nuxt.config.js`

```js
export default {
	pages: 'views' // Nuxt will look for the views/ instead of the pages/ folder 
}
```

➡️ See more on the [dir property](/api/configuration-dir)

### pageTransition

This option lets you define the default properties of the page transitions.

`nuxt.config.js`

```js
export default {
	pageTransition: 'page'
}
```

➡️ See more on the [transition property](/api/configuration-transition)

# Other configuration files

Besides the `nuxt.config.js` there might be other config files in your project root, such as [.eslintrc](https://eslint.org/), [prettier.config.json](https://prettier.io/) or [.gitignore](https://git-scm.com/docs/gitignore). These are used to configure other tools such as your linter, code formatter or your git repository and detached from the `nuxt.config.js`.

### .gitignore

In your .gitignore file you will need to add the following so that they are ignored and not added to version control. `node_modules` which is where all your installed modules are. The `nuxt` folder which is what gets created when running the dev or build commands. The `dist` folder is the folder that gets created when running the generate command. 

`.gitignore`

```markdown
node_modules
.nuxt
dist
```
