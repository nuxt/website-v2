---
template: blank
title: 'Unternehmen Support'
description: 'Erhalten Sie technische Unterstützung, melden Sie Fehler oder tragen Sie zur Entwicklung des Nuxt-Frameworks bei.'
layout:
  fluid: true
navigation: false
---
::page-hero
#title
Unternehmen Support

#description
"Erhalten Sie technische Unterstützung, melden Sie Fehler oder tragen Sie zur Entwicklung des Nuxt-Frameworks bei."
::

::support-container
#support-cards-list
  ::support-card
  ---
  title: 'Technischer Support'
  description: 'Setzen Sie sich mit uns in Verbindung, um einen Termin für eine private Beratungssitzung oder ein Audit Ihres Projekts zu vereinbaren.'
  image: 'technical'
  button:
    text: 'Kontakt aufnehmen'
    url: 'mailto:support@nuxtlabs.com'
  form: false
  #form
    :::support-form
    ---
    title: 'Sende uns eine Nachricht'
    placeholder:
      company: 'Firmenname'
      name: 'Dein Name'
      mail: 'Deine E-Mail Adresse'
      phone: 'Telefonnummer'
      subject: 'Betreff'
      message: 'Deine Nachricht'
    buttonText: 'Nachrichten senden'
    statusList:
      - "Ich bin ein Unternehmen"
      - "Ich bin ein Student"
    ---
    #step-1
      ::::support-step-title
      ---
      number: '1'
      text: Bitte wählen Sie Ihren Status
      ---
      ::::
    #step-2
      ::::support-step-title
      ---
      number: '2'
      text: Vervollständige deinen Firmennamen
      ---
      ::::
    #step-3
      ::::support-step-title
      ---
      number: '3'
      text: Vervollständige deine Informationen
      ---
      ::::
    #step-4
      ::::support-step-title
      ---
      number: '4'
      text: Füge einen Betreff hinzu
      ---
      ::::
    #step-5
      ::::support-step-title
      ---
      number: '5'
      text: Schreibe deine Nachricht
      ---
      ::::
    :::
  ---
  ::
  ::support-card
  ---
  title: 'Einen Fehler melden'
  description: "Wenn irgendetwas nicht so funktioniert, wie es sollte, öffnen Sie ein Issue auf Github."
  image: 'report'
  button:
    text: 'Issue eröffnen'
    url: 'https://github.com/nuxt/nuxt.js/issues/new?assignees=&labels=bug-report&template=bug-report.md&title='
  ---
  ::
  ::support-card
  ---
  title: 'Eine neue Funktion oder Verbesserung vorschlagen'
  description: 'Dank der Beiträge unserer Community entwickelt sich Nuxt mit kontinuierlichen Funktionsverbesserungen weiter. Wenn Sie eine Idee haben, können Sie sie auf Github Discussions vorschlagen.'
  image: 'suggest'
  button:
    text: 'Eine Idee vorschlagen'
    url: 'https://github.com/nuxt/nuxt.js/issues/new?assignees=&labels=feature-request&template=feature-request.md&title='
  ---
  ::
  ::support-card
  ---
  title: 'Mitwirken'
  description: 'Tragen Sie zu der Entwicklung, Dokumentation oder dem Testen des Frameworks bei.'
  image: 'contribute'
  button:
    text: 'Mitwirken'
    url: '/contribution-guide'
  ---
  ::
::
