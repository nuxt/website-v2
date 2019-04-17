<template>
  <div class="nui-headerSearch">
    <div class="icon" :class="{'search': !q.length, 'close': q.length}" @click="reset"></div>
    <input type="text" name="search" v-model="q" id="algolia" :placeholder="$store.state.lang.text.search" />
  </div>
</template>

<script>
let scriptInjected = false
let callbacks = []
let onScriptLoaded = (cb) => callbacks.push(cb)
let scriptLoaded = () => callbacks.forEach((cb) => cb())

export default {
  data () {
    return {
      q: ''
    }
  },
  mounted() {
    onScriptLoaded(() => this.addInstantSearch())
    if (scriptInjected) return
    // Load JS
    const script = document.createElement('script')
    script.setAttribute('type', 'text/javascript')
    script.setAttribute('src', '//cdn.jsdelivr.net/docsearch.js/2/docsearch.min.js')
    document.getElementsByTagName('body')[0].appendChild(script)
    script.onload = scriptLoaded
    // Load CSS
    var link = document.createElement('link')
    link.setAttribute('rel', 'stylesheet')
    link.setAttribute('type', 'text/css')
    link.setAttribute('href', 'https://cdn.jsdelivr.net/docsearch.js/2/docsearch.min.css')
    document.getElementsByTagName('body')[0].appendChild(link)
    scriptInjected = true
  },
  methods: {
    addInstantSearch() {
      window.docsearch({
        apiKey: process.env.docSearchApiKey,
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
$light_grey: #F1F5F8;
$grey: #606F7B;

.nui-headerSearch {
  input {
    color: $grey;
    font-size: 1rem;
    font-weight: 500;
    font-family: 'Quicksand';
    background-color: $light_grey;
    height: 36px;
    border-radius: 18px;
    border: none;
    padding: 0 1rem;
    padding-left: 2.5rem;
  }
  ::placeholder {
    color: $grey;
  }
  .icon {
    z-index: 10;
    color: $grey;
    position: absolute;
  }
  .search.icon {
    margin-top: 10px;
    margin-left: 11px;
    width: 10px;
    height: 10px;
    border: solid 2px currentColor;
    border-radius: 100%;
    -webkit-transform: rotate(-45deg);
            transform: rotate(-45deg);
    &:before {
      content: '';
      position: absolute;
      top: 12px;
      left: 4px;
      height: 6px;
      width: 2px;
      border-radius: 2px;
      background-color: currentColor;
    }
  }
  .close.icon {
    cursor: pointer;
    margin-top: 8px;
    margin-left: 11px;
    width: 18px;
    height: 18px;
    &:before {
      content: '';
      position: absolute;
      top: 10px;
      width: 18px;
      height: 2px;
      border-radius: 2px;
      background-color: currentColor;
      -webkit-transform: rotate(-45deg);
              transform: rotate(-45deg);
    }
    &:after {
      content: '';
      position: absolute;
      top: 10px;
      width: 18px;
      height: 2px;
      border-radius: 2px;
      background-color: currentColor;
      -webkit-transform: rotate(45deg);
              transform: rotate(45deg);
    }
  }
}
</style>
