---
template: guide
title: Fume
description: Como desdobrar uma aplicação Nuxt no Fume?
target: Static & Server
category: deployment
logo:
  light: "/img/companies/square/light/Fume.svg"
  dark: "/img/companies/square/dark/Fume.svg"
---
# Desdobrar o Nuxt no Fume

Como desdobrar uma aplicação Nuxt no Fume?

---

[Fume](https://fume.app/) é uma plataforma de controlo de operações suportada pelo AWS.

O Fume inclui as seguintes funcionalidades:

- Estrutura serverless suportando ambos Servidor e Estático com o Lambda e CloudFront.
- Desdobramento [automatizado](https://github.com/marketplace/actions/fume-deployment) com recuperação com o clique de um botão
- Métricas e previsão de custo para cada ambiente
- Controlo de domínio - importar hospedeiros, emitir certificados e mapear registo para os ambientes
- Notificações integradas para o Slack, Discord, e outras plataformas de colaboração

## Configuração

Consiga uma URL pronta para produção em dois minutos com estes passos:

- Siga para o [Fume](https://fume.app), conecte e ligue-se a sua conta da AWS
- Crie uma equipa (Team), e um projeto Nuxt
- Execute os seguintes comandos dentro da pasta raiz do seu projeto

::code-group
```bash [Yarn]
yarn global add fume-cli
fume deploy
```
```bash [NPM]
npm install -g fume-cli
fume deploy
```
::
