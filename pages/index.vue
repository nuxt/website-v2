<template>
  <div class="Home">
    <nui-hero class="Home__Welcome">
      <nui-container>
        <nui-row>
          <div class="Home__Welcome__Text">
            <h1>The Vue.js Framework for <br><span>Universals Applications</span></h1>
            <h3>An open-source project under MIT license that make your Vue.js Application development enjoyable.</h3>
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
    <s-welcome/>
    <s-why/>
    <s-modes/>
    <s-codesandbox/>
    <s-backers/>
    <nuxt-footer/>
  </div>
</template>

<script>
import nuiHero from '@/components/ui/Hero'
import nuiContainer from '@/components/ui/Container'
import nuiRow from '@/components/ui/Row'
import nuiMedia from '@/components/ui/Media.vue'
import nuiButton from '@/components/ui/Button.vue'
import nuiSvgPlay from '@/components/svg/Play.vue'
import nuiSvgGh from '@/components/svg/Github.vue'

import sWelcome from '@/partials/home/welcome'
import sWhy from '@/partials/home/why'

export default {
  components: {
    nuiHero,
    nuiContainer,
    nuiRow,
    nuiMedia,
    nuiButton,
    nuiSvgPlay,
    nuiSvgGh,
    sWelcome,
    sWhy,
    sModes: () => import('@/partials/home/modes'),
    sCodesandbox: () => import('@/partials/home/codesandbox'),
    sBackers: () => import('@/partials/home/backers'),
    NuxtFooter: () => import('@/components/Footer.vue')
  },
  head() {
    return {
      title: this.$store.state.lang.homepage.meta.title,
      meta: [
        { name: 'description', hid: 'description', content: this.$store.state.lang.homepage.meta.description },
        // Open Graph
        { name: 'og:title', content: this.$store.state.lang.homepage.meta.title },
        { name: 'og:description', content: this.$store.state.lang.homepage.meta.description },
        { name: 'og:type', content: 'website' },
        { name: 'og:url', content: 'https://nuxtjs.org' },
        { name: 'og:image', content: 'https://nuxtjs.org/meta_640.png' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@nuxt_js' },
        { name: 'twitter:title', content: this.$store.state.lang.homepage.meta.title },
        { name: 'twitter:description', content: this.$store.state.lang.homepage.meta.description },
        { name: 'twitter:image', content: 'https://nuxtjs.org/meta_640.png' },
        { name: 'twitter:image:alt', content: 'Nuxt.js Logo' }
      ]
    }
  }
}
</script>

<style lang="scss">
$grey_blue: #2F495E;
$light_green: #00C58E;
$grey: #606F7B;

.Home {
  &__Welcome {
    padding-bottom: 6rem;
    &__Text {
      width: 40%;
      h1 {
        color: $grey_blue;
        font-size: 2.25rem;
        line-height: 3.25rem;
        font-weight: 700;
        margin: 0;
        span {
          color: $light_green;
        }
      }
      h3 {
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
}
</style>
