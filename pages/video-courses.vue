<template>
  <nui-container class="pt-16">
    <div class="flex flex-wrap justify-between mb-8">
      <div class="lg:w-6/12 lg:text-left text-center p-4 sm:p-0">
        <h1 class="text-3xl xl:text-4xl text-nuxt-gray font-medium leading-normal mb-6 lg:pt-4">
          NUXT<span class="text-nuxt-lightgreen">JS</span> Video Courses<br>
        </h1>
        <h3 class="xl:text-lg text-gray-600 font-medium leading-relaxed mb-8">
          With the video courses below created by our partner <a>VueSchool</a> you can discover and learn more about the Nuxt.js Framework.
        </h3>
        <nui-button href="https://vueschool.io/?friend=nuxt&utm_source=Nuxtjs.org&utm_medium=Link&utm_content=HomeHero&utm_content=V1" rel="noopener sponsored" target="_blank" class="sm:mr-4 py-3 px-6 text-base mb-4">
          <nui-svg-meteor slot="icon" class="h-5 -mb-1 mr-1" />
          Discover vueschool
        </nui-button>
      </div>
      <i-themes class="w-2/3 mx-auto lg:mx-0 lg:w-5/12 lg:-mt-8"/>
    </div>
    <section class="flex flex-wrap items-stretch -mx-4">
      <div v-for="course in courses" :key="course.title" class="w-full p-4">
        <div class="block sm:flex w-full h-full items-center pr-6 bg-gray-100 hover:bg-gray-200 rounded">
          <div class="w-full p-6">
            <h4 class="block w-full font-medium text-xl pb-2">
              {{ course.title }}
            </h4>
            <p class="mb-3 text-gray-600">{{ course.description }}</p>
            <nui-button :href="course.link" rel="noopener sponsored" target="_blank" class="sm:mr-4 p-3 mt-3 text-sm text-left">
              <nui-svg-play slot="icon" class="h-4 -mb-1 mr-1" />
              START COURSE
            </nui-button>
          </div>
          <img :src="'/courses/' + course.img + '.png'" :srcset="'/courses/' + course.img + '-2x.png 2x'" :alt="course.title" class="block w-auto rounded">
        </div>
      </div>
    </section>
  </nui-container>
</template>

<script>
import iThemes from '@/components/svg/fogg/themes'
import nuiSvgPlay from '@/components/svg/PlayCircle'
import nuiSvgMeteor from '@/components/svg/Meteor.vue'

export default {
  components: {
    iThemes,
    nuiSvgPlay,
    nuiSvgMeteor
  },
  head: {
    title: 'NuxtJS Video Courses',
    meta: [
      { hid: 'description', name: 'description', content: '' }
    ]
  },
  data () {
    return {
      courses: [
        {
          title: 'Nuxt.js Fundamentals',
          description: 'Learn the fundamentals of Nuxt.js in this course that we created together with the founders of Nuxt. The course covers what you need to know from scaffolding to deploying your first Nuxt.js application.',
          link: 'https://vueschool.io/courses/nuxtjs-fundamentals?friend=nuxt&utm_source=Nuxtjs.org&utm_medium=Link&utm_content=Courses&utm_campaign=nuxtjs-fundamentals',
          img: 'nuxt-fundamentals'
        },
        {
          title: 'Async Data with Nuxt.js',
          description: 'Learn how to manage asynchronous data and render your application server-side with Nuxt.js.',
          link: 'https://vueschool.io/courses/async-data-with-nuxtjs?friend=nuxt&utm_source=Nuxtjs.org&utm_medium=Link&utm_content=Courses&utm_campaign=async-data',
          img: 'async-data-with-nuxtjs'
        },
        {
          title: 'Static Site Generation with Nuxt.js',
          description: 'Learn how to generate static websites (pre-rendering) with Nuxt.js to improve both performance and SEO while eliminating hosting costs.',
          link: 'https://vueschool.io/courses/static-site-generation-with-nuxtjs?friend=nuxt&utm_source=Nuxtjs.org&utm_medium=Link&utm_content=Courses&utm_campaign=static-site-generation',
          img: 'static-site-generation-with-nuxtjs'
        }
      ]
    }
  }
}
</script>

<style>

</style>
