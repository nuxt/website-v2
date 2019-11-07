<template>
  <nui-container>
    <div class="flex justify-between py-16 sm:py-24">
      <div class="lg:w-1/2 xl:w-6/12 text-center lg:text-left p-4 sm:p-0">
        <h1 class="text-3xl xl:text-4xl text-nuxt-gray font-medium leading-normal mb-6" v-html="wordings.welcome.attrs.title" />
        <h3 class="xl:text-lg text-gray-600 font-medium leading-relaxed mb-6" v-html="wordings.welcome.body" />
        <div class="flex flex-col sm:block py-4">
          <nui-button :to="{ name: 'section-slug', params: { section: 'guide', slug: 'installation'} }" class="sm:mr-4 py-3 px-6 text-base mb-4">
            <nui-svg-meteor slot="icon" class="h-5 -mb-1 mr-1" />
            {{ buttonWordings.get_started }}
          </nui-button>
          <nui-button href="https://github.com/nuxt/nuxt.js" variant="gray" class="sm:mr-4 py-3 px-6 text-base">
            <nui-svg-gh slot="icon" class="h-6 -mt-1 mr-1" />
            {{ buttonWordings.github_stars }}
          </nui-button>
        </div>
      </div>
      <!-- <div class="hidden lg:block lg:w-5/12 bg-nuxt-gray rounded-lg">
        <div class="">
          <div class="bg-red-500 w-3 h-3 rounded-full"></div>
          <div class="bg-orange-500 w-3 h-3 rounded-full"></div>
          <div class="bg-green-500 w-3 h-3 rounded-full"></div>
        </div>
      </div> -->
      <figure class="hidden lg:block lg:w-5/12">
        <nui-media src="https://player.vimeo.com/video/311756540" />
        <p class="font-medium py-2 text-xs xl:text-sm text-center text-gray-600" v-html="wordings.welcome_figure.body" />
      </figure>
    </div>
  </nui-container>
</template>

<script>
import nuiSvgMeteor from '@/components/svg/Meteor.vue'
import nuiSvgGh from '@/components/svg/Github.vue'

export default {
  components: {
    nuiSvgMeteor,
    nuiSvgGh
  },
  data () {
    return {
      wordings: this.$store.state.homepage,
      buttonWordings: this.$store.state.lang.homepage.welcome
    }
  }
}
</script>
