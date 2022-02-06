<template>
  <div class="px-6 mb-8 mt-16">
    <div class="flex flex-wrap grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <ContentCardTemplate
        v-for="({ title, description, image, price, href }, id) in themes"
        :key="id"
        class=""
        :title="title"
        :description="description"
        :image="image"
        :href="href"
      >
        <div slot="footer" class="-mb-2 sm:mb-0">
          <AppButton :href="href">
            {{ $t('resources.themes.get_for_it', { price }) }}
          </AppButton>
        </div>
      </ContentCardTemplate>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    themes: {
      type: Object,
      default: () => {}
    }
  }
})
</script>
