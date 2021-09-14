<template>
  <div class="px-8 py-4 nuxt-text-highlight dark:bg-secondary-darkest rounded-md">
    <div class="whitespace-nowrap font-medium text-lg mb-4">
      {{ formatDateByLocale($i18n.locale, date) }}
    </div>
    <div class="grid grid-cols-4 gap-4 sm:gap-8 font-bold">
      <div class="flex flex-col items-center">
        <span class="text-5xl">{{ days }}</span>
        <span class="uppercase text-sm">{{ $t('common.days') }}</span>
      </div>
      <div class="flex flex-col items-center">
        <span class="text-5xl">{{ hours }}</span>
        <span class="uppercase text-sm">{{ $t('common.hours') }}</span>
      </div>
      <div class="flex flex-col items-center">
        <span class="text-5xl">{{ minutes }}</span>
        <span class="uppercase text-sm">{{ $t('common.minutes') }}</span>
      </div>
      <div class="flex flex-col items-center">
        <span class="text-5xl">{{ seconds }}</span>
        <span class="uppercase text-sm">{{ $t('common.seconds') }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from '@nuxtjs/composition-api'
import { parseISO } from 'date-fns'

export default defineComponent({
  setup() {
    const date = ref(parseISO('2021-10-12T16:00:00+02:00'))
    const now = new Date()

    const timer = ref(0)
    setInterval(() => {
      timer.value += 1000
    }, 1000)

    const remainingMilliseconds = computed(() => {
      return date.value.getTime() - (now.getTime() + timer.value)
    })

    const days = computed(() => {
      return Math.floor(remainingMilliseconds.value / (24 * 60 * 60 * 1000))
    })
    const hours = computed(() => {
      return Math.floor((remainingMilliseconds.value % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000))
    })
    const minutes = computed(() => {
      return Math.floor((remainingMilliseconds.value % (60 * 60 * 1000)) / (60 * 1000))
    })
    const seconds = computed(() => {
      return Math.floor((remainingMilliseconds.value % (60 * 1000)) / 1000)
    })

    const formatDateByLocale = (locale, d) => {
      const currentLocale = locale || 'en'
      const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', timeZoneName: 'short' }
      return new Date(d).toLocaleDateString(currentLocale, options)
    }

    return {
      date,
      days,
      hours,
      minutes,
      seconds,
      formatDateByLocale
    }
  }
})
</script>
