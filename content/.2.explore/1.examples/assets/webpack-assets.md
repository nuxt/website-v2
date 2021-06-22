---
title: webpack Assets
description: Use the assets folder to add css, images and fonts to your application
csb_link: https://codesandbox.io/embed/github/nuxt-academy/examples/tree/master/asset-management/webpack-assets?fontsize=14&hidenavigation=1&theme=dark&view=editor
---

<example-intro></example-intro>

`pages/index.vue` shows:

- how to add an image from the assets folder.
- how to add a background image from the assets folder using CSS.
- how to add dynamic images from the assets folder using the data property.

`nuxt.config.js` contains the `css` property for globally adding a css file.

`assets/main.css` shows how to reference the DMSans fonts from the assets folder using the `@font-face` rule.

<alert type="next">

Learn more in the Directory Structure book in the [Assets](/docs/directory-structure/assets) chapter.

</alert>

<code-sandbox :src="csb_link"></code-sandbox>
