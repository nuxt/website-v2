<template>
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
</template>

<script>
import { defineComponent, ref } from '#app'
import { useGitHub } from '@docus/github/runtime'

export default defineComponent({
  setup() {
    const { releases, fetchReleases } = useGitHub()

    fetchReleases()

    const lastRelease = computed(() => releases.values?.[0].name || false)

    return { lastRelease }
  }
})
</script>
