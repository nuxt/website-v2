<template>
  <div class="Carbon" ref="carbonads"></div>
</template>

<script>
export default {
  mounted() {
    if (['en', 'fr'].indexOf(this.$store.state.locale) !== -1 && this.$refs.carbonads) {
      const script = document.createElement('script')
      script.setAttribute('type', 'text/javascript')
      script.setAttribute('src', '//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=nuxtjsorg')
      script.setAttribute('id', '_carbonads_js')
      this.$refs.carbonads.appendChild(script)
    }
  }
}
</script>

<style>
.Carbon {
  @apply flex flex-col w-32;
  & .carbon-img {
  }
  & .carbon-text {
    @apply text-sm m-0 text-gray-600 block pt-2 leading-relaxed;
    &:hover {
      @apply no-underline text-gray-700;
    }
  }
  & .carbon-wrap {
  }
  & .carbon-poweredby {
    @apply text-xs text-right text-gray-400 block pt-2;
    &:hover {
      @apply no-underline text-gray-500;
    }
  }
}
</style>
