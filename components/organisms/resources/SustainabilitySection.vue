<template>
  <div class="py-4 d-container-content">
    <div class="flex flex-col items-center light:text-sky-darker dark:text-white pt-8 space-y-4">
      <h2 class="font-semibold text-display-6 text-center">
        <Markdown use="titleSection" unwrap="p" />
      </h2>

      <div class="text-lg w-full flex justify-center pb-16">
        <p class="text-center md:w-2/3">
          <Markdown use="descriptionSection" unwrap="p" />
        </p>
      </div>

      <div v-for="(sponsors, index) in sustainability" :key="index" class="text-center">
        <h2 class="text-display-6 font-semibold">{{ sponsors.tier }}</h2>
        <div class="flex flex-wrap justify-center -mx-8 pt-8 pb-16">
          <NuxtHref
            v-for="logo in sponsors.logos"
            :key="logo.title"
            :href="logo.url"
            :aria-label="logo.title"
            class="mx-8 my-4"
          >
            <img :src="`/img/sponsors/${$colorMode.value}/${logo.img}.png`" :alt="logo.title" :class="logo.size" />
          </NuxtHref>
        </div>
      </div>
      <SectionButton
        to="https://github.com/sponsors/nuxt"
        :aria-label="buttonText"
        size="md"
        class="bg-primary text-gray-800 hover:bg-green-300 focus:bg-green-300">
          {{ buttonText }}
      </SectionButton>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, useContext, ref, useFetch } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    buttonText: {
      type: String,
      default: '',
      required: true
    }
  },
  setup() {

    const { $docus, i18n } = useContext()
    const sustainability = ref()

    useFetch(async () => {
      sustainability.value = await $docus
        .search('/sustainability', { deep: true })
        .where({ 'language': i18n.locale })
        .sortBy('position', 'asc')
        .fetch()
      sustainability.value = sustainability.value.filter(sustainability => sustainability.tier)
    })

    return {
      sustainability
    }
  }
})
</script>
