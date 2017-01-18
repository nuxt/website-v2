<template>
  <div class="Search">
    <input class="Search__Input" type="text" name="search" :id="label" :placeholder="$store.state.lang.text.search" v-model="q"/>
    <label :for="label" class="Search__Label" @click="q = ''">
      <div :class="{'icon search': !q.length, 'icon remove': q.length}"></div>
    </label>
  </div>
</template>

<script>
let scriptInjected = false
let callbacks = []
let onScriptLoaded = (cb) => callbacks.push(cb)
let scriptLoaded = () => callbacks.forEach((cb) => cb())

export default {
  props: {
    label: String
  },
  data () {
    return {
      q: ''
    }
  },
  mounted () {
    onScriptLoaded(() => this.addInstantSearch())
    if (scriptInjected) return
    const script = document.createElement('script')
    script.setAttribute('type', 'text/javascript')
    script.setAttribute('src', '//cdn.jsdelivr.net/docsearch.js/2/docsearch.min.js')
    document.getElementsByTagName('body')[0].appendChild(script)
    script.onload = scriptLoaded
    scriptInjected = true
  },
  methods: {
    addInstantSearch () {
      window.docsearch({
        apiKey: process.env.docSearchApiKey,
        indexName: 'nuxtjs',
        inputSelector: `#${this.label}`,
        algoliaOptions: { 'facetFilters': [`tags:${this.$store.state._lang}`] },
        debug: true // Set debug to true if you want to inspect the dropdown
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.Search
{
  height: 100%;
  position: relative;
  &__Input
  {
    width: 100%;
    display: block;
    border: none;
    font-weight: 400;
    height: 100%;
    color: #35495e;
    font-size: 16px;
    padding: 0 15px;
    letter-spacing: 0.5px;
    padding-right: 50px;
    background-color: #fff;
    @media (min-width: 991px)
    {
      padding-left: 30px;
    }
  }
  &__Label
  {
    cursor: pointer;
    width: 35px;
    height: 100%;
    padding: 0 5px;
    padding-top: 20px;
    position: absolute;
    float: right;
    top: 0;
    right: 10px;
    @media (min-width: 991px)
    {
      padding-top: 30px;
    }
  }
}
</style>
