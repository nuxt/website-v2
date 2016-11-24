<template>
  <div></div>
</template>

<script>
export default {
  mounted () {
    const links = this.$el.getElementsByTagName('a')
    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener('click', this.navigate, false)
    }
  },
  beforeDestroy () {
    const links = this.$el.getElementsByTagName('a')
    for (let i = 0; i < links.length; i++) {
      links[i].removeEventListener('click', this.navigate, false)
    }
  },
  methods: {
    navigate (event) {
      const href = event.target.getAttribute('href')
      if (href && href[0] === '/') {
        event.preventDefault()
        this.$router.push(href)
      }
    }
  }
}
</script>
