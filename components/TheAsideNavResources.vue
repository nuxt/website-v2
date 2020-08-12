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
          <li>
            <NuxtLink
              exact
              class="p-2 pl-4 flex rounded hover:text-nuxt-lightgreen dark:hover:text-nuxt-lightgreen transition-colors duration-300 ease-linear"
              exact-active-class="text-nuxt-lightgreen bg-green-100 dark:bg-green-800"
              to="/resources"
            >
              <template>
                Featured
              </template>
            </NuxtLink>
          </li>

          <li v-for="(link, index) in sortedLinks" :key="index">
            <NuxtLink
              class="p-2 pl-4 flex rounded hover:text-nuxt-lightgreen dark:hover:text-nuxt-lightgreen transition-colors duration-300 ease-linear"
              exact-active-class="text-nuxt-lightgreen bg-green-100 dark:bg-green-800"
              :to="
                localePath({
                  name: 'resources-category',
                  params: { category: link }
                })
              "
            >
              <template>
                {{ $t(`content.resources.${link}`) }}
              </template>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script>
import sortBy from 'lodash.sortby'

export default {
  props: {
    links: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    sortedLinks() {
      const links = {}
      sortBy(Object.keys(this.links), link => {
        return Object.keys(this.$i18n.t('content.resources')).indexOf(link)
      }).forEach(key => {
        links[key] = this.links[key]
      })
      return links
    }
  }
}
</script>

<style lang="scss" scoped></style>
