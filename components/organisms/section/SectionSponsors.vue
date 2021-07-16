<template>
  <div class="text-center">
    <h2 class="font-semibold text-display-6">{{ tier }}</h2>
    <div class="flex flex-wrap justify-center pt-8 pb-16 -mx-8">
      <NuxtHref
        v-for="sponsor in sponsors"
        :key="sponsor.title"
        :href="sponsor.url"
        :aria-label="sponsor.title"
        class="mx-8 my-4"
      >
        <img :src="`/img/sponsors/${$colorMode.value}/${sponsor.img}`" :alt="sponsor.title" :class="sponsor.size" />
      </NuxtHref>
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
