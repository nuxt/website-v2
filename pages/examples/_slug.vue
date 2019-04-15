<template>
  <div>
    <code-fund-ads :key="$route.params.slug" />
    <h1>{{ attrs.title }}</h1>
    <blockquote>
      <p>{{ attrs.description }}</p>
    </blockquote>
    <responsive-video v-if="attrs.youtube" :src="attrs.youtube"/>
    <h2>{{ $store.state.lang.examples.source_code }}</h2>
    <code-sandbox :src="codeSandBoxLink" style="margin-bottom: 20px;"/>
    <div>
      <a :href="liveEditLink" class="button button--grey" target="_blank" rel="noopener">
        <span>
          <div class="icon edit"></div>
        </span>
        {{ $store.state.lang.links.live_edit }}
      </a>
      <a :href="downloadLink" class="button button--grey" target="_blank" rel="noopener">
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
import ResponsiveVideo from '~/components/ResponsiveVideo.vue'
import CodeSandbox from '~/components/CodeSandbox.vue'
import CodeFundAds from '~/components/CodeFundAds.vue'
import HtmlParser from '~/components/HtmlParser.vue'

export default {
  watch: {
    '$route.params.slug': function () {
      this.attrs.github = ''
    }
  },
  async asyncData({ $docs, route, store, error }) {
    // Default data
    let data = {
      attrs: {},
      body: ''
    }
    let slug = route.params.slug || 'hello-world'
    const path = `/${store.state.lang.iso}/examples/${slug}`
    let page
    try {
      page = await $docs.get(path)
    } catch (err) {
      if (err.response.status !== 404) {
        return error({ statusCode: 500, message: store.state.lang.text.an_error_occured })
      }
      return error({ statusCode: 404, message: store.state.lang.text.api_page_not_found })
    }
    data.attrs = page.attrs
    data.body = page.body
    if (!data.attrs.title) console.error(`[${path}] ${store.state.lang.text.please_define_title}.`) // eslint-disable-line no-console
    if (!data.attrs.description) console.error(`[${path}] ${store.state.lang.text.please_define_description}.`) // eslint-disable-line no-console

    return data
  },
  computed: {
    codeSandBox() {
      return `https://codesandbox.io`
    },
    codeSandBoxLink() {
      if (!this.attrs.github) {
        return ''
      }
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
    ResponsiveVideo,
    CodeSandbox,
    CodeFundAds,
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
