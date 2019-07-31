<template>
  <footer class="footer shadow z-10 relative bg-white">
    <nui-container class="flex items-center content-center justify-between py-10">
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
    </nui-container>
    <div class="border-t border-gray-300 py-4">
      <nui-container class="flex items-center content-center justify-between">
        <div class="flex-1">
          <nui-select v-model="currentTheme" :options="themes">
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
    </div>
  </footer>
</template>

<script>
import nuiSun from '@/components/svg/Sun'
import nuiMoon from '@/components/svg/Moon'
import nuiGlobe from '@/components/svg/Globe'
import nuiLogo from '@/components/svg/Mountains'

export default {
  data () {
    return {
      themes: [
        { value: 'light', text: 'light', icon: 'nui-sun' },
        { value: 'dark', text: 'dark', icon: 'nui-moon' }
      ],
      links: {
        discover: [
          { key: 'A worldwild team', to: 'index' },
          { key: 'Events and mentions', to: 'index' },
          { key: 'A worldwild team', to: 'index' }
        ],
        follow: [
          { key: 'Github', href: 'https://github.com/nuxt/nuxt.js' },
          { key: 'Twitter', href: 'https://twitter.com/nuxt_js' },
          { key: 'Discord', href: 'https://discordapp.com/invite/ps2h6QT' }
        ],
        support: [
          { key: 'Become a Nuxter', to: 'index' },
          { key: 'The NuxtJS Shop', to: 'index' },
          { key: 'Find or Post a Job', to: 'index' }
        ]
      }
    }
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
  },
  components: {
    nuiSun,
    nuiMoon,
    nuiGlobe,
    nuiLogo
  }
}
</script>
