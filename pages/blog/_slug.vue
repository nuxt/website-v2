<template>
  <div class="">
    <div class="container lg:max-w-4xl mx-auto p-4 pb-8">
      <div v-if="post.langFallback" class="p-4 mb-6 rounded bg-orange-200 dark:text-light-onSurfacePrimary">
        ⚠️ You are looking at the english version of the page. Help us translate it <a :href="docLink" class="text-orange-600">here</a>.
      </div>
      <NuxtLink :to="{ name: 'blog' }" class="inline-flex items-center dark:hover:text-nuxt-lightgreen light:hover:text-nuxt-lightgreen dark:text-dark-onSurfaceSecondary light:text-light-onSurfaceSecondary">
        <ArrowLeftIcon class="h-5 mr-2"/>
        back to blog list
      </NuxtLink>
      <BlogpostItem :post="post" />
      <BlogpostNavigationLinks :links="post.links" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ArrowLeftIcon from '@/assets/icons/arrow-left.svg?inline'

export default {
  components: {
    ArrowLeftIcon
  },
  async asyncData ({ $docs, params, store, error }) {
    const slug = params.slug
    const path = `/${store.state.locale}/blog/${slug}`
    const data = {
      path,
      post: {}
    }
    try {
      const post = await $docs.get(path)
      if (!post.title) { console.error(`[/${path}] ${store.state.lang.text.please_define_title}.`) } // eslint-disable-line no-console
      if (!post.description) { console.error(`[/${path}] ${store.state.lang.text.please_define_description}.`) } // eslint-disable-line no-console
      data.post = post
    } catch (err) {
      if (!err.response || err.response.status !== 404) {
        return error({ statusCode: 500, message: store.state.lang.text.an_error_occurred })
      }
      return error({ statusCode: 404, message: store.state.lang.text.api_page_not_found })
    }
    return data
  },
  computed: {
    ...mapState({
      host: state => state.host,
      isDev: state => state.isDev,
      isTest: state => state.isTest,
      isProd: state => state.isProd
    }),
    docLink () {
      let docLink = `https://github.com/nuxt/docs/blob/master/${this.post.path}`
      if (this.$store.state.locale === 'ru') {
        docLink = `https://github.com/translation-gang/ru.docs.nuxtjs/blob/translation-ru/${this.post.path}`
      } else if (this.$store.state.locale === 'cn') {
        docLink = `https://github.com/o2team/i18n-cn-nuxtjs-docs/blob/dev/${this.post.path}`
      }
      return docLink
    },
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
