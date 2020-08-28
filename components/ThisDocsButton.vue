<template>
  <div class="my-8 inline-block">
    <a
      :href="href"
      target="_blank"
      class="docs-button no-underline mt-4 font-medium text-sm px-4 py-2 shadow uppercase rounded hover:shadow-md sm:mr-4 py-3 px-6 text-base mb-4 primary bg-primary-base text-white hover:bg-primary-light hover:no-underline"
    >
      <span class="text-white hover:hover:bg-primary-light"><slot>See Docs</slot></span>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true
    }
  }
}
</script>
<style scoped>
.docs-button:hover {
  text-decoration: none !important;
}
</style>
