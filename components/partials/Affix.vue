<template>
  <!-- <div class="lg:fixed lg:inset-0 lg:pt-16 lg:h-full lg:z-90 w-full lg:-mb-0 lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-1/4 lg:block">
    <div class="lg:h-full lg:overflow-y-auto lg:scrolling-touch lg:h-auto lg:block lg:relative lg:sticky lg:top-24 lg:bg-transparent">
      <div class="flex justify-between px-4 pt-8 lg:flex-col lg:overflow-y-auto lg:text-center lg:px-6 lg:pr-0 lg:pl-8 sticky?lg:h-(screen-24)">
        <div>
          <p class="text-sm text-gray-600">
            Platinum Sponsors
          </p>
          <a v-for="sponsor in sponsors" :key="sponsor.name" :href="sponsor.link" class="inline-block lg:m-4">
            <img :src="sponsor.img" :alt="sponsor.name" class="h-12">
          </a>
          <p>
            <nui-button :to="localePath('support-nuxtjs')" class="justify-center mb-4">
              Support Us
            </nui-button>
          </p>
        </div>
        <div class="pl-8">
          <slot/>
        </div>
      </div>
    </div>
  </div> -->
  <div class="lg:inset-0 z-90 lg:-mb-0 lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-1/4 lg:block">
    <div class="lg:overflow-y-auto lg:scrolling-touch lg:h-auto lg:block lg:relative lg:sticky lg:top-24">
      <div class="flex px-4 pt-8 justify-between lg:justify-start lg:flex-col lg:overflow-y-auto lg:pr-0 lg:pl-8 sticky?lg:h-(screen-24)">
        <div class="lg:text-center">
          <p class="lg:text-sm text-gray-600">
            Platinum Sponsors
          </p>
          <a v-for="sponsor in sponsors" :key="sponsor.name" :href="sponsor.link" class="inline-block my-4">
            <img :src="sponsor.img" :alt="sponsor.name" class="h-16">
          </a>
          <p>
            <nui-button :to="localePath('support-nuxtjs')" class="justify-center mb-4">
              Support Us
            </nui-button>
          </p>
        </div>
        <div class="-m-4 lg:m-0">
          <slot />
        </div>
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
