---
template: guide
title: Qovery
description: Como desdobrar o Nuxt no Qovery?
target: Static & Server
category: deployment
logo:
  light: "/img/companies/square/light/Qovery.svg"
  dark: "/img/companies/square/dark/Qovery.svg"
---
# Desdobrar o Nuxt no Qovery

Como desdobrar o Nuxt no Qovery?

---

O [Qovery](https://qovery.com) é uma plataforma de nuvem completamente gerida que executa sobre a sua conta AWS, GCP, Azure e Digital Ocean onde você você pode hospedar sítios estáticos, backend de APIs, base de dados, e todas outras suas aplicações em um só lugar.

Os sítios estáticos são **completamente grátis** no Qovery e incluem as seguintes funcionalidades:

- Construções automáticas e desdobramentos contínuos a partir do GitHub e GitLab.
- Certificação SSL automática através do [Let's Encrypt](https://letsencrypt.org).
- PostgreSQL gerido grátis.
- Armazenamento SSD grátis
- Colaboradores ilimitados.
- [Domínios personalizados](https://docs.qovery.com/guides/getting-started/setting-custom-domain/) ilimitados.

## Pré-requisitos

Este guia assume que você já tem um projeto Nuxt para desdobrar. Se você precisar de um projeto, siga o guia [Pontapé de Partida](/docs/get-started/installation).

## Configuração

Siga o procedimento abaixo para configurar o Nuxt no Qovery:

### 1. Criar uma conta Qovery.

Visite o [painel de controlo do Qovery](https://console.qovery.com) para criar uma conta se você ainda não tiver uma.

### 2. Criar um projeto

Clique no "Create a new project (Criar um novo projeto)" e dê um nome ao seu projeto.

Clique em "Next (Seguinte)"

### 3. Adicionar uma aplicação

Clique em "Create an application (Criar uma aplicação)" e depois escolha "I have an application (Eu tenho uma aplicação)" e seleciona o repositório onde o seu sítio Nuxt está localizado.

Clique em "Next (Seguinte)".

Pule adicionar serviços para websites estático.

Clique em "Deploy (Desdobrar)"

## Desdobrar

A sua aplicação deve estar desdobrada. Você pode consultar os estados em tempo real ao clicar em "deployment logs (relatórios de desdobramento)".

## Desdobramento Contínuos

Agora que Qovery está conectado com o seu repositório, ele irá **automaticamente construir e publicar o seu sítio** sempre que você empurrar para o git.

## Domínios Personalizados

Adicione o seu próprio domínio ao seu sítio facilmente usando o guia de [domínios personalizados](https://docs.qovery.com/guides/getting-started/setting-custom-domain/) do Qovery.

## Suporte

Converse com os desenvolvedores da Qovery no [Discord](https://discord.qovery.com) se você precisar de ajuda.
