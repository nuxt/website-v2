<template>
  <div class="Examples">
    <nuxt-bar :visible="visible" v-on:toggle="toggle" title="Version 1.0"></nuxt-bar>
    <div class="Examples__Left" :class="{'Examples__Left--hidden': !visible}">
      <div class="container">
        <nuxt-affix :list="$store.state.examplesMenu" menu="/examples"></nuxt-affix>
      </div>
    </div>
    <div class="container">
      <div class="Examples__Right" :class="{'Examples__Right--hidden': visible}">
        <nuxt-content v-html="body"></nuxt-content>
      </div>
    </div>
    <div class="Examples__Footer">
      <footbar></footbar>
    </div>
  </div>
</template>

<script>
import marked from 'marked'
import fm from 'front-matter'

import NuxtBar from '~components/Bar.vue'
import NuxtAffix from '~components/Affix.vue'
import NuxtContent from '~components/Content.vue'
import Footbar from '~components/Footer.vue'

export default {
  components: {
    NuxtBar,
    NuxtAffix,
    NuxtContent,
    Footbar
  },
  data ({ route }, callback) {
    let path = route.params.slug || 'hello-world'
    path = '/docs/examples/' + path + '.md'
    if (process.BROWSER) {
      fetch(path)
      .then((response) => {
        const contenType = response.headers.get('content-type') || ''
        const requestOK = (response.status >= 200 && response.status < 300)
        if (!requestOK || contenType.indexOf('text/x-markdown') === -1) {
          throw new Error('Documentation page not found')
        }
        return response.text()
      })
      .then((content) => {
        callback(null, { content })
      })
      .catch((e) => {
        callback({ statusCode: 404, message: 'Documentation page not found' })
      })
    } else {
      require('fs').readFile('static' + path, 'utf8', function (err, content) {
        if (err) return callback({ statusCode: 404, message: 'Documentation page not found' })
        callback(null, { content })
      })
    }
  },
  watch: {
    '$route': 'refreshContent'
  },
  computed: {
    visible () { return this.$store.state.visibleAffix },
    page () { return fm(this.content) },
    attributes () { return this.content.attributes },
    body () { return marked(this.page.body) }
  },
  methods: {
    refreshContent () {
      this.content = this.$options.data().content || ''
    },
    toggle () { this.$store.commit('toggle', 'visibleAffix') }
  },
  head () {
    return {
      title: this.page.attributes.title || 'No title'
    }
  }
}
</script>

<style lang="scss" scoped>
.Examples
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
