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
    <div class="d-container px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
      <LogoCard v-for="(item, index) in events" :key="index" :item="item">
        <template #footer>
          <div class="flex items-center" :class="item.eventLogo ? 'justify-between' : 'justify-end'">
            <AppLink v-if="item.eventLogo && item.eventLink" :href="item.eventLink" class="z-10">
              <img :src="`/img/events/light/${item.eventLogo}`" :alt="item.name" loading="lazy" class="h-5 light-img" />
              <img :src="`/img/events/dark/${item.eventLogo}`" :alt="item.name" loading="lazy" class="h-5 dark-img" />
            </AppLink>
            {{ item.displayDate }}
          </div>
        </template>

        <template #external>
          <div class="flex items-center gap-1">
            <span class="text-sm font-medium text-gray-400">{{ $t('common.watch_video') }}</span>
            <img :src="`/img/icons/ext.svg`" alt="external_link" loading="lazy" />
          </div>
        </template>
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

    const formatDateByLocale = (locale, d) => {
      const currentLocale = locale || 'en'
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(d).toLocaleDateString(currentLocale, options)
    }

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
        .map(event => {
          const date = parse(event.date, 'dd/MM/yyyy', new Date())
          return {
            ...event,
            displayDate: formatDateByLocale(i18n.locale, date),
            CTA: isFuture(date) ? 'Subscribe' : 'Watch'
          }
        })
    })

    return {
      events
    }
  }
})
</script>
