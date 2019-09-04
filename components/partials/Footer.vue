<template>
  <footer class="footer z-10 relative bg-white">
    <nui-container class="border-t border-gray-300 lg:border-0">
      <div class="flex flex-col sm:flex-row text-center sm:text-left items-center content-center justify-between lg:border-t lg:border-gray-300 pt-10 sm:py-10">
        <nav v-for="(l, title, index) in links" :key="title" class="flex-1 w-full sm:w-auto mb-8 sm:mb-0" :class="{'sm:text-center': index === 1, 'sm:text-right': index === 2}">
          <h3 class="font-bold uppercase text-lg pb-4">
            {{ title }}
          </h3>
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
    </nui-container>
    <nui-container class="border-t border-gray-300 lg:border-0">
      <div class="flex flex-row items-center content-center justify-between py-4 lg:border-t lg:border-gray-300">
        <div class="flex-1">
          <nui-select v-model="currentTheme" :options="themes">
            <template v-slot:icon>
              <component :is="currentThemeIcon" />
            </template>
          </nui-select>
        </div>
        <div class="flex-1 text-center hidden sm:block">
          <a class="block" :href="localePath('index')" @click.prevent="$router.push(localePath('index'))" @click.right.stop.prevent="$router.push(localePath('design'))">
            <h1 class="m-0 h-0 w-0 overflow-hidden">NUXTJS</h1>
            <nui-logo class="h-6 lg:h-auto" />
          </a>
        </div>
        <div class="flex-1 text-right">
          <nui-select v-model="currentLang" :options="$i18n.locales">
            <template v-slot:icon>
              <nui-globe />
            </template>
          </nui-select>
        </div>
      </div>
    </nui-container>
  </footer>
</template>

<script>
import nuiSun from '@/components/svg/Sun'
import nuiMoon from '@/components/svg/Moon'
import nuiGlobe from '@/components/svg/Globe'
import nuiLogo from '@/components/svg/Mountains'

export default {
  components: {
    nuiSun,
    nuiMoon,
    nuiGlobe,
    nuiLogo
  },
  data () {
    return {
      themes: [
        { value: 'light', text: 'light', icon: 'nui-sun' },
        { value: 'dark', text: 'dark', icon: 'nui-moon' }
      ],
      links: {
        discover: [
          { key: 'NuxtJS Themes', to: 'themes' },
          { key: 'Design resources', to: 'design' },
          { key: 'A worldwild team', to: 'team' }
        ],
        follow: [
          { key: 'Github', href: 'https://github.com/nuxt/nuxt.js' },
          { key: 'Twitter', href: 'https://twitter.com/nuxt_js' },
          { key: 'Discord', href: 'https://discordapp.com/invite/ps2h6QT' }
        ],
        support: [
          { key: 'Sponsor NuxtJS', to: 'sponsor-nuxtjs' },
          { key: 'The NuxtJS Shop', to: 'shop' },
          { key: 'NuxtJS Consulting', to: 'support' }
        ]
      }
    }
  },
  computed: {
    currentLang: {
      get () {
        return this.$i18n.locales.map(l => l.code).indexOf(this.$i18n.locale)
      },
      set (value) {
        this.$store.dispatch('getLangData', this.$i18n.locales[value].code)
        this.$router.push(this.switchLocalePath(this.$i18n.locales[value].code))
      }
    },
    currentTheme: {
      get () {
        return this.themes.map(l => l.value).indexOf(this.$store.state.theme)
      },
      set (value) {
        this.$store.commit('setTheme', this.themes[value].value)
      }
    },
    currentThemeIcon () {
      return this.themes[this.currentTheme].icon
    }
  }
}
</script>
