<template>
  <header :class="home ? 'd-header-home' : 'd-header'">
    <div class="flex h-full px-1 mx-auto max-w-7xl sm:px-3 lg:px-6">
      <NavigationButton aria-label="mobileMenu" class="px-2.5 lg:hidden" />

      <div class="flex items-center flex-1 justify-center lg:justify-start">
        <Link :to="localePath('/')" aria-label="homeLink">
          <!-- "mr-4 lg:mr-0" to optically center logo text -->
          <Logo :settings="settings" class="h-8 mr-4 md:h-9 lg:mr-0" :class="{ 'text-white': home }" />
        </Link>
      </div>

      <nav class="items-center justify-center hidden h-full gap-4 lg:flex">
        <template v-for="(link, index) in links">
          <Dropdown
            v-if="link.items && link.items.length"
            :key="index"
            :items="[link.items]"
            placement="bottom"
            mode="hover"
          >
            <template #trigger>
              <HeaderNavigationLink
                :link="link"
                class="px-1 py-2"
                :class="{ 'text-white': home }"
                :force-active="isActiveGroup(link)"
              />
            </template>

            <template #item="{ item }">
              <HeaderNavigationLink :link="item" class="px-4 py-1" :class="{ 'text-white': home }" />
            </template>
          </Dropdown>
          <HeaderNavigationLink v-else :key="index" :link="link" class="p-1" :class="{ 'text-white': home }" />
        </template>
      </nav>

      <div class="flex items-center justify-end gap-1 lg:flex-1">
        <LangSwitcher
          class="hidden lg:inline-flex"
          :class="{ 'text-white': home }"
          :icon-class="`w-6 h-6 m-auto ${
            home ? 'text-gray-300 hover:text-primary-400' : 'd-secondary-text hover:d-secondary-text-hover'
          }`"
        />
        <ColorSwitcher class="hidden lg:block" />
        <AlgoliaSearchBox v-if="settings && settings.algolia" :options="settings.algolia" :settings="settings" />
      </div>
    </div>
  </header>
</template>

<script>
import { defineComponent, useContext, useRoute, computed } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    links: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    const { $docus } = useContext()
    const settings = computed(() => $docus.settings.value)
    const route = useRoute()
    const currentSlug = computed(() => {
      return route.value.path !== '/' && route?.value?.params?.pathMatch
        ? route.value.params.pathMatch.split('/')[0]
        : null
    })

    const home = computed(() => $docus.currentPath.value === '/')
    function isActiveGroup(link) {
      if (link.slug === currentSlug.value || link.items?.some(item => item.slug === currentSlug.value)) {
        return true
      }
      return false
    }

    return {
      settings,
      home,
      isActiveGroup
    }
  }
})
</script>
