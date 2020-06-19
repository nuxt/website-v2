
<template>
  <div class="-mx-4 lg:mx-0 flex flex-col-reverse lg:flex-row">
    <div
      class="lg:min-h-screen w-full py-8 px-4 lg:static lg:overflow-visible lg:max-h-full lg:w-3/4"
      @mouseover="$store.dispatch('focusMode')"
      @mouseleave="$store.dispatch('clearFocusMode')"
    >
      <!-- <div v-if="page.langFallback" class="p-4 mb-6 rounded bg-orange-200 dark:text-light-onSurfacePrimary">
        ⚠️ You are looking at the english version of the page. Help us translate it <a :href="docLink" class="text-orange-600">here</a>.
      </div> -->
      <article>
        <h1
          class="text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear"
        >
          {{ doc.title }}
        </h1>
        <nuxt-content :document="doc" />
        <EditOnGithub :document="doc" />
        <LazyArticlePrevNext
          :prev="prev"
          :next="next"
          section="guides"
          :book="book"
          class="lg:px-8 mt-4"
        />
        <AppContributeNewDocs :doc-link="docLink" :contributors="contributors" />
      </article>
    </div>
    <ArticleToc
      v-if="doc.toc && doc.toc.length"
      class="opacity-transition"
      :class="{ 'opacity-25': $store.state.focusMode }"
      :toc="doc.toc"
    />
  </div>
</template>

<script>
import shuffle from 'lodash/shuffle'

export default {
  name: 'PageSlug',
  scrollToTop: true,
  middleware ({ params, redirect }) {
    if (params.slug === 'index') {
      redirect('/')
    }
  },
  async asyncData ({ $content, store, app, params, error, router }) {
    const { book, slug } = params
    let doc
    try {
      doc = await $content(store.state.locale, 'guides', book, slug).fetch()
    } catch (e) {
      return error({ statusCode: 404, message: 'Page not found' })
    }

    const [prev, next] = await $content(store.state.locale, 'guides', book)
      .only(['title', 'slug'])
      .sortBy('position', 'asc')
      .surround(slug, { before: 1, after: 1 })
      .fetch()

    if (doc && doc.questions) {
      doc.questions = shuffle(doc.questions.map(question => ({ ...question, answers: shuffle(question.answers) })))
    }

    return {
      doc,
      book,
      slug,
      prev,
      next
    }
  },
  head () {
    return {
      title: this.doc.title,
      meta: [
        { hid: 'description', name: 'description', content: this.doc.description },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.doc.title },
        { hid: 'og:description', property: 'og:description', content: this.doc.description },
        // Twitter Card
        { hid: 'twitter:title', name: 'twitter:title', content: this.doc.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.doc.description }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
article h1 {
  @apply font-medium relative text-3xl table mb-8;
  &::after {
    content: " ";
    width: 80%;
    @apply block border-2 border-nuxt-lightgreen mt-2 mb-1 rounded;
  }
}

h2,
h3,
h4,
h5,
h6 {
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

.light-mode div ::v-deep {
  h2,
  h3,
  p {
    color: theme("colors.light.onSurfacePrimary");
  }
  blockquote {
    color: theme("colors.light.onSurfaceSecondary");
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
    background-color: theme("colors.dark.elevatedSurface");
    code {
      color: theme("colors.dark.onSurfacePrimary");
    }
  }
  // code snippet block
  & pre {
    code {
      @apply bg-transparent;
      color: theme("colors.dark.onSurfacePrimary");
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
    background-color: theme("colors.gray.200");
    .Promote__Content {
      .Promote__Content__Title {
        color: theme("colors.light.onSurfacePrimary");
      }
      .Promote__Content__Description {
        color: theme("colors.light.onSurfaceSecondary");
      }
      .Promote__Content__Signature {
        @apply text-gray-500;
      }
    }
    &:hover {
      // @apply shadow-lg;
      background-color: theme("colors.gray.300");
      text-decoration: none;
    }
  }
}

.dark-mode div ::v-deep {
  h2,
  h3,
  p {
    color: theme("colors.dark.onSurfacePrimary");
  }
  & blockquote {
    color: theme("colors.dark.onSurfaceSecondary");
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
    color: #e1e8f5;
  }
  // code snippet block
  & pre {
    background-color: #1e344c;
    code {
      @apply bg-transparent;
      color: theme("colors.dark.onSurfacePrimary");
    }
  }
  & .Alert {
    // @apply bg-gray-600 text-dark-onSurfacePrimary;
    background-color: #205d80;
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
    background: theme("colors.dark.surface");
    .Promote__Content {
      .Promote__Content__Title {
        color: theme("colors.dark.onSurfacePrimary");
      }
      .Promote__Content__Description {
        color: theme("colors.dark.onSurfaceSecondary");
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
      content: " ";
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
      content: " ";
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
  & ul,
  & ol {
    @apply list-inside py-1 pl-1;
    & li {
      @apply py-2;
    }
    & ul,
    & ol {
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
  /* purgecss start ignore */

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
    color: #00c58e;
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
  /* purgecss end ignore */
}
</style>
