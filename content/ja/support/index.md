---
template: blank
title: エンタープライズサポート
description: 'テクニカルサポートを受けたり、バグを報告したり、Nuxt フレームワークの開発に貢献することができます。'
layout:
  fluid: true
navigation: false
---

::page-hero
#title
エンタープライズサポート

#description
テクニカルサポート、トレーニング、カスタム開発など、お客様のニーズに応じてさまざまなサービスを提供しています。私たちは、Nuxt を最大限に活用するために、さまざまな代理店パートナーをご案内しています。
::

::support-container
#support-cards-list
  ::support-card
  ---
  title: 'テクニカルサポート'
  description: '個人的なコンサルティングセッションやプロジェクトの監査のためのスロットを予約するには、私たちに連絡してください。'
  image: 'technical'
  button:
    text: '連絡する'
    url: 'mailto:support@nuxtlabs.com'
  form: true
  #form
    :::support-form
    ---
    title: 'メッセージを送る'
    placeholder:
      company: '会社名'
      name: '名前'
      mail: 'Eメールアドレス'
      phone: '電話番号'
      subject: 'タイトル'
      message: 'メッセージ'
    buttonText: 'メッセージを送信する'
    statusList:
      - "会社員"
      - "学生"
    ---
    #step-1
      ::::support-step-title
      ---
      number: '1'
      text: あなたのステータスを選択してください
      ---
      ::::
    #step-2
      ::::support-step-title
      ---
      number: '2'
      text: 会社名を入力してください
      ---
      ::::
    #step-3
      ::::support-step-title
      ---
      number: '3'
      text: あなたの情報をすべて入力してください
      ---
      ::::
    #step-4
      ::::support-step-title
      ---
      number: '4'
      text: タイトルを入力してください
      ---
      ::::
    #step-5
      ::::support-step-title
      ---
      number: '5'
      text: メッセージを入力してください
      ---
      ::::
    :::
  ---
  ::
  ::support-card
  ---
  title: '不具合を報告する'
  description: "期待した通りに動作しない場合は、GitHub で問題を提起してください。"
  image: 'report'
  button:
    text: 'GitHub issues を作成する'
    url: ''
  ---
  ::
  ::support-card
  ---
  title: '新しい機能や改善点を提案する'
  description: 'コミュニティからの貢献により、Nuxt は継続的に機能を改善しながら進化し続けています。もしアイデアがあれば、GitHub Discussions で気軽に提案してください。'
  image: 'suggest'
  button:
    text: 'アイデアを提案する'
    url: ''
  ---
  ::
  ::support-card
  ---
  title: '貢献'
  description: 'フレームワークの開発、ドキュメント、テストへの貢献始めます'
  image: 'contribute'
  button:
    text: '貢献する'
    url: ''
  ---
  ::
::
