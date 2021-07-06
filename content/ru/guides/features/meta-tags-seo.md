---
title: Мета-теги и SEO
description: Nuxt.js позволяет определить все стандартные мета-теги для вашего приложения внутри nuxt.config.js файла используя свойство `head`. Это очень полезно при добавлении стандартных тегов `title` и `description` для SEO, для задания `viewport` или добавления `favicon`.
position: 6
category: features
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/03_features/06_meta_tags_seo?fontsize=14&hidenavigation=1&theme=dark
questions:
  - question: Где задаются мета-теги `title` и `description` глобально?
    answers:
      - в компоненте страницы
      - в nuxt.config.js
      - в package.json
    correctAnswer: в nuxt.config.js
  - question: Где задаются мета-теги `title` и `description` локально?
    answers:
      - в компоненте страницы
      - в nuxt.config.js
      - в seo компоненте
    correctAnswer: в компоненте страницы
  - question: В компоненте страницы, чтобы использовать данные из data в ваших `title` и `description` вам необходимо использовать
    answers:
      - функцию meta
      - функцию head 
      - функцию seo
    correctAnswer: функцию head
  - question: Вы можете добавить внешние ресурсы только в nuxt.config.js
    answers:
      - верно
      - не верно
    correctAnswer: не верно
  - question: Чтобы поместить скрипты до закрывающегося тега `</body>` необходимо использовать
    answers:
      - 'body: true'
      - 'body: false'
      - 'scripts: true'
    correctAnswer: 'body: true'
---

Nuxt.js предоставляет вам 3 различных пути добавления мета-тегов в ваше приложение:

1. Глобально, используя nuxt.config.js
2. Локально, используя head как объект
3. Локально, используя head как функцию, что позволяет вам иметь доступ к data и вычисляемым свойствам.

### Глобальные настройки

Nuxt.js позволяет вам определить все стандартные мета-теги для вашего приложения внутри nuxt.config.js файла используя свойство `head`. Это очень полезно при добавлении стандарных тегов `title` и `description` для SEO, для задания viewport или добавления favicon.

```js{}[nuxt.config.js]
export default {
  head: {
    title: 'заголовок моего сайта',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'описание моего сайта'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  }
}
```

<base-alert type="info">

Этот код даст вам одинаковые title и description для всех страниц

</base-alert>

### Локальные настройки

Вы также можете добавлять заголовки и мета-теги для каждой страницы используя метод `head` внутри тега script на каждой странице.

```js{}[pages/index.vue]
<script>
export default {
  head: {
    title: 'Главная страница',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Описание главной страницы'
      }
    ],
  }
}
</script>
```

<base-alert type="info">

Используйте `head` как объект для задания title и description только для главной страницы

</base-alert>

```html{}[pages/index.vue]
<template>
  <h1>{{ title }}</h1>
</template>
<script>
  export default {
    data() {
      return {
        title: 'Главная страница'
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Описание главной страницы'
          }
        ]
      }
    }
  }
</script>
```

<base-alert type="info">

Используйте `head` как функцию для задания title и description только для главной страницы. При использовании функции у вас есть доступ к data и вычисляемым свойствам 

</base-alert>

Nuxt.js использует [vue-meta](https://vue-meta.nuxtjs.org/) для обновления мета-тегов вашего приложения.

<base-alert>

Во избежание дублирования при использовании в дочерних компонентов, пожалуйста задавайте уникальные идентификаторы `hid` для мета-тега description. Так `vue-meta` будет понимать что необходимо перезаписать стандартный тег.

</base-alert>

<base-alert type="next">

Узнать больше о доступных свойствах `head` можно в [документации vue-meta](https://vue-meta.nuxtjs.org/api/#metainfo-properties)

</base-alert>

## Внешние ресурсы

Вы можете добавлять внешние ресурсы, такие как скрипты/шрифты, добавив их глобально в `nuxt.config.js` или локально в объект или функцию `head`.

<base-alert type="info">

Вы можете также передать каждому ресурсу необязательный параметр `body: true` чтоб поместить его до закрывающегося тега `</body>`.

</base-alert>

### Глобальные настройки

```js{}[nuxt.config.js]
export default {
  head: {
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
      }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap'
      }
    ]
  }
}
```

### Локальные настройки

```html{}[pages/index.vue]
<template>
  <h1>Страница "Про нас" с jQuery и шрифтом Roboto</h1>
</template>

<script>
  export default {
    head() {
      return {
        script: [
          {
            src:
              'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
          }
        ],
        link: [
          {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  h1 {
    font-family: Roboto, sans-serif;
  }
</style>
```

## resourceHints


Добавляет prefetch и preload ссылки для более быстрой загрузки страниц.

Вы можете отключить эту опцию если у вас много страниц и маршрутов.

<base-alert type="next">

[resourceHints](/docs/2.x/configuration-glossary/configuration-render#resourcehints)

</base-alert>

<quiz :questions="questions"></quiz>
