<template>
  <div class="shadow-nuxt">
    <div class="container mx-auto px-4 lg:flex pb-12">
      <TheMobileAsideNavNewDocs :links="links" />
      <TheAsideNavNewDocs :links="links" class="hidden lg:block" />
      <div
        class="min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4"
      >
        <div class="flex justify-between items-stretch">
          <div
            v-for="(cat, i) in category"
            :key="i"
            class="flex justify-between w-auto max-w-xs"
          >
            <div
              v-if="cat.title"
              class="light:bg-light-surface dark:bg-dark-surface flex flex-col-reverse lg:flex-row mb-8 rounded p-4 sm:p-8 lg:p-4 light:hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer transition-colors duration-300 ease-linear"
            >
              <NuxtLink :to="cat.link">
                <img :src="cat.logo" :alt="cat.title" />
                <h3>{{ cat.title }}</h3>
                <p>{{ cat.description }}</p>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, app }) {
    const category = await $content(
      app.i18n.locale + '/resources/ui-framework',
      params.slug
    ).fetch()

    return { category }
  }
}
</script>

<style scoped>
img {
  max-width: 40px;
  max-height: 40px;
}
</style>
