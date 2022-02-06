---
template: guide
title: Surge
description: Comment deployer Nuxt sur Surge ?
target: Static
category: deployment
logo:
  light: "/img/companies/square/light/Surge.svg"
  dark: "/img/companies/square/dark/Surge.svg"
---
# Déployer Nuxt avec Surge

Comment déployer Nuxt sur Surge ?

---


Nuxt vous permet d'héberger votre site web sur n'importe quel hébergeur statique tel que [Surge](https://surge.sh/).

Afin de deployer sur Surge, installez le sur votre machine :

```bash
npm install -g surge
```

Ensuite, générez votre site statique :

```bash
npm run generate
```

Cela va créer un répertoire `dist` prêt a être deployé sur un hébergeur statique.

Utilisez ensuite la commande `surge` afin de le déployer sur Surge :

```bash
surge dist/
```

Voilà!

Si vous avez un projet avec des [pages dynamiques](/docs/directory-structure/pages/#dynamic-pages), consultez la [proprieté `generate`](/docs/configuration-glossary/configuration-generate) afin d'indiquer à Nuxt comment générer ces pages dynamiques si vous utilisez Nuxt <= v2.12.

<div class="Alert">

Lorsque vous genérez un site statique avec `nuxt generate`, le [`context`](/docs/internals-glossary/context) fourni par [asyncData](/docs/features/data-fetching) ne contiendra pas `req` ni `res`.

</div>
