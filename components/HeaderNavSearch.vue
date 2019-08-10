<template>
  <div class="Search">
    <input id="algolia" class="Search__Input" type="text" name="search" :placeholder="$store.state.lang.text.search">
  </div>
</template>

<script>
let scriptInjected = false
const callbacks = []
const onScriptLoaded = cb => callbacks.push(cb)
const scriptLoaded = () => callbacks.forEach(cb => cb())

export default {
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
        apiKey: process.env.docSearchApiKey,
        indexName: 'nuxtjs',
        inputSelector: '#algolia',
        algoliaOptions: { 'facetFilters': [`tags:${this.$store.state.locale}`] },
        debug: true // Set debug to true if you want to inspect the dropdown
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.Search {
  width: 100%;
  height: 100%;
  position: relative;
  &__Input {
    width: 100%;
    display: block;
    border: none;
    font-weight: 400;
    height: 100%;
    color: #35495e;
    font-size: 16px;
    padding: 0 15px;
    letter-spacing: 0.5px;
    background-color: #fff;
    @media (min-width: 991px) {
      padding: 0 30px;
      border-left: 1px solid #dbdfe1;
      border-right: 1px solid #dbdfe1;
      &:focus,
      &:visited,
      &:active {
        border-left: 1px solid #dbdfe1;
        border-right: 1px solid #dbdfe1;
      }
    }
  }
}
</style>
