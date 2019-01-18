<template>
  <div v-if="$store.state.adBlocked" class="ad_blocked">
    <div class="img-wrapper"><Blocked alt="Support Nuxt.js" width="125" height="125"/></div>
    <span class="text-wrapper"><strong>Nuxt.js needs you 💚</strong><br>By whitelisting nuxtjs.org on your Ad-Blocker, you support our work and help us financially.</span>
  </div>
  <carbon-ads v-else-if="displayCarbon"/>
  <div v-else class="cf_ad" ref="codefundads" id="codefund_ad"></div>
</template>

<script>
import CarbonAds from './CarbonAds'
export default {
  data() {
    return {
      displayCarbon: false
    }
  },
  mounted() {
    if (this.$store.state.locale === 'en') {
      window.addEventListener('codefund', this.cardbonFallback)
      const script = document.createElement('script')
      script.setAttribute('type', 'text/javascript')
      script.setAttribute('src', '//codefund.io/scripts/7a55aa99-7866-418d-9720-8b1342303656/embed.js?template=vertical')
      script.setAttribute('id', '_codefund_ad_js')
      try {
        this.$refs.codefundads.appendChild(script)
      }catch(e){
        // In case codefund is *whyever* not available, the page will return a 500 if we don't catch the error
        console.error(e)
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener('codefund', this.cardbonFallback)
  },
  methods: {
    cardbonFallback(event) {
      if (event.detail.status !== 'ok') {
        // Render Carbon Ad
        this.displayCarbon = true
      }
    }
  },
  components: {
    CarbonAds,
    Blocked: () => import('~/assets/images/blocked.svg')
  }
}
</script>

<style lang="scss">
.cf_ad,
.ad_blocked
{
  background-color: #fff;
  overflow: hidden;
  padding-bottom: 15px;
  height: 140px;
  @media (min-width: 625px)
  {
    float: right;
    width: 150px;
    padding-left: 25px;
    height: auto;
  }
  @media (min-width: 1280px)
  {
    position: fixed;
    bottom: 30px;
    right: 30px;
    padding-bottom: 0;
    height: auto;
  }
  #cf,
  #cf .cf-wrapper {
    width: auto !important;
  }
  #cf .cf-text {
    font-size: 13px !important;
  }
  #cf .cf-img-wrapper,
  .img-wrapper {
    float: left;
    margin-right: 10px;
    @media (min-width: 625px)
    {
      float: none;
      margin-right: 0;
    }
  }
  .text-wrapper {
    font-size: 13px;
  }
}
</style>
