<template>
  <nui-container class="py-16">
    <h1 class="text-3xl xl:text-4xl text-nuxt-gray font-medium leading-normal mb-6">
      Nuxt<span class="text-nuxt-lightgreen">JS</span> Team
    </h1>
    <h3 class="xl:text-lg text-gray-600 font-medium leading-relaxed mb-8">
      The development of NuxtJS and its ecosystem is guided by an international team. We have a very active and engaged team that is constantly striving to push Nuxt forward.
    </h3>
    <h2 class="text-2xl xl:text-3xl text-nuxt-gray font-medium leading-normal mb-6">
      Active Core Team Members
    </h2>
    <div class="md:flex bg-white rounded-lg p-6 shadow-md w-1/2">
      <img class="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6" src="https://avatars1.githubusercontent.com/u/904724?s=460&v=4">
      <div class="text-center md:text-left">
        <h2 class="text-lg font-semibold">
          Sébastien Chopin
        </h2>
        <div class="text-nuxt-gray">
          CEO @ <a href="https://nuxtjs.com" class="text-nuxt-green">NuxtJS Company</a>
        </div>
        <div class="text-gray-600">
          Lives in Bordeaux, France
        </div>
        <div>
          <twitter-icon class="h-5 w-5 inline-block text-blue-600 hover:text-blue-400 cursor-pointer" />
          <github-icon class="h-5 w-5 inline-block text-gray-700 hover:text-gray-900 cursor-pointer" />
        </div>
      </div>
    </div>
  </nui-container>
</template>

<script>
import TwitterIcon from '~/assets/images/twitter.svg'
import GithubIcon from '~/assets/images/github.svg'

export default {
  components: {
    TwitterIcon,
    GithubIcon
  },
  head: {
    title: 'The NuxtJS Team',
    meta: [
      { hid: 'description', name: 'description', content: 'NuxtJS has a very active and engaged team that is constantly striving to push Nuxt forward.' }
    ]
  }
}
</script>
