<template>
  <nui-hero class="Home__Showcase">
    <nui-container>
      <div>
        <h1>
          Who's using nuxt<span>js</span>
        </h1>
      </div>
      <div>
        <a class="Home__Showcase__link" v-for="(partner, i) in partners" :key="i" :href="partner.url" target="_blank" rel="noopener">
          <img :src="'/img/partners/' + partner.img" :alt="partner.name" />
        </a>
      </div>
      <div>
        <nui-button to="/support-us" green>
          <nui-svg-play/>
          discover more showcase
        </nui-button>
      </div>
    </nui-container>
  </nui-hero>
</template>

<script>
// import nuiTitle from '@/components/commons/Title'
import nuiSvgPlay from '@/components/svg/Play.vue'

export default {
  components: {
    // nuiTitle,
    nuiSvgPlay
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
.Home__Showcase {
  text-align: center;
  .nui-svg-opencollective {
    height: 20px;
  }
  &__link {
    display: inline-block;
    margin: 1rem;
    img {
      height: 48px;
    }
  }
}
</style>
