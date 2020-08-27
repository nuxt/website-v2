---
title: Instalación
description: Aquí, encontrarás información sobre cómo configurar y arrancar un proyecto de Nuxt.js en 4 pasos.
position: 1
category: get-started
csb_link: https://codesandbox.io/embed/github/nuxt-academy/guides-examples/tree/master/01_get_started/01_installation?fontsize=14&hidenavigation=1&theme=dark
---

## Prerrequisitos

Aquí, encontrarás información sobre cómo configurar y arrancar un proyecto de Nuxt.js en 4 pasos.

<base-alert type="info">

Otra forma de empezar con Nuxt.js es usando [CodeSandbox](https://template.nuxtjs.org), que es una genial manera de iniciarse rápidamente con Nuxt.js y/o compartir tu código con más gente.

</base-alert>

### Node

[node](https://nodejs.org/en/download/) - al menos v8.9.0

_Recomendamos que tengas la última versión instalada._

### Editor de texto

Usa el que más te guste, pero te recomendamos [VSCode](https://code.visualstudio.com/).

### Terminal

Puedes usar la que prefieras, pero recomendamos la [terminal integrada](https://code.visualstudio.com/docs/editor/integrated-terminal) de VSCode.

## Empezar desde cero

Crear un proyecto de Nuxt.js desde cero sólo requiere un único archivo y un único directorio.

En este ejemplo concreto, usaremos la terminal para crear los directorios y los ficheros, pero puedes crearlos usando tu editor de texto preferido.

### Configura tu proyecto

Para empezar, crea un directorio vacío con el nombre de tu proyecto y colócate dentro de él:

```bash
mkdir <project-name>
cd <project-name>
```

_Sustituye `<project-name>` por el nombre de tu proyecto._

Después, crea un fichero llamado `package.json`:

```bash
touch package.json
```

Abre el archivo package.json en tu editor de código favorito y rellénalo con el siguiente JSON:

```json{}[package.json]
{
  "name": "my-app",
  "scripts": {
    "dev": "nuxt",
    "build": "nuxt build",
    "generate": "nuxt generate",
    "start": "nuxt start"
  }
}
```

Los `scripts` definen los comandos de Nuxt.js que serán lanzados a través del comando `npm run <command>`.

#### **¿Qué es un archivo package.json?**

El `package.json` es como la tarjeta de identificación de tu proyecto. Si no sabes qué es el archivo `package.json`, te recomendamos encarecidamente que le dediques una lectura rápida a la [documentación de NPM](https://docs.npmjs.com/creating-a-package-json-file).

### Instalar nuxt

Una vez que el `package.json` ha sido creado, añade `nuxt` a tu proyecto vía `npm` o `yarn` como se muestra abajo:

<code-group>
  <code-block label="Yarn" active>

```bash
yarn add nuxt
```

  </code-block>
  <code-block label="NPM">

```bash
npm install nuxt
```

  </code-block>
</code-group>

Este comando añadirá `nuxt` como dependencia a tu proyecto y lo registrará en tu `package.json` automáticamente. El directorio `node_modules` también será creado, en el cual se almacenarán todos los paquetes instalados y sus correspondientes dependencias.

<base-alert type="info">

Un `yarn.lock` o un `package-lock.json` también es creado, el cual asegura una instalación consistente y compatibilidad entre las dependencias de los paquetes instalados en tu proyecto.

</base-alert>

### Crea tu primera página

Nuxt.js transforma cada archivo `*.vue` dentro del directorio `pages` en una ruta de nuestra aplicación.

Crea el directorio `pages` en tu proyecto:

```bash
mkdir pages
```

Tras ello, crea un fichero `index.vue` en la carpeta `pages`:

```bash
touch pages/index.vue
```

Es importante que esta página se llame `index.vue` ya que será la página por defecto que Nuxt mostrará al abrir la aplicación. Es la página de inicio y, por lo tanto, debe llamarse index.

Abre el archivo `index.vue` en tu editor y añade el siguiente contenido:

```html{}[pages/index.vue]
<template>
  <h1>Hello world!</h1>
</template>
```

### Inicia el proyecto

Arranca tu proyecto tecleando uno de los siguientes comandos en tu terminal:

<code-group>
  <code-block label="Yarn" active>

```bash
yarn dev
```

  </code-block>
  <code-block label="NPM">

```bash
npm run dev
```

  </code-block>
</code-group>

<base-alert type="info">

Usaremos el comando dev para arrancar nuestra aplicación en modo desarrollo.

</base-alert>

La aplicación está funcionando ahora en **[http://localhost:3000](http://localhost:3000/).**

Abre tu navegador haciendo click en el enlace de tu terminal y deberías ver el texto "Hello World!" que copiamos en el paso anterior.

<base-alert type="info">

Al lanzar Nuxt.js en modo desarrollo, estará pendiente de las modificaciones en los archivos en la mayoría de los directorios. De esta manera no será necesario reiniciar la aplicación cuando, por ejemplo, añadamos nuevas páginas.

</base-alert>

<base-alert type="warning">

Al usar el comando dev se creará un directorio .nuxt. Esta carpeta debería ser ignorada por el controlador de versiones. Puedes ignorar archivos creando un .gitignore en el directorio raíz y añadiéndole .nuxt.

</base-alert>

### Bonus

Crea una página llamada `fun.vue` en el directorio `pages`.

Añade un `<template></template>` e incluye una cabecera con una frase divertida dentro.

Después, ve al navegador y mira tu nueva página en **[http://localhost:3000/fun](http://localhost:3000/fun).**

<base-alert type="info">

Crea una carpeta llamada `more-fun` y añádele un archivo `index.vue`. Esto dará el mismo resultado que si crearas un fichero `more-fun.vue`.

</base-alert>

<app-modal>
  <code-sandbox  :src="csb_link"></code-sandbox>
</app-modal>

## Usar create-nuxt-app

Para empezar rápidamente puedes usar el [create-nuxt-app](https://github.com/nuxt/create-nuxt-app).

Asegúrate de tener instalado npx (npx viene por defecto desde NPM 5.2.0) o npm v6.1 o yarn.

<code-group>
  <code-block label="Yarn" active>

```bash
yarn create nuxt-app <project-name>
```

  </code-block>
  <code-block label="NPX">

```bash
npx create-nuxt-app <project-name>
```

  </code-block>
    <code-block label="NPM">

```bash
npm init nuxt-app <project-name>
```

  </code-block>

</code-group>

Te hará algunas preguntas (nombre, opciones de Nuxt, UI framework, TypeScript, linter, testing framework, etc). Cuando las hayas respondido, instalará todas las dependencias. El siguiente paso es ubicarnos en la carpeta del proyecto y arrancarlo:

<code-group>
  <code-block label="Yarn" active>

```bash
cd <project-name>
yarn dev
```

  </code-block>
  <code-block label="NPM">

```bash
cd <project-name>
npm run dev
```

  </code-block>
</code-group>

La aplicación funciona ahora en [http://localhost:3000](http://localhost:3000). ¡Bien hecho!
