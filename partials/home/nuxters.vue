<template>
  <nui-container class="py-12">
    <section>
      <h1 class="text-3xl uppercase text-center pb-8">
        Nuxters
      </h1>
      <p>
        Nuxt.js is an MIT licensed open source project and completely free to use.
        However, the amount of effort needed to maintain and develop new features for the project is not sustainable without proper financial backing.
        If you run a business and are using Nuxt in a revenue-generating product, it makes business sense to sponsor Nuxt development: it ensures the project that your product relies on stays healthy and actively maintained. It can also help your exposure in the Vue/Nuxt community and makes it easier to attract Vue/Nuxt developers.
        If you are an individual user and have enjoyed the productivity of using Nuxt, consider donating as a sign of appreciation.
      </p>
      <p>TODO ! - opencollective API pour recuperer les images des sponsors uniquement + section and XXX Nuxters </p>
      <div>
        <a class="Home__Showcase__link" v-for="(partner, i) in partners" :key="i" :href="partner.url" target="_blank" rel="noopener">
          <img :src="'/img/partners/' + partner.img" :alt="partner.name" />
        </a>
      </div>
      <div>
        <nui-button :to="localePath({ name: 'learn-section-slug', params: { section: 'guide', slug: 'installation'}})" class="mr-4 py-3 px-6 text-base">
          <nui-svg-play slot="icon" class="h-4 -mt-1 mr-1"/>
          discover more showcase
        </nui-button>
      </div>
    </section>
  </nui-container>
</template>

<script>
import nuiSvgPlay from '@/components/svg/Play.vue'

export default {
  components: {
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
