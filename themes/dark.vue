<template>
  <div class="font-sans font-medium bg-gray-800 text-white">
    <slot/>
  </div>
</template>

<style lang="scss" scoped>
.nui-select {
  @apply text-white bg-gray-800;
}
.header {
  @apply bg-nuxt-gray;
  &_nav {
    @apply bg-nuxt-gray;
    &_link {
      @apply text-white;
    }
  }
}
.footer {
  @apply bg-nuxt-gray;
}
</style>
