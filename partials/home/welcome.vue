<template>
  <nui-container class="py-16 sm:py-24">
    <div class="flex justify-between">
      <div class="lg:w-1/2 xl:w-6/12 text-center lg:text-left p-4 sm:p-0">
        <h1 class="text-3xl xl:text-4xl text-nuxt-gray font-medium leading-normal mb-6">
          The Progressive<br><span class="text-nuxt-lightgreen">Vue.js</span> Framework<br>
        </h1>
        <h3 class="xl:text-lg text-gray-600 font-medium leading-relaxed mb-6">Build your next Vue.js application with confidence using NuxtJS. An <span title="Under MIT license">open source</span> framework making web development simple and powerful.</h3>
        <div class="flex flex-col sm:block py-4">
          <nui-button :to="localePath({ name: 'section-slug', params: { section: 'guide', slug: 'installation'}})" class="sm:mr-4 py-3 px-6 text-base mb-4">
            <nui-svg-play slot="icon" class="h-4 -mt-1 mr-1"/>
            get started
          </nui-button>
          <nui-button href="https://github.com/nuxt/nuxt.js" class="sm:mr-4 py-3 px-6 text-base button-gray">
            <nui-svg-gh slot="icon" class="h-6 -mt-1 mr-1"/>
            21K+ github stars
          </nui-button>
        </div>
      </div>
      <figure class="hidden lg:block lg:w-5/12">
        <nui-media src="https://player.vimeo.com/video/311756540"/>
        <p class="font-medium py-2 text-xs xl:text-sm text-center text-gray-600" v-html="$store.state.homepage.welcome_figure.body"></p>
      </figure>
    </div>
  </nui-container>
</template>

<script>
import nuiSvgPlay from '@/components/svg/Play.vue'
import nuiSvgGh from '@/components/svg/Github.vue'
import { setTimeout } from 'timers';

export default {
  data() {
    return {
      appTypes: this.$store.state.lang.homepage.welcome.app_types,
      current: 0
    }
  },
  mounted() {
    this._timer = setInterval(() => {
      this.current = (this.current + 1) % this.appTypes.length
    }, 2500)
  },
  computed: {
    appType () {
      return this.appTypes[this.current]
    }
  },
  destroyed() {
    clearInterval(this._timer)
  },
  components: {
    nuiSvgPlay,
    nuiSvgGh
  }
}
</script>
