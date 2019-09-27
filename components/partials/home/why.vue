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
      <div class="text-center">
        <nui-button href="https://template.nuxtjs.org" class="mr-4 py-3 px-6 text-base">
          <svg slot="icon" aria-label="CodeSandbox" class="inline-block h-5 -mt-1 mr-1" viewBox="0 0 1024 1024" style="vertical-align:middle">
            <g fill="currentColor">
              <path d="M719 851V639.85L902 533.8v211.47L719 851M302.08 643.44l-179.91-104.3v208.6l179.91 104.83V643.44M511.98 275.8l182.96-106.17L512.06 63 328.44 169.99l183.54 105.8"/>
            </g>
            <g fill="none" stroke="currentColor" stroke-width="80" stroke-miterlimit="10">
              <path d="M899 287.83L509 513v450M122.17 289L511.5 513"/>
              <path d="M121 739.08l389.92 223.96L901 738.34V288L511 62 121 289z"/>
            </g>
          </svg>
          Try NuxtJS Online
        </nui-button>
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
