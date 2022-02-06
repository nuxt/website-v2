<template>
  <nav
    class="
      flex flex-col
      justify-start
      max-w-sm
      overflow-y-auto
      text-sm
      font-medium
      lg:h-[reset]
      h-(full-header)
      d-scrollbar
      py-4
      px-4
      sm:px-6
      lg:pr-0 lg:pt-8
    "
  >
    <!-- Back link -->
    <NuxtLink v-show="parent" class="mb-3 block" :to="(parent && $contentLocalePath(parent.to)) || ''">
      <IconArrowLeft width="16" height="16" class="inline-block mr-2" /> {{ parent && parent.title }}
    </NuxtLink>

    <!-- Title -->
    <!-- <h5 v-if="!isDirectory && title" class="py-2 text-gray-400 font-bold uppercase">
      {{ title }}
    </h5> -->

    <!-- Links list -->
    <ul>
      <template v-for="link in links">
        <AsideNavigationItem
          v-if="link.nested !== false && link.children.length"
          :key="link.to"
          :title="link.title"
          :docs="link.children"
          :collapse.sync="link.collapse"
        />
        <AsideNavigationItem v-else :key="link.to" :docs="[link]" />
      </template>
    </ul>

    <AsideBottom />
  </nav>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { $docus } = useContext()

    // Replicate currentNav locally
    const links = ref($docus.currentNav.value.links)

    // Category title
    const title = ref($docus.currentNav.value.title)

    // Category slug
    const slug = ref($docus.currentNav.value.slug)

    // Check if current current navigation has directories
    const isDirectory = computed(
      () => links.value.filter(link => link.children && link.children.length > 0).length === 0
    )

    // Watch updates on currentNav
    watch(
      $docus.currentNav,
      newVal => {
        links.value = newVal.links
        title.value = newVal.title
        slug.value = newVal.slug
      },
      { deep: true }
    )

    // Uncollapse current category on first navigation
    watch(
      links,
      newVal => {
        newVal.forEach(link => {
          if (link.children && link.children.length > 0) {
            const isCategoryActive = link.children.some(document => $docus.isLinkActive(document.to))

            if (isCategoryActive) {
              link.collapse = false
            }
          }
        })
      },
      { immediate: true }
    )

    // Get parent
    const parent = computed(() => $docus.currentNav.value.parent)

    // Get last release value
    const lastRelease = computed(() => $docus.lastRelease?.value)

    return { isDirectory, links, title, slug, parent, lastRelease }
  }
})
</script>
