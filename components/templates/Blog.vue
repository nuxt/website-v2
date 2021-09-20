<template>
  <div>
    <PageHero :description-full-width="page.heroDescriptionFullWidth">
      <template #title>
        {{ page.heroTitle || page.title }}
      </template>
      <template #description>
        {{ page.heroDescription || page.description }}
      </template>
    </PageHero>
    <div class="d-container">
      <DocusContent v-if="!page.blogPostList" :document="page" />
      <BlogpostList v-else :slug="page.to" :sort-by="page.sortBy" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    page: {
      type: Object,
      required: true
    }
  }
})
</script>
