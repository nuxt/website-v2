---
title: Получение данных
description: В Nuxt.js у нас есть 2 способа получения данных из API. Мы можем использовать метод `fetch` или `asyncData`.
position: 4
category: features
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/03_features/04_data_fetching?fontsize=14&hidenavigation=1&theme=dark
questions:
  - question: Где в Nuxt.js вы можете использовать хук `fetch`?
    answers:
      - на страницах и в компонентах
      - только на страницах
      - только в компонентах
    correctAnswer: на страницах и в компонентах
  - question: У вас есть доступ к this при использовании Nuxt.js хука `fetch`?
    answers:
      - да
      - нет
    correctAnswer: да
  - question: Когда вызывается Nuxt.js хук `fetch`?
    answers:
      - После того как компонент инициализирован
      - До инициализации компонента
      - Во время инициализации компонента
    correctAnswer: После того как компонент инициализирован
  - question: С помощью какой конструкции вы можете получить доступ для возможности отображения сообщения когда хук `fetch` вызывается на *стороне клиента*?
    answers:
      - $fetchState.timestamp
      - $fetchState.error
      - $fetchState.pending
    correctAnswer: $fetchState.pending
  - question: Как вы можете сохранить fetch запросы на страницах, которые вы уже посещали?
    answers:
      - keep-alive
      - save-fetch
      - cache-fetch
    correctAnswer: keep-alive
  - question: Какую конструкцию вы используете, чтобы добавить в кэш запросы за последние 30 секунд?
    answers:
      - $fetchState.pending
      - $fetchState.timestamp
      - $fetchState.cache
    correctAnswer: $fetchState.timestamp
  - question: Когда вызывается метод `asyncData`?
    answers:
      - после загрузки компонента на странице
      - во время загрузки компонента на странице
      - до загрузки компонента на старнице
    correctAnswer: до загрузки компонента на старнице
  - question: Имеется ли возможность доступа к `this` внутри метода `asyncData`  
    answers:
      - да
      - нет
    correctAnswer: нет
  - question: Можете ли вы использовать параметр `context` в методе `asyncData` для доступа к динамическим данныи в роуте?
    answers:
      - да
      - нет
    correctAnswer: да
  - question: У вас есть доступ к статусу ошибки `statusCode` в методе `asyncData`
    answers:
      - да
      - нет
    correctAnswer: да
---

Nuxt.js поддерживает традиционные методы Vue для загрузки данных в приложение на стороне клиента, такие как например хук `mounted()` - для получения данных в компоненте. Универсальные приложения, тем не менее, должны использовать специфичные хуки в Nuxt.js, чтобы иметь возможность отрисовать данные во время рендеринга на стороне сервера. Это позволяет отрендерить вашу страницу со всеми запрошенными данными.
 
В Nuxt есть два хука для асинхронной загрузки данных:

- хук `fetch` (Nuxt 2.12+). Этот хук может использоваться в любом компоненте, and provides shortcuts for rendering loading states (и предоставляет быстрый доступ для отображения загружаемого стейта (состояния)) (во время рендеринга на стороне клиента) и ошибок.
- хук `asyncData`. Этот хук может использоваться только на _страницах_ комопнентов. В отличие от `fetch`, этот хук не отображает загрузчик во время рендеринга на стороне клиента: вместо этого, этот хук болкирует навигацию по роутам пока не завершиться загрузка, или не отобразится страница с текстом ошибки, если при загрузке та самая ошибка произошла.

<base-alert>

В версиях Nuxt до версии 2.12, хук `fetch` работал так же, как хук `asyncData` сегодня. Этот функционал до сих пор поддерживается для обратной совместимости в проектах: если вы используете аргумент `context` в хуке `fetch`, это будет считаться "легаси" fetch хуком.  Этот функционал уже устарел, и вы должны заменить его на `asyncData(context)` или на [анонимный middleware](/docs/2.x/directory-structure/middleware#anonymous-middleware) используя `middleware(context)`.

</base-alert>

Эти хуки могут использоваться с любой _библиотекой для получения данных_. Мы рекомендуем использовать библиотеку [@nuxt/http](https://http.nuxtjs.org/) или [@nuxt/axios](https://axios.nuxtjs.org/) для запросов к API. Для получения большей информации по этим библиотекам, такой как конфигурация, авторизация, заголовки запросов, вы найдете в документации этих библиотек.

## Хук fetch

<base-alert type="info">

Этот хук длступен только в версии Nuxt 2.12 и позже.

</base-alert>

  `fetch` - это хук, который вызывается при рендериннге на стороне сервера после создания инстанса компонента и при навигации на стороне клиента. Хук fetch должен вернуть promise (явно или не явно используя `async/await`) который будет выполнен:

- На стороне сервера до того, как страница будет отрендерена
- На стороне клиента после того как компонент смонтируется

Вы можете использовать `$fetchState` на уровне компонента со следующими свойствами:

- `pending` тип `Boolean`, которое позволяет вам показать сообщение когда хук `fetch` вызывается на _стороне клиента_ 
- `error` тип `null` или ошибка `Error` выброшеная хуком `fetch`
- `timestamp` - это отметка времени когда был сделан последний запрос, которая полезна для [кэширования с помошью `keep-alive`](#caching)

Помимо того, что хук `fetch` может быть вызван Nuxt приложением, вы можете сами вызвать этот хук в вашем компоненте (например, для асинхронного обновления данных) с помошью конструкции `this.$fetch()`.

```html{}[components/NuxtMountains.vue]
<template>
  <p v-if="$fetchState.pending">Fetching mountains...</p>
  <p v-else-if="$fetchState.error">An error occurred :(</p>
  <div v-else>
    <h1>Nuxt Mountains</h1>
    <ul>
      <li v-for="mountain of mountains">{{ mountain.title }}</li>
    </ul>
    <button @click="$fetch">Refresh</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        mountains: []
      }
    },
    async fetch() {
      this.mountains = await fetch(
        'https://api.nuxtjs.dev/mountains'
      ).then(res => res.json())
    }
  }
</script>
```

<base-alert type="info">

Вы можете получить доступ к Nuxt [контексту](/docs/2.x/concepts/context-helpers) внутри хука fetch с помощью конструкции `this.$nuxt.context`.

</base-alert>

### Опции

`fetchOnServer`: тип `Boolean` или `Function` (значение по умолчанию: `true`), вызывает `fetch()` когда страница рендерится на стороне сервера

`fetchDelay`: тип `Integer` (значение по умолчанию: `200`), выставляет минимальное время выполнения в милисекундах (to avoid quick flashes для избежания мерцаний?)

Когда `fetchOnServer` имеет значение false (`false` или возвращает `false`), хук `fetch` будет вызван только на стороне клиента и `$fetchState.pending` вернет значение `true` когда компонент рендерится на стороне сервера.

```js
export default {
  data() {
    return {
      posts: []
    }
  },
  async fetch() {
    this.posts = await fetch('https://api.nuxtjs.dev/posts').then(res =>
      res.json()
    )
  },
  // call fetch only on client-side
  fetchOnServer: false
}
```

### Прослушка изменений в query строке

Хук `fetch` не вызывается по умолчанию при изменении query строки. Для прослушки изменений, вы можете повесить слушатель на `$route.query` и вызывать `$fetch`:

```js
export default {
  watch: {
    '$route.query': '$fetch'
  },
  async fetch() {
    // Called also on query changes
  }
}
```

### Кэширование

Вы можете использовать директиву `keep-alive` в `<nuxt/>` и `<nuxt-child/>` компонентах для сохранения (кэширования?) вызовов хука `fetch` на страницах, которые вы уже посещали.

```html{}[layouts/default.vue]
<template>
  <nuxt keep-alive />
</template>
```

Вы также можете указать [пропс](https://vuejs.org/v2/api/#keep-alive) passed to `<keep-alive>` (тут хз че происходит в оригинале) указав пропс `keep-alive-props` в компоненте `<nuxt>`.

```html{}[layouts/default.vue]
<nuxt keep-alive :keep-alive-props="{ max: 10 }" />
```

Кэшируются только 10 последних страниц в памяти.

### Использование хука `activated`

Nuxt будет всегда сохранять `this.$fetchState.timestamp` (отметку времени) последних вызовов хука `fetch` (включая рендеринг на стороне сервера). Вы можете использовать это свойство в комбинации с хуком `activated` чтобы закэшировать 30 секунд в `fetch`:

```html{}[pages/posts/_id.vue]
<template> ... </template>

<script>
  export default {
    data() {
      return {
        posts: []
      }
    },
    activated() {
      // Вызовите хук fetch еще раз, если последний запрос был сделан больше чем 30 секунд назад
      if (this.$fetchState.timestamp <= Date.now() - 30000) {
        this.$fetch()
      }
    },
    async fetch() {
      this.posts = await fetch('https://api.nuxtjs.dev/posts').then(res =>
        res.json()
      )
    }
  }
</script>
```

The navigation to the same page will not call `fetch` if last `fetch` call was before 30 sec ago.

## Async Data

<base-alert>

`asyncData` is only available for [pages](/docs/2.x/directory-structure/pages) and you don't have access to `this` inside the hook.

</base-alert>

`asyncData` is another hook for universal data fetching. Unlike `fetch`, which requires you to set properties on the component instance (or dispatch Vuex actions) to save your async state, `asyncData` simply merges its return value into your component's local state. Here's an example using the [@nuxt/http](https://http.nuxtjs.org/) library:

```html{}[pages/posts/_id.vue]
<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.description }}</p>
  </div>
</template>

<script>
  export default {
    async asyncData({ params, $http }) {
      const post = await $http.$get(`https://api.nuxtjs.dev/posts/${params.id}`)
      return { post }
    }
  }
</script>
```

Unlike `fetch`, the promise returned by the `asyncData` hook is resolved _during route transition_. This means that no "loading placeholder" is visible during client-side transitions (although the [loading bar](https://nuxtjs.org/guides/features/loading/) can be used to indicate a loading state to the user). Nuxt will instead wait for the `asyncData` hook to be finished before navigating to the next page or display the [error page](/docs/2.x/directory-structure/layouts#error-page)).

This hook can only be used for page-level components. Unlike `fetch`, `asyncData` cannot access the component instance (`this`). Instead, it receives [the context](/docs/2.x/concepts/context-helpers) as its argument. You can use it to fetch some data and Nuxt.js will automatically merge the returned object with the component data.

In the upcoming examples, we are using [@nuxt/http](https://http.nuxtjs.org/) which we recommend for fetching data from an API.

### Listening to query changes

The `asyncData` method is not called on query string changes by default. If you want to change this behavior, for example when building a pagination component, you can set up parameters that should be listened to with the `watchQuery` property of your page component.

<base-alert type="next">

Learn more about the [watchQuery property](/docs/2.x/components-glossary/pages-watchquery) and see the list of available [keys in context](/docs/2.x/concepts/context-helpers).

</base-alert>

<quiz :questions="questions"></quiz>
