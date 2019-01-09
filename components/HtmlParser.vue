<template>
  <div v-html="content">
  </div>
</template>

<script>
export default {
  props: ['content'],
  mounted() {
    this.$nextTick(this.addListeners)
  },
  beforeDestroy() {
    this.removeListeners()
  },
  watch: {
    'content': 'contentUpdated'
  },
  methods: {
    navigate(event) {
      let target = event.target
      let i = 0

      // Go throught 5 parents max to find a tag
      while (i < 5 && !(target instanceof HTMLAnchorElement) && target.parentNode) {
        target = target.parentNode
        i++
      }
      // If target is still not a link, ignore
      if (!(target instanceof HTMLAnchorElement))
        return

      const href = target.getAttribute('href')

      // Get link target, if local link, navigate with router link
      if (href && href[0] === '/') {
        event.preventDefault()
        this.$router.push(href)
      }
      // If Google Analytics is activated & is external link
      else if (this.$ga) {
        // https://developers.google.com/analytics/devguides/collection/analyticsjs/events
        this.$ga('send', 'event', 'Outbound Link', 'click', target.href)
      }
    },
    contentUpdated() {
      this.removeListeners()
      this.$nextTick(() => {
        this.addListeners()
      })
    },
    addListeners() {
      this._links = this.$el.getElementsByTagName('a')
      for (let i = 0; i < this._links.length; i++) {
        this._links[i].addEventListener('click', this.navigate, false)
      }
    },
    removeListeners() {
      for (let i = 0; i < this._links.length; i++) {
        this._links[i].removeEventListener('click', this.navigate, false)
      }
      this._links = []
    }
  }
}
</script>
