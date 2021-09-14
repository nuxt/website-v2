<template>
  <div>
    <div class="grid grid-cols-4 gap-4 sm:gap-8 mb-6 font-bold">
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
    <span class="whitespace-nowrap font-medium text-lg">{{ formatDateByLocale($i18n.locale, date) }}</span>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from '@nuxtjs/composition-api'
import { parse } from 'date-fns'

export default defineComponent({
  setup() {
    const date = ref(parse('12/10/2021', 'dd/MM/yyyy', new Date()))
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
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
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
