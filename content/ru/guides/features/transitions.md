---
title: Анимирование переходов
description: Nuxt.js использует `<transition>` компонент что позволяет создавать классные переходы/анимации между вашими страницами.
position: 10
category: features
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/03_features/05_transitions?fontsize=14&hidenavigation=1&theme=dark
questions:
  - question: Какое свойтсво нужно добавить в страничный компонент чтобы создать эффект перехода между страницами?
    answers:
      - pageTransition
      - transition
      - layoutTransition
    correctAnswer: transition
  - question: Какой режим по умолчанию используется в Nuxt.js?
    answers:
      - in-out
      - out-in
      - none
    correctAnswer: out-in
  - question: Какое название свойства transition по умолчанию используется при переходе между страницами?
    answers:
      - .page
      - .pages
      - .page-transition
    correctAnswer: .page
  - question: В каком месте лучше всего добавить классы CSS переходов чтобы они были доступны глобально для всех роутов?
    answers:
      - index.vue
      - Глобальный css файл
      - layouts/default.vue
    correctAnswer: Глобальный css файл
  - question: В какой массив в nuxt.config.js файле нужно добавлять глобальную таблицу стилей?
    answers:
      - 'css: []'
      - 'styles: []'
      - 'transitions: []'
    correctAnswer: 'css: []'
  - question: Какой класс по умолчанию используется для переходов между шаблонами?
    answers:
      - layout
      - layout-transition
      - transition
    correctAnswer: layout
  - question: Какое свойство вы используете для настроек по умолчанию layout transitions в nuxt.config.js файле?
    answers:
      - layout
      - layoutTransition
      - layoutTransitions
    correctAnswer: layoutTransition
  - question: Если вы измените стандартный шаблон layout на 'my-layout', какой класс вы будете использовать для создания css переходов?
    answers:
      - layout
      - my-layout
      - myLayout
    correctAnswer: my-layout
  - question: Какое свойство вы должны использовать в nuxt.config.js файле при конфигурировании настроек по умолчанию для переходов между страницами?
    answers:
      - page
      - pageTransition
      - layoutTransition
    correctAnswer: pageTransition
  - question: Где вы можете изменить настройки по умолчанию для переходов между страницами?
    answers:
      - main.css
      - pages.vue
      - nuxt.config.js
    correctAnswer: nuxt.config.js
---

Nuxt.js использует [transition компонент](http://vuejs.org/v2/guide/transitions.html#Transitioning-Single-Elements-Components) что позволяет создавать классные анимированные переходы между вашими страницами.

Чтобы создать какой-либо эффект перехода между страницами, нужно добавить свойство `transition` в ваш компонент.

```js{}[pages/index.vue]
export default {
  // Значение может быть строкой
  transition: ''
  // или объектом
  transition: {}
  // или функцией
  transition (to, from) {}
}
```

## Строка

Если значение свойства `transition` является строкой, то необходимо использовать `transition.name`.

```js{}[pages/index.vue]
export default {
  transition: 'home'
}
```

Nuxt.js будет использовать эти настройки, для того чтобы компонент выглядел следующим образом:

```html{}[pages/index.vue]
<transition name="home"></transition>
```

<base-alert>

Для вашего удобства это генерируется автоматически, поэтому нет необходимости добавлять компонент `<transition>` в ваши шаблоны или страничные компоненты.

</base-alert>

Все что вам нужно сделать, это создать новый класс для компонента.

```html{}[pages/index.vue]
<style>
  .home-enter-active,
  .home-leave-active {
    transition: opacity 0.5s;
  }
  .home-enter,
  .home-leave-active {
    opacity: 0;
  }
</style>
```

## Объект

Если значение свойства `transition` установлено как объект:

```js{}[pages/index.vue]
export default {
  transition: {
    name: 'home',
    mode: 'out-in'
  }
}
```

Nuxt.js будет использовать эти настройки, для того чтобы компонент выглядел следующим образом: 

```html{}[pages/index.vue]
<transition name="home" mode="out-in"></transition>
```

В объекте `transition` могут быть определены такие свойства как name, mode, css, duration и многие другие. Для большей информации пожалуйста воспользуйтесь документацией Vue.

Вы также можете уставновить методы в объекте `transition` на странице. Для получения большей информации посмотрите [JavaScript хуки](https://vuejs.org/v2/guide/transitions.html#JavaScript-Hooks) в документации Vue.

```js
export default {
  transition: {
    afterLeave(el) {
      console.log('afterLeave', el)
    }
  }
}
```

### Режим переходов

<base-alert>

Стандартный режим перехода для страниц отличается от стандартного режима перехода во Vue.js. По умолчанию, режимом для `transition` является `out-in`. Если вы хотите запустить одновременно переходы при входе на страницу и после ее закрытия, вам нужно задать пустую строку как режим перехода `mode: ''`.

</base-alert>

```js{}[pages/index.vue]
export default {
  transition: {
    name: 'home',
    mode: ''
  }
}
```

## Функция

Если значение свойства `transition` установлено как функция:

```js{}[pages/index.vue]
export default {
  transition(to, from) {
    if (!from) {
      return 'slide-left'
    }
    return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
  }
}
```

Переходы, применяемые в навигации:

`/` to `/posts` => `slide-left`,`/posts` to `/posts?page=3` => `slide-left`,`/posts?page=3` to `/posts?page=2` => `slide-right`.

## Глобальные настройки

По умолчанию, название перехода в Nuxt.js это `"page"`. Чтобы добавить переход fade на каждую страницу в вашем приложении, вам нужно внести изменения в CSS файл, который будет доступен на всех страницах.

Глобальный файл css в `assets/main.css`:

```css{}[assets/main.css]
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
```

Затем нам нужно добавить путь до файла в массиве `css` в нашем конфигурационном файле `nuxt.config.js`:

```js{}[nuxt.config.js]
export default {
  css: ['~/assets/main.css']
}
```

## Настройки конфигурации

### Свойство layoutTransition

Свойство layoutTransition используется для задания стандартных настроек анимации перехода между шаблонами.

Настройки по умолчанию для переходов между макетами:

```js
{
  name: 'layout',
  mode: 'out-in'
}
```

```css{}[assets/main.css]
.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.5s;
}
.layout-enter,
.layout-leave-active {
  opacity: 0;
}
```

Если вы хотите изменить настройки по умолчанию для переходом между layout, то вы можете сделать это в файле nuxt.config.js.

```js{}[nuxt.config.js]
export default {
  layoutTransition: 'my-layouts'
  // or
  layoutTransition: {
    name: 'my-layouts',
    mode: 'out-in'
  }
}
```

```css{}[assets/main.css]
.my-layouts-enter-active,
.my-layouts-leave-active {
  transition: opacity 0.5s;
}
.my-layouts-enter,
.my-layouts-leave-active {
  opacity: 0;
}
```

### Свойство pageTransition

Настройки по умолчанию для переходов между страницами:

```js
{
  name: 'page',
  mode: 'out-in'
}
```

Если вы хотите изменить настройки по умолчанию, вы можете это сделать в файле nuxt.config.js

```js{}[nuxt.config.js]
export default {
  pageTransition: 'my-page'
  // or
  pageTransition: {
    name: 'my-page',
    mode: 'out-in',
    beforeEnter (el) {
      console.log('Before enter...');
    }
  }
}
```

Если вы хотите изменить название для pageTransition, вы можете это сделать изменив название css класса.

```css{}[assets/main.css]
.my-page-enter-active,
.my-page-leave-active {
  transition: opacity 0.5s;
}
.my-page-enter,
.my-page-leave-to {
  opacity: 0;
}
```

<quiz :questions="questions"></quiz>
