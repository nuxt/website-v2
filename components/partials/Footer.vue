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
          <select class="nui-select">
            <option>Theme</option>
          </select>
          <a class="nui-footer-options-logo-link" href="/" @click.prevent="$router.push('/')" @click.right.stop.prevent="$router.push('/design')">
            <h1>NUXTJS</h1>
            <nui-logo/>
          </a>
          <select class="nui-select">
            <option>Langue</option>
          </select>
        </nui-row>
      </nui-container>
    </div>
  </footer>
</template>

<script>
import nuiContainer from '@/components/ui/Container'
import nuiRow from '@/components/ui/Row'
import nuiLinks from '@/components/partials/FooterLinks'
import nuiLogo from '@/components/svg/Mountains'

export default {
  components: {
    nuiContainer,
    nuiRow,
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
    padding: 2rem 0;
    &-logo {
      display: block;
      &-link {
        display: block;
        h1 {
          margin: 0;
          width: 0;
          height: 0;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
