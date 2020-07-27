import Clipboard from 'clipboard'

export default {
  mounted() {
    window.onNuxtReady(() => {
      setTimeout(() => {
        const blocks = document.getElementsByClassName('nuxt-content-highlight')
        for (const block of blocks) {
          const pre = block.getElementsByTagName('pre')[0]
          const button = document.createElement('button')
          button.textContent = 'Copy'
          button.className = 'copy'
          pre.appendChild(button)
        }
        const copyCode = new Clipboard('.copy', {
          target(trigger) {
            return trigger.previousElementSibling
          }
        })

        copyCode.on('success', function (event) {
          event.clearSelection()
          event.trigger.textContent = 'Copied!'
          window.setTimeout(function () {
            event.trigger.textContent = 'Copy'
          }, 2000)
        })
      }, 100)
    })
  }
}
