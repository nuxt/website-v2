---
title: Client Only Plugins
description: In this example we show how to use a plugin with an external package - axios
position: 64
category: examples
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/12_plugins_client
---

In this example we register a plugin so that it is only available on the client side. In the plugins folder we have a file called `client-only.js` which uses the `window.alert()` function to send an alert message. You will see this message before the page is initialized which is how plugins work. As we do not have access to the window property on server side we must register this plugin only on the client. You can see in the nuxt.config.js file that we register the plugin with `.client.js` as its extension.

<base-alert type="next">

Learn more in the Directory Structure book in the [plugins](/guides/directory-structure/plugins#external-packages#client-or-server-side-only) chapter.

</base-alert>

<code-sandbox :src="csb_link"></code-sandbox>
