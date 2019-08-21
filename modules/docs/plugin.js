import Vue from 'vue'

// Extends nuxt-link to track the links
if (process.server && process.static) {
  if (!Vue.__mixin_nuxt_links__) {
    Vue.__mixin_nuxt_links__ = true
    Vue.mixin({
      created () {
        if (this.$options.name === 'NuxtLink' && this.to) {
          const { href } = this.$router.resolve(this.to, this.$route, this.append)
          const links = this.$ssrContext.links = this.$ssrContext.links || []
          if (!links.includes(href)) {
            links.push(href)
          }
        }
      }
    })
  }
}

export default (ctx, inject) => {
  if (process.client && process.static) {
    return
  }
  const $docs = {
    get (path) {
      return fetch('<%= options.url %>' + path).then((response) => {
        if (!response.ok) {
          const error = new Error(response.statusText)
          error.response = response
          throw error
        }
        return response.json()
      })
    }
  }
  inject('docs', $docs)
  ctx.$docs = $docs
}
