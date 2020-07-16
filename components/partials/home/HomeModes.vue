<template>
  <div class="bg-light-surface dark:bg-dark-surface">
    <div class="container mx-auto px-4 pb-12">
      <section class="rounded py-6 sm:p-6">
        <h1
          class="text-3xl uppercase text-center pt-10 font-medium"
          v-html="$t('homepage.modes.title')"
        />
        <div class="flex flex-wrap">
          <div class="lg:w-1/2 p-4 lg:p-8">
            <FireIcon
              class="text-nuxt-green dark:text-nuxt-lightgreen mx-auto my-8 w-32"
            />
            <h4 class="text-center uppercase text-2xl pt-8 pb-4 font-medium">
              {{ $t('homepage.modes.ssr.title') }}
            </h4>
            <p
              class="leading-loose text-left text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary"
              v-html="$t('homepage.modes.ssr.description')"
            />
          </div>
          <div class="lg:w-1/2 p-4 lg:p-8">
            <SnowIcon class="mx-auto my-8 w-32" />
            <h4 class="text-center uppercase text-2xl pt-8 pb-4 font-medium">
              {{ $t('homepage.modes.ssg.title') }}
            </h4>
            <p
              class="leading-loose text-left text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary"
              v-html="$t('homepage.modes.ssg.description')"
            />
          </div>
        </div>
        <div class="px-4 lg:p-8">
          <h4 class="uppercase text-2xl pt-8 pb-4 font-medium">
            {{ $t('homepage.modes.spa.title') }}
          </h4>
          <p
            class="leading-loose text-left text-light-onSurfaceSecondary dark:text-dark-onSurfaceSecondary"
            v-html="$t('homepage.modes.spa.description')"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  import SnowIcon from '~/assets/icons/snow.svg?inline'
  import FireIcon from '~/assets/icons/fire.svg?inline'

  export default {
    components: {
      SnowIcon,
      FireIcon
    }
  }
</script>
