<template>
<<<<<<< HEAD
<<<<<<< HEAD
  <div class="Content">
    <h1>{{ attributes.title }}</h1>
=======
  <div>
    <carbon-ads :key="$route.params.slug"></carbon-ads>
    <h1>{{ attrs.title }}</h1>
>>>>>>> f624de65 (update ads)
    <blockquote>
      <p>{{ attributes.description }}</p>
    </blockquote>
    <div class="video" v-if="attributes.youtube">
      <iframe class="youtube" :src="attributes.youtube" frameborder="0" allowfullscreen></iframe>
    </div>
    <h2>{{ $store.state.lang.examples.source_code }}</h2>
    <nuxt-files-tree :example="attributes.github" :key="attributes.github"></nuxt-files-tree>
    <div>
      <a v-if="attributes.livedemo" :href="attributes.livedemo" class="button" target="_blank">
        <span><div class="icon eye"></div></span>
        {{ $store.state.lang.links.live_demo }}
      </a>
      <a v-if="attributes.liveedit" :href="attributes.liveedit" class="button" target="_blank">
        <span><div class="icon edit"></div></span>
        {{ $store.state.lang.links.live_edit }}
      </a>
      <a :href="downloadLink" class="button" target="_blank">
        <span><div class="icon download"></div></span>
        {{ $store.state.lang.links.download }}
      </a>
    </div>
    <div v-html="body"></div>
=======
  <div class="flex justify-end">
    <nui-article class="w-10/12 p-8 mr-auto bg-gray-100 rounded">
      <h1>{{ attrs.title }}</h1>
      <responsive-video v-if="attrs.youtube" :src="attrs.youtube"/>
      <html-parser :content="body"/>
      <contribute :doc-link="docLink"/>
    </nui-article>
    <nui-affix>
      <nui-ads class="mx-auto" :key="$route.params.slug"/>
    </nui-affix>
>>>>>>> 2fb6a223 (sponsors and flat routes with header links)
  </div>
</template>

<script>
<<<<<<< HEAD
import marked, { Renderer } from 'marked'
import highlightjs from 'highlight.js'
import fm from 'front-matter'

import NuxtFilesTree from '~components/FilesTree.vue'

const renderer = new Renderer();
renderer.code = (code, language) => {
  const validLang = !!(language && highlightjs.getLanguage(language));
  const highlighted = validLang ? highlightjs.highlight(language, code).value : code;
  return `<pre><code class="hljs ${language}">${highlighted}</code></pre>`;
};
marked.setOptions({ renderer });

export default {
<<<<<<< HEAD
  components: {
    NuxtFilesTree
  },
  data ({ route, store }, callback) {
    // let path = route.params.slug || 'hello-world'
    // path = '/docs/examples/' + path + '.md'
    const path = '/docs/' + store.state.lang.iso + '/examples/' + route.params.slug + '.md'
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
=======
  async data ({ route, store, error }) {
    // Default data
    let data = {
      attrs: {},
      body: ''
    }
    let slug = route.params.slug || 'hello-world'
    const path = `/${store.state.lang.iso}/examples/${slug}`
    let res
    try {
      res = await axios.get(store.state.apiURI + path)
    } catch (err) {
      if (err.response.status !== 404) {
        return error({ statusCode: 500, message: store.state.lang.text.an_error_occured })
      }
      return error({ statusCode: 404, message: store.state.lang.text.api_page_not_found })
>>>>>>> f624de65 (update ads)
    }
  },
  watch: {
    '$route': 'refreshContent'
  },
  computed: {
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
</style>
=======
import nuiAds from '@/components/partials/Ads'
import nuiAffix from '@/components/partials/Affix'

export default {
  async asyncData({ $docs, params, store, error, app }) {
    const slug = params.slug || 'hello-world'
    const path = `/${app.i18n.locale}/examples/${slug}`
    let data = { docLink: `https://github.com/nuxt/docs/blob/master${path}.md` }
    if (app.i18n.locale === 'ru') {
      data.docLink = `https://github.com/translation-gang/ru.docs.nuxtjs/blob/translation-ru${path}.md`
    } else if (app.i18n.locale === 'cn') {
      data.docLink = `https://github.com/o2team/i18n-cn-nuxtjs-docs/blob/dev${path}.md`
    }
    try {
      let page = await $docs.get(path)
      data.attrs = page.attrs
      data.body = page.body
      if (!data.attrs.title) console.error(`[/${path}] ${store.state.lang.text.please_define_title}.`) // eslint-disable-line no-console
      if (!data.attrs.description) console.error(`[/${path}] ${store.state.lang.text.please_define_description}.`) // eslint-disable-line no-console
    } catch (err) {
      if (err.response.status !== 404) {
        return error({ statusCode: 500, message: store.state.lang.text.an_error_occurred })
      }
      return error({ statusCode: 404, message: store.state.lang.text.api_page_not_found })
    }
    return data
  },
  scrollToTop: true,
  head() {
    return {
      title: this.attrs.title,
      titleTemplate: '%s - Nuxt.js',
      meta: [
        { hid: 'description', name: 'description', content: this.attrs.description }
      ]
    }
  },
  components: {
    nuiAds,
    nuiAffix
  }
}
</script>
>>>>>>> 2fb6a223 (sponsors and flat routes with header links)
