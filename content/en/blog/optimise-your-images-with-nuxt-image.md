---
title: Hands-on images optimization with Nuxt Image
description: The Nuxt Image module provides an intuitive way to optimize your images, let's dive in with a concrete example.
imgUrl: blog/filename/main.jpg
date: 2021-06-08
authors:
  - name: Clément Ollivier
    avatarUrl: https://pbs.twimg.com/profile_images/1370286658432724996/ZMSDzzIi_400x400.jpg
    link: https://twitter.com/clemcodes
tags:
  - Nuxt Image
  - Image optimisation
  - Nuxt module
---

Images optimization is a crucial part for improving a website's performance, but it can be hard work to do on your own. You have to make sure that the images that you use are not wider than their display size, and that you serve the best formats according to browsers specifications and viewport's dimensions.

To help you with that, the Nuxt Image module provides two components that act as drop-in replacements for the HTML `<img>` and `<picture>` tags. We'll start from design comps and analyze them to see how you can get the most out of the module.

In this tutorial, we will focus on integrating the images parts. We recommend you to use the Codesandbox to follow along and inspect the generated HTML.

## Analyze the layouts

- Image : 3 homepage layouts, s, md and lg with :
  - Big hero image
  - 3 columns card layout w/ image in each
  - Avatar image in header

### Hero image

In small and medium sizes, the hero image takes the whole viewport's width. In large screens, the hero image's width is capped at 1280px.

### Featured images

The columns layout below the hero image depends on the viewport's size as well : It displays a vertical layout with images taking almost the whole viewport until reaching the `l` breakpoint, and then transforms into a 3 columns layout.

### Avatar image

The avatar image is pretty small, and its size doesn't change depending on the viewport.

- Image : 3 blog post layouts, s, md and lg with :
  - Image to illustrate the article, 1/2 width in lg, full below
  - author image, like header avatar

### Article image

In small sizes, the article image is displayed in nearly full width, before taking half its container's size in large screens, which means 640px.

### Author image

What's interesting with the author's picture is that it shares the same properties as the avatar image. We'll see how to handle that as well.

## Installation

Now that we have a clear vision of the images displays, let's use the Nuxt Image module!

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
modules: ['@nuxtjs/style-resources']
```

## Using Nuxt Image on the homepage

Now that we're ready to use the module, we'll leverage the `nuxt-img` component to display and resize our homepage images.

### Integrate the Avatar picture

The avatar picture won't change between viewports, meaning we can apply a single width to it:

`<nuxt-img src="/img/profile.jpg" alt="profile thumbnail" width="250" />`

Inspect the generated HTML, and notice the image's URL:

`<img src="/_IPX/profile.jpg?w=250" alt="profile thumbnail" width="250" />`

Behind the scene, Nuxt Image's default provider, IPX, reduces the size of the image to match the 250px width we specify in the markup, so we're assured we won't deliver an image bigger than necessary to the users.

Now move on to our hero image, where the image's sizes are different between viewports.

### Integrate the Hero picture

Remember that the hero's component picture is displayed full-width until we reach large viewports, and then displayed in 1280px. We could make our image single-sized at 1280px, and rely on CSS for it to shrink as viewport's width goes down, but we would be serving a large image to users who don't need it.

Thankfully, Nuxt Image has got us covered. The `sizes` prop allows to specify different viewports:

`<nuxt-img src="/img/hero.jpg" alt="Our beautiful hero" sizes="s:100vw md:100vw lg:1280" />`
