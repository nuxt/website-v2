<template>
  <div>
    <carbon-ads :key="$route.params.slug"></carbon-ads>
    <h1>{{ attrs.title }}</h1>
    <div class="video" v-if="attrs.youtube">
      <iframe class="youtube" :src="attrs.youtube" frameborder="0" allowfullscreen></iframe>
    </div>
    <html-parser :content="body"></html-parser>
    <p class="contribute">{{ $store.state.lang.guide.contribute }} <a :href="docLink" target="_blank">{{ $store.state.lang.guide.edit_on_github }}</a></p>
  </div>
</template>

<script>
import axios from 'axios'
import CarbonAds from '~components/CarbonAds.vue'
import HtmlParser from '~components/HtmlParser.vue'

export default {
  async asyncData ({ route, store, error }) {
    // Default data
    let data = {
      attrs: {},
      body: '',
      docLink: ''
    }
    const slug = route.params.slug || 'index'
    const path = `/${store.state.lang.iso}/guide/${slug}`
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
    data.docLink = `https://github.com/nuxt/docs/blob/master${path}.md`
    if (store.state.lang.iso === 'ru') {
      data.docLink = `https://github.com/translation-gang/ru.docs.nuxtjs/blob/translation-ru${path}.md`
    } else if (store.state.lang.iso === 'cn') {
      data.docLink = `https://github.com/o2team/i18n-cn-nuxtjs-docs/blob/dev${path}.md`
    }
    if (!data.attrs.title) console.error(`[${path}] ${store.state.lang.text.please_define_title}.`) // eslint-disable-line no-console
    if (!data.attrs.description) console.error(`[${path}] ${store.state.lang.text.please_define_description}.`) // eslint-disable-line no-console
    return data
  },
  scrollToTop: true,
  head () {
    return {
      title: this.attrs.title,
      titleTemplate: '%s - Nuxt.js',
      meta: [
        { hid: 'description', name: 'description', content: this.attrs.description }
      ]
    }
  },
  components: {
    CarbonAds,
    HtmlParser
  }
}
</script>
