<template>
  <div ref="affix" :class="customClass" :style="offset">
    <h3 class="Affix__Title">Prologue</h3>
    <ul class="Affix__List">
      <li class="Affix__List__Item">
        <router-link class="Affix__List__Item__Link" to="/guide">
          What's Nuxt.js ?
        </router-link>
      </li>
      <li class="Affix__List__Item">
        <router-link class="Affix__List__Item__Link" to="/guide/contribution-guide">
          Contribution Guide
        </router-link>
      </li>
      <li class="Affix__List__Item">
        <router-link class="Affix__List__Item__Link" to="/guide/release-notes">
          Release Notes
        </router-link>
      </li>
    </ul>
    <h3 class="Affix__Title">Getting started</h3>
    <ul class="Affix__List">
      <li class="Affix__List__Item">
        <router-link class="Affix__List__Item__Link" to="/guide/installation">
          Installation
        </router-link>
      </li>
      <li class="Affix__List__Item">
        <router-link class="Affix__List__Item__Link" to="/guide/directory-structure">
          Directory Structure
        </router-link>
      </li>
      <li class="Affix__List__Item">
        <router-link class="Affix__List__Item__Link" to="/guide/configuration">
          Configuration
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  mounted () {
    let self = this
    this.$nextTick(function () {
      window.addEventListener('scroll', self.scrolled)
    })
    this.limit = this.$refs.affix.offsetTop
    this.left = this.$refs.affix.offsetLeft
  },
  data () {
    return {
      fixed: false,
      start: 0
    }
  },
  computed: {
    offset () {
      if (this.fixed) {
        return {
          top: this.start + 'px',
          left: this.left + 'px'
        }
      }
      return {}
    },
    customClass () {
      return (this.fixed) ? 'Affix Affix--Fixed' : 'Affix'
    }
  },
  methods: {
    scrolled () {
      var doc = document.documentElement
      var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
      this.fixed = (top > this.limit)
    }
  }
}
</script>

<style lang="scss" scoped>
.Affix
{
  border-right: 1px solid #dbdfe1;
  min-height: 100vh;
  margin: 0;
  padding: 0 15px;
  padding-top: 45px;
  padding-left: 0;
  width: 240px;
  float: left;
  position: absolute;
  &--Fixed
  {
    z-index: 980;
    left: 0;
    bottom: 0;
    position: fixed;
    overflow-y: auto;
    &--sm
    {
      @media (min-width: 576px)
      {
        position: fixed;
      }
    }
    &--md
    {
      @media (min-width: 768px)
      {
        position: fixed;
      }
    }
    &--lg
    {
      @media (min-width: 992px)
      {
        position: fixed;
      }
    }
    &--xl
    {
      @media (min-width: 1200px)
      {
        position: fixed;
      }
    }
  }
  &__Title
  {
    margin: 0;
    text-transform: uppercase;
    color: #9aabb1;
    font-weight: 400;
    font-size: 1em;
    letter-spacing: 1px;
  }
  &__List
  {
    list-style: none;
    padding: 0;
    margin: 40px 0;
    margin-top: 10px;
    &__Item
    {
      padding: 5px;
      &__Link
      {
        text-decoration: none;
        color: #505153;
        &:hover
        {
          color: #2e2f30;
        }
      }
      .router-link-active
      {
        color: #00BCD4;
      }
    }
  }
}
</style>
