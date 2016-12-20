<template>
  <html-parser class="Content" :content="body"></html-parser>
</template>

<script>
import marked, { Renderer } from 'marked'
import highlightjs from 'highlight.js'
import fm from 'front-matter'

import HtmlParser from '~components/HtmlParser.vue'

export default {
  data ({ route, store }, callback) {
    // Default data
    let data = {
      content: '',
      path: route.params.slug || 'index'
    }
    const path = '/docs/' + store.state.lang.iso + '/' + route.params.category + '/' + data.path + '.md'
    if (process.BROWSER_BUILD) {
      fetch(path)
      .then((response) => {
        const contenType = response.headers.get('content-type') || ''
        const requestOK = (response.status >= 200 && response.status < 300)
        if (!requestOK || contenType.indexOf('text/x-markdown') === -1) {
          throw new Error('API page not found')
        }
        return response.text()
      })
      .then((content) => {
        data.content = content
        callback(null, data)
      })
      .catch((e) => {
        callback({ statusCode: 404, message: 'API page not found' }, data)
      })
    } else {
      require('fs').readFile('static' + path, 'utf8', function (err, content) {
        if (err) return callback({ statusCode: 404, message: 'Documentation page not found' })
        data.content = content
        callback(null, data)
      })
    }
  },
  computed: {
    page () { return fm(this.content) },
    body () { return marked(this.page.body) }
  },
  head () {
    return {
      title: this.page.attributes.title || 'No title',
      titleTemplate: 'API: %s - Nuxt.js'
    }
  },
  components: {
    HtmlParser
  }
}
</script>
