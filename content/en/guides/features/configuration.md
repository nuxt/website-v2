---
title: Configuration
description: By default, Nuxt.js is configured to cover most use cases. This default configuration can be overwritten with the nuxt.config.js file.
position: 7
category: features
csb_link_host_port: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/03_features/07_configuration_host_port?fontsize=14&hidenavigation=1&theme=dark
csb_link_pre-processors: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/03_features/07_configuration_pre-processors?fontsize=14&hidenavigation=1&theme=dark
questions:
  - question: You can use the axios-module in the nuxt.config.js?
    answers:
      - true
      - false
    correctAnswer: false
  - question: What is the default Nuxt.js development server host?
    answers:
      - localhost
      - 3000
      - '0'
    correctAnswer: localhost
  - question: Which attribute do you use in your style tag to use SCSS?
    answers:
      - lang="scss"
      - language="scss"
      - style="scss"
    correctAnswer: lang="scss"
  - question: What is the default Nuxt.js development server port?
    answers:
      - 8000
      - 3000
      - localhost
    correctAnswer: 3000
  - question: In the nuxt.config.js what property do you use to add global CSS files?
    answers:
      - styles
      - css
      - globalCss
    correctAnswer: css
  - question: You can use JSX in your Nuxt.js application?
    answers:
      - True
      - False
    correctAnswer: True
  - question: In the nuxt.config.js what property do you use to add global CSS files?
    answers:
      - styles
      - css
      - global-css
    correctAnswer: css
  - question: In the nuxt.config.js what property do you use to extend the webpack config?
    answers:
      - webpack.extend
      - build.extend
      - extend.build
    correctAnswer: build.extend
  - question: What is the file called for ignoring files in your Nuxt.js app?
    answers:
      - .ignore
      - .nuxtignore
      - .ignorenuxt
    correctAnswer: .nuxtignore
  - question: If you want to ignore the about file of your Nuxt.js app what prefix would you use?
    answers:
      - _about.vue
      - -about.vue
      - __about.vue
    correctAnswer: -about.vue
---

By default, Nuxt.js is configured to cover most use cases. This default configuration can be overwritten with the nuxt.config.js file.

## The css Property

Nuxt.js lets you define the CSS files/modules/libraries you want to set globally (included in every page).

<base-alert>

In case you want to use `sass` make sure that you have installed the `sass` and `sass-loader` packages.

</base-alert>

In `nuxt.config.js`, add the CSS resources:

```js{}[nuxt.config.js]
export default {
  css: [
    // Load a Node.js module directly (here it's a Sass file)
    'bulma',
    // CSS file in the project
    '~/assets/css/main.css',
    // SCSS file in the project
    '~/assets/css/main.scss'
  ]
}
```

<base-alert>

Nuxt.js will automatically guess the file type by its extension and use the appropriate pre-processor loader for webpack. You will still need to install the required loader if you need to use them.

</base-alert>

### Style Extensions

You can omit the file extension for CSS/SCSS/Postcss/Less/Stylus/... files listed in the css array in your nuxt config file.

```js{}[nuxt.config.js]
export default {
  css: ['~/assets/css/main', '~/assets/css/animations']
}
```

<base-alert>

If you have two files with the same name, e.g. `main.scss` and `main.css`, and don't specify an extension in the css array entry, e.g. `css: ['~/assets/css/main']`, then only one file will be loaded depending on the order of `styleExtensions`. In this case only the `css` file will be loaded and the `scss` file will be ignored because `css` comes first in the default `styleExtension` array.

</base-alert>

Default order: `['css', 'pcss', 'postcss', 'styl', 'stylus', 'scss', 'sass', 'less']`

## Pre-processors

Thanks to [Vue Loader](http://vue-loader.vuejs.org/en/configurations/pre-processors.html), you can use any kind of pre-processor for your  `<template>` or `<style>`: use the `lang` attribute.

Example of our `pages/index.vue` using [Pug](https://github.com/pugjs/pug) and [Sass](http://sass-lang.com/):

```html{}[pages/index.vue]
<template lang="pug"> h1.red Hello {{ name }}! </template>

<style lang="scss">
  .red {
    color: red;
  }
</style>
```

To use these pre-processors, we need to install their webpack loaders:

<code-group>
  <code-block label="Yarn" active>

```bash
yarn add -D pug pug-plain-loader
yarn add -D sass sass-loader@10 fibers
```

  </code-block>
  <code-block label="npm">

```bash
npm install --save-dev pug pug-plain-loader
npm install --save-dev sass sass-loader@10 fibers
```

  </code-block>
</code-group>

<base-alert type="info">Synchronous compilation with `sass` (2x speed increase) [is enabled automatically](https://github.com/webpack-contrib/sass-loader) when `fibers` is installed.</base-alert>

## External Resources

### Global Settings

You can include your external resources in the head object or function. As described in the [head API docs](https://nuxtjs.org/api/pages-head/), the following examples shows the use of `head` as an object and as a function. If you want to use values from your Vue component like computed properties or data, you can use the `head()` function, returning the final head object. You can also pass each resource an optional `body: true` to include the resource before the closing `</body>` tag.

Include your resources in `nuxt.config.js` (here in the head object):

```js
export default {
  head: {
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
      }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap'
      }
    ]
  }
}
```

### Local Settings

Include your resources in your `.vue` file inside the `pages/` directory (here in the head function):

```html
<template>
  <h1>About page with jQuery and Roboto font</h1>
</template>

<script>
  export default {
    head() {
      return {
        script: [
          {
            src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
          }
        ],
        link: [
          {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  h1 {
    font-family: Roboto, sans-serif;
  }
</style>
```

## PostCSS plugins

If present, rename or delete the `postcss.config.js` in your project directory. Then, in your `nuxt.config.js` file add the following:

```js
export default {
  build: {
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        // Disable a plugin by passing false as value
        'postcss-url': false,
        'postcss-nested': {},
        'postcss-responsive-type': {},
        'postcss-hexrgba': {}
      },
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {
          grid: true
        }
      }
    }
  }
}
```

## JSX

Nuxt.js uses [@nuxt/babel-preset-app](https://github.com/nuxt/nuxt.js/tree/dev/packages/babel-preset-app), which is based on the official [@vue/babel-preset-app](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/babel-preset-app) for babel default configuration, so you can use JSX in your components.

You can also use JSX in the `render` method of your components:

```js
<script>
export default {
  data () {
    return { name: 'World' }
  },
  render (h) {
    return <h1 class="red">{this.name}</h1>
  }
}
</script>
```

Aliasing `createElement` to `h` is a common convention you’ll see in the Vue ecosystem but is actually optional for JSX since it [automatically injects](https://github.com/vuejs/babel-plugin-transform-vue-jsx#h-auto-injection) `const h = this.$createElement` in any method and getter (not functions or arrow functions) declared in ES2015 syntax that has JSX so you can drop the (h) parameter.

You can learn more about how to use it in the [JSX section](https://vuejs.org/v2/guide/render-function.html#JSX) of the Vue.js documentation.

## Ignoring files

### .nuxtignore

You can use a `.nuxtignore` file to let Nuxt.js ignore  `layout`, `page`, `store` and `middleware`  files in your project’s root directory (`rootDir`) during the build phase. The `.nuxtignore` file is subject to the same specification as  `.gitignore`  and  `.eslintignore` files, in which each line is a glob pattern indicating which files should be ignored.

```markdown{}[.nuxtignore]
# ignore layout foo.vue

layouts/foo.vue

# ignore layout files whose name ends with -ignore.vue

layouts/\*-ignore.vue

# ignore page bar.vue

pages/bar.vue

# ignore page inside ignore folder

pages/ignore/\*.vue

# ignore store baz.js

store/baz.js

# ignore store files match _.test._

store/ignore/_.test._

# ignore middleware files under foo folder except foo/bar.js

middleware/foo/\*.js !middleware/foo/bar.js
```

### The ignorePrefix Property

Any file in pages/, layout/, middleware/ or store/ will be ignored during the build if its filename starts with the prefix specified by ignorePrefix.

By default all files which start with `-` will be ignored, such as `store/-foo.js` and `pages/-bar.vue`. This allows for co-locating tests, utilities, and components with their callers without themselves being converted into routes, stores, etc.

### The ignore Property

More customizable than ignorePrefix: all files matching glob patterns specified inside ignore will be ignored in building.

```js{}[nuxt.config.js]
export default {
  ignore: 'pages/bar.vue'
}
```

### ignoreOptions

`nuxtignore` is using `node-ignore` under the hood, `ignoreOptions` can be configured as `options` of `node-ignore`.

```js{}[nuxt.config.js]
export default {
  ignoreOptions: {
    ignorecase: false
  }
}
```

## Extend webpack config

You can extend nuxt's webpack configuration via the `extend` option in your `nuxt.config.js`. The `extend` option of the `build` property is a method that accepts two arguments. The first argument is the webpack `config` object exported from nuxt's webpack config. The second parameter is a context object with the following boolean properties: `{ isDev, isClient, isServer, loaders }`.

```js{}[nuxt.config.js]
export default {
  build: {
    extend(config, { isDev, isClient }) {
      // ..
      config.module.rules.push({
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'file-loader'
      })
      // Sets webpack's mode to development if `isDev` is true.
      if (isDev) {
        config.mode = 'development'
      }
    }
  }
}
```

The `extend` method gets called twice - Once for the client bundle and the other for the server bundle.

### Customize chunks configuration

You may want to tweak the [optimization configuration](/docs/2.x/configuration-glossary/configuration-build#optimization) a bit, avoiding a rewrite of the default object.

```js{}[nuxt.config.js]
export default {
  build: {
    extend(config, { isClient }) {
      if (isClient) {
        config.optimization.splitChunks.maxSize = 200000
      }
    }
  }
}
```

### Inspect webpack configuration

For complex projects and debugging it's sometimes useful to check what the final webpack configuration will look like. Luckily you can run `nuxt webpack` command from withing your project to output the configuration. Checkout this PR [#7029](https://github.com/nuxt/nuxt.js/pull/7029) for more details.

### Add webpack plugins

In your `nuxt.config.js` file, under the `build` option, you can pass webpack `plugins`, the same way you would do it in [a `webpack.config.js` file](https://webpack.js.org/configuration/plugins/).

In this example we add the webpack built-in [ProvidePlugin](https://webpack.js.org/plugins/provide-plugin/) for automatically loading JavaScript modules (_lodash_ and _jQuery_) instead of having to `import` or `require` them everywhere.

```js
import webpack from 'webpack'

export default {
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        // global modules
        $: 'jquery',
        _: 'lodash'
      })
    ]
  }
}
```

> Note: You might not need jQuery in a Vue-based app.

With Nuxt, you can also control plugins execution context: if they are meant to be run on the `client` or in the `server` builds (or differentiating `dev` and `prod` builds) within [`build.extend`](/docs/2.x/configuration-glossary/configuration-build#extend), where you can manually pass webpack plugins too.

### Extend Webpack to load audio files

Audio files should be processed by `file-loader`. This loader is already included in the default Webpack configuration, but it is not set up to handle audio files. You need to extend its default configuration in `nuxt.config.js`:

```js
export default {
  build: {
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      })
    }
  }
}
```

You can now import audio files like this `<audio :src="require('@/assets/water.mp3')" controls></audio>`.

If you only want to write: `<audio src="@/assets/water.mp3" controls></audio>`, you need to tell `vue-loader` to automatically require your audio files when you reference them with the `src` attribute:

```js
export default {
  build: {
    loaders: {
      vue: {
        transformAssetUrls: {
          audio: 'src'
        }
      }
    },

    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      })
    }
  }
}
```

## Edit host and port

By default, the Nuxt.js development server host is `localhost`  which is only accessible from within the host machine. In order to view your app on another device you need to modify the host. You can modify the host in your nuxt.config.js file.

Host `'0.0.0.0'`  is designated to tell Nuxt.js to resolve a host address, which is accessible to connections *outside* of the host machine (e.g. LAN). If the host is assigned the string value of `'0'` (not 0, which is falsy), or `'0.0.0.0'` your local IP address will be assigned to your Nuxt.js application.

```js{}[nuxt.config.js]
export default {
  server: {
    host: '0' // default: localhost
  }
}
```

You can also change the port number from the default port of 3000.

```js{}[nuxt.config.js]
export default {
  server: {
    port: 8000 // default: 3000
  }
}
```

<base-alert type="info">

If the port is assigned the string value of `'0'` (not 0, which is falsy) a random port number will be assigned to your Nuxt.js application.

</base-alert>

Although you can modify this in the nuxt.config.js file it is not advised to as it might cause you issues when hosting your site. It is much better to modify the host and port direct in the dev command.

```bash
HOST=0 PORT=8000 npm run dev
```

or create a script in your package.json

```json
"scripts": {
  "dev:host": "nuxt --hostname '0' --port 8000"
}
```

## Asynchronous Configuration

Although it is better to use the normal configuration `export default {}` you can have an async configuration by exporting an async function that return the config object.

```js{}[nuxt.config.js]
import axios from 'axios'

export default async () => {
  const data = await axios.get('https://api.nuxtjs.dev/posts')
  return {
    head: {
      title: data.title
      //... rest of config
    }
  }
}
```

<base-alert>

The axios-module cannot be used in `nuxt.config.js`. You will need to import axios and configure it again.

</base-alert>

## Further configuration

<base-alert type="next">

The `nuxt.config.js` has way more customization and configuration options! Check out all its keys in the [configuration glossary](/docs/2.x/configuration-glossary/configuration-build).

</base-alert>

<quiz :questions="questions"></quiz>
