<template>
  <AdBlock v-if="$store.state.adBlocked" />
  <CarbonAds v-else-if="displayCarbon" />
  <CodeFundAds v-else :fallback.sync="displayCarbon" />
</template>

<script>
export default {
  data() {
    return {
      displayCarbon: true
    }
  }
}
</script>
