---
title: Dynamic Pages
description: Using dynamic pages to fetch data from an API and populate those pages
position: 61
category: examples
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/11_pages
---

In this example we show how to create dynamic pages with Nuxt. In the pages folder we have a `_slug.vue` page uses `asyncData` passing in the params to context and returns the slug from params. We can then call any page we like with any name and it will print out the value from the route params. In this example we have called the route param rivers as can be seen in the navigation component.

We also have a `mountains.vue` page which fetches our mountains from our API. We then print out the name of each mountain and use the `<NuxtLink>` component to link to the detail page for each mountain structured as continent/slug. The continent folder is a dynamic folder as it is prefixed with an underscore, `_continent`. Inside this folder we have a `_mountain.vue` page which is the detail page for each mountain.

In `_mountain.vue` we make another call to our API using fetch and we use the JavaScript `find()` method to filter the mountains and return the correct mountain and continent that we have requested from the params. We then return these values so we can use them in our template.

If there is an error we redirect to our mountains page passing in the query param of error. You will notice that in the mountains page we print an error message if there is an error and then use `$router.push` to reset the query param so it removes the message.

<base-alert type="next">

Learn more in the Directory Structure book in the [pages](/guides/directory-structure/pages) chapter.

</base-alert>

<code-sandbox :src="csb_link"></code-sandbox>
