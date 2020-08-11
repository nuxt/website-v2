<template>
  <aside
    class="opacity-transition block bg-gray-100 mt-8 -mx-4 lg:bg-transparent lg:mt-0 lg:mx-0 lg:inset-0 z-90 lg:mb-0 lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-1/4 lg:block"
  >
    <div
      class="h-full overflow-y-auto scrolling-touch text-center lg:text-left lg:h-auto lg:block lg:relative lg:sticky lg:top-24"
    >
      <nav
        class="pt-8 lg:overflow-y-auto lg:block lg:pl-0 lg:pr-8 sticky?lg:h-(screen-24)"
      >
        <h2
          class="text-xl xl:text-2xl text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary font-medium leading-normal mb-4 lg:pt-4"
        >
          Modules
        </h2>

        <ul class="pb-2">
          <li
            class="py-2 text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary"
          >
            <NuxtLink
              class="hover:text-nuxt-lightgreen dark:hover:text-nuxt-lightgreen transition-colors duration-300 ease-linear"
              active-class
              exact
              exact-active-class="text-nuxt-lightgreen"
              to="/resources"
            >
              <template>
                Featured
              </template>
            </NuxtLink>
          </li>

          <li
            v-for="(link, index) in links"
            :key="index"
            class="py-2 text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary"
          >
            <NuxtLink
              class="hover:text-nuxt-lightgreen dark:hover:text-nuxt-lightgreen transition-colors duration-300 ease-linear capitalize"
              active-class
              exact
              exact-active-class="text-nuxt-lightgreen"
              :to="
                localePath({
                  name: 'resources-category',
                  params: { category: link }
                })
              "
            >
              <template>
                {{ link }}
              </template>
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
    links: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped></style>
