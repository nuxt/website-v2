<template>
  <div class="shadow-nuxt">
    <div class="container mx-auto px-4 pt-16">
      <div class="flex flex-wrap justify-between mb-8">
        <div class="lg:w-6/12 lg:text-left text-center p-4 sm:p-0">
          <h1
            class="text-3xl xl:text-4xl text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary font-medium leading-normal mb-6 lg:pt-4"
          >
            <AppTitle /> {{ $t('video-courses.title') }}<br />
          </h1>
          <h3
            class="xl:text-lg text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary font-medium leading-relaxed mb-8"
          >
            {{ $t('video-courses.description') }}
          </h3>
          <AppButton
            href="https://vueschool.io/?friend=nuxt&utm_source=Nuxtjs.org&utm_medium=Link&utm_content=HomeHero&utm_content=V1"
            rel="noopener sponsored"
            target="_blank"
            class="sm:mr-4 py-3 px-6 text-base mb-4"
          >
            <MeteorIcon slot="icon" class="h-5 -mb-1 mr-1" />
            {{ $t('video-courses.cta.discover') }}
          </AppButton>
        </div>
        <ThemesIllustration
          class="w-2/3 mx-auto lg:mx-0 lg:w-5/12 lg:-mt-8 text-light-elevatedSurface dark:text-dark-elevatedSurface"
        />
      </div>
      <section class="flex flex-wrap items-stretch -mx-4">
        <div v-for="course in courses" :key="course.title" class="w-full p-4">
          <div
            class="block sm:flex w-full h-full items-center pr-6 bg-light-surface hover:bg-gray-200 dark:bg-dark-surface rounded transition-colors duration-300 ease-linear"
          >
            <div class="w-full p-6">
              <h4
                class="block w-full font-medium text-xl pb-2 text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear"
              >
                {{ course.title }}
              </h4>
              <p class="mb-3 text-gray-600">
                {{ course.description }}
              </p>
              <AppButton
                :href="course.link"
                rel="noopener sponsored"
                target="_blank"
                class="sm:mr-4 p-3 mt-3 text-sm text-left"
              >
                <PlayCircleIcon slot="icon" class="h-4 -mb-1 mr-1" />
                {{ $t('video-courses.cta.start') }}
              </AppButton>
            </div>
            <img
              :src="'/courses/' + course.img + '.png'"
              :srcset="'/courses/' + course.img + '-2x.png 2x'"
              :alt="course.title"
              class="block w-auto rounded"
            />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import ThemesIllustration from '~/assets/illustrations/themes.svg?inline'
import PlayCircleIcon from '~/assets/icons/play-circle.svg?inline'
import MeteorIcon from '~/assets/icons/meteor.svg?inline'

export default {
  components: {
    ThemesIllustration,
    PlayCircleIcon,
    MeteorIcon
  },
  data() {
    return {
      courses: [
        {
          title: 'Nuxt.js Fundamentals',
          description:
            'Learn the fundamentals of Nuxt.js in this course that we created together with the founders of Nuxt. The course covers what you need to know from scaffolding to deploying your first Nuxt.js application.',
          link:
            'https://vueschool.io/courses/nuxtjs-fundamentals?friend=nuxt&utm_source=Nuxtjs.org&utm_medium=Link&utm_content=Courses&utm_campaign=nuxtjs-fundamentals',
          img: 'nuxt-fundamentals'
        },
        {
          title: 'Async Data with Nuxt.js',
          description:
            'Learn how to manage asynchronous data and render your application server-side with Nuxt.js.',
          link:
            'https://vueschool.io/courses/async-data-with-nuxtjs?friend=nuxt&utm_source=Nuxtjs.org&utm_medium=Link&utm_content=Courses&utm_campaign=async-data',
          img: 'async-data-with-nuxtjs'
        },
        {
          title: 'Static Site Generation with Nuxt.js',
          description:
            'Learn how to generate static websites (pre-rendering) with Nuxt.js to improve both performance and SEO while eliminating hosting costs.',
          link:
            'https://vueschool.io/courses/static-site-generation-with-nuxtjs?friend=nuxt&utm_source=Nuxtjs.org&utm_medium=Link&utm_content=Courses&utm_campaign=static-site-generation',
          img: 'static-site-generation-with-nuxtjs'
        }
      ]
    }
  },
  head() {
    const title = 'NuxtJS Video Courses'
    const description =
      'With the video courses below created by our partner VueSchool you can discover and learn more about the Nuxt.js Framework.'

    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description
        },
        // Twitter Card
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: description
        }
      ]
    }
  }
}
</script>

<style></style>
