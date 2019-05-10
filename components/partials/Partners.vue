<template>
  <nui-hero class="nui-partners">
    <nui-container>
      <div>
        <nui-title>
          PROUDLY SUPPORT BY
        </nui-title>
      </div>
      <div>
        <a class="nui-partners-link" v-for="(partner, i) in partners" :key="i" :href="partner.url" target="_blank" rel="noopener">
          <img :src="'/img/partners/' + partner.img" :alt="partner.name" />
        </a>
      </div>
      <div>
        <nui-button to="/support-us" green>
          <nui-svg-open-collective/>
          become a partner
        </nui-button>
      </div>
    </nui-container>
  </nui-hero>
</template>

<script>
import nuiHero from '@/components/ui/Hero'
import nuiContainer from '@/components/ui/Container'
import nuiTitle from '@/components/ui/Title'
import nuiButton from '@/components/ui/Button.vue'
import nuiSvgOpenCollective from '@/components/svg/OpenCollective.vue'

export default {
  components: {
    nuiHero,
    nuiContainer,
    nuiTitle,
    nuiButton,
    nuiSvgOpenCollective
  },
  data () {
    return {
      partners: [
        { name: 'Storyblok', img: 'storyblok-logo.svg', url: 'https://www.storyblok.com/?ref=nuxt' },
        { name: 'VueMastery', img: 'vueMastery-brand.svg', url: 'https://www.vuemastery.com/?ref=nuxt' },
        { name: 'Yakaz', img: 'yakaz-partner.png', url: 'https://yakaz.com' },
        { name: 'VueSchool', img: 'vueschool.png', url: 'https://vueschool.io/?friend=nuxt&utm_source=Nuxtjs.org&utm_medium=banner&utm_campaign=Open%20Collective' },
        { name: 'ShipShape', img: 'shipshape-logo.svg', url: 'https://shipshape.io/?ref=nuxt' },
        { name: 'Hapi', img: 'hapi-logo.svg', url: 'https://hapijs.com/?ref=nuxt' },
        { name: 'Blokt', img: 'blokt-logo.png', url: 'https://blokt.com/?ref=nuxt' }
      ]
    }
  }
}
</script>

<style lang="scss">
.nui-partners {
  text-align: center;
  .nui-svg-opencollective {
    height: 20px;
  }
  &-link {
    display: inline-block;
    margin: 1rem;
    img {
      height: 48px;
    }
  }
}
</style>
