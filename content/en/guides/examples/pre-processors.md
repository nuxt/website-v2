---
title: Pre-processors
description: Configuration your application to use pug and sass with style resources to easily add variables to all components.
position: 36
category: examples
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/03_features/07_configuration_pre-processors
---

In this example we show how to use pug as a templating language. The `package.json` will show the dependencies needed so you can use Pug and the `pre-processors.vue` file will show you how it is used.

The package.json file also shows which dependencies are needed for Sass and the `pre-processors.vue` page show sass being used in the style tag using a variable for a color. We use the style resources module to make the variables available in all components. You can see this module is added as a dependency in the package.json file and registered in the `nuxt.config.js` file along with a styleResources property so you can add the variables.scss file. We also show how the `main.scss` file is globally added. The `.scss` files are located in the assets folder.

<base-alert type="next">

Learn more in the Features book in the [Configuration](/guides/features/configuration#pre-processors) chapter.

</base-alert>

<code-sandbox :src="csb_link"></code-sandbox>
