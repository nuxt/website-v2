<template>
  <nuxt-ads v-if="$store.state.adBlocked"/>
  <carbon-ads v-else-if="displayCarbon"/>
  <code-fund-ads v-else :fallback.sync="displayCarbon"/>
</template>

<script>
import CodeFundAds from '@/components/nui/partials/ads/CodeFund'
import CarbonAds from '@/components/nui/partials/ads/Carbon'
import NuxtAds from '@/components/nui/partials/ads/Nuxt'

export default {
  data() {
    return {
      displayCarbon: false
    }
  },
  components: {
    CodeFundAds,
    CarbonAds,
    NuxtAds
  }
}
</script>
