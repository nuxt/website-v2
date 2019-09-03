<template>
  <nui-container class="py-16">
    <div class="flex justify-between">
      <div class="lg:w-1/2 xl:w-8/12 text-center lg:text-left p-4 sm:p-0">
        <h1 class="text-3xl xl:text-4xl text-nuxt-gray font-medium leading-normal mb-6">
          NUXT<span class="text-nuxt-lightgreen">JS</span> Consulting & Support<br>
        </h1>
        <h3 class="xl:text-lg text-gray-600 font-medium leading-relaxed mb-6">
          Our <nuxt-link to="/team" class="text-nuxt-green underline">core team</nuxt-link> now offers official consulting services for your NuxtJS applications.<br>
          We offer different services depending of your needs, from technical support to custom development.
        </h3>
      </div>
      <i-help class="hidden lg:inline-block my-8" />
    </div>
    <div class="flex flex-wrap -mx-2 mb-4">
      <section v-for="service of services" :key="service.slug" class="w-full md:w-1/2 p-2">
        <div class="shadow hover:shadow-lg p-8 rounded h-full relative">
          <h2 class="text-2xl font-medium mb-2">{{ service.name }}</h2>
          <h3 class="text-nuxt-lightgreen font-medium text-2xl mb-2">${{ service.hourlyRate / 100 }} <span class="text-sm">/hr</span> <span class="inline-block pl-2 text-base text-gray-600">${{ service.minimumFee / 100 }} minimum</span></h3>
          <p class="mb-4">{{ service.description }}</p>
          <a :href="`https://otechie.com/nuxt/${service.slug}`" class="inline-block border rounded border-nuxt-lightgreen text-nuxt-lightgreen hover:text-white hover:bg-nuxt-lightgreen py-2 px-4" rel="noopener" target="_blank">Start chat</a>
        </div>
      </section>
    </div>
    <section class="text-center italic">
      We partnered with <a href="https://otechie.com" rel="noopener" target="_blank" class="text-purple-700 underline">Otechie</a> to offer this services so we can focus on helping you as fast as possible.
    </section>
  </nui-container>
</template>

<script>
import iHelp from '@/components/svg/streamline/help.vue'

export default {
  components: {
    iHelp
  },
  head: {
    title: 'The NuxtJS Shop',
    meta: [
      { hid: 'description', name: 'description', content: '' }
    ]
  },
  async asyncData ({ $http }) {
    const { services } = await $http.$get('api/otechie/consultancy/nuxt')

    return { services }
  },
  filters: {
    currency (value) {
      return (value / 100).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
    }
  }
}
</script>

<style>

</style>
