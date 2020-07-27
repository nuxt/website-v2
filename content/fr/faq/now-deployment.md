---
title: Déployer avec Now
description: Comment déployer une application Nuxt.js avec Now ?
category: deployment
position: 310
---

## Now V2

**Remarque:** Vous ne pouvez pas déployer une application Nuxt rendue côté serveur avec Now V2 pour le moment. Veuillez utiliser Now V1 pour ces applications.

Pour déployer avec [ZEIT Now](https://zeit.co/now), il faut un fichier `package.json` ainsi qu'un fichier de configuration `now.json` :

- Ajout la commande de script `now-build` à `package.json`:
  - Pour SPA (sans SSR):
    ```js
    "scripts": {
       ...
       "now-build": "nuxt build --spa"
    }
    ```
  - Pour la génération statique (Pre rendu):
    ```js
    "scripts": {
       ...
       "now-build": "nuxt generate"
    }
    ```
- Créer `now.json` et définir `builds`
  ```json
  {
    "version": 2,
    "builds": [{ "src": "package.json", "use": "@now/static-build" }]
  }
  ```
- Puis exécutez `now` et profitez !

## Now V1 (héritage)

Pour déployer avec [now.sh](https://zeit.co/now), un fichier `package.json` comme suit est recommandé :

```json
{
  "name": "my-app",
  "dependencies": {
    "nuxt": "latest"
  },
  "scripts": {
    "dev": "nuxt",
    "build": "nuxt build",
    "start": "nuxt start"
  }
}
```

Puis exécutez `now` et profitez !

Note : nous recommandons d'ajouter `.nuxt` dans `.npmignore` ou `.gitignore`.
