---
title: 渲染
description: 渲染
position: 1
category: features
---

## 服务端渲染网站与静态站点

**服务端渲染网站** 由于每次客户端请求页面时都需要在服务端进行渲染，因此需要一个服务端来为每个请求提供页面渲染服务。
are rendered on the server each time the user requests a page, therefore a server is needed to be able to serve the page on each request.

**静态站点** 类似于服务端渲染网站，不同在于静态站点的页面是在构建时渲染，而不是在服务器端渲染。之后可以在客户端通过页面导航进行页面之间的跳转。

关于构建静态站点以及服务器托管的更多信息，请参阅[deployment targets](/docs/2.x/features/deployment-targets)。

```js{}[nuxt.config.js]
export default {
  ssr: true // default value
}
```

<base-alert type="info">

nuxt配置中默认开启服务端渲染，你不需要在配置文件中手动添加`ssr: true`。

</base-alert>

## 仅使用客户端渲染

客户端渲染模式下没有服务端渲染。客户端渲染意味着页面内容在浏览器上通过JavaScript渲染。我们得到的不是包含所有内容的HTML页面，而是仅获取一个根级的HTML文档以及一个可以通过浏览器渲染出剩余部分的JavaScript文件。使用客户端渲染需要将ssr设为`false`。

```js{}[nuxt.config.js]
export default {
  ssr: false
}
```

<base-alert type="next">

[The ssr property](/docs/2.x/configuration-glossary/configuration-ssr)

</base-alert>
