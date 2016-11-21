<template>
  <div class="Guide">
    <nuxt-header></nuxt-header>
    <div class="container content">
      <nuxt-affix></nuxt-affix>
      <nuxt-content>
        <div :is="content"></div>
      </nuxt-content>
    </div>
  </div>
</template>

<script>
import NuxtHeader from '~components/Header.vue'
import NuxtAffix from '~components/Affix.vue'
import NuxtContent from '~components/Content.vue'

import index from '~pages/docs/_index.vue'
import releasenotes from '~pages/docs/_release-notes.vue'

export default {
  components: {
    NuxtHeader,
    NuxtAffix,
    NuxtContent,
    index,
    releasenotes
  },
  computed: {
    content () {
      let content = this.$route.params.slug || 'index'
      return content.replace('-', '')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
