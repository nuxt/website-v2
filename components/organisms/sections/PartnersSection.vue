<template>
  <div class="py-4 d-container-content light:text-sky-darker dark:text-white mb-4">
    <div class="flex space-x-4 items-center pb-4">
      <img :src="icon" :alt="category" class="w-8 h-8" />
      <h2 class="font-semibold text-center text-display-6">
        <Markdown use="category-title" unwrap="p" />
      </h2>
    </div>
    <ul class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <LogoCard v-for="partner in partners" :key="partner.title" :item="partner">
        <template #footer>
          <PartnerServices :services="partner.services" class="text-sm mt-4" />
        </template>
      </LogoCard>
    </ul>
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
    })

    return {
      partners
    }
  }
})
</script>
