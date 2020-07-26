<template>
  <div
    class="bg-light-surface dark:bg-dark-surface rounded p-8 transition-colors duration-300 ease-linear w-full"
  >
    <h2
      class="text-2xl xl:text-3xl text-center text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary font-medium leading-normal mb-6 pt-4"
    >
      {{ title }}
    </h2>
    <div class="flex flex-wrap -mx-2 md:-mx-4">
      <div
        v-for="profile of team"
        :key="profile.name"
        class="w-full md:w-1/2 lg:w-1/3 p-4"
      >
        <div class="rounded p-6">
          <img
            class="h-32 w-32 rounded-full mx-auto"
            :src="`https://github.com/${profile.github}.png`"
          />
          <div
            class="text-center pt-4 text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear"
          >
            <h2 class="text-xl">
              {{ profile.name }}
              <span v-if="profile.alias" class="font-normal text-sm">
                ({{ profile.alias }})
              </span>
            </h2>
            <div v-if="profile.role" class="text-gray-600 py-1">
              {{ profile.role }}
              <span class="text-nuxt-lightgreen">
                @NuxtJS
              </span>
            </div>
            <div class="text-sm py-1">
              {{ profile.city }}
            </div>
            <div class="py-2">
              <a
                :href="`https://github.com/${profile.github}`"
                rel="noopener"
                target="_blank"
                class="mx-1"
              >
                <github-icon
                  class="h-5 inline-block text-gray-700 hover:text-gray-900 cursor-pointer text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear"
                />
              </a>
              <a
                v-if="profile.twitter"
                :href="`https://twitter.com/${profile.twitter}`"
                rel="noopener"
                target="_blank"
                class="mx-1"
              >
                <twitter-icon
                  class="h-5 ml-1 inline-block text-blue-600 hover:text-blue-400"
                />
              </a>
              <a
                v-if="profile.website"
                :href="profile.website"
                rel="noopener"
                target="_blank"
                class="mx-1"
              >
                <website-icon
                  class="h-5 inline-block text-nuxt-green hover:text-nuxt-lightgreen"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TwitterIcon from '~/assets/icons/twitter.svg?inline'
import GithubIcon from '~/assets/icons/github.svg?inline'
import WebsiteIcon from '~/assets/icons/link.svg?inline'
export default {
  components: {
    TwitterIcon,
    GithubIcon,
    WebsiteIcon
  },
  props: {
    team: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped></style>
