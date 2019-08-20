<template>
  <nui-container>
    <div class="lg:flex">
      <nui-aside section="guide"/>
      <div class="min-h-screen w-full py-8 lg:static lg:max-h-full lg:overflow-visible lg:w-3/4 xl:w-4/5">
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
