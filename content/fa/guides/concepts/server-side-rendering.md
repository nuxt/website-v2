---
title: رندرینگ سمت سرور
description: رندرینگ سمت سرور (SSR) قابلیت یک اپلیکیشن برای رندر شدن صفحات آن در سمت سرور به جای سمت کاربر و مرورگر است.
position: 3
category: concepts
questions:
  - question: چه نوع سروری برای استفاده از SSR مورد نیاز است؟
    answers:
      - سرور PHP
      - سرور JavaScript
      - سرور Node.js
    correctAnswer: سرور Node.js
  - question: از چه چیزی برای گسترش و کنترل سرور استفاده می‌شود؟
    answers:
      - میان‌افزار
      - ServerMiddleware
      - امکان کنترل سرور وجود ندارد
    correctAnswer: ServerMiddleware
  - question: می‌توان یک اپلیکیشن با قابلیت SSR را در هاست های serverless میزبانی کرد
    answers:
      - صحیح
      - غلط
    correctAnswer: غلط
  - question: آیا در سمت سرور به document دسترسی وجود دارد؟
    answers:
      - بله، همیشه در دسترس است
      - خیر، این آبجکت متعلق به مرورگر است و در سمت سرور وجود ندارد
    correctAnswer: خیر، این آبجکت متعلق به مرورگر است و در سمت سرور وجود ندارد
  - question: چه زمانی یک صفحه پویا می‌شود؟
    answers:
      - وقتی که مرورگر صفحه HTML رندر شده را از سرور دریافت می‌کند
      - وقتی که Vue.js hydration وارد عمل می‌شود
      - وقتی که مرورگر درخواست اولیه را ارسال می‌کند
    correctAnswer: وقتی که Vue.js hydration وارد عمل می‌شود
  - question: انتقال توسط <NuxtLink> در چه سمتی انجام می‌شود؟
    answers:
      - سمت کاربر
      - سمت سرور
    correctAnswer: سمت کاربر
  - question: مراحل درست کدام‌اند؟
    answers:
      - browser → server, server → browser, browser → browser
      - server → browser, browser → server, server → server
      - browser → server, server → browser, browser → server
    correctAnswer: browser → server, server → browser, browser → browser
---

رندرینگ سمت سرور (SSR) قابلیت یک اپلیکیشن برای رندر شدن صفحات آن در سمت سرور به جای سمت کاربر و مرورگر است. سرور یک صفحه کاملا رندر شده را به مرورگر ارسال می‌کند و سپس JavaScript سمت کاربر شروع به کار می‌کند و عملیات [hydrate](https://ssr.vuejs.org/guide/hydration.html) توسط Vue انجام می‌گیرد.

## سرور Node.js مورد نیاز است

برای رندر کردن یک صفحه وب به یک محیط JavaScript نیاز است.

یک سرور Node.js برای اجرای اپلیکیشن Vue شما باید تنظیم شود.

## گسترش و کنترل سرور

شما می‌توانید سرور خود را با استفاده از `serverMiddleware` گسترش دهید و مسیرها را با استفاده از میان‌افزار کنترل کنید.

```js{}[middleware/api/logger.js]
export default function (req, res, next) {
  console.log(req.url)
  next()
}
```

```js{}[nuxt.config.js]
export default: {
  serverMiddleware: [
     '~/api/logger'
  ]
}
```

## محیط سرور و مرورگر

از آنجایی که شما در محیط Node.js هستید به آبجکت‌هایی همچون `req` و `res` دسترسی دارید. اما به آبجکت‌هایی همچون `window` و `document` که مخصوص محیط مرورگر هستند دسترسی ندارید. اما می‌توانید از آبجکت‌های `window` و `document` با استفاده از هوک‌های `beforeMount` و `mounted` دسترسی داشته باشید.

```js
beforeMount{
  window.alert('hello');
}
mounted{
  window.alert('hello');
}
```

## مراحل رندر سمت سرور با استفاده از Node.js

### مرحله ۱: مرورگر به سرور

وقتی مرورگر درخواست اولیه را ارسال می‌کند این درخواست توسط سرور Node.js دریافت شده و Node.js صفحه HTML را با اجرای توابعی همچون `asyncData` و `nuxtServerInit` یا `fetch` (همچنین هوک‌ها) ساخته و به مرورگر ارسال می‌کند.

### مرحله ۲: سرور به مرورگر

مرورگر صفحه HTML ساخته شده را از سرور دریافت می‌کند. پس از نمایش اطلاعات عملیات hydration توسط Vue آغاز می‌شود تا صفحه پویا شود.

### مرحله ۳: مرورگر به مرورگر

انتقال بین صفحات توسط [`<NuxtLink>`](/guides/features/nuxt-components#the-nuxtlink-component) در سمت کاربر انجام میگیرد و درخواستی به سمت سرور ارسال نمی‌شود مگر آنکه صفحه به صورت دستی رفرش شود.

<quiz :questions="questions"></quiz>
