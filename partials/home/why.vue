<template>
  <nui-container>
    <section class="bg-gray-100 py-8">
      <h1 class="text-3xl uppercase text-center py-8">
        Why NUXT<span class="text-nuxt-lightgreen">JS</span>
      </h1>
      <div class="flex items-start justify-between">
        <div class="w-1/3 p-8 text-center">
          <i-modular class="inline-block"/>
          <h4 class="uppercase text-xl py-8 font-bold">{{ $store.state.homepage.why_modular.attrs.title }}</h4>
          <p class="leading-loose text-justify" v-html="$store.state.homepage.why_modular.body"></p>
        </div>
        <div class="w-1/3 p-8 text-center">
          <i-performant class="inline-block"/>
          <h4 class="uppercase text-xl py-8 font-bold">{{ $store.state.homepage.why_performant.attrs.title }}</h4>
          <p class="leading-loose text-justify" v-html="$store.state.homepage.why_performant.body"></p>
        </div>
        <div class="w-1/3 p-8 text-center">
          <i-enjoyable class="inline-block"/>
          <h4 class="uppercase text-xl py-8 font-bold">{{ $store.state.homepage.why_enjoyable.attrs.title }}</h4>
          <p class="leading-loose text-justify" v-html="$store.state.homepage.why_enjoyable.body"></p>
        </div>
      </div>
    </section>
  </nui-container>
</template>

<script>
// import nuiTitle from '@/components/commons/Title'
import iPerformant from '@/components/svg/streamline/performant'
import iModular from '@/components/svg/streamline/modular'
import iEnjoyable from '@/components/svg/streamline/enjoyable'

export default {
  components: {
    // nuiTitle,
    iPerformant,
    iModular,
    iEnjoyable
  }
}
</script>

<style lang="scss">
$grey_blue: #2F495E;
$light_green: #00C58E;
$grey: #606F7B;

.Home__Why {
  &__Section {
    width: 25%;
    &__Title {
      font-size: 1.35rem;
      font-weight: 700;
      margin: 0;
      text-transform: uppercase;
      padding: 2rem 0;
    }
    &__Description {
      color: $grey;
      font-weight: 500;
      margin: 0;
      line-height: 1.7rem;
      font-size: 1rem;
    }
  }
}
</style>
