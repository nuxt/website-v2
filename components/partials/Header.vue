<template>
<<<<<<< HEAD
  <header class="relative bg-white z-20 py-8">
    <nui-container>
      <div class="flex items-end lg:items-center justify-between">
=======
  <header class="header fixed top-0 right-0 left-0 z-10">
    <nui-container class="border-b border-gray-300 lg:border-0">
      <div class="flex py-6 lg:pt-8 items-end lg:items-center justify-between lg:border-b lg:border-gray-300">
>>>>>>> 2fb6a223 (sponsors and flat routes with header links)
        <a href="#" @click.prevent="$emit('toggle', !mobileNav)" class="flex p-2 -m-2 items-center justify-center text-nuxt-gray hover:text-nuxt-lightgreen z-10 lg:hidden">
          <nui-times-icon v-if="mobileNav" class="block h-5 fill-current"/>
          <nui-bars-icon v-else class="block h-5 fill-current"/>
        </a>
        <a class="block h-7 lg:h-10 lg:pt-1 z-10" :href="localePath('index')" @click.prevent="$router.push(localePath('index'))" @click.right.stop.prevent="$router.push(localePath('design'))">
          <h1 class="m-0 h-0 w-0 overflow-hidden">NUXTJS</h1>
          <nui-logo class="h-6 lg:h-auto"/>
        </a>
        <nav class="lg:block lg:relative lg:pt-0 fixed bg-white top-0 bottom-0 left-0 right-0 pt-24 overflow-y-auto" :class="{'hidden': !mobileNav}">
          <ul class="lg:flex lg:pt-1 xl:pt-0 container mx-auto text-center">
            <li v-for="link in links" :key="link" class="xl:px-4 lg:py-0 lg:px-2 py-2">
<<<<<<< HEAD
              <nuxt-link class="block p-2 font-bold text-nuxt-gray uppercase hover:no-underline hover:text-nuxt-lightgreen" :to="localePath(link)">
                {{ $store.state.lang.links[link] || link }}
=======
              <nuxt-link class="header_nav_link block p-2 font-medium uppercase hover:no-underline hover:text-nuxt-lightgreen" :to="localePath(link + '-slug')">
                {{ $store.state.lang.links[link] || link}}
>>>>>>> 2fb6a223 (sponsors and flat routes with header links)
              </nuxt-link>
            </li>
            <li class="header_nav_link xl:px-4 lg:py-0 lg:px-2 py-2">
              <nuxt-link class="block p-2 font-medium uppercase hover:no-underline hover:text-nuxt-lightgreen" :to="{ name: 'resources' }">
                {{ $store.state.lang.links['resources'] || 'resources' }}
              </nuxt-link>
            </li>
          </ul>
        </nav>
        <nui-btn :to="localePath('are-you-nuxt')" class="hidden lg:flex">
          <nui-user-icon class="h-4 mb-1 mr-3 fill-current"/>
          <span>Are you Nuxt?</span>
        </nui-btn>
        <nuxt-link :to="localePath('are-you-nuxt')" class="block flex p-2 -m-2 items-center justify-center text-nuxt-gray hover:text-nuxt-lightgreen z-10 lg:hidden">
          <nui-user-icon class="block h-5 fill-current"/>
        </nuxt-link>
<<<<<<< HEAD
        <!-- <nui-search class="lg:block hidden"/> -->
        <!-- <a href="#" @click.prevent="openSearch" class="lg:hidden block z-10 py-2 pl-2 w-6 text-nuxt-gray hover:text-nuxt-lightgreen">
          <nui-search-icon class="block h-5 fill-current"/>
        </a> -->
=======
        <nuxt-link class="block md:flex md:justify-center w-full p-2 md:p-4 text-nuxt-gray hover:no-underline hover:text-nuxt-lightgreen text-center visited:text-nuxt-gray" :to="{ name: 'resources' }">
          <nui-resources-icon class="inline-block h-5 fill-current mb-1"/>
          <span class="block text-xs md:text-base md:pl-3 font-medium text-nuxt-gray">{{ $store.state.lang.links['resources'] || 'resources' }}</span>
        </nuxt-link>
>>>>>>> b25bdbb3 (add resources)
      </div>
    </nui-container>
  </header>
</template>

<script>
import nuiBtn from '@/components/commons/Button'
import nuiContainer from '@/components/commons/Container'
import nuiLogo from '@/components/svg/Nuxtjs'
<<<<<<< HEAD
import nuiBarsIcon from '@/components/svg/Bars'
=======
import nuiExamplesIcon from '@/components/svg/Code'
import nuiGuideIcon from '@/components/svg/Books'
import nuiApiIcon from '@/components/svg/List'
import nuiFaqIcon from '@/components/svg/Faq'
import nuiResourcesIcon from '@/components/svg/Resources'
>>>>>>> b25bdbb3 (add resources)
import nuiTimesIcon from '@/components/svg/Times'
import nuiUserIcon from '@/components/svg/User'

export default {
<<<<<<< HEAD
=======
  components: {
    nuiTimesIcon,
    nuiExamplesIcon,
    nuiGuideIcon,
    nuiApiIcon,
    nuiFaqIcon,
    nuiResourcesIcon,
    nuiLogo,
    nuiSearchIcon,
    nuiSearch,
    nuiArrowLeft
  },
  model: {
    prop: 'action',
    event: 'change'
  },
>>>>>>> b25bdbb3 (add resources)
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
      links: ['discover', 'learn', 'resources', 'community']
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

