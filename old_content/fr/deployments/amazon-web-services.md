---
template: guide
title: Amazon Web Services
description: Hébergement statique sur AWS avec S3 Amplify et CloudFront
target: Static
category: deployment
logo:
  light: "/img/companies/square/light/AWS_Light.svg"
  dark: "/img/companies/square/dark/AWS_Dark.svg"
---

# Déployer Nuxt sur Amazon Web Services

Hébergement statique sur AWS avec S3 Amplify et CloudFront

---


AWS signifie Amazon Web Services.
S3 est l'outil de stockage statique qui peut être configuré pour l'hébergement de site statique. CloudFront est l'outil de CDN (réseau de diffusion de contenu).

## AWS avec la console Amplify

L'hébergement d'une application Nuxt **générée statiquement** sur AWS avec la console Amplify est puissant et bon marché.

Tout d'abord, poussez votre application Nuxt vers le fournisseur Git de votre choix. Ensuite, visitez la [console Amplify](https://console.aws.amazon.com/amplify/home). Cliquez sur le bouton **COMMENCER** sous l'en-tête **Déployer** si vous n'avez jamais utilisé l'hébergement Amplify auparavant, sinon cliquez sur le bouton **Connecter l'application**.

### À partir de votre code existant

Sur la page "À partir de votre code existant", sélectionnez votre fournisseur Git et cliquez sur **Continuer**.

### Ajouter une branche sur le dépôt

Sur la page "Ajouter une branche de référentiel", sélectionnez votre dépôt et la branche que vous souhaitez déployer. Ensuite, cliquez sur **Suivant**.

### Configurer les paramètres de génération

Sur la page "Configurer les paramètres de génération", cliquez sur le bouton `Modifier` sous "Paramètres de génération et de test". Modifiez les éléments suivants :

1. Définissez les commandes **build** sur `npm run generate`.
2. Définissez l'emplacement `baseDirectory` sur `dist`.

Les paramètres devraient ressembler à ceci une fois que vous avez terminé de les modifier :

```yml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - yarn install
    build:
      commands:
        - npm run generate
  artifacts:
    # IMPORTANT - Veuillez vérifier votre répertoire de sortie de build
    baseDirectory: dist
    files:
      - "**/*"
  cache:
    paths:
      - node_modules/**/*
```

Ensuite, cliquez sur **Enregistrer** puis **Suivant**.

### Révision

Sur la page de révision, cliquez sur **Enregistrer et déployer**.

Ensuite, votre application se déploiera. Cela peut prendre quelques minutes.

Une fois que `Provision`, `Construction`, `Déployer`, et `Vérifier` sont verts, cliquez sur l'URL fournie par la console Amplify pour afficher votre site.

## AWS avec S3 + CloudFront

L'hébergement d'une application Nuxt **générée statiquement** sur AWS avec S3 + CloudFront est puissant et bon marché.

> AWS est notoirement difficile à configurer. Si nous avons manqué une étape, veuillez soumettre une Pull Request pour mettre à jour ce document.

### Aperçu

Nous allons héberger une application super bon marché avec certains services AWS. Brièvement:

- S3
  - "bucket" de données cloud pour les fichiers de notre site web
  - peut être configuré pour héberger des sites web statiques
- CloudFront
  - un CDN (réseau de diffusion de contenu)
  - offre des certificats HTTPS gratuits
  - rend le chargement de votre site plus rapide

Nous allons déployer le site comme ceci :

```
Nuxt Generate -> Local folder -> AWS S3 Bucket -> AWS CloudFront CDN -> Browser
  [      nuxt generate       ]    [         gulp deploy          ]
  [                         deploy.sh                            ]
```

Tout d'abord, nous allons générer le site avec `nuxt generate` (<= v2.12). Ensuite, nous utiliserons [Gulp](https://gulpjs.com/) pour publier les fichiers dans un compartiment S3 et invalider le CDN CloudFront.

- [gulp](https://www.npmjs.com/package/gulp)
- [gulp-awspublish](https://www.npmjs.com/package/gulp-awspublish)
- [gulp-cloudfront-invalidate-aws-publish](https://www.npmjs.com/package/gulp-cloudfront-invalidate-aws-publish)
- [concurrent-transform](https://www.npmjs.com/package/concurrent-transform) (pour les téléchargements en parallèles)

Notre script de déploiement a besoin de ces variables d'environnement définies :

- AWS_BUCKET_NAME="example.com"
- AWS_CLOUDFRONT="UPPERCASE"
- AWS_ACCESS_KEY_ID="key"
- AWS_SECRET_ACCESS_KEY="secret"

Nous aurons ces fichiers :

```
deploy.sh       -  run `nuxt generate` et `gulp deploy`
gulpfile.js     -  `gulp deploy` pour pousser les fichiers vers S3 et invalider CloudFront
```

### Configuration

1. Créez un "bucket" S3 et configurez-le pour l'hébergement de site statique
2. Créez une distribution CloudFront
3. Configurez les accès de sécurité
4. Configurez le script de construction dans votre projet

### AWS: Configurez votre bucket S3 et votre distribution CloudFront

Veuillez suivre le [tutoriel pour configurer votre S3 et CloudFront](https://learnetto.com/blog/cloudfront-s3) pour les étapes une et deux.

Maintenant, vous devriez avoir ces données :

- AWS_BUCKET_NAME="example.com"
- AWS_CLOUDFRONT="UPPERCASE"

### AWS: Configurer l'accès de sécurité

Pour l'étape 3, nous devons créer un utilisateur qui pourra :

- Mettre à jour le contenu de votre bucket
- Invalider la distribution CloudFront (pour propager les modifications aux utilisateurs plus rapidement)

[Créer un utilisateur de façon programmatique avec cette stratégie](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html):

> REMARQUE: remplacez 2x `example.com` par le nom de votre bucket S3 ci-dessus. Cette stratégie vous permettra de déployer vers votre bucket et d'invalider toute la distribution CloudFront.

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["s3:ListBucket"],
      "Resource": ["arn:aws:s3:::example.com"]
    },
    {
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:PutObjectAcl",
        "s3:GetObject",
        "s3:GetObjectAcl",
        "s3:DeleteObject",
        "s3:ListMultipartUploadParts",
        "s3:AbortMultipartUpload"
      ],
      "Resource": ["arn:aws:s3:::example.com/*"]
    },
    {
      "Effect": "Allow",
      "Action": [
        "cloudfront:CreateInvalidation",
        "cloudfront:GetInvalidation",
        "cloudfront:ListInvalidations",
        "cloudfront:UnknownOperation"
      ],
      "Resource": "*"
    }
  ]
}
```

Ensuite, il faudra [obtenir une clé d'accès et une clé secrète](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html).

Vous devriez maintenant avoir ces données :

- AWS_ACCESS_KEY_ID="key"
- AWS_SECRET_ACCESS_KEY="secret"

### En local : configurez le script de génération de votre projet

4.1) Créez un script `deploy.sh`. Voir davantage sur [nvm (node version manager)](https://github.com/creationix/nvm).

```bash
#!/bin/bash

export AWS_ACCESS_KEY_ID="key"
export AWS_SECRET_ACCESS_KEY="secret"
export AWS_BUCKET_NAME="example.com"
export AWS_CLOUDFRONT="UPPERCASE"

# Load nvm (node version manager), install node (version in .nvmrc), and npm install packages
[ -s "$HOME/.nvm/nvm.sh" ] && source "$HOME/.nvm/nvm.sh" && nvm use
# Npm install if not already.
[ ! -d "node_modules" ] && npm install

npm run generate
gulp deploy
```

4.2) Rendez `deploy.sh` exécutable et NE L'AJOUTEZ PAS DANS GIT (deploy.sh contient des secrets).

```bash
chmod +x deploy.sh
echo "
# Don't commit build files
node_modules
dist
.nuxt
.awspublish
deploy.sh
" >> .gitignore
```

4.3) Ajoutez Gulp à votre projet et à votre ligne de commande.

```bash
npm install --save-dev gulp gulp-awspublish gulp-cloudfront-invalidate-aws-publish concurrent-transform
npm install -g gulp
```

4.4) Créer un fichier de script `gulpfile.js` avec la construction suivante :

```javascript
const gulp = require('gulp')
const awspublish = require('gulp-awspublish')
const cloudfront = require('gulp-cloudfront-invalidate-aws-publish')
const parallelize = require('concurrent-transform')

// https://docs.aws.amazon.com/cli/latest/userguide/cli-environment.html

const config = {
  // Obligatoire
  params: {
    Bucket: process.env.AWS_BUCKET_NAME
  },
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    signatureVersion: 'v3'
  },

  // Optionnel
  deleteOldVersions: false, // PAS POUR PRODUCTION
  distribution: process.env.AWS_CLOUDFRONT, // ID de la distribution CloudFront
  region: process.env.AWS_DEFAULT_REGION,
  headers: {
    /* 'Cache-Control': 'max-age=315360000, no-transform, public', */
  },

  // Valeurs par défaut sensibles - gitignore ces fichiers et répertoires
  distDir: 'dist',
  indexRootPath: true,
  cacheFileName: '.awspublish',
  concurrentUploads: 10,
  wait: true // attendre la fin de l'invalidation CloudFront (environ 30-60 secondes)
}

gulp.task('deploy', function () {
  // créer un nouvel éditeur à l'aide des options S3
  // http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#constructor-property
  const publisher = awspublish.create(config)

  let g = gulp.src('./' + config.distDir + '/**')
  // l'éditeur ajoutera Content-Length, Content-Type et les en-têtes spécifiés ci-dessus
  // S'il n'est pas spécifié, il définira x-amz-acl en lecture publique par défaut
  g = g.pipe(
    parallelize(publisher.publish(config.headers), config.concurrentUploads)
  )

  // Invalidate CDN
  if (config.distribution) {
    console.log('Configured with CloudFront distribution')
    g = g.pipe(cloudfront(config))
  } else {
    console.log(
      'No CloudFront distribution configured - skipping CDN invalidation'
    )
  }

  // Retirer les fichiers supprimés
  if (config.deleteOldVersions) {
    g = g.pipe(publisher.sync())
  }
  // créer un fichier cache pour accélérer les téléchargements consécutifs
  g = g.pipe(publisher.cache())
  // affiche les mises à jour de téléchargement sur la console
  g = g.pipe(awspublish.reporter())
  return g
})
```

4.5) Déployer et déboguer

Exécutez :

```bash
./deploy.sh
```

Vous devriez obtenir une sortie similaire à celle-ci :

```bash
$ ./deploy.sh

Found '/home/michael/scm/example.com/www/.nvmrc' with version <8>
Now using node v8.11.2 (npm v5.6.0)

> example.com@1.0.0 generate /home/michael/scm/example.com/www
> nuxt generate

  nuxt:generate Generating... +0ms
  nuxt:build App root: /home/michael/scm/example.com/www +0ms
  nuxt:build Generating /home/michael/scm/example.com/www/.nuxt files... +0ms
  nuxt:build Generating files... +36ms
  nuxt:build Generating routes... +10ms
  nuxt:build Building files... +24ms
  ████████████████████ 100%

Build completed in 7.009s



 DONE  Compiled successfully in 7013ms                                                                                                                                     21:25:22

Hash: 421d017116d2d95dd1e3
Version: webpack 3.12.0
Time: 7013ms
                                   Asset     Size  Chunks             Chunk Names
     pages/index.ef923f795c1cecc9a444.js  10.6 kB       0  [emitted]  pages/index
 layouts/default.87a49937c330bdd31953.js  2.69 kB       1  [emitted]  layouts/default
pages/our-values.f60c731d5c3081769fd9.js  3.03 kB       2  [emitted]  pages/our-values
   pages/join-us.835077c4e6b55ed1bba4.js   1.3 kB       3  [emitted]  pages/join-us
       pages/how.75f8cb5bc24e38bca3b3.js  2.59 kB       4  [emitted]  pages/how
             app.6dbffe6ac4383bd30a92.js   202 kB       5  [emitted]  app
          vendor.134043c361c9ad199c6d.js  6.31 kB       6  [emitted]  vendor
        manifest.421d017116d2d95dd1e3.js  1.59 kB       7  [emitted]  manifest
 + 3 hidden assets
Hash: 9fd206f4b4e571e9571f
Version: webpack 3.12.0
Time: 2239ms
             Asset    Size  Chunks             Chunk Names
server-bundle.json  306 kB          [emitted]
  nuxt: Call generate:distRemoved hooks (1) +0ms
  nuxt:generate Destination folder cleaned +10s
  nuxt: Call generate:distCopied hooks (1) +8ms
  nuxt:generate Static & build files copied +7ms
  nuxt:render Rendering url /our-values +0ms
  nuxt:render Rendering url /how +67ms
  nuxt:render Rendering url /join-us +1ms
  nuxt:render Rendering url / +0ms
  nuxt: Call generate:page hooks (1) +913ms
  nuxt: Call generate:page hooks (1) +205ms
  nuxt: Call generate:page hooks (1) +329ms
  nuxt: Call generate:page hooks (1) +361ms
  nuxt:generate Generate file: /our-values/index.html +2s
  nuxt:generate Generate file: /how/index.html +0ms
  nuxt:generate Generate file: /join-us/index.html +0ms
  nuxt:generate Generate file: /index.html +0ms
  nuxt:render Rendering url / +2s
  nuxt: Call generate:done hooks (1) +4ms
  nuxt:generate HTML Files generated in 11.8s +5ms
  nuxt:generate Generate done +0ms
[21:25:27] Using gulpfile ~/scm/example.com/www/gulpfile.js
[21:25:27] Starting 'deploy'...
Configured with CloudFront distribution
[21:25:27] [cache]  README.md
[21:25:27] [cache]  android-chrome-192x192.png
[21:25:27] [cache]  android-chrome-512x512.png
[21:25:27] [cache]  apple-touch-icon.png
[21:25:27] [cache]  browserconfig.xml
[21:25:27] [cache]  favicon-16x16.png
[21:25:27] [cache]  favicon-32x32.png
[21:25:27] [cache]  favicon.ico
[21:25:27] [cache]  favicon.svg
[21:25:27] [cache]  logo-branches.svg
[21:25:27] [cache]  logo-small.svg
[21:25:27] [cache]  logo.svg
[21:25:27] [cache]  mstile-150x150.png
[21:25:27] [cache]  og-image.jpg
[21:25:27] [cache]  safari-pinned-tab.svg
[21:25:27] [cache]  site.webmanifest
[21:25:28] [create] _nuxt/manifest.421d017116d2d95dd1e3.js
[21:25:29] [update] 200.html
[21:25:30] [create] videos/flag.jpg
[21:25:30] [create] _nuxt/vendor.134043c361c9ad199c6d.js
[21:25:34] [create] videos/flag.mp4
[21:25:34] [cache]  _nuxt/pages/how.75f8cb5bc24e38bca3b3.js
[21:25:34] [cache]  _nuxt/pages/join-us.835077c4e6b55ed1bba4.js
[21:25:34] [cache]  _nuxt/pages/our-values.f60c731d5c3081769fd9.js
[21:25:36] [update] our-values/index.html
[21:25:36] [create] _nuxt/layouts/default.87a49937c330bdd31953.js
[21:25:36] [create] _nuxt/app.6dbffe6ac4383bd30a92.js
[21:25:37] [create] _nuxt/pages/index.ef923f795c1cecc9a444.js
[21:25:38] [update] join-us/index.html
[21:25:38] [update] how/index.html
[21:25:43] [create] videos/flag.webm
[21:25:43] [update] index.html
[21:25:43] CloudFront invalidation created: I16NXXXXX4JDOA
[21:26:09] Finished 'deploy' after 42 s
```

Notez que `l'invalidation CloudFront créée: XXXX` est la seule sortie du package npm d'invalidation CloudFront. Si vous ne voyez pas cette ligne, c'est que cela n'a pas fonctionné.
