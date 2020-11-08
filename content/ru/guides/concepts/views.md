---
title: Views
description: The Views section describes all you need to know to configure data and views for a specific route in your Nuxt.js Application. Views consist of an app template, a layout, and the actual page.
position: 1
category: concepts
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/02_concepts/01_views?fontsize=14&hidenavigation=1&theme=dark
questions:
  - question: What is the composition order of a Nuxt view (top-down)?
    answers:
      - Layout → Page → Document
      - Page → Layout → Document
      - Document → Layout → Page
    correctAnswer: Document → Layout → Page
  - question: What is the default layout called?
    answers:
      - default.vue
      - layout.vue
      - defaultLayout.vue
    correctAnswer: default.vue
  - question: How do you create a custom layout?
    answers:
      - add a .vue file to the pages folder
      - add a .vue file to the layouts folder
      - add a .vue file to the components folder
    correctAnswer: add a .vue file to the layouts folder
  - question: How do you activate your custom layout called 'blog' on your page?
    answers:
      - "layout: 'blog'"
      - "layout: 'default'"
      - "blog: 'blog'"
    correctAnswer: "layout: 'blog'"
  - question: Where do you put your error.vue file that creates a customized error page
    answers:
      - in the pages folder
      - in the errors folder
      - in the layouts folder
    correctAnswer: in the layouts folder
---

В разделе &laquo;Представление&raquo; описано все, что необходимо знать, чтобы настроить данные и представления для определенного маршрута в вашем приложении Nuxt.js.
Представление(Views) состоит из шаблона приложения(template), макета(layout) и самой страницы. Кроме того, вы можете настроить мета-теги(meta) каждой страницы, которые важны для SEO(поисковая оптимизация).

![Composition of a View in Nuxt.js](/docs/2.x/views.png)

Структура Представление(Views) в Nuxt.js

## Страницы(Pages)

Каждая страница является Vue компонентом, но Nuxt.js добавляет специальные атрибуты и функции, чтобы упростить разработку вашего приложения.

```html{}[pages/index.vue]
<template>
  <h1 class="red">Hello World</h1>
</template>

<script>
  export default {
    head() {
      // Тут задаем описание для мета-тегов конкретной страницы
    }
    // ...
  }
</script>

<style>
  .red {
    color: red;
  }
</style>
```

## Свойства компонентов страницы

У компонента страницы существует много свойств, таких как head, как в примере выше.

<base-alert type="next">

Вы можете посмотреть список всех свойств на это странице [Directory Structure book](/docs/2.x/directory-structure/nuxt)

</base-alert>

## Макеты(Layouts)

Макеты отлично помогут, если вы захотите изменить внешний вид Nuxt.js страниц.
Например, вы хотите добавить боковую панель или иметь отдельные макеты для мобильных и десктопных устройств.
Часто шаблон главной страницы отличается от контент-страниц, тут вам и пригодятся макеты.

### Макет по умолчанию

По умолчанию используется макет  `default.vue`  в каталоге макетов. Он будет применятся автоматически для всех страниц, у которых данное свойство не переопределено.
Единственное, что нужно сделать, это убедиться, что в макете включен компонент `<Nuxt />`, который отображает компоненты страниц. Если приводить аналогию — это `router-view`.

```html{}[layouts/default.vue]
<template>
  <Nuxt />
</template>
```

<base-alert type="next">

Дополнительную информацию можно прочитать в главе о компонентах [Nuxt component](/docs/2.x/features/nuxt-components)

</base-alert>

### Пользовательские макеты

Вы можете создать собственный макет, добавив `.vue` файл, в папку с макетами. Чтобы применить собственный макет, нужно установить свойство `layout` в компоненте страницы. Значением данного свойства будем имя созданного вами макета.

Чтобы создать макет для &laquo;Блога&raquo;, добавьте `blog.vue` в папку `layouts/blog.vue`

```html{}[layouts/blog.vue]
<template>
  <div>
    <div>Навигация для Блога</div>
    <Nuxt />
  </div>
</template>
```

<base-alert>

Убедитесь, что добавили компонент  `<Nuxt/>`  при создании своего макета, чтобы он отображал ваши страницы.

</base-alert>

Затем задайте для свойства `layout` значение `blog` на тех страницах, где вы хотите применить данный макет.

```html{}[pages/posts.vue]
<template>
  <!-- Ваш код для страницы -->
</template>
<script>
  export default {
    layout: 'blog'
    // Определение других свойств и методов для страницы
  }
</script>
```

<base-alert type="info">

Если вы не зададите `layout`, тогда будет применятся макет `default.vue`.

</base-alert>

<app-modal>
  <code-sandbox  :src="csb_link"></code-sandbox>
</app-modal>

### Страница ошибки

Страница ошибки — это компонент, который будет отобраться при возникновении ошибки(исключение если страница рендерится на стороне сервера).

<base-alert>

Хотя данный файл находится в папке `layouts`, рассматривать его строит как обычную страницу.

</base-alert>

Как упоминалось выше, этот макет является особенным(исключением), поэтому в него не надо макет добавлять компонент `<Nuxt/>`. Этот макет служит для отображения ошибок(`404`, `500` и.т.д). Наподобие других страниц, вы можете установить собственный макет для отображения ошибок.

Вы можете настроить страницу ошибок, создав файл в `layouts/error.vue`.

```html{}[layouts/error.vue]
<template>
  <div>
    <h1 v-if="error.statusCode === 404">Страница не найдена</h1>
    <h1 v-else>Произошла другая ошибка</h1>
    <NuxtLink to="/">Перейти на главную страницу</NuxtLink>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error' // Вы можете установить собственный макет для ошибки
  }
</script>
```

## Документ: App.html

Шаблон приложения используется для создания HTML каркаса вашего документа в приложении Nuxt.js, которое добавляет контент, а так же атрибуты для head и body.
Этот файл создается автоматически, и как правило редко нуждается в изменениях. Вы можете настроить шаблон используя Nuxt.js, для подключения скриптов и стилей, создав `app.html` в корневом папке вашего проекта.

Шаблон по умолчанию, который используется в Nuxt.js

```html{}[app.html]
<!DOCTYPE html>
<html {{ HTML_ATTRS }}>
  <head {{ HEAD_ATTRS }}>
    {{ HEAD }}
  </head>
  <body {{ BODY_ATTRS }}>
    {{ APP }}
  </body>
</html>
```

Один из вариантов использования пользовательского шаблона, является добавление специальных классов для IE:

```html{}[app.html]
<!DOCTYPE html>
<!--[if IE 9]><html class="lt-ie9 ie9" {{ HTML_ATTRS }}><![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--><html {{ HTML_ATTRS }}><!--<![endif]-->
  <head {{ HEAD_ATTRS }}>
    {{ HEAD }}
  </head>
  <body {{ BODY_ATTRS }}>
    {{ APP }}
  </body>
</html>
```

<base-alert type="info">

Хотя вы можете добавить файлы JavaScript и CSS в `app.html`, рекомендуется использовать `nuxt.config.js` для решения этих задач!

</base-alert>

<quiz :questions="questions"></quiz>
