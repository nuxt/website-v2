<template>
  <div class="relative">
    <select
      v-bind="props"
      class="select-none appearance-none"
      :class="[{ 'pointer-events-none opacity-50': disabled }, selectClass]"
      @input="$emit('input', $event.target.value)"
      @focus="handleFocus(true)"
      @blur="handleFocus(false)"
      @mousedown="mousedownHandler"
    >
      <option v-if="placeholder" value="" disabled>
        {{ placeholder }}
      </option>

      <template v-for="(option, i) in normalizedOptions">
        <optgroup v-if="option.options" :key="`${option.value}-${i}`" :label="option.label" :disabled="option.disabled">
          <option
            v-for="(optGroupOption, i2) in option.options"
            :key="`${optGroupOption.value}-${i}-${i2}`"
            :value="optGroupOption.value"
          >
            {{ optGroupOption.text }}
          </option>
        </optgroup>

        <option v-else :key="`${option.value}-${i}`" :value="option.value" :disabled="option.disabled">
          {{ option.text }}
        </option>
      </template>
    </select>

    <div class="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
      <IconChevronBottom class="h-4 w-4 dark:text-secondary light:text-gray-300" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    value: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default: null
    },
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    selectClass: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    let focusedByMouse = false
    let focus = false
    let focusVisible = false

    function normalizeOption(option) {
      if (['string', 'number', 'boolean'].includes(typeof option)) {
        return {
          value: option,
          text: option,
          disabled: false
        }
      }

      return {
        value: option.value,
        text: option.text,
        disabled: option.disabled
      }
    }

    function normalizeOptionGroup(optgroup) {
      return {
        label: optgroup.label,
        disabled: optgroup.disabled,
        options: optgroup.options.map(option => this.normalizeOption(option)).filter(Boolean)
      }
    }

    function mousedownHandler() {
      focusedByMouse = true
    }

    function handleFocus(state) {
      if (state) {
        if (focusedByMouse) {
          focus = true
          focusVisible = false
        } else {
          focus = true
          focusVisible = true
        }
      } else {
        focus = false
        focusVisible = false
        focusedByMouse = false
      }
    }

    return {
      focusedByMouse,
      focus,
      focusVisible,
      normalizeOption,
      normalizeOptionGroup,
      mousedownHandler,
      handleFocus
    }
  },
  computed: {
    props() {
      return {
        value: this.value,
        id: this.id,
        name: this.name,
        disabled: this.disabled,
        required: this.required
      }
    },
    normalizedOptions() {
      if (Array.isArray(this.options)) {
        return this.options
          .map(option => (option.options ? this.normalizeOptionGroup(option) : this.normalizeOption(option)))
          .filter(Boolean)
      }

      return []
    }
  }
})
</script>
<style lang="postcss" scoped>
option {
  font: -moz-pull-down-menu; /* fix font - only firefox */
  @apply dark:text-black;
}
</style>
