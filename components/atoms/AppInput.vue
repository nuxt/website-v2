<template>
  <input
    :value="value"
    :class="[
      baseClass,
      appearanceClass,
      { 'pointer-events-none opacity-50': disabled, 'ring-2 ring-primary': focusVisible }
    ]"
    :required="required"
    @input="$emit('input', $event.target.value)"
    @focus="handleFocus(true)"
    @blur="handleFocus(false)"
    @mousedown="mousedownHandler"
  />
</template>

<script>
import { defineComponent, computed, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    value: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    appearance: {
      type: String,
      default: 'default',
      validator(value) {
        return ['default', 'transparent'].includes(value)
      }
    },
    baseClass: {
      type: String,
      default: 'p-2 w-full rounded-md appearance-none'
    }
  },
  setup(props) {
    const focusedByMouse = ref(false)
    const focus = ref(false)
    const focusVisible = ref(false)

    const appearanceClass = computed(() => {
      return {
        default:
          'light:text-gray-500 dark:text-white dark:bg-transparent light:bg-white border light:border-gray-200 dark:border-secondary-dark focus:outline-none light:focus:border-gray-400 dark:focus:border-secondary-light',
        transparent: 'bg-transparent border-none outline-none'
      }[props.appearance]
    })

    function mousedownHandler() {
      focusedByMouse.value = true
    }

    function handleFocus(state) {
      if (state) {
        if (focusedByMouse.value) {
          focus.value = true
          focusVisible.value = false
        } else {
          focus.value = true
          focusVisible.value = true
        }
      } else {
        focus.value = false
        focusVisible.value = false
        focusedByMouse.value = false
      }
    }

    return {
      focusedByMouse,
      focus,
      focusVisible,
      mousedownHandler,
      handleFocus,
      appearanceClass
    }
  }
})
</script>
