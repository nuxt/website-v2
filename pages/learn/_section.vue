<template>
  <div>
    <nui-hero>
      <nui-container>
        <h2>Proudly support by the community</h2>
      </nui-container>
    </nui-hero>
    <nui-container>
      <div class="flex py-8">
        <nui-aside class="w-3/12" :list="list"/>
        <div class="w-9/12 pl-8">
          <nuxt-child/>
        </div>
      </div>
      <!-- <nuxt-affix :list="list" category="guide" /> -->
      <!-- <div class="category__content Content Content--hasCarbon" :class="{'category__content--hidden': visible}">
        <nuxt-child/>
      </div> -->
    </nui-container>
  </div>
</template>

<script>
import nuiHero from '@/components/commons/Hero'
import nuiArticle from '@/components/commons/Article'
import nuiContainer from '@/components/commons/Container'
import nuiAside from '@/components/partials/Aside'

export default {
  validate ({ store, params }) {
    return store.state.menu[params.section] !== undefined
  },
  computed: {
    visible() { return this.$store.state.visibleAffix },
    list() { return this.$store.state.menu[this.$route.params.section] }
  },
  components: {
    nuiHero,
    nuiArticle,
    nuiContainer,
    nuiAside
  }
}
</script>
