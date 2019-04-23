<template>
  <div>
    <code-fund-ads :key="$route.params.slug"/>
    <h1>{{ attrs.title }}</h1>
    <responsive-video v-if="attrs.youtube" :src="attrs.youtube"/>
    <html-parser :content="body"/>
    <contribute :doc-link="docLink"/>
  </div>
</template>

<script>
import ResponsiveVideo from '~/components/ResponsiveVideo.vue'
import CodeFundAds from '~/components/CodeFundAds.vue'
import HtmlParser from '~/components/HtmlParser.vue'
import Contribute from '~/components/Contribute.vue'

export default {
  async asyncData({ $docs, route, store, error }) {
    // Default data
    let data = {
      attrs: {},
      body: '',
      docLink: ''
    }
    const slug = route.params.slug || 'index'
    const path = `/${store.state.lang.iso}/guide/${slug}`
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
    data.docLink = `https://github.com/nuxt/docs/blob/master${path}.md`
    if (store.state.lang.iso === 'ru') {
      data.docLink = `https://github.com/translation-gang/ru.docs.nuxtjs/blob/translation-ru${path}.md`
    } else if (store.state.lang.iso === 'cn') {
      data.docLink = `https://github.com/o2team/i18n-cn-nuxtjs-docs/blob/dev${path}.md`
    }
    if (!data.attrs.title) console.error(`[/${path}] ${store.state.lang.text.please_define_title}.`) // eslint-disable-line no-console
    if (!data.attrs.description) console.error(`[/${path}] ${store.state.lang.text.please_define_description}.`) // eslint-disable-line no-console
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
    ResponsiveVideo,
    CodeFundAds,
    HtmlParser,
    Contribute
  }
}
</script>
