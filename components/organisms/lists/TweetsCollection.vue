<template>
  <div>
    {{ collections }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useTweets } from '../../../plugins/tweets'

export default defineComponent({
  data() {
    return {
      collections: null
    }
  },
  async fetch() {
    const { fetch: fetchCollections } = useTweets({
      collectionID: '1440983543858044928'
    })
    this.collections = (await fetchCollections()).value
  }
})
</script>
