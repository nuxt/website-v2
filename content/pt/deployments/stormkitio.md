---
template: guide
title: Stormkit.io
description: Como desdobrar o Nuxt com o Stormkit.io?
target: Static & Server
category: deployment
logo:
  light: "/img/companies/square/light/Stormkit.svg"
  dark: "/img/companies/square/dark/Stormkit.svg"
---
# Desdobrar com o Stormkit

Como desdobrar o Nuxt com o Stormkit.io?

---

Construa, desdobre e escale suas aplicações Nuxt facilmente com o [Stormkit.io](https://www.stormkit.io). Ele suporta retornos instantâneo, lógica no lado sem servidor, injeções de fragmentos, vários ambientes de desenvolvimento e mais...

## Pré-requisitos

Este guia assume que você já tenha um projeto Nuxt para desdobrar. Se você precisar de um projeto, use o [create-nuxt-app](https://github.com/nuxt/create-nuxt-app) para começar ou forke o [Exemplo de Nuxt](https://github.com/stormkit-dev/hackernews-nuxt) antes de continuar.

## Configurar

1. Vá para [app.stormkit.io](https://app.stormkit.io) e comece por selecionar o seu provedor git.
2. Uma vez iniciado, o Stormkit perguntará para você em qual provedor a sua base de código está localizada.Clique no seu provedor uma vez mais.
3. Se for GitHub, clique em ‘Connect more repositories (Conecte mais repositórios)’ e garanta que Stormkit acesse ele.
4. A seguir, selecione o seu repositório. Isto criará a aplicação no Stormkit.
5. Na página da sua aplicação, encontre o ambiente **Production (Produção)** e clique nele.
6. Clique em editar para configurar a sua aplicação. Você fornecerá o comando de construção e as variáveis de ambiente nesta tela.

## Websites estáticos

Você não tem que fazer nada para websites estáticos. As aplicações contraídas com o comando `nuxt generate` será manipulado fora da caixa.

## Aplicações de página única

Para aplicações de página única, todo o que você tem de fazer é fornecer um `stormkit.config.yml` o qual redireciona todas requisições para o `index.html`. Para fazer isso, crie um ficheiro `stormkit.config.yml` no nível de superior do seu projeto e especifique a seguinte regra:

```
app:
- redirects:
    - from: /*
      to: /index.html
      assets: false
```

## Aplicações híbridas

Para aplicações híbridas, você terá de ligar no alternador `Serverless (sem servidor)` na página de configuração da construção. Isto dirá ao Stormkit para servir as requisições a partir de lambdas ao invés do CDN. Você pode encontrar mais [neste guia](https://www.stormkit.io/docs/deployments/configuration/nuxt#hybrid) para configurar suas aplicações híbridas sem servidor.

## Hospedando usando Stormkit

Stormkit gera uma URL única para cada desdobramento. Você pode pré-visualizar a sua aplicação usando essas ligações. Depois, você pode conectar o seu domínio e publicar qualquer desdobramento é assim que os usuários começarão a ver essa versão da sua aplicação.

## Suporte

Se você precisar adicionar suporte, você pode conversar com os desenvolvedores do Stormkit e outros membros da comunidade no [Discord](https://discord.gg/6yQWhyY).
