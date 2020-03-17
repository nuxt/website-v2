<template>
<<<<<<< HEAD
  <div class="affix fixed text-center hidden md:block overflow-y-scroll bottom-0 py-8 pl-4 w-40">
    <div class="h-auto pb-8">
      <p class="text-sm mb-2 text-center text-gray-600">Platinum Sponsors</p>
      <a v-for="sponsor in sponsors" :key="sponsor.name" :href="sponsor.link" class="inline-block mb-4">
        <img :src="sponsor.img" :alt="sponsor.name">
      </a>
      <nui-button :to="localePath('support-nuxtjs')" class="justify-center">Support Us</nui-button>
=======
  <div class="lg:inset-0 z-90 lg:-mb-0 lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-1/4 lg:block">
    <div class="lg:overflow-y-auto lg:scrolling-touch lg:h-auto lg:block lg:relative lg:sticky lg:top-24">
      <div class="flex flex-col sm:flex-row px-4 pt-8 justify-between lg:justify-start lg:flex-col lg:overflow-y-auto lg:pr-0 lg:pl-8 sticky?lg:h-(screen-24)">
        <div class="lg:text-center flex flex-col items-center lg:w-full sm:w-1/3">
          <p class="lg:text-sm text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary text-center">
            Platinum Sponsors
          </p>
<<<<<<< HEAD
          <a v-for="sponsor in sponsors" :key="sponsor.name" :href="sponsor.link" class="inline-block my-4" rel="noopener sponsored">
            <img :src="sponsor.img" :alt="sponsor.name" class="h-16">
          </a>
          <nui-button :to="localePath('sponsor-nuxtjs')" class="justify-center mb-4">
=======
          <a v-for="sponsor in sponsors" :key="sponsor.name" :href="sponsor.link" class="block lg:inline-block my-4 w-48 lg:w-full" rel="noopener sponsored">
            <img :src="`/img/sponsors/${$theme.value}/${sponsor.img}`" :alt="sponsor.name">
          </a>
          <nui-button :to="{ name: 'sponsor-nuxtjs' }" class="justify-center mb-8">
>>>>>>> 1b87907b (feat: dark mode (#303))
            Support Us
          </nui-button>
        </div>
        <div class="-m-4 lg:m-0 lg:w-full sm:w-2/3">
          <slot />
        </div>
      </div>
>>>>>>> c7763d43 (New design with illustrations)
    </div>
    <slot/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sponsors: [
        { name: 'Storyblok', link: 'https://www.storyblok.com/?ref=nuxt', img: 'storyblok-logo.svg' }
      ]
    }
  }
}
</script>

<style>
.affix {
  top: 6rem;
  height: calc(100vh - 6rem)
}
</style>
