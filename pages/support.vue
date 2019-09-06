<template>
  <nui-container class="py-16">
    <div class="flex justify-between mb-16">
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
      <section v-for="service of services" :key="service.slug" class="w-full lg:w-1/2 p-2 md:p-4">
        <div class="bg-gray-100 hover:bg-gray-200 p-8 rounded h-full relative">
          <component :is="service.slug" class="float-right mb-4"/>
          <h2 class="text-2xl font-medium mb-2">{{ service.name }}</h2>
          <h3 class="text-nuxt-lightgreen font-medium text-2xl mb-4">${{ service.hourlyRate / 100 }} <span class="text-sm">/hr</span> <span class="inline-block pl-2 text-base text-gray-600">${{ service.minimumFee | currency }} minimum</span></h3>
          <p class="mb-6">{{ service.description }}</p>
          <nui-button :href="`https://otechie.com/nuxt/${service.slug}`" rel="noopener" target="_blank" class="sm:mr-4 py-3 px-6 text-base">
            <nui-svg-comments slot="icon" class="h-5 -mb-1 mr-1" />
            Start chat
          </nui-button>
        </div>
      </section>
    </div>
    <section class="text-center italic flex justify-center items-center flex-wrap mb-16">
      <span class="flex">We partnered with</span>
      <a href="https://otechie.com" rel="noopener" target="_blank" class="flex"><img src="/img/partners/otechie.svg" alt="Otechie Logo" class="inline-block h-4 px-2"></a>
      <span class="flex">to offer these services so we can focus on helping you as fast as possible.</span>
    </section>
    <h2 class="text-3xl xl:text-4xl text-nuxt-gray font-medium leading-normal mb-6">
      Nuxt<span class="text-nuxt-lightgreen">JS</span> for enterprise
    </h2>
    <h3 class="xl:text-lg text-gray-600 font-medium leading-relaxed mb-6 flex flex-wrap items-center">
      <span class="flex">Available as part of the</span>
      <a href="https://tidelift.com" rel="noopener" target="_blank" class="flex"><img src="/img/partners/tidelift.svg" alt="Tidelift Logo" class="inline-block px-2 h-5"></a>
      <span class="flex">subscription.</span>
    </h3>
    <p class="mb-8">
      NuxtJS and the maintainers of thousands of other packages are working with Tidelift to deliver one enterprise subscription that covers all of the open source you use.<br>
      If you want the flexibility of open source and the confidence of commerical-grade software, this is for you.
    </p>
    <nui-button href="https://tidelift.com/subscription/pkg/npm-nuxt?utm_source=nuxt&utm_medium=referral&utm_campaign=enterprise" rel="noopener" target="_blank" class="sm:mr-4 py-3 px-6 text-base button-gray">
      <nui-svg-play slot="icon" class="h-5 -mb-1 mr-1" />
      Learn more
    </nui-button>
    <nui-button href="https://tidelift.com/subscription/request-a-demo?utm_source=nuxt&utm_medium=referral&utm_campaign=enterprise" rel="noopener" target="_blank" class="sm:mr-4 py-3 px-6 text-base">
      <nui-svg-ticket slot="icon" class="h-5 -mb-1 mr-1" />
      Request a demo
    </nui-button>
  </nui-container>
</template>

<script>
import nuiSvgPlay from '@/components/svg/AngleDoubleRight.vue'
import nuiSvgTicket from '@/components/svg/InboxIn.vue'
import nuiSvgComments from '@/components/svg/Comments.vue'
import iHelp from '@/components/svg/streamline/help.vue'
import appDeployment from '@/components/svg/streamline/app-deployment.vue'
import customDevelopment from '@/components/svg/streamline/custom-development.vue'
import projectAudit from '@/components/svg/streamline/project-audit.vue'
import technicalSupport from '@/components/svg/streamline/technical-support.vue'

export default {
  components: {
    nuiSvgPlay,
    nuiSvgComments,
    nuiSvgTicket,
    iHelp,
    appDeployment,
    customDevelopment,
    projectAudit,
    technicalSupport
  },
  head: {
    title: 'The NuxtJS Shop',
    meta: [
      { hid: 'description', name: 'description', content: '' }
    ]
  },
  filters: {
    currency (value) {
      return (value / 100).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,').replace(/\.00$/, '')
    }
  },
  async asyncData ({ $http }) {
    const { services } = await $http.$get('api/otechie/consultancy/nuxt')

    return { services }
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
