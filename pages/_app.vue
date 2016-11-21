<template>
  <nuxt-container>
    <navbar></navbar>
    <nuxt/>
  </nuxt-container>
</template>

<script>
import Navbar from '~components/Header.vue'

export default {
  watch:{
    $route: 'setStore'
  },
  methods: {
    setStore () {
      this.$store.commit('toggle', 'visibleHeader')
      this.$store.commit('toggle', 'visibleAffix')      
    }
  },
  components: {
    Navbar
  }
}
</script>
