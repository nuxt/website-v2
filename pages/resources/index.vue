<template>
  <div class="container mx-auto px-4 lg:flex pb-12">
    <div
      class="min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible"
    >
      <h1
        class="text-3xl xl:text-4xl text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary font-medium leading-normal mb-6 lg:pt-4"
      >
        Latest Resources
      </h1>
      <p>imagine the Vue telemetry slider here</p>
      <img
        src="https://res.cloudinary.com/mayashavin/image/upload/q_auto,f_auto,h_640/v1596608425/nuxt-cld/nuxt_cloudinary_1"
        alt=""
      />
      <h2
        class="text-3xl xl:text-4xl text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary font-medium leading-normal mb-6 lg:pt-4"
      >
        Featured Resources
      </h2>
      <ResourceCards :list="featured" />
    </div>
  </div>
</template>
<script>
export default {
  transition: 'resources',

  async asyncData({ $content, params, app }) {
    let resources = []

    try {
      resources = await $content(app.i18n.defaultLocale, 'resources', {
        deep: true
      }).fetch()
    } catch (e) {}
    const featured = resources
      .filter(category => category.featured)
      .map(category => ({
        ...category
      }))
    // const latest = resources.flatMap(item => {
    //   return item.categories
    //     .filter(category => category.latest)
    //     .map(category => ({
    //       ...category,
    //       category: item.slug
    //     }))
    // })

    return {
      featured
      // latest
    }
  },
  methods: {
    toLink(link) {
      return this.localePath({
        name: 'resources-category-slug',
        params: { slug: link.slug, category: link.category }
      })
    }
  }
}
</script>
