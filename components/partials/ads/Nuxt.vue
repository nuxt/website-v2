<template>
  <div class="nui-support-nuxt">
    <Blocked alt="Support NuxtJS" width="125" height="125" class="block" />
    <p class="text-sm m-0 text-nuxt-green font-bold">
      NuxtJS needs you!
    </p>
    <p class="text-xs p-0 m-0 text-gray-600 leading-normal">
      By whitelisting nuxtjs.org on your Ad-Blocker, you support our work and help us financially.
    </p>
  </div>
</template>

<script>
export default {
  components: {
    Blocked: () => import('~/assets/images/blocked.svg')
  }
}
</script>

<style lang="scss">
.nui-support-nuxt {
  @apply bg-white p-4 flex flex-col w-40;
}
</style>
