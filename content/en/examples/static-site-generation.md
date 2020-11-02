---
title: Static site Generation
description: Use the generate property for customizations for when deploying static sites
position: 55
category: essentials
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/05_dist
---

<example-intro></example-intro>

`nuxt.config.js` for static site generation shows

- `target` is set to `static`.
- the `generate` property:
  - `dir` property to change the name of the `dist` folder
  - `subFolders` set to false to not have sub folders
  - `fallback` property set to true so that unknown routes are rendered.
  - `excludes` property to exclude pages from static generation.

`my-dist` folder to see an example of a generated `dist` folder

<base-alert type="next">

Learn more in the Directory Structure book in the [dist](/guides/directory-structure/dist) chapter.

</base-alert>

<code-sandbox :src="csb_link"></code-sandbox>
