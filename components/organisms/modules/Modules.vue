<template>

  <div v-if="!pending">
    {{ modules }}
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, useContext, useFetch } from '@nuxtjs/composition-api'
import { useModules } from '../../../plugins/modulesList'

export default defineComponent({
  setup() {
    const { i18n } = useContext()
    const { getModules } = useModules()
    const modules = ref(null)
    const error = ref(null)
    const pending = ref(false)

    useFetch(async () => {

      pending.value = true

      await getModules().then((res) => {
          pending.value = false
          modules.value = res
        })
        .catch(() => {
          pending.value = false
          error.value = i18n.t('modules.error')
        })
    })

    return {
      modules,
      error,
      pending
    }
  },
})
</script>
