---
title: Pre-processors
description: Configuration your application to use pug and sass with style resources to easily add variables to all components.
position: 2
category: assetManagement
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/03_features/07_configuration_pre-processors
---

<example-intro></example-intro>

`pages/pre-processors.vue` uses pug as a template language and sass for styling.

`nuxt.config.js` :

- registers the style resources module.
- contains a `styleResources` property to add `assets/variables.scss`.
- contains a `css property` to add `assets/main.scss`.

`package.json` shows the dependencies needed.

<base-alert type="next">

Learn more in the Features book in the [Configuration](/guides/features/configuration#pre-processors) chapter.

</base-alert>

<code-sandbox :src="csb_link"></code-sandbox>
