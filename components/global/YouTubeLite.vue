<template>
  <lite-youtube :videoid="video" :playlabel="title" :key="video">
  </lite-youtube>
</template>

<script>
export default {
  props: {
    video: {
      type: String,
      default: 'video'
    },
    title: {
      type: String,
      default: 'title'
    }
  }
}
</script>
