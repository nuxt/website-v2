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
          link: 'https://strapi.io/',
          img: 'strapi-logo.svg',
          class: 'h-12'
        },
        {
          name: 'Ship Shape',
          link: 'https://shipshape.io/?ref=nuxt',
          img: 'shipshape-logo.svg'
        }
      ]
    }
  }
}
</script>
