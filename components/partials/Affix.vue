<template>
  <div class="affix fixed text-center hidden md:block overflow-y-scroll bottom-0 py-8 pl-4 w-40">
    <div class="h-auto pb-8">
      <p class="text-sm mb-2 text-center text-gray-600">
        Platinum Sponsors
      </p>
      <a v-for="sponsor in sponsors" :key="sponsor.name" :href="sponsor.link" class="inline-block mb-4">
        <img :src="sponsor.img" :alt="sponsor.name">
      </a>
      <nui-button :to="localePath('support-nuxtjs')" class="justify-center">
        Support Us
      </nui-button>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  data () {
    return {
      sponsors: [
        { name: 'Storyblok', link: 'https://www.storyblok.com/?ref=nuxt', img: '/img/sponsors/storyblok-logo.svg' }
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
