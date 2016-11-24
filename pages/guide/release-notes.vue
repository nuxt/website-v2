<template>
  <div class="Guide">
    <nuxt-bar :visible="visible" v-on:toggle="toggle" title="Version 1.0"></nuxt-bar>
    <div class="Guide__Left" :class="{'Guide__Left--hidden': !visible}">
      <div class="container">
        <nuxt-affix :list="$store.state.guideMenu" menu="/guide"></nuxt-affix>
      </div>
    </div>
    <div class="container">
      <div class="Guide__Right" :class="{'Guide__Right--hidden': visible}">
        <div class="Content">
          <h1>Release Notes</h1>
          <div v-for="release in releases">
            <h2 :id="release.name">{{ release.name }}</h2>
            <html-parser class="Release__Content" v-html="release.body"></html-parser>
          </div>
        </div>
      </div>
    </div>
    <div class="Guide__Footer">
      <nuxt-footer></nuxt-footer>
    </div>
  </div>
</template>

<script>
import marked from 'marked'
import axios from 'axios'

import NuxtBar from '~components/Bar.vue'
import NuxtAffix from '~components/Affix.vue'
import NuxtFooter from '~components/Footer.vue'
import HtmlParser from '~components/HtmlParser.vue'

export default {
  components: {
    NuxtBar,
    NuxtAffix,
    NuxtFooter,
    HtmlParser
  },
  data () {
    // Default data
    let data = {
      releases: []
    }
    return axios({
      url: 'https://api.github.com/repos/nuxt/nuxt.js/releases',
      headers: {
        'Authorization': 'token 4aa6bcf919d238504e7db59a66d32e78281c0ad3'
      }
    })
    .then((res) => {
      let releases = res.data.filter((r) => !r.draft).map((release) => {
        return {
          name: release.name,
          date: release.published_at,
          body: marked(release.body)
        }
      })
      return { releases }
    })
  },
  computed: {
    visible () { return this.$store.state.visibleAffix }
  },
  methods: {
    toggle () { this.$store.commit('toggle', 'visibleAffix') }
  },
  head () {
    return {
      title: 'Release Notes',
      titleTemplate: '%s - Nuxt.js'
    }
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
