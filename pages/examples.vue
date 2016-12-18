<template>
  <div class="Examples">
    <nuxt-affix :list="$store.state.apiMenu" menu="/api"></nuxt-affix>
    <!-- Children -->
    <div class="Examples__Content" :class="{'Examples__Content--hidden': visible}">
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
    <div class="Examples__Footer">
      <nuxt-footer></nuxt-footer>
    </div>
  </div>
</template>

<script>
import marked, { Renderer } from 'marked'
import highlightjs from 'highlight.js'
import fm from 'front-matter'

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
    }
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
  &__Content
  {
    position: relative;
    z-index: 10;
    padding: 15px;
    margin-top: 60px;
    height: 100%;
    @media (min-width: 991px)
    {
      padding: 30px;
      margin-top: 80px;
      margin-left: 300px;
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
  &__Contribute {
    border-top: 1px #dbdfe1 solid;
    padding-top: 20px;
    color: #7f8c8d;
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
    height: 48px;
    line-height: 46px;
    font-size: 14px;
    margin-bottom: 15px;
    margin-right: 35px;
    &:before
    {
      border-right: 24px solid;
      border-top: 24px solid transparent;
      border-bottom: 24px solid transparent;
      left: -24px;
      border-right-color: #35495e;
    }
    &:after
    {
      border-left: 24px solid;
      border-top: 24px solid transparent;
      border-bottom: 24px solid transparent;
      right: -24px;
      border-left-color: #35495e;
    }
    &:hover
    {
      &:before
      {
        border-right-color: darken(#35495e, 5%);
      }
      &:after
      {
        border-left-color: darken(#35495e, 5%);
      }
    }
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
