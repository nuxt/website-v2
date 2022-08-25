---
template: guide
title: Bip
description: Como desdobrar uma aplicação Nuxt com o Bip?
target: Static
category: deployment
logo:
  light: "/img/companies/square/light/bip.png"
  dark: "/img/companies/square/dark/bip.png"
---
# Desdobrar o Nuxt com Bip

Como desdobrar uma aplicação Nuxt com o Bip?

---

O [Bip](https://bip.sh) é um serviço de hospedagem comercial o qual fornece desdobramento com zero tempo de espera, uma CDN global, SSL, banda larga ilimitada e muito mais para websites estáticos do Nuxt. Os planos estão disponíveis em um pagar a medida do uso, por bases de domínio.

O seguinte guia mostrará para você como desdobrar o seu sítio estático para o Bip em apenas alguns passos simples.

## Pré-requisitos

- Você ter [Yarn](https://yarnpkg.com/getting-started/install) instalado.
- Você ter a interface de linha de comando do Bip instalado, acompanhada de uma conta Bip e domínio pronto para usar. Visite o [guia vamos começar do Bip](https://bip.sh/getstarted) para instruções avançadas.

## Passo 1: Configuração inicial

Primeiro precisará de um projeto Nuxt pronto para desdobrar e partilhar com o mundo. Se você precisar de um projeto, use o [create-nuxt-app](https://github.com/nuxt/create-nuxt-app):

Use o Yarn para criar seu novo projeto:

```bash
yarn create nuxt-app <project-name>
```

Siga os pontos para configurar o seu projeto Nuxt. Garanta que quando você chegar a configuração 'Deployment target' (Alvo do desdobramento), selecione 'Static (Static/JAMstack hosting)' (Estático (Estático/Hospedagem JAMstack)).

Uma vez completa, siga para dentro do seu novo diretório:

```bash
cd <project-name>
```

Depois, precisará inicializar o seu projeto com o Bip. Isso só precisa ser feito uma vez.

```bash
bip init
```

Siga os pontos. onde será perguntado para qual domínio gostaria desdobrar. O Bip detetará que está usando Nuxt, e definirá as configurações do projeto tal como a fonte do ficheiro do diretório automaticamente.

## Passo 2: Desdobrar

Agora está pronto para desdobrar o seu website. Para o fazer, apenas execute:

```bash
yarn generate && bip deploy
```

E já está! Depois de alguns momentos, o seu website estará desdobrado.
