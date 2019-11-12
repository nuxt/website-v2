<template>
  <nui-container class="pt-16">
    <div class="flex flex-wrap justify-between mb-8">
      <div class="lg:w-6/12 lg:text-left text-center p-4 sm:p-0">
        <h1 class="text-3xl xl:text-4xl text-nuxt-gray font-medium leading-normal mb-6 lg:pt-4">
          NUXT<span class="text-nuxt-lightgreen">JS</span> Resources<br>
        </h1>
        <h3 class="xl:text-lg text-gray-600 font-medium leading-relaxed mb-6">
          Discover a panel of resources made by our partners. By using thoses affiliate resources links, you are helping us to maintain and develop the Open Source Framework.
        </h3>
      </div>
      <i-themes class="w-2/3 mx-auto lg:mx-0 lg:w-5/12 lg:-mt-8"/>
    </div>
    <section class="flex flex-wrap -mx-4">
      <nuxt-link :to="{ name: 'themes' }" class="w-full lg:w-1/2 p-4">
        <div class="block bg-gray-100 hover:bg-gray-200 rounded p-8 text-center">
          <h2 class="text-2xl text-nuxt-gray font-medium uppercase mb-8">Themes</h2>
          <i-theming class="inline-block w-auto h-40 sm:h-56 xl:h-64"/>
        </div>
      </nuxt-link>
      <nuxt-link :to="{ name: 'video-courses' }" class="w-full lg:w-1/2 p-4">
        <div class="block bg-gray-100 hover:bg-gray-200 rounded p-8 text-center">
          <h2 class="text-2xl text-nuxt-gray font-medium uppercase mb-8">Video Courses</h2>
          <i-videos class="inline-block w-auto h-40 sm:h-56 xl:h-64"/>
        </div>
      </nuxt-link>
    </section>
  </nui-container>
</template>

<script>
import iThemes from '@/components/svg/fogg/themes'
import iTheming from '@/components/svg/fogg/theming'
import iVideos from '@/components/svg/fogg/videos'

export default {
  components: {
    iThemes,
    iTheming,
    iVideos
  },
  head: {
    title: 'NuxtJS Themes',
    meta: [
      { hid: 'description', name: 'description', content: '' }
    ]
  },
  data () {
    return {
      themes: [
        {
          title: 'Nuxt Argon Dashboard PRO',
          description: 'Premium Bootstrap 4 + NuxtJS Admin Template',
          price: '99$',
          link: 'https://www.creative-tim.com/product/nuxt-argon-dashboard-pro?partner=120213',
          img: 'nuxt-argon-dashboard-pro',
          discount: '-30% discount code: <b class="whitespace-no-wrap">30nuxt-exclusive</b>'
        },
        {
          title: 'Nuxt Now UI Kit',
          description: 'Premium Bootstrap Nuxt.js UI Kit',
          price: '89$',
          link: 'https://www.creative-tim.com/product/nuxt-now-ui-kit-pro?partner=120213',
          img: 'nuxt-now-ui-kit'
        },
        {
          title: 'Nuxt Black Dashboard PRO',
          description: 'Premium Bootstrap 4 Nuxt.js Admin Template',
          price: '79$',
          link: 'https://www.creative-tim.com/product/nuxt-black-dashboard-pro?partner=120213',
          img: 'nuxt-black-dashboard-pro'
        },
        {
          title: 'Nuxt Scutum Dashboard',
          description: 'Professional Material Design UIkit Admin Template',
          price: '26$',
          link: 'https://1.envato.market/scutum-nuxt',
          img: 'nuxt-scutum-dashboard'
        }
      ]
    }
  }
}
</script>

<style>

</style>
