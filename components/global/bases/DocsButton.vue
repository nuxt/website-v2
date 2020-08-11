<template>
  <div class="my-8">
    <a
      :href="docs"
      class="no-underline mt-4 font-medium text-sm px-4 py-2 shadow uppercase rounded hover:shadow-md sm:mr-4 py-3 px-6 text-base mb-4 primary bg-primary-base text-white hover:bg-primary-light hover:no-underline"
    >
      <span class="text-white hover:no-underline">See docs</span>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    docs: {
      type: String,
      default: ''
    }
  }
}
</script>
