<template>
  <nui-container class="py-16">
    <div class="flex justify-between">
      <div class="lg:w-1/2 xl:w-8/12 text-center lg:text-left p-4 sm:p-0">
        <h1 class="text-3xl xl:text-4xl text-nuxt-gray font-medium leading-normal mb-6">
          NUXT<span class="text-nuxt-lightgreen">JS</span> Consulting <span class="text-nuxt-green">&</span> Support<br>
        </h1>
        <h3 class="xl:text-lg text-gray-600 font-medium leading-relaxed mb-6">
          Our <nuxt-link to="/team" class="text-nuxt-green underline">core team</nuxt-link> now offers official consulting services for your NuxtJS applications.<br>
          We offer different services depending of your needs, from technical support to custom development. Expect a reply within one business day, we can sign custom NDA and you can get a full refund if you are not satisfied with our service.
        </h3>
      </div>
      <i-help class="hidden lg:inline-block" />
    </div>
    <div class="flex flex-wrap -mx-2 md:-mx-4 mb-4">
      <section v-for="service of services" :key="service.slug" class="w-full md:w-1/2 p-2 md:p-4">
        <div class="shadow hover:shadow-lg p-8 rounded h-full relative">
          <h2 class="text-2xl font-medium mb-2">{{ service.name }}</h2>
          <h3 class="text-nuxt-lightgreen font-medium text-2xl mb-2">${{ service.hourlyRate / 100 }} <span class="text-sm">/hr</span> <span class="inline-block pl-2 text-base text-gray-600">${{ service.minimumFee | currency }} minimum</span></h3>
          <p class="mb-4">{{ service.description }}</p>
          <a :href="`https://otechie.com/nuxt/${service.slug}`" class="btn" rel="noopener" target="_blank">Start chat</a>
        </div>
      </section>
    </div>
    <section class="text-center italic flex justify-center items-center flex-wrap mb-16">
      <span class="flex">We partnered with</span>
      <a href="https://otechie.com" rel="noopener" target="_blank" class="flex"><img src="/img/partners/otechie.svg" alt="Otechie Logo" class="inline-block h-4 px-2" /></a>
      <span class="flex">to offer these services so we can focus on helping you as fast as possible.</span>
    </section>
    <h2 class="text-3xl xl:text-4xl text-nuxt-gray font-medium leading-normal mb-6">
      Nuxt<span class="text-nuxt-lightgreen">JS</span> for enterprise
    </h2>
    <h3 class="xl:text-lg text-gray-600 font-medium leading-relaxed mb-4 flex flex-wrap items-center">
      <span class="flex">Available as part of the</span>
      <a href="https://tidelift.com" rel="noopener" target="_blank" class="flex"><img src="/img/partners/tidelift.svg" alt="Tidelift Logo" class="inline-block px-2 h-5"/></a>
      <span class="flex">subscription.</span>
    </h3>
    <p class="mb-4">
      NuxtJS and the maintainers of thousands of other packages are working with Tidelift to deliver one enterprise subscription that covers all of the open source you use.<br>
      If you want the flexibility of open source and the confidence of commerical-grade software, this is for you.
    </p>
    <div class="flex">
      <a href="https://tidelift.com/subscription/pkg/npm-nuxt?utm_source=nuxt&utm_medium=referral&utm_campaign=enterprise" class="btn btn-gray mr-2" rel="noopener" target="_blank">Learn more</a>
      <a href="https://tidelift.com/subscription/request-a-demo?utm_source=nuxt&utm_medium=referral&utm_campaign=enterprise" class="btn" rel="noopener" target="_blank">Request a demo</a>
    </div>
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
      return (value / 100).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,').replace(/\.00$/, '')
    }
  }
}
</script>

<style scoped>
.btn {
  @apply inline-block border rounded border-nuxt-lightgreen text-nuxt-lightgreen py-2 px-4;
  &:hover {
    @apply text-white bg-nuxt-lightgreen;
  }
  &.btn-gray {
    @apply border-nuxt-gray text-nuxt-gray;
    &:hover {
      @apply bg-nuxt-gray text-white;
    }
  }
}
</style>
