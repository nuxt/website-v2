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
    <a
      v-for="sponsor in sponsors"
      :key="sponsor.name"
      :href="sponsor.url"
      class="
        block
        py-2
        border-b border-dashed
        opacity-75
        hover:opacity-100
        lg:inline-block
        lg:w-full
      "
      rel="noopener sponsored"
      target="_blank"
    >
      <img
        :src="`/img/sponsors/${$colorMode.value}/${sponsor.img}`"
        :alt="sponsor.name"
        class="w-32"
      />
    </a>
    <AppButton
      :to="localePath({ name: 'sponsor-nuxtjs' })"
      class="justify-center mt-2 mb-8"
    >
      Support Us
    </AppButton>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sponsors: [
        {
          name: 'Strapi',
          url: 'https://strapi.io/?ref=nuxt',
          img: 'strapi-logo.svg',
          class: 'h-12'
        },
        {
          name: 'Ship Shape',
          url: 'https://shipshape.io/?ref=nuxt',
          img: 'shipshape-logo.svg'
        },
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
</script>
