<template>
  <nui-container class="py-16">
    <div class="flex justify-between">
      <div class="lg:w-1/2 xl:w-8/12 text-center lg:text-left p-4 sm:p-0">
        <h1 class="text-3xl xl:text-4xl text-nuxt-gray font-medium leading-normal mb-6">
          The NUXT<span class="text-nuxt-lightgreen">JS</span> Team<br>
        </h1>
        <h3 class="xl:text-lg text-gray-600 font-medium leading-relaxed mb-6">
          The development of NuxtJS and its ecosystem is guided by an international team. We have a very active and engaged team that is constantly striving to push Nuxt forward.
        </h3>
      </div>
      <i-team class="hidden lg:inline-block my-8" />
    </div>
    <h2 class="text-2xl xl:text-3xl text-nuxt-gray font-medium leading-normal mb-6">
      Active Core Team Members
    </h2>
    <div class="flex flex-wrap -mx-2 md:-mx-4">
      <div v-for="profile of core" :key="profile.name" class="w-full md:w-1/2 xl:w-1/3 p-2 md:p-4">
        <div class="md:flex h-full bg-white rounded-lg p-6 shadow hover:shadow-xl">
          <img class="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6" :src="`https://github.com/${profile.github}.png`">
          <div class="text-center md:text-left">
            <h2 class="text-lg font-semibold">
              {{ profile.name }} <span v-if="profile.alias" class="font-normal text-sm">({{ profile.alias }})</span>
            </h2>
            <div class="text-nuxt-gray">
              {{ profile.work.role }} <span v-if="profile.work.org">@ <a :href="profile.work.orgUrl" target="_blank" rel="noopener" class="text-nuxt-green">{{ profile.work.org }}</a></span>
            </div>
            <div class="text-gray-600">
              {{ profile.city }}
            </div>
            <div>
              <a :href="`https://github.com/${profile.github}`" rel="noopener" target="_blank"><github-icon class="h-5 w-5 inline-block text-gray-700 hover:text-gray-900 cursor-pointer" /></a>
              <a v-if="profile.twitter" :href="`https://twitter.com/${profile.twitter}`" rel="noopener" target="_blank"><twitter-icon class="h-5 w-5 ml-1 inline-block text-blue-600 hover:text-blue-400" /></a>
              <a v-if="profile.website" :href="profile.website" rel="noopener" target="_blank"><website-icon class="h-5 w-5 inline-block text-nuxt-green hover:text-nuxt-lightgreen" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nui-container>
</template>

<script>
import TwitterIcon from '~/assets/images/twitter.svg'
import GithubIcon from '~/assets/images/github.svg'
import WebsiteIcon from '~/assets/images/link.svg'
import iTeam from '@/components/svg/streamline/team.vue'

export default {
  components: {
    TwitterIcon,
    GithubIcon,
    WebsiteIcon,
    iTeam
  },
  head: {
    title: 'The NuxtJS Team',
    meta: [
      { hid: 'description', name: 'description', content: 'NuxtJS has a very active and engaged team that is constantly striving to push Nuxt forward.' }
    ]
  },
  data () {
    return {
      core: [
        {
          name: 'Sébastien Chopin',
          city: 'Bordeaux, France',
          github: 'Atinux',
          twitter: 'Atinux',
          website: 'https://atinux.com',
          work: {
            role: 'Creator',
            org: 'NuxtJS',
            orgUrl: 'https://nuxtjs.org'
          }
        },
        {
          name: 'Alexandre Chopin',
          city: 'Bordeaux, France',
          github: 'alexchopin',
          twitter: 'iamnuxt',
          website: 'https://alexchopin.com',
          work: {
            role: 'Design',
            org: 'NuxtJS',
            orgUrl: 'https://nuxtjs.org'
          }
        },
        {
          name: 'Pooya Parsa',
          alias: 'پویا پارسا',
          city: 'Amsterdam, Netherlands',
          github: 'pi0',
          twitter: '_pi0_',
          work: {
            role: 'Architect',
            org: 'NuxtJS',
            orgUrl: 'https://nuxtjs.org'
          }
        },
        {
          name: 'Clark Du',
          alias: '杜欣',
          city: 'Dublin, Ireland',
          github: 'clarkdo',
          twitter: 'ClarkDu_',
          work: {
            role: 'Core Expert',
            org: 'NuxtJS',
            orgUrl: 'https://nuxtjs.org'
          }
        },
        {
          name: 'Alexander Lichter',
          city: 'Dresden, Germany',
          github: 'manniL',
          twitter: 'TheAlexLichter',
          website: 'https://blog.lichter.io',
          work: {
            role: 'Community',
            org: 'NuxtJS',
            orgUrl: 'https://nuxtjs.org'
          }
        },
        {
          name: 'Jonas Galvez',
          city: 'Barretos, Brazil',
          github: 'galvez',
          twitter: 'anothergalvez',
          website: 'https://hire.jonasgalvez.com.br',
          work: {
            role: 'Creator',
            org: 'NuxtPress',
            orgUrl: 'https://nuxt.press'
          }
        },
        {
          name: 'Dmitry Molotkov',
          alias: 'Дзмітрый Малаткоў',
          city: 'Gomel, Belarus',
          github: 'aldarund',
          twitter: 'aldarund',
          work: {
            role: 'Answer Machine',
            org: 'NuxtJS',
            orgUrl: 'https://stackoverflow.com/search?q=user%3A239354+%5Bnuxt.js%5D'
          }
        },
        {
          name: 'Kevin Marrec',
          city: 'Rennes, France',
          github: 'kevinmarrec',
          twitter: 'K_Marrec',
          website: 'https://marrec.io',
          work: {
            role: 'Creator',
            org: 'Nuxt TS',
            orgUrl: 'https://typescript.nuxtjs.org'
          }
        },
        {
          name: 'Pim',
          city: 'The Netherlands',
          github: 'pimlie',
          work: {
            role: 'Hacker',
            org: 'NuxtJS',
            orgUrl: 'https://nuxtjs.org'
          }
        }
      ]
    }
  }
}
</script>
