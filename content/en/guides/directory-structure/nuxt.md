---
title: .nuxt
description: The `.nuxt` directory is the so-called *build directory*. It is dynamically generated and hidden by default. Inside the directory you can find automatically generated files when using `nuxt dev` or your build artifacts when using `nuxt build`.
position: 1
category: directory-structure
questions:
  - question: What what commands is the .nuxt folder generated?
    answers:
      - nuxt start
      - nuxt generate
      - nuxt build or nuxt dev
    correctAnswer: nuxt build or nuxt dev
  - question: What property do you use to rename the nuxt folder?
    answers:
      - dir
      - build
      - buildDir
    correctAnswer: buildDir
  - question: In which file can you find your generated routes?
    answers:
      - pages.js
      - router.js
      - views.js
    correctAnswer: router.js
  - question: What can you find in the components folder?
    answers:
      - nuxt components
      - custom components
      - global components
    correctAnswer: nuxt components
  - question: The .nuxt folder is the folder you need to upload when deploying static sites.
    answers:
      - true
      - false
    correctAnswer: false
---

The `.nuxt` directory is the so-called _build directory_. It is dynamically generated and hidden by default. Inside the directory you can find automatically generated files when using `nuxt dev` or your build artifacts when using `nuxt build`. Modifying these files is great for debugging but remember that they are generated files and once you run the `dev` or `build` command again, anything that was saved here will be regenerated.

<base-alert>

The `.nuxt` directory should not be committed to your version control system and should be ignored through your `.gitignore` as it will be generated automatically when executing `nuxt dev` or `nuxt build`.

</base-alert>

### The buildDir Property

By default, many tools assume that `.nuxt` is a hidden directory, because its name starts with a dot. You can use the buildDir option to prevent that. If you do change the name remember to add the new name to your `.gitignore` file.

```js{}[nuxt.config.js]
export default {
  buildDir: 'nuxt-dist'
}
```

### Inside the .nuxt folder:

- The router.js file is the generated router file that Nuxt.js generates for you when you put `.vue` files inside the pages folder. You can use this file for debugging for when you want to look up which routes are generated for vue-router and find out the names of a specific route.
- The router.scrollBehavior.js which is your Router ScrollBehavior
- The Components folder has all your Nuxt components such as NuxtChild and NuxtLink. It also contains the nuxt-build-indicator which is the page we see when your application is building and nuxt-loading which is your loading component that gets seen when we are waiting for your page to load. You will also find the nuxt-error page in here which contains the Nuxt default error page.
- The mixins folder has the files needed for the Nuxt `$fetch` method.
- The views folder contains your app template and your server error page.
- The app.js is your main application file.
- The client.js file is your client file needed for everything that happens client side.
- The empty file is intentionally left empty for noop aliases
- The index.js file bootstraps your application.
- The loading.html is the file that is used when the page is loading.
- The middleware file is where your middleware is kept
- The server.js file is all the code that is ran on the server
- the utilities contains the utilities that Nuxt needs for it to work.

### Deploying

The `.nuxt` folder is part of the files needed to deploy your SSR application. It is not needed for deploying your static Nuxt.js app though because we use the `dist` folder for that.

<quiz :questions="questions"></quiz>
