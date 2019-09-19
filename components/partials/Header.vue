<template>
  <header class="header fixed top-0 right-0 left-0 z-20">
    <nui-container class="border-b border-gray-300 lg:border-0">
      <div class="flex py-6 lg:pt-8 items-end lg:items-center justify-between lg:border-b lg:border-gray-300">
        <a href="#" class="flex p-2 -m-2 items-center justify-center z-10 lg:hidden hover:text-nuxt-lightgreen" @click.prevent="$emit('toggle', !mobileNav)">
          <nui-times-icon v-if="mobileNav" class="block h-5 fill-current text-white" />
          <nui-bars-icon v-else class="block h-5 fill-current text-nuxt-gray" />
        </a>
        <a class="header_logo lg:text-nuxt-gray block h-7 lg:h-10 lg:pt-1 z-10" :class="mobileNav ? 'text-white' : 'text-nuxt-gray'" :href="localePath('index')" @click.prevent="$router.push(localePath('index'))" @click.right.stop.prevent="$router.push(localePath('design'))">
          <h1 class="m-0 h-0 w-0 overflow-hidden">NUXTJS</h1>
          <nui-logo class="h-6 lg:h-auto" />
        </a>
        <nav class="header_nav lg:block lg:relative lg:pt-0 fixed top-0 bottom-0 left-0 right-0 pt-24 overflow-y-auto" :class="{'header_nav--open': mobileNav}">
          <!-- Desktop Navigation -->
          <ul class="hidden lg:flex lg:pt-1 xl:pt-0 container mx-auto text-center">
            <li v-for="link in links" :key="link" class="header_nav_link xl:px-4 lg:py-0 lg:px-2 py-2">
              <nuxt-link class="block p-2 font-medium uppercase hover:no-underline hover:text-nuxt-lightgreen" :to="localePath({ name: 'section-slug', params: { section: link }})">
                {{ $store.state.lang.links[link] || link }}
              </nuxt-link>
            </li>
          </ul>
          <!-- Mobile Navigation -->
          <ul class="lg:hidden container mx-auto text-center">
            <li v-for="link in links" :key="link" class="header_nav_link xl:px-4 lg:py-0 lg:px-2 py-2" :class="{'header_nav_link--close': currentSection !== '' && currentSection !== link}">
              <a class="text-lg block p-4 font-medium uppercase hover:no-underline" :class="{'bg-nuxt-lightgreen text-nuxt-gray': currentSection === link, 'hover:text-nuxt-lightgreen': currentSection !== link}" :href="localePath({ name: 'section-slug', params: { section: link }})" @click.prevent="currentSection = (currentSection === link ? '' : link)">
                <nui-arrow-left v-show="currentSection === link" class="absolute float-left h-6"/>
                {{ $store.state.lang.links[link] || link }}
              </a>
              <div v-for="(group, index) in $store.state.menu[link]" :key="index" class="header_subnav" :class="{'header_subnav--open': currentSection === link}">
                <h3 :key="`title-${index}`" class="uppercase text-gray-500 pb-2">
                  {{ group.title }}
                </h3>
                <ul :key="`list-${index}`">
                  <li v-for="link in group.links" :key="link.to" class="py-2">
                    <nuxt-link class="text-gray-200 hover:text-nuxt-lightgreen" :class="{'text-nuxt-lightgreen': path === menu + link.to}" :to="menu + link.to" exact>
                      {{ link.name }}
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
        <nui-search class="lg:block hidden" />
        <a href="#" class="block flex p-2 -m-2 items-center justify-center text-nuxt-gray hover:text-nuxt-lightgreen z-10 lg:hidden" @click.prevent="openSearch = !openSearch">
          <nui-search-icon class="block h-5 fill-current" />
        </a>
      </div>
    </nui-container>
  </header>
</template>

<script>
import nuiLogo from '@/components/svg/Nuxtjs'
import nuiBarsIcon from '@/components/svg/Bars'
import nuiTimesIcon from '@/components/svg/Times'
import nuiSearchIcon from '@/components/svg/Search'
import nuiSearch from '@/components/partials/Search'
import nuiArrowLeft from '@/components/svg/ArrowLeft'

export default {
  components: {
    nuiBarsIcon,
    nuiTimesIcon,
    nuiLogo,
    nuiSearchIcon,
    nuiSearch,
    nuiArrowLeft
  },
  model: {
    prop: 'mobileNav',
    event: 'toggle'
  },
  props: {
    mobileNav: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      currentSection: '',
      links: ['guide', 'api', 'examples', 'faq'],
      openSearch: false
    }
  },
  computed: {
    menu () { return (this.$i18n && this.$i18n.locale !== 'en' ? `/${this.$i18n.locale}/` : '/') + this.$route.params.section }
  }
}
</script>
