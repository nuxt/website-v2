<template>
  <header class="relative bg-white z-20 py-8">
    <nui-container>
      <div class="flex items-end justify-between">
        <a href="#" @click.prevent="$emit('toggle', !mobileNav)" class="flex items-center justify-center text-nuxt-gray hover:text-nuxt-lightgreen z-10 lg:hidden">
          <nui-times-icon v-if="mobileNav" class="block h-5 fill-current"/>
          <nui-bars-icon v-else class="block h-5 fill-current"/>
        </a>
        <a class="block h-7 lg:h-10 lg:pt-1 z-10" :href="localePath('index')" @click.prevent="$router.push(localePath('index'))" @click.right.stop.prevent="$router.push(localePath('resources-design'))">
          <h1 class="m-0 h-0 w-0 overflow-hidden">NUXTJS</h1>
          <nui-logo class="h-6 lg:h-auto"/>
        </a>
        <nav class="lg:block lg:relative lg:pt-0 fixed bg-white top-0 bottom-0 left-0 right-0 pt-24 overflow-y-auto" :class="{'hidden': !mobileNav}">
          <ul class="lg:flex lg:pt-1 xl:pt-0 container mx-auto text-center">
            <li v-for="link in links" :key="link" class="xl:px-4 lg:py-0 lg:px-2 py-2">
              <nuxt-link class="block p-2 font-bold text-nuxt-gray uppercase hover:no-underline hover:text-nuxt-lightgreen" :to="localePath(link)">
                {{ $store.state.lang.links[link] || link }}
              </nuxt-link>
            </li>
          </ul>
        </nav>
        <nui-btn :to="localePath('are-you-nuxt')" class="hidden lg:flex">
          <nui-user-icon class="h-4 mb-1 mr-3 fill-current"/>
          <span>Are you Nuxt?</span>
        </nui-btn>
        <nuxt-link :to="localePath('are-you-nuxt')" class="block flex items-center justify-center text-nuxt-gray hover:text-nuxt-lightgreen z-10 lg:hidden">
          <nui-user-icon class="block h-5 fill-current"/>
        </nuxt-link>
        <!-- <nui-search class="lg:block hidden"/> -->
        <!-- <a href="#" @click.prevent="openSearch" class="lg:hidden block z-10 py-2 pl-2 w-6 text-nuxt-gray hover:text-nuxt-lightgreen">
          <nui-search-icon class="block h-5 fill-current"/>
        </a> -->
      </div>
    </nui-container>
  </header>
</template>

<script>
import nuiBtn from '@/components/nui/commons/Button'
import nuiContainer from '@/components/nui/commons/Container'
import nuiLogo from '@/components/nui/svg/Nuxtjs'
import nuiBarsIcon from '@/components/nui/svg/Bars'
import nuiTimesIcon from '@/components/nui/svg/Times'
import nuiUserIcon from '@/components/nui/svg/User'

export default {
  props: {
    mobileNav: {
      type: Boolean,
      reuired: true
    }
  },
  model: {
    prop: 'mobileNav',
    event: 'toggle'
  },
  data () {
    return {
      links: ['discover', 'learn', 'resources', 'ecosystem', 'support']
    }
  },
  components: {
    nuiBtn,
    nuiContainer,
    nuiBarsIcon,
    nuiTimesIcon,
    nuiLogo,
    nuiUserIcon
  }
}
</script>

