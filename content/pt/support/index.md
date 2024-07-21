---
template: blank
title: 'Suporte Empresarial'
description: 'Obter suporte técnico, reportar erros de programação, ou colaborar com o desenvolvimento da abstração Nuxt.'
layout:
  fluid: true
navigation: false
---
::page-hero
#title
Suporte Empresarial

#description
Obter suporte técnico, reportar erros de programação, ou colaborar com o desenvolvimento da abstração Nuxt.
::

::support-container
#support-cards-list
  ::support-card
  ---
  image: 'technical'
  button:
    text: 'Contactar'
    url: 'mailto:support@nuxtlabs.com'
  ---
  #title
  Suporte Técnico
  #description
  Contactar para reservar um espaço para uma sessão de consultoria privada ou uma auditoria do nosso projeto.
  ::

  ::support-card
  ---
  image: 'report'
  button:
    text: 'Crie uma Problema'
    url: 'https://github.com/nuxt/nuxt/issues/new?assignees=&labels=pending+triage%2C2.x&template=z-bug-report-2.yml'
  ---
  #title
  Reportar um Erro de Programação
  #description
  Se algo não estiver a funcionar como é suposto, podemos abrir um problema na GitHub.
  ::

  ::support-card
  ---
  image: 'suggest'
  button:
    text: 'Sugerir uma Ideia'
    url: 'https://github.com/nuxt/nuxt/issues/new?assignees=&labels=pending+triage&template=feature-request.yml'
  ---
  #title
  Sugerir uma nova funcionalidade ou melhoria
  #description
  Graças às contribuições da nossa comunidade, a Nuxt continua a evoluir com melhorias contínuas das funcionalidades. Se tivermos uma ideia, podemos partilhá-la nas Discussões da GitHub.
  ::

  ::support-card
  ---
  image: 'contribute'
  button:
    text: 'Colaborar'
    url: '/contribution-guide'
  ---
  #title
  Colaborar
  #description
  Começar a colaborar com o desenvolvimento, a documentação ou os testes da abstração.
  ::
::
