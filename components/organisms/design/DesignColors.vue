<template>
  <div>
    <div v-for="content in colorsMd" :key="content.slug" class="grid grid-cols-2 py-4 gap-6">
      <div v-for="color in content.colors" :key="color.slug">
        <div class="w-full h-32 rounded-lg" :class="color.bg_color" />
        <div class="font-semibold pt-4">{{ color.name }}</div>
        <div>{{ color.hexa }}</div>
        <div>{{ `RGB: ${color.rgb}` }}</div>
      </div>
    </div>
    <div class="mt-4">
      <a
        href="/design-kit/DesignKitColors.fig"
        :aria-label="buttonText"
        class="font-medium rounded bg-primary text-gray-800 hover:bg-primary-400 focus:bg-primary-400 py-3 px-4"
        download
        ><span class="font-medium">{{ buttonText }}</span></a
      >
    </div>
  </div>
</template>

<script>
import { defineComponent, useContext, ref, useFetch } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    buttonText: {
      type: String,
      default: ''
    }
  },
  setup() {
    const { $docus, i18n } = useContext()
    const colorsMd = ref()

    useFetch(async () => {
      colorsMd.value = await $docus
        .search('/collections/design', { deep: true })
        .where({ slug: { $in: 'colors' }, language: i18n.locale })
        .fetch()
    })

    return {
      colorsMd
    }
  }
})
</script>
