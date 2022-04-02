---
template: guide
title: Azure Static Web Apps
description: Comment déployer une application Nuxt sur Azure Static Web Apps ?
target: Static
category: deployment
logo:
  light: "/img/companies/square/light/Azure.svg"
  dark: "/img/companies/square/dark/Azure.svg"
---
# Déployer Nuxt sur Azure Static Web App

Comment déployer une application Nuxt sur Azure Static Web Apps ?

---

Vous pouvez maintenant déployer vos sites statiques sur Azure à l'aide d'applications web statiques. Vous devrez avoir votre application dans GitHub car les applications web statiques Azure exploitent les actions GitHub qui vous permettent de reconstruire votre site statique à chaque commit poussée sur git.

Il y a 2 choses que vous devez configurer dans le but de déployer votre application sur des applications web statiques Azure. La première consiste à modifier la commande de build afin qu'Azure puisse lire la commande de build à partir de votre package.json et pour les sites statiques, nous devons utiliser la commande generate.

`package.json`

```json
build: "nuxt generate"
```

La seconde consiste à ajouter un fichier `routes.json` qui est important pour capturer les pages 404 personnalisées et les pages de secours du SPA.

`static/routes.json`

```jsx
{
 "routes": [],
 "platformErrorOverrides": [
   {
    "errorType": "NotFound",
    "serve": "/200.html",
    "statusCode": 200
   }
 ]
}
```

Si vous souhaitez tester le déploiement sur des applications Web statiques Azure, nous avons créé une petite application de démonstration entièrement installée et configurée. Vous aurez juste besoin de le cloner et de l'ajouter à votre dépôt GitHub. Vous pouvez ensuite suivre les étapes de - Déploiement de votre application avec Azure Static Web Apps.

[Cloner l'application de démonstration](https://github.com/debs-obrien/nuxtjs-azure-static-app)

## Déploiement de votre application avec Azure Static Web Apps

### Étape 1 : **Créez des applications Web statiques Azure**

1. Accédez au [Portail Azure](https://portal.azure.com/).
2. Cliquez sur **Créer une ressource**, puis recherchez **Application statique** et sélectionnez-la.
3. Sélectionnez un abonnement dans la liste déroulante *Abonnement* ou utilisez celui par défaut.
4. Cliquez sur le lien **Nouveau** sous la liste déroulante *Groupe de ressources*. Dans *Nom du nouveau groupe de ressources*, saisissez **nuxt** et cliquez sur **OK**
5. Fournissez un nom unique pour votre application dans la zone de texte **Nom**. Les caractères valides incluent `a-z`, `A-Z`, `0-9` et `-`. Le nom de l'application est utilisé pour identifier l'application dans votre liste de ressources, c'est donc une bonne idée de nommer votre application en utilisant le nom de votre projet.
6. Dans la liste déroulante *Région*, choisissez une région la plus proche de vous.
![Configuration des ressources et de l'application du portail Azure](https://user-images.githubusercontent.com/13063165/82118135-71891b00-9775-11ea-8284-aa94d17a3bc3.png)

### Étape 2: **Ajouter un dépôt GitHub**

L'application statique Azure App Service a besoin d'accéder au dépôt où réside votre application Nuxt afin qu'elle puisse déployer automatiquement des commits :

1. Cliquez sur le bouton **Se connecter avec GitHub**
2. Sélectionnez l'**Organisation** sous laquelle vous avez créé le dépôt pour votre projet Nuxt. Il peut également s'agir de votre nom d'utilisateur GitHub.
3. Recherchez le nom du dépôt que vous avez créé précédemment et sélectionnez-le.
4. Choisissez **master** comme branche dans la liste déroulante *Branche*.

![Comment ajouter sur github](https://user-images.githubusercontent.com/13063165/82118359-38ea4100-9777-11ea-9c5e-7ba5c4da708e.png)

### Étape 3: **Configurer le processus de construction**

Il y a des choses que l'application statique Azure App Service peut deviner - des choses comme l'installation automatique des modules npm et l'exécution de `npm run build`. Il y a aussi des choses sur lesquelles vous devez être explicite, comme le dossier dans lequel l'application statique sera copiée après la construction afin que le site statique puisse être servi à partir de là.

1. Cliquez sur l'onglet **Construction** pour configurer le dossier de sortie statique.
2. Saisissez **dist** dans la zone de texte *Emplacement de l'artefact de l'application*.

![Configuration du portail Azure](https://user-images.githubusercontent.com/13063165/82118277-71d5e600-9776-11ea-88ad-48cf0793905d.png)

### Étape 4: **Révisez et créez**

1. Cliquez sur le bouton **Réviser + Créer** pour vérifier que tous les détails sont corrects.
2. Cliquez sur **Créer** pour lancer la création de la ressource et également provisionner une action GitHub pour le déploiement.
3. Une fois le déploiement terminé, cliquez sur **Aller à la ressource**

![Message de fin de déploiement du portail Azure](https://user-images.githubusercontent.com/13063165/82118390-67681c00-9777-11ea-9778-671dc768393e.png)

4. Sur l'écran des ressources, cliquez sur le lien *URL* pour ouvrir votre application déployée.

![resource screen with url to your deployed app](https://user-images.githubusercontent.com/13063165/82118042-d001c980-9774-11ea-94f5-57d995aa5391.png)

Félicitations, votre site statique est désormais hébergé sur des applications web statiques Azure.

## Reconstruisez votre application statique en surveillant votre déploiement

Maintenant, tout ce que vous avez à faire est de modifier votre code et de pousser vos modifications. Pousser vos modifications activera une action GitHub et votre nouveau site sera automatiquement reconstruit. Vous pouvez surveiller le flux de travail en cliquant sur l'onglet actions dans votre projet GitHub et inspecter davantage en sélectionnant le dernier commit que vous avez effectué. Vous pouvez ensuite regarder pour voir quand le déploiement est terminé ou inspecter le journal si vous avez des erreurs de déploiement.

![Écran d'action GitHub](https://user-images.githubusercontent.com/13063165/82118249-34715880-9776-11ea-92e2-dbd21bbf7cb6.png)

## Le saviez-vous ?

### **Comment gérer les routes dynamiques**

Si vous travaillez avec des pages dynamiques telles que `_id.vue`, vous devrez alors ajouter ces routes à la propriété generate dans votre configuration nuxt.

[Voir la documentation sur la façon de gérer les routes dynamiques.](/docs/configuration-glossary/configuration-generate#routes)

<div class="Alert">
Si vous utilisez Nuxt 2.13+, vous n'aurez pas à vous en soucier car il existe un robot d'exploration intégré qui explorera toutes les dynamiques en explorant les liens de votre site.
</div>

### Comment ajouter une page d'erreur

Dans le but de ne pas avoir la page 404 par défaut, vous pouvez créer un fichier `error.vue` dans votre dossier layouts.

### Comment ajouter une solution de repli

Si vous souhaitez que certaines pages ne soient pas générées mais agissent comme une application à page unique, vous pouvez le faire en utilisant la propriété generate.excludes dans votre fichier nuxt.config.

[Voir la documentation sur les solutions de repli du SPA](/docs/configuration-glossary/configuration-generate#exclude)
