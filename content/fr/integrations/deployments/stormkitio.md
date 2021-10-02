---
template: guide
title: Stormkit.io
description: Comment déployer Nuxt avec Stormkit.io ?
target: Static & Server
category: deployment
logo:
  light: "/img/partners/dark/Stormkit_Dark.svg"
  dark: "/img/partners/light/Stormkit_Light.svg"
---
# Déployer avec Stormkit

Comment déployer Nuxt avec Stormkit.io ?

---

Créez, déployez et faites évoluer facilement vos applications Nuxt avec [Stormkit.io](https://www.stormkit.io). Il prend en charge les roolbacks instantanées, la logique côté serveur, les injections d'extraits de code, plusieurs environnements de développement et plus encore...

## Conditions préalables

Ce guide suppose que vous avez déjà un projet Nuxt à déployer. Si vous avez besoin d'un projet, utilisez [create-nuxt-app](https://github.com/nuxt/create-nuxt-app) pour commencer ou forker [l'exemple Nuxt de Stormkit](https://github.com/stormkit-dev/hackernews-nuxt) avant de continuer.

## Installation

1. Accédez à [app.stormkit.io](https://app.stormkit.io) et connectez-vous en sélectionnant votre fournisseur git.
2. Une fois connecté, Stormkit vous demandera dans quel fournisseur se trouve votre base de code. Cliquez à nouveau sur le fournisseur.
3. Si Github, cliquez sur « Connecter plus de référentiels » et accordez à Stormkit l'accès.
4. Ensuite, sélectionnez votre référentiel. Cela créera l'application sur Stormkit.
5. Sur la page de votre application, recherchez l'environnement **Production** et cliquez dessus.
6. Cliquez sur modifier pour configurer votre application. Vous devez fournir la commande build et les variables d'environnement dans cet écran.

## Sites Web statiques

Vous n'avez rien à faire pour les sites Web statiques. Les applications construites avec `nuxt generate` seront gérées directement.

## Single page applications

Pour les SPA, tout ce que vous avez à faire est de fournir un `stormkit.config.yml` qui redirige toutes les requêtes à `index.html`. Pour ce faire, créez un fichier `stormkit.config.yml` au niveau supérieur de votre projet et spécifiez la règle suivante :

```
app:
- redirects:
    - from: /*
      to: /index.html
      assets: false
```

## Applications hybrides

Pour les applications hybrides, vous devrez activer le mode `Serverless` sur la page de configuration de la construction. Cela indiquera à Stormkit de servir les demandes des lambdas au lieu du CDN. Vous pouvez en savoir plus sur [ce guide](https://www.stormkit.io/docs/deployments/configuration/nuxt#hybrid) pour configurer vos applications hybrides serverless.

## Hébergement avec Stormkit

Stormkit génère une URL unique pour chaque déploiement. Vous pouvez prévisualiser votre application en utilisant ces liens. Plus tard, vous pouvez connecter votre domaine et publier n'importe quel déploiement afin que les utilisateurs commencent à voir cette nouvelle version de votre application. Vous pouvez également effectuer des déploiements par étapes ou des tests A/B en publiant plusieurs versions en même temps.

## Support

Si vous avez besoin d'une assistance supplémentaire, vous pouvez discuter avec les développeurs Stormkit et d'autres membres de la communauté sur [Discord](https://discord.gg/6yQWhyY).
