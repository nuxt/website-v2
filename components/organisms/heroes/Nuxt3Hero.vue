<template>
  <div class="overflow-hidden relative mx-auto max-w-8xl">
    <Nuxt3HeroParallax />
    <div class="flex flex-wrap justify-center py-0 section">
      <section
        v-if="!isDatePassed"
        class="flex flex-col justify-start w-full px-4 pt-36 pb-52 md:pt-40 lg:pb-56 lg:pt-48 text-center"
      >
        <div>
          <span class="nuxt-text-highlight">{{ $t('common.currently_version') }}</span>
        </div>
        <h1 class="font-normal font-serif text-display-5 xs:text-display-4 md:text-display-3 2xl:text-display-2 my-4">
          <Markdown use="title" unwrap="p" />
        </h1>
        <h2
          class="
            font-normal
            text-body-base
            xs:text-body-lg
            md:text-body-xl
            2xl:text-body-2xl
            px-8
            sm:px-0
            text-secondary-dark
            dark:text-cloud-lighter
          "
        >
          <Markdown use="description" unwrap="p" />
        </h2>
        <Countdown class="mx-auto my-4" />
        <p class="text-center mt-2 text-secondary-dark dark:text-cloud-lighter">
          <Markdown use="body" unwrap="p" />
        </p>
        <div class="flex flex-col items-center justify-center">
          <InputGroupButton v-model="email" :placeholder="$t('footer.newsletter.form.email')" @submit="subscribe">{{
            pending ? $t('footer.newsletter.form.subscribing') : $t('footer.newsletter.form.subscribe')
          }}</InputGroupButton>
          <p v-if="subscribed" class="mt-2 text-primary">
            {{ $t('footer.newsletter.form.subscribed_messages.pre') }}
            {{ subscribed }}
          </p>
          <p v-else-if="error" class="text-sm mt-2 text-yellow-500">
            {{ error }}
          </p>
        </div>
      </section>
      <section
        v-else
        class="
          d-container-content
          flex flex-col
          justify-start
          w-full
          px-4
          pt-36
          pb-52
          md:pt-40
          lg:pb-56 lg:pt-48
          text-center
        "
      >
        <h1 class="font-normal font-serif text-display-5 xs:text-display-4 md:text-display-3 2xl:text-display-2 my-4">
          Nuxt 3 is out<span class="text-primary">!</span>
        </h1>
        <h2
          class="
            font-normal
            text-body-base
            xs:text-body-lg
            md:text-body-xl
            2xl:text-body-2xl
            px-8
            sm:px-0
            text-secondary-dark
            dark:text-cloud-lighter
          "
        >
          Build you next application with Vue 3 and experience hybrid rendering, powerful data fetching and new
          features. Nuxt 3 is an open source framework making web development simple and powerful.
        </h2>
        <SectionButton
          href="https://v3.nuxtjs.org"
          class="rounded-md bg-primary text-gray-800 hover:bg-primary-300 focus:bg-primary-300 mx-auto mt-8"
          >Get Started</SectionButton
        >
      </section>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'
import { parseISO } from 'date-fns'
import { useNewsletter } from '~/plugins/composables'

export default defineComponent({
  setup() {
    const { email, error, subscribe, pending, subscribed } = useNewsletter()

    const date = ref(parseISO('2021-10-12T14:00:00+02:00'))
    const now = new Date()

    const isDatePassed = date.value.getTime() - now.getTime() < 0

    return {
      isDatePassed,
      email,
      pending,
      subscribe,
      subscribed,
      error
    }
  }
})
</script>
