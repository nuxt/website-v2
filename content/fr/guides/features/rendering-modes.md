---
title: Les modes de rendu
description: Les modes de rendu
position: 1
category: features
---

## Universel

`mode: 'universal'`: Application isomorphique (rendu côté serveur ou génération de site statique).

Le mode universel est utilisé pour le rendu côté serveur ainsi que pour les sites statiques.

Les sites statiques sont très similaires aux applications générées côté-serveur avec pour différence principale que les sites statiques sont générés lors du build, ce qui fait qu'il n'y a pas besoin de serveur par la suite. La navigation d'une page à une autre se fait côté client.

Si nous utilisons le mode de render côté serveur (SSR), le site va requêter le serveur à chaque fois que le user veut accéder à une page, il y aura donc besoin d'un serveur pour générer la page et ce pour chaque requête.

Se référer aux [cibles de déploiement](/guides/features/deployment-targets) pour plus d'informations sur l'hébergement en mode statique et serveur.

```js{}[nuxt.config.js]
export default {
  mode: 'universal' // par défaut: universel
}
```

<base-alert type="info">

Nous n'avons pas besoin d'ajouter cela à notre configuration nuxt afin d'être en mode universel car c'est déjà le mode par défaut.

</base-alert>

## SPA

`mode: 'spa'`: Pas de render côté serveur, seulement du côté client.

Avec les Single Page Applications il n'y a pas de render côté serveur, seulement du côté client. Render côté client signifie que le navigateur va faire le rendu grâce au JavaScript. Au lieu d'avoir le contenu dans un fichier HTML, on va juste avoir un document HTML basique avec un fichier JavaScript qui va render le reste du site grâce au navigateur.

```js{}[nuxt.config.js]
export default {
  mode: 'spa'
}
```

<base-alert type="next">

Plus d'informations sur la [propriété mode](/guides/configuration-glossary/configuration-mode).

</base-alert>
