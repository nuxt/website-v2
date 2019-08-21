<template>
  <div id="codefund_ad" ref="codefundads" class="CodeFund" />
</template>

<script>
export default {
  props: {
    fallback: {
      type: Boolean
    }
  },
  mounted () {
    if (['en', 'fr'].includes(this.$store.state.locale) && this.$refs.codefundads) {
      window.addEventListener('codefund', this.cardbonFallback)
      const script = document.createElement('script')
      script.setAttribute('type', 'text/javascript')
      script.setAttribute('src', '//codefund.io/scripts/7a55aa99-7866-418d-9720-8b1342303656/embed.js?template=vertical')
      script.setAttribute('id', '_codefund_ad_js')
      try {
        this.$refs.codefundads.appendChild(script)
      } catch (e) {
        // In case codefund is *whyever* not available, the page will return a 500 if we don't catch the error
        console.error(e) // eslint-disable-line no-console
      }
    }
  },
  beforeDestroy () {
    window.removeEventListener('codefund', this.cardbonFallback)
  },
  methods: {
    cardbonFallback (event) {
      if (event.detail.status !== 'ok') {
        // Render Carbon Ad
        this.$emit('update:fallback', true)
      }
    }
  }
}
</script>

<style lang="scss">
.CodeFund {
  @apply bg-white p-4 flex flex-col w-40;
  .cf-img-wrapper {

  }
  .cf-text {

  }
  .cf-powered-by {
    @apply text-xs;
  }
}
</style>
