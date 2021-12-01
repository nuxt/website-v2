<template>
  <div class="py-4 d-container-content">
    <div v-if="mvp && sponsors" class="flex flex-col pt-8 space-y-4 light:text-sky-darker dark:text-white">
      <SectionSponsors :tier="$t('sustainability.tiers.mvp_sponsors')" :sponsors="mvp" class="pb-12" />
      <SectionSponsors :tier="$t('sustainability.tiers.sponsors')" :sponsors="sponsors" />
    </div>
  </div>
</template>

<script>
import { useDocusContent } from '#docus'
import { defineComponent, ref, useLazyAsyncData } from '#app'

export default defineComponent({
  props: {
    buttonText: {
      type: String,
      default: '',
      required: true
    }
  },
  setup() {
    const $content = useDocusContent()

    const { data: documents } = useLazyAsyncData(
      'sponsors',
      async () => await $content.search('/collections/sponsors', { deep: true }).sortBy('position', 'asc').fetch()
    )

    const mvp = computed(() => documents?.value.filter(sponsor => sponsor.tier === 'MVP') || [])
    const sponsors = computed(() => documents?.value.filter(sponsor => sponsor.tier === 'Sponsors') || [])

    return {
      mvp,
      sponsors
    }
  }
})
</script>
