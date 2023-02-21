---
template: guide
title: Amazon Web Services
description: Hospedagem Estática no AWS com o S3 Amplify e CloudFront
target: Static
category: deployment
logo:
  light: "/img/companies/square/light/AWS_Light.svg"
  dark: "/img/companies/square/dark/AWS_Dark.svg"
---
# Desdobrar o Nuxt na Amazon Web Services

Hospedagem Estática no AWS com o S3 Amplify e CloudFront

---

AWS é uma abreviatura para Amazon Web Services.
S3 é a armazenagem estática deles a qual pode ser configurada para hospedagem de sítio estático. O CloudFront é a CDN (content delivery network, rede de entrega de conteúdo) deles

## AWS com o Console do Amplify

A hospedagem de uma aplicação Nuxt **estaticamente gerada** no AWS com o Console do Amplify é poderosa e barata.

Primeiro, empurre sua aplicação Nuxt para o provedor Git de sua escolha. Depois, visite o [Console do Amplify](https://console.aws.amazon.com/amplify/home). Clique no botão **GET STARTED (COMEÇAR)** por baixo do cabeçalho **Deploy (Desdobrar)** se você não tinha usado a Hospedagem do Amplify antes, caso contrário clique no botão **Connect App (Conectar Aplicação)**.

### A partir do código existente

Na página "From your existing code (A partir do código existente)", selecione o seu provedor Git e clique em **Continue (Continuar)**.

### Adicionar ramo do repositório

Na página "Add repository branch (Adicionar ramo do repositório)", selecione o seu repositório e o ramo que você quiser desdobrar. Depois clique em **Next (Seguinte)**.

### Configurar as definições de construção

Na página "Configure build settings (Configurar as definições de construção)", clique no botão `Edit (Editar)` por baixo do "Build and test settings (Configurações da construção e do teste)". Mude o seguinte:

1. Defina o comando **build (construir)** para `npm run generate`.
2. Defina a localização do `baseDirectory` para ser `dist`.

Depois as configurações devem parecer-se com isto uma vez que você terminou de editar elas:

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
    # IMPORTANTE - Por favor, verifique o seu diretório de saída do build (construir)
    baseDirectory: dist
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

Depois, clique em **Save (Guardar)** e depois em **Next (Seguinte)**.

### Revisar

Na página de "review (revisar  ou revisão)", clique em **Save and Deploy (Guardar e Desdobrar)**

Depois, sua aplicação será desdobrada. Isto pode levar alguns minutos.

Uma vez que `Provision`, `Build`, `Deploy`, e `Verify` estão verdes, clique na URL que o Console do Amplify fornece para visualizar o seu sítio.

## AWS com S3 + CloudFront

A hospedagem de uma aplicação Nuxt **estaticamente gerada** no AWS com o S3 + CloudFront é poderosa e barata.

> AWS é uma morte por 1000 cortes de papel. Se nós esquecemos de um passo, faça o favor de submeter uma PR para atualizar este documento.

### Visão geral

Nós hospedaremos super barato alguns serviços da AWS. Resumidamente:

- S3
  - nuvem de dados "bucket (balde)" para os ficheiros do nosso website
  - pode ser configurada para hospedar websites estáticos
- CloudFront
  - uma CDN (content delivery network, rede de entrega de conteúdo)
  - oferece certificados HTTPs gratuitos
  - Faz o seu sítio carregar mais rápido

Empurraremos o sítio desta maneira:

```
Nuxt Generate -> Local folder (Pasta local) -> AWS S3 Bucket -> AWS CloudFront CDN -> Browser
  [      nuxt generate       ]    [         gulp deploy          ]
  [                         deploy.sh                            ]
```

Primeiro, geraremos o sítio com `nuxt generate`(<= v2.12). Depois, usaremos o [Gulp](https://gulpjs.com/) para publicar os ficheiros para um balde (bucket) no S3 e invalidar um CDN do CloudFront.

- [gulp](https://www.npmjs.com/package/gulp)
- [gulp-awspublish](https://www.npmjs.com/package/gulp-awspublish)
- [gulp-cloudfront-invalidate-aws-publish](https://www.npmjs.com/package/gulp-cloudfront-invalidate-aws-publish)
- [concurrent-transform](https://www.npmjs.com/package/concurrent-transform) (para carregamentos paralelos)

Nosso script de desdobrar precisa destas variáveis de ambiente definidas:

- AWS_BUCKET_NAME="example.com"
- AWS_CLOUDFRONT="UPPERCASE"
- AWS_ACCESS_KEY_ID="key"
- AWS_SECRET_ACCESS_KEY="secret"

Teremos esses ficheiros:

```
deploy.sh       -  executa o `nuxt generate` e o `gulp deploy`
gulpfile.js     -  `gulp deploy` código para empurrar ficheiros para S3 e invalidar o CloudFront
```

### Configurar ele

1. Faça um balde (bucket) no S3 e configura ele para hospedar sítio estático
2. Crie uma distribuição do CloudFront
3. Configura o acesso de segurança
4. Configura o script de construção dentro do seu projeto

### AWS: Configura o seu balde (bucket) do S3 e distribuição do CloudFront

Siga este [tutorial para configurar o seu S3 e CloudFront](https://learnetto.com/blog/cloudfront-s3) para o passo um e dois.

Você deve agora ter este dado:

- AWS_BUCKET_NAME="example.com"
- AWS_CLOUDFRONT="UPPERCASE"

### AWS: Configura o acesso de segurança

Para o passo 3, precisamos criar um usuário que pode:

- Atualizar os conteúdos do balde (bucket)
- Invalidar a distribuição do CloudFront (propagar mudanças para os usuários rapidamente)

[Criar um usuário programático com esta política](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html):

> Nota: substitua 2x `example.com` com nome do seu balde (bucket) do S3 abaixo. Esta política permite empurrar para um balde especificado, e invalidar qualquer distribuição do CloudFront.

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

Depois [receba uma chave de acesso e secreta](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html).

Você deve agora ter este dado:

- AWS_ACCESS_KEY_ID="key"
- AWS_SECRET_ACCESS_KEY="secret"

### Laptop: Configure o script de construção (build) do seu projeto

4.1) Crie um script `deploy.sh`. Consulta opcional [nvm (node version manager, gestor de versão do node)](https://github.com/creationix/nvm).

```bash
#!/bin/bash

export AWS_ACCESS_KEY_ID="key"
export AWS_SECRET_ACCESS_KEY="secret"
export AWS_BUCKET_NAME="example.com"
export AWS_CLOUDFRONT="UPPERCASE"

# Carrega o nvm (node version manager, gestor de versão do node), instala o node (versão dentro do .nvmrc) e o npm instala os pacotes
[ -s "$HOME/.nvm/nvm.sh" ] && source "$HOME/.nvm/nvm.sh" && nvm use
# Npm instala se ainda tiver feito.
[ ! -d "node_modules" ] && npm install

npm run generate
gulp deploy
```

4.2) Torna `deploy.sh` executável e NÃO ENVIE PARA O GIT (o deploy.sh tem segredos dentro dele)

```bash
chmod +x deploy.sh
echo "
# Não consolide ficheiros da construção
node_modules
dist
.nuxt
.awspublish
deploy.sh
" >> .gitignore
```

4.3) Adicione o Gulp ao seu projeto e a sua linha de comando

```bash
npm install --save-dev gulp gulp-awspublish gulp-cloudfront-invalidate-aws-publish concurrent-transform
npm install -g gulp
```

4.4) Cria um ficheiro `gulpfile.js` com o script de construção (build)

```javascript
const gulp = require('gulp')
const awspublish = require('gulp-awspublish')
const cloudfront = require('gulp-cloudfront-invalidate-aws-publish')
const parallelize = require('concurrent-transform')

// https://docs.aws.amazon.com/cli/latest/userguide/cli-environment.html

const config = {
  // Obrigatório
  params: {
    Bucket: process.env.AWS_BUCKET_NAME
  },
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    signatureVersion: 'v3'
  },

  // Opcional
  deleteOldVersions: false, // NÃO PARA PRODUÇÃO
  distribution: process.env.AWS_CLOUDFRONT, // ID da distribuição do CloudFront
  region: process.env.AWS_DEFAULT_REGION,
  headers: {
    /* 'Cache-Control': 'max-age=315360000, no-transform, public', */
  },

  // Padrões Sensíveis - ignore com o gitignore esses ficheiros e diretórios
  distDir: 'dist',
  indexRootPath: true,
  cacheFileName: '.awspublish',
  concurrentUploads: 10,
  wait: true // aguarde a invalidação do CloudFront terminar (leva de 30-60 segundos)
}

gulp.task('deploy', function () {
  // crie uma nova publicação usando as opções do S3
  // http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#constructor-property
  const publisher = awspublish.create(config)

  let g = gulp.src('./' + config.distDir + '/**')
  // a publicação adicionará o Content-Length, Content-Type e o headers especificados acima
  // Se não for especificado ele definirá x-amz-acl para public-read por padrão
  g = g.pipe(
    parallelize(publisher.publish(config.headers), config.concurrentUploads)
  )

  // Invalide o CDN
  if (config.distribution) {
    console.log('Configured with CloudFront distribution')
    g = g.pipe(cloudfront(config))
  } else {
    console.log(
      'No CloudFront distribution configured - skipping CDN invalidation'
    )
  }

  // Eliminar ficheiros removidos
  if (config.deleteOldVersions) {
    g = g.pipe(publisher.sync())
  }
  // criar um ficheiro de cache para acelerar os carregamentos consecutivos.
  g = g.pipe(publisher.cache())
  // imprima atualizações do carregamento no console
  g = g.pipe(awspublish.reporter())
  return g
})
```

4.5) Desdobrar e depurar

Execute isto:

```bash
./deploy.sh
```

Você deve receber uma saída semelhante a esta:

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

Note que o `CloudFront invalidation created: XXXX` é a única saída da invalidação do CloudFront do pacote npm. Se você não ver isso, significa que não está funcionando.
