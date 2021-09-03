<template>
  <form @submit.prevent="onSubmit" class="mt-4 ml-4">
    <h3 class="text-xl font-medium">
      {{ title }}
    </h3>
    <ul class="flex flex-col space-y-4">
      <li>
        <Markdown use="step-1" unwrap="p" />
        <div class="w-full md:w-2/3 lg:w-1/3 xl:w-1/4 mt-2 pl-10 md:pl-0 md:ml-10 lg:pr-5 xl:pr-0">
          <NuxtSelectNative
            v-model="status"
            :options="statusList"
            select-class="w-full pl-4 py-2 border rounded bg-none dark:bg-transparent light:bg-white focus:outline-none light:focus:ring-black dark:focus:ring-white light:focus:border-gray-400 dark:focus:border-secondary-light sm:text-sm"
          />
        </div>
      </li>
      <li>
        <Markdown use="step-2" unwrap="p" />
        <div class="w-full md:w-2/3 lg:w-1/3 xl:w-1/4 mt-2 lg:pr-5 xl:pr-0 pl-10 md:pl-0 md:ml-10">
          <NuxtTextInput
            v-model="company"
            :placeholder="placeholder.company"
            class="w-full p-2 text-sm bg-transparent border rounded outline-none"
          />
        </div>
      </li>
      <li class="xl:mr-4">
        <Markdown use="step-3" unwrap="p" />
        <div class="w-full flex flex-col lg:ml-0 lg:flex-row lg:space-x-2 pl-10 md:pl-0 md:ml-10">
          <NuxtTextInput
            v-model="name"
            :placeholder="placeholder.name"
            class="w-full md:w-2/3 lg:w-1/3 xl:w-1/4 lg:ml-10 my-2 p-2 text-sm bg-transparent border rounded outline-none"
          />
          <NuxtTextInput
            v-model="email"
            :placeholder="placeholder.mail"
            class="w-full md:w-2/3 lg:w-1/3 xl:w-1/4 my-2 p-2 text-sm bg-transparent border rounded outline-none"
          />
          <NuxtTextInput
            v-model="phone"
            :placeholder="placeholder.phone"
            class="w-full md:w-2/3 lg:w-1/3 xl:w-1/4 my-2 p-2 text-sm bg-transparent border rounded outline-none"
          />
        </div>
      </li>
      <li>
        <Markdown use="step-4" unwrap="p" />
        <div class="w-full mt-2 lg:pr-6 xl:pr-0 md:w-2/3 xl:w-2/4 pl-10 md:pl-0 md:ml-10">
          <NuxtTextInput
            v-model="subject"
            :placeholder="placeholder.subject"
            class="w-full p-2 text-sm bg-transparent border rounded outline-none"
          />
        </div>
      </li>
      <li>
        <Markdown use="step-5" unwrap="p" />
        <div class="mt-2 lg:pr-6 xl:pr-0 w-full md:w-2/3 xl:w-2/4 pl-10 md:pl-0 md:ml-10">
          <textarea
            rows='8'
            v-model="message"
            :placeholder="placeholder.message"
            class="mt-2 w-full p-2 text-sm bg-transparent border rounded outline-none"
          />
        </div>
      </li>
    </ul>
    <SectionButton
      :aria-label="buttonText"
      @click.native="send"
      size="md"
      class="mt-4 ml-10 text-gray-800 bg-primary hover:bg-primary-400 focus:bg-primary-400"
      >{{ buttonText }}</SectionButton
    >
  </form>
</template>
<script lang="ts">
import { defineComponent, useContext, onMounted, onBeforeUnmount } from '@nuxtjs/composition-api'
import { useTechnicalSupport } from '~/plugins/technicalSupportForm'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: 'Send us a message'
    },
    statusList: {
      type: Array,
      default: () => [`I'am a company`, `I'am a student`]
    },
    placeholder: {
      type: Object,
      default: {
        company: '',
        name: '',
        mail: '',
        phone: '',
        subject: '',
        message: ''
      }
    },
    buttonText: {
      type: String,
      default: 'Send message'
    }
  },
  setup(props) {
    const { $recaptcha } = useContext()
    const { status, company, name, email, phone, subject, message, send } = useTechnicalSupport()

    onMounted(async () => {
      await $recaptcha.init()
    })

    onBeforeUnmount(() => {
      $recaptcha.destroy()
    })


    return {
      status,
      company,
      name,
      email,
      phone,
      subject,
      message,
      send
    }
  },
})
</script>
