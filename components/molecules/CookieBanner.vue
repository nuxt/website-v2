<template>
  <div
    class="
      bg-white
      dark:bg-sky-black
      border-t border-t-sky-light
      text-center
      md:text-left
      text-sky-dark
      dark:text-white
      font-medium
    "
  >
    <VueIfBot>
      <CookieConsent
        class="
          d-container-content
          py-4
          px-4
          sm:px-6
          lg:px-8
          flex flex-col
          md:flex-row
          items-center
          md:justify-between
          space-y-4
          md:space-y-0
        "
      >
        <template slot="message">
          <p class="md:w-1/2">
            {{ $t('cookies.message') }}
            <a class="underline" rel="noopener" target="_blank" href="https://www.cookiesandyou.com/">
              {{ $t('cookies.link') }}
            </a>
          </p>
        </template>
        <template slot="button">
          <NuxtButton
            size="md"
            class="bg-primary text-black hover:bg-primary-400 focus:bg-primary-400"
            @click.native="$emit('cookie-banner')"
          >
            {{ $t('cookies.button') }}
          </NuxtButton>
        </template>
      </CookieConsent>
    </VueIfBot>
  </div>
</template>

<script>
import VueIfBot from 'vue-if-bot/dist/vue-if-bot.es'
import CookieConsent from 'vue-cookieconsent-component/src/components/CookieConsent.vue'

export default {
  components: {
    VueIfBot,
    CookieConsent
  }
}
</script>
