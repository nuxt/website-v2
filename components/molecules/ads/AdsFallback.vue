<template>
  <div class="nui-support-nuxt">
    <div>
      <p class="m-0 font-bold sm:text-sm d-text-primary">NuxtJS needs you!</p>
      <p class="p-0 m-0 leading-normal text-gray-600 dark:text-white sm:text-xs">
        By whitelisting nuxtjs.org on your Ad-Blocker, you support our work and help us financially.
      </p>
    </div>
  </div>
</template>

<style lang="postcss">
.nui-support-nuxt {
  @apply bg-white bg-opacity-10 p-4 flex flex-row w-full items-center mt-4 rounded-md;
}

@screen sm {
  .nui-support-nuxt {
    @apply flex-col w-40 mt-0;
  }
}
</style>
