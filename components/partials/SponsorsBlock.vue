<template>
  <div>
    <p
      class="lg:text-sm text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary text-center"
    >
      Platinum Sponsors
    </p>
    <a
      v-for="sponsor in sponsors"
      :key="sponsor.name"
      :href="sponsor.link"
      class="block lg:inline-block my-4 w-48 lg:w-full"
      rel="noopener sponsored"
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
          name: 'Storyblok',
          link: 'https://www.storyblok.com/?ref=nuxt',
          img: 'storyblok-logo.svg'
        }
      ]
    }
  }
}
</script>
