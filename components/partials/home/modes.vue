<template>
  <nui-container class="pb-12 bg-gray-100 lg:bg-transparent rounded">
    <section class="lg:bg-gray-100 rounded py-6 sm:p-6">
      <h1 class="text-3xl uppercase text-center pt-10" v-html="wordings.modes.attrs.title" />
      <div class="flex flex-wrap">
        <div class="lg:w-1/2 p-4 lg:p-8">
          <i-fire class="text-nuxt-green mx-auto my-8 w-32"/>
          <h4 class="text-center uppercase text-2xl pt-8 pb-4">
            {{ wordings.modes_server_side_rendering.attrs.content_title }}
          </h4>
          <p class="leading-loose text-left sm:text-justify" v-html="wordings.modes_server_side_rendering.body" />
        </div>
        <div class="lg:w-1/2 p-4 lg:p-8">
          <i-snow class="mx-auto my-8 w-32"/>
          <h4 class="text-center uppercase text-2xl pt-8 pb-4">
            {{ wordings.modes_statically_generated.attrs.content_title }}
          </h4>
          <p class="leading-loose text-left sm:text-justify" v-html="wordings.modes_statically_generated.body" />
        </div>
      </div>
      <div class="px-4 lg:p-8">
        <h4 class="uppercase text-2xl pt-8 pb-4">
          {{ wordings.modes_single_page_app.attrs.content_title }}
        </h4>
        <p class="leading-loose text-left sm:text-justify" v-html="wordings.modes_single_page_app.body" />
      </div>
    </section>
  </nui-container>
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
