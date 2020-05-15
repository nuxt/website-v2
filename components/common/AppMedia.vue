<template>
  <div class="nui-media h-0 w-full overflow-hidden relative m-0 rounded bg-dark-surface">
    <iframe
      v-if="isIntersecting && src"
      :src="src"
      frameborder="0"
      allowfullscreen
      webkitallowfullscreen
      mozallowfullscreen
      title="Responsive video"
    />
    <span v-else>Loading video...</span>
  </div>
</template>

<script>
import intersectingMixin from '@/mixins/intersecting.js'

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
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 30px;
    text-align: center;
    line-height: 40px;
    color: white;
  }
}
</style>
