<template>
  <div>
    {{ modulesList }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { useModules } from '../../../plugins/modulesList'

export default defineComponent({
  setup() {
    const { modules } = useModules()

    console.log('modulesList', modules)

    return {
      modules
    }
  },
})
</script>
