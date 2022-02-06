<template>
  <div>
    <h2 class="font-semibold text-lg mb-4">{{ tier }}</h2>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <AppLink v-for="sponsor in sponsors" :key="sponsor.title" :href="sponsor.url" :aria-label="sponsor.title">
        <SustainabilityCard :sponsor="sponsor" />
      </AppLink>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    tier: {
      type: String,
      required: true
    },
    sponsors: {
      type: Array,
      default: () => []
    }
  }
})
</script>
