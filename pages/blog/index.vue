<template>
  <div class="shadow-nuxt">
    <div class="container mx-auto px-4 pt-16 pb-8">
      <div class="flex flex-wrap justify-between mb-8">
        <div class="lg:w-6/12 lg:text-left text-center p-4 sm:p-0">
          <h1
            class="text-3xl xl:text-4xl text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary font-medium leading-normal mb-6 lg:pt-4"
          >
            <AppTitle />
            Blog
          </h1>

          <!--blog description i18n -->
          <i18n
            path="blog.description"
            tag="h3"
            class="xl:text-lg light:text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary font-medium leading-relaxed mb-6"
          >
            <template v-slot:nuxtTeam>
              <NuxtLink
                class="text-nuxt-green underline"
                to="/team#nuxtCompany"
              >
                NuxtJS team
              </NuxtLink>
            </template>
            <template v-slot:ambassadors>
              <NuxtLink
                class="text-nuxt-green underline"
                to="/team#nuxtCommunity"
              >
                Nuxt.js Community
              </NuxtLink>
            </template>
          </i18n>
        </div>
        <DesignIllustration
          class="w-2/3 mx-auto lg:mx-0 lg:w-5/12 lg:-mt-8 text-light-elevatedSurface dark:text-dark-elevatedSurface"
        />
      </div>
      <section>
        <BlogpostPreviewItem
          v-for="(post, index) in posts"
          :key="index"
          :post="post"
        />
      </section>
    </div>
  </div>
</template>

<script>
import DesignIllustration from '~/assets/illustrations/design.svg?inline'

export default {
  components: {
    DesignIllustration
  },
  async asyncData({ $content, app }) {
    let posts = await $content(app.i18n.defaultLocale, 'blog')
      .sortBy('date', 'desc')
      .fetch()

    if (app.i18n.defaultLocale !== app.i18n.locale) {
      try {
        const newPosts = await $content(app.i18n.locale, 'blog')
          .sortBy('date', 'desc')
          .fetch()

        posts = posts.map(post => {
          const newPost = newPosts.find(newPost => newPost.slug === post.slug)

          return newPost || post
        })
      } catch (err) {}
    }
    return {
      posts
    }
  },
  head() {
    return {
      title: this.$i18n.t('blog.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$i18n.t('blog.description')
        },
        // Open Graph
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.$i18n.t('blog.title')
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$i18n.t('blog.description')
        },
        // // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.$i18n.t('blog.title')
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.$i18n.t('blog.description')
        }
      ]
    }
  }
}
</script>

<style></style>
