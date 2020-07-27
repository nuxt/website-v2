<template>
  <AppContainer class="px-4">
    <section
      id="subscribe-to-newsletter"
      class="py-8 px-3 -mx-4 lg:mx-0 text-center rounded-t-lg"
    >
      <!-- why title i18n -->
      <i18n
        path="homepage.newsletter.title"
        tag="h2"
        class="text-3xl font-medium text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary mb-2 transition-colors duration-300 ease-linear"
      >
        <template v-slot:nuxt>
          <AppTitle />
        </template>
      </i18n>
      <p
        class="mb-6 text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary transition-colors duration-300 ease-linear"
      >
        {{ $t('homepage.newsletter.description') }}
      </p>
      <ClientOnly>
        <form
          class="flex flex-row justify-center mb-2"
          data-cy="newsletter"
          @submit.prevent="subscribe"
        >
          <div>
            <label for="news-email" class="hidden">
              {{ $t('homepage.newsletter.form.email') }}
            </label>
            <input
              id="news-email"
              v-model="email"
              type="email"
              required
              :placeholder="$t('homepage.newsletter.form.email')"
              class="border border-r-0 w-48 md:w-64 bg-light-elevatedSurface text-light-onSurfacePrimary rounded py-3 px-4 font-medium rounded-r-none outline-none focus:border-primary-base"
              aria-label="Newsletter"
            />
          </div>
          <input
            type="submit"
            :value="
              pending
                ? $t('homepage.newsletter.form.subscribing')
                : $t('homepage.newsletter.form.subscribe')
            "
            name="subscribe"
            class="cursor-pointer inline-block bg-primary-base text-white font-medium text-sm px-4 py-2 shadow uppercase rounded rounded-l-none hover:bg-primary-light hover:shadow-md text-base"
            :class="[pending ? 'bg-nuxt-green' : '']"
          />
        </form>
        <p v-if="subscribed" class="text-nuxt-green py-1">
          {{ $t('homepage.newsletter.form.subscribed_messages.pre') }}
          {{ subscribedEmail }}
          {{ $t('homepage.newsletter.form.subscribed_messages.post') }}
        </p>
        <p v-if="error" class="text-red-600 py-1">
          {{ error }}
        </p>
      </ClientOnly>
    </section>
  </AppContainer>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      subscribedEmail: '',
      pending: false,
      subscribed: false,
      error: null
    }
  },
  methods: {
    async subscribe() {
      if (!this.email.trim()) {
        return
      }
      this.error = null
      this.pending = true
      try {
        await new Promise(resolve => setTimeout(resolve, 400))
        await this.$http.$post(`${process.env.NUXT_API}/newsletter`, {
          email: this.email
        })
        this.subscribedEmail = this.email
        this.subscribed = true
        this.pending = false
      } catch (err) {
        this.pending = false
        if (err.response) {
          const { code } = await err.response.json()
          if (code === 'member-exists') {
            this.error = 'You are already registered.'
            return
          }
        }
        this.error = 'Unknown error'
      }
    }
  }
}
</script>
