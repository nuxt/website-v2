---
title: Индикация загрузки
description: Прямо из коробки Nuxt.js предоставляет вам компонент для отображения состояния загрузки, который отображается при переходах от одной страницы к другой. Вы можете настроить его, отключить или даже создать ваш собственный компонент.
position: 8
category: features
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/03_features/08_loading?fontsize=14&hidenavigation=1&theme=dark
questions:
  - question: Что нужно сделать, чтобы индикатор прогресса загрузки Nuxt.js заработал?
    answers:
      - Ничего, это работает из коробки
      - Изменить значения свойства `loading` на `true` в файле `nuxt.config.js`
      - Создать компонент индикатора загрузки
    correctAnswer: Ничего, это работает из коробки
  - question: В каком месте вы можете изменить стили для индикатора прогресса загрузки?
    answers:
      - В компоненте макета
      - В компоненте страницы
      - В файле nuxt.config.js
    correctAnswer: В компоненте макета
  - question: В каком свойстве вы можете прописать стили для индикатора загрузки в файле `nuxt.config.js`?
    answers:
      - progress
      - loading
      - loadingBar
    correctAnswer: loading
  - question: Какое свойство вы должны добавить в файл `nuxt.config.js` для отключения индикатора загрузки?
    answers:
      - 'loadingBar: false'
      - "loading: 'none'"
      - 'loading: false'
    correctAnswer: 'loading: false'
  - question: Можете ли вы отключить индикатор загрузки на нужных вам страницах?
    answers:
      - true
      - false
    correctAnswer: true
  - question: Что вы должны использовать чтобы программно запустить индикатор загрузки?
    answers:
      - $nuxt.loading.start()
      - $nuxt.loading()
      - $loading.start()
    correctAnswer: $nuxt.loading.start()
  - question: Какое свойство вы должны использовать чтобы продолжить показывать индикатор загрузки, когда загрузка занимает больше времени, чем продолжительность выставленная по умолчанию?
    answers:
      - "duration: 'continuous'"
      - "loading: 'continuous'"
      - 'continuous: true'
    correctAnswer: 'continuous: true'
  - question: Какие два метода являются обязательными когда вы создаете ваш собственный компонент для отображения загрузки?
    answers:
      - start() and fail()
      - start() and finish()
      - loading() and finish()
    correctAnswer: start() and finish()
  - question: Как вы сможете подключить компонент `loading.vue` после его создания?
    answers:
      - Импортировать его в макет страницы
      - Добавить его в файле `nuxt.config.js` используя свойство `loading`
      - Добавить кго в файле `nuxt.config.js` используя свойство `plugins`
    correctAnswer: Добавить его в файле `nuxt.config.js` используя свойство `loading`
  - question: Что вам нужно добавить в свойство `loading` для показа крутящегося индикатора загурзки когда Nuxt.js используется в режиме ssr:false?
    answers:
      - 'circle: true'
      - 'spinner: circle'
      - 'name: circle'
    correctAnswer: 'name: circle'
---

Прям из коробки Nuxt.js предоставляет вам компонент для отображения состояния загрузки, который показывается при переходах от одной страницы к другой (между маршрутов?). Вы можете настроить его, отключить или даже создать ваш собственный компонент. 

## Настройка индикатора загрузки

Среди прочих свойств, таких как цвет, размер, длительность или направление индикатора загрузки, вы также можете настроить его исходя из потребностей вашего приложения. Это возможно сделать с помощью свойства `loading` в файле `nuxt.config.js` изменив соответствующие своства.

Например, чтобы сделать индикатор загрузки синего цвета и высотой 5px, вам нужно добавить следующие свойства в файле `nuxt.config.js`:

```js
export default {
  loading: {
    color: 'blue',
    height: '5px'
  }
}
```

Ниже вы можете увидеть список свойств для настройки индикатора загрузки.

| Ключ         | Тип     | По умолчанию   | Описание                                                                                                               |
| -----------  | ------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| цвет         | String  | 'black'        | CSS цвет индикатора загрузки                                                                                           |
| цвет ошибки  | String  | 'red'          | CSS цвет индикатора загрузки, когда произошла ощибка при переходе между страницами (например когда данные иди запрос вернулись обратно с ошибкой. |
| высота       | String  | '2px'          | Высота индикатора загрузки (используется в стиле свойста индикатора).                                                   |
| throttle     | Number  | 200            | Задержка в мс перед отображением индикатора загрузки. Полезно для предотвращения мигания индикатора.|
| длительность | Number  | 5000           | Максимальная длительность индикатора загрузки. Nuxt.js предполагает, что страница будет отображена в течении 5 секунд. |
| continuous   | Boolean | false          | Возможность дальнейшего анимирования индикатора загрузки, если загрузка занимает больше времени, чем ее длительность.   |
| стили css    | Boolean | true           | Указать false для удаления стилей индикатора загрузки по умолчанию (и добавления ваших собственных).                   |
| направление  | Boolean | false          | Установить направление индикатора загрузки с правва на лево.                                                            |

## Отключение индикатора загрузки

Если вы не хотите отображать индикатор загрузки при переходах между страницами, просто добавьте `loading: false` в ваш файл `nuxt.config.js`:

```js{}[nuxt.config.js]
export default {
  loading: false
}
```

Свойство `loading` дает возможность отключения индикатора загрузки на нужной вам странице.

```html{}[pages/index.vue]
<template>
  <h1>My page</h1>
</template>

<script>
  export default {
    loading: false
  }
</script>
```

## Программный запуск индикатора загрузки

Индикатор загрузки может быть запущен в вашем компоненте программно, путем вызова метода `this.$nuxt.$loading.start()` для запуска индкатора загрузки, и метода `this.$nuxt.$loading.finish()` для его окончания.

В процессе монтирования вашего компонента страницы, свойство `$loading` может стать доступно не сразу. Если вы хотите запустить индикатор загрузки в методе `mounted`, то вам нужно сделать обертку над методом `$loading` вызвав его внутри `this.$nextTick` как показано в примере ниже.

```js
export default {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  }
}
```

## Internals of the Progress Bar

К сожалению, компонент индиактора загрузки не может знать заранее, сколько времени займет загрузка новой страницы. Поэтому невозможно точно анимировать индиактор прогресса до 100% времени загрузки.

Компонент индиактора загрузки Nuxt частично решает эту проблему, позволяя установить `длительность` загрузки, это свойство должно быть установлено для оценки того, сколько времени займет процесс загрузки. Если вы не используете ваш собственный компонент загрузки, то индикатор прогресса всегда будет двигаться от 0% до 100% за заданное время "длительности" загрузки (независимо от фактического прогресса). Если загрузка превысит время "длительности" загрузки, то индиактор прогресса загрузки будет оставаться в положении 100% до тех пор, когда загрузка не закончится.

Вы можете изменить поведение по умолчанию поставив свойство `continuous` в `true`, тогда после достижения 100%, индикатор прогресса загрузки снова начнет уменьшаться до 0% за время "длительности". Если загрузка еще не закончена после достижения 0%, она снова начнет расти с 0% до 100%, и это будет повторяться до тех пор, пока загрузка не завершится.

```js
export default {
  loading: {
    continuous: true
  }
}
```

_Example of a continuous progress bar:_

![https://nuxtjs.org/api-continuous-loading.gif](https://nuxtjs.org/api-continuous-loading.gif)

## Using a Custom Loading Component

You can also create your own component that Nuxt.js will call instead of the default loading progress bar component. To do so, you need to give a path to your component in the `loading` option. Then, your component will be called directly by Nuxt.js.

Your component has to expose some of these methods:

| Method        | Required | Description                                                                              |
| ------------- | -------- | ---------------------------------------------------------------------------------------- |
| start()       | Required | Called when a route changes, this is where you display your component.                   |
| finish()      | Required | Called when a route is loaded (and data fetched), this is where you hide your component. |
| fail(error)   | Optional | Called when a route couldn't be loaded (failed to fetch data for example).               |
| increase(num) | Optional | Called during loading the route component, num is an Integer < 100.                      |

You can create your custom component in `components/LoadingBar.vue`:

```html{}[components/LoadingBar.vue]
<template>
  <div v-if="loading" class="loading-page">
    <p>Loading...</p>
  </div>
</template>

<script>
  export default {
    data: () => ({
      loading: false
    }),
    methods: {
      start() {
        this.loading = true
      },
      finish() {
        this.loading = false
      }
    }
  }
</script>

<style scoped>
  .loading-page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding-top: 200px;
    font-size: 30px;
    font-family: sans-serif;
  }
</style>
```

Then, you update your `nuxt.config.js` to tell Nuxt.js to use your component:

```js{}[nuxt.config.js]
export default {
  loading: '~/components/LoadingBar.vue'
}
```

## The loading indicator Property

When running Nuxt.js in SPA mode, there is no content from the server side on the first page load. So, instead of showing a blank page while the page loads, Nuxt.js gives you a spinner which you can customize to add your own colors or background and even change the the indicator.

```js{}[nuxt.config.js]
export default {
  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'white'
  }
}
```

## Built-in indicators

These indicators are imported from the awesome [SpinKit](http://tobiasahlin.com/spinkit) project. You can check out its demo page to preview the spinners. In order to use one of these spinners all you have to do is add its name to the name property. No need to import or install anything. Here is a list of built in indicators you can use.

- circle
- cube-grid
- fading-circle
- folding-cube
- chasing-dots
- nuxt
- pulse
- rectangle-bounce
- rotating-plane
- three-bounce
- wandering-cubes

Built-in indicators support `color` and `background` options.

## Custom indicators

If you need your own special indicator, a String value or Name key can also be a path to an HTML template of indicator source code! All of the options are passed to the template, too.

Nuxt's built-in [source code](https://github.com/nuxt/nuxt.js/tree/dev/packages/vue-app/template/views/loading) is also available if you need a base!

<quiz :questions="questions"></quiz>
