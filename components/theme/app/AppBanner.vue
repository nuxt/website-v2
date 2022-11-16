<template>
  <a
    href="https://nuxt.com/v3"
    class="group flex items-center transition-height delay-200 h-10 bg-primary hover:bg-primary-400"
    tabindex="0"
  >
    <i18n
      tag="p"
      path="banner.format"
      class="text-sky-darkest group-hover:text-black sm:top-1.5 w-full pl-4 sm:pl-0 sm:text-center text-sm"
    >
      <template #nuxt>
        <b>Nuxt 3</b>
      </template>
      <template #here>
        <b>{{ $t('banner.here') }}</b>
      </template>
    </i18n>
  </a>
</template>
