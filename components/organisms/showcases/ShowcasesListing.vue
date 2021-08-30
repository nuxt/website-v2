<template>
  <div class="d-container-content mt-8">
    <div v-if="categories && categories.length" class="lg:flex gap-8">
      <AsideShowcases :options="categories" :selected="selectedCategory || categories[0]" @selected="(category) => selectCategory(category)" />

      <div class="w-full px-4 md:px-0 lg:w-4/5 min-w-0 min-h-0 lg:static lg:overflow-visible mt-8 grid md:grid-cols-2 gap-8 lg:ml-20 auto-rows-min">
        <div v-for="showcase in selectedShowcases" :key="showcase.id">
          <ShowcasesCard :showcase="showcase" />
        </div>
      </div>
    </div>

    <div v-else class="text-center">{{ $t('showcases.loading') }}</div>
  </div>
</template>

<script>
import uniqBy from 'lodash/uniqBy'

import { useShowcases } from '../../../plugins/showcases'

export default {
  props: {
    id: {
      type: [Number, String],
      required: true
    }
  },
  data () {
    return {
      showcases: null,
      selectedCategory: ''
    }
  },
  computed: {
    selectedShowcases () {
      return uniqBy(this.showcases?.groups
        ?.filter((group, index) => (!this.selectedCategory && index === 0) || group.name === this.selectedCategory)
        ?.map(group => ({
          ...group,
          showcases: group.showcases.map(showcase => ({
            ...showcase
          }))
        }))
        ?.flatMap(group => group.showcases)
        ?.sort((a, b) => Number(a.rank) - Number(b.rank)) || [], 'id')
    },
    categories () {
      return this.showcases?.groups?.map(group => group.name) || []
    }
  },
  watch: {
    selectedCategory (value) {
      // TOFIX: should use router but not scroll
      // this.$router.push({ hash: value })
      const url = this.$route.path
      let hash = ''
      if (value) {
        hash = `#${value}`
      }
      window.history.pushState('', '', `${url}${hash}`)
    },
    '$route.hash' (hash) {
      this.selectedCategory = (hash || '').substr(1)
    }
  },
  methods: {
    selectCategory (category) {
      if (category === this.selectedCategory) {
        return
      }
      if (category === this.categories[0]) {
        this.selectedCategory = ''
      } else {
        this.selectedCategory = category
      }
    }
  },
  async fetch () {
    const { fetch: fetchShowcases, showcases } = useShowcases({ id: this.id })
    this.showcases = (await fetchShowcases()).value
    this.selectedCategory = (this.$route.hash || '').substr(1)
  }
}
</script>
