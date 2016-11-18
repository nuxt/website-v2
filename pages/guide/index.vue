<template>
  <div class="Guide">
    <nuxt-header></nuxt-header>
    <div class="container">
      <nuxt-affix></nuxt-affix>
      <nuxt-content>
        <nuxt-title>What's Nuxt.js ?</nuxt-title>
        <nuxt-paragraphe>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          <a href="/">link</a>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </nuxt-paragraphe>
        <hr>
        <nuxt-subtitle>Quick demo</nuxt-subtitle>
        <nuxt-paragraphe>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          <a href="/">link</a>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </nuxt-paragraphe>
      </nuxt-content>
    </div>
  </div>
</template>

<script>
import NuxtHeader from '~components/Header.vue'
import NuxtAffix from '~components/Affix.vue'
import NuxtContent from '~components/Content.vue'
import NuxtTitle from '~components/Title.vue'
import NuxtSubtitle from '~components/Subtitle.vue'
import NuxtParagraphe from '~components/Paragraphe.vue'
import NuxtCode from '~components/Code.vue'
import NuxtAlert from '~components/Alert.vue'

export default {
  components: {
    NuxtHeader,
    NuxtAffix,
    NuxtContent,
    NuxtTitle,
    NuxtSubtitle,
    NuxtParagraphe,
    NuxtCode,
    NuxtAlert
  }
}
</script>

<style lang="scss" scoped>

</style>
