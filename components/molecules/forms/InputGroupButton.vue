<template>
  <form class="mt-4 sm:flex" @submit.prevent="submit">
    <AppInput :value="value" :placeholder="placeholder" @input="$emit('input', $event)" />
    <AppButton
      type="sumbit"
      extra-class="mt-2 sm:mt-0 sm:ml-2 bg-primary text-gray-800 font-semibold hover:bg-primary-400 focus:bg-primary-300"
      @click="submit"
    >
      <slot />
    </AppButton>
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
