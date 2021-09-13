<template>
  <nav class="flex flex-col gap-0 py-4 px-4 sm:px-6">
    <template v-for="link in links">
      <div v-if="link.items && link.items.length" :key="link.slug" class="flex flex-col py-2">
        <div class="flex items-center justify-between cursor-pointer" @click="toggle(link.slug)">
          <HeaderNavigationLink :link="link" />
          <IconChevronBottom v-if="openedLink === link.slug" class="flex-shrink-0 w-4 h-4" />
          <IconChevronRight v-else class="flex-shrink-0 w-4 h-4" />
        </div>
        <div v-show="openedLink === link.slug" class="pl-4 py-2 gap-2">
          <HeaderNavigationLink v-for="subLink in link.items" :key="subLink.slug" :link="subLink" />
        </div>
      </div>
      <HeaderNavigationLink v-else :key="link.slug" :link="link" class="py-2" />
    </template>
  </nav>
</template>

<script>
import { defineComponent, useContext, useRoute, useFetch, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { $docus, i18n } = useContext()
    const route = useRoute()

    const header = ref()
    const links = ref([])
    const openedLink = ref('')

    useFetch(async () => {
      header.value = await $docus
        .search('/collections/navigations', { deep: true })
        .where({ slug: { $in: 'header' }, language: i18n.locale })
        .fetch()
      links.value = header.value[0].links

      const currentSlug =
        route.value.path !== '/' && route?.value?.params?.pathMatch ? route.value.params.pathMatch.split('/')[0] : null
      if (currentSlug) {
        for (const link of links.value) {
          if (link.slug === currentSlug || link.items?.some(item => item.slug === currentSlug)) {
            openedLink.value = link.slug
            break
          }
        }
      }
    })

    function toggle(slug) {
      if (openedLink.value === slug) {
        openedLink.value = ''
      } else {
        openedLink.value = slug
      }
    }

    return {
      links,
      openedLink,
      toggle
    }
  }
})
</script>
