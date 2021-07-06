<template>
  <div>
    <NuxtLink
      v-if="$route.path.startsWith(localePath('/docs'))"
      :to="localePath('/releases')"
      class="
        flex
        items-center
        py-1.5
        group
        dark:bg-white
        dark:bg-opacity-10
        dark:hover:bg-opacity-9
        light:bg-gray-100
        light:hover:bg-gray-50
        p-4
        mt-4
        rounded-md
      "
    >
      <IconNuxt class="w-5 h-5 mr-2" />
      <span>Version: {{ $docus.lastRelease.value }}</span>
    </NuxtLink>
  </div>
</template>
