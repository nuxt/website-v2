---
template: guide
title: Surge
description: Como desdobrar uma aplicação Nuxt com Surge?
target: Static
category: deployment
logo:
  light: "/img/companies/square/light/Surge.svg"
  dark: "/img/companies/square/dark/Surge.svg"
---
# Desdobrar uma aplicação Nuxt com Surge

Como desdobrar uma aplicação Nuxt com Surge?

---

O Nuxt dá para você a possibilidade de hospedar sua aplicação web em qualquer hospedagem estática como [Surge](https://surge.sh/) por exemplo.

Para desdobrar no Surge, primeiro instale ele no seu computador:

::code-group
```bash [Yarn]
yarn global add surge
```
```bash [NPM]
npm install -g surge
```
::

Depois, dizemos ao Nuxt para gerar nossa aplicação web:

::code-group
```bash [Yarn]
yarn generate
```
```bash [NPM]
npm run generate
```

Ele criará uma pasta `dist` com tudo dentro pronto para ser enviado em um hospedagem estática.

Nós podemos então fazer o deploy dele para o Surge:

```bash
surge dist/
```

Feito :)

Se você tiver um projeto com [rotas dinâmicas](/docs/directory-structure/pages#dynamic-pages), dê uma vista de olhos na [configuração do `generate`](/docs/configuration-glossary/configuration-generate) para dizer ao Nuxt como gerar essas rotas dinâmicas se você estiver usando o Nuxt <= v2.12.

::alert{type="warning"}
Quando estiver gerando sua aplicação web com `nuxt generate`, o [contexto](/docs/internals-glossary/context) dado ao [asyncData](/docs/features/data-fetching) não terá `req` e `res`.
::
