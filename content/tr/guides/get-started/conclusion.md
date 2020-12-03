---
title: Conclusion
description: Congratulations you have now created your first Nuxt.js app and you may now consider yourself a Nuxter. But there is so much more to learn and so much more you can do with Nuxt.js. Here are a few recommendations.
position: 5
category: get-started
questions:
  - question: Nuxt.js uygulamanızın çalışması için gerekli olan dizin hangisidir?
    answers:
      - nuxt
      - pages
      - index
    correctAnswer: pages
  - question: Projenizdeki ID dosyasının adı nedir?
    answers:
      - package.vue
      - package.json
      - package.js
    correctAnswer: package.json
  - question: Nuxt.js projenizi geliştirme modunda çalıştırmak için hangi komutu kullanmalısınız?
    answers:
      - npm dev
      - npm run dev
      - nuxt dev
    correctAnswer: npm run dev
  - question: Uygulamanız geliştirme modunda çalışırken hangi adres üzerinden uygulamanızı görüntüleyebilirsiniz?
    answers:
      - http://localhost:3000/
      - http://localhost:3000/project-name:3000
      - http://localhost:3000/nuxt:3000/
    correctAnswer: http://localhost:3000/
  - question: Konfigürasyonlarınızı hangi dosyada yapmalısınız?
    answers:
      - nuxt.config.json
      - config.js
      - nuxt.config.js
    correctAnswer: nuxt.config.js
  - question: Hangi dizin `.vue` dosyaları için uygun değildir?
    answers:
      - pages
      - static
      - components
    correctAnswer: static
  - question: Stil dosyalarınızı hangi dizinde bulundurmalısınız?
    answers:
      - styles
      - components
      - assets
    correctAnswer: assets
  - question: Robots.txt dosyanızı veya favicon'unuzu hangi dizinde bulundurmalısınız?
    answers:
      - assets
      - components
      - static
    correctAnswer: static
  - question: Sayfalar arasında geçiş yapmak için hangi component kullanılır?
    answers:
      - '<Nuxt>'
      - '<RouterLink>'
      - '<NuxtLink>'
    correctAnswer: '<NuxtLink>'
  - question: 'Nuxt uygulamasına ait olan dahili bağlantılar için `<NuxtLink>` componenti kullanılmalıdır'
    answers:
      - True
      - False
    correctAnswer: True
---

Tebrikler! İlk Nuxt.js uygulamanızı oluşturdunuz ve artık bir Nuxter sayılırsınız. Ancak hâlâ öğrenebileceğiniz ve Nuxt.js ile yapabileceğiniz çok fazla şey var. Nereden devam edeceğinizi bilmiyorsanız aşağıdaki başlıkları inceleyebilirsiniz:

<base-alert type="next">

[Konseptler](../concepts/views)'e göz atın

</base-alert>

<base-alert type="next">

[asyncData](/docs/2.x/features/data-fetching#async-data) ile çalışmak

</base-alert>

<base-alert type="next">

[Render modları](/docs/2.x/features/rendering-modes) arasında tercih yapmak

</base-alert>

<base-alert type="star">

Nuxt.js'i beğendiniz mi? Github üzerinden projeyi [yıldızlamayı](https://github.com/nuxt/nuxt.js) unutmayın.

</base-alert>

<quiz :questions="questions"></quiz>
