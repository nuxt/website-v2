<template>
  <div class="Examples">
    <nuxt-bar :visible="visible" v-on:toggle="toggle" :title="'Version ' + $store.state.version"></nuxt-bar>
    <div class="Examples__Left" :class="{'Examples__Left--hidden': !visible}">
      <div class="container">
        <nuxt-affix :list="$store.state.examplesMenu" menu="/examples"></nuxt-affix>
      </div>
    </div>
    <div class="container">
      <div class="Examples__Right" :class="{'Examples__Right--hidden': visible}">
        <div class="Content">
          <h1>{{ attributes.title }}</h1>
          <blockquote>
            <p>{{ attributes.description }}</p>
          </blockquote>
          <div class="video" v-if="attributes.youtube">
            <iframe class="youtube" :src="attributes.youtube" frameborder="0" allowfullscreen></iframe>
          </div>
          <h2>Source Code</h2>
          <nuxt-files-tree :example="attributes.github" :key="attributes.github"></nuxt-files-tree>
          <div>
            <a v-if="attributes.livedemo" :href="attributes.livedemo" class="button" target="_blank">
              <span><div class="icon eye"></div></span>
              Live demo
            </a>
            <a v-if="attributes.liveedit" :href="attributes.liveedit" class="button" target="_blank">
              <span><div class="icon edit"></div></span>
              Live edit
            </a>
            <a :href="downloadLink" class="button" target="_blank">
              <span><div class="icon download"></div></span>
              Download
            </a>
          </div>
          <div v-html="body"></div>
        </div>
      </div>
    </div>
    <div class="Examples__Footer">
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
import NuxtFilesTree from '~components/FilesTree.vue'

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
    NuxtFilesTree
  },
  data ({ route }, callback) {
    let path = route.params.slug || 'hello-world'
    path = '/docs/examples/' + path + '.md'
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
        callback(null, { content })
      })
      .catch((e) => {
        callback({ statusCode: 404, message: 'Example page not found' })
      })
    } else {
      require('fs').readFile('static' + path, 'utf8', function (err, content) {
        if (err) return callback({ statusCode: 404, message: 'Example page not found' })
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
    attributes () { return this.page.attributes },
    body () { return marked(this.page.body) },
    downloadLink () { return 'https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/nuxt/nuxt.js/tree/master/examples/' + this.attributes.github}
  },
  methods: {
    refreshContent () {
      this.content = this.$options.data().content || ''
    },
    toggle () { this.$store.commit('toggle', 'visibleAffix') }
  },
  head () {
    return {
      title: this.page.attributes.title || 'Examples',
      titleTemplate: 'Example: %s - Nuxt.js',
      meta: [
        { hid: 'description', name: 'description', content: (this.page.attributes.description || 'Nuxt.js example') }
      ]
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
  .button
  {
    margin-bottom: 15px;
    margin-right: 35px;
    &:last-child
    {
      margin-right: 0;
    }
    .icon, .icon:before, .icon:after
    {
      color: #fff;
    }
  }
}
</style>
