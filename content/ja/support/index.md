---
template: blank
title: 'Enterprise Support'
description: 'Get technical support, report bugs or contribute to the Nuxt framework development.'
layout:
  fluid: true
navigation: false
---

::page-hero
---
title: エンタープライズサポート
description: "テクニカルサポート、トレーニング、カスタム開発など、お客様のニーズに応じてさまざまなサービスを提供しています。私たちは、Nuxt を最大限に活用するために、さまざまな代理店パートナーをご案内しています。 "
---
::

::support-container
#support-cards-list
  ::support-card
  ---
  title: 'Technical support'
  description: 'Contact us to book a slot for a private consulting session or audit of your project.'
  image: 'technical'
  button:
    text: 'Contact us'
    url: ''
  form: true
  #form
    :::support-form
    ---
    title: 'Send us a message'
    placeholder:
      company: 'Company Name'
      name: 'Your name'
      mail: 'Your Email'
      phone: 'Phone Number'
      subject: 'Subject'
      message: 'Your message'
    ---
    #step-1
      ::::support-step-title
      ---
      number: '1'
      text: Please choose your status
      ---
      ::::
    #step-2
      ::::support-step-title
      ---
      number: '2'
      text: Complete your company name
      ---
      ::::
    #step-3
      ::::support-step-title
      ---
      number: '3'
      text: Complete your informations
      ---
      ::::
    #step-4
      ::::support-step-title
      ---
      number: '4'
      text: Add a subject
      ---
      ::::
    #step-5
      ::::support-step-title
      ---
      number: '5'
      text: Write your message
      ---
      ::::
    :::
  ---
  ::
  ::support-card
  ---
  title: 'Report a bug'
  description: "If anything isn't working like it's supposed to, open an issue on Github."
  image: 'report'
  button:
    text: 'Create an issue'
    url: ''
  ---
  ::
  ::support-card
  ---
  title: 'Suggest a new feature or improvement'
  description: 'Thanks to our community contributions, Nuxt keeps evolving with continuous features improvements. If you have an idea, feel free to propose it on Github Discussions.'
  image: 'suggest'
  button:
    text: 'Suggest an idea'
    url: ''
  ---
  ::
  ::support-card
  ---
  title: 'Contribute'
  description: 'Start contributing to the framework development, documentation, or testing.'
  image: 'contribute'
  button:
    text: 'Contribute'
    url: ''
  ---
  ::
::
