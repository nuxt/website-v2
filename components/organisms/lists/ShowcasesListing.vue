<template>
  <div ref="showcases-container" class="d-container mt-8">
    <div v-if="categories && categories.length" class="lg:flex gap-8">
      <AsideShowcases
        :options="categories"
        :selected="selectedCategory || categories[0].name"
        @selected="category => selectCategory(category)"
      />

      <div
        class="
          w-full
          lg:w-4/5
          min-w-0 min-h-0
          lg:static lg:overflow-visible
          mt-8
          lg:mt-4
          grid
          md:grid-cols-2
          gap-8
          lg:ml-20
          auto-rows-min
          d-px-container
        "
      >
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

import { useShowcases } from '~/plugins/showcases'

export default {
  props: {
    id: {
      type: [Number, String],
      required: true
    }
  },
  data() {
    return {
      showcases: null,
      selectedCategory: ''
    }
  },
  async fetch() {
    const { fetch: fetchShowcases } = useShowcases({ id: this.id })
    this.showcases = (await fetchShowcases()).value
    this.selectedCategory = (this.$route.hash || '').substr(1)
  },
  computed: {
    selectedShowcases() {
      return uniqBy(
        this.showcases?.groups
          ?.filter((group, index) => (!this.selectedCategory && index === 0) || group.name === this.selectedCategory)
          ?.map(group => ({
            ...group,
            showcases: group.showcases.map(showcase => ({
              ...showcase
            }))
          }))
          ?.flatMap(group => group.showcases) || [],
        'id'
      )
    },
    categories() {
      return (
        this.showcases?.groups?.map(group => {
          const key = `showcases.categories.${group.name}`
          let display = this.$t(`showcases.categories.${group.name}`)
          // fallback on `group.name` if translation unavailable
          if (display === key) {
            display = group.name
          }
          return {
            name: group.name,
            display
          }
        }) || []
      )
    }
  },
  watch: {
    selectedCategory(value) {
      // TOFIX: should use router but not scroll
      // this.$router.push({ hash: value })
      const url = this.$route.path
      let hash = ''
      if (value) {
        hash = `#${value}`
      }
      window.history.pushState('', '', `${url}${hash}`)
    },
    '$route.hash'(hash) {
      this.selectedCategory = (hash || '').substr(1)
    }
  },
  methods: {
    selectCategory(category) {
      if (category === this.selectedCategory) {
        return
      }
      if (category === this.categories[0].name) {
        this.selectedCategory = ''
      } else {
        this.selectedCategory = category
      }

      // scroll to top of the list, handling header height
      const yOffset = 72
      const y = this.$refs['showcases-container'].getBoundingClientRect().top + window.pageYOffset - yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }
}
</script>
