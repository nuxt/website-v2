<template>
  <Button :to="url" blank class="inline-block">
    <img loading="lazy" :src="`/img/showcases/${type}.svg`" :alt="type" class="w-16 h-16" />
  </Button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
      validate(value) {
        return ['chrome', 'firefox'].includes(value)
      }
    }
  },
  computed: {
    url() {
      return {
        chrome: 'https://chrome.google.com/webstore/detail/vue-telescope/neaebjphlfplgdhedjdhcnpjkndddbpd',
        firefox: 'https://addons.mozilla.org/en/firefox/addon/vue-telescope/'
      }[this.type]
    }
  }
}
</script>
