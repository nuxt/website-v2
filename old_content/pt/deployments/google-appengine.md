---
template: guide
title: Google App Engine
description: Como desdobrar o Nuxt na Google App Engine?
target: Server
category: deployment
logo:
  light: "/img/companies/square/light/Google_engine_app.svg"
  dark: "/img/companies/square/dark/Google_engine_app.svg"
---
# Desdobrar o Nuxt na Google App Engine

Como desdobrar o Nuxt na Google App Engine?

---

Desdobrar para [Google App Engine](https://cloud.google.com/appengine/) é uma solução rápida e fácil para hospedagem da sua aplicação Nuxt universal nos Serviços da Nuvem do Google.

Neste guia, nós construímos a aplicação localmente e depois simplesmente carregamos a pasta do projeto inteira para o Google App Engine. Depois do carregamento, o Google App Engine irá automaticamente iniciar o script `start` dentro do nosso package.json e sua aplicação estará disponível automaticamente.

## Pontapé de Saída

Certifique-se de que você tenha uma conta na Nuvem do Google (Google Cloud), um projeto e uma aplicação do Google App Engine vazia configurada no [Google App Engine](https://cloud.google.com/appengine/). Além disso, certifique-se de descarregar e instalar a partir do Google a interface de linha de comando do Cloud SDK como explicado [aqui](https://cloud.google.com/sdk/) e iniciar a sessão com a sua conta da Nuvem do Google (Google Cloud). 

## Configure a sua aplicação

Tudo o que você precisa adicionar à sua aplicação Nuxt universal para desdobrar ela para o Google App Engine é um ficheiro chamado `app.yaml`. Crie um novo ficheiro com esse nome dentro da raiz do diretório do projeto e adicionar o seguinte conteúdo:

```yaml
runtime: nodejs10

instance_class: F2

handlers:
  - url: /_nuxt
    static_dir: .nuxt/dist/client
    secure: always

  - url: /(.*\.(gif|png|jpg|ico|txt))$
    static_files: static/\1
    upload: static/.*\.(gif|png|jpg|ico|txt)$
    secure: always

  - url: /.*
    script: auto
    secure: always

env_variables:
  HOST: '0.0.0.0'
```

Or para ambientes flexíveis a configuração mínima é:

```yaml
runtime: nodejs
env: flex
```

## Construa e desdobre a aplicação

Agora construa a sua aplicação com `npm run build` ou `yarn build`.

Neste ponto, a sua aplicação está pronta para ser carregada para o Google App Engine. Agora apenas execute o seguinte comando:

```
gcloud app deploy app.yaml --project [project-id]
```

Voilà! Agora, a sua aplicação Nuxt está hospedada no Google App Engine!

## Informações Avançadas

- O atributo `instance_class` dentro do seu ficheiro app.yaml define a classe da instância da sua aplicação. A instância F2 não é completamente gratuita, mas tem o mínimo de memória necessária para executar a sua aplicação Nuxt.
- Certifique-se de que o script `start` dentro do package.json é o comando que você quer executar depois do desdobramento. Se você normalmente executa pelo script `start:prod` ou algum outro comando, sua aplicação não funcionará como esperado.

Certifique-se de colocar o `project-id` e não o `project-name` dentro do comando deploy. Essas são duas coisas diferentes mas fácil de baralhar.
