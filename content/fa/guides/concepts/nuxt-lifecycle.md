---
title: چرخه زندگی Nuxt
description: فرقی ندارد از چه ابزاری استفاده می‌کنید، با دانستن اینکه این ابزار در حقیقت چگونه کار می‌کند اعتماد به نفس بیشتری در کار کردن با آن خواهید داشت. این مسأله در مورد Nuxt.js نیز صدق می کند.
position: 5
category: concepts
img: /guides/nuxt-lifecycle.png
imgAlt: understanding-nuxt-2-12-lifecycle-hooks
questions:
  - question: چرخه زندگی Nuxt.js کی شروع می‌شود؟
    answers:
      - زمانی که پاسخ به کاربر ارسال می‌شود
      - بعد از فاز build
      - زمان اجرای nuxt dev
    correctAnswer: بعد از فاز build
  - question: محتوای چرخه زندگی به کدام یک از فاکتورهای اصلی زیر وابسته است؟
    answers:
      - زمان و تاریخی که ما سرور را اجرا می‌کنیم
      - اگر از رندر سمت سرور استفاده می‌کنیم از چه نوع آن استفاده می‌شود؟
      - اپلیکیشن Nuxt.js بر روی چه نوع سیستم عاملی اجرا می شود؟
    correctAnswer: اگر از رندر سمت سرور استفاده می‌کنیم از چه نوع آن استفاده می‌شود؟
  - question: چه زمانی nuxtServerInit فراخوانی می‌شود؟
    answers:
      - در سمت سرور و سمت کاربر
      - بعد از عملیات Vue hydration
      - فقط در سمت سرور
    correctAnswer: فقط در سمت سرور
  - question: انواع میان‌افزارها کدامند؟
    answers:
      - Global, Layout, Route
      - Global, Layout, Page
      - Global, Group, Route
    correctAnswer: Global, Layout, Route
  - question: چه چیزی فقط در سمت کاربر رخ می‌دهد؟
    answers:
      - Vue Hydration
      - اجرای Middleware
      - فراخوانی تابع fetch
    correctAnswer: Vue Hydration
  - question: کدام مورد به هیچ عنوان در سمت کاربر رخ نمی‌دهد؟
    answers:
      - فراخوانی asyncData
      - فراخوانی serverMiddleware
      - فراخوانی fetch
    correctAnswer: فراخوانی serverMiddleware
  - question: کدام توابع Vue هم در سمت سرور و هم در سمت کاربر فراخوانی می‌شوند؟
    answers:
      - mounted و beforeMount
      - beforeDestroy و destroyed
      - created و beforeCreate
    correctAnswer: created و beforeCreate
  - question: کدام مورد پس از انتقال با <NuxtLink> اتفاق نمی‌افتد؟
    answers:
      - فراخوانی fetch
      - اجرای افزونه‌های سمت سرور Nuxt.js
      - فراخوانی beforeCreate
    correctAnswer: اجرای افزونه‌های سمت سرور Nuxt.js
  - question: تفاوت ویژه asyncData و fetch پس از انقتال با <NuxtLink> چیست؟
    answers:
      - asyncData سریع‌تر از fetch است
      - asyncData پس از fetch فراخوانی می‌شود
      - asyncData بر خلاف fetch یک تابع مسدود کننده است
    correctAnswer: asyncData بر خلاف fetch یک تابع مسدود کننده است
---

<app-modal :src="img" :alt="imgAlt"></app-modal>

فرقی ندارد از چه ابزاری استفاده می‌کنید، با دانستن اینکه این ابزار در حقیقت چگونه کار می‌کند اعتماد به نفس بیشتری در کار کردن با آن خواهید داشت. این مسأله در مورد Nuxt.js نیز صدق می کند. مقصود این بخش ارائه یک بینش کلی در مورد بخش‌های مختلف این فریم‌ورک و نحوه و ترتیب اجرای آن‌ها است.

چرخه زندگی Nuxt.js بعد از فاز build اتفاق می‌افتد، وقتی که اپیلیکشن شما باندل و فشرده شده است. بعد از این فاز اتفاقاتی که می‌افتد بستگی به این دارد که آیا شما از رندر سمت سرور استفاده می‌کنید و اگر بلی از چه نوع آن.

SSR داینامیک (`nuxt start`)

یا ایجاد صفحات ثابت (Static Site Generation) (`nuxt generate`).

## چرخه زندگی

### سرور

در حالت SSR، موارد زیر برای هر درخواست آغازین به اپلیکیشن شما اجرا می شود:

- سرور شروع به کار می‌کند (`nuxt start`)

وقتی از حالت صفحات ثابت استفاده می‌شود، موارد سرور تنها یک بار در زمان build برای یک به یک صفحاتی که قرار است ایجاد شوند اجرا می‌شود.

- پروسه تولید آغاز می‌شود (`nuxt generate`)

- هوک‌های Nuxt
- serverMiddleware
- افزونه‌های سمت سرور Nuxt
  - به ترتیبی که در nuxt.config.js تعیین شده است
- nuxtServerInit
  - عملیات Vuex که در سمت سرور برای از پیش پر کردن store
  - اولین آرگومان **Vuex context** و دومین آرگومان **Nuxt.js context** است
    - Dispatch other actions from here → only "entry point" for subsequent store actions on server-side
    - ارسال موارد دیگر از این مرحله -> تنها مراحل مرتبط store در سمت سرور
  - فقط می‌تواند در `store/index.js` تعریف شود
- میان‌افزار
  - میان‌افزار Global
  - میان‌افزار Layout
  - میان‌افزار Route
- asyncData
- beforeCreate (متد چرخه زندگی Vue)
- created (متد چرخه زندگی Vue)
- متد fetch (از بالا به پایین، موارد همسطح به صورت موازی اجرا می‌شوند)
- سریال‌سازی حالت (هوک `render:routeContext` Nuxt.js)

- رندر کردن HTML (هوک `render:route` Nuxt.js)

- اجرای هوک `render:routeDone` وقتی HTML به مرورگر ارسال شد

- اجرای هوک `generate:before`
- فایل‌های HTML ایجاد شده اند
  - **ایجاد صفحات ثابت**
    - به عنوان مثال داده‌های ثابت استخراج شده‌اند
  - `generate:page` (HTML قابل ویرایش)
  - `generate:routeCreated` (Route ایجاد شده‌است)
- اجرای هوک `generate:done` وقتی تمامی فایل‌های HTML ایجاد شده‌اند

### کاربر

این بخش از چرخه زندگی بدون توجه به حالت Nuxt.js تماما در مرورگر اجرا می‌شود.

- دریافت HTML
- بارگیری وابستگی‌ها (مانند JavaScript)
- Vue Hydration
- میان‌افزار
  - میان‌افزار Global
  - میان‌افزار Layout
  - میان‌افزار Route
- asyncData (blocking)
- افزونه‌های سمت کاربر Nuxt
  - به ترتیبی که در nuxt.config.js تعیین شده است
- beforeCreate (متد چرخه زندگی Vue)
- created (متد چرخه زندگی Vue)
- متد fetch (از بالا به پایین، موارد همسطح به صورت موازی اجرا می‌شوند) (non-blocking)
- beforeMount (متد چرخه زندگی Vue)
- mounted (متد چرخه زندگی Vue)

### انتقال از طریق کامپوننت NuxtLink

همانند بخش کاربر تمامی موارد زیر وقتی از طریق NuxtLink کاربر انتقال پیدا می‌کند در مرورگر اجرا می‌شوند. محتوای هیچ صفحه‌ای تا وقتی که تمامی کارهای مسدود کننده (blocking tasks) به اتمام نرسیده است به نمایش در نمی‌آید.

<base-alert type="info">

بیشتر در مورد [`<NuxtLink>`](/guides/features/nuxt-components#the-nuxtlink-component) بدانید

</base-alert>

- میان‌افزار (blocking)
  - میان‌افزار Global
  - میان‌افزار Layout
  - میان‌افزار Route
- asyncData (blocking)
- asyncData (blocking) [یا بارگیری داده‌های تماما ثابت]
- beforeCreate و created (متد چرخه زندگی Vue)
- fetch (non-blocking)
- beforeMount و mounted

### What's next

<base-alert type="next">

بیشتر در مورد [حالت‌های رندرینگ](/guides/features/rendering-modes) بدانید.

</base-alert>

<quiz :questions="questions"></quiz>
