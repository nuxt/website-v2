<template>
  <div class="lg:flex">
    <nui-article class="min-h-screen w-full p-8 my-8 lg:static lg:max-h-full lg:overflow-visible lg:w-3/4 bg-gray-100 rounded">
      <h1>{{ $store.state.lang.guide.release_notes }}</h1>
      <div v-for="release in releases" :key="release.name">
        <h2>
          <a :id="release.name" :href="'#' + release.name" class="anchor" aria-hidden="true">{{ release.name }}</a>
          <span class="Release__Date">
            Released on
            <time :datetime="release.date" :title="new Date(release.date).toString()">{{ release.date | dateFormat }}</time>
          </span>
        </h2>
        <html-parser class="Release__Content" v-html="release.body" />
      </div>
      <!-- <responsive-video v-if="attrs.youtube" :src="attrs.youtube" />
      <html-parser :content="body" />
      <contribute :doc-link="docLink" /> -->
    </nui-article>
    <nui-affix>
      <nui-ads :key="$route.params.slug" class="mx-auto" />
    </nui-affix>
  </div>
</template>

<script>
import nuiAds from '@/components/partials/Ads'
import nuiAffix from '@/components/partials/Affix'

const monthNames = [
  'January', 'February', 'March',
  'April', 'May', 'June', 'July',
  'August', 'September', 'October',
  'November', 'December'
]

export default {
  components: {
    nuiAds,
    nuiAffix
  },
  validate ({ params }) {
    return params.section === 'guide'
  },
  filters: {
    dateFormat (date) {
      date = new Date(date)
      let s = date.getDate() + ' ' + monthNames[date.getMonth()]
      if (date.getFullYear() < (new Date()).getFullYear()) {
        s += ' ' + date.getFullYear()
      }
      return s
    }
  },
  async asyncData ({ $docs, isDev, store }) {
    const releases = await $docs.get('/releases')
    return {
      releases,
      isDev
    }
  },
  head () {
    return {
      title: 'Release Notes',
      titleTemplate: '%s - Nuxt.js',
      meta: [
        { hid: 'description', name: 'description', content: 'Nuxt.js release notes from Github.' }
      ]
    }
  }
}
</script>
