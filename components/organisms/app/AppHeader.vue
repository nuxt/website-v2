<template>
  <header class="d-header">
    <div class="flex h-full max-w-7xl mx-auto px-1 sm:px-3 lg:px-6">
      <NavigationButton aria-label="mobileMenu" v-if="aside" class="px-2.5" />

      <div
        :class="[aside ? 'justify-center lg:justify-start' : 'justify-start']"
        class="flex items-center flex-1"
      >
        <Link
          :to="localePath('/')"
          aria-label="homeLink"
        >
          <!-- "mr-4 lg:mr-0" to optically center logo text -->
          <Logo :settings="settings" class="h-8 md:h-9 mr-4 lg:mr-0" />
        </Link>
      </div>

      <nav class="hidden lg:flex items-center justify-center">
        <template v-for="link in links">
          <Dropdown
            v-if="link.items && link.items.length"
            :key="link.slug"
            :items="[link.items]"
            placement="bottom"
            mode="hover"
          >
            <template #trigger>
              <HeaderNavigationLink
                :link="link"
              />
            </template>

            <template #item="{ item }">
              <HeaderNavigationLink
                :link="item"
                class="py-1"
              />
            </template>
          </Dropdown>
          <HeaderNavigationLink
            v-else
            :key="link.slug"
            :link="link"
          />
        </template>
      </nav>

      <div class="flex items-center justify-end lg:flex-1 gap-1">
        <FooterLocaleSelector class="hidden xl:flex flex-shrink-0" />
        <LangSwitcher class="hidden lg:inline-flex xl:hidden relative justify-center w-12 h-12" />
        <FooterColorModeSelector class="hidden xl:flex flex-shrink-0" />
        <ColorSwitcher class="hidden lg:inline-flex xl:hidden items-center justify-center w-12 h-12" />
        <AlgoliaSearchBox
          v-if="settings && settings.algolia"
          :options="settings.algolia"
          :settings="settings"
        />
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
      const header = await $docus
        .search('/collections/navigations', { deep: true })
        .where({ slug: { $in: ['header'] }, language: i18n.locale })
        .fetch()
      links.value = header[0].links
    })

    return {
      settings,
      links
    }
  }
})
</script>
