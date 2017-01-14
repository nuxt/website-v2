<template>
  <div>
    <carbon-ads v-if="!isDev && $store.state._lang === 'en'" :key="$route.params.slug"></carbon-ads>
    <h1>{{ $store.state.lang.guide.release_notes }}</h1>
    <div v-for="release in releases">
      <h2 :id="release.name">{{ release.name }}</h2>
      <html-parser class="Release__Content" v-html="release.body"></html-parser>
    </div>
  </div>
</template>

<script>
import marked from 'marked'
import axios from 'axios'

import CarbonAds from '~components/CarbonAds.vue'
import HtmlParser from '~components/HtmlParser.vue'

export default {
  data ({ isDev }) {
    // Default data
    let data = {
      releases: [],
      isDev: isDev
    }
    return axios({
      url: 'https://api.github.com/repos/nuxt/nuxt.js/releases',
      headers: {
        'Authorization': `token ${process.env.githubToken}`
      }
    })
    .then((res) => {
      data.releases = res.data.filter((r) => !r.draft).map((release) => {
        return {
          name: release.name,
          date: release.published_at,
          body: marked(release.body)
        }
      })
      return data
    })
  },
  head () {
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
