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
import { defineComponent, useContext, useFetch, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const { $docus } = useContext()
    const lastRelease = ref(null)

    useFetch(async () => {
      const { body } = await $docus.data('github-releases')

      if (body?.releases?.length) {
        lastRelease.value = body.releases[0].name
      }
    })

    return { lastRelease }
  }
})
</script>
