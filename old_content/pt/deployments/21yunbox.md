---
template: guide
title: 21YunBox
description: "Como desdobrar o Nuxt no 21YunBox?"
target: Static
category: deployment
logo:
  light: "/img/companies/square/light/Yunbox.svg"
  dark: "/img/companies/square/dark/Yunbox.svg"
---
# Desdobrar o Nuxt no 21YunBox

Como desdobrar o Nuxt no 21YunBox?

---

O [21YunBox](https://www.21yunbox.com) fornece um CDN Chinês super rápido, desdobramento contínuos, HTTPS em um único clique e [outros serviços como base de dados geridas e backend de serviços web](https://www.21yunbox.com/docs/), fornecendo um caminho para lançar projetos web na China.

O 21YunBox inclui as seguintes funcionalidades:

- Construções automáticas e desdobramentos contínuos a partir do GitHub e Gitee
- Certificação SSL automática através do [Let's Encrypt](https://letsencrypt.org)
- Invalidação de cache instantânea com um CDN Chinês, super rápido 
- [Domínios personalizados](https://www.21yunbox.com/docs/#/custom-domains) ilimitados
- [Compressão Brotli](https://en.wikipedia.org/wiki/Brotli) automática para sítios rápidos
- Suporte nátivo ao HTTP/2
- Redirecionamento de HTTP → HTTPS automático
- Redirecionamento de URL personalizada e rescritas

## Pré-requisitos

Este guia assume que você já tem um projeto Nuxt para desdobrar. Se você precisar de um projeto, use o [create-nuxt-app](https://github.com/nuxt/create-nuxt-app) para iniciar ou fork o [Exemplo Nuxt](https://gitee.com/eryiyunbox-examples/nuxtjs) do 21YunBox antes de continuar.

## Configuração

Você pode configurar o sítio Nuxt no 21YunBox em dois passos rápidos:

1. Crie um novo serviço web no 21YunBox, e dê permissão ao 21YunBox para acessar seu repositório GitHub e Gitee.
2. Use os seguintes valores durante a criação:

   |                       |                                                     |
   | --------------------- | --------------------------------------------------- |
   | **Environment (Ambiente)**       | `Static Site`                                       |
   | **Build Command (Comando de construção)**     | `yarn && yarn generate` (ou o seu próprio comando de construção) |
   | **Publish Directory (Publicar Diretório)** | `./dist` (ou o seu próprio diretório de saída)             |

E é isto! Seu sítio estará a viver na sua URL do 21YunBox (a qual se parece com `yoursite.21yunbox.com`) assim que a construção estiver terminada.

## Desdobramento contínuos

Agora que 21YunBox está conectado ao seu repositório, ele irá automaticamente construir e publicar o seu sítio sempre que você empurrar para GitHub ou Gitee.

## CDN do 21YunBox e invalidação do cache

O 21YunBox hospeda o seu sítio em uma CDN Chinesa super rápida a qual garante os tempos de descarregamento mais rápidos possíveis para todos seus usuários por toda China.

Todo desdobramento instantaneamente e automaticamente invalida o cache do CDN, assim seus usuários podem sempre acessar conteúdo mais atualizado do seu sítio.

## Domínios personalizados

Adicione os seus próprios domínios ao seu sítio facilmente usando o guia de [domínios personalizados](https://www.21yunbox.com/docs/#/custom-domains) do 21YunBox.
