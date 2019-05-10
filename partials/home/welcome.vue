<template>
  <nui-hero class="Home__Welcome">
    <nui-container>
      <nui-row>
        <div class="Home__Welcome__Text">
          <h1 class="Home__Welcome__Text__Title">
            The Vue.js Framework for <br>
            <!-- <span>Universals Applications</span> -->
            <!-- {{ $store.state.lang.homepage.welcome.app_types_prefix }} -->
            <span>{{ appType }}</span>
            <!-- {{ $store.state.lang.homepage.welcome.app_types_suffix }} -->
          </h1>
          <h3 class="Home__Welcome__Text__Description">An open-source project under MIT license that make your Vue.js Application development enjoyable.</h3>
          <div class="Home__Welcome__Text__Buttons">
            <nui-button to="/" green>
              <nui-svg-play/>
              get started
            </nui-button>
            <nui-button to="/">
              <nui-svg-gh/>
              19K+ github stars
            </nui-button>
          </div>
        </div>
        <figure class="Home__Welcome__Media">
          <nui-media src="https://player.vimeo.com/video/311756540" style="margin: 0;"/>
          <p v-html="$store.state.homepage.welcome_figure.body"></p>
        </figure>
      </nui-row>
    </nui-container>
  </nui-hero>
</template>

<script>
import nuiHero from '@/components/ui/Hero'
import nuiContainer from '@/components/ui/Container'
import nuiRow from '@/components/ui/Row'
import nuiMedia from '@/components/ui/Media.vue'
import nuiButton from '@/components/ui/Button.vue'
import nuiSvgPlay from '@/components/svg/Play.vue'
import nuiSvgGh from '@/components/svg/Github.vue'
import { setTimeout } from 'timers';

export default {
  data() {
    return {
      appTypes: this.$store.state.lang.homepage.welcome.app_types,
      current: 0
    }
  },
  mounted() {
    this._timer = setInterval(() => {
      this.current = (this.current + 1) % this.appTypes.length
    }, 2500)
  },
  computed: {
    appType () {
      return this.appTypes[this.current]
    }
  },
  destroyed() {
    clearInterval(this._timer)
  },
  components: {
    nuiHero,
    nuiContainer,
    nuiRow,
    nuiMedia,
    nuiButton,
    nuiSvgPlay,
    nuiSvgGh
  }
}
</script>

<style lang="scss">
$grey_blue: #2F495E;
$light_green: #00C58E;
$grey: #606F7B;

.Home__Welcome {
  padding-bottom: 6rem;
  &__Text {
    width: 42%;
    &__Title {
      color: $grey_blue;
      font-size: 2.25rem;
      line-height: 3.25rem;
      font-weight: 700;
      margin: 0;
      span {
        color: $light_green;
      }
    }
    &__Description {
      color: $grey;
      font-size: 1.15rem;
      line-height: 1.8rem;
      font-weight: 700;
      margin: 1.25rem 0;
    }
    &__Buttons {
      padding: 1.25rem 0;
      .nui-button {
        margin-right: 1rem;
        .nui-svg-gh {
          height: 20px;
        }
      }
    }
  }
  &__Media {
    width: 40%;
    margin: 0;
    p {
      color: $grey;
      font-size: 0.9rem;
      text-align: center;
    }
  }
}
</style>
