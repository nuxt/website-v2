<template>
  <div
    class="notification-container"
    :class="isHome ? 'ring-sky-dark bg-sky-darkest' : 'ring-gray-200 dark:ring-sky-dark bg-white dark:bg-sky-darkest'"
    @mouseover="onMouseover"
    @mouseout="onMouseout"
  >
    <div class="p-4 flex">
      <Component :is="iconName" class="w-6 h-6" :class="iconColorClass" />
      <div class="ml-3 flex-1 pt-0.5">
        <p class="text-sm font-medium leading-5" :class="isHome ? 'text-white' : 'text-sky-black dark:text-white'">
          {{ title }}
        </p>
        <p
          v-if="description"
          class="mt-1 text-sm leading-5"
          :class="isHome ? 'text-gray-400' : 'text-gray-600 dark:text-gray-400'"
        >
          {{ description }}
        </p>
      </div>
      <button
        class="ml-4 self-start focus:outline-none hover:text-gray-500 focus:text-gray-500"
        :class="isHome ? 'text-gray-400' : 'text-gray-600 dark:text-gray-400'"
        @click.stop="close"
      >
        <IconClose class="w-5 h-5" />
      </button>
    </div>
    <div v-if="timeout" class="absolute bottom-0 left-0 right-0">
      <div class="h-1" :class="progressBarColorClass" :style="progressBarStyle" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, onBeforeUnmount, ref, useContext } from '@nuxtjs/composition-api'
import { useNav } from '~/plugins/nav'

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true,
      default: 'info',
      validator(value: any) {
        return ['info', 'success', 'error', 'warning'].includes(value)
      }
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    timeout: {
      type: Number,
      default: 5000
    },
    callback: {
      type: Function,
      default: null
    }
  },
  setup(props, { emit }) {
    const timer = ref(null)
    const ticker = ref(null)
    const remainingTime = ref(props.timeout)
    const { $timer, $ticker } = useContext()
    const { isHome } = useNav()

    // computed
    const iconName = computed(() => {
      return (
        props.icon ||
        {
          warning: 'IconAlertWarning',
          info: 'IconAlertInfo',
          success: 'IconAlertSuccess',
          error: 'IconAlertDanger'
        }[props.type]
      )
    })

    const iconColorClass = computed(() => {
      return (
        {
          warning: 'text-orange-400',
          info: 'text-blue-400',
          success: 'text-green-400',
          error: 'text-red-400'
        }[props.type] || 'text-gray-400'
      )
    })

    const progressBarColorClass = computed(() => {
      return (
        {
          warning: 'bg-orange-400',
          info: 'bg-blue-400',
          success: 'bg-green-400',
          error: 'bg-red-400'
        }[props.type] || 'bg-gray-400'
      )
    })

    const progressBarStyle = computed(() => {
      const remainingPercent = (remainingTime.value / props.timeout) * 100
      return { width: `${remainingPercent}%` }
    })

    // mounted
    onMounted(() => {
      if (!$timer) {
        return
      }
      if (props.timeout) {
        timer.value = new $timer(() => {
          close()
          ticker?.value.stop()
        }, props.timeout)
        ticker.value = new $ticker(() => {
          remainingTime.value -= 10
        }, 10)
      }
    })
    // before unmount
    onBeforeUnmount(() => {
      if (timer.value) {
        timer.value.stop()
        ticker.value.stop()
      }
    })

    // methods
    function onMouseover() {
      if (timer.value) {
        timer.value.pause()
        ticker.value.stop()
      }
    }

    function onMouseout() {
      if (timer.value) {
        timer.value.resume()
        ticker.value.start()
      }
    }

    function close() {
      if (props.callback) {
        this.callback()
      }
      emit('close')
    }

    return {
      timer,
      ticker,
      iconName,
      iconColorClass,
      progressBarColorClass,
      progressBarStyle,
      onMouseover,
      onMouseout,
      close,
      isHome
    }
  }
})
</script>
<style lang="postcss" scoped>
.notification-container {
  @apply z-50 w-full relative overflow-hidden pointer-events-auto shadow-lg rounded-lg ring-1;
  animation: transition-opacity 0.5s ease-in-out;
}

@keyframes transition-opacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
