<template>
  <div class="container mx-auto px-4 lg:flex pb-12">
    <div
      class="min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible"
    >
      <h1
        class="text-3xl xl:text-4xl text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary font-medium leading-normal mb-6 lg:pt-4"
      >
        {{ document.title }}
      </h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="(cat, i) in document.categories"
          :key="i"
          class="light:bg-light-surface dark:bg-dark-surface rounded p-4 sm:p-8 lg:p-4 light:hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer transition-colors duration-300 ease-linear"
        >
          <NuxtLink :to="toLink(cat)">
            <img :src="cat.logo" :alt="cat.title" />
            <h3>{{ cat.title }}</h3>
            <p>{{ cat.description }}</p>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, app }) {
    const document = await $content(
      app.i18n.locale + '/resources/' + params.category
    ).fetch()
    return { document }
  },
  methods: {
    toLink(link) {
      return this.localePath({
        name: 'resources-category-slug',
        params: { slug: link.slug }
      })
    }
  }
}
</script>

<style scoped>
img {
  max-width: 40px;
  max-height: 40px;
}
.list-container {
  flex-direction: column;
  max-width: 100%;
  flex: 1;
  justify-content: center;
  align-items: stretch;
}

.list-item {
  flex-grow: 0;
  flex-basis: 33.333333333333336%;
  min-width: 0;
  padding: 2%;
}
</style>
