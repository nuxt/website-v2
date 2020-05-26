<template>
  <div v-html="content" />
  <!-- <component :is="{template: content}" /> -->
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

      // Go through 5 parents max to find a tag
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
/* purgecss start ignore */
.light-mode div ::v-deep {
  h2, h3, p {
    color: theme('colors.light.onSurfacePrimary');
  }
  blockquote {
    color: theme('colors.light.onSurfaceSecondary');
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
  // inline code snippet
  & code {
    @apply bg-gray-100 text-red-500;
  }
  & pre {
    background-color: theme('colors.dark.elevatedSurface');
    code {
      color: theme('colors.dark.onSurfacePrimary');
    }
  }
  // code snippet block
  & pre {
    code {
      @apply bg-transparent;
      color: theme('colors.dark.onSurfacePrimary');
    }
  }
  & .Alert {
    @apply bg-blue-100 text-light-onSurfacePrimary;
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
  .Promote {
    // @apply shadow-md;
    background-color: theme('colors.gray.200');
    .Promote__Content {
      .Promote__Content__Title {
        color: theme('colors.light.onSurfacePrimary');
      }
      .Promote__Content__Description {
        color: theme('colors.light.onSurfaceSecondary');
      }
      .Promote__Content__Signature {
        @apply text-gray-500;
      }
    }
    &:hover {
      // @apply shadow-lg;
      background-color: theme('colors.gray.300');
      text-decoration: none;
    }
  }
}

.dark-mode div ::v-deep {
  h2, h3, p {
    color: theme('colors.dark.onSurfacePrimary');
  }
  & blockquote {
    color: theme('colors.dark.onSurfaceSecondary');
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
  // inline code snippet
  & code {
    @apply bg-gray-800;
    color: #E1E8F5;
  }
  // code snippet block
  & pre {
    background-color: #1E344C;
    code {
      @apply bg-transparent;
      color: theme('colors.dark.onSurfacePrimary');
    }
  }
  & .Alert {
    // @apply bg-gray-600 text-dark-onSurfacePrimary;
    background-color: #205D80;
    & a {
      @apply text-blue-300;
    }
    & code {
      @apply text-blue-800 bg-blue-200;
    }
    &.Alert--orange {
      // @apply bg-orange-200;
      background-color: #4c4c4c;
      & a {
        @apply text-orange-600;
      }
      & code {
        @apply text-orange-800 bg-orange-200;
      }
    }
  }
  .Promote {
    @apply shadow-md;
    background: theme('colors.dark.surface');
    .Promote__Content {
      .Promote__Content__Title {
        color: theme('colors.dark.onSurfacePrimary');
      }
      .Promote__Content__Description {
        color: theme('colors.dark.onSurfaceSecondary');
      }
      .Promote__Content__Signature {
        @apply text-gray-500;
      }
    }
    &:hover {
      @apply shadow-lg;
      background-color: #233344;
      text-decoration: none;
    }
  }
}

div ::v-deep {
  img {
    @apply rounded;
    margin: auto;
  }
  video {
    width: 100%;
  }
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
  p {
    @apply leading-relaxed py-1 mb-2 transition-colors duration-300 ease-linear;
  }
  & li p {
    @apply inline-block;
  }
  & blockquote {
    @apply italic leading-loose;
  }
  & code {
    @apply p-1 not-italic rounded text-sm;
  }
  & a {
    overflow-wrap: break-word;
    &:hover {
      @apply underline;
    }
  }
  // code snippet block
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
    @apply px-4 py-2 rounded my-4;
    p {
      @apply mb-0;
    }
  }
  & .Promote {
    @apply flex flex-col p-4 my-4 rounded;
    & img {
      width: 100%;
      height: auto;
      @apply mb-3 rounded;
      @screen sm {
        max-width: 240px;
        @apply mb-0;
      }
    }
    & .Promote__Content {
      & .Promote__Content__Title {
        @apply text-xl;
      }
      & .Promote__Content__Description {
        @apply leading-relaxed py-1 pb-4 text-sm;
      }
      & .Promote__Content__Signature {
        @apply text-xs m-0 p-0 leading-none;
      }
    }
    @screen sm {
      @apply flex-row;
      & .Promote__Content {
        @apply pl-4;
      }
    }
  }
}

// lists
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

// code highlight
div ::v-deep {
  /* Ocean Dark Theme */
  /* https://github.com/gavsiu */
  /* Original theme - https://github.com/chriskempson/base16 */

  /* Ocean Comment */
  .hljs-comment,
  .hljs-quote {
    color: #9ca1a5;
  }

  /* Ocean Red */
  .hljs-variable,
  .hljs-template-variable,
  .hljs-tag,
  .hljs-name,
  .hljs-selector-id,
  .hljs-selector-class,
  .hljs-regexp,
  .hljs-deletion {
    color: #f99595;
  }

  /* Ocean Orange */
  .hljs-number,
  .hljs-built_in,
  .hljs-builtin-name,
  .hljs-literal,
  .hljs-type,
  .hljs-params,
  .hljs-meta,
  .hljs-link {
    color: #f56565;
  }

  /* Ocean Yellow */
  .hljs-attr {
    color: #88aaff;
  }

  /* Ocean Green */
  .hljs-string,
  .hljs-symbol,
  .hljs-bullet,
  .hljs-addition {
    color: #00C58E;
  }

  /* Ocean Blue */
  .hljs-title,
  .hljs-section {
    color: #8fa1b3;
  }

  /* Ocean Purple */
  .hljs-keyword,
  .hljs-selector-tag {
    color: #b48ead;
  }

  .hljs {
    display: block;
    overflow-x: auto;
    background: transparent;
    color: white;
    padding: 0.5em;
  }

  .hljs-emphasis {
    font-style: italic;
  }

  .hljs-strong {
    font-weight: bold;
  }

}
/* purgecss end ignore */
</style>
