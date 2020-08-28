<template>
  <div class="shadow-nuxt">
    <div class="container mx-auto px-4 lg:flex pb-12">
      <TheMobileAsideNavResources :categories="categories" />
      <TheAsideNavResources :categories="categories" class="hidden lg:block" />
      <div
        class="min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4"
      >
        <nuxt-child />
      </div>
    </div>
  </div>
</template>

<script>
import uniq from 'lodash/uniq'

export default {
  async asyncData({ $content, app, params }) {
    const resources = (await import('@nuxt/integrations')).default
    const categories = uniq(['all'].concat(...resources.map(r => r.categories)))

    return {
      categories
    }
  }
}
</script>
