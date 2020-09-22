---
title: Mise à jour
description: La mise à jour de Nuxt.js est rapide, mais plus complexe que celle de votre package.json
position: 5
category: get-started
---

> La mise à jour de Nuxt.js est rapide, mais plus complexe que celle de votre package.json

Si vous effectuez une mise à niveau vers Nuxt v2.14 et que vous souhaitez utiliser un hébergement statique, vous devrez ajouter [target:static](/guides/features/deployment-targets#static-hosting) dans votre fichier nuxt.config.js pour que la commande `generate` fonctionne correctement.

```js{}[nuxt.config.js]
export default {
  target: 'static'
}
```

## Commencer

1. Vérifiez les [notes de publication](/guide/release-notes) pour la version que vous souhaitez mettre à niveau pour savoir s'il existe des instructions supplémentaires pour cette version en particulier.
2. Mettez à jour la version spécifiée pour le package `nuxt` dans votre fichier `package.json`.

Après cette étape, les instructions varient en fonction de votre gestionnaire de paquets (Yarn ou NPM). _[Yarn](https://yarnpkg.com/en/docs/usage) est l'outil de développement préféré pour travailler avec Nuxt car c'est celui qui a été utilisé lors de l'écriture des tests._

## Yarn

3. Supprimez le fichier `yarn.lock`
4. Supprimez le dossier `node_modules`
5. Lancez la commande `yarn`
6. Une fois l'installation terminée et les tests exécutés, vous devriez également envisager de mettre à jour d'autres dépendances. La commande `yarn outdated` peut être utilisée.

## NPM

3. Supprimez le fichier `package-lock.json`
4. Supprimez le dossier `node_modules`
5. Lancez la commande `npm install`
6. Une fois l'installation terminée et les tests exécutés, vous devriez également envisager de mettre à jour d'autres dépendances. La commande `npm outdated` peut être utilisée.
