---
title: 'The loading Property'
description: Nuxt.js uses its own component to show a progress bar between the routes. You can customize it, disable it or create your own component.
menu: loading
category: configuration-glossary
position: 15
---

- Type: `Boolean` or `Object` or `String`

> Out of the box, Nuxt.js gives you its own loading progress bar component that's shown between routes. You can customize it, disable it or create your own component.

```javascript
export default {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  }
}
```

## Disable the Progress Bar

- Type: `Boolean`

```js{}[nuxt.config.js]
export default {
  loading: false
}
```

## Customizing the Progress Bar

- Type: `Object`

```js
export default {
  loading: {
    color: 'blue',
    height: '5px'
  }
}
```

List of properties to customize the progress bar.
| Key | Type | Default | Description |
| ------------- | ------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `color` | String | `'black'` | CSS color of the progress bar |
| `failedColor` | String | `'red'` | CSS color of the progress bar when an error appended while rendering the route (if `data` or `fetch` sent back an error for example). |
| `height` | String | `'2px'` | Height of the progress bar (used in the `style` property of the progress bar) |
| `throttle` | Number | `200` | In ms, wait for the specified time before displaying the progress bar. Useful for preventing the bar from flashing. |
| `duration` | Number | `5000` | In ms, the maximum duration of the progress bar, Nuxt.js assumes that the route will be rendered before 5 seconds. |
| `continuous` | Boolean | `false` | Keep animating progress bar when loading takes longer than `duration`. |
| `css` | Boolean | `true` | Set to false to remove default progress bar styles (and add your own). |
| `rtl` | Boolean | `false` | Set the direction of the progress bar from right to left. |

## Using a Custom Loading Component

- Type: `String`

**Your component has to expose some of these methods:**

| Method          | Required   | Description                                                                              |
| --------------- | ---------- | ---------------------------------------------------------------------------------------- |
| `start()`       | Required   | Called when a route changes, this is where you display your component.                   |
| `finish()`      | Required   | Called when a route is loaded (and data fetched), this is where you hide your component. |
| `fail(error)`   | _Optional_ | Called when a route couldn't be loaded (failed to fetch data for example).               |
| `increase(num)` | _Optional_ | Called during loading the route component, `num` is an Integer < 100.                    |

```html{}[components/loading.vue]
<template lang="html">
  <div class="loading-page" v-if="loading">
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

```js{}[nuxt.config.js]
export default {
  loading: '~/components/loading.vue'
}
```
