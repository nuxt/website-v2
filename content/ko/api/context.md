---
title: "API: 컨텍스트"
description: 'context`는 Vue 컴포넌트에서 일반적으로 사용할 수 없는 Nuxt의 추가 객체/파라미터를 제공합니다. `context`는 `asyncData`, `plugins`, `middlewares`, `modules`, 그리고 `store/nuxtServerInit`와 같은 특별한 nuxt 라이프사이클 영역에서 사용할 수 있습니다.'
menu: context
category: essential
position: 1
---

> `context`는 Vue 컴포넌트에서 일반적으로 사용할 수 없는 Nuxt의 추가 객체/파라미터를 제공하고 [`asyncData`](/api), [`fetch`](/api/pages-fetch), [`plugins`](/guide/plugins), [`middleware`](/guide/routing#middleware) 그리고 [`nuxtServerInit`](/guide/vuex-store#the-nuxtserverinit-action)와 같은 특정 Nuxt 라이프사이클에서 사용가능합니다.

> *Note: 여기에서 말하는 "컨텍스트"는 [`Vuex Actions`](https://vuex.vuejs.org/guide/actions.html)에서의 `context`와 혼동되면 안됩니다. 둘은 관련이 없습니다.*

```js
function (context) {
  // Universal keys
  const {
    app,
    store,
    route,
    params,
    query,
    env,
    isDev,
    isHMR,
    redirect,
    error
  } = context
  // Server-side
  if (process.server) {
    const { req, res, beforeNuxtRender } = context
  }
  // Client-side
  if (process.client) {
    const { from, nuxtState } = context
  }
}
```

## 범용 키

아래의 키들은 클라이언트 사이드와 서버 사이드에서 사용 가능합니다.

### `app` (*NuxtAppOptions*)

모든 플러그인이 포함된 루트 Vue 인스턴스 옵션입니다. 예를 들어 `i18n`을 사용할 때 `context.app.i18n`을 통해 `$i18n`에 액세스할 수 있습니다.

### `store` ([*Vuex Store*](https://vuex.vuejs.org/en/api.html#vuexstore-instance-properties))

Vuex Store 인스턴스 **[vuex store](/guide/vuex-store)가 세팅되었을 때 사용 가능합니다**.

### `route` ([*Vue Router Route*](https://router.vuejs.org/en/api/route-object.html))

Vue 라우터 라우트 인스턴스.

### `params` (*Object*)

`route.params`의 알리아스.

### `query` (*Object*)

`route.query`의 알리아스.

### `env` (*Object*)

`nuxt.config.js`의 환경변수, [env api](/api/configuration-env)를 참조하세요.

### `isDev` (*Boolean*)

dev 모드인지를 알 수 있는 Boolean 값. 프로덕션에서 어떤 데이터를 캐싱할 때 유용함.

### `isHMR` (*Boolean*)

메소드/미들웨어가 웹팩의 HMR에서 호출되었는지를 알 수 있는 Boolean 값 (*클라이언트 사이드의 dev 모드에서는 true*).

### `redirect` (*Function*)

다른 라우트로 유저를 리다이렉트하기 위해 사용. 상태 코드는 서버 사이드에서 쓰이며, 디폴트는 `302`입니다. `redirect([status,] path [, query])`.

### `error` (*Function*)

`error(params)`를 에러 페이지를 보여주기 위해 사용. `params`은 `statusCode`와 `message` 프로퍼티를 가져야합니다.

## 서버 사이드 키

아래의 키들은 서버 사이드에서 사용 가능합니다.

### `req` ([*http.Request*](https://nodejs.org/api/http.html#http_class_http_incomingmessage))

Node.js 서버의 리퀘스트. Nuxt가 미들웨어로 사용된다면, 리퀘스트 객체는 사용 중인 프레임워크에 따라 달라질 수 있습니다.<br>**`nuxt generate`에서는 사용 불가능**.  

### `res` ([*http.Response*](https://nodejs.org/api/http.html#http_class_http_serverresponse))

Node.js 서버의 리스폰스. Nuxt가 미들웨어로 사용된다면, 리스폰스 객체는 사용 중인 프레임워크에 따라 달라질 수 있습니다.<br>**`nuxt generate`에서는 사용 불가능**.  

### `beforeNuxtRender(fn)` (*Function*)

클라이언트 사이드에서 렌더링되는 `__NUXT__` 변수를 업데이트하는 데에 이 메소드를 사용하세요. `fn`은 (비동기일 수 있음) `{ Components, nuxtState }`와 호출됩니다. [예시](https://github.com/nuxt/nuxt.js/blob/cf6b0df45f678c5ac35535d49710c606ab34787d/test/fixtures/basic/pages/special-state.vue)를 보세요.

## 클라이언트 사이드 키

아래의 키들은 클라이언트 사이드에서 사용 가능합니다.

### `from` ([*Vue Router Route*](https://router.vuejs.org/en/api/route-object.html))

라우트 이동 출발지(from).

### `nuxtState` *(Object)*

`beforeNuxtRender`를 사용하여 렌더링 전 클라이언트 측 Nuxt 상태를 가져오는 플러그인에 유용합니다 .**`universal` 모드에서만 사용 가능합니다**.
