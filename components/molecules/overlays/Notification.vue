<template>
  <transition
    appear
    enter-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
    enter-active-class="transition duration-300 ease-out transform"
    enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
    leave-class="opacity-100"
    leave-active-class="transition duration-100 ease-in"
    leave-to-class="opacity-0"
  >
    <div
      class="z-50 w-full bg-white rounded-lg shadow-lg pointer-events-auto dark:bg-sky-darkest"
      @mouseover="onMouseover"
      @mouseout="onMouseout"
    >
      <div class="relative overflow-hidden rounded-lg ring-1 ring-gray-200 dark:ring-sky-dark">
        <div class="p-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <Component :is="iconName" class="w-6 h-6" :class="iconColorClass" />
            </div>
            <div class="ml-3 w-0 flex-1 pt-0.5">
              <p class="text-sm font-medium leading-5 text-tw-gray-900">{{ title }}</p>
              <p v-if="description" class="mt-1 text-sm leading-5 text-tw-gray-500">{{ description }}</p>
              <AppButton v-if="undo" class="mt-2" @click.native.stop="cancel">
                Undo

                <div class="inline-flex items-center rounded bg-tw-gray-200 ml-1.5">
                  <span class="w-full px-1 text-center text-tw-gray-600 text-xxs"> Z </span>
                </div>
              </AppButton>
            </div>
            <div class="flex-shrink-0 ml-4">
              <button
                class="
                  transition
                  duration-150
                  ease-in-out
                  text-tw-gray-400
                  focus:outline-none
                  hover:text-tw-gray-500
                  focus:text-tw-gray-500
                "
                @click.stop="close"
              >
                <span class="sr-only">Close</span>
                <IconClose class="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        <div v-if="timeout" class="absolute bottom-0 left-0 right-0 h-1">
          <div class="h-1" :class="progressBarColorClass" :style="progressBarStyle" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, onBeforeUnmount, ref, useContext } from '@nuxtjs/composition-api'

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
    undo: {
      type: Function,
      default: null
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
      if (timer) {
        timer.value.stop()
        ticker.value.stop()
      }
    })

    // methods
    function onMouseover() {
      if (timer) {
        timer.value.pause()
        ticker.value.stop()
      }
    }

    function onMouseout() {
      if (timer) {
        timer.value.resume()
        ticker.value.start()
      }
    }

    function cancel() {
      if (timer) {
        timer.value.stop()
        ticker.value.stop()
      }
      if (props.undo) {
        this.undo()
      }
      emit('close')
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
      cancel,
      close
    }
  }
})
</script>
