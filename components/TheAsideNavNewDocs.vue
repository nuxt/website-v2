<template>
  <aside
    class="opacity-transition block bg-gray-100 mt-8 -mx-4 lg:bg-transparent lg:mt-0 lg:mx-0 lg:inset-0 z-90 lg:mb-0 lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-1/4 lg:block"
  >
    <div
      class="h-full overflow-y-auto scrolling-touch text-center lg:text-left lg:h-auto lg:block lg:relative lg:sticky lg:top-24"
    >
      <nav
        class="pt-8 lg:overflow-y-auto lg:block lg:pl-0 lg:pr-8 sticky?lg:h-(screen-24)"
        :class="{ hidden: !showNav }"
      >
        <p class="uppercase font-bold pb-6">
          {{ $t('common.version') }}
          <span class="text-nuxt-lightgreen">2.13.X</span>
        </p>
        <div v-for="(sublinks, group) in sortedLinks" :key="`links-${group}`">
          <component
            :is="$route.params.book === group ? `h3` : 'nuxt-link'"
            :key="`title-${group}`"
            :to="{ name: 'guides-book', params: { book: group } }"
            class="uppercase font-medium text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary pb-2 transition-colors duration-300 ease-linear"
            :class="{ 'hover:text-nuxt-lightgreen mb-4 block': $route.params.book !== group, 'font-bold': $route.params.book === group }"
          >{{ $t(`content.guides.${group}`) }}</component>
          <ul v-if="$route.params.book === group" class="pb-8">
            <li
              v-for="(link, index) in sublinks"
              :key="index"
              class="py-2 text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary"
            >
              <NuxtLink
                class="hover:text-nuxt-lightgreen dark:hover:text-nuxt-lightgreen transition-colors duration-300 ease-linear"
                exact-active-class="text-nuxt-lightgreen"
                :to="toLink(group, link)"
              >
                <template v-if="link.menu">{{ link.menu }}</template>
                <template v-else>{{ link.title }}</template>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </aside>
</template>

<script>
import slugify from 'slugify'
import sortBy from 'lodash.sortby'

export default {
  props: {
    links: {
      type: Object,
      default: () => []
    }
  },
  data () {
    return { current: 0, setInter: null, showNav: false }
  },
  computed: {
    sortedLinks () {
      const links = {}
      sortBy(Object.keys(this.links), (link) => {
        return Object.keys(this.$i18n.t('content.guides')).indexOf(link)
      }).forEach((key) => {
        links[key] = this.links[key]
      })
      return links
    }
  },
  methods: {
    toLink (group, link) {
      return this.localePath({ name: 'guides-book-slug', params: { book: slugify(group, { lower: true }), slug: link.slug } })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
