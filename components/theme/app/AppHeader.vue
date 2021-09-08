<template>
  <header class="d-header">
    <div class="flex h-full px-1 mx-auto max-w-7xl sm:px-3 lg:px-6">
      <NavigationButton v-if="aside" aria-label="mobileMenu" class="px-2.5" />

      <div :class="[aside ? 'justify-center lg:justify-start' : 'justify-start']" class="flex items-center flex-1">
        <Link :to="localePath('/')" aria-label="homeLink">
          <!-- "mr-4 lg:mr-0" to optically center logo text -->
          <Logo :settings="settings" class="h-8 mr-4 md:h-9 lg:mr-0" />
        </Link>
      </div>

      <nav class="items-center justify-center hidden h-full gap-4 lg:flex">
        <template v-for="link in links">
          <Dropdown
            v-if="link.items && link.items.length"
            :key="link.slug"
            :items="[link.items]"
            placement="bottom"
            mode="hover"
          >
            <template #trigger>
              <HeaderNavigationLink :link="link" class="p-1" />
            </template>

            <template #item="{ item }">
              <HeaderNavigationLink :link="item" class="px-4 py-1" />
            </template>
          </Dropdown>
          <HeaderNavigationLink v-else :key="link.slug" :link="link" class="p-1" />
        </template>
      </nav>

      <div class="flex items-center justify-end gap-1 lg:flex-1">
        <LangSwitcher class="hidden lg:inline-flex" />
        <ColorSwitcher class="hidden lg:block" />
        <AlgoliaSearchBox v-if="settings && settings.algolia" :options="settings.algolia" :settings="settings" />
      </div>
    </div>
  </header>
</template>

<script>
import { defineComponent, useContext, useFetch, ref, computed } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    aside: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const { $docus, i18n } = useContext()
    const settings = computed(() => $docus.settings.value)

    const links = ref([])

    useFetch(async () => {
      const header = await $docus.search('/collections/navigations/header').where({ language: i18n.locale }).fetch()
      links.value = header.links
    })

    return {
      settings,
      links
    }
  }
})
</script>
