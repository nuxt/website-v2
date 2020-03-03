<template>
  <div v-html="content" />
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true
    }
  },
  watch: {
    content: 'contentUpdated'
  },
  mounted () {
    this.$nextTick(this.addListeners)
  },
  beforeDestroy () {
    this.removeListeners()
  },
  methods: {
    navigate (event) {
      let target = event.target
      let i = 0

      // Go throught 5 parents max to find a tag
      while (
        i < 5 &&
        !(target instanceof HTMLAnchorElement) &&
        target.parentNode
      ) {
        target = target.parentNode
        i++
      }
      // If target is still not a link, ignore
      if (!(target instanceof HTMLAnchorElement)) {
        return
      }

      const href = target.getAttribute('href')

      // Get link target, if local link, navigate with router link
      if (href && href[0] === '/') {
        event.preventDefault()
        this.$router.push(href)
      } else if (this.$ga) {
        // If Google Analytics is activated & is external link
        // https://developers.google.com/analytics/devguides/collection/analyticsjs/events
        this.$ga('send', 'event', 'Outbound Link', 'click', target.href)
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

<style lang="scss" scoped>
[data-theme='light'] div ::v-deep {
  & h2, &h3 {
    color: theme('colors.light.onSurfacePrimary');
  }
  & blockquote {
    color: theme('colors.light.onSurfaceSecondary');
  }
  & pre {
    background-color: theme('colors.dark.elevatedSurface');
    code {
      color: theme('colors.dark.onSurfacePrimary');
    }
  }
}

[data-theme='dark'] div ::v-deep {
  & h2, &h3 {
    color: theme('colors.dark.onSurfacePrimary');
  }
  & blockquote {
    color: theme('colors.dark.onSurfaceSecondary');
  }
  & pre {
    background-color: theme('colors.light.elevatedSurface');
    code {
      color: theme('colors.light.onSurfacePrimary');
    }
  }
}

div ::v-deep {
  & h2,
  & h3,
  & h4,
  & h5,
  & h6 {
    & a.anchor {
      @apply float-left;
      margin-left: -1.5rem;
      & svg {
        vertical-align: middle;
        visibility: hidden;
      }
    }
    &:hover {
      & a.anchor svg {
        visibility: visible;
      }
    }
  }
  & h2 {
    @apply relative text-2xl table my-8;
    &::after {
      content: ' ';
      width: 80%;
      @apply block border-2 border-nuxt-green mt-2 mb-1 rounded;
    }
    & code {
      @apply text-xl;
    }
    & a.anchor {
      @apply pt-3;
    }
  }
  & h3 {
    @apply relative text-xl table my-8;
    &::after {
      content: ' ';
      width: 80%;
      @apply block border-2 border-gray-600 mt-2 mb-1 rounded;
    }
    & code {
      @apply text-lg;
    }
    & a.anchor {
      @apply pt-2;
    }
  }
}

div ::v-deep {
  & p {
    @apply leading-loose py-1 mb-1;
  }
  & li p {
    @apply inline-block;
  }
  & blockquote {
    @apply italic leading-loose;
  }
  & code {
    @apply bg-gray-100 text-red-500 p-1 not-italic rounded text-sm;
  }
  & a {
    @apply text-nuxt-lightgreen;
    &:hover {
      @apply underline;
    }
    & code {
      @apply text-nuxt-lightgreen;
      &:hover {
        @apply text-nuxt-green;
      }
    }
  }
  & pre {
    @apply rounded p-2 my-2 overflow-auto;
    & code {
      @apply bg-transparent;
    }
  }
  & b,
  & strong {
    @apply font-bold;
  }
  & .Alert {
    @apply px-4 py-2 rounded my-4 bg-blue-100;
    & a {
      @apply text-blue-600;
    }
    & code {
      @apply text-blue-800 bg-blue-200;
    }
    &.Alert--orange {
      @apply bg-orange-100;
      & a {
        @apply text-orange-600;
      }
      & code {
        @apply text-orange-800 bg-orange-200;
      }
    }
  }
  & .Promote {
    @apply flex flex-col p-4 my-4 rounded bg-gray-200 text-gray-600;
    & img {
      width: 240px;
      height: 120px;
      @apply mb-3;
    }
    & .Promote__Content {
      & .Promote__Content__Title {
        @apply text-gray-700 text-xl;
      }
      & .Promote__Content__Description {
        @apply leading-relaxed py-1 text-sm;
      }
      & .Promote__Content__Signature {
        @apply text-xs text-gray-500 m-0 p-0;
      }
    }
    &:hover {
      @apply no-underline bg-gray-300;
    }
  }
}

@screen md {
  body article .Promote {
    @apply flex-row items-center;
    & .Promote__Content {
      @apply pl-4;
    }
  }
}

div ::v-deep {
  & ul, & ol {
    @apply list-inside py-1 pl-1;
    & li {
      @apply py-2;
    }
    & ul, & ol {
      @apply pl-4 pt-1;
    }
  }
  & ol {
    @apply list-decimal;
  }
  & ul {
    @apply list-disc;
  }
}
</style>
