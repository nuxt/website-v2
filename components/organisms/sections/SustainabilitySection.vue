<template>
  <div class="py-4 d-container-content">
    <div class="flex flex-col pt-8 space-y-4 light:text-sky-darker dark:text-white">
      <!-- h2 class="font-semibold text-center text-display-6">
        <Markdown use="titleSection" unwrap="p" />
      </h2>

      <div class="flex justify-center w-full pb-16 text-lg">
        <p class="text-center md:w-2/3">
          <Markdown use="descriptionSection" unwrap="p" />
        </p>
      </div-->

      <SustainabilityDonation :donations="donations" />

      <SectionSponsors :tier="$t('sustainability.tiers.mvp_partners')" :sponsors="mvp" class="pb-12" />
      <SectionSponsors :tier="$t('sustainability.tiers.sponsors')" :sponsors="sponsors" />

      <!-- SectionButton
        to="https://github.com/sponsors/nuxt"
        :aria-label="buttonText"
        size="md"
        class="text-gray-800 bg-primary hover:bg-primary-400 focus:bg-primary-400">
          {{ buttonText }}
      </SectionButton -->
    </div>
  </div>
</template>

<script>
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
    const { $docus, i18n } = useContext()

    const mvp = ref()
    const sponsors = ref()
    const donations = ref()

    useFetch(async () => {
      const documents = await $docus
        .search('/collections/sponsors', { deep: true })
        .where({ language: i18n.locale })
        .sortBy('position', 'asc')
        .fetch()

      mvp.value = documents.filter(sponsor => sponsor.tier === 'MVP')
      sponsors.value = documents.filter(sponsor => sponsor.tier === 'Sponsors')
      donations.value = documents.filter(sponsor => sponsor.tier === 'Donations')
    })

    return {
      mvp,
      sponsors,
      donations
    }
  }
})
</script>
