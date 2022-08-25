---
template: guide
title: Cleavr
description: Como desdobrar uma aplicação Nuxt com o Cleavr?
target: Static & Server
category: deployment
logo:
  light: "/img/companies/square/light/cleavr.svg"
  dark: "/img/companies/square/dark/cleavr.svg"
---
# Desdobrar o Nuxt com o Cleavr

Como desdobrar uma aplicação Nuxt com o Cleavr?

---

O [Cleavr](https://cleavr.io) é uma consola de gestão de servidor que integra com vários provedores VPS (hospedagem em nuvem) e ajuda você a configurar servidores para hospedar as suas aplicações Nuxt bem como desdobrar suas aplicações Nuxt em poucos cliques.

O Cleavr inclui as seguintes funcionalidades:

- Provisiona e configura os servidores deixando eles prontos para executar aplicações Nuxt renderizadas no lado do servidor e aplicações Estáticas
- Protege os servidores e fornece certificados SSL grátis
- Desdobra o código a partir do seus repositórios no GitHub, GitLab, e BitBucket com zero tempo de espera
- Instala automaticamente e configura o PM2 (com modo de agrupamento ativado ) para aplicações Nuxt renderizadas no lado do servidor
- Integração com GitHub Actions para construir a aplicação sem nenhuma configuração adicional exigida

## Pré-requisitos

- A sua conta Cleavr está conectada a sua VPS e os provedores de controlador de versão (exemplo: GitHub, GitLab, BitBucket)
- Você tem uma aplicação Nuxt renderizada no lado do servidor ou um projeto estático pronto para desdobrar
- Você tem servidor provisionador existente

## Passo 1: Configuração inicial

No Cleavr, navegue até ao servidor para adicionar uma nova aplicação e selecione **Add Site (Adicionar Sítio)**.

Selecione **Nuxt SSR (Aplicação Nuxt Renderizada no Lado do Servidor)** ou **Nuxt Static (Aplicação Nuxt Estática)** como tipo da aplicação web dependendo do alvo que você tenciona desdobrar. Preencha as informações restantes do website e depois clique em **Add (Adicionar)**.

Isto adicionará o sítio ao seu servidor e configurará o servidor sem nenhuma dependência de ambiente exigida faltando.

Uma vez que o sítio tiver sido adicionado com sucesso, vá para a secção Web App (Aplicação Web) e navegue para settings (Configurações) > repositório do código para a aplicação web que foi adicionada.

Preencha em seu provedor de controle de versão, repositório, e ramo para desdobrar os campos e depois clique **Update (Atualizar)**.

## Passo 2: Desdobrar

Agora você está pronto para desdobrar sua aplicação web.

Na página de desdobramento da aplicação web, clique em **Deploy (Desdobrar)**.

O processo de desdobramento começará e terminará em poucos segundos.

[Consulte a documentação do Cleavr para mais informações.](https://docs.cleavr.io/guides/nuxt)
