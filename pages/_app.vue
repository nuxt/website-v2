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
      if (this.$store.state.visibleHeader) this.$store.commit('toggle', 'visibleHeader')
      if (this.$store.state.visibleAffix) this.$store.commit('toggle', 'visibleAffix')
      if (this.$store.state.currentFile) this.$store.commit('updateFile', null)
    }
  },
  components: {
    Navbar
  }
}
</script>
