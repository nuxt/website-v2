<template>
  <nav ref="nav" class="flex flex-col gap-0 py-4 px-4 sm:px-6">
    <template v-for="(link, index) in links">
      <div v-if="link.items && link.items.length" :key="index" class="flex flex-col py-2">
        <div class="flex items-center justify-between cursor-pointer" @click="toggle(index)">
          <HeaderNavigationLink :link="link" />
          <IconChevronBottom v-if="openedLink === index" class="flex-shrink-0 w-4 h-4" />
          <IconChevronRight v-else class="flex-shrink-0 w-4 h-4" />
        </div>
        <div v-show="openedLink === index" class="pl-2 pt-2 gap-2">
          <HeaderNavigationLink
            v-for="(subLink, subIndex) in link.items"
            :key="subIndex"
            :link="subLink"
            class="rounded-md px-2 py-1 text-sm"
            active-class="d-active-aside-navigation-item-bg"
            inactive-class="d-secondary-text hover:d-secondary-text-hover"
          />
        </div>
      </div>
      <HeaderNavigationLink v-else :key="index" :link="link" class="py-2" />
    </template>
  </nav>
</template>

<script>
import { defineComponent, useContext, useRoute, ref, computed, watch } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    links: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const { $docus, $menu } = useContext()
    const route = useRoute()
    const nav = ref(null)
    const openedLink = ref(null)
    const currentSlug = computed(() => {
      return route.value.path !== '/' && route?.value?.params?.pathMatch
        ? route.value.params.pathMatch.split('/')[0]
        : null
    })

    function selectActiveLink() {
      if (currentSlug.value) {
        for (const [index, link] of props.links.entries()) {
          if (link.slug === currentSlug.value || link.items?.some(item => item.slug === currentSlug.value)) {
            openedLink.value = index
            break
          }
        }
      } else {
        openedLink.value = null
      }
    }

    selectActiveLink()

    watch($menu.visible, value => {
      if (value) {
        selectActiveLink()
      }
    })

    function toggle(index) {
      if (openedLink.value === index) {
        openedLink.value = null
      } else {
        openedLink.value = index
      }
    }

    return {
      openedLink,
      toggle,
      nav
    }
  }
})
</script>
