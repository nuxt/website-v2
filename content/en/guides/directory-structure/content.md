---
title: content
description: Empower your NuxtJS application with `@nuxtjs/content` module where you can write in a `content/` directory and fetch your Markdown, JSON, YAML and CSV files through a MongoDB like API, acting as a **Git-based Headless CMS**.
position: 4
category: Directory Structure
categoryPosition: 4
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

Empower your NuxtJS application with `@nuxtjs/content` module where you can write in a `content/` directory and fetch your Markdown, JSON, YAML and CSV files through a MongoDB like API, acting as a **Git-based Headless CMS**.

### Hot reload in development

The content module is blazing fast when it comes to hot reloading in development due to not having to go through webpack when you make changes to your markdown files. You can also  listen to the `content:update` event and create a plugin so that every time you update a file in your content directory it will dispatch a fetchCategories method for example.

➡️ [See the content module docs for more details](https://content.nuxtjs.org/advanced#handling-hot-reload)

### Displaying content

You can use `<nuxt-content>` component directly in your template to display the page body.

➡️ See the [content module docs](https://content.nuxtjs.org/displaying#component) for more details

### Styling your content

Depending on what you're using to design your app, you may need to write some style to properly display the markdown.

`<nuxt-content>` component will automatically add a `.nuxt-content` class, you can use it to customize your styles.

➡️ See the [content module docs](https://content.nuxtjs.org/displaying#style) for more details

### Handles Markdown, CSV, YAML, JSON(5)

This module converts your .md files into a JSON AST tree structure, stored in a body variable. You can also add a YAML front matter block to your markdown files or a .yaml file which will be injected into the document. You can also add a json/json5 file which can also be injected into the document. And you can use a .csv file where rows will be assigned to the body variable.

➡️ See the [content module docs](https://content.nuxtjs.org/writing#markdown) for more details]

### Vue components in Markdown

You can use Vue components directly in your markdown files. You will however need to use your components as kebab case and cannot use self-closing tags.

➡️ See the content module docs](https://content.nuxtjs.org/writing#vue-components) for more details

### Fully Searchable API

You can use `$content()` to list, filter and search your content easily.

➡️ See the [content module docs](https://content.nuxtjs.org/fetching#methods) for more details

### Previous and Next articles

The content module includes a `.surround(slug)` so that you get previous and next articles easily.

➡️ See the [content module docs](https://content.nuxtjs.org/fetching#surroundslug-options) for more details

### Full-text search

The content module comes with a full text search so you can easily search across your markdown files without having to install anything.

➡️ See the [content module docs](https://content.nuxtjs.org/fetching#searchfield-value) for more details

### Syntax highlighting

This module automatically wraps codeblocks and applies [PrismJS](https://prismjs.com/) classes. You can also add a different prismJS theme or disable it altogether.

➡️ See the [content module docs](https://content.nuxtjs.org/writing#syntax-highlighting) for more details

### Extend Markdown Parsing

Originally markdown does not support highlighting lines inside codeblock nor filenames. The content module allows it with its own custom syntax. Line numbers are added to the pre tag in data-line attributes and the filename will be converted to a span with a filename class, so you can style it.

➡️ See the [content module docs](https://content.nuxtjs.org/writing#codeblocks) for more details

### Use a theme

You can start writing inside the `content/` directory and enjoy a beautiful documentation website, blog, portfolio, and more using one of our themes.

➡️ See the [content module docs](https://content.nuxtjs.org/theme) for more details

### Table of contents generation

A toc(Table of Contents) array property will be injected into your document, listing all the headings with their titles and ids, so you can link to them.

➡️ See the [content module docs](https://content.nuxtjs.org/writing#table-of-contents) for more details

### Powerful QueryBuilder API (MongoDB like)

The content module comes with a powerful QueryBuilder API similar to MongoDB which allows you to easily see the JSON of each directory at `http://localhost:3000/_content/` . The endpoint is accessible on GET and POST request, so you can use query params.

`http://localhost:3000/_content/articles?only=title&only=description&limit=10`

➡️ See the [content module docs](https://content.nuxtjs.org/fetching#api) for more details

### Extend with hooks

You can use hooks to extend the module so you can add data to a document before it is stored

➡️ See the [content module docs](https://content.nuxtjs.org/advanced#hooks) for more details

### Integration with @nuxtjs/feed

In the case of articles, the content can be used to generate news feeds using [@nuxtjs/feed](https://www.npmjs.com/package/@nuxtjs/feed) module.

➡️ See the [content module docs](https://content.nuxtjs.org/advanced#integration-with-nuxtjsfeed) for more details

### Support static site generation

The content module works with static site generation using the `nuxt build && nuxt export.` All routes will be automatically generated thanks to the nuxt crawler feature.

<base-alert>

If using Nuxt <2.13 you can generate your static site using `nuxt generate` and if you need to specify the dynamic routes you can do so using the generate property and using @nuxt/content programmatically.

</base-alert>

➡️ See the [content module docs](https://content.nuxtjs.org/advanced#programmatic-usage) for more details

➡️ To see the full [documentation for the content module](https://content.nuxtjs.org/)



<quiz :questions="questions"></quiz>

