---
title: 'Метод head'
description: Nuxt.js использует `vue-meta` для изменения заголовков и `html атрибутов` вашего приложения.
menu: Метод Head
category: components-glossary
position: 0
---

> Nuxt.js использует [vue-meta](https://github.com/nuxt/vue-meta) для изменения заголовков и `html атрибутов` вашего приложения.

- **Тип:** `Object` или `Function`

Используйте метод `head` чтоб задать HTML теги в head для текущей страницы.

```html
<template>
  <h1>{{ title }}</h1>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Hello World!'
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
          // hid используется как уникальный идентификатор. Не используйте `vmid` так как он не сработает
          {
            hid: 'description',
            name: 'description',
            content: 'My custom description'
          }
        ]
      }
    }
  }
</script>
```

<base-alert type="info">

Чтобы избежать дубликата meta тэгов в дочернем компоненте, установите уникальный ключ `hid` для ваших meta тэгов ([узнать больше](https://vue-meta.nuxtjs.org/api/#tagidkeyname)).

</base-alert>
