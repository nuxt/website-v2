<template>
  <form class="mt-4 sm:flex lg:mt-0" @submit.prevent="submit">
    <NuxtTextInput
      :value="value"
      :placeholder="placeholder"
      class="
        white:placeholder-gray-400
        dark:placeholder-secondary
        appearance-none
        min-w-0
        sm:max-w-xs
        block
        w-full
        bg-none
        dark:bg-transparent
        light:bg-white
        border
        light:border-gray-200
        dark:border-secondary-dark
        rounded-md
        py-2
        pl-3
        pr-10
        text-base
        light:text-gray-500
        dark:text-white
        focus:outline-none
        light:focus:ring-black
        dark:focus:ring-white
        light:focus:border-gray-400
        dark:focus:border-secondary-light
        sm:text-sm
      "
      @input="$emit('input', $event)"
    />

      <SectionButton
        type="submit"
        size="md"
        aria-label="Submit"
        class="mt-2 sm:mt-0 sm:ml-2 bg-primary text-gray-800 font-semibold hover:bg-green-300 focus:bg-green-300"
        @click="submit"
      >
        <slot />
      </SectionButton>

  </form>
</template>

<script>
import { computed, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    value: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: 'send'
    },
    done: {
      type: Boolean,
      default: false
    },
    doneIcon: {
      type: String,
      default: 'check'
    },
    doneText: {
      type: String,
      default: 'Done'
    },
    loading: {
      type: Boolean,
      default: false
    },
    loadingIcon: {
      type: String,
      default: 'spinner'
    },
    loadingText: {
      type: String,
      default: 'Loading'
    }
  },
  setup(props, { emit }) {
    const submit = () => {
      emit('submit', props.value)
    }

    const currentIcon = computed(() => {
      if (props.loading) {
        return props.loadingIcon
      }

      if (props.done) {
        return props.doneIcon
      }

      return props.icon
    })

    const currentText = computed(() => {
      if (props.loading) {
        return props.loadingText
      }

      if (props.done) {
        return props.doneText
      }

      return props.submitText
    })

    return {
      submit,
      currentIcon,
      currentText
    }
  }
})
</script>
