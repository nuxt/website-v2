---
title: 'Метод fetch'
description: Метод `fetch` используется для того чтоб заполнить хранилище до того как будет запущен рендеринг страницы. Он работает как метод `asyncData` за исключением того, что он не устанавливает данные компонента.
menu: Метод Fetch
category: components-glossary
---

## Nuxt >= 2.12

В Nuxt.js `v2.12` представлен новый хук `fetch` который может вызываться **в любом Vue компоненте**.

<base-alert>

`fetch(context)` является устаревшим, вместо этого вы можете использовать в вашей странице [анонимный middleware](/guides/components-glossary/pages-middleware#anonymous-middleware): `middleware(context)`

</base-alert>

### Когда использовать fetch?

Вы можете использовать его каждый раз когда вам необходимо получить **асинхронные** данные. `fetch` вызывается на стороне сервера когда происходит рендеринг рута, и на строне клиента при переходе между роутами.

Он предоставляет `$fetchState` на уровне компонента:

- `$fetchState.pending`: `Boolean`, дает возможность отобразить плейсхолдер когда `fetch` вызван _на стороне клиента_.
- `$fetchState.error`: `null` или `Error`, дает возможность отобразить ошибку
- `$fetchState.timestamp`: `Integer`, таймстамп последнего fetch запроса, полезный для кеширования с `keep-alive`

Если вы хотите вызвать `fetch` хук из вашего темплейта используйте:

```html
<button @click="$fetch">Refresh</button>
```

или метод в компоненте:

```javascript
export default {
  methods: {
    refresh() {
      this.$fetch()
    }
  }
}
```

Вы можете получить доступ к [контексту](/guides/internals-glossary/context) внутри fetch хука используя `this.$nuxt.context`.

### Опции

- `fetchOnServer`: `Boolean` или `Function` (по умолчанию: `true`), вызывает `fetch()` при серверном рендеринге страницы
- `fetchDelay`: `Integer` (по умолчанию: `200`), задаёт минимальное время выполнения в миллисекундах (чтобы избежать мигания экрана при вставке контента скриптом)

<div class="Alert Alert--green">
  При задании `fetchOnServe:false` `fetch` будет вызываться только на стороне клиента, при этом `$fetchState.pending` будет возвращать  `true` только при серверном рендеринге компонента. 
</div>

```html
<script>
  export default {
    data() {
      return {
        posts: []
      }
    },
    async fetch() {
      this.posts = await this.$http.$get(
        'https://jsonplaceholder.typicode.com/posts'
      )
    },
    fetchOnServer: false
  }
</script>
```
