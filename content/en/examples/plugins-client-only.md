---
title: Client Only Plugins
description: In this example we show how to use a plugin so that it is only available on the client side
position: 402
category: plugins
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/12_plugins_client
---

<example-intro></example-intro>

`plugins/client-only.client.js` uses the `window.alert()` function which is not available on server side.

`nuxt.config.js` contains the `plugins` property to register the plugin on client side thanks to the `.client` extension.

<base-alert type="next">

Learn more in the Directory Structure book in the [plugins](/docs/2.x/directory-structure/plugins#client-or-server-side-only) chapter.

</base-alert>

<code-sandbox :src="csb_link"></code-sandbox>
