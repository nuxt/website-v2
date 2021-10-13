<template>
  <div class="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
    <AppLink
      href="https://chrome.google.com/webstore/detail/vue-telescope/neaebjphlfplgdhedjdhcnpjkndddbpd"
      class="inline-flex items-center gap-3 h-12 bg-gray-500 bg-opacity-10 px-4 hover:bg-opacity-20 rounded-md"
    >
      <img loading="lazy" :src="`/img/showcases/chrome.svg`" alt="chrome" class="w-5 h-5" />
      <span class="font-medium">{{ $t('showcases.chrome_extension') }}</span>
    </AppLink>
    <AppLink
      href="https://addons.mozilla.org/en/firefox/addon/vue-telescope/"
      class="inline-flex items-center gap-3 h-12 bg-gray-500 bg-opacity-10 px-4 hover:bg-opacity-20 rounded-md"
    >
      <img loading="lazy" :src="`/img/showcases/firefox.svg`" alt="firefox" class="w-5 h-5" />
      <span class="font-medium">{{ $t('showcases.firefox_extension') }}</span>
    </AppLink>
  </div>
</template>
