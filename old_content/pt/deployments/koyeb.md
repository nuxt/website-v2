---
template: guide
title: Koyeb
description: Desdobrar o Nuxt na Plataforma Serverless da Koyeb com Docker
target: Server
category: deployment
logo:
  light: "/img/companies/square/light/Koyeb.svg"
  dark: "/img/companies/square/dark/Koyeb.svg"
---
# Desdobrar o Nuxt na Plataforma Serverless da Koyeb

Desdobrar o Nuxt na Plataforma Serverless da Koyeb com Docker

---

A [Koyeb](https://www.koyeb.com) é uma plataforma serverless amigável ao desenvolvedor para desdobrar aplicações globalmente. A plataforma permite você ininterruptamente executar contentores do Docker, aplicações web, APIs com desdobramento baseado no Git, escalamento nativo automático, uma rede de limite global, e serviço de coordenação e descoberta embutido.

Neste guia, nós mostraremos como dockerizar e desdobrar uma aplicação Nuxt na plataforma Koyeb.

> A Koyeb permite você desdobrar contentores do Docker a partir do registo de sua escolha. Neste guia nós usamos o Docker Hub para guardar nossa imagem mas você está livre de usar o [Registo de Contentor do GitHub](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry), o [Registo de Contentor do GitLab](https://docs.gitlab.com/ee/user/packages/container_registry/) ou qualquer outro provedor de registo de contentor.

## Requisitos

Para seguir com êxito e completar este guia, você precisa:

1. Um projeto Nuxt para desdobrar. Você pode usar o [create-nuxt-app](https://github.com/nuxt/create-nuxt-app) para criar um projeto Nuxt e começar.
2. Uma [conta no Koyeb](https://app.koyeb.com) para desdobrar e executar a aplicação Nuxt dockerizada
3. Uma conta no [Docker Hub](https://hub.docker.com/) para empurrar a imagem do Docker e desdobrar ela no Koyeb

## Começar

Dentro do diretório da sua aplicação Nuxt execute o seguinte comando para instalar as dependências:

```bash
yarn
```

Uma vez que as dependências estão instaladas, execute a sua aplicação e certifique que tudo está funcionando corretamente:

```bash
yarn dev
```

## Dockerizar a sua aplicação

Para Dockerizar a sua aplicação Nuxt, você precisa criar um ficheiro `Dockerfile` dentro do diretório do seu projeto contendo o conteúdo abaixo:

```dockerfile
FROM node:lts as builder

WORKDIR /app

COPY . .

RUN yarn install \
  --prefer-offline \
  --frozen-lockfile \
  --non-interactive \
  --production=false

RUN yarn build

RUN rm -rf node_modules && \
  NODE_ENV=production yarn install \
  --prefer-offline \
  --pure-lockfile \
  --non-interactive \
  --production=true

FROM node:lts

WORKDIR /app

COPY --from=builder /app  .

ENV HOST 0.0.0.0
EXPOSE 80

CMD [ "yarn", "start" ]
```

Para construir uma imagem do Docker execute o seguinte comando:

```bash
docker build . -t <YOUR_DOCKER_HUB_USERNAME>/my-nuxt-project
```

Este comando construirá a imagem do Docker com o nome <YOUR_DOCKER_HUB>/my-nuxt-project. Um vez que a construção estiver terminada, você pode executar um contentor usando a imagem localmente para validar que tudo está funcionado como o esperado.

```bash
docker run -p 3000:3000 <YOUR_DOCKER_HUB_USERNAME>/my-nuxt-project
```

Abra o seu navegador e navegue até o http://localhost:3000 para visualizar a página de desembarque da sua aplicação.

## Empurrar a sua imagem do Docker para o registo de contentor

Depois de nossa imagem do Docker estar construida e funcional dentro do nosso teste, nós podemos agora carregar ela para um registo de contentor. Nesta documentação, nós guardaremos a nossa imagem no Docker Hub. Dentro do seu terminal execute o comando abaixo para empurrar a imagem:

```bash
docker push <YOUR_DOCKER_HUB_USERNAME>/my-nuxt-project
```

## Desdobrar a aplicação Nuxt para produção na Koyeb

No Painel de Controlo da Koyeb, clique no botão **Create App (Criar Aplicação)**.

Dentro do formulário, preencha o campo `Docker image (imagem do Docker)` com o nome da imagem de nós criamos previamente a qual deve parecer com `<YOUR_DOCKER_HUB_USERNAME>/my-nuxt-project`.

Marque a caixa `Use a private registry (Usar um registo privado)` e, dentro do campo selecionar, clique em **Create Repository Secret (Criar Segredo de Repositório)**. 

Um modal abre pedindo por:

- um nome para o Segredo que será criado, nós podemos usar para instância `docker-hub-secret`
- o provedor de registo para gerar o segredo contendo as credenciais do seu registo privado, no nosso caso o Docker Hub
- o seu nome de usuário do Docker Hub e a palavra-chave. Nós recomendamos a você [criar um código (token) de acesso](https://hub.docker.com/settings/security) a partir do Docker Hub para usar no lugar da sua palavra-chave. Uma vez que você tem preenchido todos os campos, clique no botão **Create (Criar)**.

Nós não precisamos mudar o _Path (Caminho)_, a nossa aplicação estará disponível na raiz do nosso domínio: `/`.

Dê um nome a sua Aplicação, exemplo `nuxt-app`, e clique em **Create App (Criar Aplicação)**.

_Você pode adicionar mais regiões para desdobrar suas aplicações, definir variáveis de ambiente, e definir escalamento horizontal de acordo com as suas necessidades._

Você será automaticamente redirecionado para a página Koyeb App onde você pode seguir o progresso do desdobramento da sua aplicação Nuxt. Dentro de poucos segundos, um vez que a sua aplicação está desdobrada, clique na _Public URL (URL Pública)_ que termina com `koyeb.app`.

A sua aplicação Nuxt agora está executando na Koyeb e beneficia do escalamento nativo automático, HTTPs (SSL) automático, auto-estabilização, e balanceador de carregamento global através do limite da nossa rede.
