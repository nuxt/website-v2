---
title: The $nuxt Helpers
description: Using the $nuxt helpers with $nuxt.isOnline, renderedOn, refresh(), onNuxtReady
position: 23
category: examples
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/02_concepts/02_context_helpers-helpers?
---

In this example we use:

- the `$nuxt.isOnline` and `$nuxt.isOffline` helper as a connection checker to tell the user if they are online or offline.
- `asyncData` to return the time in seconds along with
- the process helpers, `renderedOn` , to print a message telling us if we are rendered on the server or client.
- a button which when clicked calls a method that refreshes the number of seconds using `$nuxt.refresh()`.
- the `onNuxtReady` helper to print a message to the console when Nuxt.js is ready and mounted.

<base-alert type="next">

Learn more in the Concepts book in the [Context and Helpers](/guides/concepts/context-helpers#helpers) chapter.

</base-alert>

<code-sandbox :src="csb_link"></code-sandbox>
