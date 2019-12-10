<template>
  <nui-container class="py-12 text-center">
    <section class="px-4">
      <h1 class="text-3xl uppercase mb-2 sm:mb-0" v-html="wordings.attrs.title" />
      <i-sponsoring id="sponsor-img" class="inline-block float-right lg:ml-4" />
      <div class="pt-6 pb-12 leading-loose text-left">
        <p v-html="wordings.body" />
      </div>
      <div v-for="(group, groupKey) in sponsors" :key="groupKey" class="text-center pb-8">
        <h2 class="uppercase text pb-8">
          <span class="pb-2 border-b-2 border-nuxt-lightgreen">{{ groupKey }}</span>
        </h2>
        <a
          v-for="(sponsor, i) in group"
          :key="i"
          class="sponsor inline-block m-4"
          :href="sponsor.url"
          target="_blank"
          rel="noopener sponsored"
        >
          <img :src="'/img/sponsors/' + sponsor.img" :alt="sponsor.name" class="inline-block" :class="sponsor.class">
        </a>
      </div>
      <div class="text-center">
        <nui-button :to="{ name: 'sponsor-nuxtjs' }" class="mr-4 py-3 px-6 text-base">
          <nui-svg-go slot="icon" class="h-5 -mt-1 mr-1" />
          {{ buttonWording }}
        </nui-button>
      </div>
    </section>
  </nui-container>
</template>

<script>
import nuiSvgGo from '@/components/svg/OpenCollective.vue'
import iSponsoring from '@/components/svg/streamline/sponsoring.vue'

export default {
  components: {
    nuiSvgGo,
    iSponsoring
  },
  data () {
    return {
      sponsors: {
        platinum: [
          { name: 'Storyblok', img: 'storyblok-logo.svg', url: 'https://www.storyblok.com/?ref=nuxt', class: 'h-24' }
        ],
        gold: [
          { name: 'Tipe', img: 'tipe-io-cms.png', url: 'https://tipe.io/?ref=nuxt', class: 'h-12' },
          { name: 'VueMastery', img: 'vueMastery-brand.svg', url: 'https://www.vuemastery.com/?ref=nuxt', class: 'h-10' }
        ],
        special: [
          { name: 'Google Chrome', img: 'google-chrome.svg', url: 'https://www.google.com/chrome/?ref=nuxt', class: 'h-12' }
        ]
      },
      wordings: this.$store.state.homepage.sponsors,
      buttonWording: this.$store.state.lang.homepage.sponsors.become_a_sponsor
    }
  }
}
</script>

<style lang="scss">
.sponsor {
  & img {
    opacity: 0.75;
    filter: grayscale(100%);
    transition: all 0.5s;
  }
  &:hover {
    & img {
      opacity: 1;
      filter: grayscale(0%);
    }
  }
}
#sponsor-img {
  shape-outside: circle(49.5% at 90px 95px);
}
</style>
