---
title: Déployer Nuxt sur Netlify
description: Comment déployer Nuxt.js sur Netlify ?
menu: Netlify
target: Static
category: deployment
position: 112
---

Le déploiement sur [Netlify](https://www.netlify.com) est une option simple et rapide afin de mettre en ligne un site **généré statiquement** avec Nuxt.js.

Le cœur du processus utilise la commande `nuxt generate`(<= v2.12) pendant le déploiement pour créer une version statique de votre application Nuxt.js dans un répertoire `dist`. Le contenu de ce répertoire est ensuite déployé sur une URL de production.

<div class="Promo__Video">
  <a href="https://explorers.netlify.com/learn/get-started-with-nuxt/nuxt-generate-and-deploy" target="_blank">
    <p class="Promo__Video__Icon">
      Watch a free lesson on <strong>How to deploy Nuxt.js to Netlify</strong> on Jamstack Explorers
    </p>
  </a>
</div>

## Commencer

Appuyez sur le bouton _"New site from Git"_ du tableau de bord Netlify.

Authentifiez-vous auprès de votre hébergeur Git puis sélectionnez un repository à déployer et continuez.

Vous devriez atterrir à l'étape 3: _"Build options, and deploy!"_

## Configurer

### Pour un site généré statiquement

Assurez-vous que vous avez `target: 'static'` dans votre `nuxt.config`.

1. **Branche à déployer:** `main`, ou la branche que vous préférez
1. **Commande de construction:** `npm run generate`
1. **Répertoire de publication:** `dist`

### Pour le rendu côté client uniquement

Assurez-vous que vous avez `target: 'static'` et `ssr: false` dans votre `nuxt.config`.

1. **Branche à déployer:** `main`, ou la branche que vous préférez
1. **Commande de construction:** `npm run generate`
1. **Répertoire de publication:** `dist`

Pour le rendu côté client, il y a un problème d'actualisation car par défaut sur Netlify le site redirige vers _"404 not found"_. Pour toutes les pages qui ne sont pas générées, elles reviendront en mode SPA, puis si vous actualisez ou partagez ce lien, vous obtiendrez la page 404 de Netlify. C'est parce que les pages qui ne sont pas générées n'existent pas réellement. En redirigeant vers le 404.html, Nuxt rechargera correctement votre page dans SPA fallback.

Le moyen le plus simple de résoudre ce problème est d'ajouter une [propriété generate](/docs/2.x/configuration-glossary/configuration-generate#fallback) dans votre `nuxt.config` et en définissant `fallback: true`. Ainsi, il reviendra au 404.html généré en mode SPA au lieu de la page 404 de Netlify.

```js
export default {
  generate: {
    fallback: true
  }
}
```

Si toutefois vous souhaitez appliquer automatiquement les en-têtes et les redirections de l'application, il existe un module pour cela, particulièrement utile pour les headers/redirects custom (dans un \_headers ou \_redirects):

[netlify-files-module](https://github.com/nuxt-community/netlify-files-module)

> Pour plus d'informations sur les redirections Netlify, consultez la [documentation Netlify](https://www.netlify.com/docs/redirects/#rewrites-and-proxying).

> Pour une référence simple sur les redirections Netlify, lisez cet [article de blog](https://www.netlify.com/blog/2019/01/16/redirect-rules-for-all-how-to-configure-redirects-for-your-static-site) by Divya Sasidharan

> En option, vous pouvez ajouter des variables ENV supplémentaires via le bouton _"Advanced"_. Celles-ci peuvent être utiles pour échanger des informations d'identification d'API alternatives, etc. Netlify fournit également des [variables ENV par défaut](https://www.netlify.com/docs/build-settings/#build-environment-variables) qui peuvent être lues par votre application Nuxt.js au moment de la construction.

Cliquez sur _"Deploy site"_ pour déclencher immédiatement un déploiement. Votre site Netlify recevra une URL aléatoire et sera déployé à l'aide de la commande `nuxt generate`.

Voilà ! Votre application Nuxt.js est désormais hébergée sur Netlify !
