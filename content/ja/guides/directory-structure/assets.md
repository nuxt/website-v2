---
title: assets
description: The `assets` directory contains your un-compiled assets such as Stylus or Sass files, images, or fonts.
position: 2
category: directory-structure
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/02_assets?fontsize=14&hidenavigation=1&theme=dark
videoScript:
  - assets-video.md
questions:
  - question: Which directory contains your un-compiled assets such as Stylus or Sass files, images, or fonts?
    answers:
      - static
      - assets
      - pages
    correctAnswer: assets
  - question: What do you use if you need to reference your  assets directory inside your vue templates?
    answers:
      - '/assets/your_image.png'
      - '@assets/your_image.png'
      - '@/assets/your_image.png'
    correctAnswer: '@/assets/your_image.png'
  - question: What do you use if you need to reference your  assets directory inside your css files?
    answers:
      - url("@assets/banner.svg")
      - url("assets/banner.svg")
      - url("@/assets/banner.svg")
    correctAnswer: url("@assets/banner.svg")
  - question: Where do you import your global css stylesheets?
    answers:
      - in your index.vue file
      - in the nuxt.config.js file
      - in the default layout file
    correctAnswer: in the nuxt.config.js file
  - question: Under which property do you import a global font?
    answers:
      - font
      - head
      - css
    correctAnswer: head
  - question: Which loader lets you inline a file as base-64 data URL?
    answers:
      - file-loader
      - url-loader
      - image-loader
    correctAnswer: url-loader
  - question: What is the aliases for the source directory?
    answers:
      - '@'
      - '@@'
      - '^'
    correctAnswer: '@'
  - question: What is the aliases for the root directory?
    answers:
      - '@'
      - '@@'
      - '@root'
    correctAnswer: '@@'
---

The `assets` directory contains your un-compiled assets such as Stylus or Sass files, images, or fonts.

## Images

Inside your `vue` templates, if you need to link to your `assets` directory use `~/assets/your_image.png` with a slash before assets.

```html
<template>
  <img src="~/assets/your_image.png" />
</template>
```

Inside your `css` files, if you need to reference your  `assets`  directory, use `~assets/your_image.png`(without a slash)

```css
background: url('~assets/banner.svg');
```

When working with dynamic images you will need to use require

```html
<img :src="require(`~/assets/img/${image}.jpg`)" />
```

<base-alert type="next">

Learn more about [webpack Assets](/docs/2.x/directory-structure/assets#webpack-assets)

</base-alert>

## Styles

Nuxt.js lets you define the CSS files/modules/libraries you want to set globally (included in every page). In the nuxt.config you can easily add your styles using the CSS Property.

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

### Sass

In case you want to use `sass` make sure that you have installed `sass` and `sass-loader` packages.

<code-group>
  <code-block label="Yarn" active>

```bash
yarn add -D sass sass-loader fibers
```

  </code-block>
  <code-block label="npm">

```bash
npm install --save-dev sass sass-loader fibers
```

  </code-block>
</code-group>

Nuxt.js will automatically guess the file type by its extension and use the appropriate pre-processor loader for webpack. You will still need to install the required loader if you need to use them.

## Fonts

You can use local fonts by adding them to your assets folder. Once they have been added you can then access them though your css using the @font-face.

```
-| assets
----| fonts
------| DMSans-Regular.ttf
------| DMSans-Bold.ttf
```

```css{}[assets/main.css]
@font-face {
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('~assets/fonts/DMSans-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('~assets/fonts/DMSans-Bold.ttf') format('truetype');
}
```

<base-alert type="next">

To add external fonts such as google fonts check out the [Meta Tags and SEO chapter](/docs/2.x/features/meta-tags-seo#external-resources)

</base-alert>

## Webpack Assets

By default, Nuxt uses webpack's vue-loader, file-loader and url-loader to serve your assets. You can also use the static directory for assets that should not run through webpack

## Webpack

[vue-loader](http://vue-loader.vuejs.org/) automatically processes your style and template files with `css-loader` and the Vue template compiler out of the box. In this compilation process, all asset URLs such as `<img src="...">`, `background: url(...)` and CSS `@import` are resolved as module dependencies.

For example, we have this file tree:

```
-| assets/
----| image.png
-| pages/
----| index.vue
```

If you use `url('~assets/image.png')` in your CSS, it will be translated  into  `require('~/assets/image.png')`.

<base-alert>

The `~/` alias won't be resolved correctly in your CSS files. You must use `~assets` (**without a slash**) in `url` CSS references, i.e. `background: url("~assets/banner.svg")`

</base-alert>

If you reference that image in your `pages/index.vue`:

```html{}[pages/index.vue]
<template>
  <img src="~/assets/image.png" />
</template>
```

It will be compiled into:

```js
createElement('img', { attrs: { src: require('~/assets/image.png') } })
```

Because `.png` is not a JavaScript file, Nuxt.js configures webpack to use [file-loader](https://github.com/webpack/file-loader) and [url-loader](https://github.com/webpack/url-loader) to handle them for you.

The benefits of these loaders are:

`file-loader` lets you designate where to copy and place the asset file, and how to name it using version hashes for better caching. In production, you will benefit from long-term caching by default!

`url-loader` allows you to conditionally inline a file as base-64 data URL if they are smaller than a given threshold. This can reduce the number of HTTP requests for trivial files. If the file is larger than the threshold, it automatically falls back to file-loader.

For these two loaders, the default configuration is:

```js
// https://github.com/nuxt/nuxt.js/blob/dev/packages/webpack/src/config/base.js#L297-L316
;[
  {
    test: /\.(png|jpe?g|gif|svg|webp)$/,
    loader: 'url-loader',
    query: {
      limit: 1000, // 1kB
      name: 'img/[name].[hash:7].[ext]'
    }
  },
  {
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    loader: 'url-loader',
    query: {
      limit: 1000, // 1kB
      name: 'fonts/[name].[hash:7].[ext]'
    }
  }
]
```

Which means that every file below 1 KB will be inlined as base-64 data URL. Otherwise, the image/font will be copied in its corresponding folder (inside the `.nuxt` directory) with a name containing a version hash for better caching.

When launching your application with `nuxt`, your template in `pages/index.vue`:

```html{}[pages/index.vue]
<template>
  <img src="~/assets/your_image.png" />
</template>
```

Will be transformed into:

```html
<img src="/_nuxt/img/your_image.0c61159.png" />
```

If you want to change the loader configurations, please use [build.extend](/docs/2.x/configuration-glossary/configuration-build#extend).

## Aliases

By default the source directory (srcDir) and the root directory (rootDir) are the same. You can use the alias of `~` for the source directory. Instead of writing relative paths like `../assets/your_image.png` you can use `~/assets/your_image.png`.

Both will achieve the same results.

```html{}[components/Avatar.vue]
<template>
  <div>
    <img src="../assets/your_image.png" />
    <img src="~/assets/your_image.png" />
  </div>
</template>
```

We recommend using the `~` as an alias. `@` is still supported but will not work in all cases such as with background images in your css.

You can use the alias of `~~` or `@@` for the root directory.

<base-alert type="info">

Tip: On Spanish keyboard you can access `~` with (`Option` + `ñ`) on Mac OS

</base-alert>

<quiz :questions="questions"></quiz>
