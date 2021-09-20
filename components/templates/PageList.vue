<template>
  <div>
    <PageHero :description-full-width="page.heroDescriptionFullWidth" :button="page.heroButton">
      <template #title>
        {{ page.heroTitle || page.title }}
      </template>
      <template #description>
        {{ page.heroDescription || page.description }}
      </template>
    </PageHero>
    <div class="d-container px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
      <LogoCard v-for="item in list" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, useContext, useFetch } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    page: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const { $docus, i18n } = useContext()
    const list = ref()

    useFetch(async () => {
      const results = await $docus
        .search(props.page.to, { deep: true })
        .where({ slug: { $ne: '' }, language: i18n.locale })
        .fetch()

      list.value = results
    })
    return {
      list
    }
  }
})
</script>
