<template>
  <div class="flex flex-col space-y-4 items-center text-center">
    <img :src="`/img/partners/categories/${icon}`" :alt="category" class="w-12 h-12" />
    <h2 class="font-bold text-md md:text-lg">
      <Markdown use="title" unwrap="p" />
    </h2>
    <p class="text-sm md:text-base px-8 md:px-12 pb-2">
      <Markdown use="description" unwrap="p" />
    </p>
    <AppButton
      :aria-label="category"
      extra-class="!border-sky-darker hover:text-sky-dark"
      :to="`/partners#${category}`"
    >
      <Markdown use="button" unwrap="p" />
    </AppButton>
  </div>
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    }
  }
}
</script>
