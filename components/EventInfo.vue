<template>
  <div class="EventInfo" :class="{ hidden, 'full-width': isHome }">
    <a href="https://www.creative-tim.com/product/nuxt-argon-dashboard-pro?partner=120213" target="_blank" rel="noopener">Nuxt Argon Dashboard PRO is out 🌟 The first premium Boostrap template for NuxtJS.</a><br>
    Get 30% OFF with the promo code <u class="code">30nuxt-exclusive</u> and support us 💚
  </div>
</template>

<script>
export default {
  data() {
    return { hidden: true }
  },
  computed: {
    isHome() {
      return this.$route.path === '/'
    }
  },
  mounted() {
    this.hidden = false
  }
}
</script>

<style lang="scss" scoped>
/* See https://davidwalsh.name/css-slide */
.EventInfo {
  overflow: hidden;
  text-align: center;
  padding: 10px;
  background-color: #2F495E;
  opacity: 1;
  transition-property: all;
  transition-duration: 0.5s;
  padding-right: 60px;
  color: #fff;
  @media (min-width: 992px) {
    padding-left: 300px;
  }
  &.full-width {
    padding-left: 10px;
    padding-right: 10px;
  }
  &.hidden {
    visibility: hidden;
    opacity: 0;
  }
  a {
    color: #fff;
    font-weight: 600;
  }
  .code {
    color: #00C58E;
  }
}
</style>
