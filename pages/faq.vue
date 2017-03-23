<template>
  <div class="category">
    <nuxt-affix :list="list" category="faq"/>
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
    list () { return this.$store.state.menu.faq }
  },
  components: {
    NuxtAffix,
    NuxtFooter
  }
}
</script>
