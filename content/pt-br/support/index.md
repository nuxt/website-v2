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
Get technical support, report bugs or contribute to the Nuxt framework development.
::

::support-container
#support-cards-list
  ::support-card
  ---
  image: 'technical'
  button:
    text: 'Contact us'
    url: 'mailto:support@nuxtlabs.com'
  ---
  #title
  Technical support
  #description
  Contact us to book a slot for a private consulting session or audit of your project.
  ::

  ::support-card
  ---
  image: 'report'
  button:
    text: 'Create an issue'
    url: 'https://github.com/nuxt/nuxt.js/issues/new?assignees=&labels=bug-report&template=bug-report.md&title='
  ---
  #title
  Report a bug
  #description
  If anything isn't working like it's supposed to, open an issue on Github.
  ::

  ::support-card
  ---
  image: 'suggest'
  button:
    text: 'Suggest an idea'
    url: 'https://github.com/nuxt/nuxt.js/issues/new?assignees=&labels=feature-request&template=feature-request.md&title='
  ---
  #title
  Suggest a new feature or improvement
  #description
  Thanks to our community contributions, Nuxt keeps evolving with continuous features improvements. If you have an idea, feel free to propose it on Github Discussions.
  ::

  ::support-card
  ---
  image: 'contribute'
  button:
    text: 'Contribute'
    url: '/contribution-guide'
  ---
  #title
  Contribute
  #description
  Start contributing to the framework development, documentation, or testing.
  ::
::
