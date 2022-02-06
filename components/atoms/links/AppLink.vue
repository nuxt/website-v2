<template>
  <Link v-bind="attrs" @click.native="copyEmailToClipboard">
    <slot />
  </Link>
</template>

<script>
import { defineComponent, useContext, computed } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    to: {
      type: String,
      default: ''
    },
    href: {
      type: String,
      default: ''
    },
    blank: {
      type: Boolean,
      default: true
    },
    rel: {
      type: String,
      default: 'noopener nofollow noreferrer'
    }
  },
  setup(props) {
    const { i18n, $clipboard } = useContext()

    const attrs = computed(() => {
      if (props.href.length) {
        return {
          to: props.href,
          blank: props.blank,
          static: true,
          rel: props.rel
        }
      } else {
        return {
          to: props.to,
          blank: props.blank
        }
      }
    })

    function copyEmailToClipboard(e) {
      let email
      if (props.href?.startsWith('mailto:')) {
        email = props.href.replace('mailto:', '')
      } else if (props.to?.startsWith('mailto:')) {
        email = props.to.replace('mailto:', '')
      }

      if (email) {
        if ($clipboard.copy(email, i18n.t('common.email_address_copied'))) {
          // Clipboard supported
          e.preventDefault()
        }
      }
    }

    return {
      copyEmailToClipboard,
      attrs
    }
  }
})
</script>
