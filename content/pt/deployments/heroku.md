---
template: guide
title: Heroku
description: Como desdobrar uma aplicação Nuxt no Heroku?
target: Server
category: deployment
logo:
  light: "/img/companies/square/light/Heroku.svg"
  dark: "/img/companies/square/dark/Heroku.svg"
---
# Desdobrar uma aplicação Nuxt no Heroku

Como desdobrar uma aplicação Nuxt no Heroku?

---

Nós recomendamos que você leia a [documentação do Heroku para Node.js](https://devcenter.heroku.com/articles/nodejs-support).

<div class="Promo__Video">
  <a href="https://vueschool.io/lessons/how-to-deploy-nuxtjs-to-heroku?friend=nuxt" target="_blank">
    <p class="Promo__Video__Icon">
      Assista uma aula gratuita  <strong>Como desdobrar uma aplicação Nuxt no Heroku</strong> na Vue School
    </p>
  </a>
</div>

Você pode definir e configurar a sua aplicação através do [painel do controlo do Heroku](https://devcenter.heroku.com/articles/heroku-dashboard) ou da [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).

Primeiro, nós criamos nossa aplicação. Depois adicionamos o [pacote de construção(buildpack)](https://devcenter.heroku.com/articles/buildpacks) do Node.js e configura a aplicação para ouvir no hospedeiro `0.0.0.0`:

```bash
heroku create myapp
heroku buildpacks:set heroku/nodejs
heroku config:set HOST=0.0.0.0
```

A secção de definições da sua aplicação no painel de controlo do Heroku deve conter isso:

![nuxt config vars Heroku](https://user-images.githubusercontent.com/23453691/116850762-81ea0e00-abf1-11eb-9f70-260721a1d525.png)

Finalmente, nós podemos empurrar a aplicação no Heroku com:

```bash
git push heroku master
```

Para desdobrar um ramo que não seja a master para o Heroku use:

```bash
git push heroku develop:master
```

onde `develop` é o nome do seu ramo.

Você pode opcionalmente configurar automaticamente os processos de desdobramento a partir de uma ramo selecionada do repositório do GitHub da sua aplicação dentro da secção Deploy (Desdobrar) da sua aplicação dentro do painel de controlo do Heroku.

Voilà! Sua aplicação Nuxt está agora hospedada no Heroku!
