---
title: Static site Generation
description: Use the generate property for customizations for when deploying static sites
position: 55
category: examples
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/05_dist
---

In this example we show you how you can customize the `generate` property for when you are generating a static site.

- Change the name of the dist folder using the `dir` property
- Set `subFolders` to false.
- The `fallback` property is very useful so that unknown routes are rendered.
- The `excludes` property allows you to exclude pages from static generation which means they will fallback to SPA and only be rendered on the client side which can be useful for admin pages or dynamic pages that you don't want generated statically.

Check out the nuxt.config file for an example of how to use the generate property and don't forget to make sure `target` is set to `static` for static site generation.

Check out the dist folder in this example which has been named my-dist to see the files that have been generated. You will notice how the admin file has been excluded and is not in the my-dist folder.

<base-alert type="next">

Learn more in the Directory Structure book in the [dist](/guides/directory-structure/dist) chapter.

</base-alert>

<code-sandbox :src="csb_link"></code-sandbox>
