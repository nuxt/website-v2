---
title: Optimise your images with Nuxt Image
description: The Nuxt Image module provides an intuitive way to optimise your images
imgUrl: blog/filename/main.jpg
date: 2021-05-24
authors:
  - name: Clément Ollivier
    avatarUrl: https://pbs.twimg.com/profile_images/1042510623962275840/1Iw_Mvud_400x400.jpg
    link: https://twitter.com/clemcodes
tags:
  - Nuxt Image
  - Image optimisation
  - Nuxt module
---

## Use cases

Images optimisation are a crucial part for improving a website's performance. You have to make sure that the images that you use are not wider than their display size, and that you serve the best format to browsers that support them.

The Nuxt Image module provides two components that act as drop-in replacements for the HTML `<img>` and `<picture>` tags.

## Example

## Providers

## Example TOC

- [Example TOC](#example-toc)
- [Nuxt/NuxtJS/Nuxt.js](#nuxtnuxtjsnuxtjs)
- [Example image](#example-image)
- [Example codeblock](#example-codeblock)
- [Example code](#example-code)
- [Base Alerts](#base-alerts)
- [Example video](#example-video)

## Nuxt/NuxtJS/Nuxt.js

Nuxt.js is the open source framework and we use this to talk about anything that references the framework whereas we use NuxtJS to mention anything about the company such as the NuxtJS shop. Nuxt is used in general to mention Nuxt related things when it makes no sense to use Nuxt.js or NuxtJS for example when referencing commands, nuxt start, nuxt generate etc.

## Example image

Images are stored in the static folder under blog and in a folder with your filename.

![My image alt tag](blog/going-dark-with-nuxtjs-color-mode/list-of-colors.png)

## Example codeblock

<code-group>
  <code-block label="Yarn" active>

```bash
yarn add @nuxt/content
```

</code-block>
<code-block label="npm">

```bash
npm install @nuxt/content
```

  </code-block>
</code-group>

## Example code

```js{}[nuxt.config.js]
export default {
  target: 'static'
}
```

## Base Alerts

<base-alert>

alert default is warning

</base-alert>

<base-alert type="info">

if you have some info to share

</base-alert>

## Example video

<video poster="https://res.cloudinary.com/nuxt/video/upload/v1595852304/nuxt-smart-generate_pjaat1.jpg" loop="loop" plays-inline="true" controls="controls">
  <source src="https://res.cloudinary.com/nuxt/video/upload/v1595852304/nuxt-smart-generate_pjaat1.webm" type="video/webm">
  <source src="https://res.cloudinary.com/nuxt/video/upload/v1595852304/nuxt-smart-generate_pjaat1.mp4" type="video/mp4">
  <source src="https://res.cloudinary.com/nuxt/video/upload/v1595852304/nuxt-smart-generate_pjaat1.ogv" type="video/ogg">
</video>
