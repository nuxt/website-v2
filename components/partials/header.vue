<template>
  <header class="nHeader">
    <div class="container row nHeader_Content">
      <nuxt-link to="/" class="nHeader_Logo">
        <n-logo/>
      </nuxt-link>
      <h1 class="nHeader_Content_Title">NUXT</h1>
      <n-navigation is-row>
        <n-list :list="menu"/>
      </n-navigation>
    </div>
  </header>
</template>

<script>
import nLogo from '@/components/svg/nuxt'
import nNavigation from '@/components/theme/navigation'
import nList from '@/components/theme/list'

export default {
  components: {
    nLogo,
    nNavigation,
    nList
  },
  computed: {
    menu: () => {
      return [
        { text: 'Documentation', target: 'self', path: '/guide' },
        { text: 'Resources', target: 'self', path: '/modules' },
        { text: 'Community', target: 'blank', path: 'https://cmty.app/nuxt' },
        { text: 'Translations', target: 'dropdown', path: [
          { text: 'English', target: 'blank', path: 'https://nuxtjs.org' },
          { text: 'Francais', target: 'blank', path: 'https://fr.nuxtjs.org' },
          { text: 'Chineese', target: 'blank', path: 'https://zh.nuxtjs.org' }
        ] }
      ]
    }
  }
}
</script>

<style lang="scss">
.nHeader {
  background-color: $background-color-lighter;
  box-shadow: $box-shadow-base;
  padding: $font-size-xs 0;
  &_Logo {
    margin-right: $font-size-xs;
  }
  @media (min-width: $--xs) {
    padding: $font-size-sm 0;
    &_Logo {
      margin-right: $font-size-sm;
    }
  }
  @media (min-width: $--sm) {
    padding: $font-size-base 0;
    &_Logo {
      margin-right: $font-size-base;
    }
  }
  @media (min-width: $--md) {
    padding: $font-size-lg 0;
    &_Logo {
      margin-right: $font-size-lg;
    }
  }
  @media (min-width: $--lg) {
    padding: $font-size-xl 0;
    &_Logo {
      margin-right: $font-size-xl;
    }
  }
  &_Content {
    align-items: stretch;
    .nNavigation {
      flex-grow: 1;
    }
    &_Title {
      margin: 0;
      width: 0;
      height: 0;
      overflow: hidden;
    }
  }
}
</style>
