---
title: SEO Twitter and Open Graph
description: In this example we create a component to add our Twitter and Open Graph tags for when sharing on social media.
position: 4
category: seo
csb_link: https://codesandbox.io/embed/github/nuxt-academy/examples/tree/master/seo/seo-twitter-og?fontsize=14&hidenavigation=1&module=%2Fcomponents%2FSocialHead.vue&theme=dark&view=editor
---

<example-intro></example-intro>

`components/SocialHead` uses the `head` property to show `meta` for both Twitter and Open Graph social sharing using props.

`pages/mountains/slug.vue` uses the `SocialHead` component passing the mountain's title, description and image as the values for props. It also uses the head tag to set the canonical link.

`nuxtconfig.js` shows the head tag with default meta for social sharing for when the the `SocialHead` component is not used as well as the canonical link.

<base-alert type="next">

Learn more about the options available for `head`, in the [vue-meta documentation](https://vue-meta.nuxtjs.org/api/#metainfo-properties).

</base-alert>

<base-alert type="next">

Learn more about meta tags in the Features book in the [Meta Tags and SEO](/docs/2.x/features/meta-tags-seo) chapter.

</base-alert>

<code-sandbox :src="csb_link"></code-sandbox>
