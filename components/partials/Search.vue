<template>
  <div>
    <nui-search-icon class="block absolute text-gray-600 z-10 h-4 mt-3 ml-3 fill-current" />
    <input
      id="algolia"
      v-model="q"
      class="nui-search-input"
      type="text"
      name="search"
      :placeholder="$store.state.lang.text.search"
    >
  </div>
</template>

<script>
import nuiSearchIcon from '@/components/svg/Search'

let scriptInjected = false
const callbacks = []
const onScriptLoaded = cb => callbacks.push(cb)
const scriptLoaded = () => callbacks.forEach(cb => cb())

export default {
  components: {
    nuiSearchIcon
  },
  data () {
    return {
      q: ''
    }
  },
  mounted () {
    onScriptLoaded(() => this.addInstantSearch())
    if (scriptInjected) { return }
    // Load JS
    const script = document.createElement('script')
    script.setAttribute('type', 'text/javascript')
    script.setAttribute('src', '//cdn.jsdelivr.net/docsearch.js/2/docsearch.min.js')
    document.getElementsByTagName('body')[0].appendChild(script)
    script.onload = scriptLoaded
    // Load CSS
    const link = document.createElement('link')
    link.setAttribute('rel', 'stylesheet')
    link.setAttribute('type', 'text/css')
    link.setAttribute('href', 'https://cdn.jsdelivr.net/docsearch.js/2/docsearch.min.css')
    document.getElementsByTagName('body')[0].appendChild(link)
    scriptInjected = true
  },
  methods: {
    addInstantSearch () {
      window.docsearch({
        apiKey: process.env.DOC_SEARCH_API_KEY,
        indexName: 'nuxtjs',
        inputSelector: '#algolia',
        algoliaOptions: { 'facetFilters': [`tags:${this.$store.state.locale}`] },
        debug: true // Set debug to true if you want to inspect the dropdown
      })
    },
    reset () {
      // todo call API
      this.q = ''
    }
  }
}
</script>

<style lang="scss">
.nui-search-input {
  @apply bg-gray-200 text-nuxt-gray font-medium px-4 pl-10 rounded-full h-10 outline-none;
  ::placeholder {
    @apply text-gray-600;
  }
}
</style>
