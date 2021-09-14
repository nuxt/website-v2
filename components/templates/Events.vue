<template>
  <div>
    <PageHero
      :title="page.heroTitle || page.title"
      :description="page.heroDescription || page.description"
      :description-full-width="page.heroDescriptionFullWidth"
    />
    <div class="d-container px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
      <LogoCard v-for="(item, index) in events" :key="index" :item="item">
        <template #footer> {{ item.date }}</template>
      </LogoCard>
    </div>
  </div>
</template>

<script>
import { defineComponent, useFetch, useContext, ref } from '@nuxtjs/composition-api'
import { isFuture, parse } from 'date-fns'

export default defineComponent({
  props: {
    page: {
      type: Object,
      required: true
    }
  },
  setup(_) {
    const { $docus, i18n } = useContext()
    const events = ref([])

    useFetch(async () => {
      const eventsCollection = await $docus
        .search('/collections/events', { deep: true })
        .where({ language: i18n.locale })
        .sortBy('position', 'desc')
        .fetch()
      events.value = eventsCollection
        .filter(e => e.events)
        .map(e => e.events)
        .flat()
        .filter(v => v)
        .map(event => ({
          ...event,
          CTA: isFuture(parse(event.date, 'dd/MM/yyyy', new Date())) ? 'Subscribe' : 'Watch'
        }))
    })

    return {
      events
    }
  }
})
</script>
