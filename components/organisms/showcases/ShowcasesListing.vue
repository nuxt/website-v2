<template>
  <div class="d-container-content">
    <div v-if="categories && categories.length">
      <div class="mt-8 flex flex-wrap gap-2">
        <button
          v-for="(category, index) in categories"
          :key="category"
          class="border border-black dark:border-white rounded-full px-3 py-0.5 focus:outline-none"
          :class="{
            'bg-black dark:bg-white text-white dark:text-black': category === selectedCategory || (!selectedCategory && index === 0)
          }"
          @click="selectCategory(category)"
        >
          {{ category }}
        </button>
      </div>

      <div class="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-min">
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
      this.$router.push({ hash: value })
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
