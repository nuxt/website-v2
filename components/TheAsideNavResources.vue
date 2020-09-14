<template>
  <aside
    class="opacity-transition block bg-gray-100 mt-4 -mx-4 lg:bg-transparent lg:mt-0 lg:mx-0 lg:inset-0 z-90 lg:mb-0 lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-1/4 lg:block"
  >
    <div
      class="h-full overflow-y-auto scrolling-touch text-center lg:text-left lg:h-auto lg:block lg:relative lg:sticky lg:top-24"
    >
      <nav
        class="lg:overflow-y-auto lg:block lg:pl-0 lg:pr-8 sticky?lg:h-(screen-24)"
      >
        <h2
          class="text-2xl xl:text-3xl text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary font-light leading-normal mb-6 pt-6"
        >
          Integrations
        </h2>

        <ul class="light:bg-light-surface dark:bg-dark-surface rounded">
          <li v-for="category in categories" :key="category" class="p-1">
            <NuxtLink
              class="py-2 px-4 flex rounded hover:text-nuxt-lightgreen transition-colors duration-300 ease-linear text-light-onSurfacePrimary dark:text-white"
              exact-active-class="bg-nuxt-lightgreen hover:text-white text-white"
              :to="`/resources/integrations/${category}`"
            >
              {{ $integrations.formatCategory(category) }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped></style>
