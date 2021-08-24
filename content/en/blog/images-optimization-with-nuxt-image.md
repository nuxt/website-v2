---
title: Hands-on image optimization with Nuxt Image
description: The Nuxt Image module provides an intuitive way to optimize our images. Let's dive in with a concrete example.
imgUrl: blog/filename/main.jpg
date: 2021-06-15
authors:
  - name: Clément Ollivier
    avatarUrl: https://pbs.twimg.com/profile_images/1370286658432724996/ZMSDzzIi_400x400.jpg
    link: https://twitter.com/clemcodes
tags:
  - Nuxt Image
  - Image optimization
  - Nuxt module
---

Image optimization is a crucial part of improving a website's performance, but it can be hard to do on our own. We have to make sure that the images that we use are not wider than their display size, and that we serve the best format and size for the browser given the viewport's dimensions.

To help us with that, the Nuxt Image module provides two components that act as drop-in replacements for the HTML `<img>` and `<picture>` tags. We'll start from a design and analyze it to see how we can get the most out of the module.

<base-alert type="info">
In this tutorial, we will focus on configuring the image components. We recommend you to <a href="https://codesandbox.io/s/image-optimization-with-nuxt-image-31c65" target="_blank" rel="noreferer noopener">use the Codesandbox</a> to follow along and inspect the generated HTML.
</base-alert>

## Analyzing the layout

![Homepage layouts in phone, tablet and desktop view](/blog/hands-on-image-optimization-with-nuxt-image/homepage.png)

### Avatar image

The avatar image is pretty small, and its size doesn't change depending on the viewport.

### Hero image

In small and medium sizes, the hero image is full width. In large screens, its maximum width is 1280px.

### Featured images

The column layout below the hero image depends on the viewport's size as well. It displays a vertical layout with images taking almost the whole viewport until reaching the `lg` breakpoint, and then transforms into a 3-column layout.

## Installation

Now that we have a clear picture of how the images need to be displayed, let's use the Nuxt Image module!

First, install the module:

<code-group>
  <code-block label="Yarn" active>

```bash
yarn add @nuxt/image
```

  </code-block>
  <code-block label="npm">

```bash
npm install @nuxt/image
```

  </code-block>
</code-group>

And tell Nuxt to use it:

```js{}[nuxt.config.js]
modules: ['@nuxt/image']
```

## Using Nuxt Image on the homepage

Now that we're ready to use the module, we'll leverage the `nuxt-img` component to display and resize our homepage images.

### Integrate the Avatar picture

The avatar picture won't change between viewports, meaning we can apply a single width to it:

```vue{}
<nuxt-img src="/img/avatar.jpg" alt="profile thumbnail" width="250" />
```

Inspect the generated HTML, and notice the image's URL:

```html{}
<img src="/_ipx/avatar.jpg?w=250" alt="profile thumbnail" width="250" />
```

Behind the scene, Nuxt Image's default provider, [IPX](https://github.com/unjs/ipx), reduces the size of the image to match the 250px width we specify in the markup, so we're assured we won't deliver an image bigger than necessary to the users.

Now move on to our hero image, where the image's sizes are different between viewports.

### Integrate the Hero picture

Remember that the hero's component picture is displayed full-width until we reach large viewports, and then displayed in 1280px. We could make our image single-sized at 1280px, and rely on CSS for it to shrink as viewport's width goes down, but we would be serving a large image to users who don't need it.

Thankfully, Nuxt Image has got us covered. The `sizes` prop allows to specify different viewports:

```vue{}
<nuxt-img src="/img/hero.jpeg" alt="Our beautiful hero" sizes="md:100vw xl:1280px" />
```

Nuxt Image generates an image tag with a `srcset` attribute based on what we specified in the `sizes`prop:

```html{}
<img
  src="/_ipx/hero.jpeg?w=1280"
  alt="Our beautiful hero"
  sizes="(max-width: 1024px) 100vw, 1280px"
  srcset="/_ipx/hero.jpeg?w=1024 1024w, /_ipx/hero.jpeg?w=1280 1280w"
>
```

<base-alert type="info">
  You might wonder where the `md` and `lg` breakpoints come from. Nuxt Image provides a set of sensible aliases by default. <a href="https://image.nuxtjs.org/api/options#screens" target="_blank" rel="noferer noopener">Refer to the documentation</a> for a complete list and how to override them.
</base-alert>

### Integrate the featured images

The process for the featured images is similar to the hero picture; we will apply the `sizes`prop to resize the images accordingly.

```vue{}
<nuxt-img src="/img/featured.jpeg" alt="Featured image" sizes="sm:90vw md:80vw lg:30vw" />
```

### Serve modern formats with `<nuxt-picture>`

For now, we're serving our images in their original `.jpeg` format. But modern formats like `webp` offer better compression rates. Wouldn't it be nice to serve our images in `webp` for browsers that support this format? In HTML, we can achieve that with the `<picture>` tag. The traditional way is to include a step in our build pipeline that handles the copy and conversion of `.jpeg` and `.png` images to `.webp`, and handle the fallback in our HTML like so:

```html{}
<picture>
  <source type="image/webp" srcset="/hero.webp">
  <img src="/hero.jpeg" alt="Misty forest">
</picture>
```

Thanks to the Nuxt Image module, we can handle this directly inside our markup, without the additional build step. Replace the Hero image tag we created earlier with the `<nuxt-picture>` component:

```vue{}
<nuxt-picture src="/hero.jpeg" alt="Misty forest" sizes="lg:100vw xl:1280px" />
```

Take a look at the generated HTML. The `<picture>` tag is now used to display out image, converted to WebP. A `jpeg` fallback is also provided, to make sure legacy browsers can still display the image.

Our homepage images are now ready for production. To recap what we learned:

- Define `width` property to adjust the images' dimensions and avoid serving bigger images than what is actually needed
- Adapt to responsive breakpoints with the `sizes` prop
- Convert our images to modern formats while still supporting legacy browsers

### What's next?

We didn't cover all the module's features; the Nuxt Image module also provides:

- Integrations with [third-party providers](https://image.nuxtjs.org/getting-started/providers) to use CDNs to serve our images.
- [Presets](https://image.nuxtjs.org/components/nuxt-img/#preset) to enforce consistency and avoid duplication.
- [Advanced transformations and modifiers](https://image.nuxtjs.org/api/options), such as crop or grayscale.
- [The `$img` functionality](https://image.nuxtjs.org/api/$img) to apply transformations outside the provided components.

To take advantage of all these features, refer to the [module's documentation](https://image.nuxtjs.org/).

Happy coding!
