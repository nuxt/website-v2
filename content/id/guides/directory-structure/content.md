---
title: content
description: Empower your Nuxt.js application with `@nuxtjs/content` module where you can write in a `content/` directory and fetch your Markdown, JSON, YAML and CSV files through a MongoDB like API, acting as a **Git-based Headless CMS**.
position: 4
category: directory-structure
img: /docs/2.x/nuxt-content.svg
imgAlt: nuxt content module
questions:
  - question: What is the default directory name of the directory where you add your markdown files?
    answers:
      - markdown
      - content
      - pages
    correctAnswer: content
  - question: What component do you use in your template to display your markdown page body?
    answers:
      - <markdown>
      - <nuxt>
      - <nuxt-content>
    correctAnswer: <nuxt-content>
  - question: What class is automatically added so you can style your markdown?
    answers:
      - .content
      - .nuxt-content
      - .markdown
    correctAnswer: .nuxt-content
  - question: The content module can handle markdown, csv, yaml and json files
    answers:
      - true
      - false
    correctAnswer: true
  - question: You can add vue components to your markdown files
    answers:
      - true
      - false
    correctAnswer: true
  - question: Which do you use to list, filter and search your content?
    answers:
      - $nuxt-content()
      - $content()
      - $nuxt()
    correctAnswer: $content()
  - question: What do you use to get previous and next articles?
    answers:
      - .surround(slug)
      - .prev-next(slug)
      - .slug()
    correctAnswer: .surround(slug)
  - question: PrismJS classes are applied to code blocks by default?
    answers:
      - true
      - false
    correctAnswer: true
  - question: What is the default URL you use to access the API to see your JSON?
    answers:
      - http://localhost:3000/content
      - http://localhost:3000/_content
      - http://localhost:3000/api
    correctAnswer: http://localhost:3000/_content
  - question: Which heading tags are used to create the Table of contents
    answers:
      - h1 and h2
      - h2 and h3
      - h1 and h2 and h3
    correctAnswer: h2 and h3
  - question: You can use the content module with static site generation
    answers:
      - true
      - false
    correctAnswer: true
---

Empower your Nuxt.js application with `@nuxtjs/content` module where you can write in a `content/` directory and fetch your Markdown, JSON, YAML and CSV files through a MongoDB like API, acting as a **Git-based Headless CMS**.

<app-modal :src="img" :alt="imgAlt"></app-modal>

### Hot reload in development

The content module is blazing fast when it comes to hot reloading in development due to not having to go through webpack when you make changes to your markdown files. You can also listen to the `content:update` event and create a plugin so that every time you update a file in your content directory it will dispatch a fetchCategories method for example.

<base-alert type="next">

[See the content module docs for more details](https://content.nuxtjs.org/advanced#handling-hot-reload)

</base-alert>

### Displaying content

You can use `<nuxt-content>` component directly in your template to display the page body.

```html{}[pages/blog/_slug.vue]
<template>
  <article>
    <nuxt-content :document="article" />
  </article>
</template>
```

<base-alert type="next">

See the [content module docs](https://content.nuxtjs.org/displaying#component) for more details

</base-alert>

### Styling your content

Depending on what you're using to design your app, you may need to write some style to properly display the markdown.

`<nuxt-content>` component will automatically add a `.nuxt-content` class, you can use it to customize your styles.

```html
<style>
  .nuxt-content h2 {
    font-weight: bold;
    font-size: 28px;
  }
  .nuxt-content p {
    margin-bottom: 20px;
  }
</style>
```

<base-alert type="next">

See the [content module docs](https://content.nuxtjs.org/displaying#style) for more details

</base-alert>

### Handles Markdown, CSV, YAML, JSON(5)

This module converts your .md files into a JSON AST tree structure, stored in a body variable. You can also add a YAML front matter block to your markdown files or a .yaml file which will be injected into the document. You can also add a json/json5 file which can also be injected into the document. And you can use a .csv file where rows will be assigned to the body variable.

```md
---
title: My first Blog Post
description: Learning how to use @nuxt/content to create a blog
---
```

<base-alert type="next">

See the [content module docs](https://content.nuxtjs.org/writing#markdown) for more details

</base-alert>

### Vue components in Markdown

You can use Vue components directly in your markdown files. You will however need to use your components as kebab case and cannot use self-closing tags.

```html{}[components/global/InfoBox.vue]
<template>
  <div class="bg-blue-500 text-white p-4 mb-4">
    <p><slot name="info-box">default</slot></p>
  </div>
</template>
```

```html{}[content/articles/my-first-blog-post.md]
<info-box>
  <template #info-box>
    This is a vue component inside markdown using slots
  </template>
</info-box>
```

<base-alert type="next">

See the [content module docs](https://content.nuxtjs.org/writing#vue-components) for more details

</base-alert>

### Fully Searchable API

You can use `$content()` to list, filter and search your content easily.

```html{}[pages/blog/index.vue]
<script>
  export default {
    async asyncData({ $content, params }) {
      const articles = await $content('articles', params.slug)
        .only(['title', 'description', 'img', 'slug', 'author'])
        .sortBy('createdAt', 'asc')
        .fetch()

      return {
        articles
      }
    }
  }
</script>
```

<base-alert type="next">

See the [content module docs](https://content.nuxtjs.org/fetching#methods) for more details

</base-alert>

### Previous and Next articles

The content module includes a `.surround(slug)` so that you get previous and next articles easily.

```js
async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return {
      article,
      prev,
      next
    }
  },
```

```html
<prev-next :prev="prev" :next="next" />
```

<base-alert type="next">

See the [content module docs](https://content.nuxtjs.org/fetching#surroundslug-options) for more details

</base-alert>

### Full-text search

The content module comes with a full text search so you can easily search across your markdown files without having to install anything.

```html{}[components/AppSearchInput.vue]
<script>
  export default {
    data() {
      return {
        searchQuery: '',
        articles: []
      }
    },
    watch: {
      async searchQuery(searchQuery) {
        if (!searchQuery) {
          this.articles = []
          return
        }
        this.articles = await this.$content('articles')
          .limit(6)
          .search(searchQuery)
          .fetch()
      }
    }
  }
</script>
```

<base-alert type="next">

See the [content module docs](https://content.nuxtjs.org/fetching#searchfield-value) for more details

</base-alert>

### Syntax highlighting

This module automatically wraps codeblocks and applies [PrismJS](https://prismjs.com/) classes. You can also add a different PrismJS theme or disable it altogether.

<code-group>
  <code-block label="Yarn" active>

```bash
yarn add prism-themes
```

  </code-block>
  <code-block label="NPM">

```bash
npm install prism-themes
```

  </code-block>
</code-group>

```js{}[nuxt.config.js]
content: {
  markdown: {
    prism: {
      theme: 'prism-themes/themes/prism-material-oceanic.css'
    }
  }
}
```

<base-alert type="next">

See the [content module docs](https://content.nuxtjs.org/writing#syntax-highlighting) for more details

</base-alert>

### Extend Markdown Parsing

Originally markdown does not support highlighting lines inside codeblock nor filenames. The content module allows it with its own custom syntax. Line numbers are added to the `pre` tag in data-line attributes and the filename will be converted to a `span` with a `filename` class, so you can style it.

<base-alert type="next">

See the [content module docs](https://content.nuxtjs.org/writing#codeblocks) for more details

</base-alert>

### Table of contents generation

A toc(Table of Contents) array property will be injected into your document, listing all the headings with their titles and ids, so you can link to them.

```html{}[pages/blog/_slug.vue]
<nav>
  <ul>
    <li v-for="link of article.toc" :key="link.id">
      <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
    </li>
  </ul>
</nav>
```

<base-alert type="next">

See the [content module docs](https://content.nuxtjs.org/writing#table-of-contents) for more details

</base-alert>

### Powerful QueryBuilder API (MongoDB like)

The content module comes with a powerful QueryBuilder API similar to MongoDB which allows you to easily see the JSON of each directory at `http://localhost:3000/_content/`. The endpoint is accessible on GET and POST request, so you can use query params.

`http://localhost:3000/_content/articles?only=title&only=description&limit=10`

<base-alert type="next">

See the [content module docs](https://content.nuxtjs.org/fetching#api) for more details

</base-alert>

### Extend with hooks

You can use hooks to extend the module so you can add data to a document before it is stored.

<base-alert type="next">

See the [content module docs](https://content.nuxtjs.org/advanced#hooks) for more details

</base-alert>

### Integration with @nuxtjs/feed

In the case of articles, the content can be used to generate news feeds using [@nuxtjs/feed](https://www.npmjs.com/package/@nuxtjs/feed) module.

<base-alert type="next">

See the [content module docs](https://content.nuxtjs.org/advanced#integration-with-nuxtjsfeed) for more details

</base-alert>

### Support static site generation

The content module works with static site generation using the `nuxt generate`. All routes will be automatically generated thanks to the nuxt crawler feature.

<base-alert>

If using Nuxt <2.13 and you need to specify the dynamic routes you can do so using the generate property and using @nuxt/content programmatically.

</base-alert>

<base-alert type="next">

See the [content module docs](https://content.nuxtjs.org/advanced#programmatic-usage) for more details

</base-alert>

<base-alert type="next">

To see the full [documentation for the content module](https://content.nuxtjs.org/)

</base-alert>

<quiz :questions="questions"></quiz>
