<template>
  <div class="nui-support-nuxt">
    <div class="pr-4 sm:pr-0">
      <Blocked alt="Support NuxtJS" width="125" height="125" class="block mr-4" />
    </div>
    <div>
      <p class="sm:text-sm m-0 text-nuxt-green font-bold">
        NuxtJS needs you!
      </p>
      <p class="sm:text-xs p-0 m-0 text-gray-600 leading-normal">
        By whitelisting nuxtjs.org on your Ad-Blocker, you support our work and help us financially.
      </p>
    </div>
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
  @apply bg-gray-200 p-4 flex flex-row w-full items-center mt-4;
}
@screen sm {
  .nui-support-nuxt {
    @apply bg-white flex-col w-40 mt-0;
  }
}
</style>
