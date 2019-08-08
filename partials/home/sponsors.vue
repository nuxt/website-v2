<template>
  <nui-container class="py-12">
    <section>
      <h1 class="text-3xl uppercase text-center pb-8">
        sponsors
      </h1>
      <p class="text-justify pb-8">
        Nuxt.js is an MIT licensed open source project and completely free to use.
        However, the amount of effort needed to maintain and develop new features for the project is not sustainable without proper financial backing.
        If you run a business and are using Nuxt in a revenue-generating product, it makes business sense to sponsor Nuxt development: it ensures the project that your product relies on stays healthy and actively maintained. It can also help your exposure in the Vue/Nuxt community and makes it easier to attract Vue/Nuxt developers.
        If you are an individual user and have enjoyed the productivity of using Nuxt, consider donating as a sign of appreciation.
      </p>
      <div v-for="(group, groupKey) in sponsors" :key="groupKey" class="text-center pb-8">
        <h2 class="uppercase text-xl pb-4">{{ groupKey }}</h2>
        <a class="inline-block m-4 mt-2" v-for="(sponsor, i) in group" :key="i" :href="sponsor.url" target="_blank" rel="noopener">
          <img :src="'/img/sponsors/' + sponsor.img" :alt="sponsor.name" class="inline-block" :class="sponsor.class"/>
        </a>
      </div>
      <div class="text-center">
        <nui-button :to="localePath('support-nuxtjs')" class="mr-4 py-3 px-6 text-base">
          <nui-svg-play slot="icon" class="h-4 -mt-1 mr-1"/>
          Become a sponsor
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
      sponsors: {
        platinum: [
          { name: 'Storyblok', img: 'storyblok-logo.svg', url: 'https://www.storyblok.com/?ref=nuxt', class: 'h-24' }
        ],
        gold: [
          { name: 'Tipe', img: 'tipe-io-cms.png', url: 'https://tipe.io/?ref=nuxt', class: 'h-12' },
          { name: 'VueMastery', img: 'vueMastery-brand.svg', url: 'https://www.vuemastery.com/?ref=nuxt', class: 'h-10' },
          { name: 'VueSchool', img: 'vueschool.png', url: 'https://vueschool.io/?friend=nuxt&utm_source=Nuxtjs.org&utm_medium=banner&utm_campaign=Open%20Collective', class: 'h-12' },
          { name: 'ShipShape', img: 'shipshape-logo.svg', url: 'https://shipshape.io/?ref=nuxt', class: 'h-12' },
          { name: 'Hapi', img: 'hapi-logo.svg', url: 'https://hapijs.com/?ref=nuxt', class: 'h-12' },
          { name: 'Blokt', img: 'blokt-logo.png', url: 'https://blokt.com/?ref=nuxt', class: 'h-10' }
        ]
      }
    }
  }
}
</script>
