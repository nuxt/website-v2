<template>
  <div class="shadow-nuxt">
    <div class="container mx-auto px-4 pt-16 pb-12">
      <div class="flex flex-wrap justify-between mb-8">
        <div class="lg:w-6/12 lg:text-left text-center p-4 sm:p-0">
          <i18n
            path="sponsor.title"
            tag="h1"
            class="text-3xl xl:text-4xl text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary font-medium leading-normal mb-6 lg:pt-4"
          >
            {{ $t('sponsor.title') }}
            <template #nuxt>
              <AppTitle />
            </template>
          </i18n>
          <i18n
            path="sponsor.description"
            tag="h3"
            class="xl:text-lg text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary font-medium leading-relaxed mb-6"
          >
            <template #break>
              <br />
            </template>
          </i18n>
        </div>
        <SponsorIllustration
          class="w-2/3 mx-auto lg:mx-0 lg:w-5/12 lg:-mt-8 text-light-elevatedSurface dark:text-dark-elevatedSurface"
        />
      </div>
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
          <template #opencollective>
            <a href="https://github.com/sponsors/nuxt">GitHub</a>
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
            :href="`${sponsor.url}?ref=nuxt`"
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
            href="https://github.com/sponsors/nuxt"
            class="py-3 px-6 text-base"
          >
            <GithubIcon slot="icon" class="h-5 -mt-1 mr-1 inline-block" />
            {{ $t('sponsor.become_a_sponsor') }}
          </AppButton>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import GithubIcon from '~/assets/icons/github.svg?inline'
import SponsorIllustration from '~/assets/illustrations/sponsor.svg?inline'

export default {
  components: {
    SponsorIllustration,
    GithubIcon
  },
  data() {
    return {
      sponsors: {
        platinum: [
          {
            name: 'Storyblok',
            img: 'storyblok-logo.svg',
            url: 'https://www.storyblok.com/',
            class: 'h-24'
          },
          {
            name: 'Moovweb',
            url: 'https://www.moovweb.com/',
            img: 'moovweb-logo.png',
            class: 'h-12'
          },
          {
            name: 'Ship Shape',
            url: 'https://shipshape.io/',
            img: 'shipshape-logo.svg',
            class: 'h-12'
          }
        ],
        gold: [
          {
            name: 'VueMastery',
            img: 'vueMastery-brand.svg',
            url: 'https://www.vuemastery.com/',
            class: 'h-10'
          },
          {
            name: 'Legal Nature',
            img: 'legalnature-logo.svg',
            url: 'https://www.legalnature.com/',
            class: 'h-10'
          }
        ],
        silver: [
          {
            name: 'Sparheld',
            img: 'sparheld.svg',
            url: 'https://www.sparheld.de/',
            class: 'h-8'
          },
          {
            name: 'Icons8',
            img: 'icons8.svg',
            url: 'https://icons8.com/',
            class: 'h-8'
          },
          {
            name: 'FireStickHow',
            img: 'fire-stick-how.png',
            url: 'https://www.firestickhow.com/',
            class: 'h-8'
          },
          {
            name: 'MiniTool',
            img: 'minitool.png',
            url: 'https://www.minitool.com/',
            class: 'h-8'
          },
          {
            name: 'VPS Server',
            img: 'vps-server.png',
            url: 'https://www.vpsserver.com/',
            class: 'h-8'
          },
          {
            name: 'fine VPN',
            img: 'finevpn.png',
            url: 'https://en.finevpn.org/',
            class: 'h-8'
          }
        ],
        bronze: [
          {
            name: 'SendCloud',
            img: 'sendcloud.svg',
            url: 'https://www.sendcloud.com/',
            class: 'h-8'
          }
        ],
        special: [
          {
            name: 'Google Chrome',
            img: 'google-chrome.svg',
            url: 'https://www.google.com/chrome/',
            class: 'h-12'
          }
        ]
      }
    }
  },
  head() {
    const title = this.$t('sponsor.meta.title')
    const description = this.$t('sponsor.meta.description')

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
