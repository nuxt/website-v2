<template>
  <header class="fixed top-0 left-0 right-0 z-30 bg-light-elevatedSurface dark:bg-dark-elevatedSurface border-b border-light-border dark:border-dark-border lg:border-0 h-16 lg:h-24 transition-colors duration-300 ease-linear">
    <div class="container relative mx-auto px-4 flex items-center lg:py-6 h-full">
      <!-- Logo -->
      <nuxt-link class="inline-block text-nuxt-gray h-7 lg:h-10 z-10 mr-auto" to="/" @click.native.right.stop.prevent="$router.push('/design')">
        <h1 class="m-0 h-0 w-0 overflow-hidden">NUXTJS</h1>
        <nui-logo class="h-6 lg:h-8 text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear" />
      </nuxt-link>
      <!-- Center Navigation -->
      <ul class="hidden lg:flex lg:pt-1 xl:pt-0 text-center mx-auto">
        <li v-for="link in headerLinks" :key="link.slug" class="xl:px-4 lg:py-0 lg:px-2 py-2">
          <nuxt-link v-if="link.type === 'dynamic'" class="block p-2 font-medium uppercase hover:no-underline hover:text-nuxt-lightgreen text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear" :to="{ name: link.routeName, params: { section: link.slug } }">
            {{ link.name }}
          </nuxt-link>
          <nuxt-link v-else-if="link.type === 'static'" class="block p-2 font-medium uppercase hover:no-underline hover:text-nuxt-lightgreen text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear" :to="{ name: link.slug }">
            {{ link.name }}
          </nuxt-link>
          <a v-else-if="link.type === 'external'" :key="link.href" :href="link.href" class="block p-2 font-medium uppercase hover:no-underline hover:text-nuxt-lightgreen text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear">
            {{ link.name }}
          </a>
        </li>
      </ul>
      <!-- Algolia Search -->
      <algolia-search />
      <!-- Locale Selector -->
      <nui-select v-model="currentLang" mode="slim" :options="locales" class="inline-block align-middle">
        <template v-slot:icon>
          <nui-globe />
        </template>
      </nui-select>
    </div>
  </header>
  <!-- <mobile-aside-navigation /> -->
</template>

<script>
import { mapState } from 'vuex'
import nuiLogo from '@/components/svg/Nuxtjs'
import nuiGlobe from '@/components/svg/Globe'
import localeManager from '@/mixins/localeManager'
import AlgoliaSearch from '@/components/partials/AlgoliaSearch'
// import MobileAsideNavigation from '@/components/partials/MobileAsideNavigation'

export default {
  components: {
    nuiLogo,
    nuiGlobe,
    AlgoliaSearch
    // MobileAsideNavigation
  },
  mixins: [
    localeManager
  ],
  data () {
    return {
      links: ['guide', 'api', 'examples', 'faq']
    }
  },
  computed: {
    ...mapState({
      headerLinks: state => state.lang.headerLinks
    })
  },
  methods: {
    nav (section) {
      this.currentSection = (this.currentSection === section ? '' : section)
    }
  }
}
</script>

<style lang="scss"></style>
