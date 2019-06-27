<template>
  <div>
    <nui-hero>
      <nui-container>
        <h1>
          Learn
        </h1>
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
import nuiHero from '@/components/nui/commons/Hero'
import nuiContainer from '@/components/nui/commons/Container'

export default {
  components: {
    nuiHero,
    nuiContainer
  }
}
</script>
