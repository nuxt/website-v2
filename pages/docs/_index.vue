<template>
  <div>
    <nuxt-title>What's Nuxt.js ?</nuxt-title>
    <nuxt-paragraph>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      <a href="/">link</a>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </nuxt-paragraph>
    <hr>
    <nuxt-subtitle>Quick demo</nuxt-subtitle>
    <nuxt-code title="nuxt.config.js">
      module.exports = {
        css: ['bulma']
      }
    </nuxt-code>
  </div>
</template>

<script>
import NuxtTitle from '~components/Title.vue'
import NuxtSubtitle from '~components/Subtitle.vue'
import NuxtParagraph from '~components/Paragraph.vue'
import NuxtCode from '~components/Code.vue'

export default {
  components: {
    NuxtTitle,
    NuxtSubtitle,
    NuxtParagraph,
    NuxtCode
  }
}
</script>

<style lang="scss" scoped>

</style>
