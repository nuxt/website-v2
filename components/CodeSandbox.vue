<template>
  <div class="codesandbox">
    <iframe v-if="isIntersecting && src" :src="src" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"/>
    <span v-else>Loading Nuxt Sandbox...</span>
  </div>
</template>

<script>
import intersectingMixin from '~/mixins/intersecting.js'

export default {
  mixins: [intersectingMixin],
  props: {
    src: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.codesandbox {
  margin: 0 auto;
  background-color: #212527;
  color: white;
  font-size: 40px;
  line-height: 700px;
  text-align: center;
}
.codesandbox,
.codesandbox iframe {
  max-width: 1400px;
  border: 0;
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
  height: 700px;
}
</style>
