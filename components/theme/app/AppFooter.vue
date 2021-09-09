<template>
  <footer class="" aria-label="footerHeading">
    <div class="select-none pt-24">
      <img
        loading="lazy"
        :src="`/img/footer/dark/landscape.svg`"
        class="w-full h-40 object-fill light:hidden pointer-events-none"
        alt="A landscape image"
      />
      <img
        loading="lazy"
        :src="`/img/footer/${$colorMode.value}/landscape.svg`"
        class="w-full h-40 object-fill dark:hidden pointer-events-none"
        alt="A landscape image"
      />
    </div>
    <div class="bg-gray-50 dark:bg-secondary-black">
      <div
        class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 grid gap-8 lg:gap-0 sm:grid-cols-2 lg:grid-cols-4"
      >
        <div v-for="group in links" :key="group.title">
          <h3 class="font-semibold light:text-gray-500 dark:text-cloud-light text-lg">
            {{ group.title }}
          </h3>
          <ul class="mt-4 space-y-3">
            <li v-for="link in group.items" :key="link.title">
              <NuxtHref
                :href="link.href"
                :to="localePath(link.to)"
                :aria-label="link.title"
                class="light:text-gray-500 dark:text-white hover:d-primary-text-hover"
                >{{ link.title }}</NuxtHref
              >
            </li>
          </ul>
        </div>
        <div>
          <FooterNewsLetter />
          <FooterSocialLinks class="mt-4" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { defineComponent, useContext, useFetch, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { $docus, i18n } = useContext()
    const results = ref()
    const links = ref([])

    useFetch(async () => {
      results.value = await $docus
        .search('/collections/navigations/', { deep: true })
        .where({ slug: { $in: 'footer' }, language: i18n.locale })
        .fetch()
      links.value = results.value[0].links
    })
    return { links }
  }
})
</script>
