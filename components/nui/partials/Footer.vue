<template>
  <footer class="bg-white shadow-reverse">
    <nui-container class="flex items-center content-center justify-between py-8">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum sequi voluptas cum provident aperiam sint quia magni, itaque laboriosam quis qui earum consequatur sit delectus quibusdam. Quisquam, molestiae! Asperiores, soluta.
      <!-- // Links -->
    </nui-container>
    <div class="border-t border-gray-200 py-4">
      <nui-container class="flex items-center content-center justify-between">
        <nui-select v-model="themes.current" :options="themes.options">
          <template v-slot:icon>
            <component :is="currentThemeIcon"/>
          </template>
        </nui-select>
        <a class="block" :href="localePath('index')" @click.prevent="$router.push(localePath('index'))" @click.right.stop.prevent="$router.push(localePath('resources-design'))">
          <h1 class="m-0 h-0 w-0 overflow-hidden">NUXTJS</h1>
          <nui-logo class="h-6 lg:h-auto"/>
        </a>
        <nui-select v-model="currentLang" :options="$i18n.locales">
          <template v-slot:icon>
            <nui-globe/>
          </template>
        </nui-select>
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
