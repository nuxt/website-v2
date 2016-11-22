<template>
  <div class="Guide">
    <nuxt-bar :visible="visible" v-on:toggle="toggle"></nuxt-bar>
    <div class="Guide__Left" :class="{'Guide__Left--hidden': !visible}">
      <div class="container">
        <nuxt-affix></nuxt-affix>
      </div>
    </div>
    <div class="container">
      <div class="Guide__Right" :class="{'Guide__Right--hidden': visible}">
        <!-- <div :is="content"></div> -->
        {{ content }}
      </div>
    </div>
    <div class="Guide__Footer">
      <footbar></footbar>
    </div>
  </div>
</template>

<script>
import NuxtBar from '~components/Bar.vue'
import NuxtAffix from '~components/Affix.vue'
import NuxtTitle from '~components/Title.vue'
import NuxtSubtitle from '~components/Subtitle.vue'
import NuxtParagraph from '~components/Paragraph.vue'
import NuxtCode from '~components/Code.vue'
import Footbar from '~components/Footer.vue'

export default {
  components: {
    NuxtBar,
    NuxtAffix,
    NuxtTitle,
    NuxtSubtitle,
    NuxtParagraph,
    NuxtCode,
    Footbar
  },
  data ({ route, isServer }) {
    let path = route.params.slug || 'index'
    path = 'static/docs/' + path + '.md'
    if (isServer) {
    //   fs.readFile()
    } else {
      return fetch('/static/docs/index.md')
      .then((response) => response.text())
      .then((content) => {
        return { content }
      })
    }
  },
  computed: {
    visible () { return this.$store.state.visibleAffix },
    content () {
      let content = this.$route.params.slug || 'index'
      return content.replace('-', '')
    }
  },
  methods: {
    toggle () { this.$store.commit('toggle', 'visibleAffix') }
  }
}
</script>

<style lang="scss" scoped>
.Guide
{
  &__Left
  {
    z-index: 900;
    position: fixed;
    top: 100px;
    left: 0;
    right: 0;
    bottom: 0;
    @media (min-width: 768px)
    {
      top: 140px;
    }
    @media (min-width: 992px)
    {
      z-index: 1;
    }
    &--hidden
    {
      display: none;
      @media (min-width: 992px)
      {
        display: block;
      }
    }
    .container
    {
      height: 100%;
    }
  }
  &__Right
  {
    position: relative;
    z-index: 10;
    padding: 30px 0;
    padding-top: 130px;
    height: 100%;
    @media (min-width: 768px)
    {
      padding-top: 170px;
    }
    @media (min-width: 992px)
    {
      margin-left: 270px;
    }
    &--hidden
    {
      display: none;
      @media (min-width: 992px)
      {
        display: block;
      }
    }
  }
  &__Footer
  {
    display: block;
    @media (min-width: 992px)
    {
      display: none;
    }
  }
}
</style>
