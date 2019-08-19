<template>
  <nui-container class="py-16">
    <div class="flex justify-between">
      <div class="lg:w-1/2 xl:w-8/12 text-center lg:text-left p-4 sm:p-0">
        <h1 class="text-3xl xl:text-4xl text-nuxt-gray font-medium leading-normal mb-6">
          Sponsor NUXT<span class="text-nuxt-lightgreen">JS</span> Development<br>
        </h1>
        <h3 class="xl:text-lg text-gray-600 font-medium leading-relaxed mb-6">
          NuxtJS is an MIT licensed open source project and completely free to use.<br/>
          However, the amount of effort needed to maintain and develop new features for the project is not sustainable without proper financial backing.<br/>
          You can support NuxtJS development via the following methods:
        </h3>
      </div>
      <i-sponsoring class="hidden lg:inline-block my-8"/>
    </div>
    <section>
      <h2 class="text-2xl uppercase pt-10 pb-8">
        One-time donations
      </h2>
      <div class="flex justify-between items-end">
        <div>
          <p class="mb-6">
            We accept donations through these channels:
          </p>
          <a href="#btc" @click.prevent="onetime.current = 'btc'" class="flex items-center my-2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 font-bold" :class="{ 'bg-gray-300': onetime.current === 'btc' }">
            <nui-svg-btc class="mr-3"/> BTC
          </a>
          <a href="#bch" @click.prevent="onetime.current = 'bch'" class="flex items-center my-2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 font-bold" :class="{ 'bg-gray-300': onetime.current === 'bch' }">
            <nui-svg-bch class="mr-3"/> BCH
          </a>
          <a href="#eth" @click.prevent="onetime.current = 'eth'" class="flex items-center my-2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 font-bold" :class="{ 'bg-gray-300': onetime.current === 'eth' }">
            <nui-svg-eth class="mr-3"/> ETH
          </a>
          <a href="#ltc" @click.prevent="onetime.current = 'ltc'" class="flex items-center my-2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 font-bold" :class="{ 'bg-gray-300': onetime.current === 'ltc' }">
            <nui-svg-ltc class="mr-3"/> LTC
          </a>
        </div>
        <div v-if="currentOnetime" class="text-center">
          <p class="text-xl">
            {{ currentOnetime.title }}
          </p>
          <p class="py-3 text-gray-600">
            {{ currentOnetime.address }}
          </p>
          <img :src="currentOnetime.img" :alt="currentOnetime.title" class="w-5/12 inline-block">
        </div>
      </div>
    </section>
    <section>
      <h2 class="text-2xl uppercase pt-10 pb-8">
        Recurring Pledges
      </h2>
      <p>
        Recurring pledges come with exclusive perks, e.g. having your name listed in the Vue GitHub repository, or have your company logo placed on this website.
        Become a backer or sponsor via Patreon (goes directly to support Evan You's full-time work on Vue)
        Become a backer or sponsor via OpenCollective (goes into a fund with transparent expense models supporting community efforts and events)
      </p>
    </section>
    <section class="py-4">
      <h2 class="text-2xl uppercase pt-10 pb-8">
        Current Sponsors
      </h2>
      <div v-for="(group, groupKey) in sponsors" :key="groupKey" class="text-center pb-8">
        <h2 class="uppercase text pb-8"><span class="pb-2 border-b-2 border-nuxt-lightgreen">{{ groupKey }}</span></h2>
        <a class="sponsor inline-block m-4" v-for="(sponsor, i) in group" :key="i" :href="sponsor.url" target="_blank" rel="noopener">
          <img :src="'/img/sponsors/' + sponsor.img" :alt="sponsor.name" class="inline-block" :class="sponsor.class"/>
        </a>
      </div>
      <div class="text-center">
        <nui-button href="https://opencollective.com/nuxtjs" class="mr-4 py-3 px-6 text-base">
          <nui-svg-play slot="icon" class="h-4 -mt-1 mr-1"/>
          Become a sponsor
        </nui-button>
      </div>
    </section>
  </nui-container>
</template>

<script>
import nuiSvgPlay from '@/components/svg/Play.vue'
import nuiSvgBtc from '@/components/svg/wallet/btc.vue'
import nuiSvgBch from '@/components/svg/wallet/bch.vue'
import nuiSvgEth from '@/components/svg/wallet/eth.vue'
import nuiSvgLtc from '@/components/svg/wallet/ltc.vue'
import iSponsoring from '@/components/svg/streamline/sponsoring.vue'

export default {
  components: {
    nuiSvgPlay,
    nuiSvgBtc,
    nuiSvgBch,
    nuiSvgEth,
    nuiSvgLtc,
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
          { name: 'VueMastery', img: 'vueMastery-brand.svg', url: 'https://www.vuemastery.com/?ref=nuxt', class: 'h-10' },
          { name: 'VueSchool', img: 'vueschool.png', url: 'https://vueschool.io/?friend=nuxt&utm_source=Nuxtjs.org&utm_medium=banner&utm_campaign=Open%20Collective', class: 'h-12' },
          { name: 'ShipShape', img: 'shipshape-logo.svg', url: 'https://shipshape.io/?ref=nuxt', class: 'h-12' },
          { name: 'Hapi', img: 'hapi-logo.svg', url: 'https://hapijs.com/?ref=nuxt', class: 'h-12' },
          { name: 'Blokt', img: 'blokt-logo.png', url: 'https://blokt.com/?ref=nuxt', class: 'h-10' }
        ]
      },
      onetime: {
        current: null,
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
