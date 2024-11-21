<template>
  <div>
    <p
      class="
        pb-3
        text-sm
        font-bold
        tracking-wide
        text-gray-500
        uppercase
        border-b border-dashed
        lg:mb-2
        dark:text-gray-600
        lg:text-xs
      "
    >
      Partners
    </p>
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
    <AppButton
      :to="localePath({ name: 'sponsor-nuxtjs' })"
      class="justify-center mt-2 mb-8"
    >
      Support Us
    </AppButton>
  </div>
</template>

<script>
import sponsors from '~/content/sponsors'

export default {
  computed: {
    partners() {
      const partners = [sponsors['mvp-Partners'], sponsors.partners].flat()
      /* Double partners array for correct animation */
      return partners.concat(partners)
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
    -webkit-transform: translateY(calc(-64px * 8));
    transform: translateY(calc(-64px * 8));
  }
}

@keyframes scroll {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(calc(-64px * 8));
    /* single logo height + margin-bottom * 8 */
    transform: translateY(calc(-64px * 8));
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
