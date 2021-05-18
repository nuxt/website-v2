<template>
  <div>
    <p
      class="text-center lg:text-sm text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary"
    >
      Partners Sponsors
    </p>
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
    <AppButton
      :to="localePath({ name: 'sponsor-nuxtjs' })"
      class="justify-center mb-8"
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
          name: 'Swell',
          url: 'https://swell.is/',
          img: 'swell-logo.svg',
          class: 'h-8'
        },
        {
          name: 'Google Chrome',
          img: 'google-chrome.svg',
          url: 'https://www.google.com/chrome/?ref=nuxt',
          class: 'w-32'
>>>>>>> 5eefa048 (sponsors: Add Swell partner (#1448))
        }
      ]
    }
  }
}
</script>
