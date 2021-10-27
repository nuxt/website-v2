<template>
  <header :class="isHome ? 'd-header-home' : 'd-header'">
    <div class="flex items-center h-full px-1 mx-auto max-w-7xl sm:px-3 lg:px-6">
      <NavigationButton
        aria-label="mobileMenu"
        class="w-12 h-12 lg:hidden"
        :class="{ 'text-gray-300 hover:text-cloud-lighter': isHome }"
      />

      <div class="flex items-center flex-1 justify-center lg:justify-start">
        <AppLink :to="localePath('/')" aria-label="homeLink">
          <!-- "mr-4 lg:mr-0" to optically center logo text -->
          <Logo :settings="settings" class="h-8 mr-4 md:h-9 lg:mr-0" :class="{ 'text-white': isHome }" />
        </AppLink>
      </div>

      <nav class="items-center justify-center hidden h-full lg:flex">
        <template v-for="(link, index) in links">
          <Dropdown
            v-if="link.items && link.items.length"
            :key="index"
            :items="[link.items]"
            main-link-class="mx-2"
            placement="bottom"
            mode="hover"
            :dropdown-menu-class="
              ('h-full', isHome ? 'bg-sky-darkest text-white' : 'bg-cloud-surface dark:bg-sky-darkest')
            "
            dropdown-class="w-max"
            :open-delay="0"
            :items-class="`py-1 grid grid-cols-${Math.round(link.items.length / 3)}`"
          >
            <template #trigger>
              <HeaderNavigationLink
                :link="link"
                class="px-1 py-2"
                :class="{ 'text-white': isHome }"
                :force-active="isActiveGroup(link)"
                :inactive-class="`${!isHome ? 'hover:d-primary-text-hover ' : 'hover:text-gray-300'}`"
              >
                {{ link.title }}
              </HeaderNavigationLink>
            </template>

            <template #item="{ item }">
              <HeaderNavigationLink
                :link="item"
                class="px-2 py-1"
                :class="{ 'text-white': isHome }"
                :inactive-class="`${!isHome ? 'hover:text-sky-black dark:hover:text-white' : 'hover:text-white'}`"
              >
                <HeaderDropdownItem
                  :title="item.title"
                  :subtitle="item.subtitle"
                  :icon="item.icon"
                  :color-class="item.color"
                /> </HeaderNavigationLink
            ></template>
          </Dropdown>
          <HeaderNavigationLink
            v-else
            :key="index"
            :link="link"
            class="px-1 py-2"
            :class="{ 'text-white': isHome }"
            :inactive-class="`${!isHome ? 'hover:d-primary-text-hover ' : 'hover:text-gray-300'}`"
          >
            {{ link.title }}
          </HeaderNavigationLink>
        </template>
      </nav>

      <div class="flex items-center justify-end gap-1 lg:flex-1">
        <LangSwitcher
          class="hidden lg:inline-flex"
          :class="{ 'text-white': isHome }"
          :icon-class="`w-6 h-6 m-auto ${
            isHome ? 'text-gray-300 hover:text-primary-400' : 'd-secondary-text hover:d-secondary-text-hover'
          }`"
        />
        <ColorSwitcher v-if="!isHome" class="hidden lg:block" />
        <AlgoliaSearchBox v-if="settings && settings.algolia" :options="settings.algolia" :settings="settings" />
      </div>
    </div>
  </header>
</template>

<script>
import { defineComponent, useContext, computed } from '@nuxtjs/composition-api'
import { useNav } from '~/plugins/nav'

export default defineComponent({
  props: {
    links: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    const { $docus } = useContext()
    const { isHome, currentSlug } = useNav()
    const settings = computed(() => $docus.settings.value)

    function isActiveGroup(link) {
      if (link.slug === currentSlug.value || link.items?.some(item => item.slug === currentSlug.value)) {
        return true
      }
      return false
    }

    return {
      settings,
      isHome,
      isActiveGroup
    }
  }
})
</script>
