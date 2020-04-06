<template>
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
  <div class="absolute">
    <!-- Common Header -->
    <header class="header bg-light-elevatedSurface dark:bg-dark-elevatedSurface border-b border-light-border dark:border-dark-border lg:border-0 h-16 lg:h-24 transition-colors duration-300 ease-linear">
      <template v-if="action === ''">
        <div class="container mx-auto px-4 flex items-center lg:py-6 h-full">
          <!-- Left Title -->
          <a class="inline-block text-nuxt-gray h-7 lg:h-10 z-10 mr-auto" href="/" @click.prevent="$router.push('/')" @click.right.stop.prevent="$router.push('/design')">
            <h1 class="m-0 h-0 w-0 overflow-hidden">NUXTJS</h1>
            <nui-logo class="h-6 lg:h-8 text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear" />
          </a>
          <!-- Center Navigation -->
          <ul class="hidden lg:flex lg:pt-1 xl:pt-0 text-center mx-auto">
            <li v-for="link in links" :key="link" class="header_nav_link xl:px-4 lg:py-0 lg:px-2 py-2">
              <nuxt-link class="block p-2 font-medium uppercase hover:no-underline hover:text-nuxt-lightgreen text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear" :to="{ name: 'section-slug', params: { section: link } }">
>>>>>>> 1b87907b (feat: dark mode (#303))
                {{ $store.state.lang.links[link] || link }}
=======
              <nuxt-link class="header_nav_link block p-2 font-medium uppercase hover:no-underline hover:text-nuxt-lightgreen" :to="localePath(link + '-slug')">
                {{ $store.state.lang.links[link] || link}}
>>>>>>> 2fb6a223 (sponsors and flat routes with header links)
              </nuxt-link>
            </li>
            <li class="header_nav_link xl:px-4 lg:py-0 lg:px-2 py-2">
              <nuxt-link class="block p-2 font-medium uppercase hover:no-underline hover:text-nuxt-lightgreen text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear" :to="{ name: 'resources' }">
                {{ $store.state.lang.links['resources'] || 'resources' }}
              </nuxt-link>
            </li>
          </ul>
<<<<<<< HEAD
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
=======
          <!-- Right Action -->
          <button class="block md:hidden flex p-2 -m-2 mr-4 items-center justify-center text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary hover:text-nuxt-lightgreen z-10 lg:hidden transition-colors duration-300 ease-linear" @click.prevent="$emit('change', 'search')">
            <nui-search-icon class="block h-5 fill-current" />
          </button>
          <nui-search class="hidden md:inline-block align-middle mr-2"/>
          <nui-select v-model="currentLang" mode="slim" :options="locales" class="inline-block align-middle">
            <template v-slot:icon>
              <nui-globe />
            </template>
          </nui-select>
        </div>
      </template>
      <nui-container v-else class="flex justify-between lg:hidden h-full items-center">
        <!-- Left Title -->
        <nui-search v-if="action === 'search'" class="w-full pr-4"/>
        <div v-else class="flex items-end">
          <component :is="'nui-' + action + '-icon'" class="block h-6 text-nuxt-lightgreen fill-current" />
          <span class="block text-lg font-medium uppercase text-nuxt-gray pl-4 h-6">{{ $store.state.lang.links[action] || action }}</span>
        </div>
        <!-- Right Action -->
        <button class="block flex p-2 -m-2 items-center justify-center text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary hover:text-nuxt-lightgreen z-10 lg:hidden transition-colors duration-300 ease-linear" :class="action === 'search' ? 'pt-3' : ''" @click.prevent="$emit('change', '')">
          <nui-times-icon class="block h-5 fill-current"/>
        </button>
      </nui-container>
    </header>
    <!-- Mobile Main Navigation -->
    <nav class="header_mobile_nav fixed h-16 bg-light-elevatedSurface dark:bg-dark-elevatedSurface border-t left-0 bottom-0 right-0 z-30 border-light-border dark:border-dark-border block lg:hidden transition-colors duration-300 ease-linear">
      <div class="flex justify-between items-center h-full">
        <nuxt-link v-for="link in links" :key="link" class="block md:flex md:justify-center w-full p-2 md:p-4 text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary hover:no-underline hover:text-primary-base dark:hover:text-primary-base text-center visited:text-nuxt-gray transition-colors duration-300 ease-linear" :to="{ name: 'section-slug', params: { section: link } }" @click.prevent.native="$emit('change', action === link ? '' : ($route.params.section !== link ? '' : link))">
          <component :is="'nui-' + link + '-icon'" class="inline-block h-5 fill-current mb-1" :class="{'text-nuxt-lightgreen': action === link}"/>
          <span class="block text-xs md:text-base md:pl-3 font-medium text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear">{{ $store.state.lang.links[link] || link }}</span>
        </nuxt-link>
        <nuxt-link class="block md:flex md:justify-center w-full p-2 md:p-4 text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary hover:no-underline hover:text-primary-base dark:hover:text-primary-base text-center visited:text-nuxt-gray transition-colors duration-300 ease-linear" :to="{ name: 'resources' }">
>>>>>>> 1b87907b (feat: dark mode (#303))
          <nui-resources-icon class="inline-block h-5 fill-current mb-1"/>
          <span class="block text-xs md:text-base md:pl-3 font-medium text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear">{{ $store.state.lang.links['resources'] || 'resources' }}</span>
        </nuxt-link>
>>>>>>> b25bdbb3 (add resources)
      </div>
<<<<<<< HEAD
    </nui-container>
=======
  <header class="fixed top-0 left-0 right-0 z-30 bg-light-elevatedSurface dark:bg-dark-elevatedSurface border-b border-light-border dark:border-dark-border lg:border-0 h-16 lg:h-24 transition-colors duration-300 ease-linear">
    <div class="container relative mx-auto px-4 flex items-center lg:py-6 h-full">
      <!-- Logo -->
      <nuxt-link class="inline-block text-nuxt-gray h-7 lg:h-10 z-10 mr-auto" to="/" @click.native.right.stop.prevent="$router.push('/design')">
        <h1 class="m-0 h-0 w-0 overflow-hidden">NUXTJS</h1>
        <nui-logo class="h-6 lg:h-8 text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear" />
      </nuxt-link>
      <!-- Center Navigation -->
      <nav class="hidden lg:flex lg:pt-1 xl:pt-0 mx-auto">
        <ul class="flex text-center">
          <li v-for="link in headerLinks" :key="link.slug" class="xl:px-4 lg:py-0 lg:px-2 py-2">
            <nuxt-link v-if="link.type === 'dynamic'" class="block p-2 font-medium uppercase hover:no-underline light:hover:text-nuxt-lightgreen dark:hover:text-nuxt-lightgreen text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear" :to="{ name: link.routeName, params: { section: link.slug } }">
              {{ link.name }}
            </nuxt-link>
            <nuxt-link v-else-if="link.type === 'static'" class="block p-2 font-medium uppercase hover:no-underline light:hover:text-nuxt-lightgreen dark:hover:text-nuxt-lightgreen text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear" :to="{ name: link.slug }">
              {{ link.name }}
            </nuxt-link>
            <a v-else-if="link.type === 'external'" :key="link.href" :href="link.href" class="block p-2 font-medium uppercase hover:no-underline hover:text-nuxt-lightgreen text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear">
              {{ link.name }}
            </a>
          </li>
        </ul>
      </nav>
      <!-- Algolia Search -->
      <algolia-search />
    </div>
>>>>>>> 61b90c66 (feat: Add /blog section (#307))
  </header>
=======
    </nav>
    <!-- Mobile Aside Navigation -->
    <div class="header_mobile_aside block lg:hidden fixed left-0 light:bg-light-surface dark:bg-dark-surface pt-6 z-20 w-full overflow-y-auto transition-colors duration-300 ease-linear" :class="{'header_mobile_aside--open': sublinks.length}">
      <nui-container>
        <transition-group v-for="(group, index) in sublinks" :key="index" tag="div" name="list" class="header_mobile_aside_group">
          <h3 :key="`title-${index}`" class="uppercase text-gray-500 pb-2">
            {{ group.title }}
          </h3>
          <ul :key="`list-${index}`" class="pb-6">
            <li v-for="l in group.links" :key="l.to" class="py-2">
              <nuxt-link class="block dark:text-dark-onSurfacePrimary hover:text-nuxt-lightgreen transition-colors duration-300 ease-linear" :class="{'text-nuxt-lightgreen': path === locale + l.to}" :to="locale + l.to" exact>
                {{ l.name }}
              </nuxt-link>
            </li>
          </ul>
        </transition-group>
      </nui-container>
    </div>
  </div>
>>>>>>> 1b87907b (feat: dark mode (#303))
</template>

<script>
import nuiBtn from '@/components/commons/Button'
import nuiContainer from '@/components/commons/Container'
import nuiLogo from '@/components/svg/Nuxtjs'
<<<<<<< HEAD
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
=======
import AlgoliaSearch from '@/components/partials/AlgoliaSearch'
>>>>>>> 61b90c66 (feat: Add /blog section (#307))

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
<<<<<<< HEAD
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
=======
    AlgoliaSearch
  },
  computed: {
    ...mapState({
      headerLinks: state => state.lang.headerLinks
    })
>>>>>>> 61b90c66 (feat: Add /blog section (#307))
  }
}
</script>

<<<<<<< HEAD
=======
<style>
.header {
  @apply fixed top-0 left-0 right-0 z-30;
}
.header_nav_link a.nuxt-link-active {
    @apply text-nuxt-lightgreen;
}
/*.header_mobile_nav a {
  padding-bottom: max(0.5rem,env(safe-area-inset-bottom));
}*/
.header_mobile_aside {
  top: 72px;
  bottom: 60px;
  transform: translateX(-100%);
  transition-property: transform;
  transition-duration: 1s;
  transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
  /* transition-delay: .5s; */
  & .header_mobile_aside_group {
    transform: translateX(-100%);
    transition-property: transform;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
    &:nth-child(1) { transition-delay: 0.2s; }
    &:nth-child(2) { transition-delay: 0.3s; }
    &:nth-child(3) { transition-delay: 0.4s; }
    &:nth-child(4) { transition-delay: 0.5s; }
  }
}
.header_mobile_aside--open {
  transform: translateX(0px);
  transition-delay: 0s;
  & .header_mobile_aside_group {
    transform: translateX(0px);
  }
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
>>>>>>> 1b87907b (feat: dark mode (#303))
