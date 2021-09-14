<template>
  <div class="mt-40 pb-40 sm:pb-44 md:pb-48 lg:pb-68 xl:pb-92 bg-sky-surface">
    <img
      loading="lazy"
      :src="`/img/home/discover/dx/discover-mountain.svg`"
      class="absolute left-0 z-10 object-fill w-full -mt-28 sm:-mt-32 md:-mt-40 lg:-mt-56 xl:-mt-60 2xl:-mt-84"
      alt="A landscape image"
    />
    <section class="relative pt-20">
      <NuxtContainer class="flex flex-col items-center xl:pt-10 text-sky-black">
        <div class="flex flex-col w-full items-center col-span-12">
          <div class="mb-2">
            <span class="text-tertiary font-bold text-lg">{{ category }}</span>
          </div>
          <h2 class="font-normal font-serif text-center text-display-6 md:text-display-5 2xl:text-display-4 mb-2">
            <Markdown use="title" unwrap="p" />
          </h2>
          <p class="font-normal text-center text-body-base md:text-body-lg 2xl:text-body-xl mb-8">
            <Markdown use="description" unwrap="p" />
          </p>
          <PartnersBanner class="pb-0" :partners-logo="partners" />
          <p><Markdown use="bottom" unwrap="p" /></p>
        </div>
      </NuxtContainer>
    </section>
  </div>
</template>

<script>
import { defineComponent, ref, useContext, useFetch } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    category: {
      type: String,
      default: 'Category'
    }
  },
  setup() {
    const { $docus } = useContext()
    const partners = ref()

    useFetch(async () => {
      partners.value = await $docus
        .search('/collections/sponsors', { deep: true })
        .where({ tier: { $in: ['MVP', 'Sponsors', 'Donations'] } })
        .fetch()
    })

    return {
      partners
    }
  }
})
</script>
