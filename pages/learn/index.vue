<template>
  <div>
    <nui-hero>
      <nui-container class="flex">
        <div class="w-3/4">
          <h1 class="uppercase text-2xl">
            Learn
          </h1>
          <p>
          </p>
        </div>
        <div class="w-1/4">
          <nui-install-icon/>
        </div>
      </nui-container>
    </nui-hero>
    <nui-container class="py-8">
      <ul>
        <li>
          <nuxt-link :to="localePath({ name: 'learn-section-slug', params: { section: 'guide' }})">Guide</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath({ name: 'learn-section-slug', params: { section: 'api' }})">API</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath({ name: 'learn-section-slug', params: { section: 'faq' }})">FAQ</nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('learn-release-notes')">Release Notes</nuxt-link>
        </li>
      </ul>
    </nui-container>
  </div>
</template>

<script>
import nuiHero from '@/components/commons/Hero'
import nuiContainer from '@/components/commons/Container'
import nuiInstallIcon from '@/components/svg/streamline/programming-approve-check'

export default {
  components: {
    nuiHero,
    nuiContainer,
    nuiInstallIcon
  }
}
</script>
