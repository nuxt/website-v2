---
title: Generación de sitios estáticos
description: Con la opción de generación de sitios estáticos, puedes visualizar tu aplicación durante la fase de construcción e implementarla en cualquier servicio de *hosting* como por ejemplo Netlify, Github pages, Vercel etc.
position: 4
category: concepts
questions:
  - question: Se necesita un servidor para poder albergar un sitio web estático
    answers:
      - Verdadero
      - Falso
    correctAnswer: Falso
  - question: ¿Qué comando se debe utilizar para generar un sitio web estático?
    answers:
      - nuxt build
      - nuxt prerender
      - nuxt generate
    correctAnswer: nuxt generate
  - question: ¿En qué momentos se llama a la API?
    answers:
      - Cada vez que navegas hacia la página del contenido de la API
      - Cuando generas el sitio
      - Cuando generas el sitio y cada vez que navegues a la página del contenido de la API 
    correctAnswer: Cuando generas el sitio
  - question: ¿Qué páginas vuelven al modo de aplicación de página única (SPA, single page aplication)?
    answers:
      - La página de error
      - Las páginas que queden excluidas de la generación mediante la propiedad `generate.excludes`
      - Todas las páginas de navegación
    correctAnswer: Las páginas que queden excluidas de la generación mediante la propiedad `generate.excludes`
  - question: ¿Cómo se actualiza el contenido de tu sitio? 
    answers:
      - Se actualiza de forma automática
      - Es necesario volver a generar el sitio
    correctAnswer: Es necesario volver a generar el sitio
---

Mediante la generación de sitios estáticos puedes desplegar tu aplicación durante la etapa de construcción e implementarla en cualquier servicio de *hosting*, como por ejemplo Netlify, Github pages, Vercel etc. Esto quiere decir que no es necesario ningún servidor para implementar tu aplicación.

### Generación del sitio

Al implementar tu sitio mediante [target:static](/guides/features/deployment-targets#static-hosting), todas tus páginas con extensión `.vue` serán transformadas en archivos HTML y JavaScript. Todas las llamadas a las *API* se realizarán y serán almacenadas en memoria caché en un directorio denominado *static*, que se encuentra ubicado dentro del contenido generado, por lo cual no es necesario llamar a la *API* durante la navegación del lado cliente.

### Paso 1: Del navegador al *CDN*

Cuando un navegador envía la solicitud inicial, la misma llega al *CDN*.

### Paso 2: Del *CDN* al navegador

El *CDN* toma los recursos HTML, JavaScript y estáticos que hayan sido generados y los reeenvía al navegador. El contenido se despliega y se inicia la hidratación de Vue.js, convirtiéndolo en contenido reactivo. Al finalizar este proceso, la página se vuelve interactiva.

### Paso 3: De navegador a navegador

La navegación entre páginas con [`<NuxtLink>`](/guides/features/nuxt-components#the-nuxtlink-component) se realiza del lado cliente, para no activar el *CDN* nuevamente, y todas las llamadas a la *API* se cargan desde el directorio que ya se había almacenado en memoria caché, incluso si el navegador fuese actualizado de modo forzado.

### Retorno al modo de aplicación de página única (*SPA*)

Las páginas que queden excluidas de la generación mediante la propiedad `generate.excludes` volverán a ser parte de una aplicación de página única (*SPA*), por ende estas páginas no existirán en el *CDN* y serán desplegadas del lado cliente en el navegador cuando el usuario navegue hacia ellas.

<base-alert type="next">

Para obtener mayor información sobre la propiedad `generate`, consulta el siguiente recurso: [Propiedad generate](/guides/configuration-glossary/configuration-generate#exclude).

</base-alert>

### ¿Cómo actualizar el contenido?

Para obtener nuevo contenido en tu sitio desde la *API*, será necesario regenerar tu sitio una vez más. Con la mayoría de los proveedores de *hosting* podras hacerlo ya sea enviando tus cambios a la rama maestra (*master branch*), mediante la línea de comandos de *Git* o mediante *pull request*.

### Modo de vista previa

El modo de vista previa se encarga de llamar a la *API* o al *CMS* para que puedas visualizar los cambios en tiempo real, antes de realizar la implementación. Para mayor información sobre cómo activar esta función, consulta el siguiente recurso: [Modo de vista previa](/guides/features/live-preview).

<quiz :questions="questions"></quiz>
