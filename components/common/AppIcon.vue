<template>
  <component :is="iconComponent" />
</template>

<script>
const icons = {
  angleDoubleRight: require('~/assets/icons/angle-double-right.svg?inline'),
  api: require('~/assets/icons/list.svg?inline'),
  arrowLeft: require('~/assets/icons/arrow-left.svg?inline'),
  arrowRight: require('~/assets/icons/arrow-right.svg?inline'),
  bch: require('~/assets/icons/bch.svg?inline'),
  blog: require('~/assets/icons/blog.svg?inline'),
  btc: require('~/assets/icons/btc.svg?inline'),
  caretDown: require('~/assets/icons/caret-down.svg?inline'),
  chevronDown: require('~/assets/icons/chevron-down.svg?inline'),
  chevronRight: require('~/assets/icons/chevron-right.svg?inline'),
  comments: require('~/assets/icons/comments.svg?inline'),
  eth: require('~/assets/icons/eth.svg?inline'),
  examples: require('~/assets/icons/code.svg?inline'),
  faq: require('~/assets/icons/faq.svg?inline'),
  fire: require('~/assets/icons/fire.svg?inline'),
  github: require('~/assets/icons/github.svg?inline'),
  globe: require('~/assets/icons/globe.svg?inline'),
  guide: require('~/assets/icons/books.svg?inline'),
  ltc: require('~/assets/icons/ltc.svg?inline'),
  inboxIn: require('~/assets/icons/inbox-in.svg?inline'),
  meteor: require('~/assets/icons/meteor.svg?inline'),
  moon: require('~/assets/icons/moon.svg?inline'),
  openCollective: require('~/assets/icons/open-collective.svg?inline'),
  playCircle: require('~/assets/icons/play-circle.svg?inline'),
  resources: require('~/assets/icons/resources.svg?inline'),
  search: require('~/assets/icons/search.svg?inline'),
  snow: require('~/assets/icons/snow.svg?inline'),
  sun: require('~/assets/icons/sun.svg?inline'),
  system: require('~/assets/icons/system.svg?inline'),
  times: require('~/assets/icons/times.svg?inline'),
  twitter: require('~/assets/icons/twitter.svg?inline'),
  website: require('~/assets/icons/link.svg?inline'),
  xmarkCircle: require('~/assets/icons/xmark-circle.svg?inline')
}

export default {
  props: {
    name: {
      type: String,
      required: true,
      validator(value) {
        return Object.prototype.hasOwnProperty.call(icons, value)
      }
    }
  },
  computed: {
    iconComponent() {
      return icons[this.name]
    }
  }
}
</script>
