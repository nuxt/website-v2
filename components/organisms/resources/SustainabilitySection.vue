<template>
  <div class="py-4 d-container-content">
    <div class="flex flex-col items-center pt-8 space-y-4 light:text-sky-darker dark:text-white">
      <h2 class="font-semibold text-center text-display-6">
        <Markdown use="titleSection" unwrap="p" />
      </h2>

      <div class="flex justify-center w-full pb-16 text-lg">
        <p class="text-center md:w-2/3">
          <Markdown use="descriptionSection" unwrap="p" />
        </p>
      </div>

      <section-sponsors tier="MVP Partners" :sponsors="mvpPartners" />
      <section-sponsors tier="Partners" :sponsors="partners" />
      <section-sponsors tier="Sponsors" :sponsors="sponsors" />

      <SectionButton
        to="https://github.com/sponsors/nuxt"
        :aria-label="buttonText"
        size="md"
        class="text-gray-800 bg-primary hover:bg-primary-400 focus:bg-primary-400">
          {{ buttonText }}
      </SectionButton>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, useContext, ref, useFetch } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    buttonText: {
      type: String,
      default: '',
      required: true
    }
  },
  setup() {

    const { $docus } = useContext()

    const mvpPartners = ref()
    const partners = ref()
    const sponsors = ref()

    useFetch(async () => {
      const documents = await $docus
        .search('/sponsors', { deep: true })
        .sortBy('position', 'asc')
        .fetch()

      mvpPartners.value = documents.filter(sponsor => sponsor.tier === 'MVP Partners')
      partners.value = documents.filter(sponsor => sponsor.tier === 'Partners')
      sponsors.value = documents.filter(sponsor => sponsor.tier === 'Sponsors')

    })

    return {
      mvpPartners,
      partners,
      sponsors
    }
  }
})
</script>
