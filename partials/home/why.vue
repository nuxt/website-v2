<template>
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
