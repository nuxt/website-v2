---
name: socket-io
description: Socket.io client and server module for Nuxt. Just plug it in and GO
long_description: >-
  Socket.io client and server module for Nuxt. Sockets have traditionally been
  the solution around which most real-time chat systems are architected,
  providing a bi-directional communication channel between a client and a
  server.
repo: richardeschloss/nuxt-socket-io
npm: nuxt-socket-io
type: module
icon: socket-io.png
github: 'https://github.com/richardeschloss/nuxt-socket-io'
website: 'https://nuxt-socket-io.netlify.app/'
learn_more: 'https://socket.io/'
keywords:
  - easy
  - socket.io
  - socket.io-client
categories:
  - request
labels:
  - 3rd-party
maintainers:
  - name: richardeschloss
    github: richardeschloss
    avatar: 'https://github.com/richardeschloss.png'
demo: 'https://nuxt-socket-io.herokuapp.com/'
features:
  - Configuration of multiple IO sockets
  - Configuration of per-socket namespaces
  - Automatic IO Server Registration
  - Socket IO Status
  - Automatic Error Handling
  - >-
    Debug logging, enabled with localStorage item 'debug' set to
    'nuxt-socket-io'
  - 'Automatic Teardown, enabled by default'
  - $nuxtSocket vuex module and socket persistence in vuex
  - Support for dynamic APIs using the KISS API format
  - >-
    Support for the IO config in the new Nuxt runtime config (for Nuxt versions
    >= 2.13)
---
