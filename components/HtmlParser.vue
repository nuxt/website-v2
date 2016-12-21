<template>
  <div class="Content" v-html="content"></div>
</template>

<script>
export default {
  props: ['content'],
  mounted () {
    this.addListeners()
  },
  beforeDestroy () {
    this.removeListeners()
  },
  watch: {
    'content': 'contentUpdated'
  },
  methods: {
    navigate (event) {
      const href = event.target.getAttribute('href')
      if (href && href[0] === '/') {
        event.preventDefault()
        this.$router.push(href)
      }
    },
    contentUpdated () {
      this.removeListeners()
      this.$nextTick(() => {
        this.addListeners()
      })
    },
    addListeners () {
      this._links = this.$el.getElementsByTagName('a')
      for (let i = 0; i < this._links.length; i++) {
        this._links[i].addEventListener('click', this.navigate, false)
      }
    },
    removeListeners () {
      for (let i = 0; i < this._links.length; i++) {
        this._links[i].removeEventListener('click', this.navigate, false)
      }
      this._links = []
    }
  }
}
</script>
