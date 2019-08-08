<template>
  <nui-container class="pb-12">
    <section class="bg-gray-100 rounded p-6">
      <h1 class="text-3xl uppercase text-center pt-10 pb-8">
        NUXT<span class="text-nuxt-lightgreen">JS</span> rendering
      </h1>
      <div class="flex items-start justify-between">
        <div class="w-1/3 p-8 text-center">
          <i-modular class="inline-block"/>
          <h4 class="uppercase text-2xl py-8">{{ $store.state.homepage.modes_server_side_rendering.attrs.content_title }}</h4>
          <p class="leading-loose text-justify" v-html="$store.state.homepage.modes_server_side_rendering.body"></p>
        </div>
        <div class="w-1/3 p-8 text-center">
          <i-performant class="inline-block"/>
          <h4 class="uppercase text-2xl py-8">{{ $store.state.homepage.modes_statically_generated.attrs.content_title }}</h4>
          <p class="leading-loose text-justify" v-html="$store.state.homepage.modes_statically_generated.body"></p>
        </div>
        <div class="w-1/3 p-8 text-center">
          <i-enjoyable class="inline-block"/>
          <h4 class="uppercase text-2xl py-8">{{ $store.state.homepage.modes_single_page_app.attrs.content_title }}</h4>
          <p class="leading-loose text-justify" v-html="$store.state.homepage.modes_statically_generated.body"></p>
        </div>
      </div>
    </section>
  </nui-container>
</template>

<script>
import iPerformant from '@/components/svg/streamline/performant'
import iModular from '@/components/svg/streamline/modular'
import iEnjoyable from '@/components/svg/streamline/enjoyable'

export default {
  components: {
    iPerformant,
    iModular,
    iEnjoyable
  }
}
</script>
