<template>
  <ul class="flex flex-wrap">
    <li
      v-for="(service, index) in services"
      :key="index"
      class="bg-cloud-surface dark:bg-sky-dark rounded-md px-4 py-2 mt-2 mr-2"
    >
      {{ service }}
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    services: {
      type: Array,
      default: () => [],
      required: true
    }
  }
}
</script>
