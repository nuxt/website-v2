<template>
  <div class="nui-support-nuxt">
    <div>
      <p class="m-0 font-bold sm:text-sm d-text-primary">{{ $t('sidebar.ads.fallback.title') }}</p>
      <p class="p-0 m-0 leading-normal text-gray-600 dark:text-white sm:text-xs">
        {{ $t('sidebar.ads.fallback.description') }}
      </p>
    </div>
  </div>
</template>

<style lang="postcss">
.nui-support-nuxt {
  @apply light:bg-gray-100 dark:bg-white dark:bg-opacity-10 p-4 flex flex-row w-full items-center mt-4 rounded-md ;
}

@screen sm {
  .nui-support-nuxt {
    @apply flex-col w-40 mt-0;
  }
}
</style>
