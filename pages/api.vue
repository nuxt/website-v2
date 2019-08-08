<template>
<<<<<<< HEAD
  <div class="category">
    <nuxt-affix :list="list" category="api"/>
    <div class="category__content Content Content--hasCarbon" :class="{'category__content--hidden': visible}">
      <nuxt-child/>
    </div>
    <div class="category__footer">
      <nuxt-footer/>
    </div>
  </div>
</template>

<script>
import NuxtAffix from '~components/Affix.vue'
import NuxtFooter from '~components/Footer.vue'

export default {
  computed: {
    visible () { return this.$store.state.visibleAffix },
    list () { return this.$store.state.menu.api }
  },
  components: {
    NuxtAffix,
    NuxtFooter
=======
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
>>>>>>> 2fb6a223 (sponsors and flat routes with header links)
  }
}
</script>
