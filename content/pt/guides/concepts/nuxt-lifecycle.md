---
title: Ciclo de Vida do Nuxt
description: Não importa qual ferramenta você use, você sempre se sentirá mais confiante ao compreender como a ferramenta funciona por debaixo dos panos. O mesmo se aplica ao Nuxt.js.
position: 5
category: concepts
img: /guides/nuxt-lifecycle.png
imgAlt: understanding-nuxt-2-12-lifecycle-hooks
questions:
  - question: When does the Nuxt.js lifecycle start?
    answers:
      - When the response will be sent to the client
      - After the build phase
      - When running nuxt dev
    correctAnswer: After the build phase
  - question: On which main factors does the content of the lifecycle depend?
    answers:
      - Which time and date we have when starting the server
      - If server side rendering is enabled and if so, which type is used
      - What type of OS the Nuxt.js application is running on
    correctAnswer: If server side rendering is enabled and if so, which type is used
  - question: When is nuxtServerInit called?
    answers:
      - Server-side and client-side
      - After the Vue hydration
      - Only on the server side
    correctAnswer: Only on the server side
  - question: What are the three types of middleware?
    answers:
      - Global, Layout, Route
      - Global, Layout, Page
      - Global, Group, Route
    correctAnswer: Global, Layout, Route
  - question: What step can only happen on the client side?
    answers:
      - Vue Hydration
      - Middleware execution
      - Calling the fetch function
    correctAnswer: Vue Hydration
  - question: Which step never happens on the client side?
    answers:
      - Executing asyncData
      - Executing serverMiddleware
      - Executing fetch
    correctAnswer: Executing serverMiddleware
  - question: Which Vue methods are called on both, server and client side?
    answers:
      - mounted and beforeMount
      - beforeDestroy and destroyed
      - created and beforeCreate
    correctAnswer: created and beforeCreate
  - question: What step does not happen after navigating via <NuxtLink>?
    answers:
      - Calling fetch
      - Executing client-side Nuxt.js plugins
      - Calling beforeCreate
    correctAnswer: Executing client-side Nuxt.js plugins
  - question: What is the special difference between asyncData and fetch after navigating via <NuxtLink>?
    answers:
      - asyncData is faster than fetch
      - asyncData is called after fetch
      - asyncData is blocking while fetch is not
    correctAnswer: asyncData is blocking while fetch is not
---

<app-modal :src="img" :alt="imgAlt"></app-modal>

Não importa qual ferramenta você use, você sempre se sentirá mais confiante ao compreender como a ferramenta funciona por debaixo dos panos. O mesmo se aplica ao Nuxt.js. O objetivo deste capítulo é fornecer uma visão geral, de alto nível, das diferentes partes do framework, sua ordem de execução e como funcionam juntas.

O ciclo de vida do Nuxt.js descreve o que acontece após o build, onde seu aplicativo é empacotado (bundled), fragmentado (chunked) e reduzido (minified). O que acontece após esta fase depende se você tem a renderização no servidor habilitada ou não. E se tiver, dependerá do tipo de renderização no servidor que você escolheu:

SSR dinâmico (`nuxt start`)

ou Geração de Site Estático (`nuxt generate`).

## Ciclo de Vida

### Servidor

Para SSR, essas etapas serão executadas para cada request inicial à sua aplicação

- O servidor inicia (`nuxt start`)

Ao usar a geração de site estático, as etapas do servidor serão executadas apenas no build, porém uma vez para cada página que será gerada

- O processo de geração começa (`nuxt generate`)

- hooks do Nuxt
- serverMiddleware
- Plugins Nuxt do lado do servidor
  - na ordem definida em nuxt.config.js
- nuxtServerInit
  - Action do Vuex que é chamada apenas no lado do servidor para pré-popular a store
  - O primeiro argumento é o **contexto do Vuex**, o segundo argumento é o **contexto do Nuxt.js**
    - Despacha outras ações a partir daqui → apenas os "pontos de entrada" para actions da store subsequentes no lado do servidor
  - só pode ser definido em `store/index.js`
- Middleware
  - Middleware Global
  - Middleware do Layout
  - Middleware do Route
- asyncData
- beforeCreate (método do ciclo de vida do Vue)
- created (método do ciclo de vida do Vue)
- O novo método fetch (de cima para baixo, irmãos = paralelo)
- Serialização de state (`render:routeContext`, hook do Nuxt.js)

- A renderização de HTML acontece (`render:route`, hook do Nuxt.js)

- `render:routeDone` hook executado quando o HTML foi enviado para o navegador

- `generate:before`, hook do Nuxt.js
- Arquivos HTML são gerados
  - **Geração estática total (full)**
    - por exemplo. payloads estáticos são extraídos
  - `generate:page` (HTML editable)
  - `generate:routeCreated` (Route gerado)
- `generate:done` quando todos os arquivos HTML forem gerados

### Cliente

Esta parte do ciclo de vida é totalmente executada no navegador, independentemente do modo Nuxt.js que você escolheu.

- Recebe o HTML
- Carrega os assets (por exemplo, Javascript)
- Hidratação Vue
- Middleware
  - Middleware Global
  - Middleware do Layout
  - Middleware do Route
- asyncData (gera bloqueio)
- Plugins Nuxt do lado do cliente
  - na ordem definida em nuxt.config.js
- beforeCreate (método do ciclo de vida do Vue)
- created (método do ciclo de vida do Vue)
- O novo método fetch (de cima para baixo, irmãos = paralelo) (não gera bloqueio)
- beforeMount (método do ciclo de vida do Vue)
- mounted (método do ciclo de vida do Vue)

### Navegue usando o componente NuxtLink

Da mesma forma que a parte do _cliente_, tudo está acontecendo no navegador, mas apenas ao navegar via `<NuxtLink>`. Além disso, nenhum conteúdo da página é exibido até que todas as tarefas de _bloqueio_ sejam finalizadas.

<base-alert type="info">

Confira o capítulo de componentes para ver mais informações sobre o [`<NuxtLink>`](/guides/features/nuxt-components#the-nuxtlink-component)

</base-alert>

- Middleware (gera bloqueio)
  - Middleware Global
  - Middleware do Layout
  - Middleware do Route
- asyncData (gera bloqueio)
- asyncData (gera bloqueio) [ou carregamento total do payload static]
- beforeCreate & created (métodos do ciclo de vida do Vue)
- fetch (não gera bloqueio)
- beforeMount & mounted (métodos do ciclo de vida do Vue)

### O que mais

<base-alert type="next">

Confira o [livro de Funcionalidades](/guides/features/rendering-modes)

</base-alert>

<quiz :questions="questions"></quiz>
