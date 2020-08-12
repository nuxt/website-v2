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

      <carousel
        :per-page="1"
        :autoplay="true"
        :loop="true"
        :autoplay-timeout="7000"
        :pagination-enabled="false"
        :navigation-enabled="true"
        :navigation-prev-label="next"
        :navigation-next-label="prev"
      >
        <slide v-for="(item, index) in latest" :key="index">
          <NuxtLink
            :to="
              localePath({
                name: 'resources-category-slug',
                params: Object.assign(
                  {},
                  {
                    slug: item.slug,
                    category: item.category
                      ? item.category
                      : $route.params.category
                  }
                )
              })
            "
          >
            <img :src="item.image" :alt="item.title" />
          </NuxtLink>
        </slide>
      </carousel>

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
    const latest = resources
      .filter(category => category.latest)
      .map(category => ({
        ...category
      }))

    return {
      featured,
      latest
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
<style>
.VueCarousel-navigation-button.VueCarousel-navigation-prev,
.VueCarousel-navigation-button.VueCarousel-navigation-next {
  color: #00c58e;
}
</style>
