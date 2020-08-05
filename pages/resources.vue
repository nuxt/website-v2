<template>
  <div class="shadow-nuxt">
    <div class="container mx-auto px-4 lg:flex pb-12">
      <TheMobileAsideNavResources :links="links" />
      <TheAsideNavResources :links="links" class="hidden lg:block" />
      <div
        class="min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4"
      >
        <nuxt-child />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, app, params }) {
    let links = []

    try {
      links = await $content(app.i18n.defaultLocale, 'resources')
        .only(['categories', 'title', 'slug', 'link'])
        .fetch()
    } catch (e) {}

    return {
      links
    }
  }
}
</script>
