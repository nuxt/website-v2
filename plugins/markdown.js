import marked from 'marked'
import sanitize from 'sanitize-html'
import highlightjs from 'highlight.js'
import octicon from 'octicons'

export default function ({ app }, inject) {
  const renderer = new marked.Renderer()

  renderer.code = (code, language) => {
    const validLang = !!(language && highlightjs.getLanguage(language))
    const highlighted = validLang ? highlightjs.highlight(language, code).value : code
    return `<pre><code class="hljs ${language}">${highlighted}</code></pre>`
  }

  renderer.heading = (text, level) => {
    const patt = /\s?{([^}]+)}$/
    let link = patt.exec(text)

    if (link && link.length && link[1]) {
      text = text.replace(patt, '')
      link = link[1]
    } else {
      link = text.toLowerCase().replace(/[^\wА-яіІїЇєЄ\u4E00-\u9EFF一-龠ぁ-ゔァ-ヴー々〆〤\u3130-\u318F\uAC00-\uD7AF]+/gi, '-')
    }
    return '<h' + level + ' id="' + link + '">' +
      '<a class="anchor" aria-hidden="true" href="#' + link + '">' +
      octicon.link.toSVG() +
      '</a>' + text + '</h' + level + '>'
  }

  const compile = (markdown) => {
    if (!markdown) {
      return
    }

    return sanitize(marked(markdown, { renderer }))
  }

  inject('markdown', compile)
}
