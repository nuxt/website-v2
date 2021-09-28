<template>
  <div class="py-4 d-container-content">
    <div class="flex flex-col pt-8 space-y-4 light:text-sky-darker dark:text-white">
      <div class="flex space-x-4 items-center">
        <img :src="icon" :alt="title" class="w-8 h-8" />
        <h2 class="font-semibold text-center text-display-6">
          <Markdown use="title" unwrap="p" />
        </h2>
      </div>
      <ul class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <LogoCard v-for="partner in partners" :key="partner.title" :item="partner" />
      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent, useContext, ref, useFetch } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    category: {
      type: String,
      default: '',
      required: true
    },
    icon: {
      type: String,
      default: '',
      required: true
    }
  },
  setup(props) {
    const { $docus, i18n } = useContext()
    const partners = ref(null)

    useFetch(async () => {
      partners.value = await $docus
        .search('/collections/partners', { deep: true })
        .where({ category: { $in: props.category }, language: i18n.locale })
        .sortBy('position', 'asc')
        .fetch()

      console.log(partners.value)

      // mvp.value = documents.filter(sponsor => sponsor.tier === 'MVP')
      // sponsors.value = documents.filter(sponsor => sponsor.tier === 'Sponsors')
    })

    return {
      partners
    }
  }
})
</script>
