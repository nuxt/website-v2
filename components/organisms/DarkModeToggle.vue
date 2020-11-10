<template>
  <div
    class="inline-block border bg-light-elevatedSurface text-light-onSurfacePrimary dark:bg-dark-elevatedSurface dark:text-light-elevatedSurface rounded px-2 text-md font-medium outline-none hover:border-primary-base"
  >
    <div class="flex items-center content-center px-2">
      <div class="-mr-4">
        <span
          class="relative mr-2 overflow-hidden inline-block w-5 h-5 flex items-center justify-center"
        >
          <MoonIcon
            class="w-4 h-4 absolute"
            :class="$colorMode.preference === 'dark' ? 'show' : 'hide'"
          />
          <SystemIcon
            class="w-4 h-4 absolute"
            :class="$colorMode.preference === 'system' ? 'show' : 'hide'"
          />
          <SunIcon
            class="w-4 h-4 absolute"
            :class="$colorMode.preference === 'light' ? 'show' : 'hide'"
          />
        </span>
      </div>
      <template>
        <select
          v-model="mode"
          class="bg-transparent cursor-pointer font-medium h-10 appearance-none focus:outline-none pl-4 pr-8 z-10"
          aria-label="ColorMode"
        >
          <option
            v-for="mode in options"
            :key="mode"
            :value="mode"
            class="dark:text-dark-surface capitalize"
          >
            {{ mode }}
          </option>
        </select>
        <CaretDownIcon class="-ml-4" />
      </template>
    </div>
  </div>
</template>

<script>
import CaretDownIcon from '~/assets/icons/caret-down.svg?inline'
import SunIcon from '~/assets/icons/sun.svg?inline'
import MoonIcon from '~/assets/icons/moon.svg?inline'
import SystemIcon from '~/assets/icons/system.svg?inline'

export default {
  components: {
    CaretDownIcon,
    SunIcon,
    MoonIcon,
    SystemIcon
  },
  props: [],
  data() {
    return {
      options: ['system', 'light', 'dark'],
      icons: {
        system: 'SystemIcon',
        light: 'SunIcon',
        dark: 'MoonIcon'
      }
    }
  },
  computed: {
    icon () {
      return this.icons[this.mode]
    },
    mode: {
      get () {
        return this.$colorMode.preference
      },
      set (value) {
        this.$colorMode.preference = value
      }
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  outline: none;
}

.show {
  animation: show-icon 300ms forwards;
}

.hide {
  animation: hide-icon 300ms forwards;
}

@keyframes show-icon {
  from {
    opacity: 0;
    transform: scaleY(0);
    // transform: translate3d(-100%, 10px, 0) rotate(-180deg) scale3d(0.5, 0.5, 0.5);
  }

  to {
    opacity: 1;
    transform: scaleY(1);
    // transform: translate3d(0, 0, 0) rotate(0) scale3d(1, 1, 1);
  }
}

@keyframes hide-icon {
  from {
    opacity: 1;
    transform: scaleY(1);
    // transform: translate3d(0, 0, 0) rotate(0) scale3d(1, 1, 1);
  }

  to {
    opacity: 0;
    transform: scaleY(0);
    // transform:  translate3d(100%, 10px, 0) rotate(180deg) scale3d(0.5, 0.5, 0.5);
  }
}

.from-bottom-to-bottom-enter-active {
  opacity: 1;
  transition: opacity 100ms, transform 100ms cubic-bezier(0.4, 0, 0.2, 1);
}

.from-bottom-to-bottom-leave-active {
  opacity: 1;
  transition: opacity 100ms, transform 100ms cubic-bezier(0.4, 0, 0.2, 1);
}

.from-bottom-to-bottom-enter {
  opacity: 0;
  transform: scaleY(0);
}

.from-bottom-to-bottom-leave-active {
  opacity: 0;
  transform: scaleY(0);
}
</style>
