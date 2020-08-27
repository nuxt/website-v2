---
title: Conclusión
description: Enhorabuena, ya has creado tu primera aplicación Nuxt.js y puedes considerarte un Nuxter. Pero aún hay mucho más por aprender y muchísimo más que puedes hacer con Nuxt.js. Aquí hay algunas recomendaciones.
position: 4
category: get-started
questions:
  - question: ¿Cuál es el nombre del directorio que necesitas para que Nuxt.js funcione?
    answers:
      - nuxt
      - pages
      - index
    correctAnswer: pages
  - question: ¿Cuál el nombre del archivo ID de tu proyecto?
    answers:
      - package.vue
      - package.json
      - package.js
    correctAnswer: package.json
  - question: ¿Cuál es el comando que usas en la terminal para ejecutar tu proyecto Nuxt.js?
    answers:
      - npm dev
      - npm run dev
      - nuxt dev
    correctAnswer: npm run dev
  - question: ¿En qué dirección del navegador puedes ver tu página en el modo de desarrollo?
    answers:
      - http://localhost:3000/
      - http://localhost:3000/project-name:3000
      - http://localhost:3000/nuxt:3000/
    correctAnswer: http://localhost:3000/
  - question: ¿En cuál pones tu configuración?
    answers:
      - nuxt.config.json
      - config.js
      - nuxt.config.js
    correctAnswer: nuxt.config.js
  - question: ¿Qué directorio no es el ideal para archivos `.vue`?
    answers:
      - pages
      - static
      - components
    correctAnswer: static
  - question: ¿En qué directorio colocas tus estilos?
    answers:
      - styles
      - components
      - assets
    correctAnswer: assets
  - question: ¿En qué directorio ponemos un archivo robots.txt o el favicon?
    answers:
      - assets
      - components
      - static
    correctAnswer: static
  - question: ¿Qué componente usamos para navegar entre páginas?
    answers:
      - '<Nuxt>'
      - '<RouterLink>'
      - '<NuxtLink>'
    correctAnswer: '<NuxtLink>'
  - question: ¿Debe usarse `<NuxtLink>` para enlaces internos de la aplicación Nuxt.js?
    answers:
      - True
      - False
    correctAnswer: True
---

¡Enhorabuena! Ya has creado tu primera aplicación Nuxt.js y puedes considerarte un Nuxter, pero aún hay mucho más por aprender y muchísimo más que puedes hacer con Nuxt.js. Aquí hay algunas recomendaciones:

<base-alert type="next">

Revisar el [Concepts book](../concepts/views)

</base-alert>

<base-alert type="next">

Trabajar con [asyncData](/guides/features/data-fetching#async-data)

</base-alert>

<base-alert type="next">

Elegir entre los diferentes [modos de Renderizado](/guides/features/rendering-modes)

</base-alert>

<base-alert type="star">

¿Realmente te gusta Nuxt.js? No olvides [darle una estrella a nuestro proyecto](https://github.com/nuxt/nuxt.js) en GitHub
Did you like Nuxt.js so far? Don't forget to [star our project](https://github.com/nuxt/nuxt.js) on GitHub

</base-alert>

<quiz :questions="questions"></quiz>
