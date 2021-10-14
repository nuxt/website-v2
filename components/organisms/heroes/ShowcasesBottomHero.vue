<template>
  <div class="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
    <AppButton
      href="https://chrome.google.com/webstore/detail/vue-telescope/neaebjphlfplgdhedjdhcnpjkndddbpd"
      extra-class="gap-3 app-button-secondary-color"
      size="large"
    >
      <img loading="lazy" :src="`/img/showcases/chrome.svg`" alt="chrome" class="w-5 h-5" />
      {{ $t('showcases.chrome_extension') }}
    </AppButton>
    <AppButton
      href="https://addons.mozilla.org/en/firefox/addon/vue-telescope/"
      extra-class="gap-3 app-button-secondary-color"
      size="large"
    >
      <img loading="lazy" :src="`/img/showcases/firefox.svg`" alt="firefox" class="w-5 h-5" />
      <span class="font-medium">{{ $t('showcases.firefox_extension') }}</span>
    </AppButton>
  </div>
</template>
