<template>
  <div class="-mx-4 lg:mx-0 flex flex-col-reverse lg:flex-row">
    <div class="lg:min-h-screen w-full py-8 px-4 lg:static lg:overflow-visible lg:max-h-full lg:w-3/4" @mouseover="$store.dispatch('focusMode')" @mouseleave="$store.dispatch('clearFocusMode')">
      <article>
        <h1>{{ $store.state.lang.guide.release_notes }}</h1>
        <div v-for="release in releases" :key="release.name">
          <div class="group flex items-center justify-between cursor-pointer" @click="showRelease(release.name)">
            <h2 :id="release.name" class="text-3xl my-4 text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary group-hover:text-primary-base" :class="{ 'text-nuxt-green': show === release.name }">
              <a class="anchor" aria-hidden="true" :href="'#'+release.name"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-link" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>
              {{ release.name }}
            </h2>
            <span class="text-gray-500 group-hover:text-gray-600" :class="{ 'text-gray-600': show === release.name }">
              Released on <time :datetime="release.date" :title="new Date(release.date).toString()">{{ release.date | dateFormat }}</time>
            </span>
          </div>
          <AppHtmlParser v-show="show === release.name" class="bg-light-surface dark:bg-dark-surface px-4 pb-4 break-words" :content="release.body" />
        </div>
        <AppContribute/>
      </article>
    </div>
    <AffixBlock class="opacity-transition" :class="{ 'opacity-25': $store.state.focusMode }">
      <AdsBlock key="release-notes" class="mx-auto" />
    </AffixBlock>
  </div>
</template>

<script>

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
      isDev,
      show: releases[0].name
    }
  },
  beforeMount () {
    if (this.$route.hash.length > 1) {
      this.show = this.$route.hash.slice(1)
    }
  },
  methods: {
    showRelease (name) {
      this.$router.push(this.$route.path + '#' + name)
      this.show = name
    }
  },
  head () {
    return {
      title: 'Release Notes',
      titleTemplate: '%s - Nuxt.js',
      meta: [
        { hid: 'description', name: 'description', content: 'Nuxt.js release notes.' },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: 'Release Notes' },
        { hid: 'og:description', property: 'og:description', content: 'Nuxt.js release notes.' },
        // Twitter Card
        { hid: 'twitter:title', name: 'twitter:title', content: 'Release Notes' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Nuxt.js release notes.' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
article h1 {
  @apply font-medium relative text-3xl table mb-8;
  &::after {
    content: " ";
    width: 80%;
    @apply block border-2 border-nuxt-lightgreen mt-2 mb-1 rounded;
  }
}

h2,
h3,
h4,
h5,
h6 {
  & a.anchor {
    @apply float-left;
    margin-left: -1.5rem;
    & svg {
      vertical-align: middle;
      visibility: hidden;
    }
  }
  &:hover {
    & a.anchor svg {
      visibility: visible;
    }
  }
}
</style>
