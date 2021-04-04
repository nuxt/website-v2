---
title: Vuex ストア
description: 最初の例では todo アプリケーションを使ってストアがどのように機能するかを示します
position: 7
category: miscellaneous
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/14_store?fontsize=14&hidenavigation=1&theme=dark&view=editor
---

<example-intro></example-intro>

`store/todos.js` stores state and mutations for our todo list.

`pages/index.vue` imports the `mapMutations` from the store and uses `computed` properties and `methods` to add and remove todos from the store.

<base-alert type="next">

Learn more in the Directory Structure book in the [store](/docs/2.x/directory-structure/store) chapter.

</base-alert>

<code-sandbox :src="csb_link"></code-sandbox>
