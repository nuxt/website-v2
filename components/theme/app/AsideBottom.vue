<template>
  <div>
    <AppLink
      v-if="
        masterCoursesLink &&
        ($docus.currentPath.value.startsWith('/docs') || $docus.currentPath.value.startsWith('/examples'))
      "
      :href="masterCoursesLink.href"
      rel="noopener"
      :aria-label="masterCoursesLink.title"
      class="
        mt-2
        flex
        font-medium
        rounded-md
        hover:text-sky-black
        dark:hover:text-white
        bg-gray-100
        dark:bg-white dark:bg-opacity-10 dark:bg-opacity-10
        hover:bg-opacity-9
      "
    >
      <div class="p-2 flex space-x-2">
        <div class="mt-1 rounded-md w-8 h-8 p-2 bg-green-800 flex-shrink-0">
          <img :src="`/img/header/${masterCoursesLink.icon}`" :alt="masterCoursesLink.title" />
        </div>
        <div>
          <h5 class="font-bold text-sm">{{ masterCoursesLink.title }}</h5>
          <p class="text-xs">{{ masterCoursesLink.subtitle }}</p>
        </div>
      </div>
    </AppLink>
    <div v-if="$docus.currentPath.value.startsWith('/docs')">
      <AppLink v-if="lastRelease" to="/releases" class="flex items-center group nuxt-text-highlight-hover mt-4">
        <IconNuxt class="w-5 h-5 mr-2" />
        <span>{{ $t('common.version') }}: {{ lastRelease }}</span>
      </AppLink>
      <AppLink href="https://v3.nuxtjs.org" class="flex items-center group nuxt-text-highlight-hover mt-4">
        <IconNuxt class="w-5 h-5 mr-2 text-primary" />
        <span>{{ $t('common.version') }}: v3.x (Beta)</span>
      </AppLink>
    </div>
  </div>
</template>

<script>
import get from 'lodash/get'
import { defineComponent, useContext, useFetch, ref, watch } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const {
      $docus,
      app: { i18n }
    } = useContext()

    const lastRelease = ref(null)
    useFetch(async () => {
      const { body } = await $docus.data('github-releases')

      if (body?.releases?.length) {
        lastRelease.value = body.releases[0].name
      }
    })

    const masterCoursesLink = ref(null)

    watch(
      () => i18n.locale,
      async () => {
        const header = await $docus
          .search('/collections/navigations', { deep: true })
          .where({ slug: { $in: 'header' }, language: i18n.locale })
          .fetch()
        masterCoursesLink.value = get(header, [0, 'links', 1, 'items', 3])
      },
      { immediate: true }
    )

    return { lastRelease, masterCoursesLink }
  }
})
</script>
