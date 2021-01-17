---
title: Directory Structure
description: The default Nuxt.js application structure is intended to provide a great starting point for both small and large applications. You are free to organize your application however you like and can create other directories as and when you need them.
position: 3
category: get-started
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/01_get_started/03_directory_structure?fontsize=14&hidenavigation=1&theme=dark
---

The default Nuxt.js application structure is intended to provide a great starting point for both small and large applications. You are free to organize your application however you like and can create other directories as and when you need them.

Let's create the directories and files that do not exist in our project yet.

```bash
mkdir components assets static
touch nuxt.config.js
```

These are the main directories and files that we use when building a Nuxt.js application. You will find an explanation of each of them below.

<base-alert type="info">

Creating directories with these names enables features in your Nuxt.js project.

</base-alert>

## Directories

### The pages directory

The `pages` directory contains your application's views and routes. As you've learned in the last chapter, Nuxt.js reads all the `.vue` files inside this directory and uses them to create the application router.

<base-alert type="next">

Learn more about the [pages directory](/docs/2.x/directory-structure/pages)

</base-alert>

### The components directory

The `components` directory is where you put all your Vue.js components which are then imported into your pages.

With Nuxt.js you can create your components and auto import them into your .vue files meaning there is no need to manually import them in the script section. Nuxt.js will scan and auto import these for you once you have components set to true.

<base-alert type="next">

Learn more about the [components directory](/docs/2.x/directory-structure/components)

</base-alert>

### The assets directory

The `assets` directory contains your uncompiled assets such as your styles, images, or fonts.

<base-alert type="next">

Learn more about the [assets directory](/docs/2.x/directory-structure/assets)

</base-alert>

### The static directory

The `static` directory is directly mapped to the server root and contains files that have to keep their names (e.g. `robots.txt`) _or_ likely won't change (e.g. the favicon)

<base-alert type="next">

Learn more about the [static directory](/docs/2.x/directory-structure/static)

</base-alert>

### The nuxt.config.js file

The `nuxt.config.js` file is the single point of configuration for Nuxt.js. If you want to add modules or override default settings, this is the place to apply the changes.

<base-alert type="next">

Learn more about the [nuxt.config.js file](/docs/2.x/directory-structure/nuxt-config)

</base-alert>

### The package.json file

The `package.json` file contains all the dependencies and scripts for your application.

## More about the project structures

There are more helpful directories and files, including [content](/docs/2.x/directory-structure/content), [layouts](/docs/2.x/directory-structure/layouts), [middleware](/docs/2.x/directory-structure/middleware), [modules](/docs/2.x/directory-structure/modules), [plugins](/docs/2.x/directory-structure/plugins) and [store](/docs/2.x/directory-structure/store) . As they aren't necessary for small applications, they are not covered here.

<base-alert type="next">

To learn about all directories in detail, feel free to read the the [Directory Structure book](/docs/2.x/directory-structure/nuxt).

</base-alert>
