---
title: Configuration
description: Nuxt.js настроен так, чтобы охватить большую часть настроек по умолчанию. Эта конфигурация может быть перезаписана в файле nuxt.config.js.
position: 7
category: features
csb_link_host_port: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/03_features/07_configuration_host_port?fontsize=14&hidenavigation=1&theme=dark
csb_link_pre-processors: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/03_features/07_configuration_pre-processors?fontsize=14&hidenavigation=1&theme=dark
questions:
  - question: Можете ли вы использовать модуль axios в файле nuxt.config.js?
    answers:
      - да
      - нет
    correctAnswer: нет
  - question: Какой хост будет присвоен по умолчанию в режиме разработки Nuxt.js?
    answers:
      - localhost
      - 3000
      - '0'
    correctAnswer: localhost
  - question: Какой атрибут вы будете использовать в теге style для подключения SCSS?
    answers:
      - lang="scss"
      - language="scss"
      - style="scss"
    correctAnswer: lang="scss"
  - question: Какой порт будет присвоен по умолчанию в режиме разработки Nuxt.js?
    answers:
      - 8000
      - 3000
      - localhost
    correctAnswer: 3000
  - question: Какое свойство вы будете использовать в файле nuxt.config.js для добавления глобальных CSS файлов?
    answers:
      - styles
      - css
      - globalCss
    correctAnswer: css
  - question: Можете ли вы использовать синтаксис JSX в вашем Nuxt.js приложении?
    answers:
      - Да
      - Нет
    correctAnswer: Да
  - question: Какое свойство вы будете использовать в файле nuxt.config.js для расширения конфигурации webpack?
    answers:
      - webpack.extend
      - build.extend
      - extend.build
    correctAnswer: build.extend
  - question: Как называется файл для игнорирования файлов в вашем Nuxt.js приложении?
    answers:
      - .ignore
      - .nuxtignore
      - .ignorenuxt
    correctAnswer: .nuxtignore
  - question: Если вы хотите игнорировать все файлы с названием about в вашем Nuxt.js приложении, какой перфикс вы будете использовать?
    answers:
      - _about.vue
      - -about.vue
      - __about.vue
    correctAnswer: -about.vue
---

Nuxt.js настроен так, чтобы охватить большую часть настроек по умолчанию. Эта конфигурация может быть перезаписана в файле nuxt.config.js.

## Свойство css

Nuxt.js позволяет определить CSS-файлы/модули/библиотеки, которые вы хотите установить глобально (включаются в каждую страницу).

<base-alert>

Если вы хотите использовать препроцессор `sass`, убедитесь что у вас установлены модули `sass` и `sass-loader`.

</base-alert>

В файле `nuxt.config.js` добавьте пути до CSS файлов:

```js{}[nuxt.config.js]
export default {
  css: [
    // Загрузка модуля Node.js напрямую (Sass файл)
    'bulma',
    // файл CSS в проекте
    '~/assets/css/main.css',
    // файл SCSS в проекте
    '~/assets/css/main.scss'
  ]
}
```

<base-alert>

Nuxt.js автоматически определяет тип файла по его расширению и использует соответствующий препроцессорный загрузчик для webpack'а. Вам все равно придется установить необходимый загрузчик, если вы хотите использовать его в приложении.

</base-alert>

### Расширения для файлов стилей

Вы можете не использовать расширения для CSS/SCSS/Postcss/Less/Stylus/... файлов, перечисленных в css-массиве, который находится в вашем конфигурационном файле `nuxt.config.js`.

```js{}[nuxt.config.js]
export default {
  css: ['~/assets/css/main', '~/assets/css/animations']
}
```

<base-alert>

Если у вас есть два файла с одинаковым именем, например `main.scss` и `main.css`, и вы не указали расширение для этих файлов в css-массиве, например `css: ['~/assets/css/main']`, тогда будет загружен только один файл в зависимости от порядка `styleExtensions`. В этом случае будет загружен только файл `css`, а файл `scss` будет проигнорирован, так как `css` идет первым в массиве по умолчанию `styleExtension`.

</base-alert>

Массив расширений по умолчанию: `['css', 'pcss', 'postcss', 'styl', 'stylus', 'scss', 'sass', 'less']`

## Препроцессоры

Спасибо [загрузчику Vue](http://vue-loader.vuejs.org/en/configurations/pre-processors.html), вы можете использовать самые разные препроцессоры в `<template>` или `<style>`: используя `lang` атрибут.

Это пример использования препроцессоров [Pug](https://github.com/pugjs/pug) или [Sass](http://sass-lang.com/):

```html{}[pages/index.vue]
<template lang="pug"> h1.red Hello {{ name }}! </template>

<style lang="scss">
  .red {
    color: red;
  }
</style>
```

Для использования этих препроцессоров нам необходимо установить их webpack загрузчики:

<code-group>
  <code-block label="Yarn" active>

```bash
yarn add -D pug pug-plain-loader
yarn add -D sass sass-loader fibers
```

  </code-block>
  <code-block label="npm">

```bash
npm install --save-dev pug pug-plain-loader
npm install --save-dev sass sass-loader fibers
```

  </code-block>
</code-group>

## JSX

Nuxt.js использует пресет [@nuxt/babel-preset-app](https://github.com/nuxt/nuxt.js/tree/dev/packages/babel-preset-app), который основан на официальном пресете [@vue/babel-preset-app](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/babel-preset-app) для конфигурации babel по умолчанию, что позволяет использовать синтаксис JSX в ваших компонентах.

Также вы можете использовать синтаксис JSX в методе `render` вашего компонента:

```js
<script>
export default {
  data () {
    return { name: 'World' }
  },
  render (h) {
    return <h1 class="red">{this.name}</h1>
  }
}
</script>
```

Присваивание псевдонима `h` для метода `createElement` - это общая конвенция, которую можно встретить в экосистеме Vue. Но она необязательна для синтаксиса JSX, так как `const h = this.$createElement` [автоматически вставляется](https://github.com/vuejs/babel-plugin-transform-vue-jsx#h-auto-injection) в любом методе или геттере (без использования обычных или стрелочных функций) объявленном в синтаксисе ES2015 где есть JSX, так что вы можете пропустить параметр `h`.

Вы можете узнать больше как использовать этот синтаксис в [JSX разделе](https://vuejs.org/v2/guide/render-function.html#JSX) документации Vue.js.

## Игнорирование файлов

### файл .nuxtignore

Вы можете использовать файл `.nuxtignore` для игнорирования Nuxt.js файлов `layout`, `page`, `store` и `middleware` в вашей корневой директории проекта (`rootDir`) на этапе сборки проекта. Файл `.nuxtignore` подчиняется той же спецификации, что и файлы `.gitignore` и `.eslintignore`, в которых каждая строка представляет собой глобальный шаблон, указывающий на то, какие файлы следует игнорировать.

```markdown{}[.nuxtignore]
# игнорирование файла foo.vue

layouts/foo.vue

# игнорирование файлов которые заканчиваются на -ignore.vue

layouts/\*-ignore.vue

# игнорирование файла bar.vue в папке pages

pages/bar.vue

# игнорирование файлов с расширением .vue внутри папки ignore

pages/ignore/\*.vue

# игнорирование файла baz.js в папке store

store/baz.js

# игнорирование файлов в папке store совпадающих с _.test._

store/ignore/_.test._

# игнорирование файлов в папке middleware/foo исключая файл foo/bar.js

middleware/foo/\*.js !middleware/foo/bar.js
```

### Свойство ignorePrefix

Некоторые файлы в папках pages/, layout/, middleware/ или store/ будет игнорироваться при сборке проекта, если названия файлов начинаются со специального префикса ignorePrefix.

По умолчанию, все файлы начинающиеся с `-` будут игнорироваться, как например `store/-foo.js` или `pages/-bar.vue`. Это позволяет размещать рядом файлы тестов, утилит и компонентов избегая автоматической конвертации их в компоненты роутера или хранилища.

### Свойство ignore

Более настраиваемое чем свойство ignorePrefix: все файлы, соответствующие глобальному шаблону, указанным в ignore, будут игнорироваться при сборке.

```js{}[nuxt.config.js]
export default {
  ignore: 'pages/bar.vue'
}
```

### ignoreOptions

`nuxtignore` использует пакет `node-ignore` под капотом, поэтому `ignoreOptions` могут быть настроены как свойство `options` пакета `node-ignore`.

```js{}[nuxt.config.js]
export default {
  ignoreOptions: {
    ignorecase: false
  }
}
```

## Расширяемая конфигурация webpack

Вы можете расширить конфигурацию webpack в nuxt.js с помощью метода `extend` в вашем конфигурационном файле `nuxt.config.js`. Метод `extend` является свойством объекта `build` и принимает два аргумента. Первый аргумент - это объект конфигураций `config`, экспортируемый из конфигурации webpack в фреймворке Nuxt. Второй аргумент - это context объект включающий в себя такие булевые свойства как: `{ isDev, isClient, isServer, loaders }`.

```js{}[nuxt.config.js]
export default {
  build: {
    extend(config, { isDev, isClient }) {
      // ..
      config.module.rules.push({
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'file-loader'
      })
      // Sets webpack's mode to development if `isDev` is true.
      if (isDev) {
        config.mode = 'development'
      }
    }
  }
}
```

Метод `extend` вызывается дважды - Один раз для клиентского бандла, а другой для серверного.

### Настройка конфигурации чанков (chunks)

Возможно, вы захотите немного подкорректировать [настройки оптимизации](/docs/2.x/configuration-glossary/configuration-build#optimization), избегая перезаписи объекта стандартных настроек.

```js{}[nuxt.config.js]
export default {
  build: {
    extend(config, { isClient }) {
      if (isClient) {
        config.optimization.splitChunks.maxSize = 200000
      }
    }
  }
}
```

### Проверка линтером ESLint при каждой сборке webpack в режиме разработки

Чтобы быть в курсе ошибок в проекте, следует запускать [ESLint](https://github.com/webpack-contrib/eslint-loader) при каждой сборке проета в режиме разработки.

```js{}[nuxt.config.js]
export default {
  build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
```

### Проверка конфигурации webpack

Для сложных проектов и отладки иногда полезно проверить, как будет выглядеть окончательная настройка webpack. К счастью, вы можете запустить команду `nuxt webpack` из вашего проекта для вывода конфигурации. Взгляните на этот пулл-реквест [#7029](https://github.com/nuxt/nuxt.js/pull/7029) для более детальной информации.

## Редактирование хоста и порта

По умолчанию хостом сервера разработки Nuxt.js является `localhost`, который доступен только внутри хост-машины. Для просмотра приложения на другом устройстве необходимо изменить хост. Вы можете изменить его в файле nuxt.config.js.
Хост `'0.0.0.0'` предназначен для того, чтобы Nuxt.js мог использовать хост адрес, который доступен подключениям _снаружи_ хост-машины (например, LAN). Если хосту присвоено строковое значение `'0'` (а не число 0, которое приводится к false), или `'0.0.0.0'0'`, то ваш локальный IP-адрес будет присвоен вашему Nuxt.js приложению.

```js{}[nuxt.config.js]
export default {
  server: {
    host: '0' // по умолчанию: localhost
  }
}
```

Также вы можете изменить номер вашего порта, который по умолчанию равен 3000.

```js{}[nuxt.config.js]
export default {
  server: {
    port: 8000 // по умолчанию: 3000
  }
}
```

<base-alert type="info">

Если порту присвоено строковое значение `'0'` (а не число 0, которое приводится к false), вашему Nuxt.js приложению будет присвоен случайный номер порта.

</base-alert>

Хотя вы можете изменить эти настройки в файле nuxt.config.js, это не рекомендуется, так как это может вызвать проблемы при загрузке вашего сайта на хостинг. Гораздо лучше изменить хост и порт непосредственно в команде dev.

```bash
HOST=0 PORT=8000 npm run dev
```

или создать новый скрипт в файле package.json

```json
"scripts": {
  "dev:host": "nuxt --hostname '0' --port 8000"
}
```

## Асинхронная конфигурация

Вы можете использовать асинхронную конфигурацию, экспортировав функцию с ключевым словом async, которая возвращает объект. Хотя в большинстве случаев лучше использовать обычную конфигурацию `export default {}`.

```js{}[nuxt.config.js]
import axios from 'axios'

export default async () => {
  const data = await axios.get('https://api.nuxtjs.dev/posts')
  return {
    head: {
      title: data.title
      //... rest of config
    }
  }
}
```

<base-alert>

Модуль nuxt-axios не может быть использован в файле `nuxt.config.js`. Вам нужно будет импортировать пакет axios и настроить его с нуля.

</base-alert>

## Дальнейшая конфигурация

<base-alert type="next">

В `nuxt.config.js` гораздо больше возможностей настройки и конфигурирования! Проверить все возможности можно в [глоссарии конфигураций](/docs/2.x/configuration-glossary/configuration-build).

</base-alert>

<quiz :questions="questions"></quiz>
