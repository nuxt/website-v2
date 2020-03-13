<template>
  <div class="algolia-wrapper">
    <nui-search-icon class="block absolute z-10 h-4 mt-3 ml-3 fill-current text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary transition-colors duration-300 ease-linear" />
    <input
      id="algolia"
      v-model="q"
      class="nui-search-input bg-gray-200 text-nuxt-gray dark:bg-dark-surface dark:text-dark-onSurfaceSecondary font-medium transition-colors duration-300 ease-linear"
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
    const mousetrap = require('mousetrap')
    mousetrap.bind('/', function (e) {
      e.preventDefault()
      document.getElementById('algolia').focus()
    })

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
        algoliaOptions: { facetFilters: [`tags:${this.$store.state.locale}`] },
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

<style lang="scss" scoped>
.nui-search-input {
  @apply px-4 pl-10 rounded-full h-10 outline-none w-full;
  &::placeholder {
    @apply opacity-50;
  }
}
</style>

<style lang="scss">
/* purgecss start ignore */

[data-theme='light'] .algolia-wrapper .algolia-autocomplete .ds-dropdown-menu {
  @apply shadow-lg;
  &:before {
    border-color: theme('colors.gray.300');
    background-color: theme('colors.light.elevatedSurface');
  }
  [class^=ds-dataset-] {
    background-color: theme('colors.light.elevatedSurface');
    border-color: theme('colors.gray.300');
  }
  .algolia-docsearch-suggestion {
    background-color: theme('colors.light.elevatedSurface');
  }
  .algolia-docsearch-suggestion--category-header {
    & span {
      color: theme('colors.light.onSurfacePrimary');
    }
  }
  .algolia-docsearch-suggestion--title {
    color: theme('colors.light.onSurfacePrimary');
  }
  .algolia-docsearch-suggestion--subcategory-column {
    color: theme('colors.light.onSurfaceSecondary');
  }
  .algolia-docsearch-suggestion--text {
    color: theme('colors.light.onSurfacePrimary');
  }
}

[data-theme='dark'] .algolia-wrapper .algolia-autocomplete .ds-dropdown-menu {
  @apply shadow-2xl;
  &:before {
    border-color: theme('colors.gray.900');
    background-color: theme('colors.dark.elevatedSurface');
  }
  [class^=ds-dataset-] {
    background-color: theme('colors.dark.elevatedSurface');
    border-color: theme('colors.gray.900');
  }
  .algolia-docsearch-suggestion {
    background-color: theme('colors.dark.elevatedSurface');
  }
  .algolia-docsearch-suggestion--category-header {
    border-color: #618092;
    & span {
      color: theme('colors.dark.onSurfacePrimary');
    }
  }
  .algolia-docsearch-suggestion--title {
    color: theme('colors.dark.onSurfacePrimary');
  }
  .algolia-docsearch-suggestion--subcategory-column {
    color: theme('colors.dark.onSurfaceSecondary');
  }
  .algolia-docsearch-suggestion--text {
    color: theme('colors.dark.onSurfacePrimary');
  }
  .algolia-docsearch-suggestion--content:before {
    background: #618092;
  }
}

.algolia-wrapper .algolia-autocomplete .ds-dropdown-menu {
  @apply rounded;
  [class^=ds-dataset-] {
    @apply rounded;
  }
}

.algolia-autocomplete {
  display: block !important;
  height: inherit;
}
.ds-dropdown-menu {
  // margin: 0;
  // min-width: 100%;
  width: 100%;
  // max-width: 100%;
  line-height: normal;
  // border-radius: 0;
  // box-shadow: none;
  // border-color: red;
}
.ds-dataset-0 {
  border-radius: 0;
}

.algolia-docsearch-suggestion--wrapper {
  padding-top: 0;
  & .algolia-docsearch-suggestion--subcategory-column {
    height: 100%;
    color: #35495e;
    padding: 10px 15px;
  }
  & .algolia-docsearch-suggestion--content {
    padding: 10px 15px;
    & .algolia-docsearch-suggestion--title {
      // color: #35495e;
      & .algolia-docsearch-suggestion--highlight {
        color: theme('colors.primary.base');
        background-color: transparent;
      }
    }
  }
}
/* purgecss end ignore */
</style>
