<template>
  <div>
    <carbon-ads v-if="!isDev && $store.state.locale === 'en'" :key="$route.params.slug"></carbon-ads>
    <h1>{{ $store.state.lang.guide.release_notes }}</h1>
    <div v-for="release in releases" :key="release.name">
      <h2 :id="release.name">{{ release.name }}</h2>
      <html-parser class="Release__Content" v-html="release.body"></html-parser>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import CarbonAds from '~/components/CarbonAds.vue'
import HtmlParser from '~/components/HtmlParser.vue'

export default {
  async asyncData({ isDev, store }) {
    // Default data
    let data = {
      releases: [],
      isDev: isDev
    }
    const res = await axios.get(store.state.apiURI + '/releases')
    data.releases = res.data
    return data
  },
  head() {
    return {
      title: 'Release Notes',
      titleTemplate: '%s - Nuxt.js',
      meta: [
        { hid: 'description', name: 'description', content: 'Nuxt.js release notes from Github.' }
      ]
    }
  },
  components: {
    CarbonAds,
    HtmlParser
  }
}
</script>
