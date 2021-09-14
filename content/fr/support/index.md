---
template: blank
title: 'Support Entreprise'
description: 'Recevez une assistance technique, signalez des bugs ou contribuez au développement du framework.'
layout:
  fluid: true
navigation: false
---
::page-hero
---
title: Support
description: "Recevez une assistance technique, signalez des bugs ou contribuez au développement du framework."
---
::

::support-container
#support-cards-list
::support-card
---
title: 'Support technique'
description: 'Contactez-nous pour réserver une session de consulting ou un audit de votre projet.'
image: 'technical'
button:
  text: 'Nous contacter'
  url: ''
form: true
#form
  :::support-form
  ---
  title: 'Envoyez-nous un message'
  placeholder:
    company: "Nom de l'entreprise"
    name: 'Votre nom'
    mail: 'Votre Email'
    phone: 'Numéro de téléphone'
    subject: 'Sujet'
    message: 'Votre message'
  ---
  #step-1
    ::::support-step-title
    ---
    number: '1'
    text: Sélectionnez votre statut
    ---
    ::::
  #step-2
    ::::support-step-title
    ---
    number: '2'
    text: Complétez le nom de votre entreprise
    ---
    ::::
  #step-3
    ::::support-step-title
    ---
    number: '3'
    text: Completétez vos informations
    ---
    ::::
  #step-4
    ::::support-step-title
    ---
    number: '4'
    text: Sujet
    ---
    ::::
  #step-5
    ::::support-step-title
    ---
    number: '5'
    text: Votre message
    ---
    ::::
  :::
---
::
::support-card
---
title: 'Signalez un bug'
description: 'Si quelque chose ne fonctionne pas comme prévu, ouvrez une issue sur Github.'
image: 'report'
button:
  text: 'Créer une issue'
  url: ''
---
::
::support-card
---
title: 'Suggérez une fonctionnalité ou une amélioration'
description: "Grâce aux conributions de notre communauté, Nuxt continue d'évoluer et de s'améliorer. Si vous avez une idée, n'hésitez pas à la proposer sur Github Discussions."
image: 'suggest'
button:
  text: 'Proposer une idée'
  url: ''
---
::
::support-card
---
title: 'Faites un don'
description: "NuxtJS est un projet open source sous license MIT et totalement libre d'utilisation. Cependant, les efforts pour maintenir le projet et développer de nouvelles fonctionnalités ne sont pas pérennes sans source de financement."
image: 'donate'
button:
  text: 'Faire un don'
  url: ''
---
::
::support-card
---
title: 'Contribuez'
description: 'Contribuez au développement du framework, à la documentation, ou au testing.'
image: 'contribute'
button:
  text: 'Contribuer'
  url: ''
---
::
::
