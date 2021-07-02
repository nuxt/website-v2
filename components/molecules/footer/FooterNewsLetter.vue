<template>
  <section id="subscribe-to-newsletter">
    <div>
      <h3 class="font-semibold light:text-gray-400 dark:text-cloud-light text-lg">{{ $t('footer.newsletter.title') }}</h3>
      <p class="mt-2 text-base text-gray-500 dark:text-secondary-surface">{{ $t('footer.newsletter.description') }}</p>
    </div>
    <div class="relative">
      <InputGroupButton class="justify-end" v-model="email" :placeholder="$t('footer.newsletter.form.email')" @submit="subscribe">{{ pending ? $t('footer.newsletter.form.subscribing') : $t('footer.newsletter.form.subscribe') }}</InputGroupButton>
      <p v-if="subscribed" class="pt-1 text-green-400">
        {{ $t('footer.newsletter.form.subscribed_messages.pre') }}
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
