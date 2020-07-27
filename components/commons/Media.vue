<template>
<<<<<<< HEAD:components/commons/Media.vue
<<<<<<< HEAD:components/commons/Media.vue
  <div class="nui-media">
    <iframe v-if="isIntersecting && src" :src="src" frameborder="0" allowfullscreen webkitallowfullscreen mozallowfullscreen title="Responsive video"/>
=======
  <div class="nui-media h-0 w-full overflow-hidden relative m-0 rounded bg-dark-surface">
=======
  <div
    class="nui-media h-0 w-full overflow-hidden relative m-0 rounded bg-dark-surface"
  >
>>>>>>> 26a70b2b (chore: add guides section (#407)):components/common/AppMedia.vue
    <iframe
      v-if="isIntersecting && src"
      :src="src"
      frameborder="0"
      allowfullscreen
      webkitallowfullscreen
      mozallowfullscreen
      title="Responsive video"
    />
>>>>>>> 1b87907b (feat: dark mode (#303)):components/commons/Media.global.vue
    <span v-else>Loading video...</span>
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
.nui-media {
  padding-bottom: 56.25%;

  iframe,
  embed,
  object {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  span {
    color: white;
    font-size: 30px;
    left: 50%;
    line-height: 40px;
    position: absolute;
    text-align: center;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
