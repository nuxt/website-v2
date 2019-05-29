<template>
  <header class="relative bg-white z-10 py-8">
    <nui-container>
      <div class="flex items-center justify-between">
        <a href="#" @click.prevent="openNav" class="lg:hidden block py-2 pr-2 text-nuxt-gray hover:text-nuxt-lightgreen">
          <nui-bars-icon class="block h-5 fill-current"/>
        </a>
        <a class="block h-10 pt-1" href="/" @click.prevent="$router.push('/')" @click.right.stop.prevent="$router.push('/design')">
          <h1 class="m-0 h-0 w-0 overflow-hidden">NUXTJS</h1>
          <nui-logo/>
        </a>
        <nav class="lg:block hidden">
          <ul class="flex">
            <li v-for="link in links" :key="link" class="px-4">
              <nuxt-link class="block p-2 font-medium text-nuxt-gray uppercase hover:no-underline hover:text-nuxt-lightgreen" :to="'/' + link">
                {{ $store.state.lang.links[link] || 'modules' }}
              </nuxt-link>
            </li>
          </ul>
        </nav>
        <nui-search class="lg:block hidden"/>
        <a href="#" @click.prevent="openSearch" class="lg:hidden block py-2 pl-2 text-nuxt-gray hover:text-nuxt-lightgreen">
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
import nuiSearchIcon from '@/components/nui/svg/Search'

export default {
  data () {
    return {
      links: ['guide', 'api', 'examples', 'faq', 'modules']
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
    nuiLogo,
    nuiSearch,
    nuiSearchIcon
  }
}
</script>

