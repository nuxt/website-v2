<template>
  <component :is="currentTheme">
    <slot/>
  </component>
</template>

<script>
// injection dynamique currentTheme === dirName + '/ commons sin
export default {
  props: {
    theme: {
      type: String,
      required: true
    }
  },
  mixins: [
    {}
  ],
  components : {
    // COMPONENTS, Lister tous les composants .vue dans components/ pour les pre-inclure
    // concaterner les Noms pour faire 'prefixDirectoryFile' usage: <prefix-directory-file/>
    // { prefixDirectoryFile: () => import('@/components/COMPONENTS') }

    // THEMES, Lister tous les themes .vue dans themes/
    // concaterner les Noms pour faure 'themeFile' usage: <component :is="currentTheme"/>
    'themeLight': () => import('@/themes/light'),
    'themeDark': () => import('@/themes/dark')
  },
  computed: {
    currentTheme () {
      return 'theme' + this.theme.charAt(0).toUpperCase() + this.theme.slice(1).toLowerCase();
    }
  }
}
</script>

