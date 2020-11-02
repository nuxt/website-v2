---
title: 'A propriedade rootDir'
description: Defina o espaço de trabalho da aplicação Nuxt.js
menu: rootDir
category: configuration-glossary
position: 23
---

- Tipo: `String`
- Padrão: `process.cwd()`

> Defina o espaço de trabalho da aplicação Nuxt.js

Esta propriedade será substituída pelos comandos nuxt (nuxt start, nuxt build etc) se um argumento for passado para eles. Por exemplo, executando `nuxt ./meu-app/` definirá o `rootDir` para o caminho absoluto de `./meu-app/` do diretório atual/de trabalho.

Por causa disso, normalmente não é necessário configurar esta opção, a menos que você use [Nuxt.js programaticamente](/docs/2.x/internals-glossary/nuxt).

<base-alert type="info">

Tanto `rootDir` quanto a raiz do pacote contendo o diretório `node_modules` precisam estar dentro da mesma árvore de diretórios para ser capaz de <NuxtLink to="https://nodejs.org/api/modules.html#modules_all_together"> resolver dependências. </NuxtLink>Veja a opção <NuxtLink to="/guides/configuration-glossary/configuration-srcdir">`srcDir`</NuxtLink> para exemplos de estrutura de diretório quando este não for o caso

</base-alert>
