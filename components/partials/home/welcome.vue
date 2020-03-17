<template>
  <div class="bg-light-elevatedSurface dark:bg-dark-elevatedSurface shadow-nuxt">
    <div class="container mx-auto px-4">
      <div class="flex justify-between py-16 sm:py-24">
        <div class="lg:w-1/2 xl:w-6/12 text-center lg:text-left py-4 sm:p-0">
          <h1 class="text-4xl xl:text-5xl text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary font-medium tracking-normal leading-tight mb-6" v-html="wordings.welcome.attrs.title" />
          <h3 class="xl:text-lg text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary font-medium leading-relaxed mb-6" v-html="wordings.welcome.body" />
          <div class="flex flex-col sm:block py-4">
            <nui-button :to="{ name: 'section-slug', params: { section: 'guide', slug: 'installation'} }" variant="primary" class="sm:mr-4 py-3 px-6 text-base mb-4">
              <nui-svg-meteor slot="icon" class="h-5 -mb-1 mr-1" />
              {{ buttonWordings.get_started }}
            </nui-button>
            <nui-button href="https://github.com/nuxt/nuxt.js" variant="secondary" class="sm:mr-4 py-3 px-6 text-base">
              <nui-svg-gh slot="icon" class="h-6 -mt-1 mr-1" />
              {{ buttonWordings.github_stars }}
            </nui-button>
          </div>
        </div>
        <!-- <div class="hidden lg:block lg:w-5/12 bg-nuxt-gray rounded">
          <div class="">
            <div class="bg-red-500 w-3 h-3 rounded-full"></div>
            <div class="bg-orange-500 w-3 h-3 rounded-full"></div>
            <div class="bg-green-500 w-3 h-3 rounded-full"></div>
          </div>
        </div> -->
        <figure class="hidden lg:block lg:w-5/12">
          <nui-media src="https://player.vimeo.com/video/311756540" class="mb-4" />
          <p class="font-medium py-2 text-xs xl:text-sm text-center text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary" v-html="wordings.welcome_figure.body" />
        </figure>
      </div>
    </div>
  </div>
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
