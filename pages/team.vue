<template>
  <div class="shadow-nuxt">
    <div class="container mx-auto px-4 pt-16 pb-12">
      <div class="flex flex-wrap justify-between mb-8">
        <div class="lg:w-6/12 lg:text-left text-center p-4 sm:p-0">
          <h1 class="text-3xl xl:text-4xl text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary font-medium leading-normal mb-6 lg:pt-4 transition-colors duration-300 ease-linear">
            The NUXT<span class="text-nuxt-lightgreen">JS</span> Team<br>
          </h1>
          <h3 class="xl:text-lg text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary font-medium leading-relaxed mb-6">
            The development of NuxtJS and its ecosystem is guided by an international team. We have a very active and engaged team that is constantly striving to push Nuxt forward.
          </h3>
        </div>
        <TeamIllustration class="w-2/3 mx-auto lg:mx-0 lg:w-5/12 lg:-mt-8 text-light-elevatedSurface dark:text-dark-elevatedSurface"/>
      </div>
      <div class="bg-light-surface dark:bg-dark-surface rounded p-8 transition-colors duration-300 ease-linear">
        <h2 class="text-2xl xl:text-3xl text-center text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary font-medium leading-normal mb-6 pt-4">
          Active Core Team Members
        </h2>
        <div class="flex flex-wrap -mx-2 md:-mx-4">
          <div v-for="profile of core" :key="profile.name" class="w-full md:w-1/2 lg:w-1/3 p-4">
            <div class="rounded p-6">
              <img class="h-32 w-32 rounded-full mx-auto" :src="`https://github.com/${profile.github}.png`">
              <div class="text-center pt-4 text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear">
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
                  <a :href="`https://github.com/${profile.github}`" rel="noopener" target="_blank" class="mx-1">
                    <github-icon class="h-5 inline-block text-gray-700 hover:text-gray-900 cursor-pointer text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear" />
                  </a>
                  <a v-if="profile.twitter" :href="`https://twitter.com/${profile.twitter}`" rel="noopener" target="_blank" class="mx-1">
                    <twitter-icon class="h-5 ml-1 inline-block text-blue-600 hover:text-blue-400" />
                  </a>
                  <a v-if="profile.website" :href="profile.website" rel="noopener" target="_blank" class="mx-1">
                    <website-icon class="h-5 inline-block text-nuxt-green hover:text-nuxt-lightgreen" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TwitterIcon from '@/assets/icons/twitter.svg?inline'
import GithubIcon from '@/assets/icons/github.svg?inline'
import WebsiteIcon from '@/assets/icons/link.svg?inline'
import TeamIllustration from '@/assets/illustrations/team.svg?inline'

export default {
  components: {
    TwitterIcon,
    GithubIcon,
    WebsiteIcon,
    TeamIllustration
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
  head () {
    const title = 'The NuxtJS Team'
    const description = 'NuxtJS has a very active and engaged team that is constantly striving to push Nuxt forward.'

    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'og:description', property: 'og:description', content: description },
        // Twitter Card
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        { hid: 'twitter:description', name: 'twitter:description', content: description }
      ]
    }
  }
}
</script>
