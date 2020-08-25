---
title: Modos de Renderização
description: Modos de Renderização
position: 1
category: features
---

## Universal

`mode: 'universal'`: aplicação isomórfica (renderização pelo servidor ou sites estáticos).

```js{}[nuxt.config.js]
export default {
  mode: 'universal' // padrão: universal
}
```

<base-alert type="info">
Você não precisa adicionar isso à sua configuração nuxt para que o modo universal seja aplicado, já que o modo padrão é universal.
</base-alert>

## SPA

`mode: 'spa'`: Sem renderização pelo servidor (apenas navegação pelo cliente)

Você pode usar a propriedade mode para alterar o modo nuxt padrão para seu projeto:

```js{}[nuxt.config.js]
export default {
  mode: 'spa' // padrão: universal
}
```

<base-alert type="next">

[A propriedade mode](/guides/configuration-glossary/configuration-mode)

</base-alert>
