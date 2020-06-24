---
title: Directory Structure
description: The default Nuxt.js application structure is intended to provide a great starting point for both small and large applications. Of course, you are free to organise your application however you like and can create other directories as and when you need them.
position: 3
category: Get Started
categoryPosition: 1
---
The default Nuxt.js application structure is intended to provide a great starting point for both small and large applications. Of course, you are free to organise your application however you like and can create other directories as and when you need them.

Let's create the directories and files that do not exist in our project yet. 

```bash
mkdir components assets static
touch nuxt.config.js
```

These are the main directories and files that we use when building an Nuxt.js application. You will find an explanation of each of them below.

<base-alert type="info">

**Creating directories with these names enables features in your Nuxt.js project.

</base-alert>

## Directories

### The pages directory

The `pages` directory contains your application's views and routes. As you've learned in the last chapter, Nuxt.js reads all the `.vue` files inside this directory and uses them to create the application router.

➡️ Learn more about the [pages directory](/guides/directory-structure/pages)

### The components directory

The `components` directory is where you put all your Vue.js components which are then imported into your pages. 

➡️ Learn more about the [components directory](/guides/directory-structure/components)

### The assets directory

The `assets` directory contains your uncompiled assets such as your styles, images, or fonts.

➡️ Learn more about the [assets directory](/guides/directory-structure/assets)

### The static directory

The `static` directory is directly mapped to the server root and contains files that have to keep their names (e.g. `robots.txt`) *or* likely won't change (e.g. the favicon)

➡️ Learn more about the [static directory](/guides/directory-structure/static)

### The nuxt.config.js file

The `nuxt.config.js` file is the single point of configuration for Nuxt.js. If you want to add modules or override default settings, this is the place to apply the changes.

➡️ Learn more about the [nuxt.config.js file](/guides/directory-structure/nuxt-config)

### The package.json file

The `package.json` file contains all the dependencies and scripts for your application.

➡️ Learn more about the [package.json file](/guides/directory-structure/package-json)

## More about the project structures

There are more helpful directories and files, including [content](/guides/directory-structure/content), [layouts](/guides/directory-structure/layouts), [middleware](/guides/directory-structure/middleware), [modules](/guides/directory-structure/modules), [plugins](/guides/directory-structure/plugins) and [store](/guides/directory-structure/store) . As they aren't necessary for small applications, they are not covered here. 

🎓To learn about all directories in detail, feel free to read the the book on Project Directories.
