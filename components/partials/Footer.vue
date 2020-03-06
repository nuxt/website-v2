<template>
  <footer class="footer z-10 relative">
    <newsletter-form/>
    <div class="bg-elevatedSurface shadow-nuxt">
      <div class="container mx-auto px-4">
        <div class="flex flex-col sm:flex-row text-center sm:text-left items-center content-center justify-between pt-10 sm:py-10">
          <nav v-for="(l, title, index) in links" :key="title" class="flex-1 w-full sm:w-auto mb-8 sm:mb-0" :class="{'sm:text-center': index === 1, 'sm:text-right': index === 2}">
            <h3 class="font-bold uppercase text-onSurfacePrimary text-lg pb-4">
              {{ title }}
            </h3>
            <ul class="text-onSurfaceSecondary">
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
      <div class="lg:border-t border-surface">
        <div class="container mx-auto px-4 flex flex-row items-center content-center justify-between py-4 ">
          <div class="flex-1">
            <nui-select v-model="currentTheme" :options="themes">
              <template v-slot:icon>
                <component :is="currentThemeIcon" />
              </template>
            </nui-select>
          </div>
          <div class="flex-1 text-center hidden sm:block">
            <a class="block" href="/" @click.prevent="$router.push('/')" @click.right.stop.prevent="$router.push('/design')">
              <h1 class="m-0 h-0 w-0 overflow-hidden">NUXTJS</h1>
              <nui-logo class="h-6 lg:h-auto" />
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
    </div>
  </footer>
</template>

<script>
import NewsletterForm from './NewsletterForm'
import nuiSun from '@/components/svg/Sun'
import nuiMoon from '@/components/svg/Moon'
import nuiGlobe from '@/components/svg/Globe'
import nuiLogo from '@/components/svg/Mountains'
import localeManager from '@/mixins/localeManager'

export default {
  components: {
    NewsletterForm,
    nuiSun,
    nuiMoon,
    nuiGlobe,
    nuiLogo
  },
  mixins: [
    localeManager
  ],
  data () {
    return {
      themes: [
        // { value: 'system', text: 'Auto', icon: 'nui-sun' },
        { value: 'light', text: 'Light', icon: 'nui-sun' },
        { value: 'dark', text: 'Dark', icon: 'nui-moon' }
      ],
      links: {
        discover: [
          { key: 'Design resources', to: '/design' },
          { key: 'A worldwide team', to: '/team' },
          { key: 'VueSchool video courses', href: 'https://vueschool.io/?friend=nuxt&utm_source=Nuxtjs.org&utm_medium=Link&utm_content=Footer' }
        ],
        follow: [
          { key: 'GitHub', href: 'https://github.com/nuxt/nuxt.js' },
          { key: 'Twitter', href: 'https://twitter.com/nuxt_js' },
          { key: 'Discord', href: 'https://discord.nuxtjs.org' }
        ],
        support: [
          { key: 'Sponsor NuxtJS', to: '/sponsor-nuxtjs' },
          { key: 'The NuxtJS Shop', to: '/shop' },
          { key: 'NuxtJS Consulting', to: '/support' }
        ]
      }
    }
  },
  computed: {
    currentTheme: {
      get () {
        const index = this.themes.map(l => l.value).indexOf(this.$theme.value)

        return index === -1 ? 0 : index
      },
      set (index) {
        this.$theme.set(this.themes[index].value)
      }
    },
    currentThemeIcon () {
      return this.themes[this.currentTheme].icon
    }
  }
}
</script>
