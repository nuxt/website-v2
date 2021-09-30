<template>
  <div class="py-1 px-2 hover:bg-cloud-lightest hover:dark:bg-sky-darkest rounded-md">
    <div class="flex space-x-2">
      <img :src="`/img/header/${icon}`" :alt="title" />
      <div>
        <h5 class="font-bold text-sm">{{ title }}</h5>
        <p class="text-xs">{{ subtitle }}</p>
      </div>
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
    subtitle: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  }
}
</script>
