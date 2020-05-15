<template>
  <div v-click-outside="clickOutsideHandler" class="header_mobile_aside shadow-nuxt block lg:hidden fixed left-0 z-20 w-full sm:w-1/2" :class="{'header_mobile_aside--open': show}">
    <div class="mx-auto h-full light:bg-light-surface dark:bg-dark-surface transition-colors duration-300 ease-linear" >
      <div class="content-wrapper h-full relative">
        <div class="overflow-y-auto h-full pt-4">
          <transition-group v-for="(group, index) in sublinks" :key="index" tag="div" name="list" class="header_mobile_aside_group">
            <h3 :key="`title-${index}`" class="uppercase text-gray-500 pb-2">
              {{ group.title }}
            </h3>
            <ul :key="`list-${index}`" class="pb-6">
              <li v-for="l in group.links" :key="l.to" class="py-2">
                <NuxtLink class="block dark:text-dark-onSurfacePrimary hover:text-nuxt-lightgreen transition-colors duration-300 ease-linear" :class="{'text-nuxt-lightgreen': path === locale + l.to}" :to="locale + l.to" exact @click.native="show = false">
                  {{ l.name }}
                </NuxtLink>
              </li>
            </ul>
          </transition-group>
        </div>
        <button class="inner-button sm:hidden absolute h-10 w-10 flex items-center justify-center text-nuxt-gray bg-gray-200 dark:bg-dark-elevatedSurface dark:text-dark-onSurfaceSecondary transition-colors duration-300 ease-linear" @click="show = false">
          <TimesIcon class="block h-5 fill-current transition-colors duration-300 ease-linear" />
        </button>
      </div>

      <button class="bookmark-button absolute h-10 w-10 flex items-center justify-center text-nuxt-gray bg-gray-200 dark:bg-dark-surface dark:text-dark-onSurfaceSecondary transition-colors duration-300 ease-linear" @click="show = !show">
        <ListIcon v-if="!show" class="block text-nuxt-gray dark:text-dark-onSurfaceSecondary stroke-current transition-colors duration-300 ease-linear" />
        <TimesIcon v-else class="block h-5 fill-current transition-colors duration-300 ease-linear" />
      </button>
    </div>
  </div>
</template>

<script>
import ListIcon from '~/assets/images/list.svg?inline'
import TimesIcon from '@/assets/icons/times.svg?inline'

export default {
  components: {
    ListIcon,
    TimesIcon
  },
  data () {
    return {
      show: false
    }
  },
  computed: {
    path () { return this.$route.path.slice(-1) === '/' ? this.$route.path.slice(0, -1) : this.$route.path },
    locale () { return '/' + this.$route.params.section },
    sublinks () { return this.$store.state.menu[this.$route.params.section] || [] }
  },
  methods: {
    clickOutsideHandler () {
      if (this.show) {
        this.show = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header_mobile_aside {
  top: theme('spacing.16');
  @screen lg {
    top: theme('spacing.24');
  }
  bottom: theme('spacing.16');
  transform: translateX(calc(-100% - 1px));
  transition-property: transform;
  transition-duration: 0.35s;
  // transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
  transition-timing-function: theme('transitionTimingFunction.ease-in-out-material-sharp');
}

.header_mobile_aside--open {
  transform: translateX(0px);
  transition-delay: 0s;
  & .header_mobile_aside_group {
    transform: translateX(0px);
  }
}

.content-wrapper {
  margin-left: auto;
  padding-left: 1rem;
  @screen sm {
    max-width: calc(theme('screens.sm') / 2);
  }
  @screen md {
    max-width: calc(theme('screens.md') / 2);
  }
}

button {
  outline: none
}

.bookmark-button {
  top: 1rem;
  right: 0;
  transform: translateX(100%);
  border-radius: 0 9999px 9999px 0;
  box-shadow: 4px 2px 4px rgba(0, 0, 0, 0.101562);
}

.inner-button {
  top: 1rem;
  right: 1rem;
  border-radius: 100%;
  box-shadow: 4px 2px 4px rgba(0, 0, 0, 0.101562);
}
</style>
