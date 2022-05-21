<template>
  <div class="py-4 d-container-content light:text-sky-darker dark:text-white mb-4">
    <div class="flex space-x-4 items-center pb-4">
      <img :src="`/img/partners/categories/${icon}`" :alt="category" class="w-8 h-8" />
      <h2 :id="category" class="font-semibold text-center text-display-6 relative">
        <Markdown use="category-title" unwrap="p" />
      </h2>
    </div>
    <div v-if="partners" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <LogoCard v-for="partner in partners" :key="partner.id" :item="partner">
        <template #footer>
          <PartnerServices :services="partner.profile.services" class="text-sm mt-4" />
        </template>
      </LogoCard>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from '@nuxtjs/composition-api'
import { scrollToHeading } from '@docus/theme/runtime'
import { usePartners } from '~/plugins/partners'

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
    const { fetch: fetchPartners } = usePartners()
    const partners = ref([])

    onMounted(async () => {
      if (window.location.hash) {
        const hash = window.location.hash.replace('#', '')

        // do not remove setTimeout (wrong scroll pos)
        setTimeout(() => {
          scrollToHeading(hash, '--docs-scroll-margin-block')
        }, 300)
      }

      const results = await fetchPartners(props.category)
      // mapping for LogoCard
      partners.value = results.map(partner => ({
        ...partner,
        to: '/partners/' + partner.slug,
        logo: {
          dark: partner.profile.logoDark?.url,
          light: partner.profile.logoLight?.url
        },
        title: partner.name,
        description: partner.profile.shortDescription
      }))
    })

    return {
      partners
    }
  }
})
</script>
