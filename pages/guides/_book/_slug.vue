
<template>
  <div class="-mx-4 lg:mx-0 flex flex-col-reverse lg:flex-row">
    <div
      class="lg:min-h-screen w-full py-8 px-4 lg:static lg:overflow-visible lg:max-h-full lg:w-3/4"
      @mouseover="$store.dispatch('focusMode')"
      @mouseleave="$store.dispatch('clearFocusMode')"
    >
      <!-- <div v-if="page.langFallback" class="p-4 mb-6 rounded bg-orange-200 dark:text-light-onSurfacePrimary">
        ⚠️ You are looking at the english version of the page. Help us translate it <a :href="docLink" class="text-orange-600">here</a>.
      </div>-->
      <article>
        <h1
          class="text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear"
        >{{ doc.title }}</h1>
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
      doc = await $content(app.i18n.locale, 'guides', book, slug).fetch()
    } catch (e) {
      return error({ statusCode: 404, message: 'Page not found' })
    }

    const [prev, next] = await $content(app.i18n.locale, 'guides', book)
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
</style>
