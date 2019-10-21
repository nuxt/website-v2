<template>
  <nuxt-ads v-if="$store.state.adBlocked" />
  <carbon-ads v-else-if="displayCarbon" />
  <code-fund-ads v-else :fallback.sync="displayCarbon" />
</template>

<script>
import CodeFundAds from '@/components/partials/ads/CodeFund'
import CarbonAds from '@/components/partials/ads/Carbon'
import NuxtAds from '@/components/partials/ads/Nuxt'

export default {
  components: {
    CodeFundAds,
    CarbonAds,
    NuxtAds
  },
  data () {
    return {
      displayCarbon: true
    }
  }
}
</script>
