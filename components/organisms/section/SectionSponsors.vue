<template>
  <div>
    <h2 class="font-semibold text-lg border-b border-b border-b-sky-dark dark:border-b-white mb-4">{{ tier }}</h2>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <Link
        v-for="sponsor in sponsors"
        :key="sponsor.title"
        :to="sponsor.url ? `${sponsor.url}` : `${$route.path}/${sponsor.link}`"
        :aria-label="sponsor.title"
        :blank="sponsor.url ? true : false"
      >
        <SustainabilityCard :sponsor="sponsor" />
      </Link>
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
