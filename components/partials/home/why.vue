<template>
  <nui-container class="mb-12 bg-gray-100 lg:bg-transparent rounded">
    <section class="lg:bg-gray-100 rounded py-6 sm:p-6">
      <h1 class="text-3xl uppercase text-center pt-10 pb-8">
        Why NUXT<span class="text-nuxt-lightgreen">JS</span>
      </h1>
      <div class="flex flex-col lg:flex-row items-start justify-between">
        <div class="lg:w-1/3 px-4 py-8 lg:p-8 text-center">
          <i-modular class="inline-block" />
          <h4 class="uppercase text-2xl py-8">
            {{ $store.state.homepage.why_modular.attrs.title }}
          </h4>
          <p class="leading-loose text-justify" v-html="$store.state.homepage.why_modular.body" />
        </div>
        <div class="lg:w-1/3 px-4 py-8 lg:p-8 text-center">
          <i-performant class="inline-block" />
          <h4 class="uppercase text-2xl py-8">
            {{ $store.state.homepage.why_performant.attrs.title }}
          </h4>
          <p class="leading-loose text-justify" v-html="$store.state.homepage.why_performant.body" />
        </div>
        <div class="lg:w-1/3 px-4 py-8 lg:p-8 text-center">
          <i-enjoyable class="inline-block" />
          <h4 class="uppercase text-2xl py-8">
            {{ $store.state.homepage.why_enjoyable.attrs.title }}
          </h4>
          <p class="leading-loose text-justify" v-html="$store.state.homepage.why_enjoyable.body" />
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
