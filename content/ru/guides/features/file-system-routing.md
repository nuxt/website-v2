---
title: Маршрутизация файловой системы
description: Nuxt.js автоматически генерирует конфигурацию vue-router на основе вашего файлового дерева файлов Vue внутри директории со страницами. Когда вы создаете файл .vue в каталоге страниц, у вас будет базовая маршрутизация без дополнительной настройки.
position: 3
category: features
questions:
  - question: Как называется компонент, который вы используете для перехода между страницами?
    answers:
      - '<a>'
      - '<NuxtLink>'
      - '<Nuxt>'
    correctAnswer: '<NuxtLink>'
  - question: Что нужно сделать, чтобы сгенерировать автоматическую конфигурацию маршрутизатора?
    answers:
      - добавить файл .vue в директорию со страницами
      - создать файл router.config
      - 'добавить на страницу <NuxtLink>'
    correctAnswer: добавить файл .vue в директорию со страницами
  - question: Что из перечисленного не приведет к созданию динамического маршрута?
    answers:
      - dynamic.vue
      - _slug.vue
      - _slug/index.vue
    correctAnswer: dynamic.vue
  - question: Динамические маршруты игнорируются командой nuxt generate?
    answers:
      - Правда
      - Ложь
    correctAnswer: Ложь
  - question: Как получить доступ к параметрам маршрута для динамической страницы, такой как users/_id.vue?
    answers:
      - $route.params.id
      - $route.id
      - $route.params.users.id
    correctAnswer: $route.params.id
  - question: Как определить родительский компонент вложенного маршрута?
    answers:
      - создать Vue файл с именем parent внутри директории, которая содержит дочерние представления
      - создать файл Vue с именем отличающимся от имени директории, содержащая дочерние представления
      - создать файл Vue с тем же именем, что и директория, содержащая дочерние представления
    correctAnswer: создать файл Vue с тем же именем, что и директория, содержащая дочерние представления
  - question: Если вам неизвестна глубина вашей структуры URL-адресов, какой файл можно использовать для динамического сопоставления вложенных путей?
    answers:
      - _.vue
      - _index.vue
      - _id.vue
    correctAnswer: _.vue
  - question: Какие компоненты можно использовать для рендеринга именованных представлений?
    answers:
      - '<Nuxt> и <Child>'
      - '<Nuxt> и <NuxtChild>'
      - '<NuxtChild> и <NuxtLink>'
    correctAnswer: '<Nuxt> и <NuxtChild>'
  - question: Какой файл вы можете создать в Nuxt.js, чтобы принудительно перемещать позицию прокрутки вверх для каждого маршрута?
    answers:
      - app/router.scrollBehavior.js
      - app/scrollBehavior.js
      - app/router.js
    correctAnswer: app/router.scrollBehavior.js
  - question: Вы можете добавить завершающие слэши, которые будут добавляться к каждому маршруту в Nuxt.js?
    answers:
      - Правда
      - Ложь
    correctAnswer: Правда
---

Nuxt.js автоматически генерирует конфигурацию vue-router на основе вашего файлового дерева файлов Vue внутри директории страниц. Когда вы создаете файл .vue в директории страниц, у вас будет базовая маршрутизация без дополнительной настройки.

Иногда вам может потребоваться создать динамические маршруты или вложенные маршруты, или вам может потребоваться дополнительная настройка свойств маршрутизатора. В этой главе будет рассмотрено все, что вам нужно знать, чтобы получить максимальную отдачу от вашего маршрутизатора.

<base-alert type="info">

Nuxt.js дает вам автоматическое разделение кода для ваших маршрутов, настройка не требуется

</base-alert>

<base-alert type="info">

Используйте [NuxtLink компонент](/docs/2.x/features/nuxt-components#the-nuxtlink-component) для навигации между страницами

</base-alert>

```html
<template>
  <NuxtLink to="/">Главная</NuxtLink>
</template>
```

## Основный маршруты

Данное файловое дерево:

```
pages/
--| user/
-----| index.vue
-----| one.vue
--| index.vue
```

автоматически сгенерирует:

```js
router: {
  routes: [
    {
      name: 'index',
      path: '/',
      component: 'pages/index.vue'
    },
    {
      name: 'user',
      path: '/user',
      component: 'pages/user/index.vue'
    },
    {
      name: 'user-one',
      path: '/user/one',
      component: 'pages/user/one.vue'
    }
  ]
}
```

## Динамические маршруты

Иногда невозможно узнать имя маршрута, например, когда мы делаем запрос к API, чтобы получить список пользователей или статей в блоге. Мы называем эти маршруты динамическими. Чтобы создать динамический маршрут, вам нужно добавить символ нижнего подчеркивания перед именем файла .vue или перед именем директории. Вы можете назвать файл или директорию как хотите, но вы должны поставить перед ним знак нижнего подчеркивания.

Данное файловое дерево:

```
pages/
--| _slug/
-----| comments.vue
-----| index.vue
--| users/
-----| _id.vue
--| index.vue
```

автоматически сгенерирует:

```js
router: {
  routes: [
    {
      name: 'index',
      path: '/',
      component: 'pages/index.vue'
    },
    {
      name: 'users-id',
      path: '/users/:id?',
      component: 'pages/users/_id.vue'
    },
    {
      name: 'slug',
      path: '/:slug',
      component: 'pages/_slug/index.vue'
    },
    {
      name: 'slug-comments',
      path: '/:slug/comments',
      component: 'pages/_slug/comments.vue'
    }
  ]
}
```

<base-alert type="info">

Как вы можете видеть, маршрут с именем `users-id` имеет путь`:id?`, что делает его опциональным. Если вы хотите сделать его обязательным, вместо этого создайте файл` index.vue` в директории `users/_id`.

</base-alert>

<base-alert type="info">

Начиная с Nuxt >= v2.13 установлен сканер, который теперь будет сканировать ваши теги ссылок и генерировать ваши динамические маршруты на основе этих ссылок. Однако, если у вас есть страницы, которые не связаны, например, секретная страница, вам нужно будет вручную сгенерировать эти динамические маршруты.

</base-alert>

<base-alert type="next">

[Создание динамических маршрутов](/docs/2.x/concepts/static-site-generation) для статических сайтов

</base-alert>

### Локальный доступ к параметрам маршрута

Вы можете получить доступ к текущим параметрам маршрута на вашей локальной странице или в компоненте, указав `this.$route.params.{parameterName}`. Например, если у вас есть страница динамических пользователей (`users/_id.vue`) и вы хотите получить доступ к параметру `id` для загрузки информации о пользователе, вы можете получить доступ к переменной следующим образом: `this.$route.params.id`.

## Вложенные маршруты

Nuxt.js позволяет создавать вложенные маршруты, используя дочерние маршруты vue-router. Чтобы определить родительский компонент вложенного маршрута, вам необходимо создать файл Vue с тем же именем, что и директория, содержащая ваши дочерние представления.

<base-alert>

Не забудьте добавить [NuxtChild компонент](/docs/2.x/features/nuxt-components#the-nuxtchild-component) в родительский компонент (файл `.vue`).

</base-alert>

Данное файловое дерево:

```
pages/
--| users/
-----| _id.vue
-----| index.vue
--| users.vue
```

автоматически сгенерирует:

```js
router: {
  routes: [
    {
      path: '/users',
      component: 'pages/users.vue',
      children: [
        {
          path: '',
          component: 'pages/users/index.vue',
          name: 'users'
        },
        {
          path: ':id',
          component: 'pages/users/_id.vue',
          name: 'users-id'
        }
      ]
    }
  ]
}
```

## Динамические вложенные маршруты

Динамические вложенные маршруты - это не распространенный сценарий, но с Nuxt.js можно иметь динамические дочерние элементы внутри динамических родителей.

Данное файловое дерево:

```
pages/
--| _category/
-----| _subCategory/
--------| _id.vue
--------| index.vue
-----| _subCategory.vue
-----| index.vue
--| _category.vue
--| index.vue
```

автоматически сгенерирует:

```js
router: {
  routes: [
    {
      path: '/',
      component: 'pages/index.vue',
      name: 'index'
    },
    {
      path: '/:category',
      component: 'pages/_category.vue',
      children: [
        {
          path: '',
          component: 'pages/_category/index.vue',
          name: 'category'
        },
        {
          path: ':subCategory',
          component: 'pages/_category/_subCategory.vue',
          children: [
            {
              path: '',
              component: 'pages/_category/_subCategory/index.vue',
              name: 'category-subCategory'
            },
            {
              path: ':id',
              component: 'pages/_category/_subCategory/_id.vue',
              name: 'category-subCategory-id'
            }
          ]
        }
      ]
    }
  ]
}
```

## Неизвестные динамические вложенные маршруты

Если вам неизвестна глубина вашей структуры URL, вы можете использовать `_.vue` для динамического сопоставления вложенных путей. Так будут обработаны запросы, которые не соответствуют _более конкретному_ маршруту.

Данное файловое дерево:

```
pages/
--| people/
-----| _id.vue
-----| index.vue
--| _.vue
--| index.vue
```

Будет обрабатывать такие запросы:

```
/ -> index.vue
/people -> people/index.vue
/people/123 -> people/_id.vue
/about -> _.vue
/about/careers -> _.vue
/about/careers/chicago -> _.vue
```

<base-alert type="info">

Обработка страниц 404 теперь зависит от логики страницы `_.vue`.

</base-alert>

## Расширение маршрутизации

Есть несколько способов расширить маршрутизацию с помощью Nuxt:

- [router-extras-module](https://github.com/nuxt-community/router-extras-module) настроить параметры маршрута на странице
- компонент[@nuxtjs/router](https://github.com/nuxt-community/router-module) для перезаписи маршрутизатора Nuxt и записи собственного файла `router.js`
- Использовать свойство [router.extendRoutes](/docs/2.x/configuration-glossary/configuration-router#extendroutes) в вашем `nuxt.config.js`

## Свойства маршрутизации

Свойство router позволяет настраивать маршрутизатор Nuxt.js (vue-router).

```js{}[nuxt.config.js]
export default {
  router: {
    // настроить маршрутизацию Nuxt.js 
  }
}
```

### Base:

Базовый URL-адрес приложения. Например, если все одностраничное приложение обслуживается в `/app/`, тогда base должно использовать значение `'/app/'`.

<base-alert type="next">

[Свойство маршрутизатора Base](/docs/2.x/configuration-glossary/configuration-router#base)

</base-alert>

### extendRoutes

Вам может понадобиться расширить маршруты, созданные Nuxt.js. Это можно сделать с помощью опции `extendRoutes`.

Пример добавления собственного маршрута:

```js{}[nuxt.config.js]
export default {
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/404.vue')
      })
    }
  }
}
```

Если вы хотите отсортировать свои маршруты, вы можете использовать функцию `sortRoutes(routes)` из `@ nuxt/utils`:

```js{}[nuxt.config.js]
import { sortRoutes } from '@nuxt/utils'
export default {
  router: {
    extendRoutes(routes, resolve) {
      // Добавьте сюда несколько маршрутов ...

      // и затем отсортируйте их
      sortRoutes(routes)
    }
  }
}
```

<base-alert>

Схема маршрута должна соответствовать схеме [vue-router](https://router.vuejs.org/en/).

</base-alert>

<base-alert>

При добавлении маршрутов, использующих [Именованные представления](/docs/2.x/features/file-system-routing#nested-routes), не забудьте добавить соответствующие `chunkNames` именованных `components`.

</base-alert>

```js{}[nuxt.config.js]
export default {
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/users/:id',
        components: {
          default: resolve(__dirname, 'pages/users'), // или routes[index].component
          modal: resolve(__dirname, 'components/modal.vue')
        },
        chunkNames: {
          modal: 'components/modal'
        }
      })
    }
  }
}
```

<base-alert type="next">

[Свойство extendRoutes](/docs/2.x/configuration-glossary/configuration-router#extendroutes)

</base-alert>

### fallback

Определяет, должен ли маршрутизатор переходить в режим навигации по хешам, если браузер не поддерживает history.pushState, но для режима задано значение history.

<base-alert type="next">

[Свойство fallback](/docs/2.x/configuration-glossary/configuration-router#fallback)

</base-alert>

### mode

Настройте режим роутера, менять его не рекомендуется из-за рендеринга на стороне сервера.

<base-alert type="next">

[Свойство mode](/docs/2.x/configuration-glossary/configuration-router#mode)

</base-alert>

### parseQuery / stringifyQuery

Предоставьте свои функции parse и stringify для строки параметров запроса.

<base-alert type="next">

[Свойство parseQuery / stringifyQuery](/docs/2.x/configuration-glossary/configuration-router#parsequery--stringifyquery)

</base-alert>

### routeNameSplitter

Вы можете изменить разделитель между именами маршрутов, которые использует Nuxt.js. Вы можете сделать это с помощью параметра `routeNameSplitter` в вашем файле конфигурации. Представьте, что у нас есть файл страницы `pages/posts/_id.vue`. Nuxt.js сгенерирует имя маршрута программно, в данном случае `posts-id`. Изменив конфигурацию `routeNameSplitter` на `/`, имя изменится на `posts/id`.

```js{}[nuxt.config.js]
export default {
  router: {
    routeNameSplitter: '/'
  }
}
```

### scrollBehavior

Параметр `scrollBehavior` позволяет вам определять настраиваемое поведение для позиции прокрутки между маршрутами. Этот метод вызывается каждый раз при отображении страницы.

<base-alert type="next">

Чтобы узнать об этом больше, см. [документация vue-router scrollBehavior](https://router.vuejs.org/guide/advanced/scroll-behavior.html).

</base-alert>

Доступно с: v2.9.0:

В Nuxt.js вы можете использовать файл для перезаписи scrollBehavior маршрутизатора. Этот файл следует поместить в папку с именем app.

`~/app/router.scrollBehavior.js`.

Пример принудительного перемещения позиции прокрутки вверх для каждого маршрута:

```js{}[app/router.scrollBehavior.js]
export default function (to, from, savedPosition) {
  return { x: 0, y: 0 }
}
```

<base-alert type="next">

[`router.scrollBehavior.js` файл по умолчанию в Nuxt.js.](https://github.com/nuxt/nuxt.js/blob/dev/packages/vue-app/template/router.scrollBehavior.js)

</base-alert>

<base-alert type="next">

[Свойство scrollBehavior](/docs/2.x/configuration-glossary/configuration-router#scrollbehavior)

</base-alert>

### trailingSlash

Доступно с: v2.10

Если для этого параметра установлено значение true, завершающие слэши будут добавлены к каждому маршруту. Если установлено значение false, они будут удалены.

```js{}[nuxt.config.js]
export default {
  router: {
    trailingSlash: true
  }
}
```

<base-alert>

Этот параметр не следует устанавливать без подготовки и тщательного тестирования. Если установить для параметра `router.trailingSlash` значение, отличное от `undefined` (значение по умолчанию), противоположный маршрут перестанет работать. Таким образом, редирект для 301 должен быть настроен, и ваша _внутренняя ссылка_ должна быть правильно адаптирована. Если вы установите значение true для параметра `trailingSlash`, тогда будет работать только `example.com/abc/` но не `example.com/abc`. При false все наоборот.

</base-alert>

<base-alert type="next">

[Свойство trailingSlash](/docs/2.x/configuration-glossary/configuration-router#trailingslash)

</base-alert>

<quiz :questions="questions"></quiz>
