<template>
  <footer class="nui-footer">
    <div class="nui-footer-infos">
      <nui-container>
        <nui-row>
          <nui-links title="discover" :links="['Open Source projects', 'A worldwild team', 'Events and mentions', 'Companies and showcase']"/>
          <nui-links title="follow" :links="['News', 'Github', 'Twitter', 'Discord']"/>
          <nui-links title="support" :links="['Become a backer', 'The NuxtJS Shop', 'Need some consulting?', 'Become a contributor']"/>
        </nui-row>
      </nui-container>
    </div>
    <div class="nui-footer-options">
      <nui-container>
        <nui-row>
          <nui-select class="nui-select-theme" :options="themes" v-model="selectedTheme"/>
          <a class="nui-footer-options-logo-link" href="/" @click.prevent="$router.push('/')" @click.right.stop.prevent="$router.push('/design')">
            <h1>NUXTJS</h1>
            <nui-logo/>
          </a>
          <nui-select class="nui-select-theme" :options="langs" v-model="selectedLang"/>
        </nui-row>
      </nui-container>
    </div>
  </footer>
</template>

<script>
import nuiContainer from '@/components/ui/Container'
import nuiRow from '@/components/ui/Row'
import nuiSelect from '@/components/ui/Select'
import nuiLinks from '@/components/partials/FooterLinks'
import nuiLogo from '@/components/svg/Mountains'

export default {
  data () {
    return {
      themes: [
        { name: 'Light', value: 'light', icon: 'sun' },
        { name: 'Dark', value: 'dark', icon: 'moon' }
      ],
      selectedTheme: 'light',
      langs: [
        { name: 'English', value: 'en', icon: 'globe' },
        { name: 'Français', value: 'fr', icon: 'globe' }
      ],
      selectedLang: 'en'
    }
  },
  components: {
    nuiContainer,
    nuiRow,
    nuiSelect,
    nuiLinks,
    nuiLogo
  }
}
</script>

<style lang="scss">
$grey_blue: #2F495E;
$light_green: #00C58E;
$grey: #606F7B;
$silver: #DAE1E9;
$light_grey: #F1F5F8;

.nui-footer {
  box-shadow: 0 -2px 4px 0 rgba(10, 31, 68, 0.08);
  &-infos {
    padding: 4rem 0;
    nav:nth-child(2) {
      text-align: center;
    }
    nav:nth-child(3) {
      text-align: right;
    }
  }
  &-options {
    border-top: 1px solid $silver;
    padding: 1.5rem 0;
    &-logo-link {
      display: inline-block;
      padding-top: 0.5rem;
      h1 {
        margin: 0;
        width: 0;
        height: 0;
        overflow: hidden;
      }
    }
  }
}
</style>
