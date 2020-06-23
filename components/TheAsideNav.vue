<template>
  <aside
    :class="{ 'opacity-25': $store.state.focusMode }"
    class="opacity-transition block bg-gray-100 mt-8 -mx-4 lg:bg-transparent lg:mt-0 lg:mx-0 lg:inset-0 z-90 lg:mb-0 lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-1/4 lg:block"
  >
    <div
      class="h-full overflow-y-auto scrolling-touch text-center lg:text-left lg:h-auto lg:block lg:relative lg:sticky lg:top-24"
    >
      <!-- <a
        v-if="breadcrumb"
        class="block text-left p-4 lg:hidden"
        href="#nav"
        @click.prevent="showNav = !showNav"
      >
        <TimesIcon v-if="showNav" class="float-right mt-1 mr-1 h-5" />
        <CaretDownIcon v-else class="float-right mt-2 mr-1" />
        <span class="uppercase text-gray-500 ml-1">{{ breadcrumb.group }} :</span>
        {{ breadcrumb.title }}
      </a>-->
      <nav
        class="pt-8 lg:overflow-y-auto lg:block lg:pl-0 lg:pr-8 sticky?lg:h-(screen-24)"
        :class="{ hidden: !showNav }"
      >
        <p class="uppercase font-bold pb-6">
          {{ $t('common.version') }}
          <span class="text-nuxt-lightgreen">{{ $t('docVersion') }}</span>
        </p>
        <div v-for="(sublinks, group) in links" :key="`links-${group}`">
          <h3
            :key="`title-${group}`"
            class="uppercase font-medium text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary pb-2 transition-colors duration-300 ease-linear"
          >{{ group }}</h3>
          <ul class="pb-8">
            <li v-for="(link, index) in sublinks" :key="index" class="py-2">
              <NuxtLink
                class="text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary hover:text-nuxt-lightgreen dark:hover:text-nuxt-lightgreen transition-colors duration-300 ease-linear"
                exact-active-class="text-nuxt-lightgreen"
                :to="localePath({ name: 'section-slug', params: { slug: link.slug } })"
                exact
              >{{ link.title }}</NuxtLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </aside>
</template>

<script>
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
    visible () { return this.$store.state.visibleAffix },
    path () { return this.$route.path.slice(-1) === '/' ? this.$route.path.slice(0, -1) : this.$route.path },
    menu () { return '/' + this.$route.params.section }
  }
}
</script>

<style lang="scss" scoped>
</style>
