---
template: guide
title: Hostman
description: Como desdobrar o Nuxt no Hostman?
target: Static
category: deployment
logo:
  light: "/img/companies/square/light/Hostman.svg"
  dark: "/img/companies/square/dark/Hostman.svg"
---
# Desdobrar o Nuxt no Hostman

Como desdobrar o Nuxt no Hostman?

---

O [Hostman](https://hostman.com/) é provedor de hospedam na nuvem para startups e projetos novos. Ele ajuda livrar-se da maioria das operações do quotidiano de DevOps, economizando tempo para os desenvolvedores e dinheiro para as empresas. O Hostman emprega um conceito de serviços que torna fácil desenvolver arquitetura complexa e escalar ela em um clique.

O Hostman fornece para você as seguintes funcionalidades:

- Construir e desdobrar websites estáticos, aplicações web, contentores do docker e bases de dados.
- Tudo é muito transparente, porque você vê o hardware atual em que a sua aplicação está operando e a média atual de carregamento, assim você pode acessar eles se alguma coisa correr mal.
- Você pode usar SSH dentro do seu contentor do Docker, fornecendo o perfeito equilíbrio entre a abstração e a transparência.
- O Hostman define automaticamente um certificado SSL para todos os seus domínios e coloca um CDN no lugar para entregar o seu conteúdo o mais rápido possível.
- O Hostman automatiza o CI/CD, puxando, construindo e lançando o código assim que você empurrar uma nova consolidação (commit) para o repositório.
- Sem vendedor de trancas (No vendor lock-in).
- O Hostman suporta 22 frameworks.

## Pré-requisitos

Este guia assume que você já tem um projeto Nuxt para desdobrar. Se você precisar de um projeto, use o [create-nuxt-app](https://github.com/nuxt/create-nuxt-app) para começar.

## Configuração

---

**Passo 1. Crie um serviço**

Para desdobrar um website estático do Nuxt, clique em Criar no canto superior esquerdo do seu [painel de controlo](https://dashboard.hostman.com/) e escolha aplicação Front-end ou website estático.

![O painel de controlo do Hostman](https://i.imgur.com/bEePHDo.png)

**Passo 2. Selecione o projeto para desdobrar**

Se você iniciou a sessão dentro do Hostman com a sua conta do GitHub, GitLab ou Bitbucket, neste ponto você verá o repositório com os seus projetos, incluindo os projetos privados.

Escolha o projeto que quiser desdobrar. Ele de conter o diretório de aplicação Nuxt que foi criado automaticamente depois da execução do comando `yarn create-nuxt-app`.

Para acessar um repositório diferente, clique em **Conectar com outro repositório**.

Se você não usar as credenciais da sua conta Git para iniciar a sessão, agora você será capaz de acessar a conta necessária e depois selecionar o projeto.

**Passo 3. Configurar as definições da construção**

A seguir. a janela de personalização do website aparecerá.

![A configuração da construção](https://i.imgur.com/gIgl5EH.png)

Escolha a opção **website estático** a partir da lista de frameworks.

O **diretório da aplicação** aponta para o diretório que conterá o ficheiros do projeto depois da construção. Para o Nuxt o diretório é `dist`

O **comando de construção** padrão será:

`yarn build`

Ele inicia o comando `nuxt generate` do framework Nuxt o qual criará o diretório `dist` com os ficheiros do projeto.

Aqui você pode modificar o comando caso o processo de construção para projeto exigir isso. Você pode introduzir vários comandos separados por `&&`.

**Passo 4. Desdobrar**

Clique em **Desdobrar** para iniciar o processo de construção.

Uma vez iniciado, você entrará no registo de desdobramento. Se existir qualquer problema com o código, você receberá um aviso ou uma mensagem de erro dentro do registo, especificando a causa do problema.

Normalmente o registo contém todos os dados da depuração que você precisará, mas nós estamos também aqui para ajudar a resolver os problemas, então não hesite em contactar-nos via chat.

Quando o desdobramento estiver completo, você receberá um e-mail de notificação e também verá uma entrada de registo semelhante a:

![A entrada de registo](https://i.imgur.com/KwzMxTb.png)

**Tudo está feito**

O seu projeto está pronto e de pé.
