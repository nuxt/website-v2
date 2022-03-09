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
# Desdobrando uma aplicação Nuxt no Fume

Como desdobrar uma aplicação Nuxt no Fume?

---

[Fume](https://fume.app/) é uma plataforma de controlo de operações suportada pelo AWS.

O Fume inclui as seguintes funcionalidades:

- Serverless structures supporting both Server and Static with Lambda and CloudFront.
- [Automated](https://github.com/marketplace/actions/fume-deployment) deployments with rollbacks with the click of a button
- Metrics and cost prediction for each environment
- Domain control - import hosts, issues certificates, and map records to environments
- Integrated notifications to Slack, Discord, and other collaboration platforms

## Configuração

Consiga uma URL pronta para produção em dois minutos com estes passos:

- Siga para o [Fume](https://fume.app), conecte e ligue-se a sua conta da AWS
- Crie uma equipa (Team), e um projeto Nuxt
- Execute os seguintes comandos dentro da pasta raíz do seu projeto

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
