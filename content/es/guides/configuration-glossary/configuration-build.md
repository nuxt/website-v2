---
title: 'La propiedad build'
description: Nuxt.js te permite personalizar la configuración de webpack para crear su aplicación web como desee.
menu: build
category: configuration-glossary
position: 1
---

> Nuxt.js te permite personalizar la configuración de webpack para crear su aplicación web como desee.

## analyze

> Nuxt.js usa [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) para permitirle visualizar sus paquetes y cómo optimizarlos.

- Tipo: `Boolean` o `Object`
- Por defecto: `false`

Si es un objeto, mira las propiedades disponibles [aquí](https://github.com/webpack-contrib/webpack-bundle-analyzer#options-for-plugin).

```js{}[nuxt.config.js]
export default {
  build: {
    analyze: true,
    // o
    analyze: {
      analyzerMode: 'static'
    }
  }
}
```

<base-alert type="info">

**Info:** puedes usar el comando `yarn nuxt build --analyze` o `yarn nuxt build -a` para construir su aplicación e iniciar el analizador de paquetes en [http://localhost:8888](http://localhost:8888). Si no estás utilizando `yarn` puedes correr el comando con `npx`.

</base-alert>

## corejs

> A partir de [Nuxt@2.14](https://github.com/nuxt/nuxt.js/releases/tag/v2.14.0) Nuxt detecta automáticamente la versión actual de `core-js` en su proyecto, también puede especificar qué versión desea usar.

- Tipo: `number` | `string` (Los valores validos son `'auto'`, `2` y `3`)
- Por defecto: `'auto'`

## babel

> Personalice la configuración de Babel para archivos JavaScript y Vue. `.babelrc` se ignora de forma predeterminada.

- Tipo: `Object`
- Mira las [opciones](https://github.com/babel/babel-loader#options) para `babel-loader` y las [opciones](https://babeljs.io/docs/en/options) para `babel`
- Por defecto:

  ```js
  {
    babelrc: false,
    cacheDirectory: undefined,
    presets: ['@nuxt/babel-preset-app']
  }
  ```

Los destinos predeterminados de [@nuxt/babel-preset-app](https://github.com/nuxt/nuxt.js/blob/dev/packages/babel-preset-app/src/index.js) son `ie: '9'` en el build del `client`, y `node: 'current'` en el build del `server`.

### presets

- Tipo: `Function`
- Argumento:
  1. `Object`: { isServer: true | false }
  2. `Array`:
     - preset name `@nuxt/babel-preset-app`
     - [`options`](https://github.com/nuxt/nuxt.js/tree/dev/packages/babel-preset-app#options) de `@nuxt/babel-preset-app`

**Nota**: Los ajustes preestablecidos configurados en `build.babel.presets` se aplicarán tanto al cliente como al servidor. El objetivo será establecido por Nuxt en consecuencia (cliente / servidor). Si desea configurar el preset preestablecido de manera diferente para el cliente o la compilación del servidor, utilice `presets` como función:

> **Recomendamos encarecidamente** utilizar el ajuste predeterminado predeterminado en lugar de la siguiente personalización

```js
export default {
  build: {
    babel: {
      presets({ isServer }, [ preset, options ]) {
        // cambia opciones directamente
        options.targets = isServer ? ... :  ...
        options.corejs = ...
        // no devuelve nada
      }
    }
  }
}
```

O sobrescribe el valor por defecto devolviendo toda la lista de presets:

```js
export default {
  build: {
    babel: {
      presets({ isServer }, [preset, options]) {
        return [
          [
            preset,
            {
              buildTarget: isServer ? 'server' : 'client',
              ...options
            }
          ],
          [
            // Más presets
          ]
        ]
      }
    }
  }
}
```

## cache

- Tipo: `Boolean`
- Por defecto: `false`
- ⚠️ Experimental

> Habilita la caché de [terser-webpack-plugin](https://github.com/webpack-contrib/terser-webpack-plugin#options) y [cache-loader](https://github.com/webpack-contrib/cache-loader#cache-loader)

## cssSourceMap

- Tipo: `boolean`
- Por defecto: `true` para desarrollo y `false` para producción.

> Habilita la compatibilidad con CSS Source Map

## devMiddleware

- Tipo: `Object`

Mira [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware) para las opciones disponibles.

## devtools

- Tipo: `boolean`
- Por defecto: `false`

Configurar si permitir la inspección con [vue-devtools](https://github.com/vuejs/vue-devtools).

Si ya lo activó a través de nuxt.config.js o de otra manera, devtools se habilita independientemente de la bandera.

## extend

> Extiende la configuración de webpack manualmente para los paquetes de cliente y servidor.

- Tipo: `Function`

The extend is called twice, one time for the server bundle, and one time for the client bundle. The arguments of the method are:

1. El objeto de configuración de Webpack,
2. Un objeto con las siguientes llaves (todas son boolean excepto `loaders`): `isDev`, `isClient`, `isServer`, `loaders`.

<base-alert>

**Advertencia:** Las llaves proporcionadas `isClient` e `isServer` son independientes de las llaves disponibles en [`context`](/guides/internals-glossary/context). **No** están obsoletas. No utilice `process.client` ni `process.server` aquí ya que son `undefined` a esté punto.

</base-alert>

```js{}[nuxt.config.js]
export default {
  build: {
    extend(config, { isClient }) {
      // Extienda solo la configuración de Webpack para el paquete de cliente
      if (isClient) {
        config.devtool = 'source-map'
      }
    }
  }
}
```

Si quieres ver más información sobre la configuración por defecto de Webpack, echa un vistazo a nuestro [directorio de webpack](https://github.com/nuxt/nuxt.js/tree/dev/packages/webpack/src/config).

### loaders en extend

`loaders` tiene la misma estructura que [build.loaders](#loaders), para que pueda cambiar las opciones de los cargadores dentro de `extend`.

```js{}[nuxt.config.js]
export default {
  build: {
    extend(config, { isClient, loaders: { vue } }) {
      // Extienda solo la configuración de Webpack para el paquete de cliente
      if (isClient) {
        vue.transformAssetUrls.video = ['src', 'poster']
      }
    }
  }
}
```

## extractCSS

> Habilita la extracción de CSS común usando las [pautas](https://ssr.vuejs.org/en/css.html) de Vue Server Renderer.

- Tipo: `Boolean` o `Object`
- Por defecto: `false`

Usando [`extract-css-chunks-webpack-plugin`](https://github.com/faceyspacey/extract-css-chunks-webpack-plugin/) bajo el capó, todo su CSS se extraerá en archivos separados, generalmente uno por componente. Esto permite almacenar en caché su CSS y JavaScript por separado y vale la pena intentarlo en caso de que tenga mucho CSS global o compartido.

Ejemplo (`nuxt.config.js`):

```js
export default {
  build: {
    extractCSS: true,
    // o
    extractCSS: {
      ignoreOrder: true
    }
  }
}
```

<base-alert type="info">

**Nota:** Hubo un error antes de Vue 2.5.18 que eliminó las importaciones CSS críticas al usar estas opciones.

</base-alert>

Es posible que desee extraer todo su CSS en un solo archivo. Hay una solución para esto:

<base-alert>

No se recomienda extraer todo en un solo archivo. La extracción en varios archivos css es mejor para el almacenamiento en caché y el aislamiento de precarga. También puede mejorar el rendimiento de la página al descargar y resolver solo los recursos necesarios.

</base-alert>

```js
export default {
  build: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    }
  }
}
```

## filenames

> Personalice los nombres de archivo de los paquetes.

- Tipo: `Object`
- Por defecto:

  ```js
  {
    app: ({ isDev }) => isDev ? '[name].js' : '[contenthash].js',
    chunk: ({ isDev }) => isDev ? '[name].js' : '[contenthash].js',
    css: ({ isDev }) => isDev ? '[name].css' : '[contenthash].css',
    img: ({ isDev }) => isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]',
    font: ({ isDev }) => isDev ? '[path][name].[ext]' : 'fonts/[contenthash:7].[ext]',
    video: ({ isDev }) => isDev ? '[path][name].[ext]' : 'videos/[contenthash:7].[ext]'
  }
  ```

Este ejemplo cambia los nombres elegantes de los fragmentos a identificadores numéricos:

```js{}[nuxt.config.js]
export default {
  build: {
    filenames: {
      chunk: ({ isDev }) => (isDev ? '[name].js' : '[id].[contenthash].js')
    }
  }
}
```

Para entender mejor como funciona el uso de manifests, echa un vistazo a la [documentación de webpack](https://webpack.js.org/guides/code-splitting/).


<base-alert>

Tenga cuidado al usar nombres de archivo no basados en hash en producción, ya que la mayoría de los navegadores almacenarán en caché el activo y no detectarán los cambios en la primera carga.

</base-alert>


## friendlyErrors

- Tipo: `Boolean`
- Por defecto: `true` (Superposición habilitada)

Habilita o deshabilita la superposición proporcionada por [FriendlyErrorsWebpackPlugin](https://github.com/nuxt/friendly-errors-webpack-plugin)

## hardSource

- Type: `Boolean`
- Default: `false`
- ⚠️ Experimental

Enables the [HardSourceWebpackPlugin](https://github.com/mzgoddard/hard-source-webpack-plugin) for improved caching

## hotMiddleware

- Tipo: `Object`

Mira [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware) para la opciones disponibles.

## html.minify

- Tipo: `Object`
- Por defecto:

```js
{
  collapseBooleanAttributes: true,
  decodeEntities: true,
  minifyCSS: true,
  minifyJS: true,
  processConditionalComments: true,
  removeEmptyAttributes: true,
  removeRedundantAttributes: true,
  trimCustomFragments: true,
  useShortDoctype: true
}
```

**Atención:** Si haces cambios a `html.minify`, no serán no se fusionarán con los valores predeterminados!

Configuración para el complemento [html-minifier](https://github.com/kangax/html-minifier) utilizado para minimizar los archivos HTML creados durante el proceso de compilación (se aplicará para _todos los modos_).

## indicator

> Indicador de compilación de pantalla para reemplazo de módulo en caliente en desarrollo (disponible en `v2.8.0+`)

- Tipo: `Boolean`
- Por defecto: `true`

![nuxt-build-indicator](https://user-images.githubusercontent.com/5158436/58500509-93ba0f80-8197-11e9-8524-e115c6d32571.gif)

## loaders

> Personalice las opciones de los cargadores de webpack integrados de Nuxt.js.

- Tipo: `Object`
- Por defecto:

```js
{
  file: {},
  fontUrl: { limit: 1000 },
  imgUrl: { limit: 1000 },
  pugPlain: {},
  vue: {
    transformAssetUrls: {
      video: 'src',
      source: 'src',
      object: 'src',
      embed: 'src'
    }
  },
  css: {},
  cssModules: {
    localIdentName: '[local]_[hash:base64:5]'
  },
  less: {},
  sass: {
    indentedSyntax: true
  },
  scss: {},
  stylus: {},
  vueStyle: {}
}
```

> Nota: Además de especificar las configuraciones en `nuxt.config.js`, también puede ser modificado por [build.extend](#extend)

### loaders.file

> Más detalles en las [opciones del file-loader](https://github.com/webpack-contrib/file-loader#options).

### loaders.fontUrl and loaders.imgUrl

> Más detalles en las [opciones del url-loader](https://github.com/webpack-contrib/url-loader#options).

### loaders.pugPlain

> Más detalles en [pug-plain-loader](https://github.com/yyx990803/pug-plain-loader) o las [opciones del compilador Pug](https://pugjs.org/api/reference.html#options).

### loaders.vue

> Más detalles en las [opciones de vue-loader](https://vue-loader.vuejs.org/options.html).

### loaders.css and loaders.cssModules

> Más detalles en las [opciones de css-loader](https://github.com/webpack-contrib/css-loader#options). Nota: cssModules son opciones de carga para el uso de [Módulos de CSS](https://vue-loader.vuejs.org/guide/css-modules.html#css-modules)

### loaders.less

> Puede pasar cualquier opción específica de Less al `less-loader` a través de `loaders.less`. Mira la [documentación de Less](http://lesscss.org/usage/#command-line-usage-options) para todas las opciones disponibles en dash-case.

### loaders.sass and loaders.scss

> Mira la [documentación de Node Sass](https://github.com/sass/node-sass/blob/master/README.md#options) para todas las opciones disponibles de Sass. Note: `loaders.sass` es para [Sass Indented Syntax](http://sass-lang.com/documentation/file.INDENTED_SYNTAX.html)

### loaders.vueStyle

> Más detalles en las [opciones de vue-style-loader](https://github.com/vuejs/vue-style-loader#options).

## optimization

- Tipo: `Object`
- Por defecto:

  ```js
  {
    minimize: true,
    minimizer: [
      // terser-webpack-plugin
      // optimize-css-assets-webpack-plugin
    ],
    splitChunks: {
      chunks: 'all',
      automaticNameDelimiter: '.',
      name: undefined,
      cacheGroups: {}
    }
  }
  ```

El valor por defecto de `splitChunks.name` es `true` en `dev` o en modo `analyze`.

Puede configurar `minimizer` en una matriz personalizada de complementos o configurar `minimize` en `false` para deshabilitar todos los minimizadores. (`minimize` está deshabilitado para el desarrollo de forma predeterminada)

Mira [optimización para Webpack](https://webpack.js.org/configuration/optimization).

## optimizeCSS

- Type: `Object` or `Boolean`
- Default:
  - `false`
  - `{}` when extractCSS is enabled

OptimizeCSSAssets plugin options.

See [NMFR/optimize-css-assets-webpack-plugin](https://github.com/NMFR/optimize-css-assets-webpack-plugin).

## parallel

- Type: `Boolean`
- Default: `false`
- ⚠️ Experimental

> Enable [thread-loader](https://github.com/webpack-contrib/thread-loader#thread-loader) in webpack building

## plugins

> Add webpack plugins

- Type: `Array`
- Default: `[]`

```js{}[nuxt.config.js]
import webpack from 'webpack'
import { version } from './package.json'
export default {
  build: {
    plugins: [
      new webpack.DefinePlugin({
        'process.VERSION': version
      })
    ]
  }
}
```

## postcss

> Customize [PostCSS Loader](https://github.com/postcss/postcss-loader#usage) plugins.

- Type: `Array` (legacy, will override defaults), `Object` (recommended), `Function` or `Boolean`

  **Note:** Nuxt.js has applied [PostCSS Preset Env](https://github.com/csstools/postcss-preset-env). By default it enables [Stage 2 features](https://cssdb.org/) and [Autoprefixer](https://github.com/postcss/autoprefixer), you can use `build.postcss.preset` to configure it.

- Default:

  ```js{}[nuxt.config.js]
  {
    plugins: {
      'postcss-import': {},
      'postcss-url': {},
      'postcss-preset-env': this.preset,
      'cssnano': { preset: 'default' } // disabled in dev mode
    },
    order: 'presetEnvAndCssnanoLast',
    preset: {
      stage: 2
    }
  }
  ```

Your custom plugin settings will be merged with the default plugins (unless you are using an `Array` instead of an `Object`).

```js{}[nuxt.config.js]
export default {
  build: {
    postcss: {
      plugins: {
        // Disable `postcss-url`
        'postcss-url': false,
        // Add some plugins
        'postcss-nested': {},
        'postcss-responsive-type': {},
        'postcss-hexrgba': {}
      },
      preset: {
        autoprefixer: {
          grid: true
        }
      }
    }
  }
}
```

If the postcss configuration is an `Object`, `order` can be used for defining the plugin order:

- Type: `Array` (ordered plugin names), `String` (order preset name), `Function`
- Default: `cssnanoLast` (put `cssnano` in last)

```js{}[nuxt.config.js]
export default {
  build: {
    postcss: {
      // preset name
      order: 'cssnanoLast',
      // ordered plugin names
      order: ['postcss-import', 'postcss-preset-env', 'cssnano']
      // Function to calculate plugin order
      order: (names, presets) => presets.cssnanoLast(names)
    }
  }
}
```

### postcss plugins & nuxt-tailwindcss

If you want to apply postcss plugin (eg. postcss-pxtorem) on the nuxt-tailwindcss configuration, you have to change order and load first tailwindcss.

**This setup have no impact on the nuxt-purgecss.**

```js{}[nuxt.config.js]
import { join } from 'path'

export default {
  // ...
  build: {
    postcss: {
      plugins: {
        tailwindcss: join(__dirname, 'tailwind.config.js'),
        'postcss-pxtorem': {
          propList: ['*', '!border*']
        }
      }
    }
  }
}
```

## profile

- Type: `Boolean`
- Default: enabled by command line argument `--profile`

> Enable the profiler in [WebpackBar](https://github.com/nuxt/webpackbar#profile)

## publicPath

> Nuxt.js lets you upload your dist files to your CDN for maximum performances, simply set the `publicPath` to your CDN.

- Type: `String`
- Default: `'/_nuxt/'`

```js{}[nuxt.config.js]
export default {
  build: {
    publicPath: 'https://cdn.nuxtjs.org'
  }
}
```

Then, when launching `nuxt build`, upload the content of `.nuxt/dist/client` directory to your CDN and voilà!

## quiet

> Suppresses most of the build output log

- Type: `Boolean`
- Default: Enabled when a `CI` or `test` environment is detected by [std-env](https://github.com/blindmedia/std-env)

## splitChunks

- Type: `Object`
- Default:

  ```js{}[nuxt.config.js]
  export default {
    build: {
      splitChunks: {
        layouts: false,
        pages: true,
        commons: true
      }
    }
  }
  ```

If split codes for `layout`, `pages` and `commons` (common libs: vue|vue-loader|vue-router|vuex...).

## ssr

> Creates special webpack bundle for SSR renderer.

- Type: `Boolean`
- Default: `true` for universal mode and `false` for spa mode

This option is automatically set based on `mode` value if not provided.

## styleResources

- Type: `Object`
- Default: `{}`

<base-alert>

**Warning:** This property is deprecated. Please use the [style-resources-module](https://github.com/nuxt-community/style-resources-module/) instead for improved performance and better DX!

</base-alert>

This is useful when you need to inject some variables and mixins in your pages without having to import them every time.

Nuxt.js uses https://github.com/yenshih/style-resources-loader to achieve this behaviour.

You need to specify the patterns/path you want to include for the given pre-processors: `less`, `sass`, `scss` or `stylus`

You cannot use path aliases here (`~` and `@`), you need to use relative or absolute paths.

```js{}[nuxt.config.js]
{
  build: {
    styleResources: {
      scss: './assets/variables.scss',
      less: './assets/*.less',
      // sass: ...,
      // scss: ...
      options: {
        // See https://github.com/yenshih/style-resources-loader#options
        // Except `patterns` property
      }
    }
  }
}
```

## templates

> Nuxt.js allows you provide your own templates which will be rendered based on Nuxt configuration. This feature is specially useful for using with [modules](/guides/directory-structure/modules).

- Type: `Array`

```js{}[nuxt.config.js]
export default {
  build: {
    templates: [
      {
        src: '~/modules/support/plugin.js', // `src` can be absolute or relative
        dst: 'support.js', // `dst` is relative to project `.nuxt` dir
        options: {
          // Options are provided to template as `options` key
          live_chat: false
        }
      }
    ]
  }
}
```

Templates are rendered using [`lodash.template`](https://lodash.com/docs/#template) you can learn more about using them [here](https://github.com/learn-co-students/javascript-lodash-templates-v-000).

## terser

- Type: `Object` or `Boolean`
- Default:

```js{}[nuxt.config.js]
{
  parallel: true,
  cache: false,
  sourceMap: false,
  extractComments: {
    filename: 'LICENSES'
  },
  terserOptions: {
    output: {
      comments: /^\**!|@preserve|@license|@cc_on/
    }
  }
}
```

Terser plugin options. Set to `false` to disable this plugin.

`sourceMap` will be enabled when webpack `config.devtool` matches `source-?map`

See [webpack-contrib/terser-webpack-plugin](https://github.com/webpack-contrib/terser-webpack-plugin).

## transpile

- Type: `Array<String | RegExp | Function>`
- Default: `[]`

If you want to transpile specific dependencies with Babel, you can add them in `build.transpile`. Each item in transpile can be a package name, a string or regex object matching the dependency's file name.

Starting with `v2.9.0`, you can also use a function to conditionally transpile, the function will receive a object (`{ isDev, isServer, isClient, isModern, isLegacy }`):

```js{}[nuxt.config.js]
{
  build: {
    transpile: [({ isLegacy }) => isLegacy && 'ky']
  }
}
```

## vueLoader

> Note: This config has been removed since Nuxt 2.0, please use [`build.loaders.vue`](#loaders)instead.

- Type: `Object`
- Default:

  ```js{}[nuxt.config.js]
  {
    productionMode: !this.options.dev,
    transformAssetUrls: {
      video: 'src',
      source: 'src',
      object: 'src',
      embed: 'src'
    }
  }
  ```

> Specify the [Vue Loader Options](https://vue-loader.vuejs.org/options.html).

## watch

> You can provide your custom files to watch and regenerate after changes. This feature is specially useful for using with [modules](/guides/directory-structure/modules).

- Type: `Array<String>`

```js{}[nuxt.config.js]
export default {
  build: {
    watch: ['~/.nuxt/support.js']
  }
}
```

## followSymlinks

> By default, the build process does not scan files inside symlinks. This boolean includes them, thus allowing usage of symlinks inside folders such as the "pages" folder, for example.

- Type: `Boolean`

```js{}[nuxt.config.js]
export default {
  build: {
    followSymlinks: true
  }
}
```
