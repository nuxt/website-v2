---
title: Preview Mode
description: Live Preview for target static with the preview mode
category: features
position: 12
---

With Nuxt.js and full static you can now use live preview out of the box which will call your API or your CMS so you can see the changes live before deploying.

<base-alert> Only available when using [target:static](/guides/features/deployment-targets#static-hosting) </base-alert>

The preview mode will automatically refresh the page data as it uses `$nuxt.refresh` under the hood and therefore calls nuxtServerInit, asyncData and fetch on the client side.

In order to activate live preview you will need to add the following plugin:

```js{}[plugins/preview.client.js]
export default async function ({ query, enablePreview }) {
  if (query.preview) {
    enablePreview()
  }
}
```

<base-alert>
EnablePreview is only available in the context object of plugins. Previews are handled client-side and
thus the plugin should be run on the client: preview.client.js
</base-alert>

```js{}[nuxt.config.js]
export default {
  plugins: ['plugins/preview.client.js']
}
```

Once you have added the plugin you can now generate your site and serve it.

<code-group>
<code-block label="npx" active>

```bash
npx nuxt generate
npx nuxt start
```

</code-block>
<code-block label="Yarn" >

```bash
yarn generate
yarn start
```

  </code-block>
</code-group>

Then you can then see your preview page by adding the query param to the end of the page you want to see once:

```js
?preview=true
```

<base-alert>
enablePreview should be tested locally with yarn start and not yarn
dev
</base-alert>

For pages that are not yet generated, SPA fallback will still call the API before showing the 404 page as these pages exist on the API but are not re-generated yet

For pages that are not generated and don't exist on the API, for example draft content in your CMS that is not publicly available, you will need to use the validate hook:

```js
async validate({ app, params, $preview }) {
  if ($preview) {
    return true
}
```

### What's next

<base-alert type="next">

Check out the [Directory Structure book](/guides/directory-structure/nuxt)

</base-alert>
