<template>
  <textarea
    ref="textarea"
    :value="value"
    :rows="rows"
    :required="required"
    :disabled="disabled"
    :placeholder="placeholder"
    :autocomplete="autocomplete"
    :class="textareaClass"
    @input="updateValue($event.target.value)"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    placeholder: {
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
    rows: {
      type: [String, Number],
      default: 3
    },
    autocomplete: {
      type: String,
      default: null
    },
    appearance: {
      type: String,
      default: 'default',
      validator(value) {
        return ['default', 'transparent'].includes(value)
      }
    },
    size: {
      type: String,
      default: 'md',
      validator(value) {
        return ['', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl'].includes(value)
      }
    },
    baseClass: {
      type: String,
      default: 'p-2 w-full rounded-md appearance-none'
    },
    customClass: {
      type: String,
      default: null
    },
    noResize: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    sizeClass() {
      return {
        xxs: 'text-xs',
        xs: 'text-xs',
        sm: 'text-sm leading-4',
        md: 'text-sm',
        lg: 'text-base',
        xl: 'text-base'
      }[this.size]
    },
    paddingClass() {
      return {
        xxs: 'px-1 py-0.5',
        xs: 'px-2.5 py-1.5',
        sm: 'px-3 py-2',
        md: 'px-4 py-2',
        lg: 'px-4 py-2',
        xl: 'px-6 py-3'
      }[this.size]
    },
    appearanceClass() {
      return {
        default:
          'light:text-gray-500 dark:text-white dark:bg-transparent light:bg-white border light:border-gray-200 dark:border-secondary-dark focus:outline-none light:focus:border-gray-400 dark:focus:border-secondary-light',
        transparent: 'bg-transparent border-none outline-none'
      }[this.appearance]
    },
    resizeClass() {
      return {
        true: 'resize-none',
        false: ''
      }[this.noResize]
    },
    textareaClass() {
      return [
        this.baseClass,
        this.customClass,
        this.sizeClass,
        this.paddingClass,
        this.resizeClass,
        this.appearanceClass
      ].join(' ')
    }
  },
  watch: {
    value() {
      this.resizeTextarea()
    }
  },
  mounted() {
    this.resizeTextarea()
  },
  methods: {
    resizeTextarea() {
      this.$nextTick(() => {
        const textarea = this.$refs.textarea
        textarea.style.height = 'auto'
        textarea.style.height = `${textarea.scrollHeight}px`
      })
    },
    updateValue(value) {
      this.$emit('input', value)
    }
  }
}
</script>
