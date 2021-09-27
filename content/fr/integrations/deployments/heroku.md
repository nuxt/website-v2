---
template: guide
title: Heroku
description: Comment déployer Nuxt sur Heroku ?
target: Server
category: deployment
logo:
  light: "/img/partners/dark/Heroku_Dark.svg"
  dark: "/img/partners/light/Heroku_Light.svg"
---
# Déployer Nuxt sur Heroku

Comment déployer Nuxt sur Heroku ?

---

Nous vous recommandons de lire la [documentation Heroku pour Node.js](https://devcenter.heroku.com/articles/nodejs-support).

<div class="Promo__Video">
  <a href="https://vueschool.io/lessons/how-to-deploy-nuxtjs-to-heroku?friend=nuxt" target="_blank">
    <p class="Promo__Video__Icon">
      Regardez une leçon gratuite sur <strong>Comment déployer Nuxt sur Heroku</strong> sur Vue School
    </p>
  </a>
</div>

Tout d'abord, nous voulons que notre application écoute sur l'hôte `0.0.0.0` et s'exécute en mode production :

```bash
heroku config:set HOST=0.0.0.0
heroku config:set NODE_ENV=production
```

Vous devriez voir cela dans votre tableau de bord Heroku (section Paramètres) :

![nuxt config vars Heroku](https://i.imgur.com/EEKl6aS.png)

Heroku utilise un [Procfile](https://devcenter.heroku.com/articles/procfile) (nommez le fichier `Procfile` sans extension de fichier) qui spécifie les commandes exécutées par les applications dynos. Pour démarrer le Procfile sera très simple, et doit contenir la ligne suivante :

```
web: nuxt start
```

Cela demandera d'exécuter la commande `nuxt start` et indiquera à Heroku de lui diriger le trafic HTTP externe.

Enfin, nous pouvons pousser l'application sur Heroku avec :

```bash
git push heroku master
```

Pour déployer une branche non maître sur Heroku, utilisez :

```bash
git push heroku develop:master
```

où `develop` est le nom de votre branche.

Voilà ! Votre application Nuxt est désormais hébergée sur Heroku !
