---
template: guide
title: Dokku
description: Comment déployer une application Nuxt sur Dokku ?
target: Server
category: deployment
logo:
  light: "/img/partners/dark/dokku.png"
  dark: "/img/partners/light/dokku.png"
---
# Déployer Nuxt sur Dokku

Comment déployer une application Nuxt sur Dokku ?

---

Nous vous recommandons de lire [la documentation Dokku pour la configuration](http://dokku.viewdocs.io/dokku/getting-started/installation/) et [Déployer une application Node.js sur Digital Ocean en utilisant Dokku](http://jakeklassen.com/post/deploying-a-node-app-on-digital-ocean-using-dokku/).

Pour l'exemple, nous appellerons notre application Nuxt `my-nuxt-app`.

Nous devons dire à Dokku d'installer les `devDependencies` du projet (pour pouvoir lancer `npm run build`) :

```bash
// sur le serveur Dokku
dokku config:set my-nuxt-app NPM_CONFIG_PRODUCTION=false YARN_PRODUCTION=false
```

De plus, nous voulons que notre application écoute sur l'hôte `0.0.0.0` et s'exécute en mode production :

```bash
// sur le serveur Dokku
dokku config:set my-nuxt-app HOST=0.0.0.0 NODE_ENV=production
```

Vous devriez voir ces 3 lignes lorsque vous tapez `dokku config my-nuxt-app`

![nuxt config vars Dokku](https://i.imgur.com/9FNsaoQ.png)

Ensuite, nous disons à Dokku de lancer `npm run build` via le script `scripts.dokku.predeploy` dans notre projet `app.json` :

`créer un nom de fichier app.json dans le dossier racine de notre projet`

```js
{
  "scripts": {
    "dokku": {
      "predeploy": "npm run build"
    }
  }
}
```

Pour lancer l'application nous exécutons `npm run start` en utilisant [Procfile](http://dokku.viewdocs.io/dokku/deployment/methods/dockerfiles/#procfiles-and-multiple-processes):

```
web: npm run start
```

Enfin, nous pouvons pousser notre application sur Dokku avec :

```bash
// validez votre modification avant de pousser.
git remote add dokku dokku@yourServer:my-nuxt-app
git push dokku master
```

Voilà ! Notre application Nuxt est désormais hébergée sur Dokku !
