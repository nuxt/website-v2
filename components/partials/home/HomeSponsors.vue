<template>
  <div
    class="bg-light-elevatedSurface dark:bg-dark-elevatedSurface shadow-nuxt transition-colors duration-300 ease-linear"
  >
    <div class="container mx-auto px-4 py-12 text-centshadow-nuxter">
      <section class="px-4">
        <h1 class="text-3xl uppercase mb-2 sm:mb-0 font-medium">
          {{ $t('homepage.sponsors.title') }}
        </h1>
        <SponsoringIllustration
          id="sponsor-img"
          class="inline-block float-right lg:ml-4"
        />
        <div
          class="pt-6 pb-12 leading-loose text-left text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary transition-colors duration-300 ease-linear"
        >
          <p>
            {{ $t('homepage.sponsors.description') }}
          </p>
        </div>
        <div
          v-for="(group, groupKey) in sponsors"
          :key="groupKey"
          class="text-center pb-8"
        >
          <h2
            class="uppercase text text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary font-medium pb-8 transition-colors duration-300 ease-linear"
          >
            <span class="pb-2 border-b-2 border-nuxt-lightgreen">
              {{ groupKey }}
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
                class="inline-block"
                :class="sponsor.class"
                loading="lazy"
              />
            </ClientOnly>
          </a>
        </div>
        <div class="text-center pb-8">
          <h2
            class="uppercase text text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary font-medium pb-8 transition-colors duration-300 ease-linear"
          >
            <span class="pb-2 border-b-2 border-nuxt-lightgreen">
              Educational Partner
            </span>
          </h2>
          <a
            class="sponsor inline-block m-4"
            href="https://vueschool.io?friend=nuxt"
            target="_blank"
            rel="noopener sponsored"
          >
            <ClientOnly>
              <img
                :src="`/img/partners/${$colorMode.value}/vueschool.svg`"
                alt="Vue School logo"
                title="Vue School is an official Nuxt.js Educational Partner"
                class="inline-block h-10"
                loading="lazy"
              />
            </ClientOnly>
          </a>
        </div>
        <div class="text-center">
          <AppButton
            :to="localePath({ name: 'sponsor-nuxtjs' })"
            data-cy="sponsors"
            class="py-3 px-6 text-base"
          >
            <OpenCollectiveIcon
              slot="icon"
              class="inline-block h-5 -mt-1 mr-1"
            />
            {{ $t('homepage.sponsors.become_a_sponsor') }}
          </AppButton>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import OpenCollectiveIcon from '~/assets/icons/open-collective.svg?inline'
import SponsoringIllustration from '~/assets/illustrations/sponsoring.svg?inline'

export default {
  components: {
    OpenCollectiveIcon,
    SponsoringIllustration
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
        special: [
          {
            name: 'Google Chrome',
            img: 'google-chrome.svg',
            url: 'https://www.google.com/chrome/?ref=nuxt',
            class: 'h-12'
          }
        ]
      }
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

#sponsor-img {
  shape-outside: circle(49.5% at 90px 95px);
}
</style>
