<template>
  <div class="shadow-nuxt">
    <div class="container mx-auto px-4 lg:flex pb-12">
      <TheMobileAsideNav :links="links" />
      <TheAsideNav :links="links" class="hidden lg:block" />
      <div class="min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4">
        <nuxt-child />
      </div>
    </div>
  </div>
</template>

<script>
import groupBy from 'lodash.groupby'

export default {
  // validate ({ store, params }) {
  //   return store.state.menu[params.section] !== undefined
  // }
  async asyncData ({ $content, app, params }) {
    const links = await $content(app.i18n.locale, params.section).only(['slug', 'title', 'group']).fetch()

    return {
      links: groupBy(links, 'group')
    }
  }
}
</script>
