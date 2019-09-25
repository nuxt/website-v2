<template>
  <div class="pt-4">
    <div class="clearfix">
      <span v-if="prevLink">← <nuxt-link :to="baseLink + prevLink.to">{{ prevLink.name }}</nuxt-link></span>
      <span v-if="nextLink" class="inline-block float-right"><nuxt-link :to="baseLink + nextLink.to">{{ nextLink.name }}</nuxt-link> →</span>
    </div>
    <div class="pt-6 mt-6 border-t border-gray-300">
      <carbon-ads-text :key="$route.path" />
      <p v-if="docLink" class="text-gray-700 p-0">{{ $store.state.lang.guide.contribute }} <a :href="docLink" target="_blank" rel="noopener">{{ $store.state.lang.guide.edit_on_github }}</a></p>
    </div>
  </div>
</template>

<script>
import CarbonAdsText from '@/components/partials/ads/CarbonText'

export default {
  components: {
    CarbonAdsText
  },
  props: {
    docLink: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
    baseLink () {
      return '/' + this.$route.params.section
    },
    list () {
      return this.$store.state.menu[this.$route.params.section].reduce((links, section) => links.concat(section.links), [])
    },
    lastPathPart () {
      return this.$route.path.replace(/\/$/, '').split('/')[2] || ''
    },
    prevLink () {
      const index = this.list.findIndex(link => (link.to || '/') === `/${this.lastPathPart}`)

      return this.list[index - 1] || null
    },
    nextLink () {
      const index = this.list.findIndex(link => (link.to || '/') === `/${this.lastPathPart}`)

      return this.list[index + 1] || null
    }
  }
}
</script>
