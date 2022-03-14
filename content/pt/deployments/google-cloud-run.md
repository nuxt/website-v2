---
template: guide
title: Google Cloud Run
description: Como desdobrar o Nuxt no Google Cloud Run?
target: Server
category: deployment
logo:
  light: "/img/companies/square/light/Google_Cloud_run.svg"
  dark: "/img/companies/square/dark/Google_Cloud_run.svg"
---
# Desdobrar o Nuxt no Google Cloud Run

Como desdobrar o Nuxt no Google Cloud Run?

---

O [Google Cloud Run](https://cloud.google.com/run) é uma plataforma de computação completamente gerida para desdobramento e escalamento de aplicações rapidamente e seguramente adicionadas em contentores.

Neste guia, nós simplesmente carregamos a pasta inteira do projeto para o Google Cloud Build com um `Dockerfile`. Depois de carregar, o Cloud Build gerará automaticamente um contentor. Depois nós desdobraremos este contentor para o Google Cloud Run o qual iniciará ele com o script `start` dentro do nosso `package.json`.

## Pontapé de Saída

Certifique-se de que você tem uma conta no Google Cloud, um projeto e os acessos como editor no Cloud Build e no Cloud Run. Além disso, certifique-se de descarregar e instalar a interface de linha de comando do Cloud SDK a partir do Google como explicado [aqui](https://cloud.google.com/sdk/) e inicie a sessão com a sua conta do Google Cloud. Se você não quiser descarregar o Cloud SDK esteja ciente de que você pode usar a interface de linha de comando `gcloud` a partir do Google Cloud Console.

Agora, vamos fazer algumas verificações!

Se a API do Cloud Build e a API do Cloud Run não estiverem ativadas, ative elas:

```bash
# Ativando o Cloud Build
$ gcloud services enable cloudbuild.googleapis.com

# Ativando o Cloud Run
$ gcloud services enable run.googleapis.com
```

Vá dentro do diretório da sua aplicação e instale as dependências:

```bash
# Para os usuários do yarn
$ yarn

# Para os usuários do npm
$ npm install
```

Inicie a aplicação localmente:

```bash
# Para os usuários do yarn
$ yarn dev

# Para os usuários do npm
$ npm run dev
```

Verifique se tudo está a funcionar.

## Adicionar a sua aplicação em um contentor

Agora, nós criaremos um contentor com o Cloud Build.

Você precisa adicionar a sua aplicação Nuxt um ficheiro `Dockerfile`. Crie um novo ficheiro com o nome `Dockerfile` dentro da raiz do diretório do seu projeto e adicione o seguinte conteúdo:

Para os usuários do yarn:

```Dockerfile
FROM node:14

WORKDIR /usr/src/app

COPY . ./
RUN yarn

EXPOSE 8080

ENV HOST=0.0.0.0
ENV PORT=8080

RUN yarn build

CMD [ "yarn", "start" ]
```

Para os usuários do npm:

```Dockerfile
FROM node:14

WORKDIR /usr/src/app

COPY . ./
RUN npm install

EXPOSE 8080

ENV HOST=0.0.0.0
ENV PORT=8080

RUN npm run build

CMD [ "npm", "run", "start" ]
```

Execute o seguinte comando para iniciar o processo de construção:

`gcloud builds submit --tag gcr.io/<YOUR_GOOGLE_CLOUD_PROJECT_ID>/my-nuxt-app-name:1.0.0 .`

!Atenção: se você quiser implementar entrega contínuas (CD) ou ficheiros de configurações `.env`, você terá de usar um [ficheiro de configuração do Cloud Build](https://cloud.google.com/cloud-build/docs/build-config).

## Desdobrando a sua aplicação no Cloud Run

Execute o seguinte comando para desdobrar a sua aplicação:

`gcloud run deploy --image=gcr.io/<YOUR_GOOGLE_CLOUD_PROJECT_ID>/my-nuxt-app-name:1.0.0 --platform managed --port 3000`

Permita invocações não autenticadas se você quiser definir um acesso público.

Esteja ciente de que as aplicações do Cloud Run terão um valor de concorrência padrão de 80 (cada instância do contentor manipulará até 80 requisições por vez). Você pode especificar o valor de concorrência esta maneira:

`gcloud run deploy --image=gcr.io/<YOUR_GOOGLE_CLOUD_PROJECT_ID>/my-nuxt-app-name:1.0.0 --platform managed --port 3000 --concurrency <YOUR_CONCURRENCY_VALUE>`

Execute o seguinte comando para verificar se o desdobramento foi criado com sucesso:

`gcloud run services list --platform managed`

Uma lista de serviços do Cloud Run é exibido, clique na URL do desdobramento e aprecie o resultado!
