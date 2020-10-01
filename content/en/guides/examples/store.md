---
title: Store
description: In the first example we show how the store works using a todo app
position: 67
category: examples
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/04_directory_structure/14_store
---

In the first example we show how the store works using a todo app. In the store folder we have a `todos.js` file. This shows our list of todos as well as mutations to add and remove items from the list as well as toggle the state of the todo.

In our `store.vue` file in the pages folder we use an input which calls the `addTodo()` method on enter. This method commits the value to the store which adds our new todo to the list. We show the new todo on the page using the `todos()` computed property which gives us access to our todos list from the store.

Checking the check box will activate the `toggle()` method which changes the state of the todo and shows that the todo is done.

Clicking the remove button will call the `removeTodo()` method which will remove the todo from the store and therefore remove it from our list and it will no longer be visible on the page.

<base-alert type="next">

Learn more in the Directory Structure book in the [store](/guides/directory-structure/store) chapter.

</base-alert>

<code-sandbox :src="csb_link"></code-sandbox>
