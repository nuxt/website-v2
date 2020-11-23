---
title: 'Improve Your Developer Experience With Nuxt Components'
description: Explore how you can import and register Vue components automatically using @nuxt/components module.
imgUrl: 'blog/improve-developer-experience-nuxt-components/main.png'
date: 2020-06-24
authors:
  - name: Krutie Patel
    avatarUrl: https://pbs.twimg.com/profile_images/780651635932434432/YtbSkumD_400x400.jpg
    link: https://twitter.com/KrutiePatel
tags:
  - components
  - auto-import
  - lazy-loading
  - dynamic-import
  - ignore-rules
  - 3rd-party-library
---

## Introduction

The Nuxt team has introduced **[@nuxt/components](https://www.npmjs.com/package/@nuxt/components)** module with the purpose to make Nuxt development faster and to make you, as a developer, more productive. This module comes with amazing features and options that will improve your development experience with Nuxt. No matter if you’re just starting out or an advanced user, [@nuxt/components](https://github.com/nuxt/components) provides a range of options from the simplest setup to advance configurations that will certainly benefit your projects.

In a nutshell, this module automatically scans, imports and registers Vue components found in the **`~/components`** directory, so that we don't have to write import statements when we use them in either pages, layouts or even within components.

Here is how [Debbie O’Brien](https://twitter.com/debs_obrien) explains how it works,

> _This module parses your template and automatically includes the component in the file where you are using it such as a page, layout or even a component. Because Nuxt.js uses automatic code splitting to split your pages by default this module works perfect as it will only contain the components that are used on that page. Also, if you use a component in more than 2 pages, Nuxt.js will automatically create a shared chunk for them thanks to the magic of WebPack._

## Table of Contents

- [Introduction](#introduction)
- [Table of Contents](#table-of-contents)
- [Module Setup](#module-setup)
- [Cheatsheet](#cheatsheet)
- [Directory path as a String](#directory-path-as-a-string)
- [Directory path as an Object](#directory-path-as-an-object)
  - [Try it yourself - Directory Paths](#try-it-yourself---directory-paths)
- [Inclusion paths](#inclusion-paths)
  - [Extensions option](#extensions-option)
  - [Try it yourself - Extensions](#try-it-yourself---extensions)
  - [Pattern option](#pattern-option)
  - [Default](#default)
  - [Add additional extensions](#add-additional-extensions)
  - [Customise as per your requirement](#customise-as-per-your-requirement)
- [Exclusion paths](#exclusion-paths)
  - [Ignore option](#ignore-option)
  - [.nuxtignore, ignore property & ignore option:](#nuxtignore-ignore-property--ignore-option)
- [Lazy loading your components](#lazy-loading-your-components)
  - [Try it yourself - Lazy-loading](#try-it-yourself---lazy-loading)
- [Third-party component library](#third-party-component-library)
  - [Try it yourself - Third-party library](#try-it-yourself---third-party-library)
- [Conclusion](#conclusion)

In this article, we'll learn about `@nuxt/components` by example. I have setup a demo with two sets of UI components, `ui-1` and `ui-2`.

```js
| components
--| ui-1/
----| Card/
--| ui-2/
----| BaseButton/
----| Card/
----| List/
----| MagicButton/
```

We will implement `@nuxt/components` on these components followed by a detailed look at module options to customize the default behavior. Later in the article, we will also take a look at **lazy-loading** and **auto-importing 3rd-party library** components.

It’s best if you setup this [sample project](https://github.com/Krutie/nuxt-components-demo) locally to tryout options that may interest you.

- **Github Repo** - [https://github.com/Krutie/nuxt-components-demo](https://github.com/Krutie/nuxt-components-demo)
- **Demo** - [http://nuxt-components.surge.sh/](http://nuxt-components.surge.sh/)
- **3rd Party Sample Components Repo** - [https://github.com/Krutie/Kru-Components](https://github.com/Krutie/Kru-Components)

## Module Setup

From Nuxt v2.13 onward, this module **will be available by default** when you create a new Nuxt project. However, you'll still need to activate it using `components: true` in `nuxt.config.js.`

```js{}[nuxt.config.js]
// For nuxt v2.13+
export default {
  components: true
}
```

In case your project is using Nuxt version below v2.13\*\*we recommend you to upgrade your Nuxt version since there is no breaking between these versions.

💡 **If `components: true` is set, `~/components` directory is scanned by default.**

Minimal configuration above is enough to get you started. However, like any other Nuxt module, the real power of `@nuxt/components` lies in the module options. Before we take a detailed look, here's a one-page summary of the module.

## Cheatsheet

![One-page summary of @nuxt/components module](https://cdn.krutiepatel.com/2020-06/nuxt_components_Module-Cheatsheet.png)

> [Download printable PDF here](https://cdn.krutiepatel.com/2020-06/nuxt_components_Module-Cheatsheet.pdf)

Using module options, you can select particular directories with specific file-extensions from the `~/components` directory.

To accept custom directory options, `components:` accepts **an array of directory paths**, rather than just a boolean value! These **directory paths** can be either an array of **strings** or **objects**.

Let’s see both formats in detail.

## Directory path as a String

**Directory path as a string** is a simplified version to indicate which directory to scan, watch and register.

For example, in our sample project, we can use string notation like below to auto-import every UI components located at `components/ui-1/` and `components/ui-2/`.

```js
// nuxt.config.js
export default {
  // Module options as an Array of String
  components: ['~/components/ui-1/', '~/components/ui-2/']
}
```

## Directory path as an Object

Directory path as an object gets bit more interesting! **When path is given as an object, it becomes a required.**

```js{}[nuxt.config.js]
export default {
  // Module options as an Array of Object
  components: [{ path: '~/components/ui-1/' }, { path: '~/components/ui-2/' }]
}
```

In addition to `path`, we can also define additional configuration to include, exclude, watch or even add prefix to components based on their location & extensions.

For example, when components are imported using this module, their names are based on their filename. But you can `prefix` component names to preserve their filenames as they are and still be able to customise their component tags.

```js{}[nuxt.config.js]
export default {
  // Module options as an Array of Object
  components: [
    {
      path: '~/components/ui-2/',
      prefix: 'aex'
    }
  ]
}
```

It’s important to note that, the scope of these options is limited to the `path` provided in that object. In the example above, only components located at `~/components/ui-2/` will be registered with the prefix **`aex`**.

```html
<!-- Before prefix -->
<card> </card>

<!-- After prefix -->
<aex-card> </aex-card>
```

### Try it yourself - Directory Paths

In our sample project:

1. `/pages/manual-import-example.vue` imports components manually. In `nuxt.config.js`, configure appropriate directory path, so that `ui-1` components can be auto-imported.
2. `/pages/auto-import-example.vue` already implements basic auto-import. Implement `prefix` option on `Card` UI components.

---

With directory path is defined as an object, we gain finer control over which components are to be auto-imported, and which ones are to be left out.

Whether your components are written in `.vue`, `.js` or `.ts`, sometimes, you may not want to auto-import every single component files found at specified `path`. There are some scenarios where auto-import may need some tweaking. For example:

**Multi-file Components**

If your components are divided into two individual files, `.vue` for template and `.js` for script. You will want to avoid auto-importing the `.js` files since they're already included in the templates. In this scenario, you will want a mechanism to prevent all or some `.js` files from being auto-imported.

**Dynamic Components**

At the time of writing this article, auto-import doesn't work for dynamic components.

```html
<!-- write import statement for BaseButton in script section -->
<component :is="BaseButton" />
```

This is the scenario where you'll need to import your components in the script tag.

Fortunately, this module allow us to specify directory paths or file extensions or the combination of both to selectively include or exclude files from being auto-imported. Keep reading to see **how.**

## Inclusion paths

There are couple of ways we can selectively include component files this using module.

1. `extensions` option
2. `patterns` option

### Extensions option

`extensions` option lets you indicate which file extensions - from the given `path` - should be scanned and registered. `extensions` option accepts an array of **multiple** file extensions in `String` format.

```js
{
  path: "~/components/ui-2/MagicButton/",
  // prefix: 'aex',
  extensions: ['vue'], // Array, include files that matche the extension
}
```

**Both `.vue` and `.js` are included as default extensions.** This option is particularly **helpful for components with multiple files**.

In our sample project, `MagicButton` components is divided into two individual files, `.vue` for template and `.js` for script.

```js
| MagicButton
--| MagicButton.js
--| MagicButton.vue
```

In this scenario, we want to allow only Vue template to be auto-imported. Well, `extensions` option helps us achieve exactly that.

### Try it yourself - Extensions

In our sample project,

1. Examine the source-code for `MagicButton` at `/components/ui-2/MagicButton/` and its configuration in `nuxt.config.js`.

`extensions` option is best for including selected files at a given `path`. However, there are always advanced use-cases when we need finer control over selecting components - from within sub-directories even!

For those edge-cases, we can leverage `pattern` and `ignore` options to indicate path patterns for inclusion and exclusion respectively.

```js
{
  path: '~/components/ui-2/',
  prefix: 'aex',
  extensions: [], // Array, components inclusion
  pattern: '', // String, components inclusion
  ignore: [] // Array, components exclusion
}
```

Continue reading further to see more examples of these two options and how they work.

### Pattern option

`pattern` option lets you define which type of components - from the given `path` - should be scanned and registered. Unlike `extensions`, `pattern` is defined as a **single** `String` and it must follow [glob pattern style](https://github.com/isaacs/node-glob#glob-primer).

We can use pattern option as **default** or **add additional** ones or even **customise** it completely.

### Default

As mentioned earlier, **both `.vue` and `.js` are included as default extensions.**

```js
// Default pattern
pattern: `**/*.{vue,js}`
```

If you are using TypeScript, then `ts` & `tsx` extensions are supported by default as well.

### Add additional extensions

If additional extensions are required, you can specify additional extensions under Build Configuration in `nuxt.config.js`.

```js{}[nuxt.config.js]
export default {
  /*
   ** Build configuration
   */
  build: {
    additionalExtensions: ['jsx']
  }
}
```

Above code adds `.jsx` extension to the default pattern, makes the resulting pattern look like: `**/*.{vue,js,jsx}`

### Customise as per your requirement

If required, you can manually specify extensions to completely customise the pattern.

```js
// Multiple extensions
/* Only vue and jsx files will be scanned at given path */
pattern: '**/*.{vue,jsx}',
```

Or for single file,

```js
// Single extension
/* Only vue files will be scanned at given path */
pattern: '**/*.vue',
```

## Exclusion paths

We just saw how inclusion patterns work. `ignore` option on the other hand that helps us exclude components from scanning.

### Ignore option

`ignore` option does exactly opposite of what `pattern` does **and instead of just one string, it accepts an array of strings!** These strings must also follow [glob pattern style](https://github.com/isaacs/node-glob#glob-primer).

Ignore option excludes components with specified locations and extensions from scanning.

**Three individual examples** in the code snippet below show how we can exclude components with `.js` extensions. This is particularly helpful in a scenario where you want to **apply ignore-rules to sub-directories located at the given `path`**.

```js
// ignore example 1
{
  path: '~/components/ui-2/', // path of the directory to scan and watch
  // ignore js files found at components/ui-2/ and subfolders
  ignore: ["**/*.js"],
}

// ignore example 2
{
  // ignore js files found at components/ui-2/card/
  ignore: ["**/card/*.js"],
}

// ignore example 3
{
  // ignore js files found at components/ui-2/list/
  ignore: ["**/list/*.js"],
}
```

### .nuxtignore, ignore property & ignore option:

It's important we highlight two similar features of Nuxt that ignore files just like our `ignore` option.

- [.nuxtignore](/docs/2.x/configuration-glossary/configuration-ignore#-nuxtignore) also ignore files similar to `ignore` option, but `.nuxtignore` ignores files from `/pages`, `/layouts`, `/middleware` and `/store` . It's a dot-file that is defined in the project root. Read more about the [ignore property](/docs/2.x/configuration-glossary/configuration-ignore) on Nuxt docs.
- [ignore](/docs/2.x/configuration-glossary/configuration-ignore#the-ignore-property) property, as well, let us define multiple glob-pattern to ignore matching files, like below.

```js{}[nuxt.config.js]
export default {
  ignore: ['**/*.test.*']
}
```

The impact of both `.nuxtignore` and `ignore` property is realised during build-process, and they operate project-wide, while `ignore` option operates locally and ignores files from `/components` directory.

So, if you're using 1. `.nuxtignore`, 2. top-level `ignore` property, and 3. `ignore` option, then all three will be merged.

```html
Final ignore = .nuxtignore + Top-level ignore + ignore option (Local)
```

---

Now, let’s say all of your components are automatically imported into the project and you saved so many import statements, but... your project isn’t using all of the components upfront.

This brings us to the next feature of this module that is worth highlighting, **Lazy Loading.**

## Lazy loading your components

Components that aren't required immediately upon initial render - such as components below the fold, sidebar, modals or any other components that are rendered conditionally with `v-if` or `v-else` - qualifies for lazy-loading (aka dynamic import).

Lazy loading your components is super easy with this module. You can simply add `Lazy` prefix to the component tag when it's used in the template area.

```html{}[pages/lazy-loading-example.vue]
<lazy-list v-else>
  <lazy-list-item v-for="(post, index) in posts" :key="`post-${index}`">
    {{ post.title }}
    <lazy-list-item-icon icon="code" />
  </lazy-list-item>
</lazy-list>
```

And that’s pretty much it, you have got your component dynamically imported, on-demand!

### Try it yourself - Lazy-loading

Lazy loading is already implemented at `/pages/lazy-loading-example.vue`

- Run the sample project locally,
- visit [http://localhost:3000/lazy-loading-example](http://localhost:3000/lazy-loading-example)
- Open Chrome DevTools - Browser's Inspect Panel, then go to Network Tab.

Here, you can see that lazy components are loaded when the data becomes available, and they have their own separate bundles. See `List.js, ListItem.js` and `ListItemIcon.js` in the screenshot below.

![Lazy loading with nuxt/components](https://cdn.krutiepatel.com/2020-06/lazy-loading-with-nuxt-components.png)

## Third-party component library

Third-party components libraries can also benefit from `@nuxt/components`.

I have created a bare-minimum external component library for you to tinker with this feature. It's called [Kru-Components](https://github.com/Krutie/Kru-Components)!

> **Kru Components Repo** - [https://github.com/Krutie/Kru-Components](https://github.com/Krutie/Kru-Components)

Kru-components library exposes a hook called, `components:dirs`, that allows you - as a component library author - to extend your components directory into Nuxt projects.

```js
// https://github.com/Krutie/Kru-Components/blob/master/src/nuxt.js

this.nuxt.hook('components:dirs', dirs => {
  // Add ./components dir to the list
  dirs.push({
    path: join(__dirname, 'components'),
    prefix: 'kru'
  })
})
```

This way, components of this external library can take advantage of **automatic tree-shaking** and **component registration**.

And then you - as a user of this external library - can use `kru-components` as simple as a Nuxt module.

```js{}[nuxt.config.js]
buildModules: [
 // Use Kru-components as Nuxt module
 "kru-components/src/nuxt",
],
```

### Try it yourself - Third-party library

In our sample project, I have implemented `Kru-Components` at `pages/third-party-example.vue`. Make sure to setup Kru-Components locally and then `npm link` it to our sample project.

**Note:** If your component library consists of components that needs transpiling support, then `@nuxt/components` provides `transpile` option, which is set to `auto` by default. Remember, `transpile` option can be disabled if components already transpiles.

For more concrete example, I'd recommend you keep an eye on [Chakra UI](https://github.com/chakra-ui/chakra-ui-vue) for Vue as they're [working towards making the library compatible](https://twitter.com/codebender828/status/1265702818888876033) with `@nuxt/components`.

## Conclusion

If you've made it this far, you can see how this module presents several opportunities to fine-tune how we auto-import components and improve overall Nuxt Developer Experience. Here's the brief summary of what we learned in this article.

There are three ways you can get started with this module.

- activate `components` and start using components from `~/components` directory, **or**
- provide directories as strings and start using components from specified directories, **or**
- provide directories as an object, along with configuration that can range from basic to advance. Here's the recap of directory options we covered:
  1. **path** - (String) - Of all four options, path is required parameter. It indicates which directory is to be scanned.
  2. **prefix** - (String) - Specify the prefix for the component names.
  3. **extensions** (Array) - Specify file extensions of the components to be scanned.
  4. **pattern** - (String) - Specify path and extensions of the components to be scanned.
  5. **ignore** - (Array) - Specify path and extensions of the components to be excluded from scanning.

Above directory options combined with lazy-loading, this module can be used in many possible combinations. However, you can always start with bare-minimum option, such as `components: true` and refine your configuration as you go.
