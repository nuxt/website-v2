<template>
  <div class="shadow-nuxt">
    <div class="container mx-auto px-4 pt-16 pb-12">
      <div class="flex flex-wrap justify-between mb-8">
        <div class="lg:w-6/12 lg:text-left text-center p-4 sm:p-0">
          <h1
            class="text-3xl xl:text-4xl text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary font-medium leading-normal mb-6 lg:pt-4"
          >
            {{ $t('sponsor.title.pre') }} <AppTitle /> {{ $t('sponsor.title.post') }}<br />
          </h1>
          <i18n
            path="sponsor.description"
            tag="h3"
            class="xl:text-lg text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary font-medium leading-relaxed mb-6"
          >
            <template v-slot:break>
              <br />
            </template>
          </i18n>
        </div>
        <SponsorIllustration
          class="w-2/3 mx-auto lg:mx-0 lg:w-5/12 lg:-mt-8 text-light-elevatedSurface dark:text-dark-elevatedSurface"
        />
      </div>
      <section
        class="flex flex-wrap bg-light-surface dark:bg-dark-surface p-8 rounded my-12"
      >
        <div class="w-full lg:w-2/3 text-center lg:text-left">
          <h2 class="text-2xl uppercase pt-4 pb-6">
            {{ $t('sponsor.donations.title') }}
          </h2>
          <p class="mb-8 text-gray-600">
            {{ $t('sponsor.donations.description') }}
          </p>
          <div
            class="flex flex-wrap justify-center lg:justify-start items-end mb-8 text-light-onSurfacePrimary"
          >
            <a
              href="https://www.paypal.me/nuxtjs"
              target="_blank"
              class="flex items-center my-2 bg-gray-200 hover:bg-gray-300 rounded-full px-6 py-4 font-bold mr-2 -ml-2"
            >
              <img
                src="/img/wallet/paypal.png"
                alt="Paypal"
                class="h-6 block"
              />
            </a>
            <a
              href="#btc"
              class="flex items-center my-2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 pr-6 font-bold mx-2"
              :class="{ 'bg-gray-300': onetime.current === 'btc' }"
              @click.prevent="onetime.current = 'btc'"
            >
              <BtcLogo class="mr-3" /> BTC
            </a>
            <a
              href="#bch"
              class="flex items-center my-2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 pr-6 font-bold mx-2"
              :class="{ 'bg-gray-300': onetime.current === 'bch' }"
              @click.prevent="onetime.current = 'bch'"
            >
              <BchLogo class="mr-3" /> BCH
            </a>
            <a
              href="#eth"
              class="flex items-center my-2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 pr-6 font-bold mx-2"
              :class="{ 'bg-gray-300': onetime.current === 'eth' }"
              @click.prevent="onetime.current = 'eth'"
            >
              <EthLogo class="mr-3" /> ETH
            </a>
            <a
              href="#ltc"
              class="flex items-center my-2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 pr-6 font-bold mx-2"
              :class="{ 'bg-gray-300': onetime.current === 'ltc' }"
              @click.prevent="onetime.current = 'ltc'"
            >
              <LtcLogo class="mr-3" /> LTC
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
          <img
            :src="currentOnetime.img"
            :alt="currentOnetime.title"
            class="w-5/12 inline-block"
          />
        </div>
      </section>
      <section class="text-center">
        <h2
          class="text-2xl text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary font-medium uppercase pt-10 pb-8"
        >
          {{ $t('sponsor.pledges.title') }}
        </h2>
        <i18n
          path="sponsor.pledges.description"
          tag="p"
          class="text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary mb-12"
        >
          <template v-slot:opencollective>
            <a href="https://opencollective.com/nuxtjs">OpenCollective</a>
          </template>
        </i18n>
        <div
          v-for="(group, groupKey) in sponsors"
          :key="groupKey"
          class="text-center pb-8"
        >
          <h2 class="uppercase text-xl pb-8">
            <span
              class="pb-2 border-b-2 border-nuxt-lightgreen text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear"
            >
              {{ groupKey }} SPONSORS
            </span>
          </h2>
          <a
            v-for="(sponsor, i) in group"
            :key="i"
            class="sponsor inline-block m-4"
            :href="sponsor.url"
            target="_blank"
            rel="noopener sponsored"
          >
            <ClientOnly>
              <img
                :src="`/img/sponsors/${$colorMode.value}/${sponsor.img}`"
                :alt="sponsor.name"
                :title="sponsor.name"
                class="inline-block"
                :class="sponsor.class"
              />
            </ClientOnly>
          </a>
        </div>
        <div class="text-center">
          <AppButton
            href="https://opencollective.com/nuxtjs"
            class="py-3 px-6 text-base"
          >
            <OpenCollectiveIcon
              slot="icon"
              class="h-5 -mt-1 mr-1 inline-block"
            />
            {{ $t('sponsor.become_a_sponsor') }}
          </AppButton>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import OpenCollectiveIcon from '~/assets/icons/open-collective.svg?inline'
import BtcLogo from '~/assets/icons/btc.svg?inline'
import BchLogo from '~/assets/icons/bch.svg?inline'
import EthLogo from '~/assets/icons/eth.svg?inline'
import LtcLogo from '~/assets/icons/ltc.svg?inline'
import SponsorIllustration from '~/assets/illustrations/sponsor.svg?inline'

export default {
  components: {
    SponsorIllustration,
    OpenCollectiveIcon,
    BtcLogo,
    BchLogo,
    EthLogo,
    LtcLogo
  },
  data() {
    return {
      sponsors: {
        platinum: [
          {
            name: 'Storyblok',
            img: 'storyblok-logo.svg',
            url: 'https://www.storyblok.com/?ref=nuxt',
            class: 'h-24'
          }
        ],
        gold: [
          {
            name: 'VueMastery',
            img: 'vueMastery-brand.svg',
            url: 'https://www.vuemastery.com/?ref=nuxt',
            class: 'h-10'
          }
        ],
        silver: [
          {
            name: 'Sparheld',
            img: 'sparheld.svg',
            url: 'https://www.sparheld.de/?ref=nuxt',
            class: 'h-8'
          },
          {
            name: 'Icons8',
            img: 'icons8.svg',
            url: 'https://icons8.com/?ref=nuxt',
            class: 'h-8'
          },
          {
            name: 'FireStickHow',
            img: 'fire-stick-how.png',
            url: 'https://www.firestickhow.com/?ref=nuxt',
            class: 'h-8'
          },
          {
            name: 'MiniTool',
            img: 'minitool.png',
            url: 'https://www.minitool.com',
            class: 'h-8'
          }
        ],
        special: [
          {
            name: 'Google Chrome',
            img: 'google-chrome.svg',
            url: 'https://www.google.com/chrome/?ref=nuxt',
            class: 'h-12'
          }
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
    currentOnetime() {
      return this.onetime.current ? this.onetime[this.onetime.current] : null
    }
  },
  head() {
    const title = 'Sponsor NuxtJS Development'
    const description =
      'You can support NuxtJS development via different methods and ensure regular updates to the framework.'

    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description
        },
        // Twitter Card
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: description
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.sponsor {
  & img {
    filter: grayscale(100%);
    opacity: 0.75;
    transition: all 0.5s;
  }

  &:hover {
    & img {
      filter: grayscale(0%);
      opacity: 1;
    }
  }
}
</style>
