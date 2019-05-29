<template>
  <nui-article>
    <code-fund-ads v-if="!isDev && $store.state.locale === ' en '" :key="$route.params.slug" />
    <h1>{{ $store.state.lang.guide.release_notes }}</h1>
    <div v-for="release in releases" :key="release.name">
      <h2 :id="release.name">
        {{ release.name }}
        <span class="Release__Date">
          Released on
          <time :datetime="release.date" :title="new Date(release.date).toString()">{{ release.date | dateFormat }}</time>
        </span>
      </h2>
      <html-parser class="Release__Content" v-html="release.body" />
    </div>
  </nui-article>
</template>

<script>
import nuiArticle from '@/components/nui/commons/Article'

import axios from 'axios'
import CodeFundAds from '~/components/CodeFundAds.vue'
import HtmlParser from '~/components/HtmlParser.vue'
const monthNames = [
  'January', 'February', 'March',
  'April', 'May', 'June', 'July',
  'August', 'September', 'October',
  'November', 'December'
]

export default {
  validate ({ params }) {
    return params.section === 'guide'
  },
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
  filters: {
    dateFormat(date) {
      date = new Date(date)

      let s = date.getDate() + ' ' + monthNames[date.getMonth()]
      if (date.getFullYear() < (new Date()).getFullYear()) {
        s += ' ' + date.getFullYear()
      }
      return s
    }
  },
  components: {
    nuiArticle,
    CodeFundAds,
    HtmlParser
  }
}
</script>

<style scoped>
.Release__Date {
  display: block;
  font-size: 16px;
}
</style>
