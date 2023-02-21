---
template: guide
title: Azure Portal
description: Comment déployer une application Nuxt sur Azure Portal ?
target: Server
category: deployment
logo:
  light: "/img/companies/square/light/Azure.svg"
  dark: "/img/companies/square/dark/Azure.svg"
---
# Déployer Nuxt sur Azure Portal

Comment déployer une application Nuxt sur Azure Portal ?

---

## Pré-requis

- Il est nécessaire de sélectionner un backend lors de la configuration du projet. Même si vous n'en avez pas besoin, sinon le site ne démarrera pas.
- Le serveur utilisera Node 8 ou supérieur

## Et si j'ai déjà un projet sans backend ?

Aucun problème. Il est facile d'ajouter un serveur express à un projet existant.

Créez un nouveau dossier appelé `server` à la racine de votre projet. Créez ensuite un fichier `index.js` dans le dossier `server` et collez ce qui suit dans `index.js` :

```js{}[server/index.js]
const express = require('express')
const consola = require('consola')
const { loadNuxt } = require('nuxt-start')
const app = express()

async function start () {
  const nuxt = await loadNuxt(isDev ? 'dev' : 'start')
  await nuxt.listen(process.env.PORT, process.env.HOST)
}

start()
```

Puis modifiez votre nuxt.config.js:

Avant :

```js
import pkg from './package'

export default {
... config
}
```

Après :

```js
module.exports = {
... config
}
```

**N'oubliez pas de supprimer les références à l'objet pkg dans la configuration.**

Et voilà !

Pour un déploiement applicatif sur le service Azure, assurez-vous de définir les deux variables d'environnement suivantes (paramètres d'application) dans Service Applicatif &rsaquo; Paramètres &rsaquo; Configuration &rsaquo; Paramètres de l'application.

```
HOST: '0.0.0.0'
NODE_ENV: 'production'
```

## Comment définir la version Node sur l'application web en tant que DevOps

Vous pouvez définir la version Node du serveur, via les paramètres d'application dans la tâche "Déployer Azure Web Service" dans le pipeline de publication.

Ajoutez ceci au champ paramètres de l'application sous "Paramètres d'application et de configuration".

```
-WEBSITE_NODE_DEFAULT_VERSION 10.16.3
```

Il est recommandé d'utiliser une version LTS.

## Artefacts

Si vous utilisez Azure DevOps et laissez le pipeline de build faire son travail et que vous souhaitez stocker des artefacts. Les fichiers qui sont précédés d'un `.` doivent être déplacés explicitement vers le dossier d'artefact. Ensuite, vous pouvez créer une archive d'artefacts et la télécharger ensuite dans votre déploiement de version.

## Exécution du serveur web

Pour le portail Azure, vous aurez besoin d'un fichier `web.config`. S'il n'est pas fourni, il en créera un par défaut. Celui-ci **ne fonctionnera pas pour Nuxt** cependant. Ajoutez un fichier web.config à votre projet. Pour la dernière version de `Nuxt`, le fichier du serveur se trouve dans `server/index.js`. Dans web.config, vous ne devez pas spécifier le chemin entier `server/index.js` mais juste `server`. Voir l'exemple web.config ci-dessous. Si vous ne le faites pas, les logs vous diront que Vue ne trouve aucune route.

```xml{}[web.config]
<?xml version="1.0" encoding="utf-8"?>
<!--
     Ce fichier de configuration est requis si iisnode est utilisé pour exécuter des processus node derrière IIS ou IIS Express. Pour plus d'informations, visitez :

     https://github.com/tjanczuk/iisnode/blob/master/src/samples/configuration/web.config
-->

<configuration>
  <system.webServer>
    <!-- Visitez https://azure.microsoft.com/en-us/blog/introduction-to-websockets-on-windows-azure-web-sites/ pour plus d'informations sur le support des WebSocket -->
    <webSocket enabled="false" />
    <handlers>
      <!-- Indique que le fichier server.js est un site Node.js à gérer par le module iisnode -->
      <add name="iisnode" path="server" verb="*" modules="iisnode"/>
    </handlers>
    <rewrite>
      <rules>
        <!-- Ne pas interférer avec les requêtes de débogage de l'inspecteur Node -->
        <rule name="NodeInspector" patternSyntax="ECMAScript" stopProcessing="true">
          <match url="^server\/debug[\/]?" />
        </rule>

        <!-- Tout d'abord, nous examinons si l'URL entrante correspond à un fichier physique dans le dossier /public -->
        <rule name="StaticContent">
          <action type="Rewrite" url="public{REQUEST_URI}"/>
        </rule>

        <!-- Toutes les autres URLs sont mappées au point d'entrée du site Node.js -->
        <rule name="DynamicContent">
          <conditions>
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="True"/>
          </conditions>
          <action type="Rewrite" url="server"/>
        </rule>
      </rules>
    </rewrite>

    <!-- Le répertoire 'bin' n'a pas de signification particulière dans Node.js et les applications peuvent y être placées -->
    <security>
      <requestFiltering>
        <hiddenSegments>
          <remove segment="bin"/>
        </hiddenSegments>
      </requestFiltering>
    </security>

    <!-- Assurez-vous que les réponses d'erreurs ne sont pas modifiées -->
    <httpErrors existingResponse="PassThrough" />

    <!--
      Vous pouvez contrôler la manière dont Node est hébergé dans IIS à l'aide des options suivantes :
        * watchedFiles: semi-colon separated list of files that will be watched for changes to restart the server
        * node_env: will be propagated to node as NODE_ENV environment variable
        * debuggingEnabled - controls whether the built-in debugger is enabled

      Voir https://github.com/tjanczuk/iisnode/blob/master/src/samples/configuration/web.config pour la liste complète des options.
    -->
    <!--<iisnode watchedFiles="web.config;*.js"/>-->
  </system.webServer>
</configuration>
```
