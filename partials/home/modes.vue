<template>
  <section class="Home__Modes">
    <nui-container>
      <div>
        <h1>
          rendering modes
        </h1>
      </div>
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
    </nui-container>
  </section>
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
