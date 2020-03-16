<template>
  <button class="relative overflow-hidden px-4 flex bg-gray-200 dark:bg-dark-surface dark:text-dark-onSurfaceSecondary rounded-full h-10 outline-none text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear" @click="setCurrentTheme">
    <!-- bug with transition on svg elements -->
    <!-- https://github.com/vuejs/vue/blob/59868bbe92059c690b6a146aaf1504925455384f/src/transition/transition.js#L375 -->
    <!-- https://github.com/vuejs/vue/issues/2396 -->
    <span class="relative mr-1 overflow-hidden inline-block w-6 h-6 flex items-center justify-center">
      <nui-moon class="w-6 h-6 absolute" :class="$theme.value === 'dark' ? 'show' : 'hide'"/>
      <nui-sun class="w-6 h-6 absolute" :class="$theme.value === 'light' ? 'show' : 'hide'"/>
    </span>
    <transition name="from-bottom-to-bottom" mode="out-in">
      <span v-if="$theme.value === 'dark'" key="dark" class="inline-block font-medium mr-1">Dark</span>
      <span v-else-if="$theme.value === 'light'" key="light" class="inline-block font-medium mr-1">Light</span>
    </transition>
  </button>
</template>

<script>
import nuiSun from '@/components/svg/Sun'
import nuiMoon from '@/components/svg/Moon'

export default {
  components: {
    nuiSun,
    nuiMoon
  },
  props: [],
  data () {
    return {
      //
    }
  },
  methods: {
    setCurrentTheme () {
      this.$theme.set(this.$theme.value === 'dark' ? 'light' : 'dark')
    }
  }
}
</script>

<style lang="scss" scoped>
// .sunset-enter-active {
//   opacity: 1;
//   transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
// }

// .sunset-leave-active {
//   opacity: 1;
//   transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
// }

// .sunset-enter {
//   // opacity: 0;
//   transform: translate3d(-100%, 10px, 0) rotate(-90deg) scale3d(0.5, 0.5, 0.5);
// }

// .sunset-leave-active {
//   // opacity: 0;
//   transform:  translate3d(100%, 10px, 0) rotate(180deg) scale3d(0.5, 0.5, 0.5);
// }

.show {
  animation: show-icon 300ms forwards;
}

.hide {
  animation: hide-icon 300ms forwards;
}

@keyframes show-icon {
  from {
    opacity: 0;
    transform: scaleX(0);
    // transform: translate3d(-100%, 10px, 0) rotate(-180deg) scale3d(0.5, 0.5, 0.5);
  }
  to {
    opacity: 1;
    transform: scaleX(1);
    // transform: translate3d(0, 0, 0) rotate(0) scale3d(1, 1, 1);
  }
}

@keyframes hide-icon {
  from {
    opacity: 1;
    transform: scaleX(1);
    // transform: translate3d(0, 0, 0) rotate(0) scale3d(1, 1, 1);
  }
  to {
    opacity: 0;
    transform: scaleX(0);
    // transform:  translate3d(100%, 10px, 0) rotate(180deg) scale3d(0.5, 0.5, 0.5);
  }
}

.from-bottom-to-bottom-enter-active {
  opacity: 1;
  transition: opacity 100ms, transform 100ms cubic-bezier(0.4, 0, 0.2, 1);
}

.from-bottom-to-bottom-leave-active {
  opacity: 1;
  transition: opacity 100ms,  transform 100ms cubic-bezier(0.4, 0, 0.2, 1);
}

.from-bottom-to-bottom-enter {
  opacity: 0;
  transform: translate3d(0, 3px, 0) scaleY(0);
}

.from-bottom-to-bottom-leave-active {
  opacity: 0;
  transform:  translate3d(0, 3px, 0) scaleY(0);
}
</style>
