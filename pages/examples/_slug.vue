<template>
  <div>
    <code-fund-ads :key="$route.params.slug" />
    <h1>{{ attrs.title }}</h1>
    <blockquote>
      <p>{{ attrs.description }}</p>
    </blockquote>
    <div class="video" v-if="attrs.youtube">
      <iframe class="youtube" :src="attrs.youtube" frameborder="0" allowfullscreen></iframe>
    </div>
    <h2>{{ $store.state.lang.examples.source_code }}</h2>
    <iframe :src="codeSandBoxLink" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden; margin-bottom: 20px;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
    <div>
      <a :href="liveEditLink" class="button button--grey" target="_blank">
        <span>
          <div class="icon edit"></div>
        </span>
        {{ $store.state.lang.links.live_edit }}
      </a>
      <a :href="downloadLink" class="button button--grey" target="_blank">
        <span>
          <div class="icon download"></div>
        </span>
        {{ $store.state.lang.links.download }}
      </a>
      <nuxt-link v-if="attrs.documentation" :to="attrs.documentation" class="button button--grey">
        {{ $store.state.lang.links.documentation }}
      </nuxt-link>
    </div>
    <html-parser :content="body" />
  </div>
</template>

<script>
import axios from 'axios'
import CodeFundAds from '~/components/CodeFundAds.vue'
import NuxtFilesTree from '~/components/FilesTree.vue'
import HtmlParser from '~/components/HtmlParser.vue'

export default {
  async asyncData({ route, store, error }) {
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
    }
    data.attrs = res.data.attrs
    data.body = res.data.body
    if (!data.attrs.title) console.error(`[${path}] ${store.state.lang.text.please_define_title}.`) // eslint-disable-line no-console
    if (!data.attrs.description) console.error(`[${path}] ${store.state.lang.text.please_define_description}.`) // eslint-disable-line no-console

    return data
  },
  computed: {
    codeSandBox() {
      return `https://codesandbox.io`
    },
    codeSandBoxLink() {
      return `${this.codeSandBox}/embed/github/nuxt/nuxt.js/tree/dev/examples/${this.attrs.github}?autoresize=1&view=editor`
    },
    liveEditLink() {
      return `${this.codeSandBox}/s/github/nuxt/nuxt.js/tree/dev/examples/${this.attrs.github}?from-embed`
    },
    downloadLink() {
      return 'https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/nuxt/nuxt.js/tree/dev/examples/' + this.attrs.github
    }
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
    CodeFundAds,
    NuxtFilesTree,
    HtmlParser
  }
}
</script>

<style lang="scss" scoped>
.button {
  margin-bottom: 15px;
  margin-right: 15px;
  .icon,
  .icon:before,
  .icon:after {
    color: #fff;
  }
}
</style>
