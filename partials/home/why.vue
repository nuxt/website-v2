<template>
<<<<<<< HEAD
  <section class="Home__Why">
    <nui-container>
      <div>
        <nui-title>
          Why NUXT<span>JS</span>
        </nui-title>
      </div>
      <nui-row>
        <div class="Home__Why__Section">
          <i-performant/>
          <h4 class="Home__Why__Section__Title">{{ $store.state.homepage.why_performant.attrs.title }}</h4>
          <p class="Home__Why__Section__Description" v-html="$store.state.homepage.why_performant.body">
          </p>
        </div>
        <div class="Home__Why__Section">
          <i-modular/>
          <h4 class="Home__Why__Section__Title">{{ $store.state.homepage.why_modular.attrs.title }}</h4>
          <p class="Home__Why__Section__Description" v-html="$store.state.homepage.why_modular.body">
          </p>
        </div>
        <div class="Home__Why__Section">
          <i-enjoyable/>
          <h4 class="Home__Why__Section__Title">{{ $store.state.homepage.why_enjoyable.attrs.title }}</h4>
          <p class="Home__Why__Section__Description" v-html="$store.state.homepage.why_enjoyable.body">
          </p>
=======
  <nui-container class="pb-12">
    <section class="bg-gray-100 rounded p-6">
      <h1 class="text-3xl uppercase text-center pt-10 pb-8">
        Why NUXT<span class="text-nuxt-lightgreen">JS</span>
      </h1>
      <div class="flex flex-col lg:flex-row items-start justify-between">
        <div class="lg:w-1/3 p-8 text-center">
          <i-modular class="inline-block"/>
          <h4 class="uppercase text-2xl py-8">{{ $store.state.homepage.why_modular.attrs.title }}</h4>
          <p class="leading-loose text-justify" v-html="$store.state.homepage.why_modular.body"></p>
        </div>
        <div class="lg:w-1/3 p-8 text-center">
          <i-performant class="inline-block"/>
          <h4 class="uppercase text-2xl py-8">{{ $store.state.homepage.why_performant.attrs.title }}</h4>
          <p class="leading-loose text-justify" v-html="$store.state.homepage.why_performant.body"></p>
        </div>
        <div class="lg:w-1/3 p-8 text-center">
          <i-enjoyable class="inline-block"/>
          <h4 class="uppercase text-2xl py-8">{{ $store.state.homepage.why_enjoyable.attrs.title }}</h4>
          <p class="leading-loose text-justify" v-html="$store.state.homepage.why_enjoyable.body"></p>
>>>>>>> 9b732a8c (add doc version)
        </div>
      </nui-row>
    </nui-container>
  </section>
</template>

<script>
import nuiContainer from '@/components/commons/Container'
import nuiRow from '@/components/commons/Row'
import nuiTitle from '@/components/commons/Title'
import iPerformant from '@/components/svg/Rocket'
import iModular from '@/components/svg/Puzzle'
import iEnjoyable from '@/components/svg/Dancers'

export default {
  components: {
    nuiContainer,
    nuiRow,
    nuiTitle,
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
  color: $grey_blue;
  text-align: center;
  padding: 5rem 0;
  &__Section {
    width: 25%;
    &__Title {
      font-weight: 700;
      margin: 0;
      padding: 2rem 0;
    }
    &__Description {
      // text-align: justify;
      // font-family: "Source Sans Pro", "Helvetica Neue", 'Segoe UI','Roboto', 'Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans', 'Helvetica Neue',sans-serif;
      // -webkit-font-smoothing: antialiased;
      color: $grey;
      font-weight: 500;
      margin: 0;
      line-height: 1.7rem;
      font-size: 1.1rem;
    }
  }
}
</style>
