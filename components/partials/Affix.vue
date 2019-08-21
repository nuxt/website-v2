<template>
  <div class="hidden fixed inset-0 pt-16 h-full bg-white z-90 w-full border-b lg:-mb-0 lg:static lg:h-auto lg:overflow-y-visible lg:border-b-0 lg:pt-0 lg:w-1/4 lg:block lg:border-0">
    <div class="h-full overflow-y-auto scrolling-touch lg:h-auto lg:block lg:relative lg:sticky lg:top-24 bg-white lg:bg-transparent">
      <div class="px-6 pt-6 overflow-y-auto text-center lg:pt-8 lg:pr-0 lg:pl-8 sticky?lg:h-(screen-24)">
        <p class="text-sm text-gray-600">
          Platinum Sponsors
        </p>
        <a v-for="sponsor in sponsors" :key="sponsor.name" :href="sponsor.link" class="inline-block m-4">
          <img :src="sponsor.img" :alt="sponsor.name">
        </a>
        <nui-button :to="localePath('support-nuxtjs')" class="justify-center mb-4">
          Support Us
        </nui-button>
        <slot />
      </div>
    </div>
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
