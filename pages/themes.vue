<template>
  <nui-container class="py-16">
    <div class="flex justify-between mb-16">
      <div class="lg:w-1/2 xl:w-8/12 text-center lg:text-left p-4 sm:p-0">
        <h1 class="text-3xl xl:text-4xl text-nuxt-gray font-medium leading-normal mb-6">
          NUXT<span class="text-nuxt-lightgreen">JS</span> Themes<br>
        </h1>
        <h3 class="xl:text-lg text-gray-600 font-medium leading-relaxed mb-6">
          With the themes below built by our partners from Creative Tim and Theme Forest you can see how a real world application is built, with Nuxt.js stack behind.
        </h3>
      </div>
      <i-theme class="hidden lg:inline-block" />
    </div>
    <section class="flex flex-wrap items-stretch -mx-4">
      <div v-for="theme in themes" :key="theme.title" class="w-full lg:w-1/2 p-4">
        <a :href="theme.link" target="_blank" rel="noopener" class="block sm:flex w-full bg-gray-100 hover:bg-gray-200 rounded">
          <img :src="'/themes/' + theme.img + '.jpg'" :srcset="'/themes/' + theme.img + '-2x.jpg 2x'" :alt="theme.title" class="w-full sm:w-auto">
          <div class="w-full p-6">
            <h4 class="block w-full font-medium text-xl pb-2">
              {{ theme.title }}
              <span class="float-right text-nuxt-lightgreen">{{ theme.price }}</span>
            </h4>
            <p class="pb-2 text-gray-600">{{ theme.description }}</p>
            <p class="text-sm italic text-nuxt-lightgreen" v-if="theme.discount" v-html="theme.discount" />
          </div>
        </a>
      </div>
    </section>
  </nui-container>
</template>

<script>
import iTheme from '@/components/svg/streamline/theme.vue'

export default {
  components: {
    iTheme
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
          discount: 'Get 30% off with the discount code: <b class="whitespace-no-wrap">30nuxt-exclusive</b>'
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
