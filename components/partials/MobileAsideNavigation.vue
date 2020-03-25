<template>
  <div class="header_mobile_aside block lg:hidden fixed left-0 light:bg-light-surface dark:bg-dark-surface pt-6 z-20 w-full overflow-y-auto transition-colors duration-300 ease-linear" :class="{'header_mobile_aside--open': sublinks.length}">
    <nui-container>
      <transition-group v-for="(group, index) in sublinks" :key="index" tag="div" name="list" class="header_mobile_aside_group">
        <h3 :key="`title-${index}`" class="uppercase text-gray-500 pb-2">
          {{ group.title }}
        </h3>
        <ul :key="`list-${index}`" class="pb-6">
          <li v-for="l in group.links" :key="l.to" class="py-2">
            <nuxt-link class="block dark:text-dark-onSurfacePrimary hover:text-nuxt-lightgreen transition-colors duration-300 ease-linear" :class="{'text-nuxt-lightgreen': path === locale + l.to}" :to="locale + l.to" exact>
              {{ l.name }}
            </nuxt-link>
          </li>
        </ul>
      </transition-group>
    </nui-container>
  </div>
</template>

<script>
export default {
  computed: {
    path () { return this.$route.path.slice(-1) === '/' ? this.$route.path.slice(0, -1) : this.$route.path },
    locale () { return '/' + this.$route.params.section },
    sublinks () { return this.$store.state.menu[this.$route.params.section] || [] }
  }
}
</script>

<style lang="scss" scoped>
.header_mobile_aside {
  top: 72px;
  bottom: 60px;
  transform: translateX(-100%);
  transition-property: transform;
  transition-duration: 1s;
  transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
  /* transition-delay: .5s; */
  & .header_mobile_aside_group {
    transform: translateX(-100%);
    transition-property: transform;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
    &:nth-child(1) { transition-delay: 0.2s; }
    &:nth-child(2) { transition-delay: 0.3s; }
    &:nth-child(3) { transition-delay: 0.4s; }
    &:nth-child(4) { transition-delay: 0.5s; }
  }
}
.header_mobile_aside--open {
  transform: translateX(0px);
  transition-delay: 0s;
  & .header_mobile_aside_group {
    transform: translateX(0px);
  }
}

.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
