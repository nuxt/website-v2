<template>
<<<<<<< HEAD
  <nuxt-link v-if="to" :to="to" class="inline-block bg-nuxt-lightgreen text-white font-medium text-sm px-4 py-2 shadow uppercase rounded hover:bg-nuxt-green hover:shadow-md">
    <div class="inline-block fill-current stroke-current mr-1">
      <slot name="icon"/>
=======
  <nuxt-link v-if="to" :to="to" class="no-underline inline-block font-medium text-sm px-4 py-2 shadow uppercase rounded hover:shadow-md" :class="variant">
    <div v-if="$slots.icon" class="inline-block fill-current stroke-current mr-1">
      <slot name="icon" />
>>>>>>> 1b87907b (feat: dark mode (#303))
    </div>
    <slot/>
  </nuxt-link>
<<<<<<< HEAD
  <a v-else :href="href" target="_blank" rel="noopener" class="inline-block bg-nuxt-lightgreen text-white font-medium text-sm px-4 py-2 shadow uppercase rounded hover:bg-nuxt-green hover:shadow-md">
    <div class="inline-block fill-current stroke-current mr-1">
      <slot name="icon"/>
=======
  <a v-else :href="href" target="_blank" rel="noopener" class="no-underline inline-block font-medium text-sm px-4 py-2 shadow uppercase rounded hover:shadow-md" :class="variant">
    <div v-if="$slots.icon" class="inline-block fill-current stroke-current mr-1">
      <slot name="icon" />
>>>>>>> 1b87907b (feat: dark mode (#303))
    </div>
    <slot/>
  </a>
</template>

<script>
export default {
  name: 'nui-button',
  props: {
    to: {
      type: [String, Object]
    },
    href: {
<<<<<<< HEAD
      type: String
=======
      type: String,
      default: ''
    },
    variant: {
      type: String,
      default: 'primary'
>>>>>>> 1b87907b (feat: dark mode (#303))
    }
  }
}
</script>

<style lang="scss" scoped>

.primary {
  @apply bg-primary-base text-white;
  &:hover {
    @apply bg-primary-light;
  };
}
.secondary {
  @apply bg-gray-200 text-nuxt-gray;
  &:hover {
    @apply bg-gray-300;
  };
}

</style>
