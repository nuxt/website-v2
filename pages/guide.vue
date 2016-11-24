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
        <html-parser class="Content" v-html="body"></html-parser>
      </div>
    </div>
    <div class="Guide__Footer">
      <nuxt-footer></nuxt-footer>
    </div>
  </div>
</template>

<script>
import marked, { Renderer } from 'marked'
import highlightjs from 'highlight.js'
import fm from 'front-matter'

import NuxtBar from '~components/Bar.vue'
import NuxtAffix from '~components/Affix.vue'
import NuxtFooter from '~components/Footer.vue'
import HtmlParser from '~components/HtmlParser.vue'

const renderer = new Renderer();
renderer.code = (code, language) => {
  const validLang = !!(language && highlightjs.getLanguage(language));
  const highlighted = validLang ? highlightjs.highlight(language, code).value : code;
  return `<pre><code class="hljs ${language}">${highlighted}</code></pre>`;
};
marked.setOptions({ renderer });

export default {
  components: {
    NuxtBar,
    NuxtAffix,
    NuxtFooter,
    HtmlParser
  },
  data ({ route }, callback) {
    // Default data
    let data = {
      content: ''
    }
    let path = route.params.slug || 'index'
    path = '/docs/guide/' + path + '.md'
    if (process.BROWSER_BUILD) {
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
        data.content = content
        callback(null, data)
      })
      .catch((e) => {
        callback({ statusCode: 404, message: 'Documentation page not found' }, data)
      })
    } else {
      require('fs').readFile('static' + path, 'utf8', function (err, content) {
        if (err) return callback({ statusCode: 404, message: 'Documentation page not found' })
        callback(null, { content })
      })
    }
  },
  computed: {
    visible () { return this.$store.state.visibleAffix },
    page () { return fm(this.content) },
    body () { return marked(this.page.body) }
  },
  methods: {
    toggle () { this.$store.commit('toggle', 'visibleAffix') }
  },
  head () {
    return {
      title: this.page.attributes.title || 'No title',
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
