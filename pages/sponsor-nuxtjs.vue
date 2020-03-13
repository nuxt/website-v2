<template>
  <div class="bg-light-elevatedSurface dark:bg-dark-elevatedSurface shadow-nuxt transition-colors duration-300 ease-linear">
    <div class="container mx-auto px-4 pt-16 pb-12">
      <div class="flex flex-wrap justify-between mb-8">
        <div class="lg:w-6/12 lg:text-left text-center p-4 sm:p-0">
          <h1 class="text-3xl xl:text-4xl text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary font-medium leading-normal mb-6 lg:pt-4">
            Sponsor NUXT<span class="text-nuxt-lightgreen">JS</span> Development<br>
          </h1>
          <h3 class="xl:text-lg text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary font-medium leading-relaxed mb-6">
            NuxtJS is an MIT licensed open source project and completely free to use.<br>
            However, the amount of effort needed to maintain and develop new features for the project is not sustainable without proper financial backing.<br>
            You can support NuxtJS development via the following methods:
          </h3>
        </div>
        <i-sponsor class="w-2/3 mx-auto lg:mx-0 lg:w-5/12 lg:-mt-8 text-light-elevatedSurface dark:text-dark-elevatedSurface"/>
      </div>
      <section class="flex flex-wrap bg-light-surface dark:bg-dark-surface p-8 rounded my-12">
        <div class="w-full lg:w-2/3 text-center lg:text-left">
          <h2 class="text-2xl uppercase pt-4 pb-6">
            One-time donations
          </h2>
          <p class="mb-8 text-gray-600">
            We accept donations through these channels
          </p>
          <div class="flex flex-wrap justify-center lg:justify-start items-end mb-8 text-light-onSurfacePrimary">
            <a href="https://www.paypal.me/nuxtjs" target="_blank" class="flex items-center my-2 bg-gray-200 hover:bg-gray-300 rounded-full px-6 py-4 font-bold mr-2 -ml-2">
              <img src="/img/wallet/paypal.png" alt="Paypal" class="h-6 block">
            </a>
            <a href="#btc" class="flex items-center my-2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 pr-6 font-bold mx-2" :class="{ 'bg-gray-300': onetime.current === 'btc' }" @click.prevent="onetime.current = 'btc'">
              <nui-svg-btc class="mr-3" /> BTC
            </a>
            <a href="#bch" class="flex items-center my-2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 pr-6 font-bold mx-2" :class="{ 'bg-gray-300': onetime.current === 'bch' }" @click.prevent="onetime.current = 'bch'">
              <nui-svg-bch class="mr-3" /> BCH
            </a>
            <a href="#eth" class="flex items-center my-2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 pr-6 font-bold mx-2" :class="{ 'bg-gray-300': onetime.current === 'eth' }" @click.prevent="onetime.current = 'eth'">
              <nui-svg-eth class="mr-3" /> ETH
            </a>
            <a href="#ltc" class="flex items-center my-2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 pr-6 font-bold mx-2" :class="{ 'bg-gray-300': onetime.current === 'ltc' }" @click.prevent="onetime.current = 'ltc'">
              <nui-svg-ltc class="mr-3" /> LTC
            </a>
          </div>
        </div>
        <div v-if="currentOnetime" class="text-center w-full lg:w-1/3">
          <p class="text-xl">
            {{ currentOnetime.title }}
          </p>
          <p class="py-3 text-gray-600">
            {{ currentOnetime.address }}
          </p>
          <img :src="currentOnetime.img" :alt="currentOnetime.title" class="w-5/12 inline-block">
        </div>
      </section>
      <section class="text-center">
        <h2 class="text-2xl text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary font-medium uppercase pt-10 pb-8">
          Recurring Pledges
        </h2>
        <p class="text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary mb-12">
          Recurring pledges come with exclusive perks, e.g. having your name listed in the NuxtJS GitHub repository, or have your company logo placed on this website.
          Become a nuxter or sponsor via <a href="https://opencollective.com/nuxtjs">OpenCollective</a> (goes into a fund with transparent expense models supporting community efforts and events).
        </p>
        <div v-for="(group, groupKey) in sponsors" :key="groupKey" class="text-center pb-8">
          <h2 class="uppercase text-xl pb-8">
            <span class="pb-2 border-b-2 border-nuxt-lightgreen text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear">{{ groupKey }} SPONSORS</span>
          </h2>
          <a
            v-for="(sponsor, i) in group"
            :key="i"
            class="sponsor inline-block m-4"
            :href="sponsor.url"
            target="_blank"
            rel="noopener sponsored"
          >
            <img :src="`/img/sponsors/${$theme.value}/${sponsor.img}`" :alt="sponsor.name" :title="sponsor.name" class="inline-block" :class="sponsor.class">
          </a>
        </div>
        <div class="text-center">
          <nui-button href="https://opencollective.com/nuxtjs" class="py-3 px-6 text-base">
            <nui-svg-play slot="icon" class="h-5 -mt-1 mr-1" />
            Become a sponsor
          </nui-button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import nuiSvgPlay from '@/components/svg/OpenCollective.vue'
import nuiSvgBtc from '@/components/svg/wallet/btc.vue'
import nuiSvgBch from '@/components/svg/wallet/bch.vue'
import nuiSvgEth from '@/components/svg/wallet/eth.vue'
import nuiSvgLtc from '@/components/svg/wallet/ltc.vue'
import iSponsor from '@/components/svg/fogg/sponsor'

export default {
  components: {
    iSponsor,
    nuiSvgPlay,
    nuiSvgBtc,
    nuiSvgBch,
    nuiSvgEth,
    nuiSvgLtc
  },
  data () {
    return {
      sponsors: {
        platinum: [
          { name: 'Storyblok', img: 'storyblok-logo.svg', url: 'https://www.storyblok.com/?ref=nuxt', class: 'h-24' }
        ],
        gold: [
          { name: 'VueMastery', img: 'vueMastery-brand.svg', url: 'https://www.vuemastery.com/?ref=nuxt', class: 'h-10' }
        ],
        silver: [
          { name: 'Sparheld', img: 'sparheld.svg', url: 'https://www.sparheld.de/?ref=nuxt', class: 'h-8' },
          { name: 'Icons8', img: 'icons8.svg', url: 'https://icons8.com/?ref=nuxt', class: 'h-8' },
          { name: 'Clay', img: 'clay.svg', url: 'https://clay.global/?ref=nuxt', class: 'h-8' },
          { name: 'UX Planet', img: 'ux-planet.png', url: 'https://uxplanet.org/top-ui-ux-design-agencies-user-experience-firms-8c54697e290/?ref=nuxt', class: 'h-8' },
          { name: 'FireStickHow', img: 'fire-stick-how.png', url: 'https://www.firestickhow.com/?ref=nuxt', class: 'h-8' },
          { name: 'CrossWordSolver', img: 'crosswordsolver.svg', url: 'https://www.crosswordsolver.com/?ref=nuxt', class: 'h-8' },
          { name: 'Top Web Agencies', img: 'top-web-agencies.png', url: 'https://medium.com/@niksundin/best-web-design-companies-1872e445775f?ref=nuxt', class: 'h-8' }
        ],
        special: [
          { name: 'Google Chrome', img: 'google-chrome.svg', url: 'https://www.google.com/chrome/?ref=nuxt', class: 'h-12' }
        ]
      },
      onetime: {
        current: 'btc',
        btc: {
          title: 'Bitcoin Address',
          address: '1DVJSFQzfVkLdW7drR7pRW2tWV1XDCv6gF',
          img: '/img/wallet/btc.png'
        },
        bch: {
          title: 'Bitcoin Cash Address',
          address: 'qrm24z9xr9nvafeejt346waa9shk5mjagv0fgpedrt',
          img: '/img/wallet/bch.png'
        },
        eth: {
          title: 'Ethereum Address',
          address: '0x6513bC2B1824d997699cF177591b6aa9cEE2d12A',
          img: '/img/wallet/eth.png'
        },
        ltc: {
          title: 'Litecoin Address',
          address: 'MSoJB2AUZMss82HLk7fwggZhJDKxQ1HZAh',
          img: '/img/wallet/ltc.png'
        }
      }
    }
  },
  computed: {
    currentOnetime () {
      return this.onetime.current ? this.onetime[this.onetime.current] : null
    }
  },
  head: {
    title: 'Sponsor NuxtJS Development',
    meta: [
      { hid: 'description', name: 'description', content: 'You can support NuxtJS development via different methods and ensure regular updates to the framework.' }
    ]
  }
}
</script>

<style>
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
</style>
