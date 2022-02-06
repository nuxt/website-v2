---
template: guide
title: PM2
description: Comment déployer Nuxt avec le mode cluster PM2 activé ?
target: Server
category: deployment
logo:
  light: "/img/companies/square/light/pm2.png"
  dark: "/img/companies/square/dark/pm2.png"
---
# Déployer Nuxt en utilisant PM2

Comment déployer Nuxt avec le mode cluster PM2 activé ?

---

Le déploiement à l'aide de [PM2](https://pm2.keymetrics.io/) (Process Manager 2) est une solution rapide et facile pour héberger votre application universelle Nuxt sur votre serveur ou votre VM.

Dans ce guide, nous construisons l'application localement et la servons via un fichier de configuration PM2 avec le mode cluster activé. Le mode cluster permet d'éviter les temps d'arrêt en permettant aux applications d'être mises à l'échelle sur plusieurs CPU.

## Commencer

Assurez-vous que pm2 est installé sur votre serveur. Si ce n'est pas le cas, installez-le simplement de façon globale à partir de yarn ou npm.

```bash
# yarn pm2 install
$ sudo yarn global add pm2 --prefix /usr/local

# npm pm2 install
$ npm install pm2 -g
```

## Configurer votre application

Tout ce que vous devez ajouter à votre application universelle Nuxt pour la servir via PM2 est un fichier appelé `ecosystem.config.js`. Créez un nouveau fichier avec ce nom dans le répertoire racine de votre projet et ajoutez le contenu suivant :

```javascript
module.exports = {
  apps: [
    {
      name: 'NuxtAppName',
      exec_mode: 'cluster',
      instances: 'max', // Ou un certain nombre d'instances
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start'
    }
  ]
}
```

## Créer et servir l'application

Maintenant, construisez votre application avec `npm run build`.

Et le servir avec `pm2 start`.

Vérifier le statut `pm2 ls`.

Votre application Nuxt est maintenant en service !

## Informations complémentaires

Cette solution garantit l'absence de temps d'arrêt pour votre application sur ce serveur. Vous devez éviter les pannes de serveur par la redondance ou par des solutions de haute disponibilité en cloud.

Vous pouvez trouver des configurations supplémentaires de PM2 [ici](https://pm2.keymetrics.io/docs/usage/application-declaration/#general).
