<template>
  <div class="container mx-auto px-4 mb-12 pb-12">
    <section class="rounded py-6 sm:p-6">
      <h1 class="text-3xl uppercase text-center pt-10 font-medium" v-html="wordings.modes.attrs.title" />
      <div class="flex flex-wrap">
        <div class="lg:w-1/2 p-4 lg:p-8">
          <i-fire class="text-nuxt-green dark:text-nuxt-lightgreen mx-auto my-8 w-32"/>
          <h4 class="text-center uppercase text-2xl pt-8 pb-4 font-medium">
            {{ wordings.modes_server_side_rendering.attrs.content_title }}
          </h4>
          <p class="leading-loose text-left text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary" v-html="wordings.modes_server_side_rendering.body" />
        </div>
        <div class="lg:w-1/2 p-4 lg:p-8">
          <i-snow class="mx-auto my-8 w-32"/>
          <h4 class="text-center uppercase text-2xl pt-8 pb-4 font-medium">
            {{ wordings.modes_statically_generated.attrs.content_title }}
          </h4>
          <p class="leading-loose text-left text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary" v-html="wordings.modes_statically_generated.body" />
        </div>
      </div>
      <div class="px-4 lg:p-8">
        <h4 class="uppercase text-2xl pt-8 pb-4 font-medium">
          {{ wordings.modes_single_page_app.attrs.content_title }}
        </h4>
        <p class="leading-loose text-left text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary" v-html="wordings.modes_single_page_app.body" />
      </div>
    </section>
  </div>
</template>

<script>
import iSnow from '@/components/svg/Snow'
import iFire from '@/components/svg/Fire'

export default {
  components: {
    iSnow,
    iFire
  },
  data () {
    return {
      wordings: this.$store.state.homepage
    }
  }
}
</script>
