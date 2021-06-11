<template>
  <div>
    <p
      class="text-center lg:text-sm text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary"
    >
      Partners Sponsors
    </p>
<<<<<<< HEAD
    <a
      v-for="sponsor in sponsors"
      :key="sponsor.name"
      :href="sponsor.link"
      class="block w-48 my-4 lg:inline-block lg:w-full"
      rel="noopener sponsored"
      target="_blank"
    >
      <img
        :src="`/img/sponsors/${$colorMode.value}/${sponsor.img}`"
        :alt="sponsor.name"
<<<<<<< HEAD
=======
        :class="sponsor.class"
>>>>>>> 5eefa048 (sponsors: Add Swell partner (#1448))
      />
    </a>
=======
    <div class="partners__slider">
      <ul class="partners__slide-track">
        <li
          v-for="(partner, index) in partners"
          :key="`${partner.name}-${index}`"
          class="flex flex-col items-center partners__slide"
        >
          <a
            :href="partner.url"
            class="opacity-75 hover:opacity-100"
            rel="noopener sponsored"
            target="_blank"
          >
            <img
              loading="lazy"
              :src="`/img/sponsors/${$colorMode.value}/${partner.img}`"
              :alt="partner.name"
              class="h-8"
            />
          </a>
        </li>
      </ul>
    </div>
>>>>>>> ddf98288 (content: change partners list to carousel component + add Storyblok logo (#1474))
    <AppButton
      :to="localePath({ name: 'sponsor-nuxtjs' })"
      class="justify-center mb-8"
    >
      Support Us
    </AppButton>
  </div>
</template>

<script>
import sponsors from '~/content/sponsors'

export default {
<<<<<<< HEAD
  data() {
    return {
      sponsors: [
        {
          name: 'Netlify',
          url: 'https://www.netlify.com/?ref=nuxt',
          img: 'netlify-logo.svg',
          class: 'w-32'
        },
        {
          name: 'Google Chrome',
          img: 'google-chrome.svg',
          url: 'https://www.google.com/chrome/?ref=nuxt',
          class: 'w-32'
        },
        {
          name: 'Strapi',
          url: 'https://strapi.io/',
          img: 'strapi-logo.svg',
          class: 'w-32'
        },
        {
          name: 'Ship Shape',
<<<<<<< HEAD
          link: 'https://shipshape.io/?ref=nuxt',
          img: 'shipshape-logo.svg'
=======
          url: 'https://shipshape.io/?ref=nuxt',
          img: 'shipshape-logo.svg',
          class: 'w-32'
        },
        {
          name: 'Layer0',
          url: 'https://www.layer0.co/?ref=nuxt',
          img: 'layer0-logo.svg',
          class: 'w-32'
        },
        {
          name: 'Swell',
          url: 'https://swell.is/?ref=nuxt',
          img: 'swell-logo.svg',
          class: 'h-8'
<<<<<<< HEAD
        },
        {
          name: 'Google Chrome',
          img: 'google-chrome.svg',
          url: 'https://www.google.com/chrome/?ref=nuxt',
          class: 'w-32'
>>>>>>> 5eefa048 (sponsors: Add Swell partner (#1448))
=======
>>>>>>> 8bbc3f6c (docs: Add layer0 partner (#1463))
        }
      ]
=======
  computed: {
    partners() {
      const partners = [sponsors['mvp-Partners'], sponsors.partners].flat()
      /* Double partners array for correct animation */
      return partners.concat(partners)
>>>>>>> ddf98288 (content: change partners list to carousel component + add Storyblok logo (#1474))
    }
  }
}
</script>

<style lang="postcss">
@-webkit-keyframes scroll {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(calc(-64px * 7));
    transform: translateY(calc(-64px * 7));
  }
}

@keyframes scroll {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(calc(-64px * 7));
    /* single logo height + margin-bottom * 7 */
    transform: translateY(calc(-64px * 7));
  }
}

.partners__slider {
  @apply relative pb-8 h-40 overflow-hidden w-full;
}

.partners__slider::before,
.partners__slider::after {
  @apply absolute h-8 w-full z-10;
  content: '';
}

.light-mode .partners__slider::before,
.light-mode .partners__slider::after {
  background: linear-gradient(to top, #fff 0%, rgba(255, 255, 255, 0) 100%);
}

.dark-mode .partners__slider::before,
.dark-mode .partners__slider::after {
  background: linear-gradient(to top, #2f485e 0%, rgba(255, 255, 255, 0) 100%);
}

.partners__slider::after {
  @apply right-0 top-0 transform rotate-180;
}

.partners__slider::before {
  @apply left-0 bottom-0;
}

.partners__slider .partners__slide-track {
  -webkit-animation: scroll 0s linear infinite;
  animation: 15s scroll 0s linear infinite;

  & img {
    @apply select-none cursor-pointer;
  }
}

.partners__slider:hover .partners__slide-track {
  animation-play-state: paused;
}

.partners__slider .partners__slide {
  @apply mb-8;
}
</style>
