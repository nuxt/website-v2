<template>
  <div class="contribute">
    <carbon-ads-text/>
    <p>{{ $store.state.lang.guide.contribute }} <a :href="docLink" target="_blank">{{ $store.state.lang.guide.edit_on_github }}</a></p>
  </div>
</template>

<script>
import CarbonAdsText from '~/components/CarbonAdsText'

export default {
  props: ['docLink'],
  components: {
    CarbonAdsText
  }
}
</script>

<style scoped>
.contribute {
  margin-top: 30px;
  border-top: 1px solid #e5e5e5;
}
.contribute p {
  color: #7f8c8d;
  padding-top: 15px;
  padding-bottom: 0;
  margin: 0;
  font-size: 14px;
}
</style>
