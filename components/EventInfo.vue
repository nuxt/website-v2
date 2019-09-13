<template>
  <div class="EventInfo" :class="{ hidden, 'full-width': isHome }">
    <svg class="close" @click="closeEventInfo" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" aria-labelledby="closeIconTitle" stroke="#FFF" stroke-width="2" stroke-linecap="square" fill="none" color="#2329D6"><path d="M6.34 6.34l11.32 11.32m-11.32 0L17.66 6.34"/></svg>
    <span class="title"><span class="code">[AD]</span> <a href="https://www.creative-tim.com/product/nuxt-argon-dashboard-pro?partner=120213" target="_blank" rel="noopener">Nuxt Argon Dashboard PRO</a> is out 🌟 A premium Boostrap template for NuxtJS by our partner <a href="https://www.creative-tim.com/?partner=120213" target="_blank" rel="noopener">CreativeTim</a>.</span><br>
    Get 30% OFF with the promo code <u class="code">30nuxt-exclusive</u> and support Nuxt.js 💚<br>
    <a class="btn" href="https://www.creative-tim.com/product/nuxt-argon-dashboard-pro?partner=120213" target="_blank" rel="noopener nofollow sponsored">Discover</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hidden: true
    }
  },
  computed: {
    isHome() {
      return this.$route.path === '/'
    }
  },
  mounted() {
    if (this.getCookie('event-info') !== 'closed') {
      setTimeout(() => this.hidden = false, 500)
    }
  },
  methods: {
    closeEventInfo() {
      console.log('close envet')
      this.setCookie('event-info', 'closed', 14)
      this.hidden = true
    },
    // https://stackoverflow.com/questions/10730362/get-cookie-by-name
    getCookie(name) {
      const value = `; ${document.cookie}`
      var parts = value.split(`; ${name}=`)

      if (parts.length == 2) {
        return parts.pop().split(';').shift()
      }

      return ''
    },
    // https://www.w3schools.com/js/js_cookies.asp
    setCookie(cname, cvalue, exdays) {
      const d = new Date()
      d.setTime(d.getTime() + (exdays*24*60*60*1000))
      const expires = `expires=${d.toUTCString()}`

      document.cookie = `${cname}=${cvalue};${expires};path=/`
    }
  }
}
</script>

<style lang="scss" scoped>
/* See https://davidwalsh.name/css-slide */
.EventInfo {
  position: relative;
  overflow: hidden;
  text-align: center;
  padding: 20px 10px;
  background-color: #2F495E;
  opacity: 1;
  transition-property: all;
  transition-duration: 0.5s;
  padding-right: 60px;
  color: #fff;
  line-height: 2em;
  @media (min-width: 992px) {
    padding-left: 300px;
  }
  &.full-width {
    padding-left: 10px;
    padding-right: 10px;
  }
  &.hidden {
    margin-top: -140px;
  }
  .title {
    font-size: 1.2em;
  }
  a {
    color: #fff;
    font-weight: 600;
  }
  .code {
    color: #00C58E;
  }
  .close {
    display: inline-block;
    float: right;
    width: 24px;
    height: 24px;
    cursor: pointer;
    margin-left: 10px;
  }
  .btn {
    padding: 1px 15px;
    border: #00C58E 1px solid;
    display: inline-block;
    margin-top: 5px;
  }
}
</style>
