<template>
  <div
    v-click-outside="clickOutsideHandler"
    class="header_mobile_aside shadow-nuxt block lg:hidden fixed left-0 z-20 w-full sm:w-1/2"
    :class="{ 'header_mobile_aside--open': show }"
  >
    <div
      class="mx-auto h-full light:bg-light-surface dark:bg-dark-surface transition-colors duration-300 ease-linear"
    >
      <div class="content-wrapper h-full relative overflow-y py-2">
        <transition-group
          tag="ul"
          name="list"
          class="header_mobile_aside_group"
        >
          <li key="featured" class="py-2">
            <NuxtLink
              class="block dark:text-dark-onSurfacePrimary hover:text-nuxt-lightgreen transition-colors duration-300 ease-linear"
              active-class
              exact
              exact-active-class="text-nuxt-lightgreen"
              to="/resources"
              @click.native="show = false"
            >
              Featured
            </NuxtLink>
          </li>
          <li v-for="link in links" :key="link" class="py-2">
            <NuxtLink
              class="block dark:text-dark-onSurfacePrimary hover:text-nuxt-lightgreen transition-colors duration-300 ease-linear capitalize"
              active-class
              exact
              exact-active-class="text-nuxt-lightgreen"
              :to="
                localePath({
                  name: 'resources-category',
                  params: { category: link }
                })
              "
              @click.native="show = false"
            >
              {{ link }}
            </NuxtLink>
          </li>
        </transition-group>
        <button
          class="inner-button sm:hidden absolute h-10 w-10 flex items-center justify-center text-nuxt-gray bg-gray-200 dark:bg-dark-elevatedSurface dark:text-dark-onSurfaceSecondary transition-colors duration-300 ease-linear"
          @click="show = false"
        >
          <TimesIcon
            class="block h-5 fill-current transition-colors duration-300 ease-linear"
          />
        </button>
      </div>

      <button
        class="bookmark-button absolute h-10 w-10 flex items-center justify-center text-nuxt-gray bg-gray-200 dark:bg-dark-surface dark:text-dark-onSurfaceSecondary transition-colors duration-300 ease-linear"
        @click="show = !show"
      >
        <ListIcon
          v-if="!show"
          class="block text-nuxt-gray dark:text-dark-onSurfaceSecondary stroke-current transition-colors duration-300 ease-linear"
        />
        <TimesIcon
          v-else
          class="block h-5 fill-current transition-colors duration-300 ease-linear"
        />
      </button>
    </div>
  </div>
</template>

<script>
import ListIcon from '~/assets/images/list.svg?inline'
import TimesIcon from '~/assets/icons/times.svg?inline'

export default {
  components: {
    ListIcon,
    TimesIcon
  },
  props: {
    links: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      show: false
    }
  },

  methods: {
    clickOutsideHandler() {
      if (this.show) {
        this.show = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header_mobile_aside {
  bottom: theme('spacing.16');
  top: theme('spacing.16');
  transform: translateX(calc(-100% - 1px));
  transition-duration: 0.35s;
  transition-property: transform;
  // transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
  transition-timing-function: theme(
    'transitionTimingFunction.ease-in-out-material-sharp'
  );

  @screen lg {
    top: theme('spacing.24');
  }
}

.header_mobile_aside--open {
  transform: translateX(0);
  transition-delay: 0s;

  & .header_mobile_aside_group {
    transform: translateX(0);
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
  outline: none;
}

.bookmark-button {
  border-radius: 0 9999px 9999px 0;
  box-shadow: 4px 2px 4px rgba(0, 0, 0, 0.101562);
  right: 0;
  top: 1rem;
  transform: translateX(100%);
}

.inner-button {
  border-radius: 100%;
  box-shadow: 4px 2px 4px rgba(0, 0, 0, 0.101562);
  right: 1rem;
  top: 1rem;
}
</style>
