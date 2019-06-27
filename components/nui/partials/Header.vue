<template>
  <header class="relative bg-white z-20 py-8">
    <nui-container>
      <div class="flex items-center justify-between">
        <a href="#" @click.prevent="displayNav = !displayNav" class="lg:hidden block z-10 py-2 pr-2 w-6 text-nuxt-gray hover:text-nuxt-lightgreen">
          <nui-times-icon v-if="displayNav" class="block h-5 fill-current"/>
          <nui-bars-icon v-else class="block h-5 fill-current"/>
        </a>
        <a class="block h-7 lg:h-10 lg:pt-1 z-10" :href="localePath('index')" @click.prevent="$router.push(localePath('index'))" @click.right.stop.prevent="$router.push(localePath('resources-design'))">
          <h1 class="m-0 h-0 w-0 overflow-hidden">NUXTJS</h1>
          <nui-logo class="h-6 lg:h-auto"/>
        </a>
        <nav class="lg:block lg:relative lg:pt-0 fixed bg-white top-0 bottom-0 left-0 right-0 pt-24" :class="{'hidden': !displayNav}">
          <ul class="lg:flex lg:pt-1 xl:pt-0 container mx-auto text-center">
            <li v-for="link in links" :key="link" class="xl:px-4 lg:py-0 lg:px-2 py-2">
              <nuxt-link class="block p-2 font-bold text-nuxt-gray uppercase hover:no-underline hover:text-nuxt-lightgreen" :to="localePath(link)">
                {{ $store.state.lang.links[link] || link }}
              </nuxt-link>
            </li>
          </ul>
        </nav>
        <!-- TODO - Replace the search input by a Login/Signup Button -->
        <nui-search class="lg:block hidden"/>
        <a href="#" @click.prevent="openSearch" class="lg:hidden block z-10 py-2 pl-2 w-6 text-nuxt-gray hover:text-nuxt-lightgreen">
          <nui-search-icon class="block h-5 fill-current"/>
        </a>
      </div>
    </nui-container>
  </header>
</template>

<script>
import nuiContainer from '@/components/nui/commons/Container'
import nuiLogo from '@/components/nui/svg/Nuxtjs'
import nuiSearch from '@/components/nui/partials/Search'
import nuiBarsIcon from '@/components/nui/svg/Bars'
import nuiTimesIcon from '@/components/nui/svg/Times'
import nuiSearchIcon from '@/components/nui/svg/Search'

export default {
  data () {
    return {
      links: ['discover', 'learn', 'resources', 'ecosystem', 'support'],
      displayNav: false
    }
  },
  methods: {
    openNav () {

    },
    openSearch () {

    }
  },
  components: {
    nuiContainer,
    nuiBarsIcon,
    nuiTimesIcon,
    nuiLogo,
    nuiSearch,
    nuiSearchIcon
  }
}
</script>

