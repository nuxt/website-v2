---
title: Meta Tags and SEO
description: Nuxt.js lets you define all default `<meta>` tags for your application inside the nuxt.config.js file using the head property. This is very useful for adding a default title and description tag for SEO purposes or for setting the viewport or adding the favicon.
position: 6
category: features
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/03_features/06_meta_tags_seo?fontsize=14&hidenavigation=1&theme=dark
questions:
  - question: Where do you set the title and meta descriptions globally?
    answers:
      - in the page component
      - in the nuxt.config.js
      - in the package.json
    correctAnswer: in the nuxt.config.js
  - question: Where do you set the title and meta descriptions locally?
    answers:
      - in the page component
      - in the nuxt.config.js
      - in the seo component
    correctAnswer: in the page component
  - question: In pages, to get access to your data in your title or meta description you use the
    answers:
      - meta function
      - head function
      - seo function
    correctAnswer: head function
  - question: You can load external resources only in the nuxt.config.js
    answers:
      - true
      - false
    correctAnswer: false
  - question: To include scripts before the closing body tag use
    answers:
      - 'body: true'
      - 'body: false'
      - 'scripts: true'
    correctAnswer: 'body: true'
---

Nuxt.js gives you 3 different ways to add meta data to your application:

1. Globally using the nuxt.config.js
2. Locally using the head as an object
3. Locally using the head as a function so that you have access to data and computed properties.

### Global Settings

Nuxt.js lets you define all default `<meta>` tags for your application inside the nuxt.config.js file using the head property. This is very useful for adding a default title and description tag for SEO purposes or for setting the viewport or adding the favicon.

```js{}[nuxt.config.js]
export default {
  head: {
    title: 'my website title',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'my website description'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  }
}
```

<base-alert type="info">

This will give you the same title and description on every page

</base-alert>

### Local Settings

You can also add titles and meta for each page using the `head` method inside your script tag on every page.

```js{}[pages/index.vue]
<script>
export default {
  head: {
    title: 'Home page',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Home page description'
      }
    ],
  }
}
</script>
```

<base-alert type="info">

Use `head` as an object to set a title and description only for the home page

</base-alert>

```html{}[pages/index.vue]
<template>
  <h1>{{ title }}</h1>
</template>
<script>
  export default {
    data() {
      return {
        title: 'Home page'
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Home page description'
          }
        ]
      }
    }
  }
</script>
```

<base-alert type="info">

Use `head` as a function to set a title and description only for the home page. By using a function you have access to data and computed properties

</base-alert>

Nuxt.js uses [vue-meta](https://vue-meta.nuxtjs.org/) to update the document head and meta attributes of your application.

<base-alert>

To avoid any duplication when used in child components, please give a unique identifier with the `hid` key to the meta description. This way `vue-meta` will know that it has to overwrite the default tag.

</base-alert>

<base-alert type="next">

Learn more about the options available for `head`, in the [vue-meta documentation](https://vue-meta.nuxtjs.org/api/#metainfo-properties).

</base-alert>

## External Resources

You can include external resources such as scripts and fonts by adding them globally to the `nuxt.config.js` or locally in the `head` object or function.

<base-alert type="info">

You can also pass each resource an optional `body: true` to include the resource before the closing `</body>` tag.

</base-alert>

### Global Settings

```js{}[nuxt.config.js]
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

```html{}[pages/index.vue]
<template>
  <h1>About page with jQuery and Roboto font</h1>
</template>

<script>
  export default {
    head() {
      return {
        script: [
          {
            src:
              'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
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

## Resource Hints

Adds prefetch and preload links for faster initial page load time.

You may want to only disable this option if you have many pages and routes.

<base-alert type="next">

[Resource Hints](/docs/2.x/configuration-glossary/configuration-render#resourcehints)

</base-alert>

<app-modal>
  <code-sandbox  :src="csb_link"></code-sandbox>
</app-modal>

<quiz :questions="questions"></quiz>
