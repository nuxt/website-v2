<template>
  <div class="flex space-x-2">
    <img :src="`/img/header/${slug}/${icon}`" :alt="title" class="w-4 h-4" />
    <div>
      <h5 class="font-medium text-sm">{{ title }}</h5>
      <p class="text-xs">{{ subTitle }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    subTitle: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    }
  }
}
</script>
