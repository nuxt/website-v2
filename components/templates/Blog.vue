<template>
  <div>
    <PageHero
      :title="page.heroTitle || page.title"
      :description="page.heroDescription || page.description"
      :description-full-width="page.heroDescriptionFullWidth"
    />
    <div class="d-container">
      <DocusContent :document="page" />
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
  },
  templateOptions: {
    aside: false,
    fluid: true
  }
})
</script>
