<template>
  <section id="subscribe-to-newsletter">
    <div>
      <h3 class="font-semibold light:text-gray-400 dark:text-cloud-light text-lg">{{ $t('homepage.newsletter.title') }}</h3>
      <p class="mt-2 text-base text-gray-500 dark:text-secondary-surface">{{ $t('homepage.newsletter.description') }}</p>
    </div>
    <div class="relative">
      <InputGroupButton class="justify-end" v-model="email" :placeholder="$t('homepage.newsletter.form.email')" @submit="subscribe">{{ pending ? $t('homepage.newsletter.form.subscribing') : $t('homepage.newsletter.form.subscribe') }}</InputGroupButton>
      <p v-if="subscribed" class="pt-1 text-green-400">
        {{ $t('homepage.newsletter.form.subscribed_messages.pre') }}
        {{ subscribed }}
      </p>
      <p v-else-if="error" class="absolute text-sm pt-1 text-yellow-500">{{ error }}</p>
    </div>
  </section>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { useNewsletter } from '~/plugins/composables'

export default defineComponent({
  setup() {
    const { email, error, subscribe, pending, subscribed } = useNewsletter()

    return {
      email,
      pending,
      subscribe,
      subscribed,
      error
    }
  }
})
</script>
