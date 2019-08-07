<template>
  <nui-container class="py-12">
    <section>
      <h1 class="text-3xl uppercase text-center pb-8">
        Nuxt<span class="text-nuxt-lightgreen">JS</span> targets
      </h1>
      <p> Explain the new mode with steps:</p>
      <p> 1) Create or migrate your Vue.js Application on NuxtJS</p>
      <p> 2) Do you need to render every page?</p>
      <p> YES - Image + SSR mode / NO - Image + SPA mode description</p>
      <p> 3) Do you want to host your Application on a server or a CDN?</p>
      <p> SERVER - Image + production ready / SERVERLESS - Image + static files generated
      <div class="flex items-end lg:items-center justify-between">
        <i-performant/>
        <div class="Home__Modes__Section">
          <h4 class="Home__Modes__Section__Title">{{ $store.state.homepage.modes_server_side_rendering.attrs.content_title }}</h4>
          <p class="Home__Modes__Section__Description" v-html="$store.state.homepage.modes_server_side_rendering.body"></p>
        </div>
      </div>
      <div>
        <i-modular/>
        <div class="Home__Modes__Section">
          <h4 class="Home__Modes__Section__Title">{{ $store.state.homepage.modes_statically_generated.attrs.content_title }}</h4>
          <p class="Home__Modes__Section__Description" v-html="$store.state.homepage.modes_statically_generated.body"></p>
        </div>
      </div>
      <div>
        <i-enjoyable/>
        <div class="Home__Modes__Section">
          <h4 class="Home__Modes__Section__Title">{{ $store.state.homepage.modes_single_page_app.attrs.content_title }}</h4>
          <p class="Home__Modes__Section__Description" v-html="$store.state.homepage.modes_single_page_app.body"></p>
        </div>
      </div>
    </section>
  </nui-container>
</template>

<script>
import iPerformant from '@/components/svg/Rocket'
import iModular from '@/components/svg/Puzzle'
import iEnjoyable from '@/components/svg/Dancers'

export default {
  components: {
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

.Home__Modes {
  color: $grey_blue;
  text-align: center;
  padding: 5rem 0;
  &__Section {
    width: 80%;
    text-align: left;
    padding-bottom: 4rem;
    &__Title {
      font-size: 1.35rem;
      font-weight: 700;
      margin: 0;
      text-transform: uppercase;
      padding: 0;
      padding-bottom: 2rem;
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
