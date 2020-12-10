---
title: Static Site Generation
description: With static site generation you can render your application during the build phase and deploy it to any static hosting services such as Netlify, Github pages, Vercel etc.
position: 4
category: concepts
questions:
  - question: You need a server to host your static site
    answers:
      - True
      - False
    correctAnswer: False
  - question: What command do you use to generate your static site?
    answers:
      - nuxt build
      - nuxt prerender
      - nuxt generate
    correctAnswer: nuxt generate
  - question: When is your API called?
    answers:
      - Every time you navigate to the page with the API content
      - When you generate your site
      - When you generate your site and every time you navigate to the page with the API content
    correctAnswer: When you generate your site
  - question: Which pages will fallback into single page application mode?
    answers:
      - The error page
      - Those that are excluded from generation with generate.excludes
      - All pages on navigation
    correctAnswer: Those that are excluded from generation with generate.excludes
  - question: How do you update the content to your site?
    answers:
      - It is updated automatically
      - You need to regenerate your site
    correctAnswer: You need to regenerate your site
---

With static site generation you can render your application during the build phase and deploy it to any static hosting services such as Netlify, Github pages, Vercel etc. This means that no server is needed in order to deploy your application.

### Generating your site

When deploying your site in with [target:static](/docs/2.x/features/deployment-targets#static-hosting) all your `.vue` pages will be generated into HTML and JavaScript files. All calls to APIs will be made and cached in a folder called static inside your generated content so that no calls to your API need to be made on client side navigation.

### Step 1: Browser to CDN

When a browser sends the initial request, it will hit the CDN.

### Step 2: CDN to Browser

The CDN will send the already generated HTML, JavaScript and static assets back to the browser. The content is displayed and the Vue.js hydration kicks in, making it reactive. After this process, the page is interactive.

### Step 3: Browser to Browser

Navigating between pages with [`<NuxtLink>`](/docs/2.x/features/nuxt-components#the-nuxtlink-component) is done on the client side so you don't hit the CDN again and all API calls will be loaded from the already cached static folder even if you hard refresh the browser.

### SPA Fallback

Pages that have been excluded from generation, by using the `generate.exclude` property will fallback to being a single page application. These pages will therefore not exist in the CDN and will be rendered on client side in the browser once the user navigates to that page.

<base-alert type="next">

To learn more about the [generate property](/docs/2.x/configuration-glossary/configuration-generate#exclude)

</base-alert>

### Updating your content

In order to get new content to your site from your API you will need to regenerate your site again. With most static sites hosting providers you can do this by pushing your changes to your master branch via the git command or via a pull request.

### Preview Mode

The Preview mode will call your API or your CMS so you can see the changes live before deploying. See the [preview mode](/docs/2.x/features/live-preview) on how to enable this feature.

<quiz :questions="questions"></quiz>
