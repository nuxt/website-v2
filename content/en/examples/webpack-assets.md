---
title: webpack Assets
description: Use the assets folder to add css, images and fonts to your application
position: 1
category: assetManagement
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/02_assets
---

<example-intro></example-intro>

`pages/index.vue` shows:

- how to add an svg to the `<img>` tag from the assets folder.
- how to add a background image.

`nuxt.config.js` contains the `css` property for globally adding a css file.

`assets/main.css` shows how to reference the DMSans fonts from the assets folder using the `@font-face` rule.

<base-alert type="next">

Learn more in the Directory Structure book in the [Assets](/guides/directory-structure/assets) chapter.

</base-alert>

<code-sandbox :src="csb_link"></code-sandbox>
