<template>
  <nui-container class="pt-16">
    <div class="flex flex-wrap justify-between mb-8">
      <div class="lg:w-6/12 lg:text-left text-center p-4 sm:p-0">
        <h1 class="text-3xl xl:text-4xl text-nuxt-gray font-medium leading-normal mb-6 lg:pt-4">
          The NUXT<span class="text-nuxt-lightgreen">JS</span> Team<br>
        </h1>
        <h3 class="xl:text-lg text-gray-600 font-medium leading-relaxed mb-6">
          The development of NuxtJS and its ecosystem is guided by an international team. We have a very active and engaged team that is constantly striving to push Nuxt forward.
        </h3>
      </div>
      <i-team class="w-2/3 mx-auto lg:mx-0 lg:w-5/12 lg:-mt-8"/>
    </div>
    <div class="bg-gray-100 rounded p-8">
      <h2 class="text-2xl xl:text-3xl text-center text-nuxt-gray font-medium leading-normal mb-6 pt-4">
        Active Core Team Members
      </h2>
      <div class="flex flex-wrap -mx-2 md:-mx-4">
        <div v-for="profile of core" :key="profile.name" class="w-full md:w-1/2 lg:w-1/3 p-4">
          <div class="bg-gray-100 hover:bg-gray-200 rounded p-6">
            <img class="h-32 w-32 rounded-full mx-auto" :src="`https://github.com/${profile.github}.png`">
            <div class="text-center pt-4">
              <h2 class="text-xl">
                {{ profile.name }} <span v-if="profile.alias" class="font-normal text-sm">({{ profile.alias }})</span>
              </h2>
              <div class="text-gray-600 py-1">
                {{ profile.work.role }} <span v-if="profile.work.org" class="text-nuxt-lightgreen">@<a :href="profile.work.orgUrl" target="_blank" rel="noopener">{{ profile.work.org }}</a></span>
              </div>
              <div class="text-sm py-1">
                {{ profile.city }}
              </div>
              <div class="py-2">
                <a :href="`https://github.com/${profile.github}`" rel="noopener" target="_blank" class="mx-1"><github-icon class="h-5 inline-block text-gray-700 hover:text-gray-900 cursor-pointer" /></a>
                <a v-if="profile.twitter" :href="`https://twitter.com/${profile.twitter}`" rel="noopener" target="_blank" class="mx-1"><twitter-icon class="h-5 ml-1 inline-block text-blue-600 hover:text-blue-400" /></a>
                <a v-if="profile.website" :href="profile.website" rel="noopener" target="_blank" class="mx-1"><website-icon class="h-5 inline-block text-nuxt-green hover:text-nuxt-lightgreen" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nui-container>
</template>

<script>
import TwitterIcon from '@/components/svg/Twitter'
import GithubIcon from '@/components/svg/Github'
import WebsiteIcon from '@/components/svg/Link'
import iTeam from '@/components/svg/fogg/team'

export default {
  components: {
    TwitterIcon,
    GithubIcon,
    WebsiteIcon,
    iTeam
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
  },
  head: {
    title: 'The NuxtJS Team',
    meta: [
      { hid: 'description', name: 'description', content: 'NuxtJS has a very active and engaged team that is constantly striving to push Nuxt forward.' }
    ]
  }
}
</script>
