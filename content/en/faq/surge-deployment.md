---
title: How to deploy with Surge?
description: How to deploy Nuxt.js app with Surge?
menu: Deploy on Surge
category: deployment
position: 211
---

Nuxt.js gives you the possibility to host your web application on any static hosting like [Surge](https://surge.sh/) for example.

To deploy on Surge, first install it on your computer:

```bash
npm install -g surge
```

Then, we tell Nuxt.js to generate our web application:

```bash
npm run generate
```

It will create a `dist` folder with everything inside ready to be deployed on a static hosting.

We can then deploy it to Surge:

```bash
surge dist/
```

Done :)

If you have a project with [dynamic routes](/guide/routing#dynamic-routes), take a look at the [`generate` configuration](/api/configuration-generate) to tell Nuxt.js how to generate these dynamic routes if you are using Nuxt <= v2.12.

<div class="Alert">

When generating your web application with `nuxt generate`, [the context](/api) given to [asyncData](/guide/async-data) and [`fetch`](/guide/vuex-store#the-fetch-method) will not have `req` and `res`.

</div>
