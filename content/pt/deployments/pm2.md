---
template: guide
title: PM2
description: Como desdobrar o Nuxt com o de agrupamento do PM2 ativado?
target: Server
category: deployment
logo:
  light: "/img/companies/square/light/pm2.png"
  dark: "/img/companies/square/dark/pm2.png"
---
# Desdobrar o Nuxt usando o PM2

Como desdobrar o Nuxt com o de agrupamento do PM2 ativado?

---

O desdobrando usando [PM2](https://pm2.keymetrics.io/) (Process Manager 2, Gestor de Processos 2) é uma solução rápida e fácil para hospedagem da sua aplicação Nuxt universal no seu servidor ou VM.

Neste guia, nós construímos a aplicação localmente e servimos ela com um ficheiro de configuração do PM2 com o modo de agrupamento ativado. O modo de agrupamento irá prevenir o tempo de espera ao permitir com que as aplicações sejam escaladas através de várias CPUs.

## Vamos começar

Certifique-se que você tem o pm2 instalado no seu servidor. Se não, simplesmente instale ele globalmente a partir do yarn ou npm.

```bash
# yarn pm2 install
$ sudo yarn global add pm2 --prefix /usr/local

# npm pm2 install
$ npm install pm2 -g
```

## Configure a sua aplicação

Todo o que você precisa para adicionar a sua aplicação Nuxt universal para servir ela é o PM2 que é um ficheiro chamado `ecosystem.config.js`. Crie um novo ficheiro com aquele nome dentro da raíz do diretório do seu projeto e adicione o seguinte conteúdo:

```javascript
module.exports = {
  apps: [
    {
      name: 'NuxtAppName',
      exec_mode: 'cluster',
      instances: 'max', // Ou um número de instâncias
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start'
    }
  ]
}
```

## Construa e sirva a aplicação

Agora construa sua aplicação com `npm run build`.

E sirva ela com `pm2 start`.

Consulte os estados `pm2 ls`.

Agora a sua aplicação Nuxt está sendo servida!

## Informações adicionais

Esta solução garante, sem tempo de espera para a sua aplicação neste servidor. (Você deve também prevenir a falha no servidor através de redundância ou soluções de nuvem de alta disponibilidade.)

Você pode encontrar configurações adicionais do PM2 [aqui](https://pm2.keymetrics.io/docs/usage/application-declaration/#general).
