<template>
  <div>
    <NuxtLink
      v-if="$route.path.startsWith(localePath('/docs'))"
      :to="localePath('/releases')"
      class="
        flex
        items-center
        group
        nuxt-text-highlight-hover
        mt-4
      "
    >
      <IconNuxt class="w-5 h-5 mr-2" />
      <span>Version: {{ $docus.lastRelease.value }}</span>
    </NuxtLink>
  </div>
</template>
