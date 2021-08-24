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
  - question: Есть ли у вас доступ к this при использовании Nuxt.js хука `fetch`?
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
  - question: С помощью какой конструкции вы можете получить доступ для возможности отображения заглушки в тот момент когда хук `fetch` вызывается на *стороне клиента*?
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
  - question: Можете ли вы использовать параметр `context` в методе `asyncData` для доступа к динамическим данным в роуте?
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

- хук `fetch` (Nuxt 2.12+). Этот хук может использоваться в любом компоненте, и предоставляет быстрый доступ для отображения состояния загрузки (во время рендеринга на стороне клиента) и ошибок.
- хук `asyncData`. Этот хук может использоваться только на _страничных_ комопнентах. В отличие от `fetch`, этот хук не отображает загрузчик во время рендеринга на стороне клиента: вместо этого, этот хук болкирует навигацию по роутам пока не завершиться загрузка, или не отобразится страница с текстом ошибки, если при загрузке та самая ошибка произошла.

<base-alert>

В версиях Nuxt до версии 2.12, хук `fetch` работал так же, как хук `asyncData` сегодня. Этот функционал до сих пор поддерживается для обратной совместимости в проектах: если вы используете аргумент `context` в хуке `fetch`, это будет считаться "легаси" fetch хуком.  Этот функционал уже устарел, и вы должны заменить его на `asyncData(context)` или на [анонимный middleware](/docs/2.x/directory-structure/middleware#anonymous-middleware) используя `middleware(context)`.

</base-alert>

Эти хуки могут использоваться с любой _библиотекой для получения данных_. Мы рекомендуем использовать библиотеку [@nuxt/http](https://http.nuxtjs.org/) или [@nuxt/axios](https://axios.nuxtjs.org/) для запросов к API. Дополнительную информацию по этим библиотекам, такую как конфигурация, авторизация, заголовки запросов, вы найдете в документации этих библиотек.

## Хук fetch

<base-alert type="info">

Этот хук доступен только в версии Nuxt 2.12 и выше.

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

`fetchDelay`: тип `Integer` (значение по умолчанию: `200`), выставляет минимальное время выполнения в милисекундах для избежания мерцания контента

Когда `fetchOnServer` имеет значение `false` (или возвращает `false`), хук `fetch` будет вызван только на стороне клиента и `$fetchState.pending` вернет значение `true` когда компонент рендерится на стороне сервера.

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
    // Будет выполнено при изменении query строки
  }
}
```

### Кэширование

Вы можете использовать директиву `keep-alive` в `<nuxt/>` и `<nuxt-child/>` компонентах для кэширования вызовов хука `fetch` на страницах, которые вы уже посещали.

```html{}[layouts/default.vue]
<template>
  <nuxt keep-alive />
</template>
```

Вы также можете пробросить [пропсы](https://vuejs.org/v2/api/#keep-alive) для скрытого кеширующего компонента `<keep-alive>` указав пропс `keep-alive-props` в компоненте `<nuxt>`.

```html{}[layouts/default.vue]
<nuxt keep-alive :keep-alive-props="{ max: 10 }" />
```

Кэшируются только 10 последних страниц в памяти.

### Использование хука `activated`

Nuxt будет всегда сохранять `this.$fetchState.timestamp` (отметку времени) последних вызовов хука `fetch` (включая рендеринг на стороне сервера). Вы можете использовать это свойство в комбинации с хуком `activated` чтобы закэшировать `fetch` на 30 секунд:

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

При навигации на ту же самую страницу хук `fetch` не вызовется, если последний его вызов был менее 30 секунд назад.

## Асинхронные данные

<base-alert>

Хук `asyncData` доступен только для [страниц](/docs/2.x/directory-structure/pages) и у вас нет доступа к `this` внутри этого хука.

</base-alert>


`asyncData` - это хук для универсальных запросов к серверу для получения данных. В отличии от хука `fetch`, который требует передавать свойства в инстанс компонента (или вызывать экшены во Vuex) для сохранения данных в стейте асинхронно, хук `asyncData` просто возвращает данные в локальный стейт компонента. Вот пример использования библиотеки [@nuxt/http](https://http.nuxtjs.org/):

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

В отличии от хука `fetch`, promise возвращенный хуком `asyncData` отрабатывает _во время перехода между маршрутами_. Это означает что заглушка состояния загрузки будет видна при переходах между маршрутами на стороне клиента (хотя, [полоса загрузки](https://nuxtjs.org/guides/features/loading/) может использоваться как индикатор загрузки данных). Nuxt будет ждать окончания работы хука `asyncData` и только после этого перейдет на другую страницу или отобразит [страницу с ошибкой](/docs/2.x/directory-structure/layouts#error-page).

Этот хук может использоваться только в компонентах на уровне страниц. В отличии от хука `fetch`, хук `asyncData` не имеет доступа к инстансу компонента (`this`). Вместо этого, он получает [контекст](/docs/2.x/concepts/context-helpers) как аргумент. Вы можете использовать это для получения данных и Nuxt.js будет автоматически сохранять возвращаемый объект в локальном стейте компонента.

Мы рекомендуем использовать библиотеку [@nuxt/http](https://http.nuxtjs.org/) для получения данных с API.

### Прослушивание изменений в query

Метод `asyncData` не реагирует на изменения в query строке по умолчанию. Если вы хотите изменить это поведение, например при создании пагинации в компоненте, вы можете настроить парамерты которые должны прослушиваться с помощью свойства `watchQuery` в вашем компоненте.

<base-alert type="next">

Вы можете узнать больше о [свойстве watchQuery](/docs/2.x/components-glossary/pages-watchquery) и увидеть список доступных [ключей в контексте](/docs/2.x/concepts/context-helpers).

</base-alert>

<quiz :questions="questions"></quiz>
