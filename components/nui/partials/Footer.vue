<template>
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
    </div>
  </footer>
</template>

<script>
import nuiContainer from '@/components/nui/commons/Container'
import nuiSelect from '@/components/nui/commons/Select'
import nuiSun from '@/components/nui/svg/Sun'
import nuiMoon from '@/components/nui/svg/Moon'
import nuiGlobe from '@/components/nui/svg/Globe'
import nuiLogo from '@/components/svg/Mountains'

export default {
  data () {
    return {
      themes: {
        current: 0,
        options: [
          { text: 'light', icon: 'nui-sun' },
          { text: 'dark', icon: 'nui-moon' }
        ]
      },
      links: {
        discover: [
          { key: 'Open Source projects', to: 'ecosystem-oss' },
          { key: 'A worldwild team', to: 'ecosystem-team' },
          { key: 'Events', to: 'ecosystem-events' },
          { key: 'Companies', to: 'discover-showcase' }
        ],
        follow: [
          { key: 'News', to: 'ecosystem-oss' },
          { key: 'Github', href: 'https://github.com/nuxt/nuxt.js' },
          { key: 'Twitter', href: 'https://twitter.com/nuxt_js' },
          { key: 'Discord', href: 'https://discordapp.com/invite/ps2h6QT' }
        ],
        support: [
          { key: 'Become a nuxter', to: 'ecosystem-oss' },
          { key: 'The NuxtJS Shop', to: 'ecosystem-oss' },
          { key: 'Find a job', to: 'ecosystem-oss' },
          { key: 'Become a contributor', to: 'ecosystem-oss' }
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
  }
}
</script>
