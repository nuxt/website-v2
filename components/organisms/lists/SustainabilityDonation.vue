<template>
  <div class="grid md:grid-cols-2 gap-8 w-full pb-16">
    <div v-for="donation in donations" :key="donation.text">
      <SustainabilityCardDonation :icon="donation.icon" :text="donation.name" :url="donation.url" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    donations: {
      type: Array,
      default: () => []
    }
  }
})
</script>
