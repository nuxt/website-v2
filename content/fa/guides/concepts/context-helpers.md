---
title: Context و Helper ها
description: آبجکت context اطلاعات اضافی و گاهی اختیاری در مورد درخواست کنونی به اپلیکیشن را در اختیار قرار می‌دهد.
position: 2
category: concepts
csb_link_context: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/02_concepts/02_context_helpers-context?fontsize=14&hidenavigation=1&theme=dark
csb_link_helpers: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/02_concepts/02_context_helpers-helpers?fontsize=14&hidenavigation=1&theme=dark
img: /guides/context.svg
imgAlt: nuxt-js-context-keys
questions:
  - question: دلیل وجود context چیست؟
    answers:
      - رندر سمت سرور
      - داشتن آمار به صورت همگانی (global state)
      - تنبلی
    correctAnswer: رندر سمت سرور
  - question: کدام ویژگی در context وجود ندارد؟
    answers:
      - env
      - isDev
      - $store
    correctAnswer: $store
  - question: کدام ویژگی context تنها در *سرور* وجود دارد؟
    answers:
      - from
      - app
      - req
    correctAnswer: req
  - question: کدام ویژگی context تنها در سمت *کاربر* وجود دارد؟
    answers:
      - from
      - res
      - app
    correctAnswer: from
  - question: کلید کمکی (helper) `$nuxt` کدام از یک موارد زیر را *نمی‌تواند* انجام دهد؟
    answers:
      - نمایش نسخه Nuxt
      - در اختیار قراردادن اطلاعاتی از وضعیت اینترنت کاربر
      - دسترسی به توابع ماژول
    correctAnswer: نمایش نسخه Nuxt
  - question: نام کلیدهای کمکی پردازش چیست؟
    answers:
      - global, client and server
      - server, client and static
      - ssr, spa and static
    correctAnswer: server, client and static
---

<app-modal :src="img" :alt="imgAlt"></app-modal>

آبجکت `context` در برخی توابع Nuxt همانند [asyncData](/guides/features/data-fetching#async-data)، [plugins](/guides/directory-structure/plugins)، [middleware](/guides/directory-structure/middleware) و [nuxtServerInit](/guides/directory-structure/store#the-nuxtserverinit-action) در دسترس است. این آبجکت اطلاعاتی اضافی و گاهی اختیاری در مورد درخواست کنونی به اپلیکیشن در اختیار قرار می‌دهد.

اولین و مهم‌ترین وظیفه context در دسترس قرار دادن بخش‌های دیگر اپیلیشکن Nuxt مانند مخزن Vuex یا نمونه (instance) مورد استفاده داخلی `connect` توسط Vue است. از این رو ویژگی‌های `res` و `req` در سمت سرور و ویژگی `store` همیشه در دسترس هستند. اما با گذر زمان ویژگی `context` گسترش بیشتری یافت و امکانات و میانبرهای زیادی به آن اضافه شد. اکنون شما می‌توانید به ابزار HMR در حالت توصعه (`development`)، مسیر (`route`) کنونی، پارامترها (`params`) و پرس‌و‌جوهای (`query`) صفحه، و همچنین متغیرهای محیطی (environment) از طریق context دسترسی داشته باشید. همچنین توابع ماژول و ویژگی‌های کمکی (helper) می‌توانند از طریق context در دسترس باشند.

**ویژگی‌هایی که به صورت پیشفرض در context در وجود دارند:**

```js
function (context) { // Could be asyncData, nuxtServerInit, ...
  // Always available
  const {
    app,
    store,
    route,
    params,
    query,
    env,
    isDev,
    isHMR,
    redirect,
    error,
   $config
  } = context

  // Only available on the Server-side
  if (process.server) {
    const { req, res, beforeNuxtRender } = context
  }

  // Only available on the Client-side
  if (process.client) {
    const { from, nuxtState } = context
  }
}
```

<base-alert>

توجه داشته باشید آبجکت **context** که در این جا از آن بحث می‌شود کاملا متفاوت از `context`ای است که در [عمل‌های Vuex](https://vuex.vuejs.org/guide/actions.html) یا در تابع `build.extend` در فایل `nuxt.config.js` وجود دارد.

</base-alert>

در مورد کلیدهای context متفاوت در [واژه‌نامه داخلی](/guides/internals-glossary/context) بیشتر بخوانید.

## نمونه‌ها

### استفاده از پارامترهای صفحه برای پرس‌و‌جو از API

آبجکت context به صورت مستقیم پارامترهای مسیر را از طریق `context.params` در دسترس قرار میدهد. در مثال زیر یک API را از طریق `nuxt/http` به وسیله یک پارامتر متغیر صفحه به عنوان بخشی از URL فراخوانی کردیم. ماژول‌هایی همانند [nuxt/http](https://http.nuxtjs.org/) می‌توانند از طریق [context.app](http://context.app) در دسترس قرار دهند.

همچنین ما فراخوانی API را داخل یک بلاک `try/catch` قرار می‌دهیم تا خطاهای احتمالی را مدیریت کنیم. با استفاده از تابع `context.error` می‌توان به صورت مستقیم صفحه خطای Nuxt را با خطای مورد نظر نمایش داد.

```js{}[pages/posts/_id.vue]
export default {
  async asyncData(context) {
    const id = context.params.id
    try {
      // Using the nuxtjs/http module here exposed via context.app
      const post = await context.app.$http.$get(
        `https://api.nuxtjs.dev/posts/${id}`
      )
      return { post }
    } catch (error) {
      context.error(error) // Show the nuxt error page with the thrown error
    }
  }
}
```

اگر در حال استفاده از [ES6](https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/) هستید می‌توانید با استفاده از سینتکس ساختار زدایی (destructuring) آبجکت context را ساختار زدایی کرده و از اجزای آن به صورت جداگانه بدون استفاده از کلمه کلیدی context استفاده کنید.

```js{}[pages/posts/_id.vue]
export default {
  async asyncData({ params, $http, error }) {
    const id = params.id

    try {
      // Using the nuxtjs/http module here exposed via context.app
      const post = await $http.$get(`https://api.nuxtjs.dev/posts/${id}`)
      return { post }
    } catch (error) {
      error(error) // Show the nuxt error page with the thrown error
    }
  }
}
```

اگر می‌خواهید از پارامترهای پرس‌و‌جو استفاده کنید به [context.query.id](http://context.query.id) مراجعه کنید.

### انتقال کاربران و دسترسی به store

دسترسی به Vuex از طریق context (وقتی که از طریق پوشه `store` این امکانات را فعال کرده‌اید) امکان پذیر است. کلمه کلیدی `context` یک ویژگی به نام `store` در اختیار شما قرار می‌دهد که می‌توان از آن به صورت `this.$store` نیز در کامپوننت‌های Vue استفاده کرد.همچنین ما از متد `redirect` برای انتقال کاربر در صورتی که اعتبارسنجی کاربر برابر با false باشد استفاده می‌کنیم.

```js
export default {
  middleware({ store, redirect }) {
    // retrieving keys via object destructuring
    const isAuthenticated = store.state.authenticated
    if (!isAuthenticated) {
      return redirect('/login')
    }
  }
}
```

<app-modal>
  <code-sandbox  :src="csb_link_context"></code-sandbox>
</app-modal>

## کلیدهای کمکی

علاوه بر تمام میانبرهای معرفی شده در `context`، کلیدهای کمکی دیگری در اپلیکیشن Nuxt.js شما تعبیه شده است.

## `$nuxt`: کلید کمکی Nuxt.js

کلید کمکی `$nuxt` برای بهتر کردن تجربه کاربری طراحی شده است. این کلید کمکی از طریق `this.$nuxt` در کامپوننت‌های Vue و همچنین از طریق `window.$nuxt` در جاهای دیگر در سمت کاربر قابل دسترسی است.

### بررسی‌کننده وضعیت اتصال

کلید کمکی `$nuxt` راهی طریع برای تشخیص وضعیت اتصال اینترنت کاربر در اختیار قرار می‌دهد. با استفاده از دو ویژگی boolean به نام‌های `isOffline` و `isOnline` می‌توانید تشخیص دهید وضعیت اینترنت کاربر در چا حالتی است. به عنوان مثال می‌توان با استفاده از این ویژگی یک پیام در صورتی قطعی اینترنت به کاربر نمایش داد.

```html{}[layouts/default.vue]
<template>
  <div>
    <div v-if="$nuxt.isOffline">You are offline</div>
    <Nuxt />
  </div>
</template>
```

### دسترسی به نمونه ریشه

به غیر از ارائه ویژگی‌های مرتبط با UX/DX، کلید کمکی `$nuxt` به شما میانبری جهت دسترسی به نمونه ریشه از دیگر کامپوننت‌ها را می‌دهد. همچنین با توجه به اینکه می‌توان به کلید کمکی `$nuxt` از طریق `window.$nuxt` دسترسی پیدا کرد امکان دسترسی به متدهایی مانند `$axios` در خارج از کامپوننت‌های Vue وجود دارد. البته این مورد باید به عنوان آخرین راه حل در نظر گرفته شود و استفاده از آن می‌تواند غیر اصولی باشد.

### بارگیری مجدد اطلاعات صفحه

وقتی می‌خواهید اطلاعات صفحه را برای کاربر رفرش کنید، در حقیقت فصد شما رفرش کردن اطلاعات صفحه است نه رفرش کردن کل صفحه چون ممکن است درخواست جدیدی به سرور ارسال کنید و همچنین کل اپلیکیشن Nuxt را از اول اجرا کنید. در بیشتر مواقع قصد شما رفرش کردن اطلاعاتی است که از طریق `asyncData` یا `fetch` دریافت شده است.

می‌توانید این کار را با استفاده از `this.$nuxt.refresh()` انجام دهید!

```html
<template>
  <div>
    <div>{{ content }}</div>
    <button @click="refresh">Refresh</button>
  </div>
</template>

<script>
  export default {
    asyncData() {
      return { content: 'Created at: ' + new Date() }
    },
    methods: {
      refresh() {
        this.$nuxt.refresh()
      }
    }
  }
</script>
```

### کنترل کردن نوار بارگیری (لودینگ)

با استفاده از `$nuxt` شما می‌توانید از طریق `this.$nuxt.loading` نوار لودینگ را به صورت دستی کنترل کنید.

```js
export default {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  }
}
```

در [ویژگی لودینگ](../features/loading) بیشتر بدانید

## کلید کمکی onNuxtReady

اگر می‌خواهید تکه کدی را بعد از اینکه اپلیکیشن Nuxt.js شما کاملا بارگیری شده و آماده است اجرا کنید، می‌توانید از تابع `window.onNuxtReady` استفاده کنید.

```js
window.onNuxtReady(() => {
  console.log('Nuxt.js is ready and mounted')
})
```

## کلیدهای کمکی پردازشی

Nuxt.js سه مقدار boolean را از طریق آبجکت همگانی (گلوبال) `process` در اختیار شما قرار می‌دهد که نشان دهنده این است که آیا اپلیکیشن شما در سمت سرور رندر یا به صورت کلی در سمت کاربر رندر شده است یا اینکه اپلیکیشن شما به صورت استاتیک رندر شده است. این کلیدهای کمکی در سرتاسر اپلیکیشن شما در دسترس هستند و عموما در `asyncData` مورد استفاده قرار می‌گیرند.

```html{}[pages/about.vue]
<template>
  <h1>I am rendered on the {{ renderedOn }} side</h1>
</template>

<script>
  export default {
    asyncData() {
      return { renderedOn: process.client ? 'client' : 'server' }
    }
  }
</script>
```

در این مثال، مقدار ویژگی `renderedOn` وقتی که در سمت سرور در حال استفاده از این کد هستیم یا وقتی کاربر به صورت مستقیم به صفحه دسترسی پیدا کرده باشد برابر `'server'` خواهد بود. اما وقتی که کاربر در داخل اپلیکیشن در حال انتقال به صفحات دیگر باشد (به عنوان مثال با کلیک بر روی `<NuxtLink>`) مقدار این ویژگی برابر با `'client'` خواهد بود.

<app-modal>
  <code-sandbox  :src="csb_link_helpers"></code-sandbox>
</app-modal>

<quiz :questions="questions"></quiz>
