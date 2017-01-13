<template>
  <div class="category">
    <nuxt-affix :list="list" category="faq"></nuxt-affix>
    <div class="category__content Content" :class="{'category__content--hidden': visible, 'Content--hasCarbon': $store.state._lang === 'en'}">
      <nuxt-child></nuxt-child>
    </div>
    <div class="category__footer">
      <nuxt-footer></nuxt-footer>
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
