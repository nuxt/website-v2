<template>
  <div>
    <div
      class="h-80"
      :class="{ 'bg-sky-dark': !page.color }"
      :style="page.color ? `background-color: ${page.color}` : ''"
    ></div>

    <div class="d-container-content">
      <div class="relative flex gap-8 -mt-8 pb-8 xl:pb-16">
        <div class="w-32 h-32 p-4 bg-sky-darker rounded-md">
          <img
            :src="`/img/sponsors/sponsors-square/light/${page.icon}`"
            :alt="page.title"
            class="light-img text-white"
          />
          <img :src="`/img/sponsors/sponsors-square/dark/${page.icon}`" :alt="page.title" class="dark-img text-white" />
        </div>
        <div class="flex flex-col justify-end gap-1">
          <h1 class="text-display-4 font-bold">{{ page.title }}</h1>
          <a :href="page.link"><IconExternalLink class="inline w-4 h-4 mr-1" /> {{ websiteDomain }}</a>
        </div>
      </div>

      <div class="flex flex-col-reverse gap-8 xl:gap-12 xl:flex-row xl:justify-between">
        <p class="w-full xl:w-[70%] text-md sm:text-lg">
          <span>{{ fullDescription }}</span>
        </p>

        <div class="w-full xl:w-[30%] flex flex-col p-6 gap-6 bg-sky-darker rounded-md">
          <div v-if="page.location">
            <h2 class="font-semibold text-lg mb-2">{{ $t('sustainability.mvp_detail.location') }}</h2>
            <span class="text-sm text-gray-300">{{ page.location }}</span>
          </div>
          <div v-if="page.services && page.services.length">
            <h2 class="font-semibold text-lg mb-2">{{ $t('sustainability.mvp_detail.services') }}</h2>
            <ul class="flex flex-row flex-wrap gap-3">
              <li
                v-for="(service, index) in page.services"
                :key="index"
                class="text-sm rounded-md bg-sky-dark px-2 py-1"
              >
                {{ service }}
              </li>
            </ul>
          </div>
          <div v-if="page.resources && page.resources.length">
            <h2 class="font-semibold text-lg mb-2">{{ $t('sustainability.mvp_detail.resources') }}</h2>
            <ul>
              <li v-for="(link, index) in page.resources" :key="index">
                <a :href="link.url" class="inline-flex items-center text-sm text-gray-300"
                  ><IconExternalLink class="inline w-4 h-4 mr-1" />
                  {{ link.name }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="flex w-full bg-sky-darker rounded-md mt-16 xl:mt-24 overflow-hidden">
        <div
          class="flex flex-col justify-between w-1/3 p-6"
          :class="{ 'bg-sky-dark': !page.color }"
          :style="page.color ? `background-color: ${page.color}` : ''"
        >
          <div>
            <h2 class="font-semibold text-lg">
              {{ $t('sustainability.mvp_detail.contact_partner', { partner: page.title }) }}
            </h2>
            <span class="block text-gray-100 mt-2">{{
              $t('sustainability.mvp_detail.they_will_get_back_to_you')
            }}</span>
            <Link :href="page.link" to="" blank class="block mt-4">
              <IconExternalLink class="inline w-4 h-4 mr-1" />
              {{ websiteDomain }}
            </Link>
            <Link v-if="page.emailAddress" :to="`mailto:${page.emailAddress}`" blank class="block mt-4">
              <IconEmail class="inline w-4 h-4 mr-1" />
              {{ page.emailAddress }}
            </Link>
            <Link v-if="page.phoneNumber" :to="`tel:${page.phoneNumber}`" blank class="block mt-4">
              <IconPhone class="inline w-4 h-4 mr-1" />
              {{ page.phoneNumber }}
            </Link>
          </div>
          <div class="flex items-center gap-10">
            <Link
              v-if="page.twitter"
              :href="`https://twitter.com/${page.twitter}`"
              to=""
              blank
              aria-label="twitterLink"
            >
              <IconTwitter class="inline w-6 h-6" />
            </Link>
            <Link v-if="page.github" :href="`https://github.com/${page.github}`" to="" blank aria-label="githubLink">
              <IconGitHub class="inline w-6 h-6" />
            </Link>
          </div>
        </div>

        <form class="contact-form w-2/3 h-full grid grid-cols-1 lg:grid-cols-2 p-6 gap-6">
          <div>
            <label class="block">{{ $t('sustainability.mvp_detail.first_name') }}</label>
            <input id="firstName" type="text" />
          </div>
          <div>
            <label class="block">{{ $t('sustainability.mvp_detail.last_name') }}</label>
            <input id="lastName" type="text" />
          </div>
          <div>
            <label class="block">{{ $t('sustainability.mvp_detail.company_name') }}</label>
            <input id="companyName" type="text" />
          </div>
          <div>
            <label class="block">{{ $t('sustainability.mvp_detail.email') }}</label>
            <input id="email" type="text" />
          </div>
          <div class="lg:col-span-full">
            <label class="block">{{ $t('sustainability.mvp_detail.message') }}</label>
            <textarea id="message" rows="3" />
          </div>
          <div class="lg:col-span-full flex justify-end">
            <button submit>{{ $t('sustainability.mvp_detail.submit') }}</button>
          </div>
        </form>
      </div>

      <div class="relative flex items-center justify-center bg-sky-dark rounded-md h-60 mt-16 xl:mt-24">
        <img
          loading="lazy"
          :src="`/img/home/discover/partners/partners-illustration.svg`"
          class="absolute inset-0"
          alt="A landscape image"
        />
        <div class="text-center z-10">
          <span class="block text-5xl font-bold mb-8">{{ $t('sustainability.mvp_detail.join_us') }}</span>
          <ButtonLink size="large">{{ $t('sustainability.mvp_detail.become_partner') }}</ButtonLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    page: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const websiteDomain = computed(() => {
      let domain

      if (props.page.link.includes('//')) {
        domain = props.page.link.split('/')[2]
      } else {
        domain = props.page.link.split('/')[0]
      }

      return domain
    })
    return {
      websiteDomain
    }
  }
})
</script>

<style scoped>
.contact-form {
  & label {
    @apply text-sm mb-1 font-medium;
  }
  & input {
    @apply w-full rounded-md h-10 bg-sky-dark px-3 focus:outline-none border-2 border-transparent focus:border-primary;
  }
  & textarea {
    @apply w-full rounded-md resize-none bg-sky-dark px-3 py-2 focus:outline-none border-2 border-transparent focus:border-primary;
  }
  & button {
    @apply rounded-md text-black text-sm font-medium bg-primary px-4 py-2 focus:outline-none border-2 border-transparent focus:border-black;
  }
}
</style>
