---
title: 部署目标
description: 部署目标
position: 2
category: features
---

## 静态托管

Nuxt.js 也可以作为静态站点生成器使用。静态渲染你的Nuxt.js应用，无需服务器即可获得通用应用程序的所有优势。执行`nuxt generate` 命令行将为你的网站生成一个静态版本。它将根据你项目的每一个路由生成对应的HTML文件，并且把它打包放进`dist/`文件夹下对应的文件中。
这样做提高了性能，增强了SEO，并且获得了更好的离线支持。

<base-alert type="info">

动态路由也可以生成静态站点，这多亏了[Nuxt Crawler](/docs/2.x/configuration-glossary/configuration-generate#crawler)

</base-alert>

想要使用静态站点，你需要在`nuxt.config`文件中将目标(target)设为`static`。

```js{}[nuxt.config.js]
export default {
  target: 'static' // default is 'server'
}
```

**在静态目标中运行nuxt dev可以改善开发体验：**

- 从`context`移除`req` & `res`
- 当出现404、错误以及重定向时，页面将回退至客户端渲染。[参见 SPA 回退](/docs/2.x/concepts/static-site-generation#spa-fallback)
- 在服务端渲染时 `$route.query` 总是等同于 `{}`
- `process.static` 的值为 `true`

<base-alert type="info">

我们还向模块开发者提供了`process.target`，开发者可以根据用户的`target`添加相应逻辑。

</base-alert>

## 服务器托管

服务器托管是指需要服务器的托管。它适用于SSR应用程序或任何使用了[serverMiddleware](/docs/2.x/configuration-glossary/configuration-servermiddleware)的应用程序。服务器渲染（即SSR）意味着当用户访问页面时，你的页面将会在服务器上渲染。当用户通过浏览器访问页面时，浏览器会向服务器发送一个获取该页面的请求。页面的所有内容都会在服务器端完成渲染并返回给浏览器。

使用服务器托管需要将`target`的默认值设为`server`。使用SSR时你可以使用 `build` 指令打包应用程序。

```js{}[nuxt.config.js]
export default {
  target: 'server'
}
```
