<template>
  <div class="py-4 d-container-content light:text-sky-darker dark:text-white mb-4">
    <div class="flex space-x-4 items-center pb-4">
      <img :src="`/img/partners/categories/${icon}`" :alt="category" class="w-8 h-8" />
      <h2 :id="category" class="font-semibold text-center text-display-6 relative">
        <Markdown use="category-title" unwrap="p" />
      </h2>
    </div>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <LogoCard v-for="partner in partners" :key="partner.title" :item="partner">
        <template #footer>
          <PartnerServices :services="partner.services" class="text-sm mt-4" />
        </template>
      </LogoCard>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, useContext, ref, useFetch, onMounted } from '@nuxtjs/composition-api'
import { scrollToHeading } from '@docus/theme/runtime'

export default defineComponent({
  props: {
    category: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const { $docus, i18n } = useContext()
    const partners = ref(null)

    useFetch(async () => {
      partners.value = (await $docus.search(`/collections/partners/${props.category}`, { deep: true }).fetch())
        .map(partner => ({ ...partner, link: null, to: `/partners/${partner.slug}` }))
        /* Filter by logo presence to eliminate wrong items sent by Docus API */
        .filter(partner => partner.logo)
    })

    onMounted(() => {
      if (window.location.hash) {
        const hash = window.location.hash.replace('#', '')

        // do not remove setTimeout (wrong scroll pos)
        setTimeout(() => {
          scrollToHeading(hash, '--docs-scroll-margin-block')
        }, 300)
      }
    })

    return {
      partners
    }
  }
})
</script>
