---
template: guide
title: Dokku
description: Como desdobrar uma aplicação Nuxt no Dokku?
target: Server
category: deployment
logo:
  light: "/img/companies/square/light/dokku.png"
  dark: "/img/companies/square/dark/dokku.png"
---
# Desdobrar o Nuxt no Dokku

Como desdobrar uma aplicação Nuxt no Dokku?

---

Nós recomendamos ler a [documentação do Dokku para configuração](http://dokku.viewdocs.io/dokku/getting-started/installation/) e o artigo [Desdobrando uma aplicação Node.js no Digital Ocean usando Dokku](http://jakeklassen.com/post/deploying-a-node-app-on-digital-ocean-using-dokku/).

Por exemplo, nós iremos chamar nossa aplicação Nuxt `my-nuxt-app`.

Nós precisamos dizer ao Dokku para instalar as `devDependencies` do projeto (para ser capaz de executar `npm run build`).

```bash
// no Servidor do Dokku
dokku config:set my-nuxt-app NPM_CONFIG_PRODUCTION=false YARN_PRODUCTION=false
```

Também, nós queremos que nossa aplicação escute no hospedeiro `0.0.0.0` e executar no modo de produção:

```bash
// no Servidor do Dokku
dokku config:set my-nuxt-app HOST=0.0.0.0 NODE_ENV=production
```

Você deve ver essas 3 linhas quando você digitar `dokku config my-nuxt-app`

![nuxt config vars Dokku](https://i.imgur.com/9FNsaoQ.png)

Depois, nós dizemos ao Dokku para executar `npm run build` através do script `scripts.dokku.predeploy` dentro do `app.json` do nosso projeto:

`crie um ficheiro com o nome app.json dentro da pasta raiz do nosso projeto`

```js
{
  "scripts": {
    "dokku": {
      "predeploy": "npm run build"
    }
  }
}
```

Para lançar a aplicação nós executamos `npm run start` usando o [Procfile](http://dokku.viewdocs.io/dokku/deployment/methods/dockerfiles/#procfiles-and-multiple-processes):

```
web: npm run start
```

Finalmente, nós podemos empurrar nossa aplicação no Dokku com:

```bash
// consolide a sua mudança antes de empurrar.
git remote add dokku dokku@yourServer:my-nuxt-app
git push dokku master
```

Voilà! Agora a nossa aplicação Nuxt está hospedada no Dokku!
