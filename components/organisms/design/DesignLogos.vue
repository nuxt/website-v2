<template>
  <div v-if="logosMd">
    <div v-for="(content, i) in logosMd" :key="i" class="grid grid-cols-1 sm:grid-cols-3 sm:gap-6">
      <div v-for="(logo, index) in content.logos" :key="index" class="mt-4">
        <div v-if="logo">
          <div
            class="border px-12 py-10 flex justify-center rounded-md max-h-36"
            :class="logo.color === 'light' ? 'bg-secondary-black border-white' : 'bg-white'"
          >
            <img loading="lazy" :src="`${logo.logoImg}.svg`" />
          </div>
          <div class="flex w-full justify-between pt-2 pb-4">
            <div class="font-semibold">{{ logo.type }}</div>
            <div class="flex space-x-2">
              <a
                class="hover:text-primary light:text-gray-500 dark:white hover:underline"
                :href="`${logo.logoImg}.svg`"
                aria-label="Download svg"
                download
                >SVG</a
              >
              <a
                class="hover:text-primary light:text-gray-500 dark:white hover:underline"
                :href="`${logo.logoImg}.png`"
                aria-label="Download png"
                download
                >PNG</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, useContext, ref, useFetch } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    type: {
      type: String,
      default: 'monogram'
    }
  },
  setup(props) {
    const { $docus, i18n } = useContext()
    const logosMd = ref()

    useFetch(async () => {
      logosMd.value = await $docus
        .search('/collections/design', { deep: true })
        .where({ slug: { $in: props.type }, language: i18n.locale })
        .fetch()
    })

    return {
      logosMd
    }
  }
})
</script>
