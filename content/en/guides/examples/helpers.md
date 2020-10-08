---
title: The $nuxt Helpers
description: Using the $nuxt helpers with $nuxt.isOnline, renderedOn, refresh(), onNuxtReady
position: 23
category: examples
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/02_concepts/02_context_helpers-helpers?
---

`pages/index.vue` shows:

- `$nuxt.isOnline` and `$nuxt.isOffline` to tell the user if they are online or offline.
- `renderedOn` , to print a message telling us if the page is rendered on the server or client.
- `$nuxt.refresh()` refreshes data without refreshing the page .

<base-alert type="next">

Learn more in the Concepts book in the [Context and Helpers](/guides/concepts/context-helpers#helpers) chapter.

</base-alert>

<code-sandbox :src="csb_link"></code-sandbox>
