<template>
<<<<<<< HEAD
  <nui-hero class="pb-24">
    <nui-container>
      <div class="flex justify-between">
        <div class="lg:w-1/2 xl:w-6/12 text-center lg:text-left">
          <h1 class="text-3xl xl:text-4xl text-nuxt-gray font-medium leading-normal mb-6">
            The Progressive<br><span class="text-nuxt-lightgreen">Vue.js</span> Framework<br>
          </h1>
          <h3 class="xl:text-lg text-gray-600 font-medium leading-relaxed mb-6">Build your next Vue.js application with confidence using NuxtJS. An <span title="Under MIT license">open source</span> framework making web development simple and powerful.</h3>
          <div class="py-4">
            <nui-button to="/" green class="mr-4">
              <nui-svg-play/>
              get started
            </nui-button>
            <nui-button to="/">
              <nui-svg-gh/>
              20K+ github stars
            </nui-button>
          </div>
=======
  <nui-container class="py-24">
    <div class="flex justify-between">
      <div class="lg:w-1/2 xl:w-6/12 text-center lg:text-left">
        <h1 class="text-3xl xl:text-4xl text-nuxt-gray font-medium leading-normal mb-6">
          The Progressive<br><span class="text-nuxt-lightgreen">Vue.js</span> Framework<br>
        </h1>
        <h3 class="xl:text-lg text-gray-600 font-medium leading-relaxed mb-6">Build your next Vue.js application with confidence using NuxtJS. An <span title="Under MIT license">open source</span> framework making web development simple and powerful.</h3>
        <div class="py-4">
          <nui-button :to="localePath({ name: 'guide-slug', params: { slug: 'installation'}})" class="mr-4 py-3 px-6 text-base">
            <nui-svg-play slot="icon" class="h-4 -mt-1 mr-1"/>
            get started
          </nui-button>
          <nui-button :to="localePath({ name: 'learn-section-slug', params: { section: 'guide', slug: 'installation'}})" class="mr-4 py-3 px-6 text-base button-gray">
            <nui-svg-gh slot="icon" class="h-6 -mt-1 mr-1"/>
            21K+ github stars
          </nui-button>
>>>>>>> ff8ee412 (add companies logo for i18n and transition on sponsors)
        </div>
        <figure class="hidden lg:block lg:w-5/12">
          <nui-media src="https://player.vimeo.com/video/311756540"/>
          <p class="font-medium py-2 text-xs xl:text-sm text-center text-gray-600" v-html="$store.state.homepage.welcome_figure.body"></p>
        </figure>
      </div>
    </nui-container>
  </nui-hero>
</template>

<script>
import nuiHero from '@/components/commons/Hero'
import nuiContainer from '@/components/commons/Container'
import nuiMedia from '@/components/commons/Media.vue'
import nuiButton from '@/components/commons/Button.vue'
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
    nuiHero,
    nuiContainer,
    nuiMedia,
    nuiButton,
    nuiSvgPlay,
    nuiSvgGh
  }
}
</script>

<style lang="scss">
$grey_blue: #2F495E;
$light_green: #00C58E;
$grey: #606F7B;

.Home__Welcome {
  padding-bottom: 6rem;
  &__Text {
    width: 42%;
    &__Title {
      color: $grey_blue;
      font-size: 2.25rem;
      line-height: 3.25rem;
      font-weight: 700;
      margin: 0;
      span {
        color: $light_green;
      }
    }
    &__Description {
      color: $grey;
      font-size: 1.15rem;
      line-height: 1.8rem;
      font-weight: 700;
      margin: 1.25rem 0;
    }
    &__Buttons {
      padding: 1.25rem 0;
      .nui-button {
        margin-right: 1rem;
        .nui-svg-gh {
          height: 20px;
        }
      }
    }
  }
  &__Media {
    width: 40%;
    margin: 0;
    p {
      color: $grey;
      font-size: 0.9rem;
      text-align: center;
    }
  }
}
</style>
