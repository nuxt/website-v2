<template>
  <nui-article>
    <nui-ads :key="$route.params.slug" class="float-right ml-8 mb-8 shadow"/>
    <h1>{{ attrs.title }}</h1>
    <responsive-video v-if="attrs.youtube" :src="attrs.youtube"/>
    <html-parser :content="body"/>
    <contribute :doc-link="docLink"/>
  </nui-article>
</template>

<script>
import nuiArticle from '@/components/nui/commons/Article'
import nuiAds from '@/components/nui/partials/Ads'
import ResponsiveVideo from '~/components/ResponsiveVideo.vue'
import HtmlParser from '~/components/HtmlParser.vue'
import Contribute from '~/components/Contribute.vue'

export default {
  async asyncData({ $docs, params, store, error }) {
    let defaultSlugs = { guide: 'index', api: 'index', examples: 'hello-world', faq: 'external-resources' }
    const slug = params.slug || defaultSlugs[params.section]
    const path = `/${store.state.lang.iso}/${params.section}/${slug}`
    let data = { docLink: `https://github.com/nuxt/docs/blob/master${path}.md` }
    if (store.state.lang.iso === 'ru') {
      data.docLink = `https://github.com/translation-gang/ru.docs.nuxtjs/blob/translation-ru${path}.md`
    } else if (store.state.lang.iso === 'cn') {
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
    nuiArticle,
    nuiAds,
    ResponsiveVideo,
    HtmlParser,
    Contribute
  }
}
</script>
