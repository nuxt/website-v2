<template>
  <nuxt-container>
    <navbar></navbar>
    <nuxt/>
  </nuxt-container>
</template>

<script>
import Navbar from '~components/Header.vue'

export default {
  components: {
    Navbar
  }
}
</script>
