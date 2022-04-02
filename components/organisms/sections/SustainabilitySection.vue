<template>
  <div class="py-4 d-container-content">
    <div class="flex flex-col pt-8 space-y-4 light:text-sky-darker dark:text-white">
      <SectionSponsors :tier="$t('sustainability.tiers.mvp_sponsors')" :sponsors="mvp" class="pb-12" />
      <SectionSponsors :tier="$t('sustainability.tiers.sponsors')" :sponsors="sponsors" />
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
    const { $docus } = useContext()

    const mvp = ref()
    const sponsors = ref()

    useFetch(async () => {
      const documents = await $docus.search('/collections/sponsors', { deep: true }).sortBy('position', 'asc').fetch()

      mvp.value = documents.filter(sponsor => sponsor.tier === 'MVP')
      sponsors.value = documents.filter(sponsor => sponsor.tier === 'Sponsors')
    })

    return {
      mvp,
      sponsors
    }
  }
})
</script>
