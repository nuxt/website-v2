---
title: Server Side Rendering
description: 서버 사이드 렌더링(SSR)은 웹 페이지를 브라우저에서 렌더링하는 대신 서버에서 보여주도록 하는 애플리케이션 기능입니다.
position: 3
category: concepts
questions:
  - question: What kinda of server do you need for Server Side Rendering?
    answers:
      - PHP server
      - JavaScript server
      - Node.js server
    correctAnswer: Node.js server
  - question: What do you use to extend and control the server?
    answers:
      - Middleware
      - ServerMiddleware
      - It is not possible to control the server
    correctAnswer: ServerMiddleware
  - question: You can host a server side rendered application on a serverless hosting provider
    answers:
      - true
      - false
    correctAnswer: false
  - question: Do we have access to  document on the server-side?
    answers:
      - yes, it is always available
      - No, The object belongs to the browser and is not available on the server
    correctAnswer: No, The object belongs to the browser and is not available on the server
  - question: When does your page become interactive?
    answers:
      - When the browser receives the rendered HTML from the server
      - When the Vue.js hydration kicks in
      - When a browser sends the initial request
    correctAnswer: When the Vue.js hydration kicks in
  - question: Navigating between pages using <NuxtLink> is done
    answers:
      - Client side
      - Server side
    correctAnswer: Client side
  - question: What are the correct steps?
    answers:
      - browser → server, server → browser, browser → browser
      - server → browser, browser → server, server → server
      - browser → server, server → browser, browser → server
    correctAnswer: browser → server, server → browser, browser → browser
---

서버 사이드 렌더링(SSR)은 웹 페이지를 브라우저에서 렌더링하는 대신 서버에서 보여주도록 하는 애플리케이션 기능입니다. 서버 사이드는 완전히 렌더링 된 페이지를 클라이언트에 보냅니다; 클라이언트의 자바스크립트 번들이 전달되어 Vue.js 앱이 [hydrate](https://ssr.vuejs.org/guide/hydration.html)되도록 합니다.

## Node.js 서버 필요 사항

웹 페이지를 렌더링하려면 자바스크립트 환경이 필요합니다.

Vue.js 애플리케이션을 실행하려면 Node.js 서버를 구성해야 합니다.

## 서버 확장 및 제어

serverMiddleware로 서버를 확장하고 middleware로 라우트를 제어할 수 있습니다.

```js{}[middleware/api/logger.js]
export default function (req, res, next) {
  console.log(req.url)
  next()
}
```

```js{}[nuxt.config.js]
export default: {
  serverMiddleware: [
     '~/api/logger'
  ]
}
```

서버 미들웨어가 경로에 매핑 된 함수 목록으로 구성된 경우:

## 서버 vs 브라우저 환경

Node.js 환경에 있기 때문에 `req`와 `res`와 같은 Node.js 객체에 접근할 수 있습니다. 브라우저 환경에 있는 `window` 또는 `document` 객체에는 접근할 수 없습니다. 그러나 `beforeMount` 혹은 `mounted` 훅을 사용하여 `window` 또는 `document`를 사용할 수 있습니다.

```js
beforeMount{
  window.alert('hello');
}
mounted{
  window.alert('hello');
}
```

## Nuxt.js를 사용하여 서버 사이드 렌더링하는 방법

### Step 1: 브라우저에서 서버로

브라우저가 초기 요청을 보내면 Node.js 내부 서버에 연결됩니다. 그러면 Nuxt.js는 HTML을 생성하고 실행된 함수의 결과와 함께 브라우저에 돌려보냅니다. e.g. `asyncData`, `nuxtServerInit` 또는 `fetch`. 훅 함수 또한 잘 실행됩니다.

### Step 2: 서버에서 브라우저로

브라우저는 서버로부터 생성된 HTML를 사용하여 렌더링된 페이지를 받습니다. 이 컨텐츠가 보여지고 Vue.js hydration이 시작되어 반응형이 됩니다. 이 프로세스 이후에 페이지가 유저 액션에 반응합니다.

### Step 3: 브라우저에서 브라우저로

[`<NuxtLink>`](/guides/features/nuxt-components#the-nuxtlink-component)를 사용하는 페이지 간의 이동은 클라이언트 사이드에서 이루어지므로 브라우저를 새로고침하지 않는한 서버에 다시 연결되지 않습니다.

<quiz :questions="questions"></quiz>
