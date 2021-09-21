---
template: blank
title: 'Enterprise Support'
description: 'Get technical support, report bugs or contribute to the Nuxt framework development.'
layout:
  fluid: true
navigation: false
---
::page-hero
#title
Enterprise Support

#description
"Get technical support, report bugs or contribute to the Nuxt framework development."
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
    url: 'mailto:support@nuxtlabs.com'
  form: false
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
    buttonText: 'Send Message'
    statusList:
      - "I'am a company"
      - "I'am a student"
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
    url: 'https://github.com/nuxt/nuxt.js/issues/new?assignees=&labels=bug-report&template=bug-report.md&title='
  ---
  ::
  ::support-card
  ---
  title: 'Suggest a new feature or improvement'
  description: 'Thanks to our community contributions, Nuxt keeps evolving with continuous features improvements. If you have an idea, feel free to propose it on Github Discussions.'
  image: 'suggest'
  button:
    text: 'Suggest an idea'
    url: 'https://github.com/nuxt/nuxt.js/issues/new?assignees=&labels=feature-request&template=feature-request.md&title='
  ---
  ::
  ::support-card
  ---
  title: 'Contribute'
  description: 'Start contributing to the framework development, documentation, or testing.'
  image: 'contribute'
  button:
    text: 'Contribute'
    url: '/contribution-guide'
  ---
  ::
::
