---
title: Targets de Deploy
description: Targets de Deploy
position: 2
category: features
---

## Hospedagem Estática

Para hospedagem estática (hospedagem onde nenhum servidor é necessário), o target static precisa ser adicionado ao arquivo nuxt.config.

```js{}[nuxt.config.js]
export default {
  target: 'static' // padrão: 'server'
}
```

Executar nuxt dev com o target static melhorará a experiência do desenvolvedor:

- Remove req & res do contexto
- Fallback para renderização pelo cliente em 404, erros e redirecionamentos (consulte fallback do SPA)
- `$route.query` sempre será igual a {} na renderização pelo servidor
- process.static é true

<base-alert type="info">
Também estamos expondo process.target para que os autores de módulos adicionem lógica, dependendo do target do usuário.
</base-alert>

## Hospedagem de Servidor

Para a hospedagem de servidor, o target server é utilizado, que é o valor padrão.

```js{}[nuxt.config.js]
export default {
  target: 'server'
}
```
