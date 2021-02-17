<template>
  <AdsBlock v-if="$store.state.adBlocked" />
  <AdsCarbon v-else-if="displayCarbon" />
  <AdsCodeFund v-else :fallback.sync="displayCarbon" />
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
