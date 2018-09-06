<template>
  <section class="nSection">
    <header class="nSection_Header">
      <div class="container">
        <div class="nSection_Header_Title row">
          <h2>Documentation</h2>
          <p>lorem ipsum</p>
          <n-doc-logo/>
        </div>
        <div class="nSection_Header_Partners">
          <h3>Partners</h3>
          <ul class="nSection_Header_Partners_List">
            <li class="nSection_Header_Partners_List_Item">
              <a class="Affix__List__Item__Sponsor" href="https://t.co/sUZfRy6ZxS" target="_blank" rel="noopener">
                <img src="https://user-images.githubusercontent.com/1016365/34124854-48fafa06-e3e9-11e7-8c04-251055feebee.png" alt="Tipe.io" />
              </a>
            </li>
            <li class="nSection_Header_Partners_List_Item">
              <a class="Affix__List__Item__Sponsor" href="https://www.storyblok.com/?ref=nuxt" target="_blank" rel="noopener">
                <img src="https://a.storyblok.com/f/39898/x/aa0dc897ff/storyblok-logo.svg" alt="Storyblok.com">
              </a>
            </li>
            <li class="nSection_Header_Partners_List_Item">
              Support us and
              <a href="https://opencollective.com/nuxtjs" target="_blank" rel="noopener">become a partner</a>.
            </li>
          </ul>
        </div>
      </div>
    </header>
    <nav class="nNavbar">

    </nav>
    <!-- <nuxt-affix :list="list" category="guide" />
    <div class="category__content Content Content--hasCarbon" :class="{'category__content--hidden': visible}">
      <nuxt-child/>
    </div> -->
    <!-- <div class="category__footer">
      <nuxt-footer/>
    </div> -->
  </section>
</template>

<script>
import nDocLogo from '@/components/svg/performant.vue'
import NuxtAffix from '~/components/Affix.vue'
import NuxtFooter from '~/components/Footer.vue'

export default {
  computed: {
    visible() { return this.$store.state.visibleAffix },
    list() { return this.$store.state.menu.guide }
  },
  components: {
    nDocLogo,
    NuxtAffix,
    NuxtFooter
  }
}
</script>

<style lang="scss">
.nSection {
  background-color: $background-color-medium;
  &_Header {
    &_Title {
      width: 50%;
    }
    &_Partners {
      &_List {
        display: flex;
        list-style: none;
        &_Item {
          img {
            height: 32px;
          }
        }
      }
    }
  }
}
</style>
