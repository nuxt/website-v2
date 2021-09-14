<template>
  <Link :to="to" :aria-label="title" class="hover:bg-sky-dark rounded-md p-4">
    <div>
      <div class="font-bold">
        {{ title }}
      </div>
      <div>
        {{ description }}
      </div>
    </div>
  </Link>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: ''
    }
  }
})
</script>
