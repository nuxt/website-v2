---
title: دایرکتوری Assets
menuTitle: assets
description: دایرکتوری `assets` شامل فایل های غیر کامپایل شده ی شما مانند فونت ها ، عکس ها و فایل هایی چون  Sass یا Stylus می باشد.
position: 2
category: directory-structure
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/02_assets?fontsize=14&hidenavigation=1&theme=dark
videoScript:
  - assets-video.md
questions:
  - question: کدام دایرکتوری شامل فایل های غیر کامپایل شده ای مانند تصاویر یا فونت ها و یا فایل های Stylus یا Sass می باشد؟
    answers:
      - static
      - assets
      - pages
    correctAnswer: assets
  - question: اگر بخواهید از فایل هایی که در دایرکتوری assets وجود دارند در قالب های vue استفاده کنید ، از چه چیزی استفاده می کنید؟
    answers:
      - '/assets/your_image.png'
      - '@assets/your_image.png'
      - '@/assets/your_image.png'
    correctAnswer: '@/assets/your_image.png'
  - question: اگر بخواهید فایل هایی که در دایرکتوری assets وجود دارند را در داخل فایل های  css ارجاع دهید ، از چه چیزی استفاده می کنید؟
    answers:
      - url("@assets/banner.svg")
      - url("assets/banner.svg")
      - url("@/assets/banner.svg")
    correctAnswer: url("@assets/banner.svg")
  - question: فایل های css عمومی  را در کدام قسمت وارد میکنید؟
    answers:
      - in your index.vue file
      - in the nuxt.config.js file
      - in the default layout file
    correctAnswer: in the nuxt.config.js file
  - question: در کدام ویژگی فونت عمومی را وارد می کنید؟
    answers:
      - font
      - head
      - css
    correctAnswer: head
  - question: کدام بارگذارنده به شما این امکان را می دهد که یک فایل با آدرس داده base-64 وارد کنید؟
    answers:
      - file-loader
      - url-loader
      - image-loader
    correctAnswer: url-loader
  - question: نام مستعاری که برای دایرکتوری منبع (source) استفاده می شود چیست؟
    answers:
      - '@'
      - '@@'
      - '^'
    correctAnswer: '@'
  - question: نام مستعاری که برای دایرکتوری root استفاده می شود چیست؟
    answers:
      - '@'
      - '@@'
      - '@root'
    correctAnswer: '@@'
---

دایرکتوری `assets` شامل فایل های غیر کامپایل شده ی شما مانند فونت ها ، عکس ها و فایل هایی چون Sass یا Stylus می باشد.

## تصاویر

هرگاه در قالب های `vue` نیاز داشتید فایلی را از دایرکتوری `assets` بخوانید، از `~/assets/your_image.png` استفاده کنید و قبل از assets یک / بگذارید.

```html
<template>
  <img src="~/assets/your_image.png" />
</template>
```

اگر میخواهید فایل هایی از دایرکتوری assets را در فایل های `css` خود ارجاع دهید ، از `~assets/your_image.png` استفاده کنید.( قبل از assets / نگذارید.)

```css
background: url('~assets/banner.svg');
```

به هنگام کار با تصاویر داینامیک ، از require استفاده کنید.

```html
<img :src="require(`~/assets/img/${image}.jpg`)" />
```

<base-alert type="next">

درباره ی webpack Assets [بیشتر بدانید](/docs/2.x/directory-structure/assets#webpack-assets)

</base-alert>

## استایل

این امکان در Nuxt.js وجود دارد که فایل های CSS/ماژول ها/کتابخانه های مورد نیاز را بصورت عمومی تعریف کنید. ( به طوری که در تمامی صفحات قابل دسترس باشد ). به این صورت که با اضافه کردن ویژگی CSS در فایل nuxt.config استایل های شما به راحتی اضافه می شوند.

```js{}[nuxt.config.js]
export default {
  css: [
    // Load a Node.js module directly (here it's a Sass file)
    'bulma',
    // CSS file in the project
    '~/assets/css/main.css',
    // SCSS file in the project
    '~/assets/css/main.scss'
  ]
}
```

### Sass

در صورتی که تمایل به استفاده از `sass` دارید مطمئن شوید که پکیج های` sass` و `sass-loader` را نصب کرده باشید.

<code-group>
  <code-block label="Yarn" active>

```bash
yarn add -D sass sass-loader@10 fibers
```

  </code-block>
  <code-block label="npm">

```bash
npm install --save-dev sass sass-loader@10 fibers
```

  </code-block>
</code-group>

<base-alert type="info">هنگامی که `fibers` نصب باشد کامپایل همزمان با `sass` نیز وجود دارد. (این یعنی افزایش 2 برابری سرعت) [که بصورت خودکار نیز فعال است](https://github.com/webpack-contrib/sass-loader)</base-alert>

بطور خودکار Nuxt.js نوع فایل را به وسیله ی پسوند آن حدس میزند و از لودر پیش پردازنده مناسب آن برای وبپک استفاده میکند. اما در صورت نیاز به استفاده از لودر مورد نیاز، باید آن را نصب کنید.

## فونت ها

با افزودن فونت ها به پوشه assets می توانید به فونت های داخلی دسترسی داشته باشید. پس از اضافه کردن فونت ها میتوانید با استفاده از @font-face در فایل های css به آنها دسترسی داشته باشید.

```
-| assets
----| fonts
------| DMSans-Regular.ttf
------| DMSans-Bold.ttf
```

```css{}[assets/main.css]
@font-face {
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('~assets/fonts/DMSans-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('~assets/fonts/DMSans-Bold.ttf') format('truetype');
}
```

<base-alert type="info">به یاد داشته باشید که فایل های CSS به طور خودکار بارگیری نمی شوند. آنها را به وسیله ی [CSS config property](https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-css/)بارگیری کنید.</base-alert>

<base-alert type="next">

برای افزودن فونت های خارجی مانند فونت های google به [متا برچسب ها و بخش SEO](/docs/2.x/features/meta-tags-seo#external-resources)مراجعه کنید.

</base-alert>

## متعلقات وبپک

به طور پیش فرض Nuxt از پکیج های vue-loader، file-loader و url-loader برای سرو کردن assets ها استفاده میکند.اگر میخواهید assets های شما توسط وبپک اجرا نشوند آن ها را در دایرکتوری static قرار دهید.

## وبپک

[vue-loader](http://vue-loader.vuejs.org/) به طور خودکار استایل و قالب فایل ها را با `css-loader` و Vue template compiler خارج از چهارچوب پردازش می کند.
در روند کامپایل، تمامی آدرس asset ها مانند
`<img src="...">` و `background: url(...)`
و `@import` در CSS همگی به عنوان وابستگی های ماژول درنظرگرفته می شوند.

به عنوان مثال ، درخت زیر را در نظر بگیرید:

```
-| assets/
----| image.png
-| pages/
----| index.vue
```

اگر از `url('~assets/image.png')` در CSS استفاده کنید ، به `require('~/assets/image.png')` ترجمه می شود.

<base-alert>

نام مستعار `~/` در فایل های CSS شما به درستی اضافه نمی شود. شما باید به هنگام آدرس دهی در css از `~assets`  (**بدون /**) استفاده کنید. مثال دیگر: `background: url("~assets/banner.svg")`

</base-alert>

اگر بخواهید همان عکس را در `pages/index.vue` استفاده کنید:

```html{}[pages/index.vue]
<template>
  <img src="~/assets/image.png" />
</template>
```

به صورت زیر کامپایل می شود:

```js
createElement('img', { attrs: { src: require('~/assets/image.png') } })
```

از آنجا که `.png` یک فایل جاوا اسکریپت نیست ، Nuxt.js وبپک را به گونه ای تنظیم میکند تا از[file-loader](https://github.com/webpack/file-loader) و [url-loader](https://github.com/webpack/url-loader) استفاده کند و آن را در اختیار شما بگذارد.

مزایای استفاده از این لودرها عبارتند از:

`file-loader` به شما امکان تعیین کردن محل کپی و جایگذاری فایل های asset را میدهد. همچنین امکان نحوه نامگذاری فایل با استفاده از هش های نسخه برای ذخیره سازی بهتر را نیز فراهم می کند. و به این ترتیب در مرحله استفاده (production) ، به صورت پیش فرض شما از کش طولانی مدت سود خواهید برد!

`url-loader` به شما این امکان را می دهد که فایل هایی را که از یک حدود مشخصی (given threshold) کوچکتر هستند را با آدرس دهی base64 وارد کنید. مزیت اینکار این است که تعداد درخواست های HTTP برای فایل های بی اهمیت کاهش می یابد. حال اگر فایلی بزرگتر از محدوده ی مشخص شده باشد به طور خودکار به file-loader بازگشت داده می شود.

تنظیمات پیشفرض برای این لودر ها بصورت زیر می باشد:

```js
// https://github.com/nuxt/nuxt.js/blob/dev/packages/webpack/src/config/base.js#L382-L411
{
  test: /\.(png|jpe?g|gif|svg|webp|avif)$/i,
  use: [{
    loader: 'url-loader',
    options: {
      esModule: false,
      limit: 1000, // 1kB
      name: 'img/[name].[contenthash:7].[ext]'
    }
  }]
},
{
  test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
  use: [{
    loader: 'url-loader',
    options: {
       esModule: false,
       limit: 1000, // 1kB
       name: 'fonts/[name].[contenthash:7].[ext]'
    }
  }]
},
{
  test: /\.(webm|mp4|ogv)$/i,
  use: [{
    loader: 'file-loader',
    options: {
      esModule: false,
      name: 'videos/[name].[contenthash:7].[ext]'
    }
  }]
}
```

این بدین معناست که هر فایلی که کمتر از ۱ کیلوبایت باشد بصورت خطی و با آدرس داده base-64 ایجاد میشود. در غیر این صورت، آن تصویر یا فونت در پوشه ی مربوط به خودش (داخل دایرکتوری `.nuxt`) به همراه نامش که شامل یک هش نسخه است برای داشتن کش بهتر کپی می شود.

به هنگام راه اندازی برنامه تان با `nuxt` ، قالبی مانند ` pages/index.vue` :

```html{}[pages/index.vue]
<template>
  <img src="~/assets/your_image.png" />
</template>
```

به شکل زیر تبدیل خواهد شد :

```html
<img src="/_nuxt/img/your_image.0c61159.png" />
```

اگر می خواهید تنظیمات لودر را تغییر دهید, لطفا از [build.extend](/docs/2.x/configuration-glossary/configuration-build#extend) استفاده کنید.

## نام مستعار

به طور پیش فرض دایرکتوری منبع (srcDir) و دایرکتوری اصلی (rootDir) یکی هستند. شما می توانید از نام مستعار `~` برای دایرکتوری اصلی استفاده کنید. یعنی به جای نوشتن مسیرهای relative مانند `../assets/your_image.png` از این جایگزین `~/assets/your_image.png` استفاده کنید.

و هر دو نتیجه ی یکسانی خواهند داشت.

```html{}[components/Avatar.vue]
<template>
  <div>
    <img src="../assets/your_image.png" />
    <img src="~/assets/your_image.png" />
  </div>
</template>
```

توصیه ی ما این است که از `~` به عنوان نام مستعار استفاده کنید. `@` نیز پشتیبانی می شود اما نه در همه موارد. مانند تصاویر پس زمینه در css که دیگر از `@` نباید استفاده شود.

می توانید از نام مستعار `~~` یا `@@` برای دایرکتوری اصلی استفاده کنید.

<base-alert type="info">

نکته: در صفحه کلید اسپانیایی برای دسترسی به `~` می توانید از میانبر (`Option` + `ñ`) در سیستم عامل مک و (`Alt gr` + `4`) در سیستم عامل ویندوز استفاده کنید.
</base-alert>

<quiz :questions="questions"></quiz>
