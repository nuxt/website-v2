<template>
  <div class="font-sans font-medium bg-gray-100 text-nuxt-gray">
    <slot/>
  </div>
</template>

<style lang="scss" scoped>
.nui-select {
  @apply text-nuxt-gray bg-gray-200;
}
.header {
  @apply bg-white;
  &_nav {
    @apply bg-white;
    &_link {
      @apply text-nuxt-gray;
    }
  }
}
.footer {
  @apply bg-white;
}
</style>
