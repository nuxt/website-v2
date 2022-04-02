---
template: blank
title: 'Support Entreprise'
description: 'Recevez une assistance technique, signalez des bugs ou contribuez au développement du framework.'
layout:
  fluid: true
navigation: false
---
::page-hero
#title
Support

#description
Recevez une assistance technique, signalez des bugs ou contribuez au développement du framework.
::

::support-container
#support-cards-list
  ::support-card
  ---
  image: 'technical'
  button:
    text: 'Nous contacter'
    url: 'mailto:support@nuxtlabs.com'
  ---
  #title
  Support technique
  #description
  Contactez-nous pour réserver une session de consulting ou un audit de votre projet.
  ::

  ::support-card
  ---
  image: 'report'
  button:
    text: 'Créer une issue'
    url: 'https://github.com/nuxt/nuxt.js/issues/new?assignees=&labels=bug-report&template=bug-report.md&title='
  ---
  #title
  Signalez un bug
  #description
  Si quelque chose ne fonctionne pas comme prévu, ouvrez une issue sur Github.
  ::

  ::support-card
  ---
  image: 'suggest'
  button:
    text: 'Proposer une idée'
    url: 'https://github.com/nuxt/nuxt.js/issues/new?assignees=&labels=feature-request&template=feature-request.md&title='
  ---
  #title
  Suggérez une fonctionnalité ou une amélioration
  #description
  Grâce aux conributions de notre communauté, Nuxt continue d'évoluer et de s'améliorer. Si vous avez une idée, n'hésitez pas à la proposer sur Github Discussions.
  ::

  ::support-card
  ---
  image: 'contribute'
  button:
    text: 'Contribuer'
    url: '/contribution-guide'
  ---
  #title
  Contribuez
  #description
  Contribuez au développement du framework, à la documentation, ou au testing.
  ::
::
