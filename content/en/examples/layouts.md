---
title: Layouts
description: Using layouts to show different ways to structure your page
position: 1
category: essentials
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/07_layouts
---

<example-intro></example-intro>

- `layouts/default.vue` is used in the home page
- `layouts/auth.vue` is used in the /login page
- `layouts/profile.vue` is used in the /profile page when logged in

They are stored in the `layouts/` directory and used in the corresponding pages with the `layout` property.

If no `layout` property is defined, it will fallback to the default layout.

<base-alert type="next">

Learn more in the Concepts book in the [Views](/guides/concepts/views) chapter or in the Directory Structure book in the [Layouts](/guides/directory-structure/layouts) chapter.

</base-alert>

<code-sandbox :src="csb_link"></code-sandbox>
