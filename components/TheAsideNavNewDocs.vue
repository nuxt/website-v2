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
        <div v-for="(sublinks, group) in sortedLinks" :key="`links-${group}`">
          <component
            :is="$route.params.book === group ? `h3` : 'nuxt-link'"
            :key="`title-${group}`"
            :to="{
              name: 'guides-book-slug',
              params: { book: group, slug: sublinks[0].slug }
            }"
            class="flex items-center uppercase font-medium text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary pb-2 transition-colors duration-300 ease-linear"
            :class="{
              'hover:text-nuxt-lightgreen mb-4 block':
                $route.params.book !== group,
              'font-bold': $route.params.book === group
            }"
          >
            <ChevronDownIcon
              v-if="$route.params.book === group"
              class="w-4 h-4 mr-2"
            />
            <ChevronRightIcon v-else class="w-4 h-4 mr-2" />
            <span>{{ $t(`content.guides.${group}`) }}</span>
          </component>
          <ul v-if="$route.params.book === group" class="pb-8 pl-2">
            <li
              v-for="(link, index) in sublinks"
              :key="index"
              class="text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary"
            >
              <NuxtLink
                class="p-2 pl-4 flex rounded hover:text-nuxt-lightgreen dark:hover:text-nuxt-lightgreen transition-colors duration-300 ease-linear"
                exact-active-class="text-nuxt-lightgreen bg-green-100 dark:bg-green-800"
                :to="toLink(group, link)"
              >
                <template v-if="link.menu">
                  {{ link.menu }}
                </template>
                <template v-else>
                  {{ link.title }}
                </template>
              </NuxtLink>
            </li>
          </ul>
        </div>
        <p class="uppercase font-bold pb-6">
          <NuxtLink
            to="/guide/release-notes"
            class="block bg-gray-100 dark:bg-dark-surface p-2 rounded border dark:border-gray-900 text-sm text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary"
            active-class=""
            exact-active-class=""
          >
            {{ $t('common.version') }}
            <span class="text-nuxt-lightgreen">{{ $config.nuxtVersion }}</span>
          </NuxtLink>
        </p>
      </nav>
    </div>
  </aside>
</template>

<script>
import sortBy from 'lodash.sortby'
import ChevronDownIcon from '~/assets/icons/chevron-down.svg?inline'
import ChevronRightIcon from '~/assets/icons/chevron-right.svg?inline'

export default {
  components: {
    ChevronDownIcon,
    ChevronRightIcon
  },
  props: {
    links: {
      type: Object,
      default: () => []
    }
  },
  data() {
    return { current: 0, setInter: null, showNav: false }
  },
  computed: {
    sortedLinks() {
      const links = {}
      sortBy(Object.keys(this.links), link => {
        return Object.keys(this.$i18n.t('content.guides')).indexOf(link)
      }).forEach(key => {
        links[key] = this.links[key]
      })
      return links
    }
  },
  methods: {
    toLink(group, link) {
      return this.localePath({
        name: 'guides-book-slug',
        params: { book: group, slug: link.slug }
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
