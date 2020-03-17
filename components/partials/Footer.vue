<template>
<<<<<<< HEAD
<<<<<<< HEAD
  <footer class="bg-white shadow z-10 relative">
    <nui-container class="flex items-center content-center justify-between py-10">
      <nav v-for="(l, title, index) in links" :key="title" class="flex-1" :class="{'text-center': index === 1, 'text-right': index === 2}">
        <h3 class="font-bold uppercase text-lg pb-4 text-nuxt-gray">{{ title }}</h3>
        <ul>
          <li v-for="(link, i) in l" :key="i" class="py-2">
            <a v-if="link.href" :href="link.href" target="_blank" rel="noopener noreferrer" class="hover:text-nuxt-lightgreen">
              {{ link.key }}
            </a>
            <nuxt-link v-else :to="localePath(link.to)" class="hover:text-nuxt-lightgreen">
              {{ link.key }}
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </nui-container>
    <div class="border-t border-gray-300 py-4">
      <nui-container class="flex items-center content-center justify-between">
=======
  <footer class="footer z-10 relative bg-white">
    <nui-container class="border-t border-gray-300 lg:border-0">
      <div class="flex items-center content-center justify-between lg:border-t lg:border-gray-300 py-10">
        <nav v-for="(l, title, index) in links" :key="title" class="flex-1" :class="{'text-center': index === 1, 'text-right': index === 2}">
          <h3 class="font-bold uppercase text-lg pb-4">{{ title }}</h3>
          <ul>
            <li v-for="(link, i) in l" :key="i" class="py-2">
              <a v-if="link.href" :href="link.href" target="_blank" rel="noopener noreferrer" class="hover:text-nuxt-lightgreen">
                {{ link.key }}
              </a>
              <nuxt-link v-else :to="localePath(link.to)" class="hover:text-nuxt-lightgreen">
                {{ link.key }}
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="flex items-center content-center justify-between py-4 border-t border-gray-300">
>>>>>>> 2fb6a223 (sponsors and flat routes with header links)
        <div class="flex-1">
          <nui-select v-model="themes.current" :options="themes.options">
            <template v-slot:icon>
              <component :is="currentThemeIcon"/>
            </template>
          </nui-select>
        </div>
        <div class="flex-1 text-center">
          <a class="block" :href="localePath('index')" @click.prevent="$router.push(localePath('index'))" @click.right.stop.prevent="$router.push(localePath('resources-design'))">
            <h1 class="m-0 h-0 w-0 overflow-hidden">NUXTJS</h1>
            <nui-logo class="h-6 lg:h-auto"/>
          </a>
        </div>
        <div class="flex-1 text-right">
          <nui-select v-model="currentLang" :options="$i18n.locales">
            <template v-slot:icon>
              <nui-globe/>
            </template>
          </nui-select>
        </div>
      </nui-container>
=======
  <footer class="footer z-10 relative">
    <newsletter-form/>
    <div class="bg-light-elevatedSurface dark:bg-dark-elevatedSurface shadow-nuxt transition-colors duration-300 ease-linear">
      <div class="container mx-auto px-4">
        <div class="flex flex-col sm:flex-row text-center sm:text-left items-center content-center justify-between pt-10 sm:py-10">
          <nav v-for="(l, title, index) in links" :key="title" class="flex-1 w-full sm:w-auto mb-8 sm:mb-0" :class="{'sm:text-center': index === 1, 'sm:text-right': index === 2}">
            <h3 class="font-bold uppercase text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary text-lg pb-4 transition-colors duration-300 ease-linear">
              {{ title }}
            </h3>
            <ul class="text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary transition-colors duration-300 ease-linear">
              <li v-for="(link, i) in l" :key="i" class="py-2">
                <a v-if="link.href" :href="link.href" target="_blank" rel="noopener noreferrer" class="hover:text-nuxt-lightgreen">
                  {{ link.key }}
                </a>
                <nuxt-link v-else :to="link.to" class="hover:text-nuxt-lightgreen">
                  {{ link.key }}
                </nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="lg:border-t border-light-border dark:border-dark-border transition-colors duration-300 ease-linear">
        <div class="container mx-auto px-4 flex flex-row items-center content-center justify-between py-4 ">
          <div class="flex-1 flex">
            <dark-mode-toggle />
            <!-- <nui-select v-model="currentTheme" :options="themes">
              <template v-slot:icon>
                <component :is="currentThemeIcon" />
              </template>
            </nui-select> -->
          </div>
          <div class="flex-1 text-center hidden sm:block">
            <a class="block" href="/" @click.prevent="$router.push('/')" @click.right.stop.prevent="$router.push('/design')">
              <h1 class="m-0 h-0 w-0 overflow-hidden">NUXTJS</h1>
              <nui-logo class="h-6 lg:h-auto text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear" />
            </a>
          </div>
          <div class="flex-1 text-right">
            <nui-select v-model="currentLang" :options="locales">
              <template v-slot:icon>
                <nui-globe />
              </template>
            </nui-select>
          </div>
        </div>
      </div>
>>>>>>> 1b87907b (feat: dark mode (#303))
    </div>
  </footer>
</template>

<script>
<<<<<<< HEAD
import nuiContainer from '@/components/commons/Container'
import nuiSelect from '@/components/commons/Select'
import nuiSun from '@/components/svg/Sun'
import nuiMoon from '@/components/svg/Moon'
import nuiGlobe from '@/components/svg/Globe'
import nuiLogo from '@/components/svg/Mountains'

export default {
  data () {
    return {
<<<<<<< HEAD
      themes: {
        current: 0,
        options: [
          { text: 'light', icon: 'nui-sun' },
          { text: 'dark', icon: 'nui-moon' }
        ]
      },
=======
      themes: [
        { value: 'light', text: 'light', icon: 'nui-sun' }
        // { value: 'dark', text: 'dark', icon: 'nui-moon' }
      ],
>>>>>>> c7763d43 (New design with illustrations)
=======
import NewsletterForm from './NewsletterForm'
import nuiGlobe from '@/components/svg/Globe'
import nuiLogo from '@/components/svg/Mountains'
import localeManager from '@/mixins/localeManager'
import DarkModeToggle from '@/components/partials/DarkModeToggle'

export default {
  components: {
    NewsletterForm,
    nuiGlobe,
    nuiLogo,
    DarkModeToggle
  },
  mixins: [
    localeManager
  ],
  data () {
    return {
      // themes: [
      //   // { value: 'system', text: 'Auto', icon: 'nui-sun' },
      //   { value: 'light', text: 'Light', icon: 'nui-sun' },
      //   { value: 'dark', text: 'Dark', icon: 'nui-moon' }
      // ],
>>>>>>> 1b87907b (feat: dark mode (#303))
      links: {
<<<<<<< HEAD
        ecosystem: [
          { key: 'Events', to: 'events' },
          { key: 'Become a Nuxter', to: 'support' },
          { key: 'The NuxtJS Shop', to: 'shop' },
          { key: 'Find or Post a Job', to: 'jobs' }
=======
        discover: [
          { key: 'Resources', to: 'resources' },
          { key: 'Design charte', to: 'design' },
          { key: 'A worldwild team', to: 'team' }
>>>>>>> ce84991b (support page)
        ],
        follow: [
          { key: 'News', to: 'blog' },
          { key: 'Github', href: 'https://github.com/nuxt/nuxt.js' },
          { key: 'Twitter', href: 'https://twitter.com/nuxt_js' },
          { key: 'Discord', href: 'https://discordapp.com/invite/ps2h6QT' }
        ],
        company: [
          { key: 'About us', to: 'about-us' },
          { key: 'Training', to: 'training' },
          { key: 'Terms of Service', to: 'terms-of-service' },
          { key: 'Privacy Policy', to: 'privacy-policy' }
        ]
      }
    }
<<<<<<< HEAD
  },
  computed: {
    currentLang: {
      get () {
        return this.$i18n.locales.map(l => l.code).indexOf(this.$store.state.i18n.locale)
      },
      set (value) {
        this.$router.push(this.switchLocalePath(this.$i18n.locales[value].code))
      }
    },
    currentThemeIcon () {
      return this.themes.options[this.themes.current].icon
    }
  },
  components: {
    nuiContainer,
    nuiSelect,
    nuiSun,
    nuiMoon,
    nuiGlobe,
    nuiLogo
=======
>>>>>>> 1b87907b (feat: dark mode (#303))
  }
  // computed: {
  //   currentTheme: {
  //     get () {
  //       const index = this.themes.map(l => l.value).indexOf(this.$theme.value)

  //       return index === -1 ? 0 : index
  //     },
  //     set (index) {
  //       this.$theme.set(this.themes[index].value)
  //     }
  //   },
  //   currentThemeIcon () {
  //     return this.themes[this.currentTheme].icon
  //   }
  // }
}
</script>
