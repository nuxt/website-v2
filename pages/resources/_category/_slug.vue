<template>
  <div class="container mx-auto px-4 lg:flex pb-12">
    <div
      class="min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4"
    >
      <div v-if="resource.image">
        <a :href="resource.docs" target="_blank" class="flex flex-col">
          <img :src="resource.image" :alt="resource.title" />
        </a>
      </div>
      <p v-if="resource.short_description">
        {{ resource.short_description }}
      </p>
      <div v-if="resource.long_description">
        <h3
          class="mt-8 empty-after after:block after:border-2 after:rounded dark:after:border-dark-onSurfacePrimary light:after:border-light-onSurfacePrimary after:mt-2 after:mb-1 after:w-4/5 my-2 text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary relative text-xl table transition-colors duration-300 ease-linear"
        >
          What is {{ resource.title }}?
        </h3>
        <p>{{ resource.long_description }}</p>
      </div>

      <div v-if="resource.features">
        <h3
          class="mt-8 empty-after after:block after:border-2 after:rounded dark:after:border-dark-onSurfacePrimary light:after:border-light-onSurfacePrimary after:mt-2 after:mb-1 after:w-4/5 my-2 text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary relative text-xl table transition-colors duration-300 ease-linear"
        >
          Features
        </h3>
        <base-list v-if="resource.features" :items="resource.features" />
      </div>

      <div>
        <h3
          class="mt-8 empty-after after:block after:border-2 after:rounded dark:after:border-dark-onSurfacePrimary light:after:border-light-onSurfacePrimary after:mt-2 after:mb-1 after:w-4/5 my-2 text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary relative text-xl table transition-colors duration-300 ease-linear"
        >
          Installation
        </h3>
        <nuxt-content :document="resource" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  transition: 'resources',

  async asyncData({ $content, params, app }) {
    const document = await $content(
      app.i18n.locale + '/resources/' + params.category
    ).fetch()
    const resource = document.find(category => category.slug === params.slug)
    return { resource }
  }
}
</script>

<style scoped></style>
