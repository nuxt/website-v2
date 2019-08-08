<template>
  <nui-container>
    <div class="flex py-8">
      <nui-aside :list="$store.state.menu['api']"/>
      <div class="lg:w-9/12 lg:ml-auto">
        <nuxt-child/>
      </div>
    </div>
  </nui-container>
</template>

<script>
import nuiAside from '@/components/partials/Aside'

export default {
  components: {
    nuiAside
  }
}
</script>
