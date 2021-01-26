---
title: Компоненты Nuxt
description: Из коробки Nuxt.js поставляется с несколькими важными компонентами, которые будут полензны при создании вашего приложения.
position: 9
category: features
csb_link_nuxt_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/03_features/09_components_nuxt-link?fontsize=14&hidenavigation=1&theme=dark
csb_link_nuxt: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/03_features/09_components_nuxt?fontsize=14&hidenavigation=1&theme=dark
questions:
  - question: Какой компонент вы используете для отображения компонентов страницы?
    answers:
      - '<Nuxt>'
      - '<Page>'
      - '<Views>'
    correctAnswer: '<Nuxt>'
  - question: Где может использоваться компонент `<Nuxt>`?
    answers:
      - компоненты
      - страницы
      - макеты
    correctAnswer: макеты
  - question: Какой компонент используется для отображения дочерних компонентов во вложенном маршруте?
    answers:
      - '<Nuxt>'
      - '<NuxtChild>'
      - '<Children>'
    correctAnswer: '<NuxtChild>'
  - question: Где вы поместите компонент `<NuxtChild>`?
    answers:
      - pages/child.vue
      - pages/parent.vue
      - layouts/parent.vue
    correctAnswer: pages/parent.vue
  - question: `keep-alive` может быть использован в
    answers:
      - только в компоненте <Nuxt>
      - в компонентах <Nuxt> и <NuxtChild>
      - только в компоненте <NuxtChild>
    correctAnswer: в компонентах <Nuxt> и <NuxtChild>
  - question: Какой компонент мы используем для ссылки на внутренние страницы?
    answers:
      - '<NuxtLink>'
      - '<RouterLink>'
      - '<a>'
    correctAnswer: '<NuxtLink>'
  - question: Как вы будете ссылаться на страницу про вас внутри вашего приложения используя <NuxtLink>?
    answers:
      - to="/about"
      - href="/about"
      - link="/about"
    correctAnswer: to="/about"
  - question: Какой ключ вы будете использовать для отключения предварительного получения данных для некоторых страниц?
    answers:
      - no-prefetch
      - :prefetch="false"
      - no-prefetch и :prefetch="false"
    correctAnswer: no-prefetch и :prefetch="false"
  - question: Какой по умолчанию класс вы можете использовать для стилизации частично совпадающих ссылок?
    answers:
      - nuxt-link-active
      - link-active
      - router-link-active
    correctAnswer: nuxt-link-active
  - question: Какой по умолчанию класс вы можете использовать для стилизации точно совпадающих ссылок?
    answers:
      - nuxt-link-exact-active
      - link-exact-active
      - nuxt-exact-active-link
    correctAnswer: nuxt-link-exact-active
  - question: Какой бы вы использовали компонент в Nuxt ≥ 2.9.0 чтоб ваш компонент рендерился на стороне клиента?
    answers:
      - '<client-only>'
      - '<no-ssr>'
      - '<client>'
    correctAnswer: '<client-only>'
---

Из коробки Nuxt.js поставляется с несколькими важными компонентами, которые будут полензны при создании вашего приложения. Компоненты глобально доступны, это значит что вам не нужно импортировать их при использовании.

Описание данных компонентов приведено в следующих параграфах.

## Компонент Nuxt

Компонент `<Nuxt>` используется для отображения компонентов страницы. По сути, он заменяется внутренними компонентами страницы, в зависимости от того какая страница отображается. Поэтому компонент `<Nuxt>` необходимо добавлять в ваши макеты.

```html{}[layouts/default.vue]
<template>
  <div>
    <div>My nav bar</div>
    <Nuxt />
    <div>My footer</div>
  </div>
</template>
```

<base-alert>

Компонент `<Nuxt>` может использоваться только внутри [шаблонов](/docs/2.x/concepts/views#layouts).

</base-alert>

В компоненте `<Nuxt>` может использоваться входной параметр `nuxt-child-key`. Он может передаваться в `<RouterView>` чтобы ваши переходы корректно срабатывали внутри динамических страниц.

Есть 2 способа обработки внутреннего входного параметра `key` в `<RouterView>`.

1. Использование входного параметра `nuxtChildKey` на вашем `<Nuxt>` компоненте

```html{}[layouts/default.vue]
<template>
  <div>
    <Nuxt :nuxt-child-key="someKey" />
  </div>
</template>
```

2. Добавление опции `key` в компоненты _страницы_ как `string` либо `function`

```js
export default {
  key(route) {
    return route.fullPath
  }
}
```

## Компонент NuxtChild

Этот компонент используется для отображения дочерних компонентов во вложенном маршруте.

Пример:

```
-| pages/
---| parent/
------| child.vue
---| parent.vue
```

Это файловое дерево генерирует следующие маршруты:

```js
;[
  {
    path: '/parent',
    component: '~/pages/parent.vue',
    name: 'parent',
    children: [
      {
        path: 'child',
        component: '~/pages/parent/child.vue',
        name: 'parent-child'
      }
    ]
  }
]
```

Для отображения компонента `child.vue` вам необходимо поместить компонент `<NuxtChild>` внутри `pages/parent.vue`:

```html{}[pages/parent.vue]
<template>
  <div>
    <h1>I am the parent view</h1>
    <NuxtChild :foobar="123" />
  </div>
</template>
```

## keep-alive

Оба компонента, `<Nuxt>` и `<NuxtChild/>`, могут использоваться с `keep-alive` и `keep-alive-props`.

<base-alert type="info">

Больше информации о keep-alive и keep-alive-props доступно в [руководстве vue](https://vuejs.org/v2/api/#keep-alive)

</base-alert>

```html{}[layouts/default.vue]
<template>
  <div>
    <Nuxt keep-alive :keep-alive-props="{ exclude: ['modal'] }" />
  </div>
</template>

<!-- будет преобразовано во что-то на подобие этого -->
<div>
  <KeepAlive :exclude="['modal']">
    <RouterView />
  </KeepAlive>
</div>
```

```html{}[pages/parent.vue]
<template>
  <div>
    <NuxtChild keep-alive :keep-alive-props="{ exclude: ['modal'] }" />
  </div>
</template>

<!-- будет преобразовано во что-то на подобие этого -->
<div>
  <KeepAlive :exclude="['modal']">
    <RouterView />
  </KeepAlive>
</div>
```

Компоненты `<NuxtChild>` могут также получать входные параметры как и обычные Vue компоненты.

```html
<template>
  <div>
    <NuxtChild :key="$route.params.id" />
  </div>
</template>
```

## Компонент NuxtLink
Для перехода между страницами вашего приложения вы должны использовать компонент `<NuxtLink>`. Этот компонент сожержится в Nuxt.js и поэтому вы не должны импортировать его, как это делается с остальными компонентами. Он похож на HTML-тег `<a>` за исключением того, что вместо `href="/about"` вы используете `to="/about"`. Если до этого момента вам приходилось использовать `vue-router`, то вы можете думать о `<NuxtLink>` как о замене `<RouterLink>`.

Простая ссылка на страницу `index.vue` в папке `pages`:

```html
<template>
  <NuxtLink to="/">Home page</NuxtLink>
</template>
```

Компонент `<NuxtLink>` должен использоваться для всех внутренних ссылок. Это значит что для всех ссылок на страницы внутри вашего вебсайта вы должны использовать `<NuxtLink>`. HTML-тег `<a>` должен использоваться для всех внешних ссылок. Это значит, что если у вас имеются ссылки на другие вебсайты, то вы должны использовать тег `<a>` для них.

```html
<template>
  <div>
    <h1>Home page</h1>
    <NuxtLink to="/about"
      >About (внутренние ссылки, которые принадлежат Nuxt App)</NuxtLink
    >
    <a href="https://nuxtjs.org">Внешние ссылки на другие вебсайты</a>
  </div>
</template>
```

<base-alert type="info">

Если вы хотите узнать больше о `<RouterLink>`, можете ознакомиться с [документацией Vue Router](https://router.vuejs.org/api/#router-link) для более подробной информации.

</base-alert>

## prefetchLinks

В Nuxt.js автоматически включена умная предзагрузка. Это значит что он определяет ссылки которые видимы пользователю, либо находятся в области видимости окна просмотра, либо появляются при прокрутке страницы, и предзагружает JavaScript для этих страниц, поэтому при клике на ссылку страницы уже готовы к отображению. Nuxt.js загружает необходимые ресурсы только когда браузер не занят другими процессами, и пропускает предзагрузку если у девайса 2G связь или вовсе отсутствует.

<base-alert type="info">

Чтобы узнать больше об умной предзагрузке прочтите [эту статью](/blog/introducing-smart-prefetching).

</base-alert>

### Отключение предзагрузки для некоторых ссылок

Иногда вам может быть необходимо отключить предзагрузку для определенных страниц. К примеру если JavaScript для этой страницы имеет большой объем, либо если у вас есть много других страниц которые должны быть предзагружены, или у вас большое количество внешних JavaScript библиотек которые должны быть загружены. Для отключения предзагрузки для определенных страниц вы можете использовать входной параметр `no-prefetch`. Начиная с Nuxt.js v2.10.0, вы можете использовать входной параметр `prefetch` задавая ему значение `false`.

```html
<NuxtLink to="/about" no-prefetch>Страница "Про нас" не предзагружена</NuxtLink>
<NuxtLink to="/about" :prefetch="false">Страница "Про нас" не предзагружена</NuxtLink>
```

### Глобальное отключение предзагрузки

Для отключения предзагрузки для все ссылок задайте в конфигурационном файле `prefetchLinks` значение `false`:

```js{}[nuxt.config.js]
export default {
  router: {
    prefetchLinks: false
  }
}
```

Начиная с Nuxt.js v2.10.0, if you have to set `prefetchLinks` to `false` but you want to prefetch a specific link, you can use the `prefetch` prop:

```html
<NuxtLink to="/about" prefetch>About page prefetched</NuxtLink>
```

## Link Classes

### linkActiveClass

The `linkActiveClass` works the same as the `vue-router` class for active links. If we want to show which links are active all you have to do is create some css for the class `nuxt-link-active` .

```css
.nuxt-link-active {
  color: red;
}
```

<base-alert>

This css can be added to the navigation component or for a specific page or layout or in your main.css file.

</base-alert>

If you want to you can also configure the class name to be something else. You can do this by modifying the `linkActiveClass` in the router property in your `nuxt.config.js` file.

```js
export default {
  router: {
    linkActiveClass: 'my-custom-active-link'
  }
}
```

<base-alert type="info">

This option is given directly to the `vue-router` linkActiveClass. See the [vue-router docs](https://router.vuejs.org/api/#active-class) for more info.

</base-alert>

### linkExactActiveClass

The `linkExactActiveClass` works the same as the `vue-router` class for exact active links. If we want to show which links are active with an exact match all you have to do is create some css for the class `nuxt-link-exact-active` .

```css
.nuxt-link-exact-active {
  color: green;
}
```

<base-alert type="info">

This css can be added to the navigation component or for a specific page or layout or in your main.css file.

</base-alert>

If you want to you can also configure the class name to be something else. You con do this by modifying the `linkExactActiveClass` in the router property in your `nuxt.config.js` file.

```js{}[nuxt.config.js]
export default {
  router: {
    linkExactActiveClass: 'my-custom-exact-active-link'
  }
}
```

<base-alert type="info">

This option is given directly to the `vue-router` linkExactActiveClass. See the [vue-router](https://router.vuejs.org/api/#active-class) [docs](https://router.vuejs.org/api/#exact-active-class) for more info

</base-alert>

### linkPrefetchedClass

The linkPrefetchedClass will allow you to add styles for all links that have been prefetched. This is great for testing which links are being prefetched after modifying the default behavior. The linkPrefetchedClass is disabled by default. If you want to enable it you need to add it to the router property in your `nuxt-config.js` file.

```js{}[nuxt.config.js]
export default {
  router: {
    linkPrefetchedClass: 'nuxt-link-prefetched'
  }
}
```

Then you can add the styles for that class.

```css
.nuxt-link-prefetched {
  color: orangered;
}
```

## The client-only Component

This component is used to purposely render a component only on client-side. To import a component only on the client, register the component in a client-side only plugin.

```html{}[pages/example.vue]
<template>
  <div>
    <sidebar />
    <client-only placeholder="Loading...">
      <!-- this component will only be rendered on client-side -->
      <comments />
    </client-only>
  </div>
</template>
```

Use a slot as placeholder until `<client-only />` is mounted on client-side.

```html{}[pages/example.vue]
<template>
  <div>
    <sidebar />
    <client-only>
      <!-- this component will only be rendered on client-side -->
      <comments />

      <!-- loading indicator, rendered on server-side -->
      <comments-placeholder slot="placeholder" />
    </client-only>
  </div>
</template>
```

<base-alert  type="info">

Sometimes in server rendered pages `$refs` inside `<client-only>` might not be ready even with `$nextTick`, the trick might be to call `$nextTick` couple of times:

```js{}[page.vue]
mounted(){
  this.initClientOnlyComp()
},
methods: {
  initClientOnlyComp(count = 10) {
    this.$nextTick(() => {
      if (this.$refs.myComp) {
        //...
      } else if (count > 0) {
        this.initClientOnlyComp(count - 1);
      }
    });
  },
}
```

</base-alert>

<base-alert>

If you are using a version of Nuxt < v2.9.0, use `<no-ssr>` instead of `<client-only>`

</base-alert>

<quiz :questions="questions"></quiz>
