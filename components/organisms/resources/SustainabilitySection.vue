<template>
  <div class="py-4 d-container-content">
    <div class="flex flex-col items-center pt-8 space-y-4 light:text-sky-darker dark:text-white">
      <h2 class="font-semibold text-center text-display-6">
        <Markdown use="titleSection" unwrap="p" />
      </h2>

      <div class="flex justify-center w-full pb-16 text-lg">
        <p class="text-center md:w-2/3">
          <Markdown use="descriptionSection" unwrap="p" />
        </p>
      </div>

      <div v-for="(sponsor, index) in sponsors" :key="index" class="text-center">
        <h2 class="font-semibold text-display-6">{{ sponsor.tier }}</h2>
        <div class="flex flex-wrap justify-center pt-8 pb-16 -mx-8">
          <NuxtHref
            v-for="logo in sponsor.logos"
            :key="logo.title"
            :href="logo.url"
            :aria-label="logo.title"
            class="mx-8 my-4"
          >
            <img :src="`/img/sponsors/${$colorMode.value}/${logo.img}`" :alt="logo.title" :class="logo.size" />
          </NuxtHref>
        </div>
      </div>
      <SectionButton
        to="https://github.com/sponsors/nuxt"
        :aria-label="buttonText"
        size="md"
        class="text-gray-800 bg-primary hover:bg-primary-400 focus:bg-primary-400">
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

    const { $docus } = useContext()
    const sponsors = ref()

    useFetch(async () => {
      sponsors.value = await $docus
        .search('/sponsors', { deep: true })
        .sortBy('position', 'asc')
        .fetch()
      sponsors.value = sponsors.value.filter(sponsor => sponsor.tier).reduce((acc, val) => {
        if (val.tier === "MVP Partners") {
          acc[0].logos.push(val)
        } else if (val.tier === "Partners") {
          acc[1].logos.push(val)
        } else {
          acc[2].logos.push(val)
        }
        return acc;
      }, [{tier: "MVP Partners", logos: []}, {tier: "Partners", logos: []}, {tier: "Sponsors", logos: []}])

    })

    return {
      sponsors
    }
  }
})
</script>
