<template>
  <div>
    <PageHero :description-full-width="page.heroDescriptionFullWidth">
      <template #title>
        {{ page.heroTitle || page.title }}
      </template>
      <template #description>
        {{ page.heroDescription || page.description }}
      </template>
      <template v-if="page.heroType" #bottom>
        <PartnersBottomHero v-if="page.heroType === 'partners'" />
      </template>
    </PageHero>
    <div class="d-container px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
      <LogoCard v-for="item in list" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, useNuxtApp, useLazyAsyncData } from '#app'
import { useDocusContent } from '#docus'

export default defineComponent({
  props: {
    page: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const $content = useDocusContent()
    const { i18n } = useNuxtApp().vue2App

    const { data: list } = useLazyAsyncData(
      'page-list',
      async () =>
        await $content
          .search(props.page.to, { deep: true })
          .where({ slug: { $ne: '' }, language: i18n.locale })
          .fetch()
    )

    return {
      list
    }
  }
})
</script>
