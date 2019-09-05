<template>
  <div ref="carbonadsText">
    <div id="bsa-native" />
  </div>
</template>

<script>
export default {
  mounted () {
    if (this.$store.state.locale === 'en' && this.$refs.carbonadsText) {
      this.loadScript()
    }
  },
  methods: {
    loadScript () {
      if (window._bsa) {
        return this.scriptLoaded()
      }
      // Order is important (https://stackoverflow.com/questions/16230886/trying-to-fire-the-onload-event-on-script-tag)
      const script = document.createElement('script')
      script.setAttribute('type', 'text/javascript')
      this.$refs.carbonadsText.appendChild(script)
      script.onload = this.scriptLoaded
      script.setAttribute('src', '//m.servedby-buysellads.com/monetization.js')
    },
    scriptLoaded () {
      if (typeof window._bsa === 'undefined') { return console.warn('Could not load Carbon Ads Text') } // eslint-disable-line no-console
      window._bsa.init('custom', 'CKYD62QW', 'placement:nuxtjsorg', {
        target: '#bsa-native',
        template: '<a class="native-box" href="##statlink##"><div class="native-sponsor">Sponsor</div><div class="native-text"><strong>##company##</strong> — ##description##</div></a>'
      })
    }
  }
}
</script>

<style>
#bsa-native {
  & .native-box {
    @apply flex p-2 border rounded text-nuxt-gray bg-gray-100 items-center mb-4;
  }
  & a {
    @apply no-underline;
  }
  & .native-sponsor {
    @apply bg-nuxt-green text-white rounded uppercase py-1 px-3 font-medium text-xs mr-2;
  }
  & .native-text {
    @apply font-normal text-base;
  }
}
</style>
