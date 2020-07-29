---
title: my title
description: my description
imgUrl: blog/filename/main.jpg
date: 2020-MM-DD
authors:
  - name: Sebastien Chopin
    avatarUrl: https://pbs.twimg.com/profile_images/1042510623962275840/1Iw_Mvud_400x400.jpg
    link: https://twitter.com/Atinux
tags:
  - tag1
  - tag2
  - tag3
---

Thanks for contributing to the Nuxt Blog. Here is some example content to get you started. Feel free to use it or just delete it. Don't forget to modify the details in the yaml above to show your name etc. Your blog post will appear on the main page automatically so just make sure the date is correct or you won't see it as the top article. You can have more than one article and you can have more or less than 3 tags. Have fun.

## Example TOC

- [Example TOC](#example-toc)
- [Example image](#example-image)
- [Example codeblock](#example-codeblock)
- [Example code](#example-code)
- [Example video](#example-video)

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
<code-block label="NPM">

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

## Example video

<video poster="https://res.cloudinary.com/nuxt/video/upload/v1588095794/nuxt-full-static_rnnbvm.jpg" loop playsinline controls>
  <source src="https://res.cloudinary.com/nuxt/video/upload/v1588095794/nuxt-full-static_rnnbvm.webm" type="video/webm" />
  <source src="https://res.cloudinary.com/nuxt/video/upload/v1592503417/nuxt-full-static_rnnbvm.mp4" type="video/mp4" />
  <source src="https://res.cloudinary.com/nuxt/video/upload/v1588095794/nuxt-full-static_rnnbvm.ogv" type="video/ogg" />
</video>
