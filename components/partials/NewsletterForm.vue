<template>
  <nui-container class="px-4 mt-16">
    <section class="bg-gray-100 py-8 px-3 -mx-4 lg:mx-0 text-center rounded-t-lg">
      <h2 class="text-3xl text-nuxt-gray mb-2" v-html="headerWordings.attrs.title" />
      <p class="mb-6 text-gray-700" v-html="headerWordings.body" />
      <client-only>
        <form @submit.prevent="subscribe">
          <div>
            <label for="news-email" class="hidden">{{ formWordings.email }}</label>
            <input id="news-email" v-model="email" type="email" required :placeholder="formWordings.email" class="border border-r-0 w-48 md:w-64 rounded py-2 px-2 rounded-r-none outline-none focus:border-nuxt-lightgreen">
          </div>
          <input type="submit" :value="pending ? formWordings.subscribing : formWordings.subscribe" name="subscribe" class="cursor-pointer inline-block bg-nuxt-lightgreen text-white font-medium text-sm px-4 py-2 shadow uppercase rounded rounded-l-none hover:bg-nuxt-green hover:shadow-md text-base" :class="[pending ? 'bg-nuxt-green': '']">
        </form>
        <p v-if="subscribed" class="text-nuxt-green py-1">{{ formWordings.subscribed_messages.pre }} {{ subscribedEmail }} {{ formWordings.subscribed_messages.post }}</p>
        <p v-if="error" class="text-red-600 py-1">{{ error }}</p>
      </client-only>
    </section>
  </nui-container>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      subscribedEmail: '',
      pending: false,
      subscribed: false,
      error: null,
      headerWordings: this.$store.state.homepage.newsletter_form,
      formWordings: this.$store.state.lang.homepage.newsletter_form
    }
  },
  methods: {
    async subscribe () {
      if (!this.email.trim()) {
        return
      }
      this.error = null
      this.pending = true
      try {
        await new Promise(resolve => setTimeout(resolve, 400))
        await this.$http.$post(`${process.env.NUXT_API}/newsletter`, { email: this.email })
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
        this.error = 'Unkown error'
      }
    }
  }
}
</script>

<style scoped>
form {
  @apply flex flex-row justify-center mb-2;
}
</style>
