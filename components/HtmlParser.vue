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
      if (href && href[0] === '#') {
        event.preventDefault()
        const el = document.getElementById(href.slice(1))
        let y = (window.outerWidth > 768) ? el.offsetTop - 160 : el.offsetTop - 120
        window.scrollTo(0, y)
      }
    }
  }
}
</script>
