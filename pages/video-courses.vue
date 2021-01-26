<template>
  <div class="shadow-nuxt">
    <div class="container mx-auto px-4 pt-16">
      <div class="flex flex-wrap justify-between mb-8">
        <div class="lg:w-6/12 lg:text-left text-center p-4 sm:p-0">
          <i18n
            path="video-courses.title"
            tag="h1"
            class="text-3xl xl:text-4xl text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary font-medium leading-normal mb-6 lg:pt-4"
          >
            {{ $t('video-courses.title') }}
            <template #nuxt>
              <AppTitle />
            </template>
          </i18n>
          <h3
            class="xl:text-lg text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary font-medium leading-relaxed mb-8"
          >
            {{ $t('video-courses.description') }}
          </h3>
          <AppButton
            href="https://masteringnuxt.com/?utm_source=nuxt&utm_medium=link&utm_campaign=navbar_link"
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
        <div
          v-for="course in courses"
          :key="course.title"
          class="w-full p-4 relative"
        >
          <span
            class="bg-orange-500 text-white dark:text-black text-ss px-1 rounded-sm lowercase absolute m-2 right-0 mr-6"
          >
            {{ course.type }}
          </span>
          <div
            class="flex flex-col md:flex-row block w-full h-full items-center pr-6 bg-light-surface hover:bg-gray-200 dark:bg-dark-surface rounded transition-colors duration-300 ease-linear"
          >
            <div class="w-full p-6 order-2 md:order-1">
              <h4
                class="inline w-full font-medium text-xl pb-2 text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear"
              >
                {{ course.title }}
              </h4>
              <span class="inline"> on {{ course.platform }}</span>
              <p class="mb-3 text-gray-600">
                {{ course.description }}
              </p>
              <AppButton
                :href="course.link"
                rel="noopener sponsored"
                target="_blank"
                class="md:mr-4 p-3 mt-3 text-sm text-left block"
              >
                <PlayCircleIcon slot="icon" class="h-4 -mb-1 mr-1" />
                {{ $t('video-courses.cta.start') }}
              </AppButton>
            </div>
            <img
              :src="'/courses/' + course.img + '.png'"
              :srcset="'/courses/' + course.img + '-2x.png 2x'"
              :alt="course.title"
              class="block w-auto rounded pt-6 px-6 md:py-8 md:px-0 order-1 md:order-2 self-start"
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
          title: 'Learn Nuxt.js by Building a Real World App',
          description:
            'Learn how to build robust, modern websites with Nuxt from scratch. Or improve your website performance, code quality, while making better use of the framework.',
          link:
            'https://masteringnuxt.com/?utm_source=nuxt&utm_medium=link&utm_campaign=navbar_link',
          img: 'mastering-nuxt',
          platform: 'Mastering Nuxt',
          type: 'premium'
        },
        {
          title: 'Get Started with Nuxt',
          description:
            'Learn the essentials for how to build and deploy a Nuxt site including dnyamic routes, data fetching, SEO, lazy loading, global styles and transitions as well as how to generate and deploy your Nuxt app.',
          link: 'https://explorers.netlify.com/learn/get-started-with-nuxt',
          img: 'get-started-with-nuxt',
          platform: 'Jamstack Explorers',
          type: 'free'
        },
        {
          title: 'Learn Nuxt with Debbie',
          description:
            'A playlist of YouTube videos covering all things Nuxt including short videos and live streams.',
          link: 'https://www.youtube.com/c/DebbieOBrien',
          img: 'learn-nuxt-with-debbie',
          platform: 'YouTube',
          type: 'free'
        },
        {
          title: 'Building Applications with Vue & Nuxt',
          description:
            'Build dynamic web applications with Vue and Nuxt! Throughout the course you’ll build out a variety of projects leveraging the tools in the Vue ecosystem including the Vue CLI, Nuxt, Vuex Store, and more.',
          link: 'https://frontendmasters.com/courses/vue-nuxt-apps/',
          img: 'building-applications-with-vue-and-nuxt',
          platform: 'Frontend Masters',
          type: 'premium'
        },
        {
          title: 'Build a Job Board with Laravel, GraphQL, Nuxt and Apollo',
          description:
            'Learn while you build a GraphQL API with Laravel Lighthouse, then build a Nuxt frontend with Apollo to consume it. All styled with Tailwind.',
          link:
            'https://codecourse.com/courses/build-a-job-board-with-laravel-graphql-nuxt-and-apollo',
          img: 'build-job-board-with-nuxt',
          platform: 'Code Course',
          type: 'premium'
        },

        {
          title: 'Nuxt.js - Vue.js on Steroids',
          description:
            'Build highly engaging Vue JS apps with Nuxt.js. Nuxt adds easy server-side-rendering and a folder-based config approach.',
          link: 'https://www.udemy.com/course/nuxtjs-vuejs-on-steroids/',
          img: 'nuxt-vue-steroids',
          platform: 'Udemy',
          type: 'premium'
        },
        {
          title: 'Scaling Vue with Nuxt.js',
          description:
            'Once you are comfortable with Vue, learning a framework like Nuxt allows you to create production-ready web apps which follow best practices.',
          link:
            'https://www.vuemastery.com/courses/scaling-vue-with-nuxt-js/why-use-nuxt',
          img: 'scaling-vue-with-nuxt',
          platform: 'Vue Mastery',
          type: 'premium'
        },
        {
          title: 'Nuxt.js Fundamentals',
          description:
            'Learn the fundamentals of Nuxt.js in this course that we created together with the founders of Nuxt. The course covers what you need to know from scaffolding to deploying your first Nuxt.js application.',
          link:
            'https://vueschool.io/courses/nuxtjs-fundamentals?friend=nuxt&utm_source=Nuxtjs.org&utm_medium=Link&utm_content=Courses&utm_campaign=nuxtjs-fundamentals',
          img: 'nuxt-fundamentals',
          platform: 'Vue School',
          type: 'free'
        },
        {
          title: 'Create a News App with Vue.js and Nuxt',
          description:
            'You will learn how to create dynamic pages for each section of your application and load, store, display, filter, and style the data. Then end result will be a News app with multiple category pages, comments for each section, and user pages.',
          link:
            'https://egghead.io/courses/create-a-news-app-with-vue-js-and-nuxt',
          img: 'create-news-app-with-vue-and-nuxt',
          platform: 'egghead',
          type: 'free'
        }
        // {
        //   title: 'Build a Server Rendered Vue.js App with Nuxt and Vuex',
        //   description:
        //     'This course will start with an empty app and walk through how to use Vue.js for building the app, Nuxt.js for organizing the app, and Vuex for managing state.',
        //   link:
        //     'https://egghead.io/courses/build-a-server-rendered-vue-js-app-with-nuxt-and-vuex',
        //   img: 'build-server-rendered-app-with-nuxt',
        //   platform: 'egghead'
        // },
        // {
        //   title: 'Async Data with Nuxt.js',
        //   description:
        //     'Learn how to manage asynchronous data and render your application server-side with Nuxt.js.',
        //   link:
        //     'https://vueschool.io/courses/async-data-with-nuxtjs?friend=nuxt&utm_source=Nuxtjs.org&utm_medium=Link&utm_content=Courses&utm_campaign=async-data',
        //   img: 'async-data-with-nuxtjs'
        // },
        // {
        //   title: 'Static Site Generation with Nuxt.js',
        //   description:
        //     'Learn how to generate static websites (pre-rendering) with Nuxt.js to improve both performance and SEO while eliminating hosting costs.',
        //   link:
        //     'https://vueschool.io/courses/static-site-generation-with-nuxtjs?friend=nuxt&utm_source=Nuxtjs.org&utm_medium=Link&utm_content=Courses&utm_campaign=static-site-generation',
        //   img: 'static-site-generation-with-nuxtjs'
        // }
      ]
    }
  },
  head() {
    const title = this.$t('video-courses.meta.title')
    const description = this.$t('video-courses.meta.description')

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
