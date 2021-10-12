<template>
  <div class="px-6 mb-8 pt-12">
    <div class="flex flex-wrap grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <ContentCardTemplate
        v-for="({ title, description, image, tier, link }, id) in videoCourses"
        :key="id"
        class=""
        :title="title"
        :description="description"
        :image="image"
        :tags="[tier]"
        :href="link"
      >
        <div slot="footer" class="mt-auto mb-6 mx-4">
          <NuxtButton
            :href="link"
            size="md"
            :aria-label="$t('resources.themes.video_course')"
            class="bg-primary text-gray-800 hover:bg-primary-400 focus:bg-primary-400"
          >
            {{ $t('resources.themes.video_course') }}
          </NuxtButton>
        </div>
      </ContentCardTemplate>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    videoCourses: {
      type: Object,
      default: () => {}
    }
  }
})
</script>
