<template>
  <div>
    <div v-for="release in releases" :key="release.name">
      <div
        class="group flex items-center justify-between cursor-pointer"
        @click="showRelease(release.name)"
      >
        <h2
          :id="release.name"
          class="text-3xl my-4 text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary group-hover:text-primary-base"
          :class="{ 'text-nuxt-green': show === release.name }"
        >
          <NuxtLink class="anchor" aria-hidden="true" :to="'#'+release.name">
            <svg
              version="1.1"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              class="octicon octicon-link"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
              />
            </svg>
          </NuxtLink>
          {{ release.name }}
        </h2>
        <span
          class="text-gray-500 group-hover:text-gray-600"
          :class="{ 'text-gray-600': show === release.name }"
        >
          Released on
          <time
            :datetime="release.date"
            :title="new Date(release.date).toString()"
          >{{ release.date | dateFormat }}</time>
        </span>
      </div>
      <div
        v-show="show === release.name"
        class="bg-light-surface dark:bg-dark-surface px-4 pb-4 break-words"
        v-html="release.body"
      />
    </div>
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
  async fetch () {
    this.releases = await this.getReleases()
    this.show = this.releases[0].name
  },
  data () {
    return {
      releases: [],
      show: null
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
    },
    async getReleases () {
      const options = {}
      if (process.env.GITHUB_TOKEN) {
        options.headers = { Authorization: `token ${process.env.GITHUB_TOKEN}` }
      }
      let releases
      try {
        const data = await fetch('https://api.github.com/repos/nuxt/nuxt.js/releases', options).then(res => res.json())
        releases = data.filter(r => !r.draft).map((release) => {
          return {
            name: release.name || release.tag_name,
            date: release.published_at,
            body: this.$markdown(release.body)
          }
        })
      } catch (e) {
      }

      const getMajorVersion = r => r.name && Number(r.name.substring(1, 2))
      releases.sort((a, b) => {
        const aMajorVersion = getMajorVersion(a)
        const bMajorVersion = getMajorVersion(b)
        if (aMajorVersion !== bMajorVersion) {
          return bMajorVersion - aMajorVersion
        }
        return new Date(b.date) - new Date(a.date)
      })
      return releases
    }
  }
}
</script>
