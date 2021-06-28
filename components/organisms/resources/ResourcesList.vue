<template>
  <div class="px-6 mb-8 d-container-content">
    <div class="flex flex-wrap grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <ContentCardTemplate
        v-for="({ title, description, image, href }, id) in resources"
        :key="id"
        :title="title"
        :description="description"
        :image="image"
        :href="href"
      >
        <div slot="footer" class="px-4 mb-6 h-full flex items-end">
          <MarketingLink color="primary-green" :name="`Go to ${title}`" icon="IconChevronRight" :to="href" size="sm" />
        </div>
      </ContentCardTemplate>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    resources: {
      type: Object,
      default: () => {}
    }
  }
})
</script>
