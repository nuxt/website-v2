<template>
  <div class="d-container-content">
    <div class="lg:flex">
      <AsideEvents />
      <div
        class="grid w-full min-w-0 min-h-0 gap-8 px-4 mt-8  md:px-0 lg:w-4/5 lg:static lg:overflow-visible md:grid-cols-2 lg:ml-20 auto-rows-min"
      >
        <div v-for="event in events" :key="event.title">
          <EventsCard :event="event" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, useFetch, useContext, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  directives: {
    focus: {
      inserted(el) {
        el.focus()
      }
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
    })

    return {
      events
    }
  }
})
</script>
