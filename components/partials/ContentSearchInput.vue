<template>
  <div
    class="content-wrapper relative"
    :class="[focused ? 'focused' : 'blurred', !q && 'blurred', appearance]"
  >
    <SearchIcon
      class="block absolute z-10 h-4 mt-3 ml-3 fill-current text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary transition-colors duration-300 ease-linear"
    />
    <input
      :id="`content-${appearance}`"
      :ref="`content-${appearance}`"
      v-model="q"
      class="nui-search-input px-4 pl-10 rounded-full h-10 outline-none w-full font-medium transition-colors duration-300 ease-linear"
      type="text"
      :name="`search-${appearance}`"
      :placeholder="$t('header.search.placeholder')"
      @focus="focusHandler"
      @blur="blurHandler"
    />
    <button
      v-if="q || appearance === 'mobile'"
      class="absolute right-0 top-0 block outline-none flex h-full px-4 items-center justify-center text-nuxt-gray dark:text-dark-onSurfaceSecondary hover:text-nuxt-lightgreen dark:hover:text-nuxt-lightgreen z-10"
      aria-label="Clear input"
      @click="handleCloseClick"
    >
      <TimesIcon class="block h-5 fill-current transition-colors duration-300 ease-linear" />
    </button>
    <ContentSearchResult v-if="focused && q.length > 0" :results="results" />
  </div>
</template>

<script>
import SearchIcon from '~/assets/icons/search.svg?inline'
import TimesIcon from '~/assets/icons/times.svg?inline'

export default {
  components: {
    SearchIcon,
    TimesIcon
  },
  props: {
    appearance: {
      type: String,
      default: 'default'
    }
  },
  data () {
    return {
      q: '',
      focused: false,
      search: null,
      results: []
    }
  },
  watch: {
    async q (q) {
      if (!q) {
        this.results = []
        return
      }
      this.results = await this.$content(`${this.$i18n.locale}`, { deep: true })
        .limit(12)
        .only(['title', 'path', 'dir', 'category'])
        .search(q)
        .fetch()
    }
  },
  mounted () {
    if (this.appearance === 'mobile') {
      this.$refs['content-mobile'].focus()
    }
    document.addEventListener('keypress', (e) => {
      if (e.keyCode === 47) {
        e.preventDefault()
        document.getElementById(`content-${this.appearance}`).focus()
      }
    })
  },
  methods: {
    resetInputValue () {
      this.q = ''
      if (this.search) {
        this.search.autocomplete.autocomplete.setVal('')
      }
    },
    handleCloseClick () {
      this.resetInputValue()
      if (this.search) {
        this.search.autocomplete.autocomplete.close()
      }
      if (this.appearance === 'mobile') {
        this.$emit('close-search')
      } else {
        this.$refs[`content-${this.appearance}`].focus()
      }
    },
    focusHandler () {
      this.focused = true
    },
    blurHandler () {
      this.focused = false
      if (this.search) {
        this.search.autocomplete.autocomplete.close()
      }
    }
  }
}
</script>

<style lang="scss">
.light-mode .content-wrapper {
  .nui-search-input {
    background-color: theme("colors.gray.200") !important;
    color: theme("colors.nuxt.gray") !important;
  }
}

.dark-mode .content-wrapper {
  .nui-search-input {
    background-color: theme("colors.dark.surface") !important;
    color: theme("colors.dark.onSurfaceSecondary") !important;
  }
}

.content-wrapper {
  ::placeholder {
    @apply opacity-50;
  }
}

</style>
