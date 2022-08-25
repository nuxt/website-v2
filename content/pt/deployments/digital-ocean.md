---
template: guide
title: Digital Ocean
description: Como desdobrar o Nuxt na Plataforma de Aplicação do DigitalOcean?
target: Static & Server
category: deployment
logo:
  light: "/img/companies/square/light/Digital_Ocean.svg"
  dark: "/img/companies/square/dark/Digital_Ocean.svg"
---
Desdobrar o Nuxt na Plataforma de Aplicação do DigitalOcean

Como desdobrar o Nuxt na Plataforma de Aplicação do DigitalOcean?

---

[Plataforma de Aplicação do DigitalOcean](https://www.digitalocean.com/products/app-platform/) permite você construir, desdobrar e escalar aplicações rapidamente usando uma solução simples e completamente gerida. Eles manipularão a infraestrutura, os tempos de execução da aplicação e dependências, assim que você empurrar o código para produção em alguns poucos cliques.

A Plataforma de Aplicação inclui as seguintes funcionalidades:

- Construir, desdobrar, gerir e escalar aplicações.
- Proteger as aplicações automaticamente. Eles criam, gerem e renovam seus certificados SSL e também protegem suas aplicações de ataques de negação de serviços (DDos).
- Suporte para Node.js, sítios estáticos, Python, Django, Go, PHP, Laravel, React, Ruby, Ruby on Rails, Gatsby, Hugo, contentor de imagens.
- Desdobrar o código diretamente a partir dos seus repositórios GitHub e GitLab. Redesdobrar a aplicação automaticamente sempre que você empurrar atualizações ao seu código-fonte.
- Zero gestão de infraestrutura. A Plataforma de Aplicação usa padrões abertos de nuvem nativas e analisa automaticamente o seu código, cria os contentores, e executa eles sobre os agrupadores do Kubernetes.
- Altamente escalável. Escala horizontalmente ou verticalmente.

## Pré-requisitos

Este guia assume que você já tem um projeto Nuxt para desdobrar. Se você precisar de um projeto, use o [create-nuxt-app](https://github.com/nuxt/create-nuxt-app) para começar.

## Configuração

1. Ligue o seu repositório: Crie uma nova conta na DigitalOcean e conecte a sua conta GitHub ou GitLab. Depois selecione o repositório que você quer desdobrar
2. Escolha um ramo do seu repositório e uma região para desdobrar o seu sítio.
3. Escolha o serviço que combine com o seu website.

   | Type Tipo      | Settings Configurações                                                              |
   | ---------- | ---------------------------------------------------------------------- |
   | **Server (Servidor)** | Serviço da Web - Comando de construção `yarn build` e Comando de execução `yarn start --hostname 0.0.0.0`  |
   | **Static (Estático)** | Sítios Estáticos - Comando de construção `yarn generate` e Diretório de saída `dist` |

   ::alert{type="warning"}
    **Aviso:** Para o tipo servidor você precisa mudar a **porta HTTP** de 8080 para **3000** nas configurações de serviços da web. Para mais informações consulte o [artigo](https://dev.to/tillsanders/deploy-nuxt-js-on-digitalocean-app-platform-in-5-minutes-or-less-2dij).
   ::

   ![DO App platform Web Service Nuxt configuration](https://i.imgur.com/BhBu49J.png)

4. Se você tiver alguma variável de ambiente, adicione elas manualmente nas entradas de pares chave-valor.

Uma vez que você passar o processo, você toca em desdobrar e seu sítio estará a viver uma url autogerada o mais cedo possível depois que a construção estiver terminada.

## Desdobramento Contínuos (CD em Inglês)

Agora que a Plataforma de Aplicação está conectada ao seu repositório, ela irá automaticamente construir e publicar o seu sítio sempre que você empurrar uma nova mudança.

## Adicionar domínios personalizados

Adicione o seu próprio domínio ao seu sítio facilmente em Configurações (Settings) > Domínios (Domains)  > Adicionar domínio (Add domain) ou siga este guia [Como Gerir Domínios dentro da Plataforma de Aplicação](https://www.digitalocean.com/docs/app-platform/how-to/manage-domains/).

## O botão Desdobrar para DigitalOcean

O botão Desdobrar para DigitalOcean permite os usuários lançarem uma aplicação para a Plataforma de Aplicação. Ele pode ser embutido dentro do ficheiro README para repositórios GitHub, permitindo que usuários que estejam navegando em seu repositório desdobrar seu código em um clique, adicionando um ficheiro .yaml dentro do seu repositório. Consulte em [Como Adicionar um Botão "Desdobrar para DigitalOcean" ao Seu Repositório](https://www.digitalocean.com/docs/app-platform/how-to/add-deploy-do-button/)
