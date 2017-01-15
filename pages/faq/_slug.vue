<template>
  <div>
    <carbon-ads v-if="!isDev && $store.state._lang === 'en'" :key="$route.params.slug"></carbon-ads>
    <html-parser :content="body"></html-parser>
    <p class="contribute">{{ $store.state.lang.guide.contribute }} <a :href="docLink" target="_blank">{{ $store.state.lang.guide.edit_on_github }}</a></p>
  </div>
</template>

<script>
import axios from 'axios'
import CarbonAds from '~components/CarbonAds.vue'
import HtmlParser from '~components/HtmlParser.vue'

export default {
  async data ({ route, store, error, isDev }) {
    // Default data
    let data = {
      attrs: {},
      body: '',
      docLink: '',
      isDev: isDev
    }
    const slug = route.params.slug || 'external-resources'
    const path = `/${store.state.lang.iso}/faq/${slug}`
    let res
    try {
      res = await axios.get(store.state.apiURI + path)
    } catch (err) {
      if (err.response.status !== 404) {
        return error({ statusCode: 500, message: 'An error occured' })
      }
      return error({ statusCode: 404, message: 'API page not found' })
    }
    data.attrs = res.data.attrs
    data.body = res.data.body
    data.docLink = `https://github.com/nuxt/docs/blob/master${path}.md`
    if (store.state.lang.iso === 'ru') {
      data.docLink = `https://github.com/translation-gang/ru.docs.nuxtjs/blob/translation-ru${path}.md`
    }
    if (!data.attrs.title) console.error(`[${path}] Please define a title in the front matter.`) // eslint-disable-line no-console
    if (!data.attrs.description) console.error(`[${path}] Please define a description in the front matter.`) // eslint-disable-line no-console
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
    HtmlParser,
    CarbonAds
  }
}
</script>
