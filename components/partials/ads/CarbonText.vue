<template>
  <div ref="carbonadsText">
    <div id="bsa-native" />
  </div>
</template>

<script>
export default {
  mounted () {
    if (this.$refs.carbonadsText) {
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

<style lang="scss">
[data-theme='light'] #bsa-native {
  .native-box {
    @apply shadow-lg;
    border-color: theme('colors.gray.300');
    background-color: theme('colors.light.surface');
  }
}

[data-theme='dark'] #bsa-native {
  .native-box {
    @apply shadow-lg;
    border-color: theme('colors.gray.900');
    background-color: theme('colors.dark.surface');
  }
}

#bsa-native {
  & .native-box {
    @apply flex p-2 border rounded-lg items-center mb-4;
  }
  & a {
    @apply no-underline;
  }
  & .native-sponsor {
    @apply bg-primary-base text-white rounded-md uppercase py-1 px-3 font-bold text-xs mx-2;
    &:hover {
      @apply bg-primary-light;
    }
  }
  & .native-text {
    @apply font-normal text-base pl-2;
  }
}
</style>
