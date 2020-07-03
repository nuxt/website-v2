<template>
  <div class>
    <div class="container lg:max-w-4xl mx-auto p-4 pb-8">
      <NuxtLink
        :to="localePath({ name: 'blog' })"
        class="inline-flex items-center dark:hover:text-nuxt-lightgreen light:hover:text-nuxt-lightgreen dark:text-dark-onSurfaceSecondary light:text-light-onSurfaceSecondary"
      >
        <ArrowLeftIcon class="h-5 mr-2" />back to blog list
      </NuxtLink>
      <BlogpostItem :post="post" />

      <BlogpostNavigationLinks :prev="prev" :next="next" />
      <AppContribute :doc-link="docLink" :contributors="contributors" />

    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import ArrowLeftIcon from '~/assets/icons/arrow-left.svg?inline'

export default {
  name: 'PageSlug',
  scrollToTop: true,
  components: {
    ArrowLeftIcon
  },
  middleware ({ params, redirect }) {
    if (params.slug === 'index') {
      redirect('/')
    }
  },
  async asyncData ({ $content, store, app, params, error, router }) {
    const { slug } = params
    let post
    let contributors
    const path = `/${app.i18n.locale}/blog/${slug}`

    try {
      post = await $content(app.i18n.locale, 'blog', slug).fetch()
      contributors = (await fetch('https://contributors-api.onrender.com' + path).then(res => res.json())).map(({ author }) => ({ author }))
    } catch (e) {
      return error({ statusCode: 404, message: 'Page not found' })
    }

    const [prev, next] = await $content(app.i18n.locale, 'blog')
      .only(['title', 'slug'])
      .sortBy('date', 'desc')
      .surround(slug, { before: 1, after: 1 })
      .fetch()

    return {
      post,
      slug,
      contributors,
      prev,
      next,
      path
    }
  },

  computed: {
    docLink () {
      return `https://github.com/nuxt/nuxtjs.org/blob/master/content${this.path}.md`
    },
    ...mapState({
      host: state => state.host,
      isDev: state => state.isDev,
      isTest: state => state.isTest,
      isProd: state => state.isProd
    }),
    socialImage () {
      const image = this.post.imgUrl ? this.post.imgUrl : 'nuxt-card.png'
      if (this.isTest || this.isDev) {
        return `${this.host}/${image}`
      } else {
        return `https://res.cloudinary.com/nuxt/image/upload/w_1200,h_628,c_fill,f_auto/remote/nuxt-org/${this.post.imgUrl}`
      }
    }
  },
  head () {
    return {
      title: this.post.title,
      titleTemplate: '%s - NuxtJS',
      meta: [
        { hid: 'description', name: 'description', content: this.post.description },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.post.title },
        { hid: 'og:description', property: 'og:description', content: this.post.description },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:url', property: 'og:url', content: `https://nuxtjs.org/blog/${this.post.slug}` },
        { hid: 'og:image', property: 'og:image', content: this.socialImage },
        // Twitter Card
        { hid: 'twitter:title', name: 'twitter:title', content: this.post.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.post.description },
        { hid: 'twitter:image', name: 'twitter:image', content: this.socialImage },
        { hid: 'twitter:image:', name: 'twitter:image:alt', content: this.post.imgUrl ? 'Blog post image' : 'NuxtJS' }
      ]
    }
  }
}
</script>
